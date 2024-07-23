import './Navbar.css';
import navlogo from "../../assets/logo_big.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="Navigation Logo" className='nav-logo'/>
      <img src="https://images.unsplash.com/photo-1622234365860-c8ae2e35b56c?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt="Profile Icon" className='nav-profile'/>
    </div>
  );
}

export default Navbar;
