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
    btn.textContent = 'REDIRECTING...';
    localStorage.setItem('user', data);
    setTimeout(() => { location.replace('index.html'); }, 5000);
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
    setTimeout(() => { location.replace('index.html'); }, 5000);
  });
  return;
}
const signOut = (btn) => {
  btn.innerHTML = `<i class="material-icons icon">power_settings_new</i> LOGIN OUT...`;
  localStorage.removeItem('user');
  setTimeout(() => { location.replace('login.html'); }, 5000);
  return;
}

const startApp = () => {
  const btn = document.getElementById('logIn');
  const bnt = document.getElementById('butt');
  const dialog = document.getElementById('text');
  const text = document.getElementById('dialog');
  const logOut = document.getElementById('logOut');

  if (btn && dialog) btn.onclick = () => login(dialog, btn);
  if (bnt && text) bnt.onclick = () => register(text, bnt);
  if (logOut) logOut.onclick = () => signOut(logOut);
}
startApp();
