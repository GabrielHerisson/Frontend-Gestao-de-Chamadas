import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import "./index.css"
import App from './App.jsx'

//     <RouterProvider router={router} />
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)

