/**
 * Centralized data source for SAMFI Image Gallery.
 * Uses optimized Cloudinary URLs with dynamic responsive sizing:
 * - src (w_600, f_auto, q_auto): Lightweight bandwidth-friendly images for cards, grids & filmstrips.
 * - fullSrc (w_1400, f_auto, q_auto): High-resolution crisp image for fullscreen interactive lightboxes.
 */
export function getOptimizedUrl(rawUrl, width = 600) {
  return rawUrl.replace("/upload/", `/upload/f_auto,q_auto,w_${width},c_limit/`);
}

export const galleryImages = [
  {
    id: "gallery-1",
    src: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788160035/IMG_E1291.jpg", 600),
    fullSrc: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788160035/IMG_E1291.jpg", 1400),
    alt: "SAMFI Executive Training and Engagement Workshop",
    title: "Executive Training & Engagement",
    aspectRatio: "200 / 267",
  },
  {
    id: "gallery-2",
    src: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788160030/IMG_E1214.jpg", 600),
    fullSrc: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788160030/IMG_E1214.jpg", 1400),
    alt: "Leadership Cohort & Collaborative Session",
    title: "Leadership Development Session",
    aspectRatio: "200 / 267",
  },
  {
    id: "gallery-3",
    src: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788160021/FrmBasim_11.jpg", 600),
    fullSrc: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788160021/FrmBasim_11.jpg", 1400),
    alt: "SAMFI On-Site Operations & Technical Briefing",
    title: "Operations & On-Site Consultation",
    aspectRatio: "200 / 90",
  },
  {
    id: "gallery-4",
    src: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788160002/FrmBasim_3.jpg", 600),
    fullSrc: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788160002/FrmBasim_3.jpg", 1400),
    alt: "Strategic Field Consultation & Review",
    title: "Field Advisory & Site Evaluation",
    aspectRatio: "200 / 90",
  },
  {
    id: "gallery-5",
    src: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788159986/IMG_6674.jpg", 600),
    fullSrc: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788159986/IMG_6674.jpg", 1400),
    alt: "Project Collaboration and Strategy Assembly",
    title: "Project Collaboration & Review",
    aspectRatio: "200 / 150",
  },
  {
    id: "gallery-6",
    src: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788159965/IMG_6778.jpg", 600),
    fullSrc: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788159965/IMG_6778.jpg", 1400),
    alt: "Enterprise Architecture Presentation",
    title: "Enterprise Solutions Architecture",
    aspectRatio: "200 / 150",
  },
  {
    id: "gallery-7",
    src: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788159947/IMG20260512101256.jpg", 600),
    fullSrc: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788159947/IMG20260512101256.jpg", 1400),
    alt: "Stakeholder Presentation and Industry Forum",
    title: "Stakeholder Conference & Seminar",
    aspectRatio: "200 / 91",
  },
  {
    id: "gallery-8",
    src: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788159915/IMG20260512100934.jpg", 600),
    fullSrc: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788159915/IMG20260512100934.jpg", 1400),
    alt: "Interactive Workshop Forum and Discussions",
    title: "Interactive Workshop Forum",
    aspectRatio: "200 / 91",
  },
  {
    id: "gallery-9",
    src: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788159878/Redeck_29Oct22_pcs_21.jpg", 600),
    fullSrc: getOptimizedUrl("https://res.cloudinary.com/iiww9i7d/image/upload/v1788159878/Redeck_29Oct22_pcs_21.jpg", 1400),
    alt: "Corporate Milestone & Project Assembly",
    title: "Milestone Celebration & Assembly",
    aspectRatio: "200 / 113",
  },
];


