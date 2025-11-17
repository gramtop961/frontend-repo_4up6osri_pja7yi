import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import ErrorBoundary from './ErrorBoundary'
import './index.css'

const rootEl = document.getElementById('root')
if (!rootEl) {
  const msg = 'Root element with id="root" not found in index.html'
  // eslint-disable-next-line no-console
  console.error(msg)
  const fallback = document.createElement('div')
  fallback.style.minHeight = '100vh'
  fallback.style.display = 'flex'
  fallback.style.alignItems = 'center'
  fallback.style.justifyContent = 'center'
  fallback.style.background = '#000'
  fallback.style.color = '#fff'
  fallback.textContent = msg
  document.body.appendChild(fallback)
} else {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>,
  )
}
