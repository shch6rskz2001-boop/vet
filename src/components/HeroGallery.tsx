const pets = ['🐶', '🐱', '🦜', '🐹'];

export default function HeroGallery() {
  return (
    <ul className="gallery gallery--emoji" aria-hidden="true">
      {pets.map((pet) => (
        <li key={pet} className="gallery__item gallery__item--emoji">
          {pet}
        </li>
      ))}
    </ul>
  );
}
