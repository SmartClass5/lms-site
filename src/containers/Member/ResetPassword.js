import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = ({history}) => {
  const goBack = () => {
    //이전 페이지로 이동 
    history.goBack();
  };
  const goLogin = () => {
    //해당 주소로 이동
    history.push('/member/login');
  };
  return (
    <div className='resetpassword member-form'>
      <h2 className='form-logo'>
        <Link to='/#'>
        SMS Study
          {/* <img src=''/> */}
        </Link>
      </h2>

      <h3 className='form-title'>비밀번호 재설정</h3>

      <p className='form-sub'>
        가입한 이메일 주소를 입력해주세요.<br/>
        이메일 인증 완료 후 비밀번호를 재설정할 수 있습니다.
      </p>


      <form className='resetpassword-form'>
        <input placeholder='이메일'></input>
      </form>

      <div className='resetpassword-absence'>
        <Link to='/member/login'>
          로그인으로 돌아가기
        </Link>
        
        <button>인증메일 전송</button>
      </div>
    </div>
  )
}

export default ResetPassword;