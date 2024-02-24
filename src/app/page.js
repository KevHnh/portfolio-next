"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="MainContainer">
      <div className="MainWrapper">
        <div className="BodyContainer">
          <Link href={"/"} className="homeBtn">
            <h1>Kevin Hinh</h1>
          </Link>
          <div className="socialContainer">
            <a href="mailto:kevinhinh19@gmail.com" target="_blank">
              Email
            </a>
            <a href="https://linkedin.com/in/kevin-hinh" target="_blank">
              Linkedin
            </a>
            <a href="https://github.com/KevHnh" target="_blank">
              Github
            </a>
            <a href="https://twitter.com/KevHinh" target="_blank">
              Twitter
            </a>
          </div>
          <h2>Few things about me:</h2>
          <ul>
            <li>
              I&apos;m a Software Engineer, UI/UX Designer, and occasionally a
              Software Consultant
            </li>
            <li>
              I graduated from Hunter College with a Bachelor of Arts in
              Computer Science
            </li>
            <li>
              I currently freelance for 6 clients in different industries from
              ed tech to web3, and when I am free, I volunteer for a non-profit
              open source community that aims to build sustainable cities
            </li>
            <li>
              I love crocs — I wear them year round whether it is raining,
              snowing, or freezing cold
            </li>
          </ul>
          <h2>What I&apos;m interested in:</h2>
          <ul>
            <li>Wearing crocs</li>
            <li>
              Reading books — check out{" "}
              <Link href={"/books"}>my collection</Link>
            </li>
            <li>Lifting weights</li>
            <li>Getting my money&apos;s worth at all you can eat buffets (specifically at sushi & Korean BBQ spots)</li>
          </ul>
          <h2>Check out some of my work:</h2>
          <Image
            src={"/P1/p1 (2).jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="image"
            alt="shrek"
          ></Image>
          <Image
            src={"/P1/p1 (1).jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="image"
            alt="shrek"
          ></Image>
          <Image
            src={"/P1/p1 (3).jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="image"
            alt="shrek"
          ></Image>
          <Image
            src={"/P2/p2 (2).jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="image"
            alt="shrek"
          ></Image>
          <Image
            src={"/P2/p2 (1).jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="image"
            alt="shrek"
          ></Image>
          <Image
            src={"/P2/p2 (3).jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="image"
            alt="shrek"
          ></Image>
          <Image
            src={"/P3/p3 (1).jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="image"
            alt="shrek"
          ></Image>
          <Image
            src={"/P3/p3 (2).jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="image"
            alt="shrek"
          ></Image>
        </div>
      </div>
    </div>
  );
}
