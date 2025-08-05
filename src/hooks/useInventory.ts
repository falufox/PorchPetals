import { useState, useEffect } from 'react';
import type { Bouquet } from '../types';
import { notionInventory } from '../services/notionService';

export const useInventory = () => {
  const [bouquets, setBouquets] = useState<Bouquet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchBouquets = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedBouquets = await notionInventory.getBouquets();
      setBouquets(fetchedBouquets);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch inventory');
      console.error('Error fetching bouquets:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateInventory = async (bouquetId: string, quantity: number) => {
    try {
      await notionInventory.updateInventory(bouquetId, quantity);
      // Refresh the local state
      setBouquets(prevBouquets => 
        prevBouquets.map(bouquet => 
          bouquet.id === bouquetId 
            ? { ...bouquet, available: quantity }
            : bouquet
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update inventory');
      throw err;
    }
  };

  const processOrder = async (orderItems: { bouquetId: string; quantity: number }[]) => {
    try {
      await notionInventory.processOrder(orderItems);
      // Refresh inventory after processing order
      await fetchBouquets();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process order');
      throw err;
    }
  };

  useEffect(() => {
    fetchBouquets();
    
    // Set up auto-refresh every 5 minutes
    const interval = setInterval(fetchBouquets, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return {
    bouquets,
    loading,
    error,
    lastUpdated,
    refresh: fetchBouquets,
    updateInventory,
    processOrder
  };
};