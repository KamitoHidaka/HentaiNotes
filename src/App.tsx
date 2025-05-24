import "./App.css";
import GithubLogo from "./assets/github.png";
import Download from "./assets/download.png";

function App() {
  return (
    <div className="App">
      <h1 className="title">Hentai Notes</h1>
      <p className="description">
        Hentai Notes es una aplicación diseñada para Android que te permite
        crear y gestionar tus notas y hábitos de manera sencilla y eficiente.
      </p>
      <p className="description">
        Esta aplicación es de código abierto y está disponible en GitHub.
      </p>
      <section className="features">
        <a href="./download/Notes.apk" download className="download-button">
          <p>Descargar APK</p>
          <img src={Download} alt="Download Icon" className="download-logo" />
        </a>

        <a
          className="download-button"
          target="_blank"
          href="https://github.com/KamitoHidaka/HentaiNotes"
        >
          <img src={GithubLogo} alt="Github Logo" className="github-logo" />
          <p>Github</p>
        </a>
      </section>
      <footer className="footer">
        <section>
          <a href="https://www.flaticon.com/free-icons/save" title="save icons">
            Save icons created by Icon mania - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/github"
            title="github icons"
          >
            Github icons created by Ruslan Babkin - Flaticon
          </a>
        </section>
        <p>©2025 Hentai Notes. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
