# Temporary Mock Setup for UI Development

This document describes the temporary mock setup created to allow UI/UX development without Firebase or backend services.

## 🚨 Important Notes

- **This is temporary code for development only**
- **All mock services should be replaced with real implementations before production**
- **Mock data is clearly marked and easily removable**

## Files Created/Modified

### Mock Firebase Configuration
- `frontend/src/firebase.js` - Mock Firebase services (auth, firestore, etc.)
- `frontend/src/services/authService.mock.js` - Mock authentication service
- `frontend/src/services/api.mock.js` - Mock API service with sample data

### Modified Services
- `frontend/src/services/authService.js` - Now imports from mock service
- `frontend/src/services/api.js` - Now imports from mock service  
- `frontend/src/services/newsApi.js` - Updated with mock implementations

## Mock Data Features

### Authentication
- Mock sign up, sign in, sign out functions
- Simulated API delays for realistic UX
- Mock user data and state management
- Console warnings to indicate mock usage

### News Analysis
- Uses existing `mockData.js` for sample news stories
- Simulates API calls with realistic delays
- Returns varied data based on input parameters
- Includes sample claims, sources, and stances

### News Articles
- Mock article generation and retrieval
- Category filtering support
- Realistic article metadata (word count, reading time, etc.)

## How to Use

1. **Start the development server:**
   ```bash
   cd frontend
   npm start
   ```

2. **Test authentication:**
   - Try signing in with any email/password
   - Use `simulateLogin()` and `simulateLogout()` functions in console

3. **Test news analysis:**
   - Enter any headline or URL
   - Mock data will be returned with realistic delays

## Removing Mock Code

When ready to implement real services:

1. **Replace Firebase mock:**
   - Delete `firebase.js` and `authService.mock.js`
   - Update `authService.js` to use real Firebase imports
   - Configure real Firebase project

2. **Replace API mocks:**
   - Delete `api.mock.js`
   - Update `api.js` and `newsApi.js` to use real API endpoints
   - Implement backend services

3. **Clean up:**
   - Remove this `MOCK_SETUP.md` file
   - Remove console warnings
   - Update environment variables

## Mock Data Structure

The mock data follows the same structure as the real API:

```javascript
// Story object
{
  id: 'story-1',
  headline: 'Tech Giant Announces Major AI Breakthrough',
  entities: ['TechCorp', 'AI', 'Silicon Valley'],
  timestamp: '2025-01-17T...',
  sources: [
    { domain: 'nytimes.com', region: 'US', leaning: 'center-left' }
  ],
  claims: [
    {
      id: 'claim-1',
      category: 'consensus',
      text: 'TechCorp announced a new AI model...',
      stances: [
        { outlet: 'nytimes.com', stance: 'supports', quote: '...', url: '...', confidence: 0.95 }
      ]
    }
  ]
}
```

## Development Tips

- All mock functions include console logging for debugging
- API delays are configurable in each mock service
- Mock data can be easily modified in `mockData.js`
- Authentication state is managed in `authService.mock.js`

## Next Steps

1. Develop and test UI/UX components
2. Implement real Firebase configuration
3. Build backend API services
4. Replace mock services with real implementations
5. Deploy to production

---

**Remember: This is temporary development code only!**
