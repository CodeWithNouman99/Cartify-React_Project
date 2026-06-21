import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"        // I applied tailwindcss in App.css
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react';
import { DataProvider } from './context/DataContext.jsx';
import { CartProvider } from './context/CartContext.jsx';





const Publication_key = "pk_test_ZmluZXItYnVjay01LmNsZXJrLmFjY291bnRzLmRldiQ"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
        <ClerkProvider publishableKey={Publication_key}>
          <App />
        </ClerkProvider>
        </CartProvider>
    </DataProvider>
  </StrictMode>
)