class ArticleDatabase {
  constructor () {
    if (!localStorage.getItem('articleDB')) {
      this.createDatabase();
    }
    
    this.database = this.getDatabase();
  }
  
  createDatabase = () => {
    let mockArticles = {
      "1re35r9": {
        id: "1re35r9",
        title: "Lambda School Students: \"We're the best!\"",
        date: "Nov 5th, 2017",
        content: `<p>Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker
        watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn
        jar twi'lek jinn leia jango skywalker mon. </p>

        <p>Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
        windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine
        mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff
        k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff
        solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba
        owen jinn tatooine sith organa.</p>

        <p>Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.</p>`
      }
      /*,
      "w7s3ix": {
        id: "w7s3ix",
        message: "Phasellus nunc tortor, viverra id semper in, malesuada in justo. Sed rutrum tristique faucibus. Suspendisse pretium dictum metus, et sagittis elit luctus cursus. Suspendisse ornare vitae lectus a suscipit. Sed lobortis lacus a lorem dictum tincidunt."
      },
      "ok0evl": {
        id: "ok0evl",
        message: "Maecenas aliquam egestas vestibulum. Cras odio magna, iaculis eu dignissim vitae, aliquet vel nibh. Vivamus vel lobortis nulla. Integer sollicitudin vestibulum sem, cursus facilisis lacus accumsan ac."
      }*/
    };

    localStorage.setItem('articleDB', JSON.stringify(mockArticles));
    return mockArticles;
  }

  getDatabase = () => {
    return JSON.parse(localStorage.getItem('articleDB'));
  }

  save = (article) => {
    const id = window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36);
    this.database[id] = {
      "id": id,
      "title": article.title,
      "date": article.date,
      "content": article.message,
    };
    localStorage.setItem('articleDB', JSON.stringify(this.database));
    return this.database;
  }
  
  remove = (id) => {
    this.database[id] = undefined;
    localStorage.setItem('articleDB', JSON.stringify(this.database));
    this.database = JSON.parse(localStorage.getItem('articleDB')); // TODO: Likely don't need this, due to codepen scope issues
    return this.database;
  }
}