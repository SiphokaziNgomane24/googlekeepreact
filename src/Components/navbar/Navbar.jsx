import './Navbar.css';

function Navbar({ searchTerm, onSearchChange, darkMode, onToggleDarkMode }) {
  return (
    <nav>
      <div className="logo">
        <div className="menu">
          <span className="material-symbols-outlined hover">menu</span>
        </div>
        <img
          src="https://www.gstatic.com/images/branding/productlogos/keep_2026/v2/web-48dp/logo_keep_2026_color_2x_web_48dp.png"
          alt="Google Keep logo"
        />
        <span className="logo-text">Google Keep</span>
      </div>
      <div className="search-area">
        <div className="search-icon">
          <span className="material-symbols-outlined hover">search</span>
          <input
            type="search"
            id="search-input"
            placeholder="Search notes"
            aria-label="Search notes by title, text, or category"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
          />
          {searchTerm && (
            <button
              className="clear-search"
              type="button"
              aria-label="Clear search"
              onClick={() => onSearchChange('')}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
        </div>
      </div>
      <div className="nav-icons">
        <span className="material-symbols-outlined hover">refresh</span>
      </div>
      <div className="nav-icons">
        <span className="material-symbols-outlined hover">view_agenda</span>
      </div>
      <button
        className="nav-icons theme-toggle"
        type="button"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={darkMode}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={onToggleDarkMode}
      >
        <span className="material-symbols-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</span>
      </button>
      <div className="profile-area">
        <div className="nav-icons">
          <span className="material-symbols-outlined hover">apps</span>
        </div>
        <div className="nav-icons">
          <span className="material-symbols-outlined hover">account_circle</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;