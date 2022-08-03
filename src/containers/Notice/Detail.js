import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Detail = ({ match, history }) => {
  const goNotice = () => {
    //해당 주소로 이동
    history.push('/notice');
  };

  return (
    <div className='notice-detail'>
        {/* <h2>공지사항 상세</h2> */}

        <div className='bo_top_btn'>
          <button onClick={goNotice}>목록으로</button>
        </div>

        <div className='bo_view'>
          <div className='bo_subject'>
            <h5>코딩 새내기를 위한 첫 코딩 인증 이벤트</h5>
            <div>
              <span className='wr_name'>SMS</span>
              <span className='wr_date'>22.07.25 오후 03:29</span>
            </div>
          </div>

          <div className='bo_cont'>
            <img src='https://statics.goorm.io/event/welcomeedu/notice/1_01.png'/>
          </div>
        </div>
    </div>
  )
}

export default Detail;