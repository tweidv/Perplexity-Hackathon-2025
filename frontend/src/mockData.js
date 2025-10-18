// Market Data for Financial Ticker
export const mockMarketData = {
  sp500: { value: 6664.01, change: 0.53, direction: 'up' },
  nasdaq: { value: 22679.97, change: 0.52, direction: 'up' },
  us10yr: { value: 4.01, change: 0.00, direction: 'neutral' },
  crudeOil: { value: 57.54, change: 0.14, direction: 'up' },
  ftse100: { value: 9354.57, change: 0.86, direction: 'up' },
  gold: { value: 2421.00, change: 2.1, direction: 'up' }
};

// Mock User Data
export const mockUser = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://via.placeholder.com/40x40/4285f4/ffffff?text=JD',
  preferences: {
    categories: ['tech', 'business', 'science'],
    politicalBalance: 'center',
    sources: ['nytimes.com', 'bbc.com', 'reuters.com']
  },
  stats: {
    articlesRead: 127,
    topicsResearched: 23,
    accuracyScore: 94
  }
};

// Mock Stories Data
export const mockStories = [
  {
    id: 'story-1',
    headline: 'Tech Giant Announces Major AI Breakthrough',
    category: 'Tech',
    summary: 'TechCorp unveils revolutionary AI model with 500 billion parameters, promising to transform multiple industries.',
    imageUrl: 'https://via.placeholder.com/400x250/4285f4/ffffff?text=AI+Breakthrough',
    entities: ['TechCorp', 'AI', 'Silicon Valley', 'CEO Sarah Chen'],
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
    sources: [
      { domain: 'nytimes.com', region: 'US', leaning: 'center-left' },
      { domain: 'wsj.com', region: 'US', leaning: 'center-right' },
      { domain: 'bbc.com', region: 'UK', leaning: 'center' },
      { domain: 'reuters.com', region: 'Global', leaning: 'center' },
      { domain: 'techcrunch.com', region: 'US', leaning: 'tech' },
      { domain: 'theguardian.com', region: 'UK', leaning: 'left' }
    ],
    politicalBalance: { left: 25, center: 45, right: 30 },
    sourceCount: 6,
    readTime: '5 min read'
  },
  {
    id: 'story-2',
    headline: 'Climate Summit Reaches Historic Agreement',
    category: 'Climate',
    summary: 'Global leaders commit to unprecedented emissions reductions and renewable energy investments at COP29.',
    imageUrl: 'https://via.placeholder.com/400x250/34a853/ffffff?text=Climate+Summit',
    entities: ['COP29', 'UN', 'Climate Change', 'Renewable Energy'],
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
    sources: [
      { domain: 'reuters.com', region: 'Global', leaning: 'center' },
      { domain: 'bbc.com', region: 'UK', leaning: 'center' },
      { domain: 'theguardian.com', region: 'UK', leaning: 'left' },
      { domain: 'nytimes.com', region: 'US', leaning: 'center-left' },
      { domain: 'wsj.com', region: 'US', leaning: 'center-right' },
      { domain: 'aljazeera.com', region: 'Global', leaning: 'center' },
      { domain: 'dw.com', region: 'Germany', leaning: 'center' }
    ],
    politicalBalance: { left: 35, center: 50, right: 15 },
    sourceCount: 7,
    readTime: '7 min read'
  },
  {
    id: 'story-3',
    headline: 'Economic Policy Changes Announced',
    category: 'Business',
    summary: 'Federal Reserve signals potential interest rate adjustments amid inflation concerns and economic uncertainty.',
    imageUrl: 'https://via.placeholder.com/400x250/ea4335/ffffff?text=Economic+Policy',
    entities: ['Federal Reserve', 'Interest Rates', 'Inflation', 'Jerome Powell'],
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    sources: [
      { domain: 'wsj.com', region: 'US', leaning: 'center-right' },
      { domain: 'nytimes.com', region: 'US', leaning: 'center-left' },
      { domain: 'reuters.com', region: 'Global', leaning: 'center' },
      { domain: 'bloomberg.com', region: 'US', leaning: 'center' },
      { domain: 'cnbc.com', region: 'US', leaning: 'center' },
      { domain: 'bbc.com', region: 'UK', leaning: 'center' },
      { domain: 'ft.com', region: 'UK', leaning: 'center' },
      { domain: 'economist.com', region: 'UK', leaning: 'center-right' }
    ],
    politicalBalance: { left: 20, center: 60, right: 20 },
    sourceCount: 8,
    readTime: '6 min read'
  },
  {
    id: 'story-4',
    headline: 'Cats and Dogs: A Balanced Overview of Two Popular Pets',
    category: 'General',
    summary: 'Comprehensive analysis of pet ownership trends, health benefits, and care requirements for cats and dogs.',
    imageUrl: 'https://via.placeholder.com/400x250/ff6d01/ffffff?text=Pets',
    entities: ['Cats', 'Dogs', 'Pet Ownership', 'Animal Welfare'],
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
    sources: [
      { domain: 'bbc.com', region: 'UK', leaning: 'center' },
      { domain: 'nytimes.com', region: 'US', leaning: 'center-left' },
      { domain: 'theguardian.com', region: 'UK', leaning: 'left' },
      { domain: 'reuters.com', region: 'Global', leaning: 'center' },
      { domain: 'wsj.com', region: 'US', leaning: 'center-right' },
      { domain: 'cnn.com', region: 'US', leaning: 'center-left' }
    ],
    politicalBalance: { left: 30, center: 55, right: 15 },
    sourceCount: 6,
    readTime: '4 min read'
  },
  {
    id: 'story-5',
    headline: 'Fat and Furious: Understanding the Complexities of the Global Obesity Crisis',
    category: 'Health',
    summary: 'In-depth examination of global obesity trends, healthcare implications, and policy responses across different regions.',
    imageUrl: 'https://via.placeholder.com/400x250/4285f4/ffffff?text=Health',
    entities: ['Obesity', 'Healthcare', 'Public Health', 'WHO'],
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
    sources: [
      { domain: 'who.int', region: 'Global', leaning: 'center' },
      { domain: 'nytimes.com', region: 'US', leaning: 'center-left' },
      { domain: 'bbc.com', region: 'UK', leaning: 'center' },
      { domain: 'reuters.com', region: 'Global', leaning: 'center' },
      { domain: 'theguardian.com', region: 'UK', leaning: 'left' },
      { domain: 'wsj.com', region: 'US', leaning: 'center-right' },
      { domain: 'cnn.com', region: 'US', leaning: 'center-left' }
    ],
    politicalBalance: { left: 35, center: 50, right: 15 },
    sourceCount: 7,
    readTime: '8 min read'
  },
  {
    id: 'story-6',
    headline: 'Influenza Epidemic: Current Status and Perspectives',
    category: 'Health',
    summary: 'Latest updates on the 2024-2025 flu season, vaccination rates, and public health recommendations.',
    imageUrl: 'https://via.placeholder.com/400x250/34a853/ffffff?text=Influenza',
    entities: ['Influenza', 'Vaccination', 'CDC', 'Public Health'],
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
    sources: [
      { domain: 'cdc.gov', region: 'US', leaning: 'center' },
      { domain: 'who.int', region: 'Global', leaning: 'center' },
      { domain: 'nytimes.com', region: 'US', leaning: 'center-left' },
      { domain: 'bbc.com', region: 'UK', leaning: 'center' },
      { domain: 'reuters.com', region: 'Global', leaning: 'center' },
      { domain: 'theguardian.com', region: 'UK', leaning: 'left' },
      { domain: 'wsj.com', region: 'US', leaning: 'center-right' },
      { domain: 'cnn.com', region: 'US', leaning: 'center-left' }
    ],
    politicalBalance: { left: 25, center: 60, right: 15 },
    sourceCount: 8,
    readTime: '5 min read'
  }
];

// Main story for detailed view (keeping original structure)
export const mockStory = {
  id: 'story-1',
  headline: 'Tech Giant Announces Major AI Breakthrough',
  category: 'Tech',
  summary: 'TechCorp unveils revolutionary AI model with 500 billion parameters, promising to transform multiple industries.',
  imageUrl: 'https://via.placeholder.com/400x250/4285f4/ffffff?text=AI+Breakthrough',
  entities: ['TechCorp', 'AI', 'Silicon Valley', 'CEO Sarah Chen'],
  timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
  sources: [
    { domain: 'nytimes.com', region: 'US', leaning: 'center-left' },
    { domain: 'wsj.com', region: 'US', leaning: 'center-right' },
    { domain: 'bbc.com', region: 'UK', leaning: 'center' },
    { domain: 'reuters.com', region: 'Global', leaning: 'center' },
    { domain: 'techcrunch.com', region: 'US', leaning: 'tech' },
    { domain: 'theguardian.com', region: 'UK', leaning: 'left' }
  ],
  claims: [
    {
      id: 'claim-1',
      category: 'consensus',
      text: 'TechCorp announced a new AI model with 500 billion parameters',
      entities: ['TechCorp', 'AI model'],
      numbers: [{ value: 500000000000, unit: 'parameters' }],
      framing: { hedges: [], modality: ['announced'], loaded_terms: [] },
      stances: [
        { outlet: 'nytimes.com', stance: 'supports', quote: 'TechCorp unveiled its latest AI model featuring 500 billion parameters...', url: 'https://nytimes.com/article1', confidence: 0.95 },
        { outlet: 'wsj.com', stance: 'supports', quote: 'The company confirmed the model contains 500 billion parameters...', url: 'https://wsj.com/article1', confidence: 0.92 },
        { outlet: 'bbc.com', stance: 'supports', quote: 'TechCorp\'s new system has 500 billion parameters...', url: 'https://bbc.com/article1', confidence: 0.90 },
        { outlet: 'reuters.com', stance: 'supports', quote: 'Sources confirm 500 billion parameter count...', url: 'https://reuters.com/article1', confidence: 0.88 },
        { outlet: 'techcrunch.com', stance: 'supports', quote: '500B parameters make this the largest model yet...', url: 'https://techcrunch.com/article1', confidence: 0.93 },
        { outlet: 'theguardian.com', stance: 'supports', quote: 'The AI breakthrough features 500 billion parameters...', url: 'https://theguardian.com/article1', confidence: 0.89 }
      ]
    },
    {
      id: 'claim-2',
      category: 'consensus',
      text: 'CEO Sarah Chen led the announcement at company headquarters',
      entities: ['CEO Sarah Chen', 'headquarters'],
      numbers: [],
      framing: { hedges: [], modality: ['led'], loaded_terms: [] },
      stances: [
        { outlet: 'nytimes.com', stance: 'supports', quote: 'CEO Sarah Chen presented the breakthrough from headquarters...', url: 'https://nytimes.com/article1', confidence: 0.91 },
        { outlet: 'wsj.com', stance: 'supports', quote: 'Chen announced the news in a keynote speech...', url: 'https://wsj.com/article1', confidence: 0.89 },
        { outlet: 'bbc.com', stance: 'supports', quote: 'Sarah Chen, TechCorp CEO, revealed the model...', url: 'https://bbc.com/article1', confidence: 0.87 },
        { outlet: 'reuters.com', stance: 'neutral', quote: 'The announcement was made at headquarters...', url: 'https://reuters.com/article1', confidence: 0.60 },
        { outlet: 'techcrunch.com', stance: 'supports', quote: 'Chen delivered the news to packed press conference...', url: 'https://techcrunch.com/article1', confidence: 0.90 },
        { outlet: 'theguardian.com', stance: 'supports', quote: 'TechCorp\'s CEO Sarah Chen announced...', url: 'https://theguardian.com/article1', confidence: 0.85 }
      ]
    },
    {
      id: 'claim-3',
      category: 'disputed',
      text: 'The model will be available to consumers by end of 2025',
      entities: ['consumers', '2025'],
      numbers: [{ value: 2025, unit: 'year' }],
      framing: { hedges: ['will'], modality: ['expected', 'plans'], loaded_terms: [] },
      stances: [
        { outlet: 'nytimes.com', stance: 'supports', quote: 'TechCorp plans consumer release by December 2025...', url: 'https://nytimes.com/article1', confidence: 0.75 },
        { outlet: 'wsj.com', stance: 'refutes', quote: 'No consumer timeline was provided in the announcement...', url: 'https://wsj.com/article1', confidence: 0.82 },
        { outlet: 'bbc.com', stance: 'neutral', quote: 'The company mentioned potential consumer applications...', url: 'https://bbc.com/article1', confidence: 0.55 },
        { outlet: 'reuters.com', stance: 'refutes', quote: 'Chen declined to commit to a consumer launch date...', url: 'https://reuters.com/article1', confidence: 0.80 },
        { outlet: 'techcrunch.com', stance: 'supports', quote: 'Sources say late 2025 consumer rollout is planned...', url: 'https://techcrunch.com/article1', confidence: 0.68 },
        { outlet: 'theguardian.com', stance: 'neutral', quote: 'Timeline for public access remains unclear...', url: 'https://theguardian.com/article1', confidence: 0.62 }
      ]
    },
    {
      id: 'claim-4',
      category: 'disputed',
      text: 'The development cost exceeded $10 billion',
      entities: ['development cost'],
      numbers: [{ value: 10000000000, unit: 'USD' }],
      framing: { hedges: ['allegedly', 'reportedly'], modality: ['estimated'], loaded_terms: [] },
      stances: [
        { outlet: 'nytimes.com', stance: 'supports', quote: 'Sources estimate development costs surpassed $10 billion...', url: 'https://nytimes.com/article1', confidence: 0.70 },
        { outlet: 'wsj.com', stance: 'supports', quote: 'Industry analysts peg investment at over $10B...', url: 'https://wsj.com/article1', confidence: 0.72 },
        { outlet: 'bbc.com', stance: 'neutral', quote: 'TechCorp did not disclose development costs...', url: 'https://bbc.com/article1', confidence: 0.50 },
        { outlet: 'reuters.com', stance: 'refutes', quote: 'Company spokesperson denied $10B figure as speculative...', url: 'https://reuters.com/article1', confidence: 0.78 },
        { outlet: 'techcrunch.com', stance: 'supports', quote: 'Unnamed sources claim $10+ billion spent...', url: 'https://techcrunch.com/article1', confidence: 0.65 },
        { outlet: 'theguardian.com', stance: 'neutral', quote: 'Costs remain undisclosed, though likely in billions...', url: 'https://theguardian.com/article1', confidence: 0.58 }
      ]
    },
    {
      id: 'claim-5',
      category: 'missing',
      text: 'The AI model will be used for military applications',
      entities: ['military applications'],
      numbers: [],
      framing: { hedges: ['allegedly'], modality: ['could'], loaded_terms: ['military'] },
      stances: [
        { outlet: 'nytimes.com', stance: 'not_mentioned', quote: '', url: '', confidence: 0 },
        { outlet: 'wsj.com', stance: 'not_mentioned', quote: '', url: '', confidence: 0 },
        { outlet: 'bbc.com', stance: 'not_mentioned', quote: '', url: '', confidence: 0 },
        { outlet: 'reuters.com', stance: 'not_mentioned', quote: '', url: '', confidence: 0 },
        { outlet: 'techcrunch.com', stance: 'neutral', quote: 'Questions raised about potential defense contracts...', url: 'https://techcrunch.com/article1', confidence: 0.45 },
        { outlet: 'theguardian.com', stance: 'supports', quote: 'Critics warn of possible military use cases...', url: 'https://theguardian.com/article1', confidence: 0.55 }
      ]
    },
    {
      id: 'claim-6',
      category: 'missing',
      text: 'Former employees raised concerns about safety testing',
      entities: ['employees', 'safety testing'],
      numbers: [],
      framing: { hedges: ['allegedly'], modality: ['raised'], loaded_terms: ['concerns'] },
      stances: [
        { outlet: 'nytimes.com', stance: 'not_mentioned', quote: '', url: '', confidence: 0 },
        { outlet: 'wsj.com', stance: 'not_mentioned', quote: '', url: '', confidence: 0 },
        { outlet: 'bbc.com', stance: 'not_mentioned', quote: '', url: '', confidence: 0 },
        { outlet: 'reuters.com', stance: 'not_mentioned', quote: '', url: '', confidence: 0 },
        { outlet: 'techcrunch.com', stance: 'not_mentioned', quote: '', url: '', confidence: 0 },
        { outlet: 'theguardian.com', stance: 'supports', quote: 'Anonymous former staff question adequacy of safety protocols...', url: 'https://theguardian.com/article1', confidence: 0.68 }
      ]
    }
  ]
};

// Mock Categories Data
export const mockCategories = [
  { id: 'all', name: 'All News', count: 156, active: true },
  { id: 'world', name: 'World', count: 32, active: false },
  { id: 'business', name: 'Business', count: 28, active: false },
  { id: 'tech', name: 'Tech', count: 24, active: false },
  { id: 'climate', name: 'Climate', count: 18, active: false },
  { id: 'science', name: 'Science', count: 22, active: false },
  { id: 'health', name: 'Health', count: 15, active: false },
  { id: 'politics', name: 'Politics', count: 31, active: false },
  { id: 'culture', name: 'Culture', count: 12, active: false },
  { id: 'education', name: 'Education', count: 8, active: false },
  { id: 'sports', name: 'Sports', count: 14, active: false }
];

// Mock Search Suggestions
export const mockSearchSuggestions = [
  'Latest AI developments',
  'Climate change policies',
  'Federal Reserve interest rates',
  'Global economic outlook',
  'Healthcare technology trends',
  'Renewable energy investments',
  'Political election updates',
  'Scientific breakthrough news',
  'Technology stock market',
  'International trade agreements'
];

// Mock Quiz Data
export const mockQuizzes = [
  {
    id: 'quiz-1',
    title: 'AI and Technology Knowledge',
    description: 'Test your understanding of current AI developments and tech trends',
    questions: 10,
    difficulty: 'intermediate',
    estimatedTime: '5 minutes',
    category: 'tech',
    completed: false,
    score: null
  },
  {
    id: 'quiz-2',
    title: 'Climate Science Fundamentals',
    description: 'Assess your knowledge of climate change science and environmental policies',
    questions: 12,
    difficulty: 'advanced',
    estimatedTime: '7 minutes',
    category: 'climate',
    completed: true,
    score: 85
  },
  {
    id: 'quiz-3',
    title: 'Economic Indicators',
    description: 'Test your understanding of key economic metrics and market trends',
    questions: 8,
    difficulty: 'beginner',
    estimatedTime: '4 minutes',
    category: 'business',
    completed: false,
    score: null
  }
];

// Mock Leaderboard Data
export const mockLeaderboard = [
  { rank: 1, name: 'Sarah Johnson', score: 98, accuracy: 96, articlesRead: 245 },
  { rank: 2, name: 'Mike Chen', score: 95, accuracy: 94, articlesRead: 189 },
  { rank: 3, name: 'Emily Davis', score: 92, accuracy: 91, articlesRead: 203 },
  { rank: 4, name: 'Alex Rodriguez', score: 89, accuracy: 88, articlesRead: 167 },
  { rank: 5, name: 'Lisa Wang', score: 87, accuracy: 85, articlesRead: 156 },
  { rank: 6, name: 'David Kim', score: 84, accuracy: 82, articlesRead: 142 },
  { rank: 7, name: 'Jennifer Brown', score: 81, accuracy: 79, articlesRead: 134 },
  { rank: 8, name: 'Robert Taylor', score: 78, accuracy: 76, articlesRead: 128 },
  { rank: 9, name: 'Amanda Wilson', score: 75, accuracy: 73, articlesRead: 115 },
  { rank: 10, name: 'Kevin Lee', score: 72, accuracy: 70, articlesRead: 108 }
];

// Mock Research Topics
export const mockResearchTopics = [
  {
    id: 'topic-1',
    query: 'Latest developments in artificial intelligence',
    status: 'completed',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    sources: 12,
    politicalBalance: { left: 25, center: 50, right: 25 },
    summary: 'Recent AI breakthroughs include new language models, robotics advances, and ethical AI frameworks...'
  },
  {
    id: 'topic-2',
    query: 'Climate change policy updates',
    status: 'processing',
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    sources: null,
    politicalBalance: null,
    summary: null
  },
  {
    id: 'topic-3',
    query: 'Federal Reserve interest rate decisions',
    status: 'completed',
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    sources: 8,
    politicalBalance: { left: 20, center: 60, right: 20 },
    summary: 'The Fed maintained current rates while signaling potential future adjustments based on inflation data...'
  }
];

// Mock Notifications
export const mockNotifications = [
  {
    id: 'notif-1',
    type: 'new_article',
    title: 'New article published',
    message: 'Tech Giant Announces Major AI Breakthrough',
    timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    read: false
  },
  {
    id: 'notif-2',
    type: 'research_complete',
    title: 'Research completed',
    message: 'Your research on "Climate change policies" is ready',
    timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    read: false
  },
  {
    id: 'notif-3',
    type: 'quiz_reminder',
    title: 'Quiz reminder',
    message: 'Complete your weekly knowledge check',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    read: true
  }
];

// Mock Analytics Data
export const mockAnalytics = {
  userStats: {
    totalArticlesRead: 127,
    topicsResearched: 23,
    quizzesCompleted: 5,
    averageAccuracy: 94,
    streakDays: 7,
    timeSpent: '2h 45m'
  },
  readingTrends: {
    daily: [12, 15, 8, 20, 18, 22, 16],
    weekly: [95, 102, 87, 115, 108, 125, 98],
    categories: {
      'tech': 35,
      'business': 28,
      'climate': 22,
      'health': 18,
      'science': 15,
      'politics': 9
    }
  },
  accuracyMetrics: {
    overall: 94,
    byCategory: {
      'tech': 96,
      'business': 92,
      'climate': 95,
      'health': 93,
      'science': 97,
      'politics': 89
    }
  }
};
