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
              I currently run a digital agency that helps businesses and brands
              turn their ambitious goals into reality
            </li>
            <li>I attempt to build apps to solve my own problems</li>
          </ul>
          <h2>What I&apos;m interested in:</h2>
          <ul>
            <li>Wearing crocs</li>
            <li>Lifting weights</li>
          </ul>
          <h2>My startup attempts:</h2>
          <ul>
            <li>
              Ezsea - Web3 Powered Education Platform (Never saw the light of
              day. It was a capstone project for college and abandoned once I
              got my A+)
            </li>
            <li>
              <a href="https://boga.studio" target="_blank">
                Boga Studio
              </a>
              {" "}- A web agency that specialize in creating premier designs and
              innovative software solutions
            </li>
            <li>
              MockAI - AI Powered Technical Prep Platform (Very expensive to run
              so I abandoned it but was very cool)
            </li>
            <li>Aplican - AI Powered Job Hunting Companion (Sold algorithm)</li>
            <li>
              <a href="https://www.affpaca.com" target="_blank">
                Affpaca
              </a>
              {" "}- Where Founders empower Marketers (Recently started Feb 2024)
            </li>
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
