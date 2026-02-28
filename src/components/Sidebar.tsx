import { useState } from 'react';
import { ChevronRight, ChevronDown, Search, Menu, X } from 'lucide-react';
import { NavCategory } from '../types';
import { pages, regions } from '../content';

interface SidebarProps {
  categories: NavCategory[];
  activePage: string;
  onPageSelect: (pageId: string) => void;
  isMobileOpen: boolean;
  onMobileToggle: () => void;
}

export default function Sidebar({ categories, activePage, onPageSelect, isMobileOpen, onMobileToggle }: SidebarProps) {
  const safeMobileToggle = () => {
    if (isMobileOpen) onMobileToggle();
  };
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('geo_tips_expandedCategories');
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch (e) { }
    }
    return new Set(categories.filter(cat => cat.isExpanded).map(cat => cat.id));
  });
  const [isRegionsOpen, setIsRegionsOpen] = useState(() => {
    return localStorage.getItem('geo_tips_isRegionsOpen') === 'true';
  });
  const [expandedRegionId, setExpandedRegionId] = useState<string | null>(() => {
    return localStorage.getItem('geo_tips_expandedRegionId');
  });
  const [searchQuery, setSearchQuery] = useState(() => {
    return localStorage.getItem('geo_tips_searchQuery') || '';
  });

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      localStorage.setItem('geo_tips_expandedCategories', JSON.stringify([...next]));
      return next;
    });
  };

  const toggleRegion = (regionId: string) => {
    setExpandedRegionId(prev => {
      const next = prev === regionId ? null : regionId;
      if (next) {
        localStorage.setItem('geo_tips_expandedRegionId', next);
      } else {
        localStorage.removeItem('geo_tips_expandedRegionId');
      }
      return next;
    });
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    localStorage.setItem('geo_tips_searchQuery', val);
  };

  const handleRegionsToggle = () => {
    setIsRegionsOpen(prev => {
      const next = !prev;
      localStorage.setItem('geo_tips_isRegionsOpen', String(next));
      return next;
    });
  };

  const filteredCategories = categories.map(category => {
    if (!searchQuery) return category;

    const filteredPages = category.pages.filter(pageId => {
      const page = pages[pageId];
      return page.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return { ...category, pages: filteredPages };
  }).filter(category => category.pages.length > 0);

  const filteredRegions = regions.map(region => {
    if (!searchQuery) return region;

    const matchesName = region.label.toLowerCase().includes(searchQuery.toLowerCase());
    const filteredPages = region.pages.filter(pageId => {
      const page = pages[pageId];
      return page.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    if (matchesName) return region;
    return { ...region, pages: filteredPages };
  }).filter(region => region.pages.length > 0);

  const showRegions = filteredRegions.length > 0;

  return (
    <>
      <button
        onClick={onMobileToggle}
        className="mobile-menu-toggle"
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="search-container">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-item" onClick={() => { onPageSelect('home'); safeMobileToggle(); }}>
            <span className={`nav-link ${activePage === 'home' ? 'active' : ''}`}>
              Home
            </span>
          </div>

          {filteredCategories.filter(cat => cat.id !== 'resources').map(category => {
            const isExpanded = expandedCategories.has(category.id);

            return (
              <div key={category.id} className="nav-category">
                <div className="category-header" onClick={() => toggleCategory(category.id)}>
                  <span className="category-arrow">
                    {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </span>
                  <span className="category-label">{category.label}</span>
                </div>

                {isExpanded && (
                  <div className="category-pages">
                    {category.pages.map(pageId => {
                      const page = pages[pageId];
                      return (
                        <div
                          key={pageId}
                          className="nav-item"
                          onClick={() => { onPageSelect(pageId); safeMobileToggle(); }}
                        >
                          <span className={`nav-link ${activePage === pageId ? 'active' : ''}`}>
                            {page.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Regions Section */}
          {showRegions && (
            <div className="nav-category regions-section">
              <div className="category-header" onClick={handleRegionsToggle}>
                <span className="category-arrow">
                  {isRegionsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </span>
                <span className="category-label">Regions</span>
              </div>

              {isRegionsOpen && (
                <div className="category-pages">
                  {filteredRegions.map(region => {
                    const isExpanded = searchQuery ? true : expandedRegionId === region.id;

                    return (
                      <div key={region.id} className="sub-category">
                        <div className="category-header sub-header" onClick={() => toggleRegion(region.id)}>
                          <span className="category-arrow">
                            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                          </span>
                          <span className="category-label sub-label">{region.label}</span>
                        </div>

                        {isExpanded && (
                          <div className="category-pages nested-pages">
                            {region.pages.map(pageId => {
                              const page = pages[pageId];
                              return (
                                <div
                                  key={pageId}
                                  className="nav-item"
                                  onClick={() => { onPageSelect(pageId); safeMobileToggle(); }}
                                >
                                  <span className={`nav-link ${activePage === pageId ? 'active' : ''}`}>
                                    {page.title}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Resources Section */}
          {filteredCategories.filter(cat => cat.id === 'resources').map(category => {
            const isExpanded = expandedCategories.has(category.id);

            return (
              <div key={category.id} className="nav-category">
                <div className="category-header" onClick={() => toggleCategory(category.id)}>
                  <span className="category-arrow">
                    {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </span>
                  <span className="category-label">{category.label}</span>
                </div>

                {isExpanded && (
                  <div className="category-pages">
                    {category.pages.map(pageId => {
                      const page = pages[pageId];
                      return (
                        <div
                          key={pageId}
                          className="nav-item"
                          onClick={() => { onPageSelect(pageId); safeMobileToggle(); }}
                        >
                          <span className={`nav-link ${activePage === pageId ? 'active' : ''}`}>
                            {page.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {isMobileOpen && <div className="sidebar-overlay" onClick={onMobileToggle} />}
    </>
  );
}
