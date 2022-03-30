import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="logo">KEEMDB PORTFOLIO</div>
          <div className="profile">
            <img src="./img/profile.jpg"/>
          </div>
          <h1>클린코드를 지향하는 개발자, 김동범</h1>
          <h2>👨‍💻 Front-end Engineer, Web Developer</h2>
          <div className="aboutMe">
            <h3>About Me</h3>
            <hr/>
            <strong>Introduction</strong>
            <p>
              안녕하세요. 3년차 웹 퍼블리셔에서 프론트엔드 개발자를 꿈꾸는 김동범입니다.<br/>
              많은 생각을 하고, 글이나 대화를 통해 해소합니다. 일일 회고와 기술 회고를 통해 현상의 원인을 분석합니다. 실수는 다시 하지 않도록 정확히 기억하고 계속 할 것은 구체적인 실행을 할 수 있습니다. 
              유지보수가 쉬운 코드, 중복 없는 코드를 쓰려고 노력합니다. 최근에는 함수형 프로그래밍과 모던한 개발 환경 설정에 관심이 많습니다. 
              타입스크립트와 뗄 수 없는 사이이며, 아침 출근 후 커피 마시는 것을 좋아합니다.  ☕️
            </p>
            <strong>Contact</strong>
            <p>
              <ul>
                <li>📭 keemdb@gmail.com</li>
                <li>📞 010-2328-4555</li>
                <li>📄 https://velog.io/@keemdb</li>
                <li>🐱 https://github.com/keemdb</li>
              </ul>
            </p>
            <hr/>
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