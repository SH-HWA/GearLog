import React from 'react';

import AuthForm from './AuthForm';
import AuthTemplate from './AuthTemplate';

const SignUp = () => {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
};

export default SignUp;
