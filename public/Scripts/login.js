console.log("Login Script started");

let loginButton = document.getElementById('login-button');
loginButton.addEventListener("click", (e)=>{

    console.log("login clicked" , e.target.id);

    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    console.log("username",username,"password",password);


    fetch('http://localhost:3000/login', {
          method: 'POST',
          headers:{
              'Content-Type':'application/json',
          },
          body: JSON.stringify({
            "username": username,
            "password":password,
          }),
    }).then(response => {
        response.json().then(data => {
            
            console.log("data444", data);
            localStorage.setItem('token',data.token);
            location.href = '/contact-list';
            //alert("Successful");

        });
    }).catch(error=>{
        throw error;
        console.log("error123", error);
        alert("Something went wrong 123.");
    });

})