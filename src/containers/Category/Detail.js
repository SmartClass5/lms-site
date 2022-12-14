import React, { useEffect, useState } from 'react'
import {
  Route, Link,
  useHistory,
  useParams
} from "react-router-dom";
import ProgramDetail from './ProgramDetail';
import _ from 'lodash';
import axios from 'axios'
import { API } from '../../config/config';


const Detail = ({ match, category, url }) => {

  const [lectureList, setLectureList] = useState([]);
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios.get(`${API.base_crud_url}/custom-api/lecture`, {
      params: {
        category: id
      }
    }).then((response) => {
      console.log(_.get(response, 'data.data'))
      setLectureList(_.get(response, 'data.data'))
    })
  }, [id])

  return (
    <div className='course-detail'>
      <h2>{category} 강의 목록</h2>
      <div className='courses_container'>
        <div className='columns'>
          {!_.isEmpty(lectureList) && lectureList.map((lecture, key) => {
            return (
              <Link className='card-content' to={`/category/${_.get(lecture, 'category')}/${_.get(lecture, '_id')}`} key={key}>
                <div className="card_img">
                  <img className='card_img' src={`${_.get(API, "cdn_url")}/${_.get(lecture, 'thumbnail.0')}`} />
                </div>
                <div className='courseTitle'>{_.get(lecture, 'title')}</div>
                <div className="instructor">{_.get(lecture, 'category')}</div>
                <div className="instructor">{_.get(lecture, 'sub_category')}</div>
                <div className="price">₩{_.get(lecture, 'paid')}</div>
                <div className='tags'>
                  <span style={{ background: 'hsl(321, 63%, 90%)' }}>+500명</span>
                  <span style={{ background: 'hsl(182, 75%, 94%)' }}>업데이트</span>
                </div>
              </Link>
            )
          })}
          {/* <div className='card-content'>
              <div className='card_img'></div>
              <div className='courseTitle'>호돌맨의 요절복통 개발쇼 (SpringBoot, Vue.JS, AWS)</div>
              <div className="instructor">1분코딩</div>
              <div className='rating'>★★★★★</div>
              <div className="price">₩165,000</div>
              <div className='tags'>
                <span style={{background: 'hsl(321, 63%, 90%)'}}>+500명</span>
                <span style={{background: 'hsl(182, 75%, 94%)'}}>업데이트</span>
              </div>
            </div> */}


        </div>


      </div>
    </div>
  )
}

export default Detail;