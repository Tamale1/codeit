import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Team from "../images/icons/Team-work.svg";
import Excell from "../images/icons/Commitment-to_Excellence.svg";
import Growth from "../images/icons/Growth_Mindset.svg";
import Integrity from "../images/icons/Integrity_icon.svg";
import Innovation from "../images/icons/Trailblazers-in_Innovation.svg";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Better Solutions For Your Business</h1>
              <h2>
                We are team of talented Software engineers and graphic designers
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  className="glightbox btn-watch-video"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="assets/img/backg.jpg"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="clients" className="clients section-bg">
          <div className="container">
            <div className="row" data-aos="zoom-in">
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-3.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-4.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-5.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-6.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Us</h2>
            </div>

            <div className="row content">
              <div className="col-lg-6">
                <h1 class="page-title">
                  Driving Innovation Through Advanced Digital Technologies{" "}
                </h1>
                <p>
                  <span class="font-16">
                    <i>
                      A leading force in the digital realm dedicated to
                      revolutionizing businesses through innovative and
                      progressive digital services . With a commitment to
                      excellence,
                      <strong style={{ color: "#ff1493" }}>Codeit</strong>{" "}
                      empowers businesses to embrace the future and achieve
                      remarkable success in the ever-evolving digital landscape.
                    </i>
                  </span>
                </p>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Codeit partnered with leading technology providers in the
                  industry to provide the innovative technology that are
                  required to fuel business growth. We have partnerships with
                  leaders in enterprise software products, cloud technologies
                  and digital transformation, which allows us to safely rely on
                  the quality of tech products we recommend and deliver a
                  competitive edge.
                </p>
                <a href="#" className="btn-learn-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="why-us section-bg">
          <div className="container-fluid" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                <div className="content">
                  <h3>
                    <strong style={{ textDecoration: "underline" }}>
                      {" "}
                      What we stand for
                    </strong>
                  </h3>
                  <p></p>
                </div>

                <div className="accordion-list">
                  <ul>
                    <li style={{ background: "#ffddf4" }}>
                      <a
                        data-bs-toggle="collapse"
                        className="collapse"
                        data-bs-target="#accordion-list-1"
                      >
                        <strong>vision</strong> <p></p>{" "}
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-1"
                        className="collapse show"
                        data-bs-parent=".accordion-list"
                      >
                        <p style={{ textDecoration: "bu" }}>
                          Creating impactful software solutions for a better
                          tomorrow
                        </p>
                      </div>
                    </li>

                    <li style={{ background: "#ffddf4" }}>
                      <a
                        data-bs-toggle="collapse"
                        className="collapse"
                        data-bs-target="#accordion-list-1"
                      >
                        <strong>Mission</strong> <p></p>{" "}
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-1"
                        className="collapse show"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          To be an essential technology partner to our customers
                          by fostering a culture of technology innovation and
                          building cutting-edge solutions
                        </p>
                      </div>
                    </li>

                    <li style={{ background: "#ffddf4" }}>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-2"
                        className="collapsed"
                      >
                        <span></span>

                        <div>
                          <div class="container">
                            <div class="row top-row">
                              <div class="col-md-10 text-center mx-auto">
                                <h2 class="section-heading"> Core Values</h2>
                              </div>
                            </div>
                          </div>
                        </div>

                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-2"
                        className="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <div
                          style={{
                            border: "solid ",
                            padding: "10px",
                            marginBottom: "10px",
                            borderColor: "#ff1493",
                          }}
                        >
                          <div className="title-icon">
                            <span className="icon">
                              <img
                                width="100"
                                height="100"
                                style={{ background: "black" }}
                                src={Innovation}
                                alt="Integrity | Binmile"
                                data-lazy-src={Team}
                              />
                              <noscript>
                                <img
                                  width="100"
                                  height="100"
                                  src={Innovation}
                                  alt="Integrity | Binmile"
                                />
                              </noscript>
                            </span>
                            <h3>Innovation</h3>
                            <p style={{ paddingTop: "0px" }}>
                              Impossible made 'I'm possible' with groundbreaking
                              ideas
                            </p>
                          </div>
                        </div>

                        <div
                          style={{
                            border: "solid ",
                            padding: "10px",
                            marginBottom: "10px",
                            borderColor: "#ff1493",
                          }}
                        >
                          <div class="title-icon">
                            <span className="icon">
                              <img
                                width="100"
                                height="100"
                                style={{ background: "black" }}
                                src={Excell}
                                alt="Integrity | Binmile"
                                data-lazy-src={Team}
                              />
                              <noscript>
                                <img
                                  width="100"
                                  height="100"
                                  src={Excell}
                                  alt="Integrity | Binmile"
                                />
                              </noscript>
                            </span>
                            <h3 className="title">Commitment to Excellence</h3>
                            <p>
                              Competitive pursuit of excellence, raising the bar
                            </p>
                          </div>
                        </div>

                        <div
                          style={{
                            border: "solid ",
                            padding: "10px",
                            marginBottom: "10px",
                            borderColor: "#ff1493",
                          }}
                        >
                          <div className="title-icon">
                            <span class="icon">
                              <img
                                width="100"
                                height="100"
                                style={{ background: "black" }}
                                src={Integrity}
                                alt="Integrity"
                                data-lazy-src={Team}
                              />
                              <noscript>
                                <img
                                  width="100"
                                  height="100"
                                  src={Team}
                                  alt="Integrity | Binmile"
                                />
                              </noscript>
                            </span>
                            <h3 className="title">Integrity</h3>
                            <p>
                              Doing what's right, guided by unwavering character
                            </p>
                          </div>
                        </div>

                        <div
                          style={{
                            border: "solid ",
                            padding: "10px",
                            marginBottom: "10px",
                            borderColor: "#ff1493",
                          }}
                        >
                          <div className="title-icon">
                            <span className="icon">
                              <img
                                width="100"
                                height="100"
                                style={{ background: "black" }}
                                src={Team}
                                alt="Integrity | Binmile"
                                data-lazy-src={Team}
                              />
                              <noscript>
                                <img
                                  width="100"
                                  height="100"
                                  src={Team}
                                  alt="Integrity "
                                />
                              </noscript>
                            </span>
                            <h3 className="title">Team-work</h3>
                            <p>
                              Uniting minds together towards a unifying purpose
                            </p>
                          </div>
                        </div>

                        <div
                          style={{
                            border: "solid ",
                            padding: "10px",
                            marginBottom: "10px",
                            borderColor: "#ff1493",
                          }}
                        >
                          <div className="title-icon">
                            <span className="icon">
                              <img
                                width="100"
                                height="100"
                                style={{ background: "black" }}
                                src={Growth}
                                alt="Integrity "
                                data-lazy-src={Team}
                              />
                              <noscript>
                                <img
                                  width="100"
                                  height="100"
                                  alt="Integrity "
                                />
                              </noscript>
                            </span>
                            <h3 className="title">Growth Mindset</h3>
                            <p>Thriving on challenges, embracing comebacks</p>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* <li style={{background: '#ffddf4'}}>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </p>
                  </div>
                </li> */}
                  </ul>
                </div>
              </div>

              <div
                className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                style={{ backgroundImage: 'url("assets/img/why-us.png")' }}
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                &nbsp;
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img src="assets/img/skills.png" className="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0 content"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h3>Why you should choose us</h3>
                <p className="fst-italic">
                  We have the best pool of software skill sets needed to drive
                  your business to the growth and productivty and the Demand
                  levels
                </p>

                <div className="skills-content">
                  <div className="progress">
                    <span className="skill">
                      HTML <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      CSS <i className="val">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      JavaScript <i className="val">75%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      Photoshop <i className="val">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="90"
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">
                      PHP <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">
                      Java <i className="val">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="90"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                We are a software company that offers a variety of services and
                among the many include
              </p>
            </div>

            <div className="row">
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <h4>
                    <a href="">Websites, web Application and ERPs</a>
                  </h4>
                  <p>
                    We develop both static and fullstack web Application eg.
                    Schools and hospital mangement systems, E-commerce etc
                  </p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4>
                    <a href="">Mobile Applications</a>
                  </h4>
                  <p>
                    Mobile Application for both android and IOS cutomised for
                    your business is another thing we bring to life for our
                    clients
                  </p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4>
                    <a href="">Database development</a>
                  </h4>
                  <p>
                    We do Database development with the best softwares to
                    enhance Data security, Data availabity, and elimation of
                    downtown
                  </p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-layer"></i>
                  </div>
                  <h4>
                    <a href="">Graphc Design and secretarial sevices</a>
                  </h4>
                  <p>
                    At CodeIt we design banners, poster, advertisement among
                    others for business visibility, more to that we offer all
                    secritarial services for schools, fuctions and all other
                    needs
                  </p>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-layer"></i>
                  </div>
                  <h4>
                    <a href="">Consultance</a>
                  </h4>
                  <p>
                    How do you computerise your business, what are dos and
                    donts, what technology fits your business type
                  </p>
                  <p>
                    {" "}
                    We have gatthered alot of experience working with small and
                    growing businesses, midsized and big organisation so we
                    share that with you through our developers and consultants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-start">
                <h3>Call To Action</h3>
                <p>
                  {" "}
                  We are ready to serve you on organisational or individual
                  basis.
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="#">
                  Call To Action
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p><strong style={{color:'#ff1493'}}>Codeit</strong> Portfolio has grown overtime with a wide experience pull through working on several projects in consultance, media design, website development, mobile App development and system maintainance.</p>
        </div>

        <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Websites</li>
          <li data-filter=".filter-web">Media Design and Marketing</li>
        </ul>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>
              </section>*/}

        <section id="team" className="team section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Team</h2>
              <p>
                Meet and connect with our team of experts with enthusia to bring
                ideas to life, they are all ready to work with you and to see
                small businesses grow into empires.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="pic">
                    <img
                      src="assets/img/team/suuna3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Ssuna Khalim</h4>
                    <span>Chief Executive Officer/Consultant</span>
                    <p>
                      
At the top of Code_it, the industry's rising star in software development, stands Ssuna Khalim . Unlike the typical CEOs, khalim possesses a quiet charisma, confident persona for a sharp intellect and great enthusiasm. His journey to the top is far from usual. A great coder who has always persued his own vision, Khalim built Code_it from the ground up, fueled by a deep-seated belief in the potential of technology to empower humanity.
                    </p>
                    <div className="social">
                      <a href="https://twitter.com/ssu2229">
                        <i className="ri-twitter-fill"></i>
                      </a>
                      <a href="https://facebook.com/kalema.yasin.77">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i className="ri-instagram-fill"></i>
                      </a>
                      <a href="https://linkedin.com/in/khalim-ssuna-56530417b">
                       
                        <i className="ri-linkedin-box-fill"></i>
                      </a>
                      <a href="https://github.com/khalim-12">
                        <i>
                        <i className="ri-github-fill"></i>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="pic">
                    <img
                      src="assets/img/clients/ysf1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Nkoyoyo Yusuf</h4>
                    <span>Developer</span>
                    <p>
                    Yusuf thrives at the cross of logic and imagination. Loves crafting elegant front-end designs and stacking back-end code with the  can breathe life into digital landscapes. Challenges excite him and bugs fuel his determination.
                    </p>
                    <div className="social">
                      <a href="https://twitter.com/yusufontwiter">
                        <i className="ri-twitter-fill"></i>
                      </a>
                      <a href="https://www.facebook.com/yusuf.nkoyoyo">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="https://www.instagram.com/yusuf.de.tamale/">
                        <i className="ri-instagram-fill"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/nkoyoyo-yusufu-86443225b/">
                       
                      <i className="ri-linkedin-box-fill"></i>
                      </a>
                      <a href="https://my-portfolio-szzq.onrender.com/">
                        <i>
                        <i className="ri-globe-fill"></i>
                        </i>
                        </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <div
                  className="member d-flex align-items-start"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="pic">
                    <img
                      src="assets/img/portfolio/portfolio-9.jpg"
                      className="img-fluid"
                      alt="Arafat"
                    />
                  </div>
                  <div className="member-info">
                    <h4>Ssenyonga Arafat</h4>
                    <span>Designer</span>
                    <p>
                    Arafat is more than just a computer software developer; he's a digital architect, a problem-solving artist, and a collaborator with a vision for a better tomorrow. He is the embodiment of code and creativity, weaving the future, line by line, thinks outside the box with full potential.Challenges are opportunities for innovation, fueling his passion to build elegance.
                    </p>
                    <div className="social">
                      <a href="https://twitter.com/sen_arafat">
                        <i className="ri-twitter-fill"></i>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=100087281784705 ">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href=" https://www.instagram.com/arafatsen5/">
                        <i className="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>

                      <a href="">
                        <i>
                        <i className="ri-github-fill"></i>
                        </i>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Hosting services</h2>
              <p>
                At <strong style={{ color: "#ff1493" }}>Codeit</strong> we offer
                hosting services.
              </p>
              <p>
                Choosing the best hosting services is the best thing you can do
                for the existance of your business system and choosing{" "}
                <strong style={{ color: "#ff1493" }}>Codeit</strong>is your best
                decission
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="box">
                  <h3>Monthly Plan</h3>
                  <h4>
                    <sup>ush</sup>25000
                  </h4>
                  <ul>
                    <li>
                      <i className="bx bx-check"></i>1 Website
                    </li>
                    <li>
                      <i className="bx bx-check"></i> Standard Performance
                    </li>
                    <li>
                      <i className="bx bx-check"></i>50 GB SSD Storage
                    </li>
                    <li className="na">
                      <i className="bx bx-x"></i> <span>Weekly Backups</span>
                    </li>
                    <li className="na">
                      <i className="bx bx-x"></i> <span>1 Email Account</span>
                    </li>
                  </ul>
                  <a href="#" className="buy-btn">
                    Get Started
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="box featured">
                  <h3>Annual Plan</h3>
                  <h4>
                    <sup>ush</sup>150000
                  </h4>
                  <ul>
                    <li>
                      <i className="bx bx-check"></i> 24/7 online presence
                    </li>
                    <li>
                      <i className="bx bx-check"></i> storage
                    </li>
                    <li>
                      <i className="bx bx-check"></i> maintainance
                    </li>
                    <li>
                      <i className="bx bx-check"></i> 2emails
                    </li>
                    <li>
                      <i className="bx bx-check"></i> weekly backup
                    </li>
                  </ul>
                  <a href="#" className="buy-btn">
                    Get Started
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="box">
                  <h4>Two years' plan</h4>
                  <ul>
                    <li>
                      <i className="bx bx-check"></i>Fullservice
                    </li>
                  </ul>
                  <a href="#" className="buy-btn">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-list">
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    What is software development?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-1"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Software development is the fascinating process of
                      creating the programs and applications that power our
                      Businesses. it's a blend of creativity, problem-solving,
                      and technical expertise that brings ideas to life. Here's
                      a breakdown of what it
                      entails:Conception,Design,Development,Testing At{" "}
                      <strong style={{ color: "#ff1493" }}>Codeit</strong> we do
                      all this and give you tailormade software that will take
                      you business to hights nad give your customers
                      satisfaction
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                    What are the advantages of custom softawre development{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Precise fit for your needs: Unlike generic software,
                      custom development caters to your specific requirements,
                      workflows, and data structures, ensuring a perfect fit for
                      your unique business needs. Imagine a well-fitted suit
                      compared to a rack of off-the-rack options. Data privacy
                      and compliance: Custom software gives you complete control
                      over your data, ensuring compliance with industry
                      regulations and safeguarding sensitive information.
                      Reduced vulnerability to cyberattacks: Custom-built
                      systems are less prone to security vulnerabilities found
                      in mass-produced software.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                    How long does it take to develop custom software for my
                    business? <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      The time fram can range between two weeks to five months
                      depending on the size of the project and all that you need
                      to be included into the project and the size of the
                      organisation at{" "}
                      <strong style={{ color: "#ff1493" }}>Codeit</strong> we
                      accord value to the tme resource
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed"
                  >
                    How much does custom software development cost?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      it is as low as three hundred thousand uganda shillings
                      but understanding the following is key:-Get a detailed
                      proposal: Before starting any work, get a detailed
                      proposal from the development team outlining the scope of
                      work, timeline, and estimated costs. Break down the
                      project into phases: This allows you to release features
                      gradually and manage your budget more effectively. Be
                      prepared for change: It's normal for project requirements
                      to change during development. Be flexible and adjust your
                      budget accordingly.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="500">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed"
                  >
                    Why should i use software engineering proffessionals over
                    other option?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Technical expertise: Software engineers can build,
                      maintain, and troubleshoot software applications,
                      websites, mobile apps, and other digital products. They
                      have the skills to understand complex systems and
                      translate your ideas into reality. Problem-solving skills:
                      Software engineers are adept at analyzing problems,
                      identifying root causes, and developing innovative
                      solutions. This can be valuable for any project requiring
                      technical creativity and critical thinking.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                You can get in touch with us via all our social or come to our
                offices thats at nansana yesu amala stage.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>Nansana yesu Amala</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>codeit1.ug@gmail.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>0773747501</p>
                  </div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameborder="0"
                    style={{ border: "0", width: "100%", height: "290px" }}
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  action="https://getform.io/f/4909d078-ce6c-4e0d-a27b-8369aa24e130"
                  method="POST"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label for="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="name">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="name">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="name">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
