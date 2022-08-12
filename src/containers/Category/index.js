import React, { useEffect, useState } from 'react'
import {
  Route,
  useHistory,
  useParams
} from "react-router-dom";
import List from './List';
import ProgramDetail from './ProgramDetail';
const Category = ({ match }) => {

  return (
    <div className='category'>
      {/* <h3>카테고리</h3> */}
      <Route exact path={`${match.path}/:id/:id`} component={ProgramDetail} />
      <Route exact path={`${match.path}/:id`} component={List} />
      <Route exact path={match.path} component={List} />
    </div>
  )
}

export default Category;