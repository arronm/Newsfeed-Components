/**
 * Class representing an Article.
 * @name Article
 */
class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector('.expandButton');
    this.closeButton = domElement.querySelector('.closeButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand';

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.toggleArticle.bind(this));

    this.closeButton.addEventListener('click', this.closeArticle.bind(this));

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
    const state = this.expandButton.textContent === 'expand' ? 'collapsed' : 'expanded';
    if (state === 'collapsed') {
      this.expandButton.textContent = 'collapse';
      this.domElement.style.height = `${this.height}px`;
    } else {
      this.expandButton.textContent = 'expand';
      this.domElement.removeAttribute('style');
    }
  }

  closeArticle() {
    this.domElement.style.height = '0px';
    this.domElement.style.padding = '0px';
    setTimeout(() => {
      this.domElement.remove();
    }, 330);
    articles.remove(this.domElement.id);
  }
}

// Create an ArticleFactory
/**
 * Creates a new Article object.
 * @name ArticleFactory
 * @property {object} props - An object containing data required to create an Article.
 * @property {string} props.parent - CSS selector for the parent element.
 * @property {string} props.title - Title for the Article.
 * @property {string} props.date - Date the article was published.
 * @property {string} props.content - Rich content for the article.
 * @property {string} props.id - Unique ID for the article.
 * @returns {Article}
 */
const ArticleFactory = (props) => {
  const article = document.createElement('div');
  article.classList.add('article');
  article.id = props.id;

  // create title node
  const title = document.createElement('h2');
  title.appendChild(document.createTextNode(props.title));
  
  // create date node
  const published = document.createElement('p');
  published.classList.add('date');
  published.appendChild(document.createTextNode(props.date));

  // create content node
  const content = document.createElement('div');
  content.classList.add('article-content')
  content.innerHTML = DOMPurify.sanitize(props.content);

  // create expand button
  const expand = document.createElement('span');
  expand.classList.add('expandButton');

  // create close button
  const close = document.createElement('span');
  close.classList.add('closeButton');
  close.appendChild(document.createTextNode('close'));

  // populate our article with child nodes
  article.appendChild(title);
  article.appendChild(published);
  article.appendChild(content);
  article.appendChild(expand);
  article.appendChild(close);
  document.querySelector(props.parent).appendChild(article);
  new Article(article);
}

// Set up our article database and populate articles
const articles = new ArticleDatabase();

Object.values(articles.database).forEach((article) => {
  ArticleFactory({
    ...article,
    parent: '.articles'
  });
});
