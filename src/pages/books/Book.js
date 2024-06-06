import React from "react";
import Book1 from "./../../assets/wigni1.png";
import samsung from "./../../assets/samsung.webp"
import pixel from "./../../assets/googlepixel.webp"
import oneplus from "./../../assets/OnePlus.webp"
import "./book.css";
{/* დავალება: გავაკეთოთ წიგნის გვერდი სადაც მოცემულია სათაური, სურათი, ავტორი, წელი და მახასიათებლები*/}
const books = [
  {
    book_title: "Gooogle Pixel 7 pro",
    book_author: "google",
    book_desc:
      'ამბავი "მეტრო 2033-ით" დაიწყო. ადამიანებმა ომის შემდეგაც ვერაფერი ისწავლეს და მიწის ქვეშ კვლავაც დაუნდობლად განაგრძობენ ერთმანეთის განადგურებას. ციკლის მეორე ნაწილში მთავარი გმირი ჰანტერია, პირველივე წიგნიდან გამორჩეული თითქმის ზებუნებრივი უნარების მქონე გმირი, რომელიც კვლავ იბრძვის, თუმცა საკითხავია, ამჯერად რის მხარეზეა - სიკეთისა თუ ბოროტებს',
    ISBN: 9789941472732,
    production: "წიგნები ბათუმში",
    year: 2023,
    language: "ქართული",
    count: true,
    price: 1699,
    sale_status: true,
    sale: 1499,
    image: pixel,
  },
  {
    book_title: "Samsung Galaxy S24",
    book_author: "დიმიტრი გლუხოვსკი",
    book_desc:
      'ამბავი "მეტრო 2033-ით" დაიწყო. ადამიანებმა ომის შემდეგაც ვერაფერი ისწავლეს და მიწის ქვეშ კვლავაც დაუნდობლად განაგრძობენ ერთმანეთის განადგურებას. ციკლის მეორე ნაწილში მთავარი გმირი ჰანტერია, პირველივე წიგნიდან გამორჩეული თითქმის ზებუნებრივი უნარების მქონე გმირი, რომელიც კვლავ იბრძვის, თუმცა საკითხავია, ამჯერად რის მხარეზეა - სიკეთისა თუ ბოროტებს',
    ISBN: 9789941472732,
    production: "წიგნები ბათუმში",
    year: 2023,
    language: "ქართული",
    count: true,
    price: 2099,
    sale_status: true,
    sale: 1999,
    image: samsung,
  },
  {
    book_title: "OnePlus 12R",
    book_author: "დიმიტრი გლუხოვსკი",
    book_desc:
      'ამბავი "მეტრო 2033-ით" დაიწყო. ადამიანებმა ომის შემდეგაც ვერაფერი ისწავლეს და მიწის ქვეშ კვლავაც დაუნდობლად განაგრძობენ ერთმანეთის განადგურებას. ციკლის მეორე ნაწილში მთავარი გმირი ჰანტერია, პირველივე წიგნიდან გამორჩეული თითქმის ზებუნებრივი უნარების მქონე გმირი, რომელიც კვლავ იბრძვის, თუმცა საკითხავია, ამჯერად რის მხარეზეა - სიკეთისა თუ ბოროტებს',
    ISBN: 9789941472732,
    production: "წიგნები ბათუმში",
    year: 2023,
    language: "ქართული",
    count: true,
    price: 1899,
    sale_status: true,
    sale: 1749,
    image: oneplus,
  },
];

export const Book = () => {
  return (
    <div className="books">
      {books.map((book, index) => (
        <div className="card">
          <div>
            <img src={book.image} alt={book.book_title} />
          </div>

          <div className="book_name">
            {book.book_title}

            </div>

            <div className="price">
            <span className={`${ book.sale_status ? "throught" : "not_throught"  }`}>{book.price}</span><span className="lari">&#8382;</span>

            {
                book.sale_status ? <div className="new_price">{book.sale} <span className="lari">&#8382;</span></div> : " "
            }
            </div>
            
        </div>
      ))}
    </div>
  );
};