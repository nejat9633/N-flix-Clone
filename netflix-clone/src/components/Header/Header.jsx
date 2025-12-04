import {useState,useEffect } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import style from './Header.module.css'
import logo from '../../assets/logo.png'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {

  const [show, setShow] = useState(false);
  const [open,setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        style={{
          backgroundColor: show ? "rgb(17,17,17)" : "transparent",
        
        }}
        className={`${style.navbar} ${open ? style.navbarOpen : ""}`}
      >
        <div className={style.leftNavContainer}>
          <ul className={`${style.links} ${open ? style.active : ""} `}>
            <li>
              <img className={style.logo} src={logo} alt="Netflix Logo" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        <div className={style.menu} onClick={() => setOpen(!open)}>
          {open ? (
            <CloseIcon style={{ fontSize: 28 }} />
          ) : (
            <MenuIcon style={{ fontSize: 28 }} />
          )}
        </div>

        <div className={style.rightNavContainer}>
          <ul className={style.links}>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header