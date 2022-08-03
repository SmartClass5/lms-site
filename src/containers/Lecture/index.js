import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Detail from './Detail';
const Lecture = ({ match }) => {
    // useEffect(() => {
    //     console.log(match)

    //   }, [match])
  return (
    <div className='lecture'>
        <Route path={`${match.path}/:id`} component={Detail} />
    </div>
  )
}

export default Lecture;