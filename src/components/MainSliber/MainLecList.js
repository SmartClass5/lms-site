import React, { useEffect, useState } from 'react'
import {
  Link
} from "react-router-dom";
import axios from 'axios'
import { API } from '../../config/config';
import _ from 'lodash';

const MainLecList = () => {
  const [lectureList , setLectureList] = useState([])
  useEffect(()=>{
    // console.log(_.get(API,"base_crud_url"))
    // console.log(_.get(API,"authed_use_url"))
    // console.log(_.get(API,"base_crud_url"))
    // console.log(_.get(API,"kube_client_url"))
    // console.log(_.get(API,"lrn_record_url"))
    // console.log(_.get(API,"cdn_url"))
      axios.get(`${API.base_crud_url}/custom-api/lecture`).then((response)=>{
        setLectureList(_.get(response,'data.data'))
    })
  },[])
  return (
   <main className='main-list-box'>
    <div className='wrapper'>
      <h3>강의 리스트</h3>
      
      <ul>
        {lectureList && lectureList.map((lecture,key)=>{
          return (
        <li>
          <Link to={`/category/${_.get(lecture,'category')}/${_.get(lecture,'_id')}`} key={key}>
            <div className="card_img">
              <img src={`${_.get(API,"cdn_url")}/${_.get(lecture,'thumbnail.0')}`} />
            </div>
            <div className='courseTitle'>{_.get(lecture,'title')}</div>
            <div className="instructor">{_.get(lecture,'category')}</div>
            <div className="instructor">{_.get(lecture,'sub_category')}</div>
            <div className="price">₩{_.get(lecture,'paid')}</div>
            <div className='tags'>
              <span style={{background: 'hsl(321, 63%, 90%)'}}>+500명</span>
              <span style={{background: 'hsl(182, 75%, 94%)'}}>업데이트</span>
            </div>
          </Link>
        </li>
          )
        })}
      </ul>
    </div>
   </main>
  )
}

export default MainLecList;