import React from "react";
import "../src/reset.css"
import "../src/main.css";

function Header() {
  return (
    <header className="header">
      <h1>Заголовок</h1>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="aside">
      <nav>
        <ul className="link__list">
          <li><a href="/" className="link">сылка 1</a></li>
          <li><a href="/" className="link">сылка 2</a></li>
          <li><a href="/" className="link">сылка 3</a></li>
        </ul>
      </nav>
    </aside>
  );
}

function MainContent() {
  return (
    <main className="main">
      <h2 className="main__title">Центральный блок</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla saepe dicta quisquam officiis distinctio illum! Nisi fugiat amet rerum quaerat aut ipsum doloribus vitae natus magnam ipsa! Voluptates, quo facilis?
      </p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus asperiores veritatis, ullam ipsam repudiandae tempore eum voluptates, neque architecto recusandae praesentium placeat eligendi quasi deleniti! Aperiam, minus? Amet, ex pariatur unde possimus odio totam optio harum dolorem non dicta. Dicta neque saepe voluptatibus hic in, ad animi, officia velit, aspernatur aliquam fugit maxime? Odio modi maxime quod esse ipsum aspernatur, laboriosam quia perspiciatis, ipsam tempora, at nam voluptatibus et. Et amet laboriosam quia odit reiciendis placeat non fugit ullam similique.</p>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;