const toggleForm = () => {
  const modal = document.querySelector('.form-container');
  modal.classList.toggle('form--open');
  
  // blur other elements
  document.querySelector('.header').classList.toggle('blur');
  document.querySelector('.articles').classList.toggle('blur');
};

const submitForm = () => {
  const post = {};
  post.title = document.querySelector('.form .title').value;
  post.date = document.querySelector('.form .date').value;
  post.content = document.querySelector('.form .content').value;
  articles.save(post);
  post.parent = '.articles';
  ArticleFactory(post);
  toggleForm();
};

// Function to show our post form
document.getElementById('create-post').addEventListener('click', toggleForm);

// Escape listener to close form modal
document.addEventListener('keydown', (event) => {
  const modal = document.querySelector('.form-container');
  // If escape is pressed and our modal is open
  if (event.keyCode === 27 && modal.classList.contains('form--open')) {
    toggleForm();
  }
});

// Click handler on modal to close
document.querySelector('.form-container').addEventListener('click', (event) => {
  if (event.target.matches('.form-container')) {
   toggleForm();
  }
});

// Form submission handler
const submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
  submitForm();
});

// Ctrl + Enter listener to submit form
document.addEventListener('keydown', (event) => {
  // If control + enter is pressed and our modal is open
  if ((event.keyCode === 13 && event.ctrlKey) && document.querySelector('.form-container').classList.contains('form--open')) {
    submitForm();
  }
});