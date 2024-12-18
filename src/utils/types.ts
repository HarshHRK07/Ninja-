// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'admin' | 'staff';
  phone?: string;
  address?: string;
}

export interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Theme related types
export interface ThemeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// Order related types
export interface Order {
  id: string;
  userId: string;
  service: string;
  status: OrderStatus;
  items: OrderItem[];
  pickupDate: string;
  pickupTime: string;
  deliveryDate: string;
  totalAmount: number;
  paymentStatus: 'pending' | 'paid';
  specialInstructions?: string;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'ready' | 'delivered';

export interface OrderState {
  currentOrder: Partial<Order>;
  setCurrentOrder: (order: Partial<Order>) => void;
  resetOrder: () => void;
}

// Additional types for enhanced management
export interface InventoryItem {
  id: string;
  name: string;
  category: 'detergent' | 'supplies' | 'equipment';
  quantity: number;
  unit: string;
  reorderPoint: number;
  cost: number;
  supplier: string;
}

export interface Employee {
  id: string;
  name: string;
  role: 'admin' | 'staff' | 'driver';
  email: string;
  phone: string;
  schedule: WorkSchedule[];
  performance: PerformanceMetrics;
}

export interface WorkSchedule {
  day: string;
  shifts: {
    start: string;
    end: string;
  }[];
}

export interface PerformanceMetrics {
  ordersProcessed: number;
  customerRating: number;
  efficiency: number;
  attendance: number;
}

export interface Report {
  id: string;
  type: 'daily' | 'weekly' | 'monthly';
  date: string;
  metrics: {
    revenue: number;
    orders: number;
    newCustomers: number;
    customerSatisfaction: number;
  };
  topServices: {
    service: string;
    count: number;
    revenue: number;
  }[];
}