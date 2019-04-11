const toggleForm = () => {
  const modal = document.querySelector('.form-container');
  
  if (!modal.classList.contains('form--open')) {
    // open modal
    modal.classList.toggle('form--hidden');
  } else {
    // close model
    setTimeout(() => {
      modal.classList.toggle('form--hidden');
    }, 330);
  }
  setTimeout(() => {
    modal.classList.toggle('form--open');
  }, 1);
  
  // blur other elements
  document.querySelector('.header').classList.toggle('blur');
  document.querySelector('.articles').classList.toggle('blur');
  document.querySelector('.menu').classList.toggle('blur');
  document.getElementById('create-article').classList.toggle('blur');
};

const submitForm = () => {
  const article = {};
  article.title = document.querySelector('.form .title').value;
  article.date = document.querySelector('.form .date').value;
  article.content = document.querySelector('.form .content').value;
  articles.save(article);
  article.parent = '.articles';
  ArticleFactory(article);
  toggleForm();
};

// Function to show our post form
document.getElementById('create-article').addEventListener('click', toggleForm);

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
