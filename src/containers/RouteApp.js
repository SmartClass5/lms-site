import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "../styles/style.scss"

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

const RouteApp = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
    if (location.pathname.includes('/member')) {
      console.log('유저 관련')
    }
  }, [location])
  return (
    <>
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
        <Route component={NotFound} />
      </Switch>
      {location.pathname.includes('/member') || <Footer />}
    </>
  );
}

export default RouteApp;
