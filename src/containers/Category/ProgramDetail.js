import React, { useEffect, useState, useContext } from 'react'
import {
  Route, Link,
  useHistory,
  useParams
} from "react-router-dom";
import _ from 'lodash';
import axios from 'axios'
import { API } from '../../config/config';
import { AuthContext } from '../../Context/AuthContext';
import swal from 'sweetalert';


const ProgramDetail = ({ }) => {
  const [category, setCategory] = useState('');
  const [toggle, setToggle] = useState(false);
  const [lecture, setLecture] = useState({});
  const [learner, setLearner] = useState({});
  const { authState, setAuthState } = useContext(AuthContext);

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    console.log(authState, 'authState')
    axios.get(`${API.base_crud_url}/custom-api/lecture`, {
      params: {
        id: id
      }
    }).then((response) => {
      setLecture(_.get(response, 'data.data[0]'))
    })
    axios.get(`${API.base_crud_url}/custom-api/learner`, {
      params: {
        username: _.get(authState, 'username'),
        lecture_title: _.get(lecture, 'title')
      }
    }).then((response) => {
      setLearner(_.get(response, 'data.data[0]'))
    })
  }, [])


  const applylecture = () => {
    // 1. 요청으로 강좌 아이디랑 로그인된 사용자 정보를 보냄
    axios.post(`${API.authed_use_url}/authed-api/apply`,
      {
        lecture_id: id
      },
      {
        headers: {
          accessToken: localStorage.getItem('accessToken')
        },
      }
    ).then((response) => {
      console.log(_.get(response, 'data'))
      if (_.get(response, 'status') == 200) {
        swal({
          title: `${_.get(lecture, 'title')}수강 신청`,
          text: `${_.get(response, 'data.msg')}`,
          icon: "success",
          button: "확인"
        })
      }
    })
    // 2. learner 컬렉션에 데이터 저장

  }

  return (
    <div className='program-detail'>
      <div className='top_banner' style={{ background: 'linear-gradient(90deg, #058c44, #fcdc3c)' }}>
        <div>
          <h1 className="_14my3Z" data-mkt-id="edu_lecture_h1_lectureName">{_.get(lecture, 'title')}</h1>
          <p className="RoScUb">{_.get(lecture, 'sub_title')}</p>
        </div>
      </div>
      {/*  */}
      {_.get(authState, 'status') && (
        (_.get(learner, 'username') == _.get(authState, 'username')) ?
          <div>
            <button onClick={() => { history.push(`/lecture/${_.get(lecture, '_id')}`) }} >수강 페이지 이동</button>
          </div> :
          <div>
            <button onClick={applylecture} >수강 신청</button>
          </div>
      )
      }

      <div className='tab-container'>
        <div className="wrapper">
          <ul>
            <li className="active"><a href='#courseTab1'>강좌소개</a></li>
            <li><a href='#courseTab2'>교육과정</a></li>
            {/* <li><a href='#courseTab3'>강의자 소개</a></li> */}
            {/* <li><a href='#courseTab4'>강좌 후기</a></li> */}
          </ul>
        </div>
      </div>
      {/* 로그인 한 사용자가 수강 신청 할수 있도록 하는 부분 여기 꾸며주세요 */}

      <div className='main-container'>
        <div className='wrapper'>
          <div className='courseInfo courseWrap' id='courseTab1'>
            <h3>강좌소개</h3>

            <div className='courseCont'>
              <ul className='info'>
                <li>
                  <h6>난이도</h6>
                  <p>{_.get(lecture, 'difficulty')}</p>
                </li>
                <li>
                  <h6>카테고리</h6>
                  <p>{_.get(lecture, 'category')} - {_.get(lecture, 'sub_category')}</p>
                </li>
                <li>
                  <h6>태그</h6>
                  <p>{_.get(lecture, 'tag') && _.get(lecture, 'tag').map(val => {

                    <>[{val}] </>

                  })}</p>
                </li>
                <li>
                  <h6>추천 수강대상</h6>
                  <p>
                    {_.get(lecture, 'for_recommend') && _.get(lecture, 'for_recommend').map((val, key) => {
                      return (
                        <span key={`${key}_1`}>- {val}</span>
                      )
                    })}
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
                  {_.get(lecture, 'curriculum_summary') && _.get(lecture, 'curriculum_summary').map((val, key) => {
                    return (
                      <li key={`${key}_2`}>
                        <div>{_.get(val, 'order') + 1}</div>
                        <div>{_.get(val, 'title')}</div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* <div className='courseWrap' id='courseTab3'>
            <h3>강의자 소개</h3>

            <div className='courseCont'>

            </div>
          </div> */}
        </div>
      </div>

    </div>
  )
}
export default ProgramDetail;