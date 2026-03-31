import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"        // I applied tailwindcss in App.css
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react';

const Publication_key = "pk_test_ZmluZXItYnVjay01LmNsZXJrLmFjY291bnRzLmRldiQ"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={Publication_key}>
      <App />
    </ClerkProvider>
  </StrictMode>
)