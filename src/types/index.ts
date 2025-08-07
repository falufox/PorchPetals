export interface Bouquet {
  id: string;
  name: string;
  description: string;
  flowers: string[];
  colors: string[];
  size: 'small' | 'full';
  price: number;
  image: string;
  available: number;
  totalCapacity: number;
}

export interface DeliveryWindow {
  id: string;
  label: string;
  time: string;
  available: boolean;
}

export interface Houseplant {
  id: string;
  name: string;
  description: string;
  care: string;
  price: number;
  image: string;
  available: number;
  type: 'cutting' | 'plant';
}

export interface OrderItem {
  bouquetId?: string;
  houseplantId?: string;
  bouquet?: Bouquet;
  houseplant?: Houseplant;
  quantity: number;
}

export interface CustomerInfo {
  name: string;
  unitNumber: string;
  email?: string;
  phone?: string;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  customer: CustomerInfo;
  deliveryWindow: DeliveryWindow;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivered';
  createdAt: Date;
  deliveredAt?: Date;
}

export interface DoorStyle {
  id: string;
  name: string;
  image: string;
  color: string;
}

export interface NotionInventoryItem {
  id: string;
  name: string;
  available: number;
  total: number;
  lastUpdated: string;
}