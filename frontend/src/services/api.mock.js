// TEMPORARY MOCK API SERVICE
// This file provides mock API responses for UI development without backend
// TODO: Replace with real API calls when backend is ready

console.warn('🚨 USING MOCK API SERVICE - FOR DEVELOPMENT ONLY');

import { mockStory } from '../mockData';

// Simulate API delay
const simulateDelay = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Analyze news story from headline or URL
 */
export async function analyzeNews(input, type = 'headline') {
  console.log('Mock analyzeNews called with:', { input, type });
  
  // Simulate API delay
  await simulateDelay(2000);
  
  // Return mock data with some variation based on input
  const baseStory = { ...mockStory };
  
  // Modify headline based on input
  if (type === 'headline') {
    baseStory.headline = input || baseStory.headline;
  } else {
    baseStory.headline = `Analysis of: ${input}`;
  }
  
  // Add some randomness to make it feel more dynamic
  baseStory.id = `story-${Date.now()}`;
  baseStory.timestamp = new Date().toISOString();
  
  // Randomly modify some claim confidences
  baseStory.claims = baseStory.claims.map(claim => ({
    ...claim,
    stances: claim.stances.map(stance => ({
      ...stance,
      confidence: Math.max(0.5, Math.min(0.95, stance.confidence + (Math.random() - 0.5) * 0.2))
    }))
  }));
  
  return baseStory;
}

/**
 * Transform backend response to frontend format
 */
function transformAnalysisResponse(response) {
  const { consensus = [], disputed = [], missing = [], headline, entities, sources, meta } = response;

  // Flatten all claims with category
  const allClaims = [
    ...consensus.map(c => ({ ...transformClaim(c), category: 'consensus' })),
    ...disputed.map(c => ({ ...transformClaim(c), category: 'disputed' })),
    ...missing.map(c => ({ ...transformClaim(c), category: 'missing' }))
  ];

  return {
    id: response.analysisId || `story-${Date.now()}`,
    headline: headline || 'Analysis Result',
    entities: entities || [],
    timestamp: meta?.timestamp || new Date().toISOString(),
    sources: sources || [],
    claims: allClaims,
    meta
  };
}

/**
 * Transform individual claim from backend format
 */
function transformClaim(claim) {
  return {
    id: claim.claim_id || `claim-${Date.now()}`,
    text: claim.canonical_text || claim.text || '',
    entities: claim.entities || [],
    numbers: claim.numbers || [],
    framing: claim.framing || { hedges: [], modality: [], loaded_terms: [] },
    stances: (claim.outlets || claim.stances || []).map(outlet => ({
      outlet: outlet.domain || outlet.outlet || '',
      stance: outlet.stance || 'neutral',
      quote: outlet.quote || '',
      url: outlet.url || '',
      confidence: outlet.confidence || 0
    }))
  };
}

/**
 * Export claims to CSV
 */
export function exportToCSV(story) {
  const headers = ['Claim', 'Category', ...story.sources.map(s => s.domain)];
  const rows = [headers];

  for (const claim of story.claims) {
    const row = [
      `"${claim.text.replace(/"/g, '""')}"`,
      claim.category
    ];

    for (const source of story.sources) {
      const stance = claim.stances.find(s => s.outlet === source.domain);
      row.push(stance ? stance.stance : 'not_mentioned');
    }

    rows.push(row);
  }

  return rows.map(row => row.join(',')).join('\n');
}

/**
 * Download CSV file
 */
export function downloadCSV(story) {
  const csv = exportToCSV(story);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `news-analysis-${story.id || Date.now()}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Mock function to get trending topics
 */
export async function getTrendingTopics() {
  console.log('Mock getTrendingTopics called');
  await simulateDelay(500);
  
  return [
    { id: '1', name: 'AI Breakthrough', category: 'Technology', count: 45 },
    { id: '2', name: 'Climate Summit', category: 'Environment', count: 32 },
    { id: '3', name: 'Economic Policy', category: 'Business', count: 28 },
    { id: '4', name: 'Space Mission', category: 'Science', count: 21 },
    { id: '5', name: 'Healthcare Reform', category: 'Health', count: 18 }
  ];
}

/**
 * Mock function to get recent analyses
 */
export async function getRecentAnalyses() {
  console.log('Mock getRecentAnalyses called');
  await simulateDelay(800);
  
  return [
    {
      id: 'analysis-1',
      headline: 'Tech Giant Announces Major AI Breakthrough',
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
      claimCount: 6,
      sourceCount: 6
    },
    {
      id: 'analysis-2',
      headline: 'Climate Summit Reaches Historic Agreement',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      claimCount: 8,
      sourceCount: 5
    },
    {
      id: 'analysis-3',
      headline: 'Economic Policy Changes Announced',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
      claimCount: 5,
      sourceCount: 7
    }
  ];
}
