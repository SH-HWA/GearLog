//회원가입과 로그인폼 컴포넌트
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../Components/common/Button';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: gray;
    margin-bottom: 30px;
    margin-top: 30px;
  }
  hr {
    margin-top: 50px;
  }
  .logo {
    text-align: center;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid gray;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: black;
    border-bottom: 1px solid gray;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: #70a1ff;
    text-decoration: underline;
    &:hover {
      color: #3742fa;
    }
  }
`;

const textMap = {
  login: '이메일로그인',
  register: '회원가입',
  logo: '간편로그인',
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassWord] = useState('');
  const [idCount, setIdCount] = useState(3);

  const dummyDatabase = [
    { id: 1, email: 'hi4190', password: '4190' },
    {
      id: 2,
      email: 'gg1',
      password: '1234',
    },
    {
      id: 3,
      email: '321ls',
      password: '4321',
    },
  ];

  let emailData = dummyDatabase.findIndex((el) => el.email === email);
  let passwordData = dummyDatabase.findIndex((el) => el.password === password);
  //이메일만 골라낸후

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'newpassword') {
      setNewPassWord(value);
    }
  };
  //회원가입을 눌렀을때는 어떻게 하지?
  const onSubmit = (e) => {
    e.preventDefault();
    if (type === 'login') {
      if (emailData === -1 || passwordData === -1) {
        alert('회원정보가 일치하지않거나 없으니까 다시입력해라^^');
      } else {
        if (emailData >= 0 || passwordData >= 0) {
          history.push('/'); // 여기다 서버에 연락하는 코드를 짜면될거같다
        }
      }
    }

    if (type === 'register') {
      if (emailData === 0) {
        alert('아이디가 있습니다');
      } else if (password !== newPassword) {
        alert('비밀번호를 확인해주세요');
      } else {
        if (emailData === -1 && password === newPassword) {
          dummyDatabase.push({
            id: idCount + 1,
            email: email,
            password: password,
          });
          console.log(dummyDatabase);
          alert('회원가입완료'); //데이터 베이스 에 세이브 하고 리다이렉트 가면될까?
          history.push('/');
        }
      }
    }
  };

  return (
    <AuthFormBlock>
      <Logo className="logo" style={{ fontsize: '200px' }} />
      <h3>{textMap['logo']}</h3>
      <Button fullWidth style={{ background: '#fae100', marginTop: '1rem' }}>
        카카오
      </Button>
      <Button fullWidth style={{ background: '#2DB400', marginTop: '1rem' }}>
        네이버
      </Button>
      <Button fullWidth style={{ background: '#70a1ff', marginTop: '1rem' }}>
        구글
      </Button>
      <hr />
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="email"
          type="text"
          placeholder="이메일"
          value={email}
          required
          onChange={onChange}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          value={password}
          required
          onChange={onChange}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="newpassword"
            placeholder="비밀번호확인"
            type="password"
            value={newPassword}
            required
            onChange={onChange}
          />
        )}
        <Button
          className="bottom-button"
          fullWidth
          style={{ background: '#b2bec3', marginTop: '1rem' }}
        >
          {text}
        </Button>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/signup">SignUp</Link>
        ) : (
          <Link to="/signin">SignIn</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
