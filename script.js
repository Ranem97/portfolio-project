const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");



form.onsubmit = (e)=> {
    e.preventDefault();
    statusTxt.style.color = "#6c63ff";
    statusTxt.style.display = "block";

let xhr = new XMLHttpRequest();   //creating new XML object
xhr.open("POST" , "message.php" , true);   //sending post request to message.php file
xhr.onload = ()=> { //once ajax loaded
if(xhr.readyState == 4 && xhr.status == 200){
    let response = xhr.response; //storing ajax response in a new response variable
    if (
      response.indexOf("Email and Message Filds are required!") != -1 ||
      response.indexOf("Enter a valid email address!") ||
      response.indexOf("Sorry, failed to send your message!")
    ){
        statusTxt.style.color = "red";
    }else{
        form.reset();
        setTimeout(()=>{
            statusTxt.style.display = "none";
        }, 3000); //hide statusTxt after 3 sec if msg is sent
    }
      statusTxt.innerText = response;
}
}
let formDate = new FormData(form); //creating new formData obj to send form data
xhr.send(formDate); //sending form data


}