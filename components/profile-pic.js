import React from "react";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function ProfilePic({ onHomePage }) {
  if (onHomePage)
    return (
      <>
        <Image
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
            <Image
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
