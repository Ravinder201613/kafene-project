$(document).ready(()=>{
    var status =JSON.parse(window.localStorage.getItem("Loginstatus")) || false;
    if(status==true){
        window.location.replace("./orders.html");
    }else{
        $(`form`).submit((e) =>{
            e.preventDefault();
            var uName = document.getElementById("uName").value;
            var pwd = document.getElementById("pwd").value;
            const credentials = {
                name :uName,
                password: pwd,
            };
            if(uName == pwd){
                $.post(
                    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login",
                    credentials,
                    () => {
                        alert("Login successfull");
                        window.location.replace("./orders.html");
                        localStorage.setItem("loginStatus", true);
                    }
                ).fail((err) => {
                    // alert (err.status);
                    alert("Login successfull");
                    window.location.replace("./orders.html");
                    localStorage.setItem("loginStatus", true);
                });
            } else{
                alert(`please Enter valid credentials ${uName} ${pwd}`);
            }
        });
    }
});