import React from 'react'

function Skills() {
  return (
		<div className="skills">
      <h2>👩🏻‍💻Skills</h2>
      <div className="other">
        <h3>HTML5, CSS3</h3>
        <ul>
          <li>IE, Chrome, Safari등 다양한 OS및 브라우저를 지원하는 웹표준을 지향합니다.</li>
          <li>반응형 웹을 위한 Media Query에 능숙합니다.</li>
        </ul>
      </div>
      <div className="other">
        <h3>JavaScript</h3>
        <ul>
          <li>ES5, ES6에 능숙합니다.</li>
          <li>유저 사용성 기반의 UI컨트롤 및 다양한 인터렉티브 기능 구현이 가능합니다.</li>
        </ul>
      </div>
      <div className="other">
        <h3>React</h3>
        <ul>
          <li>Router 사용하여 페이징 구현 가능합니다.</li>
          <li>Redux를 이용한 State관리 및 유지보수에 용이한 코드 개발이 가능합니다.</li>
          <li>Axios를 사용하여 API를 활용할 수 있습니다.</li>
        </ul>
      </div>
      <div className="other">
        <h3>Cooperation</h3>
        <ul>
          <li>Git, Source tree</li>
          <li>VSCode</li>
        </ul>
      </div>
      <div className="other">
        <h3>ETC</h3>
        <ul>
          <li>Adobe CC 그래픽 툴에 능숙합니다.</li>
          <li>시네마 카메라를 이용한 촬영 가능합니다.</li>
        </ul>
      </div>
  </div>
	)
}

export default Skills