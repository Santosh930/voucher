// Store cart items in local storage with key: "items"
let data=JSON.parse(localStorage.getItem("user"))||0;
console.log(data)

let wallet=document.getElementById("wallet_balance");
let p= wallet.innerText=data.amount;
 console.log(p);

 function booking(){
  //  console.log("sant");
  // if(p>=total)
  //     alert("Hurray! purchase successful");

  // }
  // else 

  // alert("Sorry! insufficient balance");

} 

  const url = 'https://masai-vouchers-api.herokuapp.com/api/vouchers';
  

 
fetch(url)
  .then(function (res) {
    
    return res.json(); 
  })
  .then(function (res) {
    let data=res[0].vouchers;
    console.log(data);
    displayData(data);
  })
  
  .catch(function (err) {
    console.log(err);
  });
//  let arr=JSON.parse(localStorage.getItem("purchase"))|| [];

 function displayData(data){


  data.forEach(function(el){
    
    let div=document.createElement("div");
    div.setAttribute("class","voucher");
    let image=document.createElement("img");
    image.src=el.image;
    let name=document.createElement("p");
    name.innerText=el.name;
    let price=document.createElement("p");
    price.innerText=el.price;
    let btn=document.createElement("button");
    btn.innerText="Buy";
     btn.addEventListener("onclick",booking());
    
    
    btn.setAttribute("class","buy_voucher")
   
  div.append(image,name,price,btn);
//   container.append(div);
  document.querySelector("#voucher_list").append(div);
});



 }
 
 


  
