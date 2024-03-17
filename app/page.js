import React from "react";
import { useSelector } from "react-redux";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import styles from "./styles/Home.module.css";

const HomePage = () => {
  // const books = useSelector((state) => state.books);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Book Management System</h1>
      <p className={styles.subtitle}>
        Manage your books easily with our system!
      </p>
      <BookForm />
      {/* <BookList books={books} /> */}
    </div>
  );
};

export default HomePage;
