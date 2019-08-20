// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let LambdaTopic = axios.get("https://lambda-times-backend.herokuapp.com/topics")
console.log(LambdaTopic);

let topicsL = document.querySelector(".topics");

let ButtonArray = [];

let allTab = document.createElement("div");
  allTab.classList.add("tab");
  allTab.textContent = "ALL";
  topicsL.appendChild(allTab);
  allTab.addEventListener("click", () =>{
    allTab.classList.add("active-tab")
  })
  allTab.addEventListener("mouseout", () =>{
    allTab.classList.remove("active-tab")
  });
ButtonArray.push(allTab);

function topicsList(arr){
    let tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = arr;
    tab.addEventListener("click", () =>{
      tab.classList.add("active-tab")
    })
    tab.addEventListener("mouseout", () =>{
      tab.classList.remove("active-tab")
    });
    
    return tab;
}

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then( (response) => {
    response.data.topics.forEach(item =>{
    topicsL.appendChild(topicsList(item))
    ButtonArray.push(topicsList(item));
       
    })
      })
  .catch( error => {
    console.log("It's definitely not topic")
  })


  console.log(ButtonArray)

