import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer id="footer" className="footer">
                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-9 col-md-6 footer-about">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <span className="sitename">Blogy</span>
                            </a>
                            <div className="footer-contact pt-3">
                                <p>Mau Aima Prayagraj</p>
                                <p>Uttar Pradesh , 212507</p>
                                <p className="mt-3">
                                    <strong>Phone:</strong> <span>+91 6388190068</span>
                                </p>
                                <p>
                                    <strong>Email:</strong> <span>cppatel6388@gmail.com</span>
                                </p>
                            </div>
                            <div className="social-links d-flex mt-4">
                                <Link href="https://www.linkedin.com/in/chandra6388/">
                                    <i className="bi bi-linkedin" />
                                </Link>
                                <Link href="https://www.facebook.com/chandraprakash.patel.353803/">
                                    <i className="bi bi-facebook" />
                                </Link>
                                <Link href="https://www.instagram.com/i_m_cppatel/">
                                    <i className="bi bi-instagram" />
                                </Link>
                               
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about">About us</Link>
                                </li>
                               
                                <li>
                                    <Link href="#">Terms of service</Link>
                                </li>
                                <li>
                                    <Link href="#">Privacy policy</Link>
                                </li>
                            </ul>
                        </div>
                        
                        
                        
                    </div>
                </div>
                <div className="container copyright text-center mt-4">
                    <p>
                        © <span>Copyright</span> <strong className="px-1 sitename">Blogy</strong>{" "}
                        <span>All Rights Reserved</span>
                    </p>
                    <div className="credits">
                        Designed by <a href="https://www.linkedin.com/in/chandra6388/">Chandra Prakash</a>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
