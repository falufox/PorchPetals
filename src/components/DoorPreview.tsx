import React, { useState } from 'react';
import type { Bouquet } from '../types';

interface DoorPreviewProps {
  selectedBouquet: Bouquet | null;
}

const bouquetOptions: Bouquet[] = [
  {
    id: '1',
    name: 'Minnie Zinnie',
    description: 'Perfect petite bouquets with 3-4 fresh zinnia stems in vibrant colors',
    flowers: ['Zinnias'],
    colors: ['Pink', 'Orange', 'Yellow', 'Red'],
    size: 'small',
    price: 6,
    image: '',
    available: 5,
    totalCapacity: 5
  },
  {
    id: '2',
    name: 'Biggie Zinnie',
    description: 'Fuller bouquets with 5-6 fresh zinnia stems plus beautiful filler foliage',
    flowers: ['Zinnias', 'Foliage'],
    colors: ['Pink', 'Orange', 'Yellow', 'Red'],
    size: 'full',
    price: 10,
    image: '',
    available: 3,
    totalCapacity: 3
  }
];

export const DoorPreview: React.FC<DoorPreviewProps> = ({ selectedBouquet }) => {
  const [previewBouquet, setPreviewBouquet] = useState<Bouquet | null>(selectedBouquet);

  return (
    <div className="card p-6">
      <h2 className="text-xl font-handwritten font-semibold text-sage-800 mb-4 text-center">
        Preview on Your Door
      </h2>
      
      {/* Door Preview Container */}
      <div className="relative bg-gradient-to-br from-sage-50 to-kraft-50 rounded-2xl p-8 mb-6">
        <div className="relative mx-auto" style={{ width: '200px', height: '300px' }}>
          {/* Black Door */}
          <div className="w-full h-full rounded-lg shadow-2xl border-4 border-gray-800 relative bg-black">
            {/* Door Panels */}
            <div className="absolute inset-4">
              <div className="border border-gray-600 rounded h-20 mb-4" />
              <div className="border border-gray-600 rounded h-20" />
            </div>
            
            {/* Golden Door Handle */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
              <div className="w-3 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-md" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full opacity-50" />
            </div>
            
            {/* Bouquet Hanging on Doorknob */}
            {previewBouquet && (
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 translate-x-full">
                <div className="relative">
                  {/* Kraft Paper Wrap */}
                  <div className="bg-kraft-200 w-16 h-20 rounded-b-2xl shadow-lg relative overflow-hidden border border-kraft-300">
                    {/* Paper texture */}
                    <div className="absolute inset-0 bg-gradient-to-br from-kraft-100 to-kraft-300 opacity-60" />
                    
                    {/* Zinnia Flowers */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="flex flex-wrap justify-center gap-1">
                        {/* Multiple zinnia blooms */}
                        <div className="text-lg animate-gentle-bounce">🌼</div>
                        <div className="text-lg animate-gentle-bounce" style={{ animationDelay: '0.2s' }}>🌼</div>
                        <div className="text-lg animate-gentle-bounce" style={{ animationDelay: '0.4s' }}>🌼</div>
                        {previewBouquet.size === 'full' && (
                          <>
                            <div className="text-lg animate-gentle-bounce" style={{ animationDelay: '0.6s' }}>🌼</div>
                            <div className="text-sm animate-gentle-bounce" style={{ animationDelay: '0.8s' }}>🌿</div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Kraft paper fold */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-kraft-400" />
                    
                    {/* Paper crinkle lines */}
                    <div className="absolute inset-2 border-l border-kraft-400 opacity-30" />
                    <div className="absolute inset-2 border-r border-kraft-400 opacity-30" />
                  </div>
                  
                  {/* Hanging loop */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 border-2 border-kraft-600 rounded-full bg-kraft-200" />
                  
                  {/* Bouquet tag */}
                  <div className="absolute -bottom-1 -right-2 bg-kraft-100 px-2 py-1 rounded shadow-sm border border-kraft-300">
                    <span className="text-xs font-handwritten text-sage-800">
                      {previewBouquet.name}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Bouquet Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-heading text-sage-800 text-center mb-3">
          Choose a bouquet to preview:
        </h3>
        
        <div className="grid gap-3">
          {bouquetOptions.map((bouquet) => (
            <button
              key={bouquet.id}
              onClick={() => setPreviewBouquet(bouquet)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                previewBouquet?.id === bouquet.id
                  ? 'border-petal-400 bg-petal-50 shadow-md'
                  : 'border-sage-200 hover:border-sage-300 bg-white hover:bg-sage-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">🌼</span>
                    <h4 className="font-semibold text-sage-800">{bouquet.name}</h4>
                    <span className="text-lg font-bold text-petal-600">${bouquet.price}</span>
                  </div>
                  <p className="text-sm text-sage-600">{bouquet.description}</p>
                </div>
                {previewBouquet?.id === bouquet.id && (
                  <div className="text-petal-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
        
        {!previewBouquet && (
          <div className="text-center mt-4 p-4 bg-sage-50 rounded-lg">
            <p className="text-sm text-sage-600">
              Select a bouquet above to see how it looks hanging on your door! 🌼
            </p>
          </div>
        )}
      </div>
    </div>
  );
};