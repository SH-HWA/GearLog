/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import styled from 'styled-components';
import AuthTemplate from './Auth/AuthTemplate';
import Logo from '../Components/Logo';
import './MyPage.css';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../Components/common/Button';

const Div = styled.div`
  .tables {
    border-right: solid;
  }
`;

const MyPage = ({
  username,
  email,
  setUsername,
  isLogin,
  setIsLogin,
  authorization,
}) => {
  const [changeName, setChangeName] = useState('');
  const [istrue, setIsTrue] = useState(false);
  const history = useHistory();

  const onClickuserChange = () => {
    let change = confirm('변경하시겠습니까?');

    if (change) {
      axios
        .post(
          'http://localhost:8000/userinfo/update',
          {
            username: username,
            newname: changeName,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          if (res.status === 200) {
            let token = res.data.token;
            localStorage.setItem('token', token);
            authorization();
            // setUsername(changeName);
          }
        });
    } else {
      alert('변경 취소되었습니다');
      setIsTrue(false);
    }
  };

  const ondeleteUser = () => {
    let confirm = window.confirm('회원탈퇴하실거에요?');

    if (confirm) {
      axios
        .delete('http://localhost:8000/signout', {
          data: {
            username: username,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.clear();
            setIsLogin(false);
            alert('탈퇴가 완료되었습니다');
            history.push('/');
          } else {
            alert('처리에 문제가있습니다 고객센터로 연락주세요');
          }
        });
    } else {
      if (!confirm) alert('감사합니다');
    }
  };

  const onUsernameChange = (event) => {
    setChangeName(event.target.value);
  };

  const postLogout = () => {
    return axios
      .post(
        'http://localhost:8000/logout',
        {},
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        if (res.data.message === '현재 로그인 중이 아닙니다.') {
          setIsLogin(false);
          alert('로그아웃되었습니다');
          localStorage.clear();
          history.push('/');
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          alert('로그아웃이 되지않았습니다');
        }
      });
  };

  return (
    <AuthTemplate
      onClick={() => {
        setIsTrue(false);
      }}
    >
      <h1>Gear log</h1>
      <h1>{username} 님 환영합니다!</h1>
      <div className="tables">
        <div className="tables-user">
          <div>eMail:</div>
        </div>
        <div className="tables-user-info">
          <div> {email}</div>
        </div>
      </div>
      <div className="tables">
        <div className="tables-user">
          <div>username:</div>
        </div>
        {!istrue ? (
          <div className="tables-user-info">
            <div>{username}</div>
          </div>
        ) : (
          <div className="tables-user-info">
            <input value={changeName} onChange={onUsernameChange}></input>
            <button onClick={onClickuserChange}>변경</button>
            <button onClick={() => setIsTrue(false)}>취소</button>
          </div>
        )}
      </div>
      <Link to="/">
        <Button
          fullWidth
          style={{ background: 'rgb(25, 42, 86)', marginTop: '1rem' }}
        >
          홈으로
        </Button>
      </Link>

      <Button
        onClick={() => setIsTrue((prev) => !prev)}
        fullWidth
        style={{ background: '#70a1ff', marginTop: '1rem' }}
      >
        닉네임변경
      </Button>
      <Button
        onClick={ondeleteUser}
        fullWidth
        style={{ background: '#70a1ff', marginTop: '1rem' }}
      >
        회원탈퇴
      </Button>
    </AuthTemplate>
  );
};

export default MyPage;

{
}
{
  /* <MyPageTemplate>
<Logo />
<Div>
  <div id="tables">
    <div className="tables-email">
      <div>
        <div>
          <div>email</div>
        </div>
        <div>{email}</div>
      </div>
    </div>
  </div>
  <div>
    <div>
      <div>username</div>
      <div>{username}</div>
      <input
        value={changeName}
        placeholder="닉네임변경"
        type="text"
        onChange={onUsernameChange}
      ></input>
      <button onClick={onClickuserChange}>변경</button>
    </div>
  </div>
</Div>
<Link to="/">
  <button>Go home</button>
</Link>
<button onClick={postLogout}>logOut</button>
<button onClick={ondeleteUser}>회원탈퇴</button>
</MyPageTemplate> */
}
