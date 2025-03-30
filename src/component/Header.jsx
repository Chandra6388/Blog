import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <header id="header" className="header position-relative">
        <div className="container-fluid container-xl position-relative">
          <div className="top-row d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-end">
              
              <h1 className="sitename">Blogy</h1>
              <span>.</span>
            </a>
            <div className="d-flex align-items-center">
              <div className="social-links">
                <a href="#" className="facebook">
                  <i className="bi bi-facebook" />
                </a>
                <a href="#" className="twitter">
                  <i className="bi bi-twitter" />
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram" />
                </a>
              </div>
              <form className="search-form ms-4">
                <input type="text" placeholder="Search..." className="form-control" />
                <button type="submit" className="btn">
                  <i className="bi bi-search" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="container d-flex justify-content-center position-relative">
            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <Link href="/" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about">About</Link>

                </li>
                <li>
                  <Link href="/category">Category</Link>
                </li>
                <li>
                  <Link href="blog-details">Blog Details</Link>
                </li>
                <li>
                  <Link href="author-profile">Author Profile</Link>
                </li>
              
                <li>
                  <Link href="contact">Contact</Link>
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list" />
            </nav>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header