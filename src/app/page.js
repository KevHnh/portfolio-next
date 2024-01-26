import Image from "next/image";
import "./components.css";
import "./style.css";

export default function Home() {
  return (
    <div className="MainContainer">
      <div className="MainWrapper">
        <div className="NavContainer">
          <div className="NavLeft">
            <div className="title">Kevin Hinh</div>
            <div className="sub">
              Fullstack Developer with a keen eye for design.
            </div>
          </div>
          <div className="NavRight">
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
        </div>
        <div className="BodyContainer">
          <div className="statsContainer">
            <div className="statsItem">
              <div className="header">Projects</div>
              <div className="sub">30+</div>
            </div>
            <div className="statsItem">
              <div className="header">Experience</div>
              <div className="sub">4 Years</div>
            </div>
            <div className="statsItem">
              <div className="header">Hours</div>
              <div className="sub">5,000+</div>
            </div>
            <div className="statsItem">
              <div className="header">Pixels</div>
              <div className="sub">100,000,000+</div>
            </div>
            <div className="statsItem">
              <div className="header">Sarcasm</div>
              <div className="sub">0</div>
            </div>
          </div>
          <div className="projectsContainer">
            <div className="header">A few things I built</div>
            <div className="projectsContainer">
              <div className="projectBox">
                <div className="projectInfo">
                  <a href="https://aplican.co" target="_blank" className="bold">
                    Aplican
                  </a>
                  <div className="sub">2023</div>
                  <div className="status">
                    <div className="activeCircle"></div>
                    <div className="statusText">ACTIVE</div>
                  </div>
                </div>
                <div className="projectsub">
                  <div className="sub">
                    A web application that helps users stay organized and stay
                    ahead throughout their job hunting journey.
                  </div>
                  <div className="sub">Job Board | Tracker | AI Tools</div>
                </div>
              </div>
              <div className="projectBox">
                <div className="projectInfo">
                  <a
                    href="https://kevhinh.gumroad.com/l/mockai"
                    target="_blank"
                    className="bold"
                  >
                    MockAI
                  </a>
                  <div className="sub">2023</div>
                  <div className="status">
                    <div className="inactiveCircle"></div>
                    <div className="statusText">INACTIVE</div>
                  </div>
                </div>
                <div className="projectsub">
                  <div className="sub">
                    A LeetCode inspired technical interview practice platform
                    that leverages AI to create a realistic interview
                    experience.
                  </div>
                  <div className="sub">
                    Custom Personalization | Compiler | AI Interviewer
                  </div>
                </div>
              </div>

              <div className="projectBox">
                <div className="projectInfo">
                  <a
                    href="https://github.com/KevHnh/Gainer"
                    target="_blank"
                    className="bold"
                  >
                    Gainer
                  </a>
                  <div className="sub">2022</div>
                  <div className="status">
                    <div className="inactiveCircle"></div>
                    <div className="statusText">INACTIVE</div>
                  </div>
                </div>
                <div className="projectsub">
                  <div className="sub">
                    A Node.js bot that scraped realtime stock data and
                    identified top gaining stocks that were optionable in order
                    to make low risk put calls.
                  </div>
                  <div className="sub">
                    Realtime Updates | Automatic Alerts | Custom Commands
                  </div>
                </div>
              </div>
              <div className="projectBox">
                <div className="projectInfo">
                  <a
                    href="https://ezsea.netlify.app/"
                    target="_blank"
                    className="bold"
                  >
                    Ezsea
                  </a>
                  <div className="sub">2022</div>
                  <div className="status">
                    <div className="inactiveCircle"></div>
                    <div className="statusText">INACTIVE</div>
                  </div>
                </div>
                <div className="projectsub">
                  <div className="sub">
                    A web3 powered education platform that aimed to reward
                    active users in the cryptocurrency, Solana.
                  </div>
                  <div className="sub">
                    NFT Integration | Wallet Validation | Community Focused
                  </div>
                </div>
              </div>
              <div className="projectBox">
                <div className="projectInfo">
                  <a className="bold">Freelance Work</a>
                  <div className="sub">2022-2024</div>
                  <div className="status">
                    <div className="ndaCircle"></div>
                    <div className="statusText">SIGNED NDA</div>
                  </div>
                </div>
                <div className="projectsub">
                  <div className="sub">
                    Variety of different tools and web apps built for clients
                    across multiple industries ranging from finance to web3.
                  </div>
                  <div className="sub">
                    Web Scraping | Automation | Communication
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
