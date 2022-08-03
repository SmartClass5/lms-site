import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Login from './Login';
import Signup from './Signup';
import ResetPassword from './ResetPassword';
import Term from './Term';
import Privacy from './Privacy';
const Member = ({ match ,history }) => {
  const goBack = () => {
    //이전 페이지로 이동 
    history.goBack();
  };
  const goHome = () => {
    //해당 주소로 이동
    history.push('/');
  };
  return (
    <div className='member'>
      <button className='main-back' onClick={goHome}>메인 페이지로</button>
      <Route path={`${match.path}/login`} component={Login} />
      <Route path={`${match.path}/signup`} component={Signup} />
      <Route path={`${match.path}/resetpassword`} component={ResetPassword} />
      <Route path={`${match.path}/term`} component={Term} />
      <Route path={`${match.path}/privacy`} component={Privacy} />
    </div>
  )
}

export default Member;