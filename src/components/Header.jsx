import StickyNav from "./StickyNav";

export default function Header({ onHamburger, onSearchToggle, searchOpen }) {
  return (
    <header className="site-header">
      <div className="site-header__top">
        <div className="site-header__side site-header__side--left">
          <button
            className="site-header__icon-btn hamburger"
            onClick={onHamburger}
            type="button"
            aria-label="Open menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>

        <span className="logotype">Logotype</span>

        <div className="site-header__side site-header__side--right">
          <button
            className={`site-header__icon-btn search-toggle${
              searchOpen ? " is-open" : ""
            }`}
            onClick={onSearchToggle}
            type="button"
            aria-label="Open search"
          >
            <span className="search-icon" />
          </button>
        </div>
      </div>

      <div className="header-nav-row">
        <StickyNav />
      </div>
    </header>
  );
}