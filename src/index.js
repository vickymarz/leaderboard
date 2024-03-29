import './style.css';
import { postData } from './services.js';
import refreshData from './scores.js';

refreshData();

const form = document.querySelector('#form');
const refreshBtn = document.querySelector('#refresh');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = form.elements.user.value;
  const score = form.elements.score.value;
  const userData = { user, score };

  await postData(userData);
  refreshData();
  form.reset();
});

refreshBtn.addEventListener('click', refreshData);