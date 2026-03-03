import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuthStore } from '../store/auth';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LogoutButtonProps {
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ 
  variant = 'primary',
  className = ''
}) => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clear auth state and localStorage
    navigate('/'); // Redirect to homepage after logout
  };

  // Button style variants
  const buttonStyles = {
    primary: 'flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 rounded-md shadow-sm transition-all duration-200',
    outline: 'flex items-center px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition-all duration-200',
    text: 'flex items-center px-2 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-all duration-200'
  };

  return (
    <motion.button
      onClick={handleLogout}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${buttonStyles[variant]} ${className}`}
    >
      <LogOut className="h-4 w-4 mr-2" />
      Sign out
    </motion.button>
  );
};

export default LogoutButton;
