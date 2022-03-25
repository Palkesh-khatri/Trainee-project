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
    var token = sessionStorage.getItem("access_token");
    fetch("http://192.168.0.67/NetCoreAPI/api/home/users?pageNo=1&pageSize=100", {
        headers: {
            Authorization: 'Bearer ' + token,
        }
    })  
        .then((res) => res.json())
        .then((data) => {
            console.log(data.data.users)
            data.data.users.forEach((user) => {                  
                $("#body1").append(`                                    
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
        url: 'http://192.168.0.67/NetCoreAPI/api/home/user_profile?userId=' + userid,
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "bearer " + token);
        },
        success: function (data, textStatus, xhr) {
            console.log(data);
            const obj = JSON.parse(JSON.stringify(data));
            $("#fname").val(obj.data.user.firstName);
            $("#lname").val(obj.data.user.lastName);
            $("#phone").val(obj.data.user.mobileNo);
            $("#email").val(obj.data.user.email);
            $("#uname").val(obj.data.user.userName);
            // $("#userPicture").val(obj.data.user.profilePicURL);
            document.getElementById('imagePreview').src= "http://192.168.0.67/NetCoreAPI"+ "/Uploads/Profile/73d37d530a2e4325a4fe05686062b13c_O_.jpg"
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Database');
            console.log("Error:" + xhr.responseText);
        }
    });    
}










// const imageUrl = "http://192.168.0.67/NetCoreAP/Uploads/Profile/ba01cc3f50ed476b8e916cdf4682167c_O_.jpg";

// fetch(imageUrl)
//     //                    
//     .then(response => response.blob())
//     .then(imageBlob => {
//         // Then create a local URL for that image and print it 
//         const imageObjectURL = URL.createObjectURL(imageBlob);
//         console.log(imageObjectURL);
//     });

    
// function chartUrl(chartUrl){
//     var todo =document.getElementById('toDo').value;
//     $.ajax({
//         url :chartUrl,             
//           data: {"todo":todo,"CMD":"chartUrl"},
//           type: "GET",
//           contentType: "image/png",
//           dataType: "text",
//         success: function(data) { 
//         	/* alert(data); */
//               $("#imgalign").html('<img src="' + data + '" />');
//         }
//     });
// }




