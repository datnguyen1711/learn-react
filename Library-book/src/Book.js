import React from "react";

const Book = ({ img, title, author }) => {
  const handleClick = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Bạn đã click vào đây");
  };
  const complexExample = (author) => {
    alert("Tác giả là " + author);
  };
  return (
    <div className="book">
      <img src={img} alt="" />
      <h1 onClick={() => alert(`${title}`)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        View Author
      </button>
    </div>
  );
};
export default Book;
