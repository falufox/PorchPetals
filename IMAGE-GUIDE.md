# 📸 Porch Petals Image Guide

## 🎯 What We've Built

I've implemented a complete image system for your bouquets with these features:

### ✨ Modern Image Component
- **WebP + JPEG fallback** for optimal loading
- **Lazy loading** for performance
- **Zoom functionality** on the order page
- **Graceful fallbacks** to emoji if images don't load
- **Responsive sizing** for different screen sizes
- **Loading animations** that match your brand aesthetic

### 📱 Where Images Appear
1. **Homepage** - "Today's Fresh Collection" section
2. **Order Page** - Product cards with zoom functionality
3. **Door Preview** - Miniature bouquet in kraft paper wrapping

## 📸 Photography Guidelines

### 🌼 What to Photograph

**Minnie Zinnie ($6)**
- 3-4 fresh zinnia stems
- Vibrant colors: pink, orange, yellow, red
- Simple kraft paper wrap
- Show the petite, charming size

**Biggie Zinnie ($10)**
- 5-6 fresh zinnia stems
- Same vibrant color palette
- Include some filler foliage (greenery)
- Fuller, more substantial kraft paper wrap

### 📷 Photography Setup

**Lighting**
- Natural light is best (near a window)
- Avoid harsh shadows
- Soft, even lighting
- Golden hour lighting creates warmth

**Background**
- Clean white background OR
- Kraft paper background (matches brand)
- Minimal distractions
- Let the bouquet be the star

**Composition**
- Front-facing view showing full bouquet
- Show some of the stems (not just flower heads)
- Fill most of the frame
- Keep the kraft paper wrapping visible

**Camera Settings**
- High resolution (at least 1200px wide)
- Sharp focus on the flowers
- Shallow depth of field to blur background
- Don't over-edit - keep natural colors

## 🛠️ How to Add Your Images

### Option 1: Use Our Optimization Script

1. **Create a folder** called `source-images` in your project root
2. **Add your photos** with these exact names:
   - `minnie-zinnie.jpg`
   - `biggie-zinnie.jpg`
3. **Install image processing** (if not already installed):
   ```bash
   npm install sharp
   ```
4. **Run the optimization script**:
   ```bash
   node scripts/optimize-images.js
   ```

The script will automatically:
- Create WebP and JPEG versions
- Generate 3 sizes: thumbnail (300px), main (600px), large (1200px)
- Place them in the correct folder structure
- Optimize file sizes for web

### Option 2: Manual Upload

If you prefer to do it manually:

1. **Resize your images** to these sizes:
   - Thumbnail: 300x300px
   - Main: 600x600px  
   - Large: 1200x1200px

2. **Convert to WebP** (for better performance) and keep JPEG versions

3. **Upload to these folders**:
   ```
   public/images/bouquets/
   ├── minnie-zinnie/
   │   ├── minnie-zinnie-thumbnail.webp
   │   ├── minnie-zinnie-thumbnail.jpg
   │   ├── minnie-zinnie-main.webp
   │   ├── minnie-zinnie-main.jpg
   │   ├── minnie-zinnie-large.webp
   │   └── minnie-zinnie-large.jpg
   └── biggie-zinnie/
       ├── biggie-zinnie-thumbnail.webp
       ├── biggie-zinnie-thumbnail.jpg
       ├── biggie-zinnie-main.webp
       ├── biggie-zinnie-main.jpg
       ├── biggie-zinnie-large.webp
       └── biggie-zinnie-large.jpg
   ```

## 🎨 Current Fallback Behavior

Right now, if no images are found, the site shows:
- Beautiful gradient backgrounds that match your brand colors
- Zinnia emoji (🌼) as placeholders
- All the same hover effects and animations
- Paper texture overlays for authenticity

This means your site looks great even before you add photos!

## 📈 Performance Benefits

The image system I built includes:

- **Lazy Loading**: Images only load when users scroll to them
- **Modern Formats**: WebP images are 25-35% smaller than JPEG
- **Smart Caching**: Browser caches optimized images
- **Responsive**: Right image size for each device
- **Fallback Strategy**: Never broken images, always something beautiful

## 🔍 Testing Your Images

After adding images:

1. **Check the homepage** - Both bouquets should show in "Today's Fresh Collection"
2. **Visit the order page** - Click images to test zoom functionality
3. **Try the door preview** - Select bouquets to see them in the kraft paper
4. **Test mobile** - Ensure images look good on small screens
5. **Check loading** - Images should fade in smoothly

## 🎯 Pro Tips

### For Best Results:
- **Consistency**: Use similar lighting for both bouquets
- **Quality**: Start with high-resolution photos
- **Colors**: Let the natural zinnia colors shine
- **Branding**: Simple kraft paper keeps focus on flowers
- **Multiple Angles**: Consider taking 2-3 shots and picking the best

### Quick Wins:
- Take photos in natural light by a window
- Use a white poster board as backdrop
- Style with your actual kraft paper wrapping
- Show the size difference between Minnie and Biggie clearly

## 🚀 Next Steps

1. **Take your bouquet photos** following the guidelines above
2. **Use the optimization script** to process them automatically
3. **Deploy and test** on your live site
4. **Get feedback** from friends and customers
5. **Iterate** - you can always update images later

## 💡 Future Enhancements

Once you have basic photos, we could add:
- **Multiple angle views** (hover to see different angles)
- **Seasonal variations** (different color combinations)
- **Process photos** (showing your container garden)
- **Lifestyle shots** (bouquets in customers' homes)

The system is built to easily accommodate more images as your business grows!

---

**Need Help?** The image system is designed to be forgiving. Even if something goes wrong, your site will still look beautiful with the elegant fallback designs.