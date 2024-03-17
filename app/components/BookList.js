import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/BookList.module.css";

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className={styles.bookList}>
      <h2 className={styles.title}>Book List</h2>
      <ul className={styles.list}>
        {books.map((book) => (
          <li key={book.id} className={styles.item}>
            <div className={styles.book}>
              <div className={styles.details}>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookAuthor}>by {book.author}</p>
              </div>
              <div className={styles.actions}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
