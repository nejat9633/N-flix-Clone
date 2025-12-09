import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import style from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.innerConatiner}>
          <div className={style.footerIcons}>
            <ul>
              <li>
                <FacebookOutlinedIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <YouTubeIcon />
              </li>
            </ul>
          </div>
          <div className={style.footerLists}>
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Prefernce</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className={style.serviceCode}>
            <p> Service Code </p>
          </div>
          <div>
            <p className={style.copyright}>&copy; 1997-2024 Netflix,Inc.</p>
            <p>Disclaimer: This page is for educational purpose only.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
