import Image from 'next/image';

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const photos = [
  {
    src: '/dog-cat.jpg',
    alt: 'Золотистий ретривер і смугастий кіт дивляться в камеру',
    width: 720,
    height: 959,
  },
  {
    src: '/cats-heart.jpg',
    alt: 'Чорний і білий коти стоять поруч, хвости утворюють серце',
    width: 735,
    height: 872,
  },
  {
    src: '/yorkie.jpg',
    alt: 'Щеня йоркширського тер’єра лежить на м’якому килимку',
    width: 736,
    height: 1104,
  },
  {
    src: '/cockatiel.jpg',
    alt: 'Жовтий папуга корела з помаранчевими щічками',
    width: 340,
    height: 435,
  },
  {
    src: '/guinea-pig.jpg',
    alt: 'Руда з білим морська свинка лежить у сірому ліжку',
    width: 735,
    height: 919,
  },
];

export default function HeroGallery() {
  return (
    <ul className="gallery">
      {photos.map((photo, index) => (
        <li key={photo.src} className="gallery__item">
          <Image
            src={base + photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            priority={index === 0}
            className="gallery__img"
          />
        </li>
      ))}
    </ul>
  );
}
