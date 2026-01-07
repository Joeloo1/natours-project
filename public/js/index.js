import '@babel/polyfill';
import { login, logOut } from './login';

// DOM
const loginFrom = document.querySelector('form');
const logOutBtn = document.querySelector('.nav__el--logout');

if (loginFrom)
  loginFrom.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener('click', logOut);
