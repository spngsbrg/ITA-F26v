let parrentElement = document.getElementById("main-content-area");

//fetchData("Data/data.json").then(function(data){
fetchData("Data/data.json").then((articles) => {
  console.log(articles);

  //articles.forEach(function(article){
  /*articles.forEach((article) => {
    let articleToInsert =
      "<div id='" +
      article.id +
      "' class='content'>" +
      "<h1>" +
      article.heading +
      "</h1>" +
      "<p class='inner-content'>" +
      article.content +
      "</p>" +
      "<p class='author'>" +
      article.author +
      "</p>" +
      "<p class='contact'>" +
      article.email +
      "</p>" +
      "</div>";

    parrentElement.innerHTML = parrentElement.innerHTML + articleToInsert;
  });*/
  articles.forEach(addArticle);
});

function addArticle(article) {
  /* <div id="1" class="content">
     <h1>Heading</h1>
     <p class="inner-content">Inner content</p>
     <p class="author">Author</p>
     <p class="contact">Author contact</p>
   </div>;*/

  //Create article div as a container for content to come
  let articleElement = document.createElement("div");
  articleElement.id = article.id;
  articleElement.className = "content";

  //Create h1-element as a heading for the article
  let articleHeading = document.createElement("h1");
  articleHeading.innerText = article.heading;

  //Add heading to article element
  articleElement.appendChild(articleHeading);

  //Add article to mainContentArea
  parrentElement.appendChild(articleElement);

  //Lav selv resten

  /*let articleToInsert =
    "<div id='" +
    article.id +
    "' class='content'>" +
    "<h1>" +
    article.heading +
    "</h1>" +
    "<p class='inner-content'>" +
    article.content +
    "</p>" +
    "<p class='author'>" +
    article.author +
    "</p>" +
    "<p class='contact'>" +
    article.email +
    "</p>" +
    "</div>";

  parrentElement.innerHTML = parrentElement.innerHTML + articleToInsert;*/
}

//Magi - det taler vi om senere!!
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
