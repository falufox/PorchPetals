/**
 * Utility to create placeholder images for development
 * This creates simple canvas-based images until real photos are available
 */

export const createPlaceholderImage = (
  bouquetName: string, 
  size: 'thumbnail' | 'main' | 'large'
): string => {
  const dimensions = {
    thumbnail: { width: 300, height: 300 },
    main: { width: 600, height: 600 },
    large: { width: 1200, height: 1200 }
  };

  const { width, height } = dimensions[size];
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  
  canvas.width = width;
  canvas.height = height;

  // Create beautiful gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  
  if (bouquetName.includes('Minnie')) {
    gradient.addColorStop(0, '#f6f8f4'); // petal-50
    gradient.addColorStop(0.5, '#e8f0e1'); // petal-100  
    gradient.addColorStop(1, '#f0e6e0'); // rosewood-100
  } else {
    gradient.addColorStop(0, '#f7f8f4'); // sage-50
    gradient.addColorStop(0.5, '#eef1e8'); // sage-100
    gradient.addColorStop(1, '#ede8f5'); // lavender-100
  }

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add texture pattern
  ctx.globalAlpha = 0.1;
  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(i + 1, j + 1, 1, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;

  // Add bouquet name and details
  ctx.fillStyle = '#3d4c2b'; // sage-800
  ctx.font = `${width/15}px serif`;
  ctx.textAlign = 'center';
  ctx.fillText(bouquetName, width/2, height/2 - 20);

  ctx.font = `${width/25}px sans-serif`;
  ctx.fillStyle = '#4f6538'; // sage-700
  ctx.fillText(`${size} - Placeholder`, width/2, height/2 + 20);

  // Add flower emoji
  ctx.font = `${width/8}px serif`;
  ctx.fillText('🌼', width/2, height/2 + 80);

  return canvas.toDataURL('image/png');
};

// Generate and download placeholder images
export const generatePlaceholderFiles = () => {
  const bouquets = ['Minnie Zinnie', 'Biggie Zinnie'];
  const sizes: ('thumbnail' | 'main' | 'large')[] = ['thumbnail', 'main', 'large'];

  bouquets.forEach(bouquet => {
    sizes.forEach(size => {
      const dataUrl = createPlaceholderImage(bouquet, size);
      
      // Create download link
      const link = document.createElement('a');
      link.download = `${bouquet.toLowerCase().replace(/\s+/g, '-')}-${size}-placeholder.png`;
      link.href = dataUrl;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
};