import React from 'react';

import AuthForm from './AuthForm';
import AuthTemplate from './AuthTemplate';

const SignUp = ({
  username,
  email,
  password,
  newPassword,
  onChange,
  postSignUp,
}) => {
  return (
    <AuthTemplate>
      <AuthForm
        email={email}
        password={password}
        onChange={onChange}
        postSignUp={postSignUp}
        newPassword={newPassword}
        username={username}
        type="register"
      />
    </AuthTemplate>
  );
};

export default SignUp;
