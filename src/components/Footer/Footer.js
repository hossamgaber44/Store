import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3 className="footer-top-title"> Always available to help you</h3>
        <div className="footer-top-email">
          <span className="footer-top-email-text">Contact us via e-mail</span>
          <span className="footer-top-email-address">
            <i className="bi bi-envelope"></i>
            hossamgaber027@gmail.com
          </span>
        </div>
      </div>
      <div className="footer-items-wrapper">
        <div className="footer-item">
          <h4 className="footer-item-title">electronics</h4>
          <ul className="footer-item-links">
            <li className="footer-item-link">Cameras and video recording</li>
            <li className="footer-item-link">household appliance</li>
            <li className="footer-item-link">Phones</li>
            <li className="footer-item-link">HeadPhones</li>
            <li className="footer-item-link">Screens</li>
            <li className="footer-item-link">Tablets</li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-item-title">outfits</h4>
          <ul className="footer-item-links">
            <li className="footer-item-link">Men's clothing</li>
            <li className="footer-item-link">Women's clothing</li>
            <li className="footer-item-link">Children's Costumes</li>
            <li className="footer-item-link">Glasses</li>
            <li className="footer-item-link">HeadPhones</li>
            <li className="footer-item-link">Hours</li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-item-title"> Kitchen and home appliances</h4>
          <ul className="footer-item-links">
            <li className="footer-item-link"> Home decorations</li>
            <li className="footer-item-link">Furniture</li>
            <li className="footer-item-link"> Kitchen and dining utensils</li>
            <li className="footer-item-link"> Accessories</li>
            <li className="footer-item-link"> Audio and video equipment</li>
            <li className="footer-item-link"> Gardening supplies</li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-item-title">beauty</h4>
          <ul className="footer-item-links">
            <li className="footer-item-link">perfumes</li>
            <li className="footer-item-link">Make up</li>
            <li className="footer-item-link">hair care</li>
            <li className="footer-item-link"> skin care</li>
            <li className="footer-item-link"> perfumes</li>
            <li className="footer-item-link"> Health care products</li>
          </ul>
        </div>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/profile.php?id=100054128583713&mibextid=ZbWKwL"
          className="fab fa-facebook-f"></a>
        <a href="https://instagram.com/hossamgaberhamed?igshid=MzNlNGNkZWQ4Mg=="
          className="fab fa-instagram"></a>
        <a href="https://www.linkedin.com/in/hossam-gaber-8b2154264" className="fab fa-linkedin"></a>
        <a href="https://github.com/hossamgaber44" className="fa-brands fa-github"></a>
      </div>
      <div className="credit">
        <h3>© copyright @ 2023 by <span> HOSSAM GABER</span></h3>
      </div>
    </footer>
  );
};

export default Footer;
