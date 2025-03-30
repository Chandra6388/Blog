import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
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
      <h1>Blog Details</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </div>
  </div>
  {/* End Page Title */}
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        {/* Blog Details Section */}
        <section id="blog-details" className="blog-details section">
          <div className="container" data-aos="fade-up">
            <article className="article">
              <div className="hero-img" data-aos="zoom-in">
                <img
                  src="assets/img/blog/blog-post-3.webp"
                  alt="Featured blog image"
                  className="img-fluid"
                  loading="lazy"
                />
                <div className="meta-overlay">
                  <div className="meta-categories">
                    <a href="#" className="category">
                      Web Development
                    </a>
                    <span className="divider">•</span>
                    <span className="reading-time">
                      <i className="bi bi-clock" /> 6 min read
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="article-content"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="content-header">
                  <h1 className="title">
                    Modern Web Development: Best Practices and Future Trends for
                    2025
                  </h1>
                  <div className="author-info">
                    <div className="author-details">
                      <img
                        src="assets/img/person/person-f-8.webp"
                        alt="Author"
                        className="author-img"
                      />
                      <div className="info">
                        <h4>Michael Chen</h4>
                        <span className="role">Senior Web Developer</span>
                      </div>
                    </div>
                    <div className="post-meta">
                      <span className="date">
                        <i className="bi bi-calendar3" /> Mar 15, 2025
                      </span>
                      <span className="divider">•</span>
                      <span className="comments">
                        <i className="bi bi-chat-text" /> 18 Comments
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <p className="lead">
                    The landscape of web development continues to evolve at an
                    unprecedented pace, bringing new technologies, frameworks,
                    and methodologies that reshape how we build modern web
                    applications.
                  </p>
                  <p>
                    As we delve into 2025, the web development ecosystem has
                    transformed dramatically, introducing innovative approaches
                    to building faster, more secure, and highly engaging web
                    experiences. This comprehensive guide explores the latest
                    trends and best practices that are defining the future of
                    web development.
                  </p>
                  <div className="content-image right-aligned">
                    <img
                      src="assets/img/blog/blog-hero-2.webp"
                      className="img-fluid"
                      alt="Modern web development tools"
                      loading="lazy"
                    />
                    <figcaption>
                      Modern development environments emphasize collaboration
                      and efficiency
                    </figcaption>
                  </div>
                  <h2>The Rise of Web Components</h2>
                  <p>
                    Web Components have become increasingly crucial in modern
                    web development, offering a standardized way to create
                    reusable custom elements. Key advantages include:
                  </p>
                  <ul>
                    <li>
                      Enhanced code reusability across different frameworks
                    </li>
                    <li>Better encapsulation of functionality</li>
                    <li>Improved maintenance and scalability</li>
                    <li>Framework-agnostic component development</li>
                  </ul>
                  <div className="highlight-box">
                    <h3>Key Trends in 2025</h3>
                    <ul className="trend-list">
                      <li>
                        <i className="bi bi-lightning-charge" />
                        <span>Edge Computing and Serverless Architecture</span>
                      </li>
                      <li>
                        <i className="bi bi-shield-check" />
                        <span>Enhanced Security Measures</span>
                      </li>
                      <li>
                        <i className="bi bi-phone" />
                        <span>Progressive Web Apps (PWAs)</span>
                      </li>
                    </ul>
                  </div>
                  <h2>Performance Optimization</h2>
                  <p>
                    Performance remains a critical factor in web development,
                    with an increasing focus on Core Web Vitals and user
                    experience metrics. Modern applications must be optimized
                    for both speed and efficiency.
                  </p>
                  <blockquote>
                    <p>
                      "The future of web development lies not just in writing
                      code, but in creating seamless, accessible, and performant
                      experiences that work for everyone, everywhere."
                    </p>
                    <cite>Emily Thompson, Web Performance Architect</cite>
                  </blockquote>
                  <div className="content-grid">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="info-card">
                          <i className="bi bi-speedometer2" />
                          <h4>Performance Metrics</h4>
                          <p>
                            Focus on Core Web Vitals and user-centric
                            performance metrics for better search rankings and
                            user experience.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="info-card">
                          <i className="bi bi-universal-access" />
                          <h4>Accessibility</h4>
                          <p>
                            Implementing WCAG guidelines and ensuring web
                            applications are accessible to all users across
                            different devices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2>Looking Forward</h2>
                  <p>
                    As we continue through 2025, web development practices will
                    further evolve, embracing new technologies while maintaining
                    a strong foundation in performance, accessibility, and user
                    experience. Staying updated with these trends and best
                    practices is crucial for developers looking to build modern,
                    scalable web applications.
                  </p>
                </div>
                <div className="meta-bottom">
                  <div className="tags-section">
                    <h4>Related Topics</h4>
                    <div className="tags">
                      <a href="#" className="tag">
                        Web Development
                      </a>
                      <a href="#" className="tag">
                        Performance
                      </a>
                      <a href="#" className="tag">
                        Best Practices
                      </a>
                      <a href="#" className="tag">
                        Trends
                      </a>
                      <a href="#" className="tag">
                        2025
                      </a>
                    </div>
                  </div>
                  <div className="share-section">
                    <h4>Share Article</h4>
                    <div className="social-links">
                      <a href="#" className="twitter">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="#" className="facebook">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="#" className="linkedin">
                        <i className="bi bi-linkedin" />
                      </a>
                      <a href="#" className="copy-link" title="Copy Link">
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* /Blog Details Section */}
        {/* Blog Author Section */}
        <section id="blog-author" className="blog-author section">
          <div className="container" data-aos="fade-up">
            <div className="author-box">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-4 text-center">
                  <img
                    src="assets/img/person/person-f-12.webp"
                    className="author-img rounded-circle"
                    alt=""
                    loading="lazy"
                  />
                  <div className="author-social-links mt-3">
                    <a href="https://twitter.com/#" className="twitter">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="https://linkedin.com/#" className="linkedin">
                      <i className="bi bi-linkedin" />
                    </a>
                    <a href="https://github.com/#" className="github">
                      <i className="bi bi-github" />
                    </a>
                    <a href="https://facebook.com/#" className="facebook">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="https://instagram.com/#" className="instagram">
                      <i className="bi bi-instagram" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-8">
                  <div className="author-content">
                    <h3 className="author-name">Sarah Anderson</h3>
                    <span className="author-title">
                      Senior Tech Writer &amp; Developer Advocate
                    </span>
                    <div className="author-bio mt-3">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium. Passionate
                      about creating content that bridges the gap between
                      developers and end-users.
                    </div>
                    <div className="author-website mt-3">
                      <a href="#" className="website-link">
                        <i className="bi bi-globe" />
                        <span>sarahanderson.dev</span>
                      </a>
                      <a href="#" className="more-posts">
                        Read More from Sarah <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Blog Author Section */}
        {/* Blog Comments Section */}
        <section id="blog-comments" className="blog-comments section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="blog-comments-3">
              <div className="section-header">
                <h3>
                  Discussion <span className="comment-count">(8)</span>
                </h3>
              </div>
              <div className="comments-wrapper">
                {/* Comment 1 */}
                <article className="comment-card">
                  <div className="comment-header">
                    <div className="user-info">
                      <img
                        src="assets/img/person/person-f-9.webp"
                        alt="User avatar"
                        loading="lazy"
                      />
                      <div className="meta">
                        <h4 className="name">Sarah Williams</h4>
                        <span className="date">
                          <i className="bi bi-calendar3" /> February 13, 2025
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="comment-content">
                    <p>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                    </p>
                  </div>
                  <div className="comment-actions">
                    <button className="action-btn like-btn">
                      <i className="bi bi-hand-thumbs-up" />
                      <span>12</span>
                    </button>
                    <button className="action-btn reply-btn">
                      <i className="bi bi-reply" />
                      <span>Reply</span>
                    </button>
                  </div>
                </article>
                {/* Comment 2 with replies */}
                <article className="comment-card">
                  <div className="comment-header">
                    <div className="user-info">
                      <img
                        src="assets/img/person/person-m-9.webp"
                        alt="User avatar"
                        loading="lazy"
                      />
                      <div className="meta">
                        <h4 className="name">James Cooper</h4>
                        <span className="date">
                          <i className="bi bi-calendar3" /> February 13, 2025
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="comment-content">
                    <p>
                      Quisque ut nisi. Donec mi odio, faucibus at, scelerisque
                      quis, convallis in, nisi. Suspendisse non nisl sit amet
                      velit hendrerit rutrum. Ut leo. Ut a nisl id ante tempus
                      hendrerit.
                    </p>
                  </div>
                  <div className="comment-actions">
                    <button className="action-btn like-btn">
                      <i className="bi bi-hand-thumbs-up" />
                      <span>8</span>
                    </button>
                    <button className="action-btn reply-btn">
                      <i className="bi bi-reply" />
                      <span>Reply</span>
                    </button>
                  </div>
                  {/* Reply Thread */}
                  <div className="reply-thread">
                    {/* Reply 1 */}
                    <article className="comment-card reply">
                      <div className="comment-header">
                        <div className="user-info">
                          <img
                            src="assets/img/person/person-f-9.webp"
                            alt="User avatar"
                            loading="lazy"
                          />
                          <div className="meta">
                            <h4 className="name">Emily Parker</h4>
                            <span className="date">
                              <i className="bi bi-calendar3" /> February 13,
                              2025
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="comment-content">
                        <p>
                          Cras ultricies mi eu turpis hendrerit fringilla.
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia Curae.
                        </p>
                      </div>
                      <div className="comment-actions">
                        <button className="action-btn like-btn">
                          <i className="bi bi-hand-thumbs-up" />
                          <span>5</span>
                        </button>
                        <button className="action-btn reply-btn">
                          <i className="bi bi-reply" />
                          <span>Reply</span>
                        </button>
                      </div>
                    </article>
                    {/* Reply 2 */}
                    <article className="comment-card reply">
                      <div className="comment-header">
                        <div className="user-info">
                          <img
                            src="assets/img/person/person-f-7.webp"
                            alt="User avatar"
                            loading="lazy"
                          />
                          <div className="meta">
                            <h4 className="name">Daniel Brown</h4>
                            <span className="date">
                              <i className="bi bi-calendar3" /> February 13,
                              2025
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="comment-content">
                        <p>
                          Nam commodo suscipit quam. Vestibulum ullamcorper
                          mauris at ligula. Fusce fermentum odio nec arcu.
                        </p>
                      </div>
                      <div className="comment-actions">
                        <button className="action-btn like-btn">
                          <i className="bi bi-hand-thumbs-up" />
                          <span>3</span>
                        </button>
                        <button className="action-btn reply-btn">
                          <i className="bi bi-reply" />
                          <span>Reply</span>
                        </button>
                      </div>
                    </article>
                  </div>
                </article>
                {/* Comment 3 */}
                <article className="comment-card">
                  <div className="comment-header">
                    <div className="user-info">
                      <img
                        src="assets/img/person/person-m-6.webp"
                        alt="User avatar"
                        loading="lazy"
                      />
                      <div className="meta">
                        <h4 className="name">Rachel Adams</h4>
                        <span className="date">
                          <i className="bi bi-calendar3" /> February 13, 2025
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="comment-content">
                    <p>
                      Vivamus elementum semper nisi. Aenean vulputate eleifend
                      tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                      eleifend ac, enim.
                    </p>
                  </div>
                  <div className="comment-actions">
                    <button className="action-btn like-btn">
                      <i className="bi bi-hand-thumbs-up" />
                      <span>6</span>
                    </button>
                    <button className="action-btn reply-btn">
                      <i className="bi bi-reply" />
                      <span>Reply</span>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* /Blog Comments Section */}
        {/* Blog Comment Form Section */}
        <section id="blog-comment-form" className="blog-comment-form section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <form method="post" role="form">
              <div className="section-header">
                <h3>Share Your Thoughts</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <div className="row gy-3">
                <div className="col-md-6 form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Enter your full name"
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email address"
                    required=""
                  />
                </div>
                <div className="col-12 form-group">
                  <label htmlFor="website">Website</label>
                  <input
                    type="url"
                    name="website"
                    className="form-control"
                    id="website"
                    placeholder="Your website (optional)"
                  />
                </div>
                <div className="col-12 form-group">
                  <label htmlFor="comment">Your Comment *</label>
                  <textarea
                    className="form-control"
                    name="comment"
                    id="comment"
                    rows={5}
                    placeholder="Write your thoughts here..."
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn-submit">
                    Post Comment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* /Blog Comment Form Section */}
      </div>
      <div className="col-lg-4 sidebar">
        <div
          className="widgets-container"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          {/* Search Widget */}
          <div className="search-widget widget-item">
            <h3 className="widget-title">Search</h3>
            <form action="">
              <input type="text" />
              <button type="submit" title="Search">
                <i className="bi bi-search" />
              </button>
            </form>
          </div>
          {/*/Search Widget */}
          {/* Categories Widget */}
          <div className="categories-widget widget-item">
            <h3 className="widget-title">Categories</h3>
            <ul className="mt-3">
              <li>
                <a href="#">
                  General <span>(25)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Lifestyle <span>(12)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Travel <span>(5)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Design <span>(22)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Creative <span>(8)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Educaion <span>(14)</span>
                </a>
              </li>
            </ul>
          </div>
          {/*/Categories Widget */}
          {/* Categories Widget */}
          <div className="categories-widget widget-item">
            <h3 className="widget-title">Categories</h3>
            <ul className="mt-3">
              <li>
                <a href="#">
                  General <span>(25)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Lifestyle <span>(12)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Travel <span>(5)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Design <span>(22)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Creative <span>(8)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Educaion <span>(14)</span>
                </a>
              </li>
            </ul>
          </div>
          {/*/Categories Widget */}
          {/* Recent Posts Widget */}
          <div className="recent-posts-widget widget-item">
            <h3 className="widget-title">Recent Posts</h3>
            <div className="post-item">
              <img
                src="assets/img/blog/blog-post-square-1.webp"
                alt=""
                className="flex-shrink-0"
              />
              <div>
                <h4>
                  <a href="blog-details.html">
                    Nihil blanditiis at in nihil autem
                  </a>
                </h4>
                <time dateTime="2020-01-01">Jan 1, 2020</time>
              </div>
            </div>
            {/* End recent post item*/}
            <div className="post-item">
              <img
                src="assets/img/blog/blog-post-square-2.webp"
                alt=""
                className="flex-shrink-0"
              />
              <div>
                <h4>
                  <a href="blog-details.html">Quidem autem et impedit</a>
                </h4>
                <time dateTime="2020-01-01">Jan 1, 2020</time>
              </div>
            </div>
            {/* End recent post item*/}
            <div className="post-item">
              <img
                src="assets/img/blog/blog-post-square-3.webp"
                alt=""
                className="flex-shrink-0"
              />
              <div>
                <h4>
                  <a href="blog-details.html">
                    Id quia et et ut maxime similique occaecati ut
                  </a>
                </h4>
                <time dateTime="2020-01-01">Jan 1, 2020</time>
              </div>
            </div>
            {/* End recent post item*/}
            <div className="post-item">
              <img
                src="assets/img/blog/blog-post-square-4.webp"
                alt=""
                className="flex-shrink-0"
              />
              <div>
                <h4>
                  <a href="blog-details.html">
                    Laborum corporis quo dara net para
                  </a>
                </h4>
                <time dateTime="2020-01-01">Jan 1, 2020</time>
              </div>
            </div>
            {/* End recent post item*/}
            <div className="post-item">
              <img
                src="assets/img/blog/blog-post-square-5.webp"
                alt=""
                className="flex-shrink-0"
              />
              <div>
                <h4>
                  <a href="blog-details.html">
                    Et dolores corrupti quae illo quod dolor
                  </a>
                </h4>
                <time dateTime="2020-01-01">Jan 1, 2020</time>
              </div>
            </div>
            {/* End recent post item*/}
          </div>
          {/*/Recent Posts Widget */}
          {/* Tags Widget */}
          <div className="tags-widget widget-item">
            <h3 className="widget-title">Tags</h3>
            <ul>
              <li>
                <a href="#">App</a>
              </li>
              <li>
                <a href="#">IT</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Mac</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
              <li>
                <a href="#">Office</a>
              </li>
              <li>
                <a href="#">Creative</a>
              </li>
              <li>
                <a href="#">Studio</a>
              </li>
              <li>
                <a href="#">Smart</a>
              </li>
              <li>
                <a href="#">Tips</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
            </ul>
          </div>
          {/*/Tags Widget */}
        </div>
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default page
