import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { EventProvider } from './context/EventContext.tsx'


createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <EventProvider>
      <App />
    </EventProvider>
  </BrowserRouter>

)
