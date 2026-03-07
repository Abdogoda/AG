import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { CacheProvider } from './contexts/CacheContext';
import ErrorBoundary from './Components/ErrorBoundary';
import SuspenseFallback from './Components/SuspenseFallback';

// Immediate load - lightweight or critical pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Particle from './Components/Particle';

// Lazy load - heavy pages with large components/images
const Portfolio = React.lazy(() => import('./Pages/Portfolio'));
const Project = React.lazy(() => import('./Pages/Project'));
const YouTube = React.lazy(() => import('./Pages/YouTube'));
const PlaylistDetail = React.lazy(() => import('./Pages/PlaylistDetail'));

function App() {
  return (
    <ErrorBoundary>
      <CacheProvider>
        <HelmetProvider>
          <Particle />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route
                path="projects"
                element={
                  <Suspense fallback={<SuspenseFallback />}>
                    <Portfolio />
                  </Suspense>
                }
              />
              <Route
                path="projects/:projectSlug"
                element={
                  <Suspense fallback={<SuspenseFallback />}>
                    <Project />
                  </Suspense>
                }
              />
              <Route
                path="youtube"
                element={
                  <Suspense fallback={<SuspenseFallback />}>
                    <YouTube />
                  </Suspense>
                }
              />
              <Route
                path="youtube/:playlistSlug"
                element={
                  <Suspense fallback={<SuspenseFallback />}>
                    <PlaylistDetail />
                  </Suspense>
                }
              />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </HelmetProvider>
      </CacheProvider>
    </ErrorBoundary>
  );
}

export default App;
