import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Bouquet, DoorStyle } from '../types';

interface DoorPreviewProps {
  selectedBouquet: Bouquet | null;
  onDoorStyleChange?: (doorStyle: DoorStyle) => void;
}

const doorStyles: DoorStyle[] = [
  {
    id: 'classic-white',
    name: 'Classic White',
    color: '#ffffff',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkNGQ0ZDQiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIxNzAiIGN5PSIxNTAiIHI9IjQiIGZpbGw9IiM2ZDI4ZDkiLz4KPHJlY3QgeD0iMjAiIHk9IjUwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjgwIiBmaWxsPSJub25lIiBzdHJva2U9IiNkNGQ0ZDQiIHN0cm9rZS13aWR0aD0iMSIvPgo8cmVjdCB4PSIyMCIgeT0iMTcwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjgwIiBmaWxsPSJub25lIiBzdHJva2U9IiNkNGQ0ZDQiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4='
  },
  {
    id: 'sage-green',
    name: 'Sage Green',
    color: '#a3b8a3',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjYTNiOGEzIiBzdHJva2U9IiM3ZDlkN2QiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIxNzAiIGN5PSIxNTAiIHI9IjQiIGZpbGw9IiNmZmZmZmYiLz4KPHJlY3QgeD0iMjAiIHk9IjUwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjgwIiBmaWxsPSJub25lIiBzdHJva2U9IiM3ZDlkN2QiIHN0cm9rZS13aWR0aD0iMSIvPgo8cmVjdCB4PSIyMCIgeT0iMTcwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjgwIiBmaWxsPSJub25lIiBzdHJva2U9IiM3ZDlkN2QiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4='
  },
  {
    id: 'navy-blue',
    name: 'Navy Blue',
    color: '#1e40af',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMWU0MGFmIiBzdHJva2U9IiMxZTM5ODAiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIxNzAiIGN5PSIxNTAiIHI9IjQiIGZpbGw9IiNmZmZmZmYiLz4KPHJlY3QgeD0iMjAiIHk9IjUwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjgwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTM5ODAiIHN0cm9rZS13aWR0aD0iMSIvPgo8cmVjdCB4PSIyMCIgeT0iMTcwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjgwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTM5ODAiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4='
  },
  {
    id: 'charcoal',
    name: 'Charcoal',
    color: '#374151',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzc0MTUxIiBzdHJva2U9IiMxZjI5MzciIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIxNzAiIGN5PSIxNTAiIHI9IjQiIGZpbGw9IiNmZmZmZmYiLz4KPHJlY3QgeD0iMjAiIHk9IjUwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjgwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjI5MzciIHN0cm9rZS13aWR0aD0iMSIvPgo8cmVjdCB4PSIyMCIgeT0iMTcwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjgwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjI5MzciIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4='
  }
];

export const DoorPreview: React.FC<DoorPreviewProps> = ({ 
  selectedBouquet, 
  onDoorStyleChange 
}) => {
  const [currentDoorIndex, setCurrentDoorIndex] = useState(0);
  const currentDoor = doorStyles[currentDoorIndex];

  const nextDoor = () => {
    const newIndex = (currentDoorIndex + 1) % doorStyles.length;
    setCurrentDoorIndex(newIndex);
    onDoorStyleChange?.(doorStyles[newIndex]);
  };

  const prevDoor = () => {
    const newIndex = currentDoorIndex === 0 ? doorStyles.length - 1 : currentDoorIndex - 1;
    setCurrentDoorIndex(newIndex);
    onDoorStyleChange?.(doorStyles[newIndex]);
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-handwritten font-semibold text-sage-800 mb-4 text-center">
        Preview on Your Door
      </h2>
      
      {/* Door Preview Container */}
      <div className="relative bg-gradient-to-br from-sage-50 to-cream-50 rounded-2xl p-8 mb-6">
        <div className="relative mx-auto" style={{ width: '200px', height: '300px' }}>
          {/* Door Background */}
          <div 
            className="w-full h-full rounded-lg shadow-lg border-2 relative"
            style={{ 
              backgroundColor: currentDoor.color,
              borderColor: currentDoor.color === '#ffffff' ? '#d4d4d4' : 'rgba(0,0,0,0.2)'
            }}
          >
            {/* Door Panels */}
            <div className="absolute inset-4">
              <div 
                className="border rounded h-20 mb-4"
                style={{ 
                  borderColor: currentDoor.color === '#ffffff' ? '#d4d4d4' : 'rgba(255,255,255,0.3)'
                }}
              />
              <div 
                className="border rounded h-20"
                style={{ 
                  borderColor: currentDoor.color === '#ffffff' ? '#d4d4d4' : 'rgba(255,255,255,0.3)'
                }}
              />
            </div>
            
            {/* Door Handle */}
            <div 
              className="absolute w-2 h-2 rounded-full right-6 top-1/2 transform -translate-y-1/2"
              style={{ 
                backgroundColor: currentDoor.color === '#ffffff' ? '#6d28d9' : '#ffffff'
              }}
            />
            
            {/* Bouquet Hanging on Door */}
            {selectedBouquet && (
              <div className="absolute -right-8 top-16 transform rotate-12">
                {/* Kraft Paper Wrap */}
                <div className="relative">
                  <div className="bg-kraft-200 w-12 h-16 rounded-b-lg shadow-md relative overflow-hidden">
                    {/* Paper texture */}
                    <div className="absolute inset-0 bg-gradient-to-br from-kraft-100 to-kraft-300 opacity-50"></div>
                    
                    {/* Flower representation */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <div className="flex flex-wrap justify-center">
                        {selectedBouquet.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-2 h-2 rounded-full m-0.5 shadow-sm"
                            style={{ 
                              backgroundColor: color.toLowerCase().includes('pink') ? '#f472b6' :
                                            color.toLowerCase().includes('yellow') ? '#fbbf24' :
                                            color.toLowerCase().includes('orange') ? '#fb923c' :
                                            color.toLowerCase().includes('purple') ? '#a855f7' :
                                            color.toLowerCase().includes('blue') ? '#3b82f6' :
                                            color.toLowerCase().includes('green') ? '#10b981' :
                                            color.toLowerCase().includes('white') ? '#ffffff' :
                                            color.toLowerCase().includes('cream') ? '#fef3c7' :
                                            color.toLowerCase().includes('blush') ? '#fce7f3' :
                                            color.toLowerCase().includes('lavender') ? '#e9d5ff' :
                                            '#ec4899'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Kraft paper fold */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-kraft-400"></div>
                    
                    {/* Hanging string */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-px h-4 bg-kraft-600"></div>
                  </div>
                  
                  {/* Flower tag */}
                  <div className="absolute -bottom-2 -right-2 bg-cream-100 px-1 py-0.5 rounded shadow-sm">
                    <span className="text-xs font-handwritten text-sage-700">
                      {selectedBouquet.name}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Door Style Navigation */}
        <div className="flex items-center justify-center mt-6 space-x-4">
          <button
            onClick={prevDoor}
            className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md"
          >
            <ChevronLeft className="w-4 h-4 text-sage-600" />
          </button>
          
          <div className="text-center">
            <p className="text-sm font-medium text-sage-800">{currentDoor.name}</p>
            <p className="text-xs text-sage-600">Door Style</p>
          </div>
          
          <button
            onClick={nextDoor}
            className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md"
          >
            <ChevronRight className="w-4 h-4 text-sage-600" />
          </button>
        </div>
      </div>
      
      {/* Door Style Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {doorStyles.map((door, index) => (
          <button
            key={door.id}
            onClick={() => {
              setCurrentDoorIndex(index);
              onDoorStyleChange?.(door);
            }}
            className={`relative aspect-[2/3] rounded-lg border-2 transition-all duration-200 ${
              index === currentDoorIndex 
                ? 'border-petal-400 shadow-md scale-105' 
                : 'border-sage-200 hover:border-sage-300'
            }`}
            style={{ backgroundColor: door.color }}
          >
            {/* Mini door details */}
            <div className="absolute inset-1">
              <div 
                className="border rounded h-1/3 mb-1"
                style={{ 
                  borderColor: door.color === '#ffffff' ? '#d4d4d4' : 'rgba(255,255,255,0.3)'
                }}
              />
              <div 
                className="border rounded h-1/3"
                style={{ 
                  borderColor: door.color === '#ffffff' ? '#d4d4d4' : 'rgba(255,255,255,0.3)'
                }}
              />
            </div>
            <div 
              className="absolute w-1 h-1 rounded-full right-1 top-1/2 transform -translate-y-1/2"
              style={{ 
                backgroundColor: door.color === '#ffffff' ? '#6d28d9' : '#ffffff'
              }}
            />
          </button>
        ))}
      </div>
      
      {!selectedBouquet && (
        <div className="text-center mt-4 p-4 bg-sage-50 rounded-lg">
          <p className="text-sm text-sage-600">
            Select a bouquet to see how it looks on your door! 🌸
          </p>
        </div>
      )}
    </div>
  );
};