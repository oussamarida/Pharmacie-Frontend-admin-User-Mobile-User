

function Home() {
    return (
        <div>
       
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="logo">
              <h1 className="text-light"><a href="/"><span>Pharmacy</span></a></h1>
            </div>
            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="active " href="/">Home</a></li>
                <li><a href="/list">List</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
          </div>
        </header>
      
        <section id="hero" className="d-flex justify-cntent-center align-items-center">
          <div id="heroCarousel" className="container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval={5000}>
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Memo pharmacy</span></h2>
                <p className="animate__animated animate__fadeInUp">At The Display Pharmacy, we prioritize your well-being. That's why we partner exclusively with reputable pharmaceutical manufacturers and suppliers to ensure the authenticity and effectiveness of our products. Our commitment to quality means you can trust the medications and healthcare items you purchase from us.</p>
                <a href className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">Display Pharmacy</h2>
                <p className="animate__animated animate__fadeInUp">Welcome to The Display Pharmacy, where convenience, quality, and care meet. As a leading online pharmacy, we are committed to providing you with a seamless shopping experience and a wide range of pharmaceutical products.</p>
                <a href className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">Experience</h2>
                <p className="animate__animated animate__fadeInUp">Experience the peace of mind that comes with knowing your health is in good hands. Whether you're seeking over-the-counter remedies, prescription drugs, vitamins, supplements, personal care items, or medical equipment, The Display Pharmacy has you covered.</p>
                <a href className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
              </div>
            </div>
            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true" />
            </a>
            <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true" />
            </a>
          </div>
        </section>{/* End Hero */}
        <main id="main">
          {/* ======= Features Section ======= */}
          <section className="features">
            <div className="container">
              <div className="section-title">
                <h2>Pharmacy</h2>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-md-5">
                  <img src="assets/img/features-1.svg" className="img-fluid" alt="" />
                </div>
                <div className="col-md-7 pt-4">
                  <h3> Customer Reviews</h3>
                  <p className="fst-italic">
                    Customer Reviews and Ratings: To help you make informed decisions, we provide a platform for customers to share their experiences and leave reviews for products they have purchased. This allows you to benefit from the feedback and recommendations of other users.
                  </p>
                  <ul>
                    <li><i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="bi bi-check" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  </ul>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-md-5 order-1 order-md-2">
                  <img src="assets/img/features-2.svg" className="img-fluid" alt="" />
                </div>
                <div className="col-md-7 pt-5 order-2 order-md-1">
                  <h3>Secure Payment</h3>
                  <p className="fst-italic">
                    Secure Payment Options: The Find Pharmacy prioritizes your online security. We offer a variety of trusted and secure payment options, allowing you to choose the method that suits you best. Rest assured that your payment information is encrypted and protected at all times.
                  </p>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-md-5 order-1 order-md-2">
                  <img src="assets/img/features-4.svg" className="img-fluid" alt="" />
                </div>
                <div className="col-md-7 pt-5 order-2 order-md-1">
                  <h3> Responsive Customer Support</h3>
                  <p>
                    Responsive Customer Support: Should you have any questions or concerns, our dedicated customer support team is readily available to assist you. You can reach us through multiple channels, such as live chat, email, or phone, ensuring that you receive prompt and helpful assistance.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500}>
          <div className="container">
            <div className="copyright">
              © Copyright <strong><span>oussama</span></strong>. All Rights Reserved
            </div>
          </div>
        </footer>
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
      </div>
    );
  }
  
  export default Home;
  