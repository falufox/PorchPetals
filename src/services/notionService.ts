import { Client } from '@notionhq/client';
import type { NotionInventoryItem, Bouquet } from '../types';

// Initialize Notion client
const notion = new Client({
  auth: import.meta.env.VITE_NOTION_TOKEN
});

// Your Notion database ID (get this from your Notion database URL)
const DATABASE_ID = import.meta.env.VITE_NOTION_DATABASE_ID || 'demo';

export class NotionInventoryService {
  
  /**
   * Fetch inventory from Notion database
   */
  async fetchInventory(): Promise<NotionInventoryItem[]> {
    try {
      if (!import.meta.env.VITE_NOTION_TOKEN || DATABASE_ID === 'demo') {
        // Return mock data if no Notion credentials
        return this.getMockInventory();
      }

      const response = await notion.databases.query({
        database_id: DATABASE_ID,
        filter: {
          property: 'Available',
          number: {
            greater_than: 0
          }
        }
      });

      return response.results.map((page: any) => ({
        id: page.id,
        name: this.getPropertyValue(page.properties.Name),
        available: this.getPropertyValue(page.properties.Available) || 0,
        total: this.getPropertyValue(page.properties.Total) || 0,
        lastUpdated: page.last_edited_time
      }));

    } catch (error) {
      console.error('Error fetching from Notion:', error);
      // Fall back to mock data on error
      return this.getMockInventory();
    }
  }

  /**
   * Update inventory count in Notion
   */
  async updateInventory(itemId: string, newAvailableCount: number): Promise<void> {
    try {
      if (!import.meta.env.VITE_NOTION_TOKEN || DATABASE_ID === 'demo') {
        console.log('Demo mode: Would update', itemId, 'to', newAvailableCount);
        return;
      }

      await notion.pages.update({
        page_id: itemId,
        properties: {
          Available: {
            number: newAvailableCount
          }
        }
      });

    } catch (error) {
      console.error('Error updating Notion inventory:', error);
      throw error;
    }
  }

  /**
   * Convert Notion inventory to bouquet format
   */
  async getBouquets(): Promise<Bouquet[]> {
    const inventory = await this.fetchInventory();
    
    return inventory.map(item => ({
      id: item.id,
      name: item.name,
      description: this.getBouquetDescription(item.name),
      flowers: this.getBouquetFlowers(item.name),
      colors: this.getBouquetColors(item.name),
      size: this.getBouquetSize(item.name),
      price: this.getBouquetPrice(item.name),
      image: '/api/placeholder/300/300',
      available: item.available,
      totalCapacity: item.total
    }));
  }

  /**
   * Process order and update inventory
   */
  async processOrder(orderItems: { bouquetId: string; quantity: number }[]): Promise<void> {
    for (const item of orderItems) {
      const inventory = await this.fetchInventory();
      const inventoryItem = inventory.find(inv => inv.id === item.bouquetId);
      
      if (inventoryItem) {
        const newCount = Math.max(0, inventoryItem.available - item.quantity);
        await this.updateInventory(item.bouquetId, newCount);
      }
    }
  }

  /**
   * Helper to extract values from Notion properties
   */
  private getPropertyValue(property: any): any {
    if (!property) return null;

    switch (property.type) {
      case 'title':
        return property.title[0]?.text?.content || '';
      case 'rich_text':
        return property.rich_text[0]?.text?.content || '';
      case 'number':
        return property.number;
      case 'select':
        return property.select?.name;
      case 'multi_select':
        return property.multi_select?.map((item: any) => item.name) || [];
      case 'checkbox':
        return property.checkbox;
      case 'date':
        return property.date?.start;
      default:
        return null;
    }
  }

  /**
   * Mock inventory for demo/fallback
   */
  private getMockInventory(): NotionInventoryItem[] {
    return [
      {
        id: 'mock-1',
        name: 'Minnie Zinnie',
        available: 3,
        total: 5,
        lastUpdated: new Date().toISOString()
      },
      {
        id: 'mock-2', 
        name: 'Garden Mix',
        available: 2,
        total: 3,
        lastUpdated: new Date().toISOString()
      },
      {
        id: 'mock-3',
        name: 'Sunshine Bundle',
        available: 1,
        total: 2,
        lastUpdated: new Date().toISOString()
      }
    ];
  }

  /**
   * Get bouquet description based on name
   */
  private getBouquetDescription(name: string): string {
    const descriptions: { [key: string]: string } = {
      'Minnie Zinnie': 'Bright and cheerful zinnias in warm sunset colors. Perfect for lifting spirits.',
      'Garden Mix': 'A delightful mix of seasonal blooms in soft, romantic pastels.',
      'Sunshine Bundle': 'Bold sunflowers and cheerful marigolds to brighten any day.',
      'Lisianthus Luxe': 'Elegant lisianthus in sophisticated cream and blush tones.',
      'Cosmos Cascade': 'Delicate cosmos flowers creating a dreamy, ethereal display.'
    };
    return descriptions[name] || 'Beautiful handcrafted bouquet with seasonal flowers.';
  }

  /**
   * Get bouquet flowers based on name
   */
  private getBouquetFlowers(name: string): string[] {
    const flowers: { [key: string]: string[] } = {
      'Minnie Zinnie': ['Zinnias', 'Baby\'s Breath'],
      'Garden Mix': ['Lisianthus', 'Sweet Peas', 'Cosmos'],
      'Sunshine Bundle': ['Sunflowers', 'Marigolds', 'Solidago'],
      'Lisianthus Luxe': ['Lisianthus', 'White Roses', 'Eucalyptus'],
      'Cosmos Cascade': ['Cosmos', 'Queen Anne\'s Lace', 'Lavender']
    };
    return flowers[name] || ['Seasonal Flowers'];
  }

  /**
   * Get bouquet colors based on name
   */
  private getBouquetColors(name: string): string[] {
    const colors: { [key: string]: string[] } = {
      'Minnie Zinnie': ['Orange', 'Pink', 'Yellow'],
      'Garden Mix': ['Blush', 'Lavender', 'Cream'],
      'Sunshine Bundle': ['Golden Yellow', 'Orange'],
      'Lisianthus Luxe': ['Cream', 'Blush', 'White'],
      'Cosmos Cascade': ['Pink', 'White', 'Purple']
    };
    return colors[name] || ['Mixed Colors'];
  }

  /**
   * Get bouquet size based on name
   */
  private getBouquetSize(name: string): 'small' | 'full' {
    const sizes: { [key: string]: 'small' | 'full' } = {
      'Minnie Zinnie': 'small',
      'Garden Mix': 'full',
      'Sunshine Bundle': 'full',
      'Lisianthus Luxe': 'full',
      'Cosmos Cascade': 'small'
    };
    return sizes[name] || 'small';
  }

  /**
   * Get bouquet price based on name and size
   */
  private getBouquetPrice(name: string): number {
    const prices: { [key: string]: number } = {
      'Minnie Zinnie': 12,
      'Garden Mix': 18,
      'Sunshine Bundle': 22,
      'Lisianthus Luxe': 25,
      'Cosmos Cascade': 15
    };
    return prices[name] || 12;
  }
}

// Export singleton instance
export const notionInventory = new NotionInventoryService();