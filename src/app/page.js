"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import "./components.css";
import "./style.css";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [ref1, inView1] = useInView({
    triggerOnce: false,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: false,
  });

  function scrollToRef(index) {
    let item = document.getElementsByClassName("ImageContainer")[index];
    item.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="MainContainer">
      <div className="MainWrapper">
        <div className="NavContainer">
          <div className="NavSection col">
            <div className="header">Kevin Hinh</div>
            <div className="sub">Software Developer & UI/UX Designer</div>{" "}
            <div className="sub">
              I enjoy building super simple and minimalistic yet creative
              products. My passion for design and functionality comes to life in
              every project I undertake.
            </div>{" "}
            <div className="sub">
              Whether it&apos;s crafting sleek user interfaces or developing
              elegant solutions, I thrive on the challenge of making complexity
              appear effortless.
            </div>
          </div>
          <div className="NavSection row end sticky">
            <a
              className="link"
              href="https://www.linkedin.com/in/kevin-hinh/"
              target="_blank"
            >
              Linkedin
            </a>
            <a
              className="link"
              href="https://github.com/KevHnh"
              target="_blank"
            >
              Github
            </a>
            <a
              className="link"
              href="mailto: kevinhinh19@gmail.com"
              target="_blank"
            >
              Email
            </a>
            <a
              className="link"
              href="https://twitter.com/KevHinh"
              target="_blank"
            >
              Twitter
            </a>
          </div>
          <div className="NavSection col sticky sticky2">
            <div className="header p-header">Work</div>
            <div
              className={
                inView1 ? "projectContainer visible" : "projectContainer"
              }
              onClick={() => scrollToRef(0)}
            >
              <div className="projectText">Aplican</div>
              <div className="projectText">2023</div>
            </div>
            <div
              className={
                inView2 ? "projectContainer visible" : "projectContainer"
              }
              onClick={() => scrollToRef(1)}
            >
              <div className="projectText">MockAI</div>
              <div className="projectText">2023</div>
            </div>
            <div
              className={
                inView3 ? "projectContainer visible" : "projectContainer"
              }
              onClick={() => scrollToRef(2)}
            >
              <div className="projectText">Gainer</div>
              <div className="projectText">2023</div>
            </div>
          </div>
        </div>
        <div className="BodyContainer">
          <div className="ImageContainer" ref={ref1}>
            <Image
              src={"/P1/p1 (2).jpg"}
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
              src={"/P1/p1 (1).jpg"}
              width={0}
              height={0}
              sizes="100vw"
              className="image"
              alt="shrek"
            ></Image>
          </div>

          <div className="ImageContainer" ref={ref2}>
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
          </div>

          <div className="ImageContainer" ref={ref3}>
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
    </div>
  );
}
