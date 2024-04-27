import logo from "../../assets/food-logo.png"

const Footer = () => {
    return (
        <>
        <div className="">
        <footer className="footer p-10 bg-base-200 text-base-content dark:bg-gray-800 dark:text-white">
  <aside>
    <img src={logo} alt="logo" className="w-[100px]"/>
    <p>Programming Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer footer-center p-4 bg-base-300 text-base-content dark:bg-gray-800 dark:text-white">
  <aside>
    <p>Copyright © 2024 - All right reserved by Fuad Programming Industries Ltd</p>
  </aside>
</footer>
        </div>
        </>
    );
};

export default Footer;