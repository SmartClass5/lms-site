import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "../styles/style.scss"
import axios from 'axios';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

import Home from '../containers/Home';
import Notice from '../containers/Notice';
import QNA from '../containers/QNA';
import Category from '../containers/Category';
import Detail from '../containers/Category/Detail';
import ProgramDetail from '../containers/Category/ProgramDetail';
import Member from '../containers/Member';
import Lecture from '../containers/Lecture';

import NotFound from '../components/NotFound';
import Mypage from '../containers/Mypage';
import { AuthContext } from '../Context/AuthContext';
import { API } from '../config/config';
import _ from 'lodash'

const RouteApp = () => {
  const [authState, setAuthState] = useState({
    username: "",
    status: false
  })
  useEffect(() => {
    // console.log(localStorage.getItem('accessToken'))
    axios
      .get(`${_.get(API, 'authurl')}/auth/payload`, {
        headers: {
          accessToken: localStorage.getItem('accessToken')
        }
      })
      .then((response) => {
        // console.log(response.data, 'response.data')
        if (response.data.error) {
          setAuthState({
            username: "",
            status: false
          })
        } else {
          setAuthState({
            username: response.data.username,
            status: true
          })
        }
      })
  }, [])

  const location = useLocation();
  useEffect(() => {
    // console.log(location.pathname)
    if (location.pathname.includes('/member')) {
    }
  }, [location])
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {location.pathname.includes('/member') || <Header />}
      <Switch >
        <Route exact path='/' component={Home} />
        <Route path='/notice' component={Notice} />
        <Route path='/qna' component={QNA} />
        <Route path='/category' component={Category} />
        {/* <Route path={`/category/:cateName`} component={Detail} />
        <Route path={`/category/:cateName/:id`} component={ProgramDetail} /> */}
        <Route path='/member' component={Member} />
        <Route path='/lecture' component={Lecture} />
        {_.get(authState, "status") && <Route path='/mypage' component={Mypage} />}
        <Route component={NotFound} />
      </Switch>
      {location.pathname.includes('/member') || <Footer />}
    </AuthContext.Provider>
  );
}

export default RouteApp;
