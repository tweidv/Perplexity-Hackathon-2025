// TEMPORARY: Using mock API service for development without backend
// TODO: Replace with real API calls when backend is ready
import { analyzeNews as mockAnalyzeNews, exportToCSV, downloadCSV, getTrendingTopics, getRecentAnalyses } from './api.mock';

console.warn('🚨 USING MOCK API SERVICE - FOR DEVELOPMENT ONLY');

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

/**
 * Analyze news story from headline or URL
 */
export async function analyzeNews(input, type = 'headline') {
  // Use mock service for now
  return await mockAnalyzeNews(input, type);
}

// Re-export mock functions
export { exportToCSV, downloadCSV, getTrendingTopics, getRecentAnalyses };
