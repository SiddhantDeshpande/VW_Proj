import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <div>
            <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 col-md-12">
            <div className="footer-info">
              <h3>Volkswagen</h3>
              <p>
                Siddhant Deshpande<br/>
                Software Engineer Intern @ VWITS<br/><br/>
                <strong>Phone:</strong> 8605870400<br/>
                <strong>Email:</strong> siddhant.volkswagen.co.in<br/>
              </p>
              <div className="social-links mt-3">
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div> */}


          {/* <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>

          </div> */}

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
       <strong><span>VOLKSWAGEN</span></strong>
      </div>
      <div className="credits">
        
        Designed and edited by Siddhant Deshpande using Bootstrap5
      </div>
    </div>
  </footer>
        </div>
    )
}

export default Footer
