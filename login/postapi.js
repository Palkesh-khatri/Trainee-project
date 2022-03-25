$(document).ready(function () {

    // console.log("hello");
    $("#login").submit(function (event) {
        event.preventDefault();     
        // console.log("status" + $("#login").valid());
        // Stop form from submitting normally

        if ($("#login").valid()) {

            // Stop form from submitting normally
            // event.preventDefault();
            var user = $("#Username").val();
            var pass = $("#pass").val();

            $.ajax({
                url: 'http://192.168.0.67/NetCoreAPI/api/auth/token',
                // -- -- -- -- -- -- -- -- -- -- -- -- - > It 's represent url of api  
                type: 'POST',
                // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - > we need to set whether we getting / posting the data  
                dataType: 'json',
                // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- > type of data  
                contentType: "application/json; charset=utf-8",

                // crossDomain: true,

                data: JSON.stringify({
                    "username": user,
                    "password": pass
                }),

                success: function (data, textStatus, xhr) {
                    // -- -- -- -- -- -- -- > here we can the result from data object  
                    alert("Login sucesfully");
                    $("#result").css("color", "green");
                    // console.log(JSON.stringify(data)); 

                    const obj = JSON.parse(JSON.stringify(data));
                    console.log(obj);


                    sessionStorage.setItem("access_token", obj.data.access_token);
                    sessionStorage.setItem("userId", obj.data.userId);
                    window.location.href = "file:///E:/synsoft/Project/Trainee-project/Trainee-project/Upload%20image/imageupload.html";
                    // window.location.href = "randomuser.html";
                    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - > here you can proceed to get the data  
                },
                error: function (data, textStatus, errorThrown) {
                    
                    
                    const obj = JSON.parse(JSON.stringify(data));
                    const obj1 = JSON.parse(obj.responseText);
                    $("#result").append(obj1.message);
                    $("#result").css("color", "red");
                    console.log(obj);


                    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - >  
                    // if any error caught  
                }
            });
            event.preventDefault();
            
        }
    });
});























































