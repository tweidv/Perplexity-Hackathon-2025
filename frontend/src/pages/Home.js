import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { subscribeToAuthChanges } from '../services/authService';

function Home() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const features = [
    {
      title: 'Balanced News',
      description: 'Comprehensive, personally-curated news articles covering multiple perspectives',
      buttonText: 'Read News',
      buttonAction: () => navigate('/news'),
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Quiz Yourself',
      description: 'Understand your biases and knowledge. Compete on leaderboards and share your scores.',
      buttonText: 'Take Quiz',
      buttonAction: () => navigate('/quizzes'),
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <Header currentUser={currentUser} />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Powered by Perplexity AI
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Understand Your Biases
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${feature.gradient}`}></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <button
                  onClick={feature.buttonAction}
                  className={`w-full py-3 px-6 bg-gradient-to-r ${feature.gradient} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity`}
                >
                  {feature.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Learning?
          </h3>
          <p className="text-gray-600 mb-8">
            {currentUser ? (
              <>Welcome back, {currentUser.displayName}! Continue your learning journey.</>
            ) : (
              <>Sign in to track your progress and compete on the leaderboard.</>
            )}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate('/news')}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore News
            </button>
            <button
              onClick={() => navigate('/quizzes')}
              className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Take a Quiz
            </button>
            {!currentUser && (
              <button
                onClick={() => navigate('/')}
                className="px-8 py-3 bg-white text-gray-700 font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-gray-600 text-sm">
            <p className="mb-2">
              Powered by <span className="font-semibold">Perplexity AI</span> • Built for learning and growth
            </p>
            <p className="text-xs text-gray-500">
              © 2025 REALLY? All content generated with AI assistance.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;
