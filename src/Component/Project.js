import React from 'react'

function Project() {
  return (
	<div className="project">
		<h2>😺Toy Project</h2>
		<div className="other">
			<h3>Netflix Clone</h3>
			<span className="time">2022. 04</span>
			<img src="./portfolio/img/project_03.jpg" alt="Netflix"/>
			<h5>Description</h5>
			<p>React를 이용한 넷플릭스 클론 코딩입니다. TMDB API를 적용해 영화 정보 데이터를 적용하였으며 영화 클릭시 Youtube API를 이용해 트레일러 영상을 제공하는 서비스입니다. Firebase로 사이트 배포했습니다.</p>
			<h5>Tech Stack</h5>
			<p>React, axios, Firebase, TMDB API, Youtube API</p>
			<h5>Link</h5>
			<p>🔗 <a href="https://netflix-clone-17b36.web.app/" target="_blank">View Site</a></p>
			<p>🔗 <a href="https://github.com/keemdb/netflix-clone" target="_blank">Github</a></p>
		</div>
		<div className="other">
			<h3>스물다섯 스물하나 MBTI</h3>
			<span className="time">2022. 04</span>
			<img src="./portfolio/img/project_01.jpg" alt="스물다섯 스물하나 MBTI"/>
			<h5>Description</h5>
			<p>드라마 "스물다섯 스물하나"의 캐릭터와 나의 성향이 맞는 MBTI 테스트 프로젝트 입니다. 사용자가 선택한 값과 결과 값을 비교하여 유형분석하는 알고리즘으로 개발하였으며 SNS공유 기능과 카카오 애드핏을 적용하여 Netlify로 배포 운영중입니다.</p>
			<h5>Tech Stack</h5>
			<p>HTML5, CSS3, Javascript</p>
			<h5>Link</h5>
			<p>🔗 <a href="https://twofivetwoone.netlify.app/" target="_blank">View Site</a></p>
			<p>🔗 <a href="https://github.com/keemdb/twofietwoone" target="_blank">Github</a></p>
		</div>
		<div className="other">
			<h3>Sony 브랜딩 페이지</h3>
			<span className="time">2022. 03</span>
			<img src="./portfolio/img/project_02.jpg" alt="소니 브랜딩 페이지"/>
			<h5>Description</h5>
			<p>소니 브랜딩 페이지 하드코딩으로 제작했습니다. swiper를 이용해 메인 슬라이더를 구현했습니다. Youtube API를 이용해 팝업 형태의 영상기능 구현.</p>
			<h5>Tech Stack</h5>
			<p>HTML5, CSS3, Javascript, Youtube API, Swiper</p>
			<h5>Link</h5>
			<p>🔗 <a href="https://sonystore.netlify.app/" target="_blank">View Site</a></p>
			<p>🔗 <a href="https://github.com/keemdb/sony-clone" target="_blank">Github</a></p>
		</div>
	</div>
  )
}

export default Project