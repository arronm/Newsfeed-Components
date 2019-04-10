class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand';

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.toggleArticle.bind(this));

    // Set up height values for each article
    // DEBUG: Hard coded 22, because I'm too lazy to math out the padding/margin to get scalable values. Future me will be annoyed but at least I left a debug comment
    this.height = this.getArticleHeight.call(this) - 22;
  }

  getArticleHeight() {
    this.domElement.classList.toggle('article-open');
    const elementHeight = this.domElement.offsetHeight;
    this.domElement.classList.toggle('article-open');
    return elementHeight;
  }

  toggleArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    const state = this.expandButton.textContent;
    // NOTE: Bad nomenclature, 'collapsed' state === 'expand', may want to update this functionality for readability
    if (state === 'expand') {
      console.log(this.domElement);
      this.expandButton.textContent = 'collapse';
      this.domElement.style.height = `${this.height}px`;
    } else {
      this.expandButton.textContent = 'expand';
      this.domElement.removeAttribute('style');
    }
  }
}

// - Select all classes named ".article" and assign that value to the articles variable.
const articles = document.querySelectorAll('.article');

// - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.
articles.forEach((article) => new Article(article));
