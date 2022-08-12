import React from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import _ from 'lodash';
import swal from 'sweetalert';
import { API } from '../../config/config';


const Signup = () => {
  let history = useHistory();
  const initialValues = {
    username: "",
    password: "",
    password2: "",
    email: "",
    name: "",
    phone: ""

  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
    password2: Yup.string().required(),
    email: Yup.string().required(),
    name: Yup.string().required(),
    phone: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios
      .post(`${_.get(API, 'authurl')}/auth/sign-up`, data)
      .then((response) => {
        if (_.get(response, 'status') == 200) {
          swal({
            title: "회원가입 완료",
            text: `${_.get(response, 'data.msg')}`,
            icon: "success",
            button: "확인"
          }).then(() => {
            history.push("/member/login");
          })

        } else {
          swal({
            title: "회원가입 실패",
            text: `${_.get(response, 'data.msg')}`,
            icon: "error",
            button: "확인"
          })
        }
      });
  };
  return (
    <div className='signup member-form'>
      <h2 className='form-logo'>
        <Link to='/#'>
          SMS Study
          {/* <img src=''/> */}
        </Link>
      </h2>

      <h3 className='form-title'>회원가입</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className='signup-form'>
          <Field
            autoComplete="off"
            id="sign-up"
            name="username"
            placeholder="아이디"
          />
          <Field
            autoComplete="off"
            id="sign-up"
            name="email"
            placeholder="이메일"
          />
          <Field
            autoComplete="off"
            id="sign-up"
            name="password"
            type="password"
            placeholder="비밀번호"
          />
          <Field
            autoComplete="off"
            id="sign-up"
            name="password2"
            type="password"
            placeholder="비밀번호 확인"
          />
          <Field
            autoComplete="off"
            id="sign-up"
            name="name"
            placeholder="이름"
          />

          <Field
            autoComplete="off"
            id="sign-up"
            name="phone"
            placeholder="(전화번호) 010-xxxx-xxxx"
          />
          <button type="submit"> 회원가입 </button>
        </Form>
      </Formik>
      <div className='signup-absence'>
        <span>
          이미 계정이 있으세요?
          <Link to='/member/login'>로그인</Link>
        </span>
      </div>
    </div>
  )
}

export default Signup;