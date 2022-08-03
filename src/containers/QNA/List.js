import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const List = ({ match }) => {
  return (
    <div className='qna-list'>
        {/* <h2>QNA 리스트</h2> */}

        <div className='left'>
          <div className='bo_top'>
            <h4>등록된 질문</h4>

            <div className='bo_search'>
              <select>
                <option value=''>제목</option>
                <option value=''>내용</option>
              </select>

              <div className='input_wrap'>
                <input type='text' placeholder='질문 검색'/>
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
              <Link to='/qna/0'>
                <div className='bo_subject'>
                  <h5>올림차순과 내림차순의 차이를 모르겠습니다</h5>
                  <div>
                    <span className='wr_name'>SMS</span>
                    <span className='wr_date'>22.07.25 오후 03:29</span>
                  </div>
                </div>

                <div className='hits'>
                  <span>528</span>
                  <span>조회수</span>
                </div>

                <div className='comments'>
                  <span>0</span>
                  <span>댓글</span>
                </div>
                
                <div className='thumbsUp'>
                  <span>0</span>
                  <span>추천</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className='right'>
          <div className='qna_login'>
            <p>포럼에 참여하려면,</p>

            <div>
              <Link to='/member/login'>로그인</Link>
            </div>

            <span>
              계정이 없으신가요?
              <Link to='/member/signup'>회원가입</Link>
            </span>
          </div>

          <div className='qna_card'>
            <h5>많이본 Q&amp;A</h5>

            <ul>
              <li>
                <Link to='/qna/0'>
                  <h6>1 올림차순과 내림차순의 차이를 모르겠습니다</h6>
                  <p>이 강좌를 통해 처음으로 프로그래밍을 배우고 있는데요, 강의를 보다가 처음으로 메인함수 안에 void라는 것이 들어가 있는데요</p>
                  <div>
                    <span>33011</span>
                    <span>2</span>
                    <span>0</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/qna/0'>
                  <h6>2 올림차순과 내림차순의 차이를 모르겠습니다</h6>
                  <p>이 강좌를 통해 처음으로 프로그래밍을 배우고 있는데요, 강의를 보다가 처음으로 메인함수 안에 void라는 것이 들어가 있는데요</p>
                  <div>
                    <span>33011</span>
                    <span>2</span>
                    <span>0</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/qna/0'>
                  <h6>3 올림차순과 내림차순의 차이를 모르겠습니다</h6>
                  <p>이 강좌를 통해 처음으로 프로그래밍을 배우고 있는데요, 강의를 보다가 처음으로 메인함수 안에 void라는 것이 들어가 있는데요</p>
                  <div>
                    <span>33011</span>
                    <span>2</span>
                    <span>0</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/qna/0'>
                  <h6>4 올림차순과 내림차순의 차이를 모르겠습니다</h6>
                  <p>이 강좌를 통해 처음으로 프로그래밍을 배우고 있는데요, 강의를 보다가 처음으로 메인함수 안에 void라는 것이 들어가 있는데요</p>
                  <div>
                    <span>33011</span>
                    <span>2</span>
                    <span>0</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/qna/0'>
                  <h6>5 올림차순과 내림차순의 차이를 모르겠습니다</h6>
                  <p>이 강좌를 통해 처음으로 프로그래밍을 배우고 있는데요, 강의를 보다가 처음으로 메인함수 안에 void라는 것이 들어가 있는데요</p>
                  <div>
                    <span>33011</span>
                    <span>2</span>
                    <span>0</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default List;