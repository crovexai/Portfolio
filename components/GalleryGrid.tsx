export default function GalleryGrid({ images }: any) {
  return (
    <div className="grid">
      {images.map((src: string, i: number) => (
        <img key={i} src={src} className="img" />
      ))}
    </div>
  );
}
