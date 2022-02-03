document.body.style = `background-color: #296ca8;
color: #fff;
font-family: 'Roboto', sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
margin: 0;
padding-bottom: 100px;
`;

var heading = document.createElement("h1");
heading.innerHTML = "My Blog";
document.body.appendChild(heading);

heading.style = `margin-bottom: 0;
text-align: center;`;

var filterContainer = document.createElement("div");
filterContainer.classList.add("filter-container");
document.body.appendChild(filterContainer);

filterContainer.style = `margin-top: 20px;
width: 80vw;
max-width: 800px;`;

var filterInput = document.createElement("input");
filterInput.setAttribute("type", "text");
filterInput.setAttribute("id", "filter");
filterInput.setAttribute("class", "filter");
filterInput.setAttribute("placeholder", "Enter posts...");
filterContainer.appendChild(filterInput);
filterInput.style = `
width: 100%;
padding: 12px;
font-size: 16px;`;

var loading = document.createElement("div");
loading.classList.add("loader");
loading.id = "loader";
document.body.appendChild(loading);

var circle1 = document.createElement("div");
circle1.classList.add("circle");
var circle2 = document.createElement("div");
circle2.classList.add("circle");
var circle3 = document.createElement("div");
circle3.classList.add("circle");

loading.appendChild(circle1);
loading.appendChild(circle2);
loading.appendChild(circle3);