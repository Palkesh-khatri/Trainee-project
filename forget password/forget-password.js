$(document).ready(function () {
    $(".forget").validate({
       
        rules:
        {

            email:
            {
                required: true,                              
            },
        },


        messages:
        {
            email:
            {
                required: "Enter your valid name",   
            },
        },

    });
});