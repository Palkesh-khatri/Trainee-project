
$(document).ready(function () {
    $("#find").validate({
        rules: {
            fname: {
                required: true,
                minlength: 4,

            },
            lname: {
                required: true,
                minlength: 4,
            },
            // dob: {
            //     required: true,
            //     minlength: 10,
            // },
            phone: {
                required: true,
                minlength: 10,
            },
            email: {
                required: true,
                minlength: 5,
            }
        },
        messages: {
            fname: {
                required: "Please enter your first name",
                minlength: "minimum length should be 4",
                lettersonly: "please enter only letter"
            },
            lname: {
                required: "* Please enter your last name",
                minlength: "minimum length should be 4",
            },
            // dob: {
            //     required: "* Please enter your date of birth",
            //     minlength: "minimum length should be 10",
            // },
            phone: {
                required: "* Please enter your phone no.",
                minlength: "minimum length should be 10",
            },
            email: {
                required: "* Enter the correct email id",
                minlength: "minimum length should be 4",
            },
        },
    });







    if (sessionStorage.getItem("access_token") == null) {
        window.location.href = "login.html";
    } 
    else {
        var userid = sessionStorage.getItem("userId");
        var token = sessionStorage.getItem("access_token");
        // console.log(token);
        $.ajax({
            url: 'http://192.168.0.67/NetCoreAPI/api/home/user?userId=' + userid,
            type: 'GET',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",

            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "bearer " + token);
            },

            success: function (data, textStatus, xhr) {
                console.log(data);
                const obj = JSON.parse(JSON.stringify(data));


                $("#fname").val(obj.data.firstName);
                $("#lname").val(obj.data.lastName);
                $("#phone").val(obj.data.mobileNo);
                $("#email").val(obj.data.emailID);





                // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - > here you can proceed to get the data  
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error in Database');
                console.log("Error:" + xhr.responseText);

            }
        });
    }

    $("#btn").click(function () {

        sessionStorage.removeItem("access_token");

        window.location.href = "login.html";
    });
});