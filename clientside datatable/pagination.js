$(document).ready(function () {
    $('#example').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": "../server_side/scripts/server_processing.php",

        ["Sitepoint","https://www.sitepoint.com","Blog","2013-10-15 10:30:00"],
    ["Flippa","http://flippa.com","Marketplace","null"],
    ["99designs","http://99designs.com","Marketplace","null"],
    ["Learnable","http://learnable.com","Online courses","null"],
    ["Rubysource","http://rubysource.com","Blog","2013-01-10 12:00:00"],
        
            "draw": 1,
            "recordsTotal": 57,
            "recordsFiltered": 57,
            "data": [
                [
                    "Airi",
                    "Satou",
                    "Accountant",
                    "Tokyo",
                    "28th Nov 08",
                    "$162,700"
                ],
                [
                    "Angelica",
                    "Ramos",
                    "Chief Executive Officer (CEO)",
                    "London",
                    "9th Oct 09",
                    "$1,200,000"
                ],
                [
                    "Ashton",
                    "Cox",
                    "Junior Technical Author",
                    "San Francisco",
                    "12th Jan 09",
                    "$86,000"
                ],
                [
                    "Bradley",
                    "Greer",
                    "Software Engineer",
                    "London",
                    "13th Oct 12",
                    "$132,000"
                ],
                [
                    "Brenden",
                    "Wagner",
                    "Software Engineer",
                    "San Francisco",
                    "7th Jun 11",
                    "$206,850"
                ],
                [
                    "Brielle",
                    "Williamson",
                    "Integration Specialist",
                    "New York",
                    "2nd Dec 12",
                    "$372,000"
                ],
                [
                    "Bruno",
                    "Nash",
                    "Software Engineer",
                    "London",
                    "3rd May 11",
                    "$163,500"
                ],
                [
                    "Caesar",
                    "Vance",
                    "Pre-Sales Support",
                    "New York",
                    "12th Dec 11",
                    "$106,450"
                ],
                [
                    "Cara",
                    "Stevens",
                    "Sales Assistant",
                    "New York",
                    "6th Dec 11",
                    "$145,600"
                ],
                [
                    "Cedric",
                    "Kelly",
                    "Senior Javascript Developer",
                    "Edinburgh",
                    "29th Mar 12",
                    "$433,060"
                ]
            ]

        });
});