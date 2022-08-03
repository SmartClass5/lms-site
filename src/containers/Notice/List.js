import React from 'react'
import {
    Link
  } from "react-router-dom";
const List = ({ match }) => {
  return (
    <div className='notice-list'>
      {/* <h2>공지리스트</h2> */}

      <div className='bo_top'>
        <h4>등록된 공지사항</h4>

        <div className='bo_search'>
          <select>
            <option value=''>제목</option>
            <option value=''>내용</option>
          </select>

          <div className='input_wrap'>
            <input type='text' placeholder='공지사항 검색'/>
            <span className='search_btn'>검색</span>
          </div>
        </div>

        <select className='li_sort'>
          <option value=''>최신순</option>
          <option value=''>오래된순</option>
        </select>
      </div>

      <ul className='bo_list'>
        <li>
          <Link to='/notice/0'>
            <div className='bo_subject'>
              <h5>코딩 새내기를 위한 첫 코딩 인증 이벤트</h5>
              <div>
                <span className='wr_name'>SMS</span>
                <span className='wr_date'>22.07.25 오후 03:29</span>
              </div>
            </div>

            <div className='hits'>
              <span>528</span>
              <span>조회수</span>
            </div>
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default List;