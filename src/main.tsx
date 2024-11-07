import './theme/tailwind.css'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './theme/index.css'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
<StrictMode>
    <App/>
</StrictMode>,
)
