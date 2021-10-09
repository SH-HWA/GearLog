import React from 'react';

import AuthForm from './AuthForm';
import AuthTemplate from './AuthTemplate';

const SignIn = ({ postLogin, email, password, onChange }) => {
  return (
    <AuthTemplate>
      <AuthForm
        email={email}
        password={password}
        postLogin={postLogin}
        type="login"
        onChange={onChange}
      />
    </AuthTemplate>
  );
};

export default SignIn;
