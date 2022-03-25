
//javascript for Rich text editor.
var showingSourceCode = false;
var isInEditMode = true;

//richTextField is the name of the iframe.
//document.designMode controls whether the entire document is editable. Valid values are "on" and "off".
function enableEditMode() {
    richTextField.document.designMode = 'On';
}

//document.execCommand are commands that manipulate the current editable region, such as form inputs or contentEditable elements.
//All commands like bold, itallic, underline etc are working only by using the document.execCommand.
//syntax - document.execCommand(aCommandName, aShowDefaultUI, aValueArgument).
function execCmd(command) {
    richTextField.document.execCommand(command, false, null);
}

// aValueArgument - For commands which require an input argument, is a DOMString providing that information.
function execCommandWithArg(command, arg) {
    richTextField.document.execCommand(command, false, arg);
}

//The getElementsByTagName method of Document interface returns an HTMLCollection of elements with the given tag name.
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
//toogle edit button working:
function toggleEdit() {
    if (isInEditMode) {
        richTextField.document.designMode = 'Off';
        isInEditMode = false;
    } else {
        richTextField.document.designMode = 'On';
        isInEditMode = true;
    }
}
//https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp.
function toggleDarkLight() {
    var element = document.body
    element.classList.toggle("dark-mode");
}

//Refernce - https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#commands
//Symbol class Refernce - https://fontawesome.com/v4/icons/ 
