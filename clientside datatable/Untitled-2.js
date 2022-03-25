
    var showingSourceCode = false;
    var isInEditMode = true;

    function enableEditMode() {
        richTextField.document.designMode = 'On';

    }

    function execCmd(command) {
        richTextField.document.execCommand(command, false, null);
    }

    function execCommandWithArg(command, arg) {
        richTextField.document.execCommand(command, false, arg);
    }
    function toggleSource() {
        if (showingSourceCode) {
            richTextField.document.getElementsByTagName('body')[0].innerHTML =
                richTextField.document.getElementsByTagName('body')[0].textContent;
            showingSourceCode = false;
        } else {
            richTextField.document.getElementsByTagName('body')[0].textContent =
                richTextField.document.getElementsByTagName('body')[0].innerHTML;
            showingSourceCode = true;
        }
    }

    function toggleEdit() {
        if (isInEditMode) {
            richTextField.document.designMode = 'Off';
            isInEditMode = false;
        } else {
            richTextField.document.designMode = 'On';
            isInEditMode = true;
        }
    }
    function toggleDarkLight() {
        var element = document.body
        element.classList.toggle("dark-mode");
    }


    var myList = [];


    // document.addEventListener("DOMContentLoaded", function (ev) {
    //     //this runs when the page loads

    //     if (localStorage.getItem("November-list")) {
    //         myList = JSON.parse(localStorage.getItem("November-list"));
    //         //convert from String to Array
    //     }



        document.querySelector("#btnsave").addEventListener("click", function (ev) {
            ev.preventDefault();
            var newItem = document.querySelector("#item").value;
            console.log("139", newItem);
            myList.push(newItem);
            console.log('141', myList.push(newItem));
            localStorage.setItem("November-list", JSON.stringify(myList));
            //convert from Array to String.
            showList();
            return false;
        });


        //document.myForm.addEventListener("submit", function(ev){});
    // });

    // function removeItem(ev) {
    //     //this.firstChild.nodeValue
    //     //ev.currentTarget.firstChild - the textNode inside the paragraph
    //     //ev.currentTarget.firstChild.nodeValue - the text inside the textNode
    //     var txt = ev.currentTarget.firstChild.nodeValue;
    //     for (var i = 0; i < myList.length; i++) {
    //         if (myList[i] == txt) {
    //             //found the match
    //             myList.splice(i, 1);
    //         }
    //     }
    //     localStorage.setItem("November-list", JSON.stringify(myList));
    //     showList();
    // }

    // function showList() {
    //     var output = document.querySelector(".output");
    //     output.innerHTML = "";
    //     for (var i = 0; i < myList.length; i++) {
    //         var p = document.createElement("p");
    //         p.innerHTML = myList[i];

    //         output.appendChild(p);
    //         p.addEventListener("click", removeItem);
    //     }
    // }