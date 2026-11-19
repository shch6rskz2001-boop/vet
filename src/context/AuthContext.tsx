'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export interface User {
  name: string;
  email: string;
  phone: string;
  city: string;
}

interface StoredUser extends User {
  passwordHash: string;
}

export interface OrderLine {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export interface Order {
  id: string;
  date: string;
  lines: OrderLine[];
  total: number;
  delivery: string;
}

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface AuthContextValue {
  user: User | null;
  orders: Order[];
  ready: boolean;
  register: (data: RegisterData) => Promise<string | null>;
  login: (email: string, password: string) => Promise<string | null>;
  logout: () => void;
  updateProfile: (data: Pick<User, 'name' | 'phone' | 'city'>) => void;
  addOrder: (lines: OrderLine[], total: number, delivery: string) => void;
}

const USERS_KEY = 'vitaminka-users';
const SESSION_KEY = 'vitaminka-session';
const ORDERS_KEY = 'vitaminka-orders';

const AuthContext = createContext<AuthContextValue | null>(null);

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    return;
  }
}

async function hashPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(password);
  const buffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function toUser(stored: StoredUser): User {
  return {
    name: stored.name,
    email: stored.email,
    phone: stored.phone,
    city: stored.city,
  };
}

function loadOrders(email: string): Order[] {
  const all = read<Record<string, Order[]>>(ORDERS_KEY, {});
  return all[email] ?? [];
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const email = read<string | null>(SESSION_KEY, null);
    if (email) {
      const users = read<StoredUser[]>(USERS_KEY, []);
      const found = users.find((u) => u.email === email);
      if (found) {
        setUser(toUser(found));
        setOrders(loadOrders(found.email));
      }
    }
    setReady(true);
  }, []);

  const register = useCallback(async (data: RegisterData) => {
    const email = data.email.trim().toLowerCase();
    const users = read<StoredUser[]>(USERS_KEY, []);
    if (users.some((u) => u.email === email)) {
      return 'Користувач з таким email уже існує';
    }
    const stored: StoredUser = {
      name: data.name.trim(),
      email,
      phone: data.phone,
      city: '',
      passwordHash: await hashPassword(data.password),
    };
    write(USERS_KEY, [...users, stored]);
    write(SESSION_KEY, email);
    setUser(toUser(stored));
    setOrders([]);
    return null;
  }, []);

  const login = useCallback(async (emailInput: string, password: string) => {
    const email = emailInput.trim().toLowerCase();
    const users = read<StoredUser[]>(USERS_KEY, []);
    const found = users.find((u) => u.email === email);
    const hash = await hashPassword(password);
    if (!found || found.passwordHash !== hash) {
      return 'Невірний email або пароль';
    }
    write(SESSION_KEY, email);
    setUser(toUser(found));
    setOrders(loadOrders(email));
    return null;
  }, []);

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch {
      setUser(null);
    }
    setUser(null);
    setOrders([]);
  }, []);

  const updateProfile = useCallback(
    (data: Pick<User, 'name' | 'phone' | 'city'>) => {
      if (!user) return;
      const users = read<StoredUser[]>(USERS_KEY, []);
      const next = users.map((u) =>
        u.email === user.email ? { ...u, ...data } : u
      );
      write(USERS_KEY, next);
      setUser({ ...user, ...data });
    },
    [user]
  );

  const addOrder = useCallback(
    (lines: OrderLine[], total: number, delivery: string) => {
      if (!user) return;
      const order: Order = {
        id: Date.now().toString(36).toUpperCase(),
        date: new Date().toISOString(),
        lines,
        total,
        delivery,
      };
      const all = read<Record<string, Order[]>>(ORDERS_KEY, {});
      const next = [order, ...(all[user.email] ?? [])];
      write(ORDERS_KEY, { ...all, [user.email]: next });
      setOrders(next);
    },
    [user]
  );

  const value = useMemo(
    () => ({
      user,
      orders,
      ready,
      register,
      login,
      logout,
      updateProfile,
      addOrder,
    }),
    [user, orders, ready, register, login, logout, updateProfile, addOrder]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}
