$(document).ready(function () {
    $("#login").validate({
       
        rules:
        {

            Username:
            {
                required: true,
                minlength: 4,
                
                
            },

            pass:
            {
                required: true,
                minlength: 6,
                
                
            },
        },


        messages:
        {
            Username:
            {
                required: "Enter your User name",
                minlength: "Minimum length should be 4",
                
            },

            pass:
            {
                required: "*Enter the correct Password",
                minlength: "Minimum length should be 4",
                
            },
        },

    });
});
