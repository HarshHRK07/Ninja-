import axios from 'axios';
import { Order, User, InventoryItem, Employee, Report } from './types';

const api = axios.create({
  baseURL: '/api',
});

export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (userData: Partial<User>) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },
};

export const orderAPI = {
  createOrder: async (orderData: Partial<Order>) => {
    const response = await api.post('/orders', orderData);
    return response.data;
  },
  getOrders: async (userId: string) => {
    const response = await api.get(`/orders/user/${userId}`);
    return response.data;
  },
  getOrderDetails: async (orderId: string) => {
    const response = await api.get(`/orders/${orderId}`);
    return response.data;
  },
  updateOrderStatus: async (orderId: string, status: Order['status']) => {
    const response = await api.patch(`/orders/${orderId}/status`, { status });
    return response.data;
  },
};

export const adminAPI = {
  getInventory: async () => {
    const response = await api.get('/admin/inventory');
    return response.data as InventoryItem[];
  },
  updateInventoryStock: async (itemId: string, quantity: number) => {
    const response = await api.patch(`/admin/inventory/${itemId}`, { quantity });
    return response.data;
  },
  getEmployees: async () => {
    const response = await api.get('/admin/employees');
    return response.data as Employee[];
  },
  getReport: async (type: 'daily' | 'weekly' | 'monthly') => {
    const response = await api.get(`/admin/reports/${type}`);
    return response.data as Report;
  },
  getStats: async () => {
    const response = await api.get('/admin/stats');
    return response.data;
  },
};

export const userAPI = {
  updateProfile: async (userId: string, userData: Partial<User>) => {
    const response = await api.patch(`/users/${userId}`, userData);
    return response.data;
  },
  getProfile: async (userId: string) => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  },
  getPaymentMethods: async (userId: string) => {
    const response = await api.get(`/users/${userId}/payment-methods`);
    return response.data;
  },
  deletePaymentMethod: async (userId: string, methodId: string) => {
    const response = await api.delete(`/users/${userId}/payment-methods/${methodId}`);
    return response.data;
  },
  getNotifications: async (userId: string) => {
    const response = await api.get(`/users/${userId}/notifications`);
    return response.data;
  },
  markNotificationAsRead: async (userId: string, notificationId: string) => {
    const response = await api.patch(`/users/${userId}/notifications/${notificationId}`);
    return response.data;
  },
  getLoyalty: async (userId: string) => {
    const response = await api.get(`/users/${userId}/loyalty`);
    return response.data;
  },
};