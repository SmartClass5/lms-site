import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams
} from "react-router-dom";
import LectureRoute from './Route';
const Lecture = ({ match }) => {
  let { id } = useParams();
  useEffect(() => {
    console.log(match, 'match')
  }, [])
  return (
    <div className='lecture'>
      <Route path={`${match.path}/:id`} component={LectureRoute} />
    </div>
  )
}

export default Lecture;