import Image from "next/image";
import "./components.css";
import "./style.css";

export default function Home() {
  return (
    <div className="MainContainer">
      <div className="MainWrapper">
        <div className="NavContainer">
          <div className="NavSection col">
            <div className="header">Kevin Hinh</div>
            <div className="sub">Software Developer & UI/UX Designer</div>
          </div>
          <div className="NavSection col">
            <div className="sub">
              I enjoy building super simple and minimalistic yet creative
              products. My passion for design and functionality comes to life in
              every project I undertake.
            </div>
          </div>
          <div className="NavSection col">
            <div className="sub">
              Whether it's crafting sleek user interfaces or developing elegant
              solutions, I thrive on the challenge of making complexity appear
              effortless.
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
            <div className="header">Projects</div>
            <div className="projectContainer">
              <div className="projectText">Aplican</div>
              <div className="projectText">2023</div>
            </div>
            <div className="projectContainer">
              <div className="projectText">MockAI</div>
              <div className="projectText">2023</div>
            </div>
            <div className="projectContainer">
              <div className="projectText">Gainer</div>
              <div className="projectText">2023</div>
            </div>
          </div>
        </div>
        <div className="BodyContainer">
          <div className="ImageContainer">
            <Image
              src={"/Shrek.png"}
              width={0}
              height={0}
              sizes={"100vw"}
              className="image"
            ></Image>
            <Image
              src={"/Shrek.png"}
              width={0}
              height={0}
              sizes={"100vw"}
              className="image"
            ></Image>
            <Image
              src={"/Shrek.png"}
              width={0}
              height={0}
              sizes={"100vw"}
              className="image"
            ></Image>
          </div>
          <div className="ImageContainer">
            <Image
              src={"/Shrek.png"}
              width={0}
              height={0}
              sizes={"100vw"}
              className="image"
            ></Image>
            <Image
              src={"/Shrek.png"}
              width={0}
              height={0}
              sizes={"100vw"}
              className="image"
            ></Image>
            <Image
              src={"/Shrek.png"}
              width={0}
              height={0}
              sizes={"100vw"}
              className="image"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
