import { MENU_DATA } from "../data/menuData.js";

export default function StickyNav() {
  return (
    <nav className="main-nav" role="navigation">
      {MENU_DATA.map((item) => {
        const hasSubmenu = item.sub && item.sub.length > 0;

        return (
          <div className="nav-item" key={item.label}>
            <a href="#">
              <span>{item.label}</span>

              {hasSubmenu && (
                <span className="caret">
                  <svg width="10" height="6" viewBox="0 0 10 6">
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              )}
            </a>

            {hasSubmenu && (
              <div className="dropdown">
                {item.sub.map((subItem) => (
                  <a href="#" key={subItem}>
                    <span className="dropdown-text">{subItem}</span>

                    <span className="arrow">
                      <svg width="6" height="10" viewBox="0 0 6 10">
                        <path
                          d="M1 1L5 5L1 9"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}