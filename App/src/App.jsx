import "./app.css";
import EventExample from "./EventExample";
import bookArray from "./books";
import Book from "./book";

function App() {

  const getBook = (id) => {const book = bookArray.find(book => book.id === id);
    console.log(book);}



  return (
    <section className="booklist">
      <EventExample />
      {bookArray.map((book, index) => {
        const { img, title, author, id} = book;
        return <Book key={id} id={id} img={img} title={title} author={author}  getBook ={getBook}/>;
      })}
    </section>
  );
}


export default App;
