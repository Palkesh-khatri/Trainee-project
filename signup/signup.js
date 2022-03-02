$(document).ready(function () {
    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z," "]+$/i.test(value);
    });

    $("#basicform").validate({

        rules: {

            firstName:
            {
                required: true,
                minlength: 4,
                maxlength: 15,
                lettersonly: true
            },

            lastName:
            {

                required: true,
                minlength: 4,
                maxlength: 15,
                lettersonly: true

            },

            username:
            {
                required: true,
                minlength: 3


            },

            email:
            {
                required: true,
                minlength: 2


            },

            Mob:
            {
                required: true,
                maxlength: 10,
                maxlength: 10
            },

            Pass:
            {
                required: true,
                minlength: 6,
                maxlength: 10

            },

            confirmPass:
            {
                required: true,
                minlength: 6,
                equalTo: "#Pass"

            }

        },

        messages:
        {
            firstName:
            {
                required: "*Please enter your first name",
                minlength: "*minimum length should be 3",
                maxlength: "*maximum length should be 15",
                lettersonly: "*Please enter only letter"

            },
            lastName:
            {
                required: "*Please enter your last name",
                minlength: "*minimum length should be 3",
                lettersonly: "*Please enter only letter"
            },

            username:
            {
                required: "*Please enter your user name",
                minlength: "*minimum length should be 4"

            },

            Mob:
            {
                required: "*Please enter your correct phone no.",
                minlength: "*Minimum length should be 10",
                maxlenth: "*No. should have only 10 digits"
            },
            email:
            {
                required: "*Enter the correct email id",
                minlength: "*Minimum length should be 4"
            },

            Pass:
            {
                required: "*Enter the correct Password",
                minlength: "*Minimum length should be 4"
            },

            confirmPass:
            {
                required: "*Confirm your Password",
                minlength: "*Minimum length should be 4",
                equalTo: "*Please enter the correct password"
            }
        },
    });
});






























































