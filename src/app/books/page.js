import Image from "next/image";
import Link from "next/link";
import { promises as fs } from "fs";

export default async function Books() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/books/books.JSON",
    "utf8"
  );
  const data = JSON.parse(file);

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
          <h2>What&apos;s on my bookshelf:</h2>
        </div>
        {data.map((entry, index) => (
          <div className="bookContainer" key={index}>
            <div>
              <Image
                src={entry.image}
                width={0}
                height={0}
                sizes="100vw"
                alt="bookCover"
                className="image"
              />
            </div>
            <div>
              <div className="bookTitle">{entry.title}</div>
              <div className="bookAuthor">By: {entry.author}</div>
              <div className="bookDateRating">
                Purchased: {entry.date} • Rating: {entry.rating}/10
              </div>
              <div
                className="bookReview"
                dangerouslySetInnerHTML={{ __html: entry.review }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
