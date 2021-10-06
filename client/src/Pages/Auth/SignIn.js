import React from 'react';

import AuthForm from './AuthForm';
import AuthTemplate from './AuthTemplate';

const SignIn = () => {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default SignIn;
