// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardsLambda = axios.get("https://lambda-times-backend.herokuapp.com/articles")
console.log(cardsLambda);

let cardContainer = document.querySelector(".cards-container");

function CardCreator(arr){
    let divCard = document.createElement("div");
    divCard.classList.add("card");

    let divHeadline = document.createElement("div");
    divHeadline.classList.add("headline");
    divHeadline.textContent = arr.headline;
    divCard.appendChild(divHeadline);

    let divAuthor = document.createElement("div");
    divAuthor.classList.add("author");

    let divImg = document.createElement("div");
    divImg.classList.add("img-container");

    let img = document.createElement("img");
    img.src = arr.authorPhoto;
    divImg.appendChild(img);

    divAuthor.appendChild(divImg);

    let spanName = document.createElement("span");
    spanName.textContent = `By ${arr.authorName}`;
    divAuthor.appendChild(spanName);

    divCard.appendChild(divAuthor);

    return divCard;
}



let Button = document.getElementsByClassName("tab");
console.log(Button)
Button[0].addEventListener("click", () => {
    axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then((response) =>{
        response.data.articles.bootstrap.forEach(item =>{
           cardContainer.appendChild(CardCreator(item))

        })
 
        response.data.articles.javascript.forEach(item =>{
            cardContainer.appendChild(CardCreator(item))
        })
  
        response.data.articles.jquery.forEach(item =>{
            cardContainer.appendChild(CardCreator(item))
        })
 
        response.data.articles.node.forEach(item =>{
            cardContainer.appendChild(CardCreator(item))
        })
    
        response.data.articles.technology.forEach(item =>{
            cardContainer.appendChild(CardCreator(item))
        })
    })
    .catch( error => {
        console.log("Sorry, it didn't work")
    })
})

Button[1].addEventListener("click", () => {
    axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then((response) =>{
        
        response.data.articles.javascript.forEach(item =>{
            cardContainer.appendChild(CardCreator(item))
        })
    })
    .catch( error => {
        console.log("Sorry, it didn't work")
    })
})



