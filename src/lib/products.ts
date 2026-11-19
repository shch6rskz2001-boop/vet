export type CategorySlug =
  | 'vet-drugs'
  | 'accessories'
  | 'food'
  | 'toys'
  | 'rodent-bird-food'
  | 'hygiene'
  | 'shampoos'
  | 'canned';

export interface Category {
  slug: CategorySlug;
  label: string;
  emoji: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategorySlug;
  brand: string;
  price: number;
  emoji: string;
  animals: string;
  description: string;
  prescription?: boolean;
}

export const categories: Category[] = [
  { slug: 'vet-drugs', label: 'Ветеринарні препарати', emoji: '💊' },
  { slug: 'accessories', label: 'Амуніція', emoji: '🦮' },
  { slug: 'food', label: 'Корми', emoji: '🥣' },
  { slug: 'toys', label: 'Іграшки', emoji: '🧸' },
  { slug: 'rodent-bird-food', label: 'Корми для гризунів і папуг', emoji: '🦜' },
  { slug: 'hygiene', label: 'Засоби гігієни', emoji: '🧼' },
  { slug: 'shampoos', label: 'Шампуні', emoji: '🛁' },
  { slug: 'canned', label: 'Консерви', emoji: '🥫' },
];

export const products: Product[] = [
  {
    id: 'drops-flea-tick',
    name: 'Краплі від бліх і кліщів',
    category: 'vet-drugs',
    brand: 'VetCare',
    price: 389,
    emoji: '💧',
    animals: 'Собаки, коти',
    description:
      'Зовнішній протипаразитарний засіб для щомісячної профілактики. Дозування підбирається за вагою тварини згідно з інструкцією виробника.',
  },
  {
    id: 'drops-unicum-cat-s',
    name: 'Краплі Унікум для котів, до 4 кг',
    category: 'vet-drugs',
    brand: 'Унікум',
    price: 95,
    emoji: '💧',
    animals: 'Коти',
    description:
      'Зовнішній протипаразитарний засіб у вигляді крапель на холку. Дозування залежить від ваги тварини, застосовувати згідно з інструкцією виробника.',
  },
  {
    id: 'drops-unicum-cat-m',
    name: 'Краплі Унікум для котів, 4–8 кг',
    category: 'vet-drugs',
    brand: 'Унікум',
    price: 105,
    emoji: '💧',
    animals: 'Коти',
    description:
      'Зовнішній протипаразитарний засіб у вигляді крапель на холку. Дозування залежить від ваги тварини, застосовувати згідно з інструкцією виробника.',
  },
  {
    id: 'drops-megastop-cat-s',
    name: 'Краплі Мега Стоп для котів, до 4 кг',
    category: 'vet-drugs',
    brand: 'Мега Стоп',
    price: 85,
    emoji: '💧',
    animals: 'Коти',
    description:
      'Зовнішній протипаразитарний засіб у вигляді крапель на холку. Дозування залежить від ваги тварини, застосовувати згідно з інструкцією виробника.',
  },
  {
    id: 'drops-megastop-cat-m',
    name: 'Краплі Мега Стоп для котів, 4–8 кг',
    category: 'vet-drugs',
    brand: 'Мега Стоп',
    price: 95,
    emoji: '💧',
    animals: 'Коти',
    description:
      'Зовнішній протипаразитарний засіб у вигляді крапель на холку. Дозування залежить від ваги тварини, застосовувати згідно з інструкцією виробника.',
  },
  {
    id: 'drops-panacea-cat-s',
    name: 'Краплі Панацея для котів, до 4 кг',
    category: 'vet-drugs',
    brand: 'Панацея',
    price: 90,
    emoji: '💧',
    animals: 'Коти',
    description:
      'Зовнішній протипаразитарний засіб у вигляді крапель на холку. Дозування залежить від ваги тварини, застосовувати згідно з інструкцією виробника.',
  },
  {
    id: 'drops-panacea-cat-m',
    name: 'Краплі Панацея для котів, 4–8 кг',
    category: 'vet-drugs',
    brand: 'Панацея',
    price: 100,
    emoji: '💧',
    animals: 'Коти',
    description:
      'Зовнішній протипаразитарний засіб у вигляді крапель на холку. Дозування залежить від ваги тварини, застосовувати згідно з інструкцією виробника.',
  },
  {
    id: 'dewormer-tablets',
    name: 'Антигельмінтні таблетки',
    category: 'vet-drugs',
    brand: 'VetCare',
    price: 145,
    emoji: '💊',
    animals: 'Собаки, коти',
    description:
      'Комплексний препарат для профілактики та лікування гельмінтозів. Перед застосуванням ознайомтесь з інструкцією та проконсультуйтесь з лікарем.',
    prescription: true,
  },
  {
    id: 'collar-leather',
    name: 'Шкіряний нашийник',
    category: 'accessories',
    brand: 'PawStyle',
    price: 259,
    emoji: '🦮',
    animals: 'Собаки',
    description:
      'М’який шкіряний нашийник з металевою фурнітурою. Регулюється по обхвату шиї, не натирає шерсть.',
  },
  {
    id: 'harness-reflective',
    name: 'Шлейка зі світловідбиваючими вставками',
    category: 'accessories',
    brand: 'PawStyle',
    price: 349,
    emoji: '🎽',
    animals: 'Собаки, коти',
    description:
      'Легка шлейка для прогулянок у темну пору доби. Має зручну ручку та регульовані ремені.',
  },
  {
    id: 'dry-dog-adult',
    name: 'Сухий корм для дорослих собак',
    category: 'food',
    brand: 'NutriPet',
    price: 899,
    emoji: '🐕',
    animals: 'Собаки',
    description:
      'Збалансований корм з куркою та рисом для собак середніх порід. Упаковка 10 кг.',
  },
  {
    id: 'dry-cat-sterilised',
    name: 'Сухий корм для стерилізованих котів',
    category: 'food',
    brand: 'NutriPet',
    price: 549,
    emoji: '🐈',
    animals: 'Коти',
    description:
      'Корм з контрольованим рівнем калорій та підтримкою сечовидільної системи. Упаковка 4 кг.',
  },
  {
    id: 'toy-rope-ball',
    name: 'Канат з м’ячем',
    category: 'toys',
    brand: 'PlayPaw',
    price: 119,
    emoji: '🎾',
    animals: 'Собаки',
    description:
      'Міцна бавовняна іграшка для перетягування та апортування. Допомагає чистити зуби під час гри.',
  },
  {
    id: 'toy-cat-teaser',
    name: 'Дражнилка з пір’ям для котів',
    category: 'toys',
    brand: 'PlayPaw',
    price: 79,
    emoji: '🪶',
    animals: 'Коти',
    description:
      'Інтерактивна іграшка на гнучкій вудці. Стимулює мисливський інстинкт та активність.',
  },
  {
    id: 'rodent-mix',
    name: 'Корм для хом’яків і щурів',
    category: 'rodent-bird-food',
    brand: 'LittleFriend',
    price: 99,
    emoji: '🐹',
    animals: 'Хом’яки, щури, миші',
    description:
      'Зернова суміш із насінням, горіхами та сушеними овочами. Упаковка 500 г.',
  },
  {
    id: 'parrot-mix',
    name: 'Корм для середніх папуг',
    category: 'rodent-bird-food',
    brand: 'LittleFriend',
    price: 129,
    emoji: '🦜',
    animals: 'Папуги',
    description:
      'Повноцінна зернова суміш з додаванням мінералів та вітамінів. Упаковка 800 г.',
  },
  {
    id: 'wet-wipes',
    name: 'Вологі серветки для догляду',
    category: 'hygiene',
    brand: 'CleanPet',
    price: 85,
    emoji: '🧻',
    animals: 'Собаки, коти',
    description:
      'Гіпоалергенні серветки для очищення лап, вух та шерсті. В упаковці 50 штук.',
  },
  {
    id: 'ear-cleaner',
    name: 'Лосьйон для чищення вух',
    category: 'hygiene',
    brand: 'CleanPet',
    price: 165,
    emoji: '👂',
    animals: 'Собаки, коти',
    description:
      'М’який лосьйон для щоденної гігієни вух. Допомагає видаляти надлишок сірки та забруднення.',
  },
  {
    id: 'shampoo-universal',
    name: 'Шампунь універсальний',
    category: 'shampoos',
    brand: 'CleanPet',
    price: 139,
    emoji: '🧴',
    animals: 'Собаки, коти',
    description:
      'Делікатний шампунь з екстрактом алое для щоденного використання. Об’єм 250 мл.',
  },
  {
    id: 'shampoo-sensitive',
    name: 'Шампунь для чутливої шкіри',
    category: 'shampoos',
    brand: 'DermaCare',
    price: 215,
    emoji: '🫧',
    animals: 'Собаки, коти',
    description:
      'Гіпоалергенний шампунь без барвників і сильних ароматизаторів. Об’єм 250 мл.',
  },
  {
    id: 'canned-savory-cat',
    name: 'Консерви Savory для котів',
    category: 'canned',
    brand: 'Savory',
    price: 45,
    emoji: '🥫',
    animals: 'Коти',
    description:
      'Вологий корм для котів у зручній порційній упаковці. Може використовуватись як окреме харчування або додаток до сухого корму.',
  },
  {
    id: 'canned-savory-dog',
    name: 'Консерви Savory для собак',
    category: 'canned',
    brand: 'Savory',
    price: 69,
    emoji: '🥫',
    animals: 'Собаки',
    description:
      'Вологий корм для собак. Може використовуватись як окреме харчування або додаток до сухого корму.',
  },
  {
    id: 'canned-baskerville-dog',
    name: 'Консерви Baskerville для собак',
    category: 'canned',
    brand: 'Baskerville',
    price: 79,
    emoji: '🥫',
    animals: 'Собаки',
    description:
      'Вологий корм для собак. Підходить як основний раціон або як смачний додаток до сухого корму.',
  },
  {
    id: 'canned-baskerville-cat',
    name: 'Консерви Baskerville для котів',
    category: 'canned',
    brand: 'Baskerville',
    price: 49,
    emoji: '🥫',
    animals: 'Коти',
    description:
      'Вологий корм для котів. Підходить як основний раціон або як додаток до сухого корму.',
  },
  {
    id: 'canned-brit-cat',
    name: 'Консерви Brit для котів',
    category: 'canned',
    brand: 'Brit',
    price: 55,
    emoji: '🥫',
    animals: 'Коти',
    description:
      'Вологий корм для котів. Може використовуватись як окреме харчування або додаток до сухого корму.',
  },
  {
    id: 'canned-brit-dog',
    name: 'Консерви Brit для собак',
    category: 'canned',
    brand: 'Brit',
    price: 89,
    emoji: '🥫',
    animals: 'Собаки',
    description:
      'Вологий корм для собак. Може використовуватись як окреме харчування або додаток до сухого корму.',
  },
  {
    id: 'wet-felix-cat',
    name: 'Вологий корм Felix для котів',
    category: 'canned',
    brand: 'Felix',
    price: 27,
    emoji: '🥫',
    animals: 'Коти',
    description:
      'Вологий корм у порційних паучах для дорослих котів. Підходить як основний раціон або як додаток до сухого корму.',
  },
  {
    id: 'wet-friskies-cat',
    name: 'Вологий корм Friskies для котів',
    category: 'canned',
    brand: 'Friskies',
    price: 22,
    emoji: '🥫',
    animals: 'Коти',
    description:
      'Вологий корм у порційних паучах для дорослих котів. Підходить як основний раціон або як додаток до сухого корму.',
  },
  {
    id: 'wet-whiskas-cat',
    name: 'Вологий корм Whiskas для котів',
    category: 'canned',
    brand: 'Whiskas',
    price: 24,
    emoji: '🥫',
    animals: 'Коти',
    description:
      'Вологий корм у порційних паучах для дорослих котів. Підходить як основний раціон або як додаток до сухого корму.',
  },
  {
    id: 'wet-club4paws-cat',
    name: 'Вологий корм Club 4 Paws для котів',
    category: 'canned',
    brand: 'Club 4 Paws',
    price: 29,
    emoji: '🥫',
    animals: 'Коти',
    description:
      'Вологий корм для котів у зручній порційній упаковці. Може використовуватись як окреме харчування або додаток до сухого корму.',
  },
  {
    id: 'wet-leopold-cat',
    name: 'Вологий корм Leopold для котів',
    category: 'canned',
    brand: 'Leopold',
    price: 25,
    emoji: '🥫',
    animals: 'Коти',
    description:
      'Вологий корм для котів у порційній упаковці. Підходить як основний раціон або як додаток до сухого корму.',
  },
  {
    id: 'wet-gourmet-salmon',
    name: 'Вологий корм Gourmet з лососем для котів',
    category: 'canned',
    brand: 'Gourmet',
    price: 32,
    emoji: '🥫',
    animals: 'Коти',
    description:
      'Вологий корм зі смаком лосося для дорослих котів у порційній упаковці. Підходить як основний раціон або як смачний додаток до сухого корму.',
  },
  {
    id: 'wet-kitekat-cat',
    name: 'Вологий корм Kitekat для котів',
    category: 'canned',
    brand: 'Kitekat',
    price: 21,
    emoji: '🥫',
    animals: 'Коти',
    description:
      'Вологий корм у порційних паучах для дорослих котів. Підходить як основний раціон або як додаток до сухого корму.',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategory(slug: CategorySlug): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function formatPrice(value: number): string {
  return `${value.toLocaleString('uk-UA')} ₴`;
}
