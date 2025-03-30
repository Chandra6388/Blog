import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <main className="main">
  {/* Page Title */}
  <div className="page-title position-relative">
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
      <h1>Blog Category</h1>
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
        {/* Category Postst Section */}
        <section id="category-postst" className="category-postst section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-6">
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-post-1.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Politics</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Dolorum optio tempore voluptas dignissimos
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/person/person-f-12.webp"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Maria Doe</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jan 1, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
              <div className="col-lg-6">
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-post-2.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Sports</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Nisi magni odit consequatur autem nulla dolorem
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/person/person-f-13.webp"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Allisa Mayer</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jun 5, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
              <div className="col-lg-6">
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-post-3.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Entertainment</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Possimus soluta ut id suscipit ea ut in quo quia et soluta
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/person/person-m-10.webp"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Mark Dower</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jun 22, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
              <div className="col-lg-6">
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-post-4.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Sports</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Non rem rerum nam cum quo minus olor distincti
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/person/person-f-14.webp"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Lisa Neymar</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jun 30, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
              <div className="col-lg-6">
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-post-5.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Politics</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Accusamus quaerat aliquam qui debitis facilis consequatur
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/person/person-m-11.webp"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Denis Peterson</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jan 30, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
              <div className="col-lg-6">
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-post-6.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="post-category">Entertainment</p>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Distinctio provident quibusdam numquam aperiam aut
                    </a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/img/person/person-f-15.webp"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Mika Lendon</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Feb 14, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* End post list item */}
            </div>
          </div>
        </section>
        {/* /Category Postst Section */}
        {/* Pagination 2 Section */}
        <section id="pagination-2" className="pagination-2 section">
          <div className="container">
            <div className="d-flex justify-content-center">
              <ul>
                <li>
                  <a href="#">
                    <i className="bi bi-chevron-left" />
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#" className="active">
                    2
                  </a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>...</li>
                <li>
                  <a href="#">10</a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* /Pagination 2 Section */}
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
