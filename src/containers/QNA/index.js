import React from 'react'
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Detail from './Detail';
import List from './List';
const QNA = ({ match }) => {
  return (
    <div className='bo_table qna'>
      <div className='bo_title'>
        <h3>QNA</h3>
      </div>

      <div className='wrapper bo_qna_wrap'>
        <Route exact path={match.path} component={List} />
        <Route path={`${match.path}/:id`} component={Detail} />
      </div>
    </div>
  )
}

export default QNA;