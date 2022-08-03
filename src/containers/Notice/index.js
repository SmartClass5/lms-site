import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Detail from './Detail';
import List from './List';
const Notice = ({ match }) => {
  return (
    <div className='bo_table notice'>
      <div className='bo_title'>
        <h3>공지사항</h3>
      </div>
      
      <div className='wrapper bo_notice_wrap'>
        <Route exact path={match.path} component={List} />
        <Route path={`${match.path}/:id`} component={Detail} />
      </div>
    </div>
  )
}

export default Notice;