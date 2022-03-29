var todd = document.querySelector(".todde")
var phil = document.querySelector(".philk")

var conreqnum =document.querySelector(".twoconreq")
var conreqcount = 2;

var yourconcount = 500;
var yourconnum = document.querySelector(".fivehunplus")

var person = [todd,phil]

function add(num) {
    conreqcount--
    yourconcount++
    yourconnum.innerText = yourconcount + "+"
    conreqnum.innerText = conreqcount;
    person[num].remove();
}

function reject(num) {
    conreqcount--
    yourconcount--
    yourconnum.innerText = yourconcount + "+"
    conreqnum.innerText = conreqcount;
    person[num].remove();
}


var username = document.querySelector(".jname")

function changename(){
    username.innerText = "Luke Skywalker"
}