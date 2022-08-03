import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    console.log(user)
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
  }
  return (
    <div className='login member-form'>
      <h2 className='form-logo'>
        <Link to='/#'>
          SMS Study
          {/* <img src=''/> */}
        </Link>
      </h2>

      <h3 className='form-title'>로그인</h3>

      <form onSubmit={handleSubmit} className='login-form'>
        <label htmlFor='username'></label>
        <input
          type='text'
          id="username"
          ref={userRef}
          autoComplete="off"
          placeholder='아이디/이메일'
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <label htmlFor='password'></label>
        <input
          type='password'
          id="password"
          placeholder='비밀번호'
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />

        <button> 로그인</button>
      </form>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive" >{errMsg}</p>
      <div className='login-absence'>
        <div>
          <input type="checkbox" id='loginChk' />
          <label htmlFor='loginChk'>로그인 상태 유지</label>
        </div>

        <ul>
          <li><Link to='/member/resetpassword'>비밀번호 재설정</Link></li>
          <li><Link to='/member/signup'>회원가입</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Login;