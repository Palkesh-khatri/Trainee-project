$(document).ready(function () {

    $("#basicform").submit(function (event) {
        
        $("#basicform").click(function(){
            $("#result").empty();
          });

        event.preventDefault();
        

        // console.log("status" + $("#basicform").valid());
        // Stop form from submitting normally



        if ($("#basicform").valid()) {

            
            // Stop form from submitting normally
            // event.preventDefault();
            var first = $("#firstName").val();
            var last = $("#lastName").val();
            var user = $("#username").val();
            var email = $("#email").val();
            var mobile = $("#Mob").val();
            var password = $("#Pass").val();


            $.ajax({
                url: 'http://192.168.0.67/NetCoreAPI/api/auth/signup',
                // -- -- -- -- -- -- -- -- -- -- -- -- - > It 's represent url of api  
                type: 'POST',
                // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - > we need to set whether we getting / posting the data  
                dataType: 'json',
                // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- > type of data  
                contentType: "application/json; charset=utf-8",
             
                // crossDomain: true,

                data: JSON.stringify({

                    "firstName": first,
                    "lastName": last,
                    "mobileNo": mobile,
                    "email": email,
                    "userName": user,
                    "password": password

                }),

                success: function (data, textStatus, xhr) {
                    // -- -- -- -- -- -- -- > here we can the result from data object  
                  
                    alert("User added sucessfully");
                    $("#result").css("color", "green")
                    window.location.href = "login.html";
                    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - > here you can proceed to get the data  
                },
                error: function (data, textStatus, errorThrown) {
                    
                     const obj = JSON.parse(JSON.stringify(data));
                     const obj1 = JSON.parse(obj.responseText);
                     $("#result").append(obj1.message);
                     $("#result").css("color", "red");
                     
                    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - >  
                    // if any error caught  
                }
            });
            event.preventDefault();
        }
    });    
});
























































