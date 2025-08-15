// hooks/useCompare.js
'use client';
import { useState, useEffect, useCallback } from 'react';
import { CompareService } from '@/lib/compareService';

export const useCompare = () => {
  const [compareList, setCompareList] = useState({});
  const [compareData, setCompareData] = useState({ products: [], categories: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // localStorage-dan compare siyahısını yukle
  const loadCompareList = useCallback(() => {
    const stored = CompareService.getCompareList();
    setCompareList(stored);
  }, []);

  // local compare-dən məhsul məlumatlarını topla (backend yoxdur)
  const fetchCompareData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const rawCompareList = CompareService.getCompareList();
      const hasAny = Object.keys(rawCompareList).length > 0;
      if (!hasAny) {
        setCompareData({ products: [], categories: [] });
        setIsLoading(false);
        return;
      }

      const { products, categories } = CompareService.getAllProducts();
      setCompareData({ products: products || [], categories: categories || [] });
    } catch (err) {
      console.error('Compare data fetch error (local):', err);
      setError(err.message || 'Məhsul məlumatları alınarkən xəta baş verdi');
      setCompareData({ products: [], categories: [] });
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Məhsulu compare-a əlavə et
  // qəbul edir: addToCompare(productObject, categoryId) və ya addToCompare(productId, categoryId)
  const addToCompare = useCallback(async (productOrId, categoryId) => {
    try {
      CompareService.addToCompare(productOrId, categoryId);
      loadCompareList();
      await fetchCompareData();
      return { success: true };
    } catch (error) {
      console.error('Add to compare error:', error);
      return { success: false, error: error.message || 'Add failed' };
    }
  }, [loadCompareList, fetchCompareData]);

  // Məhsulu compare-dan sil
  const removeFromCompare = useCallback(async (productId) => {
    try {
      const removed = CompareService.removeFromCompare(productId);
      if (removed) {
        loadCompareList();
        await fetchCompareData();
      }
      return { success: true };
    } catch (error) {
      console.error('Remove from compare error:', error);
      return { success: false, error: error.message || 'Remove failed' };
    }
  }, [loadCompareList, fetchCompareData]);

  // Compare siyahısını təmizlə
  const clearCompare = useCallback(async () => {
    try {
      CompareService.clearCompareList();
      loadCompareList();
      setCompareData({ products: [], categories: [] });
      return { success: true };
    } catch (error) {
      console.error('Clear compare error:', error);
      return { success: false, error: error.message || 'Clear failed' };
    }
  }, [loadCompareList]);

  // Component mount olduqda və localStorage dəyişdikdə yukle
  useEffect(() => {
    loadCompareList();
  }, [loadCompareList]);

  useEffect(() => {
    // Anytime compareList changes, rebuild compareData
    if (Object.keys(compareList).length > 0) {
      fetchCompareData();
    } else {
      setCompareData({ products: [], categories: [] });
    }
  }, [compareList, fetchCompareData]);

  // Storage event listener (başqa tab-larda dəyişiklik olduqda)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === CompareService.STORAGE_KEY || e.key === CompareService.PRODUCTS_KEY) {
        loadCompareList();
      }
    };

    // also listen to custom event
    const onCompareUpdated = () => {
      loadCompareList();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('compare_updated', onCompareUpdated);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('compare_updated', onCompareUpdated);
    };
  }, [loadCompareList]);

  return {
    compareList,
    compareData,
    isLoading,
    error,
    addToCompare,
    removeFromCompare,
    clearCompare,
    compareCount: CompareService.getCompareCount(),
    isInCompare: CompareService.isInCompare,
    refresh: fetchCompareData
  };
};
