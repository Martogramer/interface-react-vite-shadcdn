import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import RoutesLayout from './routes/RoutesLayout';
import ErrorBoundary from '@/components/errorPage/ErrorBoundary';
import { ThemeProvider } from '@/context/ThemeContext';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <ThemeProvider>
          <RoutesLayout />
        </ThemeProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
