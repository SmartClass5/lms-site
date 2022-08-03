import React, { useEffect, useState } from 'react'


const ProgramDetail = ({ match }) => {
  const [category, setCategory] = useState('');

  const [toggle, setToggle] = useState(false)


  return (
    <div className='program-detail'>
      <div className='top_banner' style={{background: 'linear-gradient(90deg, #058c44, #fcdc3c)'}}>
        <div>
          <h1 className="_14my3Z" data-mkt-id="edu_lecture_h1_lectureName">홍드로이드의 To-Do 리스트 앱 만들기</h1>
          <p className="RoScUb">기획, 개발, 수익화, 출시까지 안드로이드 앱 개발을 한 번에 다뤄봅시다!</p>
        </div>
      </div>

      <div className='tab-container'>
        <div className="wrapper">
          <ul>
            <li className="active"><a href='#courseTab1'>강좌소개</a></li>
            <li><a href='#courseTab2'>교육과정</a></li>
            <li><a href='#courseTab3'>강의자 소개</a></li>
            {/* <li><a href='#courseTab4'>강좌 후기</a></li> */}
          </ul>
        </div>
      </div>

      <div className='main-container'>
        <div className='wrapper'>
          <div className='courseInfo courseWrap' id='courseTab1'>
            <h3>강좌소개</h3>
            
            <div className='courseCont'>
              <ul className='info'>
                <li>
                  <h6>난이도</h6>
                  <p>쉬움</p>
                </li>
                <li>
                  <h6>카테고리</h6>
                  <p>프로그래밍 - 모바일 프로그래밍</p>
                </li>
                <li>
                  <h6>태그</h6>
                  <p>안드로이드, 코틀린, Kotlin, 홍드로이드, 투두리스트, 앱 만들기, android, todo, 앱 수익화, 수익창출</p>
                </li>
                <li>
                  <h6>수료증</h6>
                  <p>발급 가능</p>
                </li>
                <li>
                  <h6>추천 수강대상</h6>
                  <p>
                    <span>- 안드로이드 앱 개발자로 취업을 준비하시는 분들</span>
                    <span>- 취미로 앱을 만들어보고 싶으신 분들</span>
                    <span>- 부업이나 창업으로 앱 개발로 수익을 얻고싶으신 분들</span>
                    <span>- 안드로이드 모바일 개발과정을 A to Z 로 경험해보고 싶으신 분들</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className='courseCurri courseWrap' id='courseTab2'>
            <h3>교육과정</h3>
            
            <div className='courseCont'>
              <div className='card'>
              <ul>
                <li>
                  <div>01</div>
                  <div>Welcome Android</div>
                  <div>+</div>
                </li>
                <li>
                  <div>02</div>
                  <div>Kotlin 기초 프로그래밍</div>
                </li>
                <li>
                  <div>03</div>
                  <div>안드로이드 기초 프로그래밍</div>
                </li>
                <li>
                  <div>04</div>
                  <div>시작 화면 (Splash Screen) 만들기</div>
                </li>
                <li>
                  <div>05</div>
                  <div>메인 화면 (Main Screen)만들기</div>
                </li>
              </ul>
              </div>
            </div>
          </div>
          
          <div className='courseWrap'  id='courseTab3'>
            <h3>강의자 소개</h3>

            <div className='courseCont'>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default ProgramDetail;