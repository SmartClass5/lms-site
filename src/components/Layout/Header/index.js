import React, { useState } from 'react'
import {
  Link
} from "react-router-dom";

const Header = () => {
  
  const [isOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
  }

  return (
    <header>
      <div className='wrapper'>
        {/* 헤더 로고 / 헤더 네비게이션 / 검색창/ 로그인-회원가입 버튼 */}

          <button className="mobile_nav_btn" onClick={()=>toggleMenu()}>메뉴 버튼</button>

          {/* 헤더 로고 */}
          <h1 id='logo'>
            <Link to="/#">
              Smart Study
              {/* <img src={`assets/default/logo.png`}></img> */}
            </Link>
          </h1>

          {/* 헤더 네비게이션 */}
          <nav className='header-nav'>
            <ul>
              <li><Link to="/#">Home</Link></li>
              <li><Link to="/notice">공지사항</Link></li>
              <li><Link to="/qna">QNA</Link></li>
              <li><Link to="/category">카테고리</Link></li>
            </ul>
          </nav>

          {/* 모바일 네비게이션 */}
          <nav className={isOpen? 'on mobile-nav':'mobile-nav'}>
            <div className='bg' onClick={()=>toggleMenu()}></div>
            
            <div className='cont'>
              {/* 검색창 */}
              <div className='mobile-search'>
                {/* 검색창 */}
                <input type='text'/>
                <input type='button'/>
              </div>

              <ul>
                <li><Link to="/#">Home</Link></li>
                <li><Link to="/notice">공지사항</Link></li>
                <li><Link to="/qna">QNA</Link></li>
                <li><Link to="/category">카테고리</Link></li>
              </ul>
            </div>
          </nav>
          
          {/* 검색창 */}
          <div className='header-search'>
            {/* 검색창 */}
            <input type='text'/>
            <input type='button'/>
          </div>

          {/* 로그인- 회원가입 */}
          <ul className='hd-member-link'>
            <li><Link to='/member/login'>로그인</Link></li>
            <li><Link to='/member/signup'>회원가입</Link></li>
          </ul>

        {/* 헤더 로고/ 검색창/ 로그인-회원가입 버튼 */}
      </div>
    </header>
  )
}

export default Header;