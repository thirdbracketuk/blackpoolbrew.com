interface PageHeroProps {
  tag: string;
  title: string;
  subtitle: string;
}

export default function PageHero({ tag, title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <span className="section-tag">{tag}</span>
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-sub">{subtitle}</p>
      </div>
    </section>
  );
}
