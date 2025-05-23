import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <>
            <main className="main">
                {/* Page Title */}
                <div className="page-title">
                    <div className="breadcrumbs">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
              <i className="bi bi-house" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/category">Category</Link>
          </li>
          <li className="breadcrumb-item active current">About</li>
        </ol>
                        </nav>
                    </div>
                    <div className="title-wrapper">
                        <h1>Contact</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                </div>
                {/* End Page Title */}
                {/* Contact Section */}
                <section id="contact" className="contact section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4 mb-5">
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                                <div className="info-card">
                                    <div className="icon-box">
                                        <i className="bi bi-geo-alt" />
                                    </div>
                                    <h3>Our Address</h3>
                                    <p>2847 Rainbow Road, Springfield, IL 62701, USA</p>
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                                <div className="info-card">
                                    <div className="icon-box">
                                        <i className="bi bi-telephone" />
                                    </div>
                                    <h3>Contact Number</h3>
                                    <p>
                                        Mobile: +1 (555) 123-4567
                                        <br />
                                        Email: info@example.com
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
                                <div className="info-card">
                                    <div className="icon-box">
                                        <i className="bi bi-clock" />
                                    </div>
                                    <h3>Opening Hour</h3>
                                    <p>
                                        Monday - Saturday: 9:00 - 18:00
                                        <br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-wrapper" data-aos="fade-up" data-aos-delay={400}>
                                    <form
                                        action="forms/contact.php"
                                        method="post"
                                        role="form"
                                        className="php-email-form"
                                    >
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-person" />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Your name*"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-envelope" />
                                                    </span>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        placeholder="Email address*"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-phone" />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="phone"
                                                        placeholder="Phone number*"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-list" />
                                                    </span>
                                                    <select name="subject" className="form-control" required="">
                                                        <option value="">Select service*</option>
                                                        <option value="Service 1">Consulting</option>
                                                        <option value="Service 2">Development</option>
                                                        <option value="Service 3">Marketing</option>
                                                        <option value="Service 4">Support</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group mt-3">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-chat-dots" />
                                                    </span>
                                                    <textarea
                                                        className="form-control"
                                                        name="message"
                                                        rows={6}
                                                        placeholder="Write a message*"
                                                        required=""
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="my-3">
                                                <div className="loading">Loading</div>
                                                <div className="error-message" />
                                                <div className="sent-message">
                                                    Your message has been sent. Thank you!
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit">Submit Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /Contact Section */}
            </main>


        </>
    )
}

export default Contact