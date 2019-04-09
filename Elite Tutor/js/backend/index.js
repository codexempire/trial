const verifyUser = (box) => {
  const phone = document.getElementById('phone1').value;
  const password = document.getElementById('pass').value;

  if ($.trim(phone) === '' || phone.length < 11 || isNaN(phone)) {
    box.classList.add('alert-red');
    box.textContent = 'Enter a valid phone number';
    return;
  }
  if ($.trim(password) === '' || password.length < 8) {
    box.classList.add('alert-red');
    box.textContent = 'Enter a password of at least 8 characters';
    return;
  }
  box.textContent = '';
  box.classList.remove('alert-red');

  const endpoint = 'http://princewillmichael.me/logintut.php';
  $.post(endpoint, { phone, password }, result => {
    if (typeof result === 'object') {
      box.classList.add('alert-green');
      box.textContent = 'Login sucessfull redirecting...';
    
      const data = JSON.stringify(result);
      localStorage.setItem('user', data);
      setTimeout(() => { location.replace("index.html"); }, 5000);
      return;
    } else {
      box.classList.add('alert-red');
      box.textContent = result;
      return;
    }
  });
  return;
}
const signUp = (box) => {
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('pass1').value;
  const password1 = document.getElementById('pass2').value;

  if ($.trim(phone) === '' || phone.length < 11 || isNaN(phone)) {
    box.classList.add('alert-red');
    box.textContent = 'Enter a valid phone number';
    return;
  }
  if ($.trim(password) === '' || password.length < 8) {
    box.classList.add('alert-red');
    box.textContent = 'Enter a password of at least 8 characters';
    return;
  }
  if (password !== password1) {
    box.classList.add('alert-red');
    box.textContent = 'Passwords do not match';
    return;
  }
  box.textContent = "";
  box.classList.remove("alert-red");

  const endpoint = 'http://princewillmichael.me/regtut.php';
  $.post(endpoint, { phone, password }, result => {
    if (typeof result === 'object') {
      box.classList.add('alert-green');
      box.textContent = 'Registration sucessfull redirecting...';

      const data = JSON.stringify(result);
      localStorage.setItem('user', data);
      setTimeout(() => { location.replace('index.html'); }, 5000);
      return;
    } else {
      box.classList.add('alert-red');
      box.textContent = result;
      return;
    }
  });
  return;
}
const signOut = () => {
  localStorage.removeItem('user');
  window.location.replace('login.html');
  return;
}

const startApp = () => {
  const btn = document.getElementById('logIn');
  const bnt = document.getElementById('butt');
  const dialog = document.getElementById('text');
  const text = document.getElementById('dialog');
  const logOut = document.getElementById('logOut');

  if (btn) btn.onclick = () => verifyUser(dialog);
  if (bnt) bnt.onclick = () => signUp(text);
  if (logOut) logOut.onclick = () => signOut();
}
startApp();
