/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import styled from 'styled-components';
import AuthTemplate from './Auth/AuthTemplate';

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
  setEmail,
  setIsLogin,
  authorization,
  setPassword,
  setUsername,
}) => {
  const [changeName, setChangeName] = useState('');
  const [istrue, setIsTrue] = useState(false);
  const history = useHistory();

  const onClickuserChange = () => {
    let social = localStorage.getItem('social');
    if (social) {
      return alert('소셜로그인의 경우 username을 변경할 수 없습니다.');
    }

    let change = confirm('변경하시겠습니까?');

    if (change) {
      axios
        .post(
          'http://13.124.86.90/userinfo/update',
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
    let social = localStorage.getItem('social');
    if (social) {
      return alert(
        '소셜로그인으로 로그인 한 경우 별도의 회원탈퇴가 필요하지 않습니다.',
      );
    }

    let confirm = window.confirm('회원탈퇴하실거에요?');

    if (confirm) {
      axios
        .delete('http://13.124.86.90/signout', {
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
        'http://13.124.86.90/logout',
        {},
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        if (res.data.message === '현재 로그인 중이 아닙니다.') {
          localStorage.clear();
          setEmail('');
          setPassword('');
          setUsername('');
          setIsLogin(false);
          alert('로그아웃되었습니다');

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
        onClick={postLogout}
        fullWidth
        style={{ background: 'rgb(25, 42, 86)', marginTop: '1rem' }}
      >
        로그아웃
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
