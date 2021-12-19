import "./App.css";
import Post from "./components/posts/Post";

function App() {

  return (
    <>
      <div className="content">
        <h1 className="heading" id="home">
          <a href="/" style={{ textDecoration: "none" }}>
            The Recompiler
          </a>
        </h1>
        <nav className="navbar">
          <ul className="menu">
            <li className="menu-item">
              <span className="menu-item-text">
                <a href="/">HOME</a>
              </span>
            </li>
            <li className="menu-item">
              <span className="menu-item-text">
                <a href="/">WEB</a>
              </span>
            </li>
            <li className="menu-item">
              <span className="menu-item-text">
                <a href="/">ANDROID</a>
              </span>
            </li>
            <li className="menu-item">
              <span className="menu-item-text">
                <a href="/">ML / AI</a>
              </span>
            </li>
            <li className="menu-item">
              <span className="menu-item-text">
                <a href="/">ABOUT</a>
              </span>
            </li>
          </ul>
        </nav>
        <div className="first-container">
          <div className="carousel-container"></div>
          <div className="site-desc">
            <h2 className="site-desc-heading">Welcome to The Recompiler</h2>
            <p className="site-desc-content">
              One stop for all Web development, Android app development, and
              ML/AI solutions.
            </p>
          </div>
        </div>
        <div className="second-container">
          <div className="posts-container">
            <Post content="Post Content" />
            <Post content="Post Content" />
            <Post content="Post Content" />
          </div>
          <div className="recent-posts">
            <h2 className="site-desc-heading">RECENT POSTS</h2>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
}

export default App;
