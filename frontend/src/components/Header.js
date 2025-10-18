import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfileWidget from './UserProfileWidget';
import AuthModal from './AuthModal';

function Header({ currentUser, showTitle = false, title = "EduHub" }) {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Logo/Title */}
            <div className="flex items-center gap-3">
              <div>
                <img 
                  src="/really-logo.jpg" 
                  alt="REALLY?" 
                  className="h-8 w-auto"
                />
                {showTitle && (
                  <p className="text-xs text-gray-600">Learn, Quiz, Compete</p>
                )}
              </div>
            </div>

            {/* Right side - Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors uppercase"
              >
                Home
              </button>
              <button
                onClick={() => navigate('/news')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors uppercase"
              >
                News
              </button>
              <button
                onClick={() => navigate('/quizzes')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors uppercase"
              >
                Take Quiz
              </button>
              <button
                onClick={() => navigate('/leaderboard')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors uppercase"
              >
                Leaderboard
              </button>
              <UserProfileWidget
                user={currentUser}
                onSignInClick={() => setIsAuthModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode="signin"
      />
    </>
  );
}

export default Header;
