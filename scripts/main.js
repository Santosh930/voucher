document.querySelector("form").addEventListener("submit",myfunction);
// let Data=JSON.parse(localStorage.getItem("user"))||[];


function myfunction(){
    event.preventDefault();
    // console.log("santosh");
    let obj={
         name:document.getElementById("name").value,
     email:document.getElementById("email").value,
    address:document.getElementById("address").value,
     amount:document.getElementById("amount").value

    

    }
    // console.log(obj);

    // Data.push(obj);
    //  console.log(Data);

     localStorage.setItem("user",JSON.stringify(obj));

    document.getElementById("name").value=null;
    document.getElementById("email").value=null;
   document.getElementById("address").value=null;
    document.getElementById("amount").value=null;


    


}