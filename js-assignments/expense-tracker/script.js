var h2 = document.createElement("h2");
h2.innerHTML = "Expense Tracker";
document.body.appendChild(h2);

var container = document.createElement("div");
document.body.appendChild(container);
var h4 = document.createElement("h4");
h4.innerHTML = "Your Balance"
container.appendChild(h4);
h4.style = `margin: 0;
text-transform: uppercase;`;

var h1 = document.createElement("h1");
h1.id = "balance";
container.appendChild(h1);

h1.style = `letter-spacing: 1px;
margin: 0;`;
container.style = `
    margin: 30px auto;
    width: 350px;
  `;

var incExpContainer = document.createElement("div");
container.appendChild(incExpContainer);

incExpContainer.style = `background-color: #fff;
box-shadow: var(--box-shadow);
padding: 20px;
display: flex;
justify-content: space-between;
margin: 20px 0;`;

var incomeDiv = document.createElement("div");
incExpContainer.appendChild(incomeDiv);

incomeDiv.style = `
border-right: 1px solid #dedede;
flex: 1;
text-align: center;`;

var h4 = document.createElement("h4");
h4.innerHTML = "Income"
incomeDiv.appendChild(h4);

h4.style = `margin: 0;
text-transform: uppercase;`;

var p = document.createElement("p");
p.id = "money-plus";
p.innerHTML = "$0.00";
incomeDiv.appendChild(p);

p.style = `
color: #2ecc71;
font-size: 20px;
letter-spacing: 1px;
margin: 5px 0;`;

var expenseDiv = document.createElement("div");
incExpContainer.appendChild(expenseDiv);

expenseDiv.style = `flex: 1;
text-align: center;`;

var h4 = document.createElement("h4");
h4.innerHTML = "Expense";
expenseDiv.appendChild(h4);

h4.style = `margin: 0;
text-transform: uppercase;`;

var p = document.createElement("p");
p.id = "money-minus";
p.innerHTML = "$0.00";
expenseDiv.appendChild(p);

p.style = `color: #c0392b;
font-size: 20px;
letter-spacing: 1px;
margin: 5px 0;`;

var h3 = document.createElement("h3");
h3.innerHTML = "History";
container.appendChild(h3);

h3.style = `border-bottom: 1px solid #bbb;
padding-bottom: 10px;
margin: 40px 0 10px;`;

var ul = document.createElement("ul");
ul.id = "list";
container.appendChild(ul);

ul.style = `list-style-type: none;
padding: 0;
margin-bottom: 40px;`;

var h3 = document.createElement("h3");
h3.innerHTML = "Add new Transaction";
container.appendChild(h3);

h3.style = `border-bottom: 1px solid #bbb;
padding-bottom: 10px;
margin: 40px 0 10px;`;

var form = document.createElement("form");
form.id = "form";

var formControl1 = document.createElement("div");
formControl1.className = "form-control1";
form.appendChild(formControl1);

var label1 = document.createElement("label");
label1.setAttribute("for", "text");
label1.innerHTML = "Text";
formControl1.appendChild(label1);

label1.style = `display: inline-block;
margin: 10px 0;`;

var linebreak = document.createElement("br")
formControl1.appendChild(linebreak);

var input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("placeholder", "Enter text...");
input1.id = "text";
formControl1.appendChild(input1);

input1.style = `border: 1px solid #dedede;
border-radius: 2px;
display: block;
font-size: 16px;
padding: 10px;
width: 100%;`;

var formControl2 = document.createElement("div");
formControl2.className = "form-control2";
form.appendChild(formControl2);

var label2 = document.createElement("label");
label2.setAttribute("for", "text");
label2.innerHTML = "Amount " + "(negative - expense, positive - income)";
formControl2.appendChild(label2);

label2.style = `display: inline-block;
margin: 10px 0;`;

var linebreak = document.createElement("br")
formControl2.appendChild(linebreak);

var input2 = document.createElement("input");
input2.id = "amount";
input2.placeholder = "Enter amount ...";
input2.setAttribute("type", "number");
input2.setAttribute("placeholder", "Enter text...");
input2.id = "text";
formControl2.appendChild(input2);

input2.style = `border: 1px solid #dedede;
border-radius: 2px;
display: block;
font-size: 16px;
padding: 10px;
width: 100%;`;

var button = document.createElement("button");
button.class = "btn";
button.innerHTML = "Add Transcation";
form.appendChild(button);

button.style = `cursor: pointer;
background-color: #9c88ff;
box-shadow: var(--box-shadow);
color: #fff;
border: 0;
display: block;
font-size: 16px;
margin: 10px 0 30px;
padding: 10px;
width: 100%;`;

container.appendChild(form);

document.body.style = `
background-color: #f7f7f7;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
margin: 0;
font-family: 'Lato', sans-serif;`;

var expenseHistory = [];
var incomeHistory = [];
var income = document.getElementById("money-plus");
var expense = document.getElementById("money-minus");
var inputText;
var deletebtn;
var balance = document.getElementById("balance");
balance.innerHTML = "0.00";
var countT = 0;
var totalBalance = 0;
var tempIncome = 0;
var tempExpense = 0;

function addTransaction() {
    inputText = document.createElement('li');
    inputText.style = `
    background-color: #fff;
    box-shadow: var(--box-shadow);
    color: #333;
    display: flex;
    justify-content: space-between;
     position: relative;
     padding: 10px;
    margin: 10px 0;
    height:20px;`;
    // inputText.style.height = "20px"; //left and right float garda heught element zero verya inline aayo so height

    deletebtn = document.createElement("button")
    deletebtn.innerHTML = "X";
    deletebtn.style = `cursor: pointer;
    background-color: #e74c3c;
    border: 0;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    padding: 2px 5px;
    position: absolute;
    top: 50%;
    display:none;
    left: 0;
    transform: translate(-100%, -50%);
    transition: opacity 0.3s ease;`;

    deletebtn.addEventListener("click", function(event) {
        var id_ = this.parentElement.getAttribute('data-id');
        var type_ = this.parentElement.getAttribute('data-type');
        if (type_ == "plus") {
            incomeHistory.splice(incomeHistory.findIndex(e => e.id == id_), 1); //array bata hataune
            this.parentElement.remove();
        } else {
            expenseHistory.splice(expenseHistory.findIndex(e => e.id == id_), 1);
            this.parentElement.remove();
        }
        balanceCalculation();
    });

    inputText.appendChild(deletebtn);
    inputText.addEventListener("mouseover", function(event) {
        this.firstChild.style.display = "block";
    })

    var divLeft = document.createElement('div');
    divLeft.innerHTML = input1.value;
    divLeft.style.float = "left";
    inputText.appendChild(divLeft);
    var divRight = document.createElement('div');
    divRight.style.float = "right";
    divRight.innerHTML = input2.value;

    if (input2.value > 0) {
        incomeHistory.push({ id: countT, name: input1.value, amount: parseInt(input2.value) }); //just add matra grne array mah
        divRight.style = 'border-right:5px solid #2ecc71;';
        inputText.setAttribute('data-type', 'plus');
    } else if (input2.value < 0) {
        expenseHistory.push({ id: countT, name: input1.value, amount: parseInt(input2.value) });
        divRight.style = 'border-right:5px solid #c0392b;';
        inputText.setAttribute('data-type', 'minus');
    }
    inputText.appendChild(divRight);
    inputText.setAttribute('data-id', countT);
    countT++;
    ul.appendChild(inputText);
    balanceCalculation();
};

button.addEventListener("click", function(event) {
    event.preventDefault();
    addTransaction();
})

function balanceCalculation() {
    var tempExpense_ = 0;
    var tempIncome_ = 0;
    for (var i = 0; i < expenseHistory.length; i++) {
        tempExpense_ += expenseHistory[i]['amount'];
    } //for expense calc
    for (var i = 0; i < incomeHistory.length; i++) {
        tempIncome_ += incomeHistory[i]['amount'];
    } //for income calc
    console.log({ tempExpense_, tempIncome_ });
    income.innerHTML = '$' + tempIncome_; //display income
    expense.innerHTML = '$' + tempExpense_; //display expense
    balance.innerHTML = '$' + (tempIncome_ + tempExpense_); //displaying balance
}