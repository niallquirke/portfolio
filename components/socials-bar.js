import React from "react";
import styles from "./socials-bar.module.css";

export default function SocialsBar({ onHomePage }) {
  let size, margin;
  onHomePage ? (size = 30) : (size = 20);
  onHomePage ? (margin = 10) : (margin = 5);
  return (
    <>
      <div className={styles.socialsBar}>
        <a
          href="mailto:quirkeniall@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
          style={{ margin: "0px " + margin + "px 0px " + margin + "px" }}
        >
          <img src="/images/social_icons/email_icon.png" height={size} width={size} />
        </a>
        <a
          href="https://www.linkedin.com/in/niallquirke/"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
          style={{ margin: "0px " + margin + "px 0px " + margin + "px" }}
        >
          <img src="/images/social_icons/linkedin_icon.png" height={size} width={size} />
        </a>
        <a
          href="https://github.com/niallquirke"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
          style={{ margin: "0px " + margin + "px 0px " + margin + "px" }}
        >
          <img src="/images/social_icons/github_icon.png" height={size} width={size} />
        </a>
        <a
          href="https://www.instagram.com/niallquirke/"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
          style={{ margin: "0px " + margin + "px 0px " + margin + "px" }}
        >
          <img src="/images/social_icons/instagram_icon.png" height={size} width={size} />
        </a>
      </div>
    </>
  );
}
