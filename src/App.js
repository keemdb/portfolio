import './App.css';
import Aboutme from './Component/Aboutme';
import Skills from './Component/Skills';
import Experience from './Component/Experience';
import Project from './Component/Project';
import Other from './Component/Other';
import Education from './Component/Education';
import Certificate from './Component/Certificate';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="profile">
            {/* <img src="./img/profile.jpg"/> */}
          </div>
          <h1 className="title">
            UI/UX를 생각하는 개발자,<br/>
            저는 김동범입니다.
          </h1>
          <p className="title_sub">👨‍💻 Front-end Engineer, Web Developer</p>
          <Aboutme />
          <Experience/>
          <Project/>
          <Other/>
          <Skills/>
          <Education/>
          <Certificate/>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;