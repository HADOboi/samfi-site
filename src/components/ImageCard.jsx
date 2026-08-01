export default function ImageCard({ src, alt, className = "" }) {
  return (
    <div className={`image-card ${className}`.trim()}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}
