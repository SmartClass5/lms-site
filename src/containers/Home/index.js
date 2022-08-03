import React from 'react'
import MainSliber from '../../components/MainSliber/MainSliber';
import MainLecList from '../../components/MainSliber/MainLecList';
const Home = () => {
  return (
    <div className='home'>
      <MainSliber />
      <MainLecList />
    </div>
  )
}

export default Home;