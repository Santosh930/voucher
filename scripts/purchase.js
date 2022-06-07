
let data=JSON.parse(localStorage.getItem("user"))||0;
console.log(data)

let wallet=document.getElementById("wallet_balance");
let p= wallet.innerText=data.amount;
 console.log(p);