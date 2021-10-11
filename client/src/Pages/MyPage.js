import React, { useState } from 'react';
import styled from 'styled-components';
import MyPageTemplate from './Auth/AuthTemplate';
import Logo from '../Components/Logo';

import { useHistory } from 'react-router-dom';
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

const MyPage = ({ username, email, setUsername }) => {
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
          setUsername(changeName);
        }
      });
  };

  const ondeleteUser = () => {
    axios
      .delete('http://localhost:8000/signout', {
        data: {
          username: username,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  const onUsernameChange = (event) => {
    setChangeName(event.target.value);
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
      <button>Go Main Page</button>
      <button>logOut</button>
      <button onClick={ondeleteUser}>회원탈퇴</button>
    </MyPageTemplate>
  );
};

export default MyPage;
