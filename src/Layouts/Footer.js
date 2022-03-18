import "./Footer.css";
import github from "../Assets/github.png";
import linkedInLogo from "../Assets/linkedin.png";

function Footer() {
  return (
    <footer className="Footer">
      <hr />
      Rong
      <a href="https://github.com/mecon2000">
        <img src={github} alt="github"></img>
      </a>
      <a href="https://www.linkedin.com/in/ronnie-ganot-9065b613/">
        <img src={linkedInLogo} alt="LinkedIn"></img>
      </a>
    </footer>
  );
}

export { Footer };
