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
}

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
      callback({ success: true, data: JSON.stringify(result) });
      return;
    } else {
      callback({ success: false, data: result });
      return;
    }
  });
  return;
}

const update = (userDetails, callback) => {
  console.log('update');
  const phone = userDetails.phone;
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const address = document.getElementById('address').value;
  const dob = document.getElementById('dob').value;
  const email = document.getElementById('email').value.toLowerCase();
  const select = document.getElementById('country');
  const select2 = document.getElementById('gender');
  var country = select.options[select.selectedIndex].value;
  var gender = select2.options[select2.selectedIndex].value;
  console.log(email);

  if (!phone) {
    callback({ success: false, data: false });
    return;
  }
  if ($.trim(firstname) === '' || firstname.length < 3) {
    callback({ success: false, data: 'Enter your First Name' });
    return;
  }
  if ($.trim(lastname) === '' || lastname.length < 3) {
    callback({ success: false, data: 'Enter your Last Name' });
    return;
  }
  if ($.trim(gender) === '' || !gender || gender.length<4) {
    callback({ success: false, data: 'Choose your Gender' });
    return;
  }
  if ($.trim(email) === '' || !(/^\S+@\S+$/.test(email))) {
    callback({ success: false, data: 'Enter your Email' });
    return;
  }
  if ($.trim(dob) === '' || dob.length < 3) {
    callback({ success: false, data: 'Enter your Date of Birth' });
    return;
  }
  if ($.trim(country) === '' || !country || country<4) {
    callback({ success: false, data: 'Choose your Country' });
    return;
  }
  console.log({ phone, firstname, lastname, address, dob, gender, email, country });

  const endpoint = 'http://princewillmichael.me/update.php';
  $.post(endpoint, { phone, firstname, lastname, address, dob, gender, email, country }, result => {
    if (typeof result === 'object') {
      let data = JSON.stringify(result);
      callback({ success: true, data });
      return;
    } else {
      callback({ success: false, data: result });
      return;
    }
  });
  return;
}

const vat = (userDetails, callback) => {
  const phone = userDetails.phone;
  const code = document.getElementById('verification').value;

  if (!phone) {
    callback({ success: false, data: false });
    return;
  }
  if ($.trim(code) === "" || code.length < 6 || code.length > 6 || isNaN(code)) {
    callback({ success: false, data: "Invalid Verification Code" });
    return;
  }

  const endpoint = "http://princewillmichael.me/verify.php";
  $.post(endpoint, { phone, code }, result => {
    if (typeof result === "object") {
      callback({ success: true, data: JSON.stringify(result) });
      return;
    } else {
      callback({ success: false, data: result });
      return;
    }
  });
  return;
}