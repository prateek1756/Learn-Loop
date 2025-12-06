import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero 
      onBrowseSoftware={() => console.log('Browse software clicked')}
      onBrowseHardware={() => console.log('Browse hardware clicked')}
    />
  );
}
