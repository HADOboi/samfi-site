export function BrandName() {
  return <span className="brand-name">Samfi</span>;
}

export function renderBrandName(text) {
  return text.split(/(SAMFI|Samfi)/g).map((part, index) =>
    /^(SAMFI|Samfi)$/.test(part) ? <BrandName key={index} /> : part,
  );
}
