import './App.css';
import Aboutme from './Component/Aboutme';
import Header from './Component/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Header/>
          <div className="profile">
            {/* <img src="./img/profile.jpg"/> */}
          </div>
          <h2 className="title">UI/UX를 생각하는 개발자, 김동범</h2>
          <p className="title_sub">👨‍💻 Front-end Engineer, Web Developer</p>
          <Aboutme />
          <div className="skills">
            <h3>Skills</h3>
              <hr/>
              <strong>Front-end</strong>
              <p>
                <ul>
                  <li>HTML5, CSS3, Javascript (es6)</li>
                  <li>React.js, jQuery</li>
                  <li>Redux</li>
                </ul>            
              </p>
              <strong>Cooperation</strong>
              <p>
                <ul>
                  <li>Git, Source tree</li>
                  <li>VSCode</li>
                </ul>            
              </p>
              <hr/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;