import React, { useState } from 'react';
import styled from 'styled-components';
import MyPageTemplate from './Auth/AuthTemplate';
import Logo from '../Components/Logo';

import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
// const Table = styled.div`
//   .type {
//     border-collapse: collapse;
//     text-align: left;
//     line-height: 1.5;
//     border-top: 1px solid #ccc;
//     border-left: 3px solid #369;
//     margin: 20px 10px;
//     &.type th {
//       width: 147px;
//       padding: 10px;
//       font-weight: bold;
//       vertical-align: top;
//       color: #153d73;
//       border-right: 1px solid #ccc;
//       border-bottom: 1px solid #ccc;
//     }
//     &.type td {
//       display: flex;
//       width: 220px;
//       padding: 10px;
//       vertical-align: top;
//       border-right: 1px solid #ccc;
//       border-bottom: 1px solid #ccc;
//       padding-right: -100px;
//       .Button {
//         background-color: #153d73;
//         float: right;
//       }
//       & :hover {
//         background-color: #0984e3;
//         transition: 300ms;
//       }
//     }
//     .buttons {
//       text-align: center;
//     }
//   }
// `;

const Div = styled.div``;

const MyPage = ({
  username,
  email,
  setUsername,
  isLogin,
  setIsLogin,
  authorization,
}) => {
  const [changeName, setChangeName] = useState('');
  const history = useHistory();

  const onClickuserChange = () => {
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
    <MyPageTemplate>
      <Logo />
      <Div>
        <div>
          <div>
            <div>email</div>
            <div>{email}</div>
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
    </MyPageTemplate>
  );
};

export default MyPage;
