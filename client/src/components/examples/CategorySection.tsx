import CategorySection from '../CategorySection';

export default function CategorySectionExample() {
  return (
    <CategorySection 
      onCategoryClick={(category) => console.log('Category clicked:', category)}
    />
  );
}
