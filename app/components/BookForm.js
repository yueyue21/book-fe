import React from "react";
import { useDispatch } from "react-redux";
import { createBook } from "../store/actions";
import styles from "../styles/BookForm.module.css"; // Import CSS module

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook({ title, author }));
    setTitle("");
    setAuthor("");
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className={styles.input}
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
