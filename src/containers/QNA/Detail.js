import React from 'react'


const Detail = ({ match, history }) => {
  const goQna = () => {
    //해당 주소로 이동
    history.push('/qna');
  };

  return (
    <div className='qna-detail'>
      {/* <h2>QNA 상세</h2> */}
      
      <div className='bo_top_btn'>
        <button onClick={goQna}>목록으로</button>
      </div>

      <div className='bo_view'>
          <div className='bo_subject'>
            <h5>올림차순과 내림차순의 차이를 모르겠습니다</h5>
            <div>
              <span className='wr_name'>SMS</span>
              <span className='wr_date'>22.07.25 오후 03:29</span>
            </div>
          </div>

          <div className='bo_cont'>
            이 강좌를 통해 처음으로 프로그래밍을 배우고 있는데요, 강의를 보다가 처음으로 메인함수 안에 void라는 것이 들어가 있는데요
            
            <div className='bo_info'>
              <span className='hits'>18</span>
              <span className='comments'>0</span>
              <span className='thumbsUp'>추천 0</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Detail;