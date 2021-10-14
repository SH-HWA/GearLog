export const emailCheck = (email) => {
  let regex =
    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return email !== '' && email !== 'undefined' && regex.test(email);
};

export const passwordCheck = (password) => {
  let checkPass =
    /^(?=.*[a-zA-Z])(?=.*[\~\․\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\|\\\;\:\\'\"\<\>\,\.\?\/])(?=.*[0-9]).{6,21}$/;

  if (checkPass.test(password)) {
    return true;
  } else {
    return false;
  }
};
