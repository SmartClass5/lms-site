import React, { useRef, useEffect, useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import _ from 'lodash';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Detail = ({ match }) => {
  const [hlsUrl, setHlsUrl] = useState(
    "https://smart-class-output.s3.ap-northeast-2.amazonaws.com/62e0f228a2abf165e9bf2ed3/Default/HLS/62e0f228a2abf165e9bf2ed3.m3u8"
  );
  useEffect(()=>{
    console.log(_.get(match,'params.id')) // 해당 값이랑 매칭 되는 li 목록에 활성화 표시 되도록 
  },[match])
  const lectureList = [
    {
      _id: "62e0f228a2abf165e9bf2ed3",
      title: 'Machine learning 1 - 1. 오리엔테이션',
      order: 1,
      type: 'video',
      lecture_id:"62e1e82dc8fbe379a0914f04",
      data: {
        url: 'https://smart-class-output.s3.ap-northeast-2.amazonaws.com/62e0f228a2abf165e9bf2ed3/Default/HLS/62e0f228a2abf165e9bf2ed3.m3u8',
        body: '이 수업은 머신러닝을 처음 시작하는 분들이 이론없이, 수학없이, 코딩없이 머신러닝을 경험해볼 수 있도록 고안된 수업입니다. ',
        description: ' 이 수업이 끝나고 나면 머신러닝이 무엇이고, 머신러닝으로 무엇을 할 수 있는지를 알게 될 것입니다. 그 결과 머신러닝으로 하고 싶은 일이 생길 것입니다. 다시 말해서 꿈을 갖게 될 것입니다.   모든 수업은 유튜브 재생목록으로 모아두었습니다.  https://www.youtube.com/playlist?list=PLuHgQVnccGMDy5oF7G5WYxLF3NCYhB9H9  전자책 버전으로도 공부할 수 있습니다.   https://opentutorials.org/module/4916/28891  더 많은 수업들을 만나고 싶다면 지식지도 https://seomal.org 에 방문해주세요.   이 수업의 모든 내용은 저작권이 없습니다. 마음대로 이용하셔도 됩니다. (public domain)'
      }
    },
    {
      _id: "62e1e57ea2abf165e91e5165",
      title: 'Machine learning 1 - 2. 머신러닝이란',
      order: 0,
      type: 'video',
      lecture_id: "62e1e82dc8fbe379a0914f04",
      data: {
        url: 'https://smart-class-output.s3.ap-northeast-2.amazonaws.com/62e0f228a2abf165e9bf2ed3/Default/HLS/62e0f228a2abf165e9bf2ed3.m3u8',
        body: '이 수업은 머신러닝을 처음 시작하는 분들이 이론없이, 수학없이, 코딩없이 머신러닝을 경험해볼 수 있도록 고안된 수업입니다. ',
        description: ' 이 수업이 끝나고 나면 머신러닝이 무엇이고, 머신러닝으로 무엇을 할 수 있는지를 알게 될 것입니다. 그 결과 머신러닝으로 하고 싶은 일이 생길 것입니다. 다시 말해서 꿈을 갖게 될 것입니다.   모든 수업은 유튜브 재생목록으로 모아두었습니다.  https://www.youtube.com/playlist?list=PLuHgQVnccGMDy5oF7G5WYxLF3NCYhB9H9  전자책 버전으로도 공부할 수 있습니다.   https://opentutorials.org/module/4916/28891  더 많은 수업들을 만나고 싶다면 지식지도 https://seomal.org 에 방문해주세요.   이 수업의 모든 내용은 저작권이 없습니다. 마음대로 이용하셔도 됩니다. (public domain)'
      }
    }
  ]
  return (
    <div className='lecture-detail'>
      <div className='cont'>
        <div className='lecture-head'>
          <h2>강의 대시보드</h2>
        </div>

        <div className='player'>
          <input
            type="text"
            className="form-control w-90 m-2 my-4"
            placeholder="HLS Url..."
            value={hlsUrl}
            aria-label="hls-url"
            aria-describedby="set-hls-url"
            onChange={(e) => setHlsUrl(e.target.value)}
          />
          
          <ReactHlsPlayer
            src={hlsUrl}
            autoPlay={false}
            controls={true}
            width="60%"
            height="auto"
          />
        </div>
      </div>

      <div className='lecture-nav'>
        <div className='info'>
          <p>목차</p>
          <h5>머신러닝</h5>
          <div>
            <span>수강기한 : 무제한</span>
            <span>시간 : 0분 / 154분</span>
          </div>
        </div>

        <ul>
          {lectureList.map((lecture,idx)=>{
              console.log(lecture, idx)
            return (
              <li className={idx==0? 'on':''} key={_.get(lecture,'_id')}>{_.get(lecture,'title')}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Detail;