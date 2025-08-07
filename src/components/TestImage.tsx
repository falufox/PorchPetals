import React from 'react';
import { HouseplantImage } from './HouseplantImage';

export const TestImage: React.FC = () => {
  return (
    <div className="p-4 border border-red-500 m-4 bg-white">
      <h3 className="text-lg font-bold mb-2">Houseplant Image Debug Test</h3>
      
      {/* Direct houseplant image tests */}
      <div className="mb-4">
        <p className="text-sm mb-2">Direct Philodendron test (with space in filename):</p>
        <img 
          src="/images/houseplants/philodendron-birkin/philodendron birkin-main.webp" 
          alt="Direct Philodendron test"
          className="w-32 h-32 object-cover border"
          onError={(e) => {
            console.error('❌ Philodendron WebP failed to load');
            (e.target as HTMLImageElement).src = "/images/houseplants/philodendron-birkin/philodendron birkin-main.jpg";
          }}
          onLoad={() => console.log('✅ Philodendron image loaded successfully!')}
        />
      </div>

      <div className="mb-4">
        <p className="text-sm mb-2">Direct Rubber Plant test:</p>
        <img 
          src="/images/houseplants/rubber-plant/rubberplant-main.webp" 
          alt="Direct Rubber Plant test"
          className="w-32 h-32 object-cover border"
          onError={(e) => {
            console.error('❌ Rubber Plant WebP failed to load');
            (e.target as HTMLImageElement).src = "/images/houseplants/rubber-plant/rubberplant-main.jpg";
          }}
          onLoad={() => console.log('✅ Rubber Plant image loaded successfully!')}
        />
      </div>

      <div className="mb-4">
        <p className="text-sm mb-2">Direct Pothos test:</p>
        <img 
          src="/images/houseplants/pothos/pothos-main.webp" 
          alt="Direct Pothos test"
          className="w-32 h-32 object-cover border"
          onError={(e) => {
            console.error('❌ Pothos WebP failed to load');
            (e.target as HTMLImageElement).src = "/images/houseplants/pothos/pothos-main.jpg";
          }}
          onLoad={() => console.log('✅ Pothos image loaded successfully!')}
        />
      </div>

      {/* Test HouseplantImage components */}
      <div className="mb-4">
        <p className="text-sm mb-2">HouseplantImage component tests:</p>
        <div className="flex gap-2">
          <div className="w-32 h-32 border">
            <HouseplantImage
              plantName="Pothos"
              alt="Test Pothos"
              size="main"
              loading="eager"
              className="w-32 h-32"
            />
          </div>
          <div className="w-32 h-32 border">
            <HouseplantImage
              plantName="Rubber Plant"
              alt="Test Rubber Plant"
              size="main"
              loading="eager"
              className="w-32 h-32"
            />
          </div>
          <div className="w-32 h-32 border">
            <HouseplantImage
              plantName="Philodendron Birkin"
              alt="Test Philodendron Birkin"
              size="main"
              loading="eager"
              className="w-32 h-32"
            />
          </div>
        </div>
      </div>

      {/* Test button functionality */}
      <div className="mb-4">
        <p className="text-sm mb-2">Button test:</p>
        <button 
          onClick={() => console.log('✅ Test button clicked!')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Test Click
        </button>
      </div>
    </div>
  );
};