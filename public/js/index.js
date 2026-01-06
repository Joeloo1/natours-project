import '@babel/polyfill';
import { login } from './login';

// DOM
const loginFrom = document.querySelector('form');

if (loginFrom)
  loginFrom.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
