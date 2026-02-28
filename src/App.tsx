import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { navCategories, pages } from './content';
import { useHints } from './hooks/useHints';

function App() {
  const [activePage, setActivePage] = useState(() => {
    const path = window.location.pathname.substring(1);
    if (path && pages[path]) return path;
    const stored = localStorage.getItem('geo_tips_activePage');
    if (stored && pages[stored]) {
      window.history.replaceState({}, '', stored === 'home' ? '/' : `/${stored}`);
      return stored;
    }
    return 'home';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.substring(1);
      setActivePage(path && pages[path] ? path : 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isCategory = navCategories.some(cat => cat.pages.includes(activePage));
  const { hints, loading } = useHints(activePage, isCategory);

  const handlePageSelect = (pageId: string) => {
    setActivePage(pageId);
    localStorage.setItem('geo_tips_activePage', pageId);
    window.history.pushState({}, '', pageId === 'home' ? '/' : `/${pageId}`);
    window.scrollTo(0, 0);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const currentPage = pages[activePage];

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="site-title" onClick={() => handlePageSelect('home')} style={{ cursor: 'pointer' }}>GeoGuessr Notes</h1>
      </header>

      <Sidebar
        categories={navCategories}
        activePage={activePage}
        onPageSelect={handlePageSelect}
        isMobileOpen={isMobileMenuOpen}
        onMobileToggle={toggleMobileMenu}
      />

      <Content
        page={currentPage}
        hints={hints}
        isCategoryPage={isCategory}
        loading={loading}
      />
    </div>
  );
}

export default App;
