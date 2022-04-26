import React from 'react'

function Education() {
  return (
	<div className="education">
		<h2>👩🏻‍🏫Education</h2>
		<div className="other">
	        <h3>한양사이버대학교</h3>
			<span className="role">응용소프트웨어공학과</span>
			<span className="time">2022.03. - 현재</span>
			<p>배움에 나이는 상관없다고 생각합니다. 고졸 비전공자 상태로 다소 늦은 나이지만 컴퓨터구조, 자료구조, 컴퓨터네트워크, 웹 프로그래밍 등의 CS지식의 이해도를 높이고 싶어 현재 학업 이수중입니다.</p>
      </div>
		<div className="other">
	        <h3>코딩애플</h3>
			<span className="role">React 쇼핑몰 프로젝트</span>
			<span className="time">2022.02. - 2022.03</span>
			<ul>
				<li>Component, props, state를 이용한 모던 웹개발</li>
				<li>JSX for 반복문, 이벤트 핸들러 등 UI기능 구현</li>
				<li>Router로 페이지 나누기</li>
				<li>Redux와 context API로 state관리</li>
				<li>Ajax등으로 서버 API 통신</li>
			</ul>
      </div>
		<div className="other">
	        <h3>하이미디어 아카데미</h3>
			<span className="role">스마트웹&콘텐츠 제작(웹디자인/웹퍼블리셔)</span>
			<span className="time">2018. 07. - 2019. 01</span>
			<ul>
				<li>HTML5, CSS3, JS</li>
				<li>프로토타입 제작</li>
				<li>디자인 구성요소 제작, 구현, 수정보완</li>
				<li>UI디자인 및 구현, 프로젝트 완료</li>
				<li>디지털디자인 사후관리</li>
				<li>실무프로젝트 발표 및 수정보완</li>
				<li>스마트기기 플랫폼</li>
			</ul>
      </div>
	</div>
  )
}

export default Education