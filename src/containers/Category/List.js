import React, { useEffect, useState } from 'react'
import {
  Link
} from "react-router-dom";
import Detail from './Detail';

const List = ({ match }) => {
  const [category, setCategory] = useState('');

  const [toggle, setToggle] = useState(false)

  // useEffect(() => {
  //   console.log(toggle,'토글 변경?????')
  // },[toggle])

  useEffect(() => {
    //console.log(match)
    switch (match.url.replace('/category', '')) {
      case "":
        setCategory('전체')
        break;
      case "/programming":
        setCategory('프로그래밍')
        break;
      case "/business":
        setCategory('비즈니스')
        break;
      case "/design":
        setCategory('디자인')
        break;
      default:
        break;
    }
  }, [match])

  return (
    <div className='category-list'>
      <div className='wrapper'>
        {/* {match.isExact && <h1>카테고리 리스트 {category}</h1>} */}
        <div className='left_container'>
          <div className='oneDepth'>
            <div>
              <button className={toggle? 'on':''} onClick={() => setToggle(!toggle)}>
                <Link to='/category'>전체</Link>
              </button>
              
              <div className={toggle ? 'twoDepth' : 'twoDepth cateClose'}>
                <Link to='/category/programming' className={category === '프로그래밍' ? 'active':''}>프로그래밍</Link>
                <Link to='/category/business' className={category === '비즈니스' ? 'active':''}>비즈니스</Link>
                <Link to='/category/design' className={category === '디자인' ? 'active':''}>디자인</Link>
              </div>
            </div>

            {/* <div>
            <p style={{display:'inline-block'}}>보안 네트워크</p>
            <button onClick={() => setToggle(!toggle)}>+</button>
            <div className={toggle ? 'twoDepth':'twoDepth cateClose'}>
              <div>보안1</div>
              <div>보안2</div>
              <div>보안3</div>
            </div>
          </div> */}

          </div>
        </div>
        <div className='right_container'>

          <Detail
            category={category}
            url={match.url}
          />
        </div>
        {/* <Route path={`${match.path}/:id`} component={Detail} /> */}
      </div>
    </div>
  )
}

export default List;