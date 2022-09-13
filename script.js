const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
    statusTxt.style.color = "rgb(37, 37, 255)";
    statusTxt.style.display = "block";
    statusTxt.innerText = "Sending your message...";
    form.classList.add("disabled");

    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST", "index.php", true); //sending post request to message.php file
    xhr.onload = ()=>{ //once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){ //if ajax response status is 200 & ready status is 4 means there is no any error
            let response = xhr.response; // storing ajax response in a response variabel
            //change color to red
            if(response.indexOf("Email and Password field is required!") != -1 || response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry failed send your message!") != -1){
                statusTxt.style.color ="rgb(255, 22, 22)";
            }else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                }, 3000);//hide statusTXT after 3 second if the msg sent
            }
            statusTxt.innerText = response;
            form.classList.remove("disabled");
        }
    }
    let formData = new FormData(form); //creating new form data object. this object to use send form data
    xhr.send(formData); //sending form data 
}
