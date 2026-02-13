// Cache Service - Manages in-memory and localStorage caching with expiration
class CacheService {
  constructor() {
    this.memoryCache = new Map(); // In-memory cache (fast but lost on refresh)
    this.cachePrefix = 'app_cache_'; // Prefix for localStorage keys
    this.defaultTTL = 60 * 60 * 1000; // 1 hour default TTL in milliseconds
  }

  /**
   * Set cache with optional TTL
   * @param {string} key - Cache key
   * @param {any} data - Data to cache
   * @param {number} ttl - Time to live in milliseconds (optional)
   */
  set(key, data, ttl = this.defaultTTL) {
    const cacheEntry = {
      data,
      timestamp: Date.now(),
      ttl,
      expiresAt: Date.now() + ttl,
    };

    // Store in memory cache
    this.memoryCache.set(key, cacheEntry);

    // Store in localStorage for persistence across page navigation
    try {
      localStorage.setItem(this.cachePrefix + key, JSON.stringify(cacheEntry));
    } catch (error) {
      // localStorage might be full or disabled
      console.warn(
        'localStorage is unavailable, using memory cache only:',
        error
      );
    }
  }

  /**
   * Get cache if it exists and hasn't expired
   * @param {string} key - Cache key
   * @returns {any|null} - Cached data or null if expired/missing
   */
  get(key) {
    // Check memory cache first (fastest)
    let cacheEntry = this.memoryCache.get(key);

    // If not in memory, try localStorage
    if (!cacheEntry) {
      try {
        const storedEntry = localStorage.getItem(this.cachePrefix + key);
        if (storedEntry) {
          cacheEntry = JSON.parse(storedEntry);
          // Restore to memory cache for faster future access
          this.memoryCache.set(key, cacheEntry);
        }
      } catch (error) {
        console.warn('Error reading from localStorage:', error);
      }
    }

    // Check if cache has expired
    if (cacheEntry) {
      if (Date.now() > cacheEntry.expiresAt) {
        // Cache expired, remove it
        this.remove(key);
        return null;
      }
      return cacheEntry.data;
    }

    return null;
  }

  /**
   * Check if a key exists and is valid (not expired)
   * @param {string} key - Cache key
   * @returns {boolean}
   */
  has(key) {
    return this.get(key) !== null;
  }

  /**
   * Remove a specific cache entry
   * @param {string} key - Cache key
   */
  remove(key) {
    this.memoryCache.delete(key);
    try {
      localStorage.removeItem(this.cachePrefix + key);
    } catch (error) {
      console.warn('Error removing from localStorage:', error);
    }
  }

  /**
   * Clear all cache
   */
  clear() {
    this.memoryCache.clear();
    try {
      const keys = Object.keys(localStorage);
      keys.forEach((key) => {
        if (key.startsWith(this.cachePrefix)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('Error clearing localStorage:', error);
    }
  }

  /**
   * Clear cache by pattern (useful for clearing specific data types)
   * @param {string} pattern - Key pattern (wildcard)
   */
  clearPattern(pattern) {
    const regex = new RegExp(pattern);

    // Clear from memory cache
    for (const key of this.memoryCache.keys()) {
      if (regex.test(key)) {
        this.memoryCache.delete(key);
      }
    }

    // Clear from localStorage
    try {
      const keys = Object.keys(localStorage);
      keys.forEach((key) => {
        if (
          key.startsWith(this.cachePrefix) &&
          regex.test(key.replace(this.cachePrefix, ''))
        ) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('Error clearing localStorage by pattern:', error);
    }
  }

  /**
   * Get cache stats (useful for debugging)
   * @returns {object}
   */
  getStats() {
    const memoryCacheSize = this.memoryCache.size;
    let localStorageCacheSize = 0;

    try {
      const keys = Object.keys(localStorage);
      localStorageCacheSize = keys.filter((key) =>
        key.startsWith(this.cachePrefix)
      ).length;
    } catch (error) {
      console.warn('Error getting localStorage stats:', error);
    }

    return {
      memoryCacheSize,
      localStorageCacheSize,
      totalCacheSize: memoryCacheSize + localStorageCacheSize,
    };
  }
}

// Export singleton instance
const cacheServiceInstance = new CacheService();
export default cacheServiceInstance;

// Export class for testing or multiple instances if needed
export { CacheService };
