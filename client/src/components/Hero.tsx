import { Button } from "@/components/ui/button";

interface HeroProps {
  onBrowseSoftware: () => void;
  onBrowseHardware: () => void;
}

export default function Hero({ onBrowseSoftware, onBrowseHardware }: HeroProps) {
  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.7), rgba(37, 99, 235, 0.7)), url('@assets/generated_images/Educational_technology_classroom_hero_b380bf24.png')`
      }}
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
            🔴 Trusted by 500+ Educational Institutions
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Empowering Education <br />
          Through<span className="text-yellow-400">Technology</span>
        </h1>
        <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
          Transform your institution with cutting-edge educational technology solutions. From smart classrooms to comprehensive campus management systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={onBrowseSoftware}
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8"
          >
            Browse Software Solutions
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={onBrowseHardware}
            className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
          >
            Explore Hardware
          </Button>
        </div>
      </div>
    </section>
  );
}