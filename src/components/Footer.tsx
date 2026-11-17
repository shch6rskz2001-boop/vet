export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Ветаптека Вітамінка — ветеринарна аптека та зоомагазин</p>
        <p>Інформація на сайті не замінює консультацію ветеринарного лікаря.</p>
      </div>
    </footer>
  );
}
