$(document).ready(function () {

    $("#forget").submit(function (event) {
        
        console.log("hello");
        // Stop form from submitting normally
        event.preventDefault();
        var user = $("#email").val();
        console.log(user);
    

        $.ajax({
            url: "http://192.168.0.67/NetCoreAPI/api/auth/forgotpassword",
            // -- -- -- -- -- -- -- -- -- -- -- -- - > It 's represent url of api  
            type: 'POST',
            // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - > we need to set whether we getting / posting the data  
            dataType: 'json',
            // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- > type of data  
            contentType: "application/json; charset=utf-8",

            // crossDomain: true,

            data: JSON.stringify( {
                "userName": user
            }),

            success: function (data, textStatus, xhr) {
                // -- -- -- -- -- -- -- > here we can the result from data object  
               
                $("#result").css("color", "green");
                alert("Password has sent to your registered email address")
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
    });
});  
























































