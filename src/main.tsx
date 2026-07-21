import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/common/Layout'
import './styles/global.css'

const Home = lazy(() => import('./pages/Home'))
const Why = lazy(() => import('./pages/WhyUniqGro'))
const How = lazy(() => import('./pages/HowItWorks'))
const Cap = lazy(() => import('./pages/Capabilities'))
const Community = lazy(() => import('./pages/Community'))
const Forum = lazy(() => import('./pages/Forum'))
const Discussion = lazy(() => import('./pages/ForumDiscussion'))
const Profile = lazy(() => import('./pages/FounderProfile'))
const About = lazy(() => import('./pages/About'))
const Founder = lazy(() => import('./pages/Founder'))
const Resources = lazy(() => import('./pages/Resources'))
const Apply = lazy(() => import('./pages/Apply'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

import { Privacy, Terms, Guidelines } from './pages/Legal'

if (sessionStorage.redirect) {
  const u = new URL(sessionStorage.redirect)
  sessionStorage.removeItem('redirect')
  history.replaceState(null, '', u.pathname + u.search + u.hash)
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'why-uniqgro', element: <Why /> },
        { path: 'how-it-works', element: <How /> },
        { path: 'capabilities', element: <Cap /> },
        { path: 'community', element: <Community /> },
        { path: 'forum', element: <Forum /> },
        { path: 'forum/:postId', element: <Discussion /> },
        { path: 'founders/:username', element: <Profile /> },
        { path: 'about', element: <About /> },
        { path: 'founder', element: <Founder /> },
        { path: 'resources', element: <Resources /> },
        { path: 'apply', element: <Apply /> },
        { path: 'contact', element: <Contact /> },
        { path: 'privacy', element: <Privacy /> },
        { path: 'terms', element: <Terms /> },
        { path: 'community-guidelines', element: <Guidelines /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  {
    basename: '/uniqgro-website',
  }
)

function Loading() {
  return (
    <div className="section">
      <div className="container">
        <div className="skeleton" />
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
)
