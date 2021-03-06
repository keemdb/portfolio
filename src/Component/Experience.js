import React from 'react'

function Experience() {
  return (
	<div className="experience">
		<h2>๐ Work Experience</h2>
		<div className="cont">
			<div className="cont-left">
				<h3>๋ผ์ค๋์ค</h3>
				<span className="role">Frontend Developer</span>
				<span>2019. 06 - 2021. 10</span>
			</div>
			<div className="cont-right">
				<h4>์ด๋ฌ๋ ์ปจํ์ธ  ๊ฐ๋ฐ</h4>
				<span className="time">2019. 06 - 2021. 10</span>
				<h5>Description.</h5>
				<p>
				์ด๋ฌ๋ ๊ฐ๋ฐ์ด์๊ทธ๋ฃน ๊ฐ๋ฐ์ง์ํ์ผ๋ก ์์๋์ด HTML5, Javascript๋ฅผ ์ด์ฉํ์ฌ ์ปจํ์ธ  ํ๋ ์ด์ด ๊ธฐ๋ฅ๊ณผ ํด์ฆ ํ์ด์ง์ ๊ฐ์ ์ฌ์ฉ์์ ์ํธ์์ฉ์ ์ํ ํ์ด์ง๋ฅผ ๊ธฐ๋ฅ ๊ตฌํํ์์ต๋๋ค.
				</p>
				<h5>What did I do.</h5>
				<ul>
				<li>React ๊ธฐ๋ฐ ์ด๋ฌ๋ ์ปจํ์ธ  ํ๋ ์ด์ด ๊ฐ๋ฐ</li>
				<li>Javascript, jQuery ์ฌ์ฉ์ ํด์ฆ ๊ธฐ๋ฅ ๊ฐ๋ฐ</li>
				<li>๊ณ ๊ฐ์ฌ๋ณ LMS ์์คํ ํฌํ ์๋ฌด</li>
				<li>์น์ฌ์ดํธ ์ ์ง๋ณด์</li>
				</ul>
				<h5>Tech Stack.</h5>
				<p>HTML5, CSS3, jQuery, Javascript, React</p>
				<h5>Link.</h5>
				<ul>
					<li><a href="http://www.raonis.co.kr/sample/R0135/01/01.html" target="_blank">์ปจํ์ธ  ๊ฐ๋ฐ</a></li>
					<li><a href="http://www.raonis.co.kr/" target="_blank">๋ผ์ค๋์ค ์น์ฌ์ดํธ</a></li>
				</ul>
				<img src="./img/work_01.jpg" alt="๋ผ์ค๋์ค ์ปจํ์ธ "/>
			</div>
		</div>
		<div className="cont">
			<div className="cont-left">
				<h3>๋นํ ๋ฆฌ์ ํ๋ก๋์</h3>
				<span className="role">Frontend Developer</span>
				<span>2019. 02 - 2019. 06</span>
			</div>
			<div className="cont-right">
				<h4>Book+App ํผ๋ธ๋ฆฌ์ฑ ์์</h4>
				<span className="time">2019. 02 - 2019. 06</span>
				<h5>Description.</h5>
				<ul>
					<li>๊ต์ก์ฉ ์ปจํ์ธ  E-Bookํํ์ ์ฌ์ดํธ ํผ๋ธ๋ฆฌ์ฑ</li>
					<li>์คํผ์ ์ฌ์ดํธ ๊ฐ๋ฐ ๋ฐ ์ ์ง๋ณด์</li>
				</ul>
				<h5>What did I do.</h5>
				<ul>
				<li>HTML5 ๋งํฌ์</li>
				<li>jQuery ์ฌ๋ผ์ด๋ ๋ฐฐ๋ ๊ตฌํ</li>
				<li>bookshelfslider๋ฅผ ์ด์ฉํ E-book ์ํ ๊ตฌํ</li>
				</ul>
				<h5>Tech Stack.</h5>
				<p>HTML5, CSS3, jQuery, Javascript</p>
				<h5>Link.</h5>
				<ul>
					<li><a href="http://bookplusapp.com/" target="_blank">Book+App</a></li>
					<li><a href="http://vproductions.net/kr/" target="_blank">๋นํ ๋ฆฌ์ ์น์ฌ์ดํธ</a></li>
				</ul>
				<img src="./img/work_02.jpg" alt="Book+App"/>
			</div>
		</div>
	</div>
  )
}

export default Experience