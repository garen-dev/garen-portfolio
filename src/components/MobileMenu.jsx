export default function MobileMenu({ open, onClose }) {
  return (
    <>
      <div
        className={`mobile-menu-overlay${open ? " open" : ""}`}
        onClick={onClose}
      />

      <aside
        className={`mobile-menu${open ? " open" : ""}`}
        style={{ left: open ? "0" : "-360px" }}
      >
        <div className="mobile-menu__header">
          <a href="/" className="mobile-menu__logo">
            LOGOTYPE
          </a>

          <button
            className="mobile-menu__close"
            onClick={onClose}
            type="button"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-menu__nav">
          <a href="/">
            <span className="mobile-menu__link-text">Demos</span>
            <span className="mobile-menu__arrow">⌄</span>
          </a>

          <a href="/">
            <span className="mobile-menu__link-text">Post</span>
            <span className="mobile-menu__arrow">⌄</span>
          </a>

          <a href="/">
            <span className="mobile-menu__link-text">Features</span>
            <span className="mobile-menu__arrow">⌄</span>
          </a>

          <a href="/">
            <span className="mobile-menu__link-text">Categories</span>
            <span className="mobile-menu__arrow">⌄</span>
          </a>

          <a href="/">
            <span className="mobile-menu__link-text">Shop</span>
            <span className="mobile-menu__arrow">⌄</span>
          </a>

          <a href="/">
            <span className="mobile-menu__link-text">Buy Now</span>
          </a>
        </nav>
      </aside>
    </>
  );
}