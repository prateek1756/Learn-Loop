import CategoryCard from '../CategoryCard';
import { Server } from 'lucide-react';

export default function CategoryCardExample() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 p-8">
      <CategoryCard 
        title="IT Infrastructure"
        icon={Server}
        productCount={24}
        onClick={() => console.log('Category clicked')}
      />
    </div>
  );
}
