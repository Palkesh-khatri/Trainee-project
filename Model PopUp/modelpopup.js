// validation for model popup form step-1
$(document).ready(function () {
    $("#find").validate({
        rules: {
            fname: {
                required: true,
                minlength: 4,
                maxlength: 15
            },
            lname: {
                required: true,
                minlength: 4,
                maxlength: 15
            },
            phone: {
                required: true,
                maxlength: 10,
                maxlength: 10
            },
            email: {
                required: true,
                minlength: 2
            },
            uname:
            {
                required: true,
                minlength: 3
            }
        },
        messages: {
            fname: {
                required: "*Please enter your first name",
                minlength: "*minimum length should be 3",
                maxlength: "*maximum length should be 15"
            },
            lname: {
                required: "*Please enter your last name",
                minlength: "*minimum length should be 3"
            },
            phone: {
                required: "*Please enter your correct phone no.",
                minlength: "*Minimum length should be 10",
                maxlenth: "*No. should have only 10 digits"
            },
            email: {
                required: "*Enter the correct email id",
                minlength: "*Minimum length should be 4"
            },
            uname:
            {
                required: "*Please enter your user name",
                minlength: "*minimum length should be 4"
            },
        },
    });
//  fetching the datatable data. step-2
    fetch("http://192.168.0.67/NetCoreAPI/api/home/users?pageNo=1&pageSize=100", {
        headers: {
            Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMDZjMGFhMy1mNzQ3LTRlMzktYWUxZC0zMThhNjM3MzgzMWQiLCJ1c2VyIjoie1widXNlcklEXCI6MzEsXCJuYW1lXCI6XCJzaGFrdGlcIn0iLCJuYmYiOjE2NDcyMzM5MTksImV4cCI6MTY0NzMyMDMxOSwiaWF0IjoxNjQ3MjMzOTE5fQ.zj7TASN7_tYElduX3UTQOpW7ngNvRObYwbM0OrSWFEA",
        }
    })
// .then function/promise is used to stringfy the data. "=>" arrow function, short form of function.
        .then((res) => res.json())
        .then((data) => {
            console.log(data.data.users)
            data.data.users.forEach((user) => {                  //  using for each loop to add all the data.
                $("#body1").append(`                              //append the data in the body of the table
                      
                  <tr>
                      <td>${user.userID}</td>
                      <td>${user.firstName}</td>
                      <td>${user.lastName}</td>
                      <td>${user.mobileNo}</td>
                      <td>${user.emailID}</td>
                      <td>${user.userName}</td>  
                   </tr>
                  `)
            });
// tablemanager is used to add filter , search bar, sorting , paging etc.
            $('.tablemanager').tablemanager({
                firstSort: [[3, 0], [2, 0], [1, 'asc']],
                // disable: ["last"] if we want to disable the sorting in column,
                appendFilterby: true,
                dateFormat: [[4, "dd-mm-yyyy"]],
                debug: true,
                vocabulary: {
                    voc_filter_by: 'Filter',
                    voc_type_here_filter: 'search ',
                    voc_show_rows: 'Show entries'
                },
                pagination: true,
                showrows: [5, 10, 20, 50, 100],
            })
        });
})
// Get the data in the model popup form. step-3
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

            xhr.setRequestHeader("Authorization", "bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMDZjMGFhMy1mNzQ3LTRlMzktYWUxZC0zMThhNjM3MzgzMWQiLCJ1c2VyIjoie1widXNlcklEXCI6MzEsXCJuYW1lXCI6XCJzaGFrdGlcIn0iLCJuYmYiOjE2NDcyMzM5MTksImV4cCI6MTY0NzMyMDMxOSwiaWF0IjoxNjQ3MjMzOTE5fQ.zj7TASN7_tYElduX3UTQOpW7ngNvRObYwbM0OrSWFEA");
        },

        success: function (data, textStatus, xhr) {
            console.log(data);
            const obj = JSON.parse(JSON.stringify(data));


            $("#fname").val(obj.data.firstName);
            $("#lname").val(obj.data.lastName);
            $("#phone").val(obj.data.mobileNo);
            $("#email").val(obj.data.emailID);
            $("#uname").val(obj.data.userName);
           



            // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - > here you can proceed to get the data  
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Database');
            console.log("Error:" + xhr.responseText);
        }
    });
}




