import '../styles/App.scss';

function Contact() {
  
  return (
    <div className="container-content">
      <div className="head">
        <p className="title">Contact Me</p>
        <p className="desc">I am available for hire and open to any ideas of cooperation.</p>
      </div>
      <div className="contacts">
        <div className="item">
          <p className="title">E-mail</p>
          <a className="value" href="mailto:fatiamarwa@gmail.com">fatiamarwa@gmail.com</a>
        </div>
        <div className="item">
          <p className="title">LinkedIn</p>
          <a className="value" href="https://www.linkedin.com/in/fatia-marwa-5440a916a/" target="_blank" rel="noreferrer">Fatia Marwa</a>
        </div>
        <div className="item">
          <p className="title">github</p>
          <a className="value" href="https://www.github.com/fatiabob" target="_blank" rel="noreferrer">fatiamarwa</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
