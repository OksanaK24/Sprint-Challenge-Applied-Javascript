// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

let headcont = document.querySelector(".header-container");

function Header() {
    let divHeader = document.createElement("div");
    divHeader.classList.add("header");

    let spanDate = document.createElement("span");
    spanDate.classList.add("date");
    spanDate.textContent = "MARCH 28, 2019";
    divHeader.appendChild(spanDate);

    let head1 = document.createElement("h1");
    head1.textContent = "Lambda Times";
    divHeader.appendChild(head1);

    let spanTemp = document.createElement("span");
    spanTemp.classList.add("temp");
    spanTemp.textContent = "98°";
    divHeader.appendChild(spanTemp);

    return divHeader;
}

headcont.appendChild(Header());