import React from 'react'
import {
  Link
} from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        {/* 도움말 링크 */}
        <div className='footer-top'>
          <p>도움이 필요하신가요?</p>
          <Link to="/">강의자 도움말</Link>
          <Link to="/">수강자 도움말</Link>
          <Link to="/">강의자 되기</Link>
        </div>
        {/* 도움말 링크 */}
      </div>

      {/* 풋터 내용 - 로고 / 내용/ 관련 링크 리스트 */}
      <div className='footer-main'>
        <div className="wrapper">
          <h1 id='footer-logo'>
            <Link to="/">
            SMS Study
              {/* <img src="assets/default/footer_logo.png"/> */}
            </Link>
          </h1>
          
          <div className="info">
            <p>상호 : SMS Study</p>
            <p>주소 : 서울특별시</p>
            <p>사업자등록번호 번호 : 000-00-00000</p>
          </div>
          
          <ul className="rel_link">
              <li><a href='https://github.com/smshack' target='_blank'>깃</a></li>
              <li><a href='https://northern-breath-ec3.notion.site/01ad859d32384a36a9fa34035180149c?v=239d09c3c09e44ac9ba4173e9a5df1a7' target='_blank'>노션</a></li>
              <li><a href='https://hub.docker.com/search?q=smshack' target='_blank'>도커허브</a></li>           
          </ul>
        </div>
      </div>
      {/* 풋터 내용 - 로고 / 내용/ 관련 링크 리스트 */}

      {/* 풋터 아래 */}
      <div className='footer-bottom'>
        <div className="wrapper">
          <div className='copyright'>
            SMS study inc.All Rights Reserved.
          </div>

          <ul className='privacy-role'>
              <li><Link to='/member/term'>이용약관</Link></li>
              <li><Link to='/member/privacy'>개인정보처리방침</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;