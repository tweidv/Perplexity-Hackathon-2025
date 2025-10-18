import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { subscribeToAuthChanges } from '../services/authService';
import { mockStories, mockQuizzes } from '../mockData';

function Home() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Get top 5 news stories and quizzes
  const topNews = mockStories.slice(0, 5);
  const topQuizzes = mockQuizzes.slice(0, 5);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header currentUser={currentUser} />

      {/* Main Split Layout */}
      <div className="flex" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Left Side - Blue Container */}
        <div className="w-1/2 flex flex-col" style={{ backgroundColor: 'rgb(0, 0, 255)' }}>
          
          {/* NEWS - Right aligned in blue container */}
          <div className="flex justify-end" style={{ padding: '4px' }}>
            <h2 className="text-8xl font-bold text-white leading-tight font-archivo-black" style={{ marginRight: '20px' }}>NEWS</h2>
          </div>

          {/* News Cards */}
          <div className="flex-1 px-8 pb-8 space-y-4 overflow-y-auto scrollbar-hide">
            {topNews.map((article, index) => (
              <div
                key={article.id}
                onClick={() => navigate(`/article/${article.id}`)}
                className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {article.headline}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {article.summary}
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Red Container */}
        <div className="w-1/2 flex flex-col" style={{ backgroundColor: 'rgb(255, 0, 0)' }}>
          
          {/* QUIZ - Left aligned in red container */}
          <div className="flex justify-start" style={{ padding: '4px' }}>
            <h2 className="text-8xl font-bold text-white leading-tight font-archivo-black" style={{ marginLeft: '20px' }}>QUIZ</h2>
          </div>

          {/* Quiz Cards */}
          <div className="flex-1 px-8 pb-8 space-y-4 overflow-y-auto scrollbar-hide">
            {topQuizzes.map((quiz, index) => (
              <div
                key={quiz.id}
                onClick={() => navigate(`/quizzes/${quiz.id}`)}
                className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {quiz.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {quiz.description}
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{quiz.questions} questions • {quiz.estimatedTime}</span>
                  <span className="capitalize">{quiz.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
