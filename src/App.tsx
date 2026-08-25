import { BrowserRouter, createBrowserRouter, Outlet } from 'react-router'
import './App.css'
import Footer from './components/common/Footer'
import Navbaar from './components/common/Navbaar'
import Home from './pages/Home'

const MainFunction = () => {
  return (
    <div>
      <Navbaar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <MainFunction />,
    children: [
      { path: '/', element: <Home /> },
    ]
  }
])

function App() {

  return (
    <BrowserRouter router={router} />
  )
}

export default App
