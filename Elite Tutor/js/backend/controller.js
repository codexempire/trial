const verifyUser = callback => {
  const phone = document.getElementById('phone1').value;
  const password = document.getElementById('pass').value;

  if ($.trim(phone) === '' || phone.length < 11 || isNaN(phone)) {
    callback({ success: false, data: 'Enter a valid phone number' });
    return;
  }
  if ($.trim(password) === '' || password.length < 8) {
    callback({ success: false, data: 'Password should have at least 8-20 characters' });
    return;
  }

  const endpoint = 'http://princewillmichael.me/logintut.php';
  $.post(endpoint, { phone, password }, result => {
    if (typeof result === "object") {
      callback({ success: true, data: JSON.stringify(result) });
      return;
    } else {
      callback({ success: false, data: result });
      return;
    }
  });
  return;
};

const signUp = callback => {
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('pass1').value;
  const password1 = document.getElementById('pass2').value;

  if ($.trim(phone) === '' || phone.length < 11 || isNaN(phone)) {
    callback({ success: false, data: 'Enter a valid phone number' });
    return;
  }
  if ($.trim(password) === '' || password.length < 8) {
    callback({ success: false, data: 'Enter a password of at least 8 characters' });
    return;
  }
  if (password !== password1) {
    callback({ success: false, data: 'Passwords do not match' });
    return;
  }

  const endpoint = 'http://princewillmichael.me/regtut.php';
  $.post(endpoint, { phone, password }, result => {
    if (typeof result === 'object') {
      callback({ success: true, data: result });
      return;
    } else {
      callback({ success: false, data: result });
      return;
    }
  });
  return;
}