import React from 'react'
import {
  Link
} from "react-router-dom";

const MainLecList = () => {
  const cateList =[
    
  ]
  return (
   <main className='main-list-box'>
    <div className='wrapper'>
      <h3>강의 리스트</h3>

      <ul>
        <li>
          <Link to='/#'>
            <div className="card_img">
              {/* <img src="https://cdn.inflearn.com/public/courses/327839/cover/94dacdb8-a662-47ef-8b46-184920ba0844/썸네일.png"/> */}
            </div>
            <div className='courseTitle'>three.js로 시작하는 3D 인터랙티브 웹</div>
            <div className="instructor">1분코딩</div>
            <div className='rating'>★★★★☆</div>
            <div className="price">₩165,000</div>
            <div className='tags'>
              <span style={{background: 'hsl(321, 63%, 90%)'}}>+500명</span>
              <span style={{background: 'hsl(182, 75%, 94%)'}}>업데이트</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/#'>
            <div className='card_img'>
              {/* <img src="https://cdn.inflearn.com/public/courses/327839/cover/94dacdb8-a662-47ef-8b46-184920ba0844/썸네일.png"/> */}
            </div>
            <div className='courseTitle'>실전! 스프링 부트와 JPA 활용1 - 웹 애플리케이션 개발</div>
            <div className="instructor">1분코딩</div>
            <div className='rating'>★★★★☆</div>
            <div className="price">₩165,000</div>
            <div className='tags'>
              <span style={{background: 'hsl(321, 63%, 90%)'}}>+11200명</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/#'>
            <div className='card_img'>
              {/* <img src="https://cdn.inflearn.com/public/courses/327839/cover/94dacdb8-a662-47ef-8b46-184920ba0844/썸네일.png"/> */}
            </div>
            <div className='courseTitle'>지금 바로 React 시작하기</div>
            <div className="instructor">1분코딩</div>
            <div className='rating'>★★★☆☆</div>
            <div className="price">₩165,000</div>
            <div className='tags'>
              <span style={{background: 'hsl(321, 63%, 90%)'}}>+100명</span>
              <span style={{background: 'hsl(182, 75%, 94%)'}}>새강의</span>
              <span style={{background: 'hsl(1,100%,89%)'}}>할인중</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/#'>
            <div className='card_img'>
              {/* <img src="https://cdn.inflearn.com/public/courses/327839/cover/94dacdb8-a662-47ef-8b46-184920ba0844/썸네일.png"/> */}
            </div>
            <div className='courseTitle'>호돌맨의 요절복통 개발쇼 (SpringBoot, Vue.JS, AWS)</div>
            <div className="instructor">1분코딩</div>
            <div className='rating'>★★★★★</div>
            <div className="price">₩165,000</div>
            <div className='tags'>
              <span style={{background: 'hsl(321, 63%, 90%)'}}>+500명</span>
              <span style={{background: 'hsl(182, 75%, 94%)'}}>업데이트</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/#'>
            <div className="card_img">
              {/* <img src="https://cdn.inflearn.com/public/courses/327839/cover/94dacdb8-a662-47ef-8b46-184920ba0844/썸네일.png"/> */}
            </div>
            <div className='courseTitle'>three.js로 시작하는 3D 인터랙티브 웹</div>
            <div className="instructor">1분코딩</div>
            <div className='rating'>★★★★☆</div>
            <div className="price">₩165,000</div>
            <div className='tags'>
              <span style={{background: 'hsl(321, 63%, 90%)'}}>+500명</span>
              <span style={{background: 'hsl(182, 75%, 94%)'}}>업데이트</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
   </main>
  )
}

export default MainLecList;