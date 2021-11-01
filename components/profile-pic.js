import React from "react";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function ProfilePic({ onHomePage }) {
  if (onHomePage)
    return (
      <>
        <img
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
        />
      </>
    );
  else
    return (
      <>
        <Link href="/">
          <a>
            <img
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
            />
          </a>
        </Link>
      </>
    );
}
