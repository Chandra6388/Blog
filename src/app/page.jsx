"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import img from '@/img/bgimg.jpeg'
import styles from "./page.module.css";

export default function Home() {

  console.log("SSS", img)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });  
  }, []);

  return (
    <main className="main">


      <section id="blog-hero" className="blog-hero section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="blog-grid">
            <article className="blog-item featured" data-aos="fade-up">
              <img
                src="/assets/img/blog/blog-post-3.webp"
                alt="Blog Image"
                className="img-fluid"
              />
              <div className="blog-content">
                <div className="post-meta">
                  <span className="date">Apr. 14th, 2025</span>
                  <span className="category">Technology</span>
                </div>
                <h2 className="post-title">
                  <a
                    href="blog-details.html"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </a>
                </h2>
              </div>
            </article>

            <article className="blog-item" data-aos="fade-up" data-aos-delay={100}>
              <img
                src="assets/img/blog/blog-post-portrait-1.webp"
                alt="Blog Image"
                className="img-fluid"
              />
              <div className="blog-content">
                <div className="post-meta">
                  <span className="date">Apr. 14th, 2025</span>
                  <span className="category">Security</span>
                </div>
                <h3 className="post-title">
                  <a
                    href="blog-details.html"
                    title="Sed do eiusmod tempor incididunt ut labore"
                  >
                    Sed do eiusmod tempor incididunt ut labore
                  </a>
                </h3>
              </div>
            </article>
            <article className="blog-item" data-aos="fade-up" data-aos-delay={200}>
              <img
                src="assets/img/blog/blog-post-9.webp"
                alt="Blog Image"
                className="img-fluid"
              />
              <div className="blog-content">
                <div className="post-meta">
                  <span className="date">Apr. 14th, 2025</span>
                  <span className="category">Career</span>
                </div>
                <h3 className="post-title">
                  <a
                    href="blog-details.html"
                    title="Ut enim ad minim veniam, quis nostrud exercitation"
                  >
                    Ut enim ad minim veniam, quis nostrud exercitation
                  </a>
                </h3>
              </div>
            </article>
            <article className="blog-item" data-aos="fade-up" data-aos-delay={300}>
              <img
                src="assets/img/blog/blog-post-7.webp"
                alt="Blog Image"
                className="img-fluid"
              />
              <div className="blog-content">
                <div className="post-meta">
                  <span className="date">Apr. 14th, 2025</span>
                  <span className="category">Cloud</span>
                </div>
                <h3 className="post-title">
                  <a
                    href="blog-details.html"
                    title="Adipiscing elit, sed do eiusmod tempor incididunt"
                  >
                    Adipiscing elit, sed do eiusmod tempor incididunt
                  </a>
                </h3>
              </div>
            </article>
            <article className="blog-item" data-aos="fade-up" data-aos-delay={400}>
              <img
                src="assets/img/blog/blog-post-6.webp"
                alt="Blog Image"
                className="img-fluid"
              />
              <div className="blog-content">
                <div className="post-meta">
                  <span className="date">Apr. 14th, 2025</span>
                  <span className="category">Programming</span>
                </div>
                <h3 className="post-title">
                  <a
                    href="blog-details.html"
                    title="Excepteur sint occaecat cupidatat non proident"
                  >
                    Excepteur sint occaecat cupidatat non proident
                  </a>
                </h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="featured-posts" className="featured-posts section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Featured Posts</h2>
          <div>
            <span>Check Our</span>{" "}
            <span className="description-title">Featured Posts</span>
          </div>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="blog-posts-slider swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="blog-post-item">
                  <img
                    src="assets/img/blog/blog-post-portrait-1.webp"
                    alt="Blog Image"
                  />
                  <div className="blog-post-content">
                    <div className="post-meta">
                      <span>
                        <i className="bi bi-person" /> Julia Parker
                      </span>
                      <span>
                        <i className="bi bi-clock" /> Jan 15, 2025
                      </span>
                      <span>
                        <i className="bi bi-chat-dots" /> 6 Comments
                      </span>
                    </div>
                    <h2>
                      <a href="#">
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit
                        amet
                      </a>
                    </h2>
                    <p>
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Fusce porttitor metus eget
                      lectus consequat, sit amet feugiat magna vulputate.
                    </p>
                    <a href="#" className="read-more">
                      Read More <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="blog-post-item">
                  <img
                    src="assets/img/blog/blog-post-portrait-2.webp"
                    alt="Blog Image"
                  />
                  <div className="blog-post-content">
                    <div className="post-meta">
                      <span>
                        <i className="bi bi-person" /> Mark Wilson
                      </span>
                      <span>
                        <i className="bi bi-clock" /> Jan 18, 2025
                      </span>
                      <span>
                        <i className="bi bi-chat-dots" /> 6 Comments
                      </span>
                    </div>
                    <h2>
                      <a href="#">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem
                      </a>
                    </h2>
                    <p>
                      Maecenas tempus tellus eget condimentum rhoncus sem quam
                      semper libero sit amet adipiscing sem neque sed ipsum.
                    </p>
                    <a href="#" className="read-more">
                      Read More <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="blog-post-item">
                  <img
                    src="assets/img/blog/blog-post-portrait-3.webp"
                    alt="Blog Image"
                  />
                  <div className="blog-post-content">
                    <div className="post-meta">
                      <span>
                        <i className="bi bi-person" /> Sarah Johnson
                      </span>
                      <span>
                        <i className="bi bi-clock" /> Jan 21, 2025
                      </span>
                      <span>
                        <i className="bi bi-chat-dots" /> 15 Comments
                      </span>
                    </div>
                    <h2>
                      <a href="#">
                        At vero eos et accusamus et iusto odio dignissimos ducimus
                      </a>
                    </h2>
                    <p>
                      Nullam dictum felis eu pede mollis pretium integer tincidunt
                      cras dapibus vivamus elementum semper nisi.
                    </p>
                    <a href="#" className="read-more">
                      Read More <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="blog-post-item">
                  <img
                    src="assets/img/blog/blog-post-portrait-4.webp"
                    alt="Blog Image"
                  />
                  <div className="blog-post-content">
                    <div className="post-meta">
                      <span>
                        <i className="bi bi-person" /> David Brown
                      </span>
                      <span>
                        <i className="bi bi-clock" /> Jan 24, 2025
                      </span>
                      <span>
                        <i className="bi bi-chat-dots" /> 10 Comments
                      </span>
                    </div>
                    <h2>
                      <a href="#">
                        Et harum quidem rerum facilis est et expedita distinctio
                      </a>
                    </h2>
                    <p>
                      Donec quam felis ultricies nec pellentesque eu pretium quis
                      sem nulla consequat massa quis enim.
                    </p>
                    <a href="#" className="read-more">
                      Read More <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="blog-post-item">
                  <img
                    src="assets/img/blog/blog-post-portrait-5.webp"
                    alt="Blog Image"
                  />
                  <div className="blog-post-content">
                    <div className="post-meta">
                      <span>
                        <i className="bi bi-person" /> Emma Davis
                      </span>
                      <span>
                        <i className="bi bi-clock" /> Jan 27, 2025
                      </span>
                      <span>
                        <i className="bi bi-chat-dots" /> 6 Comments
                      </span>
                    </div>
                    <h2>
                      <a href="#">
                        Nam libero tempore, cum soluta nobis est eligendi optio
                      </a>
                    </h2>
                    <p>
                      Aenean leo ligula porttitor eu consequat vitae eleifend ac
                      enim aliquam lorem ante dapibus in viverra.
                    </p>
                    <a href="#" className="read-more">
                      Read More <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="category-section" className="category-section section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Category Section</h2>
          <div>
            {" "}
            <span className="description-title">Category Section</span>
          </div>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4 mb-4">
            <div className="col-lg-4">
              <article className="featured-post">
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-6.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="post-content">
                  <div className="category-meta">
                    <span className="post-category">Health</span>
                    <div className="author-meta">
                      <img
                        src="assets/img/person/person-f-13.webp"
                        alt=""
                        className="author-img"
                      />
                      <span className="author-name">William G.</span>
                      <span className="post-date">28 April 2024</span>
                    </div>
                  </div>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    </a>
                  </h2>
                </div>
              </article>
            </div>
            <div className="col-lg-4">
              <article className="featured-post">
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-7.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="post-content">
                  <div className="category-meta">
                    <span className="post-category">Education</span>
                    <div className="author-meta">
                      <img
                        src="assets/img/person/person-m-10.webp"
                        alt=""
                        className="author-img"
                      />
                      <span className="author-name">Emma D.</span>
                      <span className="post-date">30 May 2024</span>
                    </div>
                  </div>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam
                      corporis
                    </a>
                  </h2>
                </div>
              </article>
            </div>
            <div className="col-lg-4">
              <article className="featured-post">
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-5.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="post-content">
                  <div className="category-meta">
                    <span className="post-category">Gaming</span>
                    <div className="author-meta">
                      <img
                        src="assets/img/person/person-f-14.webp"
                        alt=""
                        className="author-img"
                      />
                      <span className="author-name">James F.</span>
                      <span className="post-date">3 June 2024</span>
                    </div>
                  </div>
                  <h2 className="title">
                    <a href="blog-details.html">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit
                    </a>
                  </h2>
                </div>
              </article>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <article className="list-post">
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-6.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="post-content">
                  <div className="category-meta">
                    <span className="post-category">Gaming</span>
                  </div>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                    </a>
                  </h3>
                  <div className="post-meta">
                    <span className="read-time">2 mins read</span>
                    <span className="post-date">6 April 2026</span>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-lg-6">
              <article className="list-post">
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-9.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="post-content">
                  <div className="category-meta">
                    <span className="post-category">Gaming</span>
                  </div>
                  <h3 className="title">
                    <a href="blog-details.html">
                      At vero eos et accusamus et iusto
                    </a>
                  </h3>
                  <div className="post-meta">
                    <span className="read-time">2 mins read</span>
                    <span className="post-date">12 June 2026</span>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-lg-6">
              <article className="list-post">
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-10.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="post-content">
                  <div className="category-meta">
                    <span className="post-category">Gaming</span>
                  </div>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Et harum quidem rerum facilis est et expedita distinctio
                    </a>
                  </h3>
                  <div className="post-meta">
                    <span className="read-time">2 mins read</span>
                    <span className="post-date">9 May 2026</span>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-lg-6">
              <article className="list-post">
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-2.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="post-content">
                  <div className="category-meta">
                    <span className="post-category">Gaming</span>
                  </div>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Nam libero tempore, cum soluta nobis est eligendi
                    </a>
                  </h3>
                  <div className="post-meta">
                    <span className="read-time">2 mins read</span>
                    <span className="post-date">15 July 2026</span>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-lg-6">
              <article className="list-post">
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-1.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="post-content">
                  <div className="category-meta">
                    <span className="post-category">Gaming</span>
                  </div>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Temporibus autem quibusdam et aut officiis debitis
                    </a>
                  </h3>
                  <div className="post-meta">
                    <span className="read-time">2 mins read</span>
                    <span className="post-date">18 August 2026</span>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-lg-6">
              <article className="list-post">
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-3.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="post-content">
                  <div className="category-meta">
                    <span className="post-category">Gaming</span>
                  </div>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Itaque earum rerum hic tenetur a sapiente delectus
                    </a>
                  </h3>
                  <div className="post-meta">
                    <span className="read-time">2 mins read</span>
                    <span className="post-date">21 September 2026</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="call-to-action-2" className="call-to-action-2 section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="advertise-1 d-flex flex-column flex-lg-row gap-4 align-items-center position-relative">
            <div
              className="content-left flex-grow-1"
              data-aos="fade-right"
              data-aos-delay={200}
            >
              <span className="badge text-uppercase mb-2">Don't Miss</span>
              <h2>Revolutionize Your Digital Experience Today</h2>
              <p className="my-4">
                Strategia accelerates your business growth through innovative
                solutions and cutting-edge technology. Join thousands of satisfied
                customers who have transformed their operations.
              </p>
              <div className="features d-flex flex-wrap gap-3 mb-4">
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill" />
                  <span>Premium Support</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill" />
                  <span>Cloud Integration</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill" />
                  <span>Real-time Analytics</span>
                </div>
              </div>
              <div className="cta-buttons d-flex flex-wrap gap-3">
                <a href="#" className="btn btn-primary">
                  Start Free Trial
                </a>
                <a href="#" className="btn btn-outline">
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="content-right position-relative"
              data-aos="fade-left"
              data-aos-delay={300}
            >
              <img
                src="assets/img/misc/misc-1.webp"
                alt="Digital Platform"
                className="img-fluid rounded-4"
              />
              <div className="floating-card">
                <div className="card-icon">
                  <i className="bi bi-graph-up-arrow" />
                </div>
                <div className="card-content">
                  <span className="stats-number">245%</span>
                  <span className="stats-text">Growth Rate</span>
                </div>
              </div>
            </div>
            <div className="decoration">
              <div className="circle-1" />
              <div className="circle-2" />
            </div>
          </div>
        </div>
      </section>

      <section id="latest-posts" className="latest-posts section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Latest Posts</h2>
          <div>
            <span>Check Our</span>{" "}
            <span className="description-title">Latest Posts</span>
          </div>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-4">
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
            <div className="col-lg-4">
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
            <div className="col-lg-4">
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
            <div className="col-lg-4">
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
            <div className="col-lg-4">
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
            <div className="col-lg-4">
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
          </div>
        </div>
      </section>

      <section id="call-to-action" className="call-to-action section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4 justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="cta-content" data-aos="fade-up" data-aos-delay={200}>
                <h2>Subscribe to our newsletter</h2>
                <p>
                  Proin eget tortor risus. Mauris blandit aliquet elit, eget
                  tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere
                  blandit.
                </p>
                <form
                  action="forms/newsletter.php"
                  method="post"
                  className="php-email-form cta-form"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address..."
                      aria-label="Email address"
                      aria-describedby="button-subscribe"
                    />
                    <button
                      className="btn btn-primary"
                      type="submit"
                      id="button-subscribe"
                    >
                      Subscribe
                    </button>
                  </div>
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your subscription request has been sent. Thank you!
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cta-image" data-aos="zoom-out" data-aos-delay={200}>
                <img src="assets/img/cta/cta-1.webp" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}
