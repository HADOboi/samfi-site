export function PageSkeleton() {
  return (
    <div className="page-skeleton-wrapper" aria-busy="true" aria-label="Loading content">
      <div className="skeleton-hero">
        <div className="skeleton-box skeleton-eyebrow" />
        <div className="skeleton-box skeleton-title" />
        <div className="skeleton-box skeleton-title-sub" />
        <div className="skeleton-box skeleton-paragraph" />
        <div className="skeleton-box skeleton-paragraph-short" />
      </div>

      <div className="skeleton-grid">
        <div className="skeleton-box skeleton-card" style={{ height: 320 }} />
        <div className="skeleton-box skeleton-card" style={{ height: 420 }} />
        <div className="skeleton-box skeleton-card" style={{ height: 280 }} />
        <div className="skeleton-box skeleton-card" style={{ height: 360 }} />
        <div className="skeleton-box skeleton-card" style={{ height: 300 }} />
        <div className="skeleton-box skeleton-card" style={{ height: 400 }} />
      </div>
    </div>
  );
}

export function GalleryItemSkeleton({ height = 340 }) {
  return (
    <div
      className="gallery-item-skeleton skeleton-box"
      style={{ height, minHeight: height }}
      aria-hidden="true"
    />
  );
}
