import './Navbar.css';

function Navbar() {
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
          <input type="text" id="search-input" placeholder="Search" />
          <span className="material-symbols-outlined hover" id="clear-search" style={{ display: 'none' }}>
            close
          </span>
        </div>
      </div>
      <div className="nav-icons">
        <span className="material-symbols-outlined hover">refresh</span>
      </div>
      <div className="nav-icons">
        <span className="material-symbols-outlined hover">view_agenda</span>
      </div>
      <div className="nav-icons">
        <span className="material-symbols-outlined hover">settings</span>
      </div>
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