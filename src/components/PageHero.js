export default function PageHero({ 
  title, 
  subtitle, 
  backgroundImage = "/images/hero-min.jpg",
  height = "h-[40vh]" 
}) {
  return (
    <section className={`relative ${height} w-full overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full items-start justify-center text-center text-white pt-32 sm:pt-36">
        <div className="max-w-4xl px-6 w-full">
          <h1 className="fade-in-up text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="fade-in-up delay-150 mt-4 text-lg md:text-xl text-white/90">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
