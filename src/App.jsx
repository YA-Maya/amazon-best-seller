import "./App.css";

function App() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book() {
  return (
    <article className="book">
      <Images />
      <Title />
      <Author />
    </article>
  );
}
const Images = () => (
  <img
    src="https://m.media-amazon.com/images/I/512cU+NhyAL._SY344_BO1,204,203,200_.jpg"
    alt="Lesson in chemisty"
  />
);
const Title = () => <h2>Lessons in Chemistry</h2>;
const Author = () => <h2>Bonnie Garmus</h2>;

export default App;
