
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react'
const Home = lazy(() => import('./pages/home/Home'));
const Cart = lazy(() => import('./pages/cart/Cart'));
const About = lazy(() => import('./pages/about/About'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Header = lazy(() => import('./components/header/Header'));
const SingleProduct = lazy(() => import('./components/collections/single/SingleProduct'));
const Men = lazy(() => import('./components/collections/men/Men'));
const Women = lazy(() => import('./components/collections/women/Women'));
const Beauty = lazy(() => import('./components/collections/beauty/Beauty'));
const Electronics = lazy(() => import('./components/collections/electronics/Electronics'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/privacy-policy/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/terms-conditions/TermsConditions'));
const HomeLivings = lazy(() => import('./components/collections/home-livings/HomeLivings'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'product/:id',
          element: <SingleProduct />
        },
        {
          path: 'men',
          element: <Men />
        },

        {
          path: 'women',
          element: <Women />
        },
        {
          path: 'beauty',
          element: <Beauty />
        },
        {
          path: 'electronics',
          element: <Electronics />
        },
        {
          path: 'home-livings',
          element: <HomeLivings />
        },

        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'privacy-policy',
          element: <PrivacyPolicy />
        },
        {
          path: 'terms-conditions',
          element: <TermsConditions />
        },
        {
          path: 'cart',
          element: <Cart />
        },
        {
          path: 'checkout',
          element: <Checkout />
        },
      ]

    }
  ])
  return (
    <Suspense fallback=<div>Loading......!</div>>
      <RouterProvider router={router} />
      <Footer />
    </Suspense>
  )
}

export default App
