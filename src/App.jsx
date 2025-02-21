import React from "react";
import { Link, Element } from "react-scroll";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="../public/img/iotext.png"
            alt="Logo"
            className=" object-contain"
          />
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Wallet Button */}
        <button className="wallet-btn">Wallet</button>
      </nav>

      {/* Home Section */}
      <Element name="home">
        <header className="header">
          <video className="video-background" autoPlay loop muted>
            <source src="https://media-hosting.imagekit.io//2696cb0cd649448a/background.webm?Expires=1834715616&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zQtkWvcIgA~0o0FWlahvHDGQl6HnJR1jtNyNNf5jpTYBKk4aENaW0TY7opW6cfxjx~WelC95xok2EmKaocGgsFWB3ixVVaEBS3Xaf7PMLFfmPFZs~a0X2VhEH69f8HwYoguq4HvUmt6PUpxANKEu-ST46yr0quRMEMmB5Hk0l81jqv-LRxaKmmtSRvD3d7hbJecsuzyxvKi~2zP5OrljEUHJVJy2oAaeC-CGVcOQwLo8YHSZ0oBRrYovCP~NOBkcFYMba0lfHcH9GJGEQz2CvA5dN2maFQsbFi1h1BEGlFNRk5Ddqsi-ckKLvvbp6VclFrTOY4zzkqw3msucM2RTyQ__" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>
          <div className="container">
            <h1 className="header__title">Welcome to Blockchain</h1>
            <p className="header__subtitle">
              Revolutionizing the way we do business, manage data, and secure
              transactions.
            </p>
            <button
              className="header__button btn-primary"
              aria-label="Get Started"
            >
              Get Started
            </button>
            <div className="scroll-indicator" aria-label="Scroll Down">
              <span>Scroll Down</span>
              <div className="arrow"></div>
            </div>
          </div>
        </header>
      </Element>

      {/* Features Section */}
      <Element name="features">
        <section className="features p-10 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>

          <div className="feature-main">
            {[
              {
                title: "Beginner Plan",
                price: "$199/month",
                description: "Blockchain eliminates single",
                features: [
                  "Access to basic blockchain guides",
                  "Access to basic blockchain guides",
                  "Access to basic blockchain guides",
                ],
              },
              {
                title: "Intermediate Plan",
                price: "$349/month",
                description: "End-to-end encryption",
                features: [
                  "Access to basic blockchain guides",
                  "Access to basic blockchain guides",
                  "Access to basic blockchain guides",
                ],
              },
              {
                title: "Advanced Plan",
                price: "$450/month",
                description: "All transactions are visible",
                features: [
                  "Access to basic blockchain guides",
                  "Access to basic blockchain guides",
                  "Access to basic blockchain guides",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="feature-card p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="price">{plan.price}</p>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="feature-des space-y-2">
                  {plan.features.map((feature, i) => (
                    <p key={i} className="border-b border-gray-200 pb-2">
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Element>

      {/* Blog Section */}
      <Element name="blog">
        <section className="blog-section">
          <div className="blog-more">
            <button className="blog-button">View more on M</button>
          </div>
          <h2 className="blog-title">What's new?</h2>
          <div className="blog-main">
            <div className="blog-card">
              <div className="blog-header">
                <p className="blog-date">February 19, 2025, 11:47:57 PM</p>
                <h3 className="blog-title-text">
                  Scaling the Bitcoin-backed Internet: LayerEdge leverages RISC
                  Zero's zkVM and Boundless for Proof...
                </h3>
              </div>
              <a href="#" className="blog-link">
                Learn More
              </a>
            </div>
            <div className="blog-card">
              <div className="blog-header">
                <p className="blog-date">February 6, 2025, 9:26:13 PM</p>
                <h3 className="blog-title-text">
                  LayerEdge Monthly Recap—January
                </h3>
              </div>
              <a href="#" className="blog-link">
                Learn More
              </a>
            </div>
            <div className="blog-card">
              <div className="blog-header">
                <p className="blog-date">January 23, 2025, 7:01:15 AM</p>
                <h3 className="blog-title-text">
                  LayerEdge Testnet Launch (Incentivized): Building the
                  Bitcoin-Backed Internet
                </h3>
              </div>
              <a href="#" className="blog-link">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </Element>
      {/* Contact Section */}
      <Element name="contact" className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-box">
            <img className="contact-img" src="https://media-hosting.imagekit.io//2385f1fa8aba42d8/zkm.png?Expires=1834716120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uaopkEPns9czQDfA93MvB5nOI4vefhsh~PGK1JKPrSjM-5mFIoP8XoELRKOBHkZeW1Mr8E6PW~aBoj-kTaBgTI94-N7R-wUEbJDhjXNGDf3nqpqxE31Yd~x2GwEXufr0WXK3g1RD~PpP7hySx4uBweDo7PbCFfcrQyR6wKDzUXMjl1JnOnhk70edkFZOoBzSZnlHsVuNM0DuVYVLwGfiRs~8CjlskqfnMHdQ5hz8XJS0u7CkOPK4FUm8EKQqUO4DsHjkJp3uUHRQ9zHYswAB5ikmrtPNY9WUz2D8T-z682BUM0WoDbN5NdqL5Ai2xiLDdc95ZglmXFKPKPqU4eujnA__"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
          <div className="contact-box">
            <img className="contact-img" src="https://media-hosting.imagekit.io//3812cbbe96804b33/orichi.png?Expires=1834716120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=28XDMYf~U26XUO9SmNM9iI-xN2AhoVzMQiAA9d0yvwoo2nramEF~JHgRtCZo4QM8NniSpZnlkiqcD4w9P00grBbAIDN79B7anu~Pl0C4QTOhwEqCgafe~Cboq4UVnxsh5PkquC6uhQpLKUmonNL8Th34GPsmS3ClH2RKnjHFuZ8kWXgROs22Vv42EvRqqVyREebdwhhkGpbOEae9oNdqcKPeeZaimJQGLBrGxh-rw-q7RXYAbFg-LF8IvI~e-WvgHlQITfw7q3hlDqAAdfpBHWd60r4gK6shePZuyFgmqMWpVc6eQeEFTHCod3nNATuu9Icb31Dc9kLZ6Uc2moqdtw__"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
          <div className="contact-box">
            <img className="contact-img" src="https://media-hosting.imagekit.io//0fe28b0f345241f5/qai.png?Expires=1834716120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZM4WUNq~~v0Xo2q3~C2aiqwTOqoNNb91qeQhoGF1vny6Iv5MLVTz~rM6YQ7hHoIAb~eQG~V-8PSl4H2oPXUOQh0yZ-SJfrsyiA0iw1eFych2jhCgy-X9u4CQRtq9D19s-gsEiIbvmQbO31~Kx0K0gwWNcjUYZGMD5AHfVW-fsIJUToEBu1FFTmJEJdCUAb~5EKeiUZUFYMADS9KwZkBuqNZrKJ6G-3Ca9wbf5~jNCkulgJ6NZ-p-bomUecb5frCs-BOnSz91eBggcLUdAP5YKUTE7ZNxgWFFpGEN4OeMXwdzauG67Gw8619jkY1VwJwrT2-dv7uoEboujwNha5BO6g__"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
          <div className="contact-box">
            <img className="contact-img" src="https://media-hosting.imagekit.io//24468a5134c5448f/bqlabs.png?Expires=1834716120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GtMVlfll~BzeU3qiLOwYhgO97yEcdQ5~g0MChSwYhi42Vad-5EG~E7jmw9Pxc0dYGzuKNNev9~sCrskP2Y5iOU-V4g3bAx5EVZWfnPYoZ4vU8BJZ1wNeENW3bRLsgNQVEBMNkIuonQQcavhB85GGZ1A5PJR8gPh9TQPABF0skp-9lw9SPsxyTrZ40Uy3Losqy1M67IRQWHnLkrX6bi2pxUMzfGPcikNK7saLowyLGdS8fBIYnGP~z8Xn6gJBvVz3pSRyEr2WXuYyRFwqFghVrgctqKUj7aq1lJDIwekw3h4khoEjx~eD8g5h7dtp-qlLlJxTfJmcJfkFPx-DFhvYyw__"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
          <div className="contact-box">
            <img className="contact-img" src="https://media-hosting.imagekit.io//92ebe7a8aad6489c/clique.png?Expires=1834716120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=p8oNUyomKTkg2XYz2R37ITZ1enj2LqiY5Om7MhTZxYRhLKdScHK15HO2A-s78Khgr-TWNGj4uWO100Gb-o0cne~w41kGIae22ylkc02ASsegLuOu~vmXaVjXzbKdBKsFqMTt0TQHCZ5nsrMwZN5yaGd7QErpKUjqlKo3JZfNRdXJ6ijgO2PqJh49mI2pNHrKL~FrvmLsn7jGGneWAaWVm2hkkA3e-9dblmaR7GT1t7VQdxPaipIe1Kt1BqtvYn5TON8dR3YGWtUZ-MxtTSB4Np3MnobSgcYLwtWFXrimC0AKztZd916PW-xLH4gKl6KBv2hxLe0Z6nquqxYNCUIkLQ__"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
          <div className="contact-box">
            <img className="contact-img" src="https://media-hosting.imagekit.io//2385f1fa8aba42d8/zkm.png?Expires=1834716120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uaopkEPns9czQDfA93MvB5nOI4vefhsh~PGK1JKPrSjM-5mFIoP8XoELRKOBHkZeW1Mr8E6PW~aBoj-kTaBgTI94-N7R-wUEbJDhjXNGDf3nqpqxE31Yd~x2GwEXufr0WXK3g1RD~PpP7hySx4uBweDo7PbCFfcrQyR6wKDzUXMjl1JnOnhk70edkFZOoBzSZnlHsVuNM0DuVYVLwGfiRs~8CjlskqfnMHdQ5hz8XJS0u7CkOPK4FUm8EKQqUO4DsHjkJp3uUHRQ9zHYswAB5ikmrtPNY9WUz2D8T-z682BUM0WoDbN5NdqL5Ai2xiLDdc95ZglmXFKPKPqU4eujnA__"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
          <div className="contact-box">
            <img className="contact-img" src="https://media-hosting.imagekit.io//8137ca83eb6f4698/degame.png?Expires=1834716120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vEk2YLtAS3cHFhW9w7LlHKTk4WJFrwf1SWjEcrCW4A-8NpL3ULA2biXLywuuLOXSRugBLe-t~grXNUW7IrQmX2ywfPq6CgYa4vZjlMqGrSdapZLXTjmQrlsV7R-aGMFbwphYT6VW0wqhytOUDPNoCqOW31WsUqyjUT3r1MEYCb2T~V0G6h2iES7EC9AaXdY5erOrR4nv8tvTarR8Ur3AcqlO~-ezl8RN0Df3zX5vdllvzJkAl~WxOgmSpbfoS~7ao54KHag53vt6VNCst6oiCKPjfWRF5zdVVHF7PMsswwYokdlHYAc3h67bHPsOgsQvmHxkdkzn6hiiaK39y27HBA__"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
          <div className="contact-box">
            <img className="contact-img" src="https://media-hosting.imagekit.io//eb3ea1d61ca54c7e/avail.png?Expires=1834716120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xagsLn~JUiksykU-z5Wl~Ui2B2QdAFdqeHplAjoGGI1upT3tVimMCxmmt1T0z-Cwd0fgPYrIMtRkItmPV3oGLZUIOMChoIk-93U5l4lgczQ9Wf0Nk54zbEANPsEzOTG6DS7VYX2TFDGA6KpRVl3G6VSTX2MmR~Q-S~KhPL5kPq-IRrVglLOY38~STrYcL70nJyhJxOubG7b80iTUEokauLF4G8uy5eEycdtp5uabZjGbHM61CecizNvMcZTz838N9g2HwpEwYxODYIBwEaibEgrYCQkwtjBGIv~H2c-IMAJypJQ3RBBNeodMbHbjXU4EgyVwUYeL1WMjqZol4XG9jg__"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
        </div>
      </Element>
      <footer>
        <p>&copy; 2025 Blockchain. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
