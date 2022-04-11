import React from 'react';
import './Aboutme.css';

function Aboutme() {
  return (
	<div className="aboutMe">
		<h3>About Me</h3>
            <hr/>
            <strong>Introduction</strong>
            <p>
              안녕하세요. 3년차 웹 퍼블리셔에서 프론트엔드 개발자를 꿈꾸는 김동범입니다.<br/>
              이러닝 콘텐츠 개발회사에서 React를 경험하며 상호작용 기능 개발 및 유지보수를 담당했습니다. <br/>
              UI/UX의 이해도가 높아 디자이너와의 커뮤니케이션이 원할하게 이루어집니다.<br/>
              유지보수가 쉬운 코드, 중복 없는 코드를 쓰려고 노력합니다. <br/>최근에는 함수형 프로그래밍과 모던한 개발 환경 설정에 관심이 많습니다. 
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
	</div>
  )
}

export default Aboutme