import Badge from '../Badge';
import Button from '../Button';

export default function HeroSection() {
  return (
    <section
      className="min-h-screen w-full m-auto flex items-center justify-center px-4"
      style={{
        background: 'var(--hero-gradient)'
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-8">
          <Badge
            text="Ship fearlessly. Find root cause in under 60 seconds."
            className="text-sm md:text-base px-4 py-2 font-medium"
            style={{
              backgroundColor: 'rgba(5, 44, 98, 0.4)',
              borderColor: 'rgba(96, 125, 164, 0.5)',
              color: '#FDB022',
              borderWidth: '1px',
              backdropFilter: 'blur(10px)'
            }}
          />
        </div>

        {/* Hero Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="text-white">Stop debugging.</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'var(--hero-text-gradient)'
            }}
          >
            Start shipping.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
           style={{ color: '#9CA3AF' }}
        >
          Production errors detected and analyzed with root cause in 60 seconds. AI-powered monitoring that tells you exactly what went wrong.
        </p>

        {/* CTA Button */}
        <Button
          text="Try for free"
          icon="/images/left-side-arrow.svg"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg hover:shadow-xl transition-all"
        />
      </div>
    </section>
  );
}
