import React from "react";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Name({ onHomePage, name }) {
  return (
    <>
      {onHomePage ? (
        <>
          <h1 className={utilStyles.heading2Xl} style={{ margin: "10px" }}>
            {name}
          </h1>
        </>
      ) : (
        <>
          <h2 className={utilStyles.headingLg} style={{ margin: "5px" }}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )}
    </>
  );
}
