import { createBrowserRouter, Outlet, RouterProvider,  } from 'react-router-dom'
import './App.css'

import Navbaar from './components/common/Navbaar'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import VissionMission from './pages/VissionMission'
import OurPrograms from './pages/OurPrograms'
import HowItWorks from './pages/HowItWorks'
import BusinessPartners from './pages/BusinessPartners'
import GlobalExpansion from './pages/GlobalExpansion'
import Investors from './pages/Investors'
import BanksFinancial from './pages/BanksFinancial'
import Customer from './pages/Customer'
import FAQs from './pages/FAQs'
import ContactUs from './pages/ContactUs'
import LegalPages from './pages/LegalPages'

const MainFunction = () => {
  return (
    <div>
      <Navbaar />
      <Outlet />

    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <MainFunction />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <AboutUs /> },
      { path: '/vision-mission', element: <VissionMission /> },
      { path: '/OurPrograms', element: <OurPrograms /> },
      { path: '/HowItWorks', element: <HowItWorks /> },

      { path: '/BusinessPartners', element: <BusinessPartners /> },
      { path: '/global-expansion', element: <GlobalExpansion /> },
      { path: '/business-partners', element: <BusinessPartners /> },
      { path: '/GlobalExpansion', element: <GlobalExpansion /> },
      { path: '/Investors', element: <Investors /> },
      { path: '/BanksFinancial', element: <BanksFinancial /> },
      { path: '/Customer', element: <Customer /> },
      { path: '/FAQs', element: <FAQs /> },
      { path: '/ContactUs', element: <ContactUs /> },
      { path: '/LegalPages', element: <LegalPages /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App