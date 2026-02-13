// CacheContext.js - Global cache management context
import React, { createContext, useContext, useCallback } from 'react';
import cacheService from '../utils/cacheService';

const CacheContext = createContext();

/**
 * Cache Provider - Provides cache management to all components
 * Wrap your app with this provider to enable global cache management
 */
export const CacheProvider = ({ children }) => {
  const clearAllCache = useCallback(() => {
    cacheService.clear();
    console.log('✓ All cache cleared');
  }, []);

  const clearDataCache = useCallback(() => {
    cacheService.clearPattern('^data-');
    console.log('✓ Data cache cleared');
  }, []);

  const clearYouTubeCache = useCallback(() => {
    cacheService.clearPattern('^yt-');
    console.log('✓ YouTube cache cleared');
  }, []);

  const clearCacheByPattern = useCallback((pattern) => {
    cacheService.clearPattern(pattern);
    console.log(`✓ Cache cleared for pattern: ${pattern}`);
  }, []);

  const getCacheStats = useCallback(() => {
    return cacheService.getStats();
  }, []);

  const getCacheStatus = useCallback(() => {
    const stats = cacheService.getStats();
    return {
      ...stats,
      isCached: stats.totalCacheSize > 0,
      lastUpdated: new Date().toLocaleTimeString(),
    };
  }, []);

  const value = {
    clearAllCache,
    clearDataCache,
    clearYouTubeCache,
    clearCacheByPattern,
    getCacheStats,
    getCacheStatus,
  };

  return (
    <CacheContext.Provider value={value}>{children}</CacheContext.Provider>
  );
};

/**
 * useCache Hook - Use this in any component to access cache management
 * @returns {object} Cache management methods and utilities
 */
export const useCache = () => {
  const context = useContext(CacheContext);
  if (!context) {
    throw new Error('useCache must be used within a CacheProvider');
  }
  return context;
};

export default CacheContext;
