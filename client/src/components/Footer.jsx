import "./Footer.css";
import facebook from "../assets/images/facebook.png";
import insta from "../assets/images/insta.png";
import twitter from "../assets/images/twitter.png";

function Footer() {
  return (
    <div className="footer">
      <div className="allFooter section">
        <div className="allFooterLink">
          <div className="allFooterDiv">
            <h4>For Business</h4>

            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>

          <div className="allFooterDiv">
            <h4>Resources</h4>

            <a href="/resource">
              <p>Resource center</p>
            </a>
            <a href="/resource">
              <p>Testimonial</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>

          <div className="allFooterDiv">
            <h4>Parteners</h4>

            <a href="/employer">
              <p>Swing Tech</p>
            </a>
          </div>

          <div className="allFooterDiv">
            <h4>Company</h4>

            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>

          <div className="allFooterDiv">
            <h4>Coming soon...</h4>
            <div className="socialMedia">
              <p>
                <a href="https://m.facebook.com/login/?locale=fr_FR">
                  <img src={facebook} alt="fb" />
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/accounts/login/">
                  <img src={insta} alt="insta" />
                </a>
              </p>
              <p>
                <a href="https://twitter.com/">
                  <img src={twitter} alt="twitter" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="allFooterBellow">
          <div className="FooterCopyright">
            <p>@2024 CodeInn. All right reserved.</p>
          </div>

          <div className="allFooterBellowLink">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie & Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
