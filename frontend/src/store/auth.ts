// frontend/store/auth.ts
import { create } from 'zustand';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

interface User {
  _id: string;
  name: string;
  email: string;
  token: string;
}

interface AuthResponse {
  _id: string;
  name: string;
  email: string;
  token: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  isAuthenticated: !!localStorage.getItem('user'),
  isLoading: false,
  error: null,
  
  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await axios.post<AuthResponse>(`${API_BASE_URL}/auth/login`, {
        email,
        password
      });
      
      // Store user data and token in localStorage
      localStorage.setItem('user', JSON.stringify(response.data));
      
      set({
        user: response.data,
        isAuthenticated: true,
        isLoading: false
      });
      window.location.href = '/dashboard';
    } catch (error: any) {
      const errorMessage = 
        error.response?.data?.message || 
        'Login failed. Please check your credentials.';
      
      set({
        error: errorMessage,
        isLoading: false,
        isAuthenticated: false
      });
      
      throw new Error(errorMessage);
    }
  },
  
  register: async (name: string, email: string, password: string) => {
    set({ isLoading: true, error: null });
    
    try {
      // Add a console log to check the request
      console.log('Sending registration request with data:', { name, email, password: '***' });
      
      const response = await axios.post<AuthResponse>(`${API_BASE_URL}/auth/register`, {
        name,
        email,
        password
      },
      { withCredentials: true });
      
      console.log('Registration response:', response.data);
      
      // Registration successful
      set({ isLoading: false });
      
      return;
    } catch (error: any) {
      console.error("Registration error:", error);
      
      // Get the actual error message from the server
      let errorMessage;
      
      if (error.response) {
        // Check for specific error codes
        if (error.response.status === 409) {
          errorMessage = 'Email already exists. Please use a different email.';
        } else if (error.response.status === 400) {
          errorMessage = error.response.data?.message || 'Invalid registration data.';
        } else {
          errorMessage = error.response.data?.message || 
                         `Registration failed. Server responded with: ${error.response.status}`;
        }
        console.log("Response data:", error.response.data);
      } else if (error.request) {
        errorMessage = 'No response received from server. Please check your connection.';
      } else {
        errorMessage = error.message || 'Registration failed. Please try again.';
      }
      
      set({
        error: errorMessage,
        isLoading: false
      });
      
      throw new Error(errorMessage);
    }
  },
  
  logout: () => {
    localStorage.removeItem('user');
    set({
      user: null,
      isAuthenticated: false,
      error: null
    });
  }
}));