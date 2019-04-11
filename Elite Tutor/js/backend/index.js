const login = (box, btn) => {
  box.classList.remove('alert-red');
  box.textContent = '';
  btn.disabled = true;
  btn.textContent = 'LOGIN USER...';
  // verify user
  verifyUser(({ success, data }) => {
    if (!success) {
      box.classList.add('alert-red');
      box.textContent = data;
      btn.disabled = false;
      btn.textContent = 'SIGN IN';
      return;
    }
    btn.innerHTML = `<img src='./img/ajax-loader.gif' class='small-loader'> REDIRECTING`;
    localStorage.setItem('user', data);
    setTimeout(() => { loggedIn(); }, 5000);
  });
  return;
}
const register = (box, btn) => {
  box.classList.remove('alert-red');
  box.textContent = '';
  btn.textContent = 'SIGNING USER...';
  btn.disabled = true;
  // register user
  signUp(({ success, data }) => {
    if (!success) {
      box.classList.add('alert-red');
      box.textContent = data;
      btn.disabled = false;
      btn.textContent = 'SIGN UP';
      return;
    }
    btn.textContent = 'REDIRECTING...';
    localStorage.setItem('user', data);
    setTimeout(() => { location.replace('verification.html'); }, 5000);
  });
  return;
}
const signOut = (btn) => {
  btn.innerHTML = `<i class="material-icons icon">power_settings_new</i> LOGIN OUT...`;
  localStorage.removeItem('user');
  setTimeout(() => { location.replace('login.html'); }, 5000);
  return;
}
const loggedIn = () => {
  const userDetails = JSON.parse(window.localStorage.getItem('user'));
  if (userDetails.status === 'false') location.replace('verification.html');
  else if (!userDetails.firstname) location.replace('addData.html');
  else location.replace('index.html');
  return;
}
const certifyUser = (details, box, btn) => {
  const userDetails = JSON.parse(details);
  btn.disabled = true;
  box.textContent = '';
  box.classList.remove('alert-sm-red');
  btn.textContent = 'VERIFYING';
  // verify user
  vat(userDetails, ({ success, data }) => {
    if (!success && !data) {
      setTimeout(() => { location.replace('login.html'); }, 2000);
      return;
    }
    if (!success) {
      box.classList.add('alert-sm-red');
      box.textContent = data;
      btn.disabled = false;
      btn.textContent = 'VERIFY';
      return;
    }
    btn.innerHTML = `<img src='./img/ajax-loader.gif' class='small-loader'> REDIRECTING`;
    localStorage.setItem('user', data);
    setTimeout(() => { location.replace('addData.html'); }, 5000);
  });
  return;
}
const updateUser = (details, box, btn) => {
  console.log('updateUser');
  const userDetails = JSON.parse(details);
  btn.disabled = true;
  box.textContent = '';
  box.classList.remove('alert-red');
  btn.textContent = 'UPDATING...';
  // verify user
  update(userDetails, ({ success, data }) => {
    console.log('updates');
    if (!success && !data) {
      setTimeout(() => { location.replace('login.html'); }, 2000);
      return;
    }
    if (!success) {
      box.classList.add('alert-red');
      box.textContent = data;
      btn.disabled = false;
      btn.textContent = 'UPDATE';
      return;
    }
    btn.innerHTML = `<img src='./img/ajax-loader.gif' class='smaller-loader'> REDIRECTING`;
    localStorage.setItem('user', data);
    setTimeout(() => { location.replace('index.html'); }, 5000);
  });
  return;
}

const startApp = () => {
  const btn = document.getElementById('logIn');
  const bnt = document.getElementById('butt');
  const dialog = document.getElementById('text');
  const text = document.getElementById('dialog');
  const logOut = document.getElementById('logOut');
  const verify = document.getElementById('verify');
  const butt = document.getElementById('update');
  const updateBox = document.getElementById('updateBox');
  const box = document.getElementById('boxVerify');
  const userDetails = window.localStorage.getItem('user');

  if (btn && dialog) btn.onclick = () => login(dialog, btn);
  if (bnt && text) bnt.onclick = () => register(text, bnt);
  if (logOut) logOut.onclick = () => signOut(logOut);
  if (verify && box) verify.onclick = () => certifyUser(userDetails, box, verify);
  if (butt && updateBox) butt.onclick = () => updateUser(userDetails, updateBox, butt);
}
startApp();
