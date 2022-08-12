import React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import { API } from '../../config/config';
import _ from 'lodash';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authState, setAuthState } = useContext(AuthContext);
  let history = useHistory();
  const login = () => {
    const data = { username: username, password: password };
    console.log(data)
    axios
      .post(`${_.get(API, 'authurl')}/auth/login`, data)
      .then((response) => {
        if (_.get(response, 'status') == 200) {
          swal({
            title: "로그인 완료",
            text: `${_.get(response, 'data.msg')}`,
            icon: "success",
            button: "확인"
          }).then(() => {
            localStorage.setItem("accessToken", response.data.token);
            setAuthState({
              username: username,
              status: true
            })
            history.push("/");
          })

        } else {
          swal({
            title: "로그인 실패",
            text: `${_.get(response, 'data.msg')}`,
            icon: "error",
            button: "확인"
          })
        }
      });
  };
  return (
    <div className='login member-form'>
      <h2 className='form-logo'>
        <Link to='/#'>
          SMS Study
          {/* <img src=''/> */}
        </Link>
      </h2>

      <h3 className='form-title'>로그인</h3>

      <div className='login-form'>
        <label htmlFor='username'></label>
        <input
          type="text"
          autoComplete="off"
          placeholder='아이디'
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          required
        />
        <label htmlFor='password'></label>
        <input
          type="password"
          autoComplete="off"
          placeholder='비밀번호'
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />

        <button onClick={login}> 로그인</button>
      </div>
      <div className='login-absence'>
        <div>
          {/* <input type="checkbox" id='loginChk' />
          <label htmlFor='loginChk'>로그인 상태 유지</label> */}
        </div>

        <ul>
          {/* <li><Link to='/member/resetpassword'>비밀번호 재설정</Link></li> */}
          <li><Link to='/member/signup'>회원가입</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Login;