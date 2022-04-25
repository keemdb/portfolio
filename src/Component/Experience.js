import React from 'react'

function Experience() {
  return (
	<div className="experience">
		<h2>Work Experience</h2>
		<div className="cont">
			<div className="cont-left">
				<h3>라오니스</h3>
				<span className="role">Frontend Developer</span>
				<span>2019. 06 - 2021. 10</span>
			</div>
			<div className="cont-right">
				<h4>이러닝 컨텐츠 개발</h4>
				<span className="time">2019. 06 - 2021. 10</span>
				<h5>Description.</h5>
				<p>
				이러닝 개발운영그룹 개발지원팀으로 소속되어 HTML5, Javascript를 이용하여 컨텐츠 플레이어 기능과 퀴즈 페이지와 같은 사용자의 상호작용을 위한 페이지를 기능 구현하였습니다.
				</p>
				<h5>What did I do.</h5>
				<ul>
				<li>React 기반 이러닝 컨텐츠 플레이어 개발</li>
				<li>Javascript, jQuery 사용자 퀴즈 기능 개발</li>
				<li>고객사별 LMS 시스템 포팅 업무</li>
				<li>웹사이트 유지보수</li>
				</ul>
				<h5>Tech Stack.</h5>
				<p>HTML5, CSS3, jQuery, Javascript, React</p>
				<h5>Link.</h5>
				<ul>
					<li><a href="http://www.raonis.co.kr/sample/R0135/01/01.html" target="_blank">컨텐츠 개발</a></li>
					<li><a href="http://www.raonis.co.kr/" target="_blank">라오니스 웹사이트</a></li>
				</ul>
				<img src="./portfolio/img/work_01.jpg" alt="라오니스 컨텐츠"/>
			</div>
		</div>
		<div className="cont">
			<div className="cont-left">
				<h3>빅토리아 프로덕션</h3>
				<span className="role">Frontend Developer</span>
				<span>2019. 02 - 2019. 06</span>
			</div>
			<div className="cont-right">
				<h4>Book+App 퍼블리싱 작업</h4>
				<span className="time">2019. 02 - 2019. 06</span>
				<h5>Description.</h5>
				<ul>
					<li>교육용 컨텐츠 E-Book형태의 사이트 퍼블리싱</li>
					<li>오피셜 사이트 개발 및 유지보수</li>
				</ul>
				<h5>What did I do.</h5>
				<ul>
				<li>HTML5 마크업</li>
				<li>jQuery 슬라이더 배너 구현</li>
				<li>bookshelfslider를 이용한 E-book 샘플 구현</li>
				</ul>
				<h5>Tech Stack.</h5>
				<p>HTML5, CSS3, jQuery, Javascript</p>
				<h5>Link.</h5>
				<ul>
					<li><a href="http://bookplusapp.com/" target="_blank">Book+App</a></li>
					<li><a href="http://vproductions.net/kr/" target="_blank">빅토리아 웹사이트</a></li>
				</ul>
				<img src="./portfolio/img/work_02.jpg" alt="Book+App"/>
			</div>
		</div>
	</div>
  )
}

export default Experience