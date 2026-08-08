import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

const NAV_ITEMS = [
  {
    label: 'About',
    children: [
      { label: 'Zoe', to: '/about/zoe' },
      { label: 'CV', to: '/about/cv' },
    ],
  },
  {
    label: 'Projects',
    children: [
      { label: 'Senior Thesis', to: '/projects/senior-thesis' },
    ],
  },
  {
    label: 'Algorithms Explained',
    children: [
      { label: 'Decision Making Algorithms', to: '/algorithms/decision-making' },
      { label: 'NeurIPS', to: '/algorithms/neurips' },
      { label: 'Other', to: '/algorithms/other' },
    ],
  },
  {
    label: 'Fun',
    children: [
      { label: 'Drive to Alaska', to: '/fun/alaska' },
      { label: 'Yoga with Friends', to: '/fun/yoga' },
    ],
  },
]

function Nav() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    function onClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <header className={styles.header} ref={navRef}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.brand}>
          Zoe Hickey
        </Link>

        <button
          type="button"
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`}>
          {NAV_ITEMS.map((item) => (
            <div className={styles.item} key={item.label}>
              <button
                type="button"
                className={styles.itemButton}
                aria-expanded={openMenu === item.label}
                onClick={() =>
                  setOpenMenu((cur) => (cur === item.label ? null : item.label))
                }
              >
                {item.label}
                <span className={styles.caret} aria-hidden="true">
                  ▾
                </span>
              </button>
              <div
                className={`${styles.dropdown} ${
                  openMenu === item.label ? styles.dropdownOpen : ''
                }`}
              >
                {item.children.map((child) => (
                  <NavLink
                    key={child.to}
                    to={child.to}
                    className={({ isActive }) =>
                      `${styles.dropdownLink} ${isActive ? styles.dropdownLinkActive : ''}`
                    }
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Nav
