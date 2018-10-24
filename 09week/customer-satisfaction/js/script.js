// JSFormValidation.js
/*
 * Run init() after the page is loaded
 */
window.onload = init;
$('#Name').spellCheckInDialog() 
/*
 * Initialization
 */
function init() {
   // Bind "onsubmit" event handler to the "submit" button
   document.getElementById("formTest").onsubmit = validateForm;
   // Bind "onclick" event handler to "reset" button
   document.getElementById("btnReset").onclick = clearForm;
   // Set initial focus
   document.getElementById("txtUrl").focus();
}
 
/*
 * The "onsubmit" event handler to validate the input fields.
 *
 * Most of the input validation functions take 3 arguments:
 *   inputElm: Input element to be validated.
 *   errMsg: the error message to be displayed if validation fails.
 *   errElm: to place the error message
 *
 * @param theForm: the form to be validated
 */
function validateForm(theForm) {
   with(theForm) {
      // return false would prevent default submission
      return (isValidPassword(txtPassword, "Password shall be 6-8 characters!", elmPasswordError)
           && verifyPassword(txtPassword, txtPWVerified, "Different from new password!",
                 elmPWVerifiedError)
           && isValidEmail(txtEmail, "Enter a valid email!", elmEmailError)
           && isChecked("gender", "Please check a gender!", elmGenderError)
           && isChecked("color", "Please check a color!", elmColorError)
           && isSelected(selCountry, "Please make a selection!", elmCountryError)
           && isValidUrl(txtUrl, "Enter a valid URL!", elmUrlError)      
      );
   }
}
 
/*
 * Helper function, to be called after validation, to show or clear
 *   existing error message, and to set focus to the input element
 *   for correcting error.
 * If isValid is false, show the errMsg on errElm, and place the
 *   focus on the inputElm for correcting the error.
 * Else, clear previous errMsg on errElm, if any.
 *
 * @param isValid (boolean): flag indicating the result of validation
 * @param errMsg (string)(optional): error message
 * @param errElm (object)(optional): if isValid is false, show errMsg; else, clear.
 * @param inputElm (object)(optional): set focus to this element,
 *        if isValid is false
 */
function postValidate(isValid, errMsg, errElm, inputElm) {
   if (!isValid) {
      // Show errMsg on errElm, if provided.
      if (errElm !== undefined && errElm !== null
            && errMsg !== undefined && errMsg !== null) {
         errElm.innerHTML = errMsg;
      }
      // Set focus on Input Element for correcting error, if provided.
      if (inputElm !== undefined && inputElm !== null) {
         inputElm.classList.add("errorBox");  // Add class for styling
         inputElm.focus();
      }
   } else {
      // Clear previous error message on errElm, if provided.
      if (errElm !== undefined && errElm !== null) {
         errElm.innerHTML = "";
      }
      if (inputElm !== undefined && inputElm !== null) {
         inputElm.classList.remove("errorBox");
      }
   }
}
 
// Validate that input value is a valid URL
function isValidurl(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(
         /((ftp|https?):\/\/)?(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/) !== null);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}

// Validate password, 6-8 characters of [a-zA-Z0-9_]
function isValidPassword(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(/^\w{6,8}$/) !== null);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
   }
    
// Verify password.
function verifyPassword(pwElm, pwVerifiedElm, errMsg, errElm) {
   var isTheSame = (pwElm.value === pwVerifiedElm.value);
   postValidate(isTheSame, errMsg, errElm, pwVerifiedElm);
   return isTheSame;
}

// Validate that input value is a valid email address
function isValidEmail(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(
         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) !== null);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}

/*
 * Validate that a selection is made (not default of "") in <select> input
 *
 * @param selectElm (object): the <select> element
 */
function isSelected(selectElm, errMsg, errElm) {
   // You need to set the default value of <select>'s <option> to "".
   var isValid = (selectElm.value !== "");   // value in selected <option>
   postValidate(isValid, errMsg, errElm, selectElm);
   return isValid;
}
 
/*
 * Validate that one of the checkboxes or radio buttons is checked.
 * Checkbox and radio are based on name attribute, not id.
 *
 * @param inputName (string): name attribute of the checkbox or radio
 */
function isChecked(inputName, errMsg, errElm) {
   var elms = document.getElementsByName(inputName);
   var isChecked = false;
   for (var i = 0; i < elms.length; ++i) {
      if (elms[i].checked) {
         isChecked = true;
         break;
      }
   }
   postValidate(isChecked, errMsg, errElm, null);  // no focus element
   return isChecked;
}
 
/*
 * The "onclick" handler for the "reset" button to clear the display,
 * including the previous error messages and error box.
 */
function clearForm() {
   // Remove class "errorBox" from input elements
   var elms = document.querySelectorAll('.errorBox');  // class
   for (var i = 0; i < elms.length; i++) {
      elms[i].classList.remove("errorBox");
   }
 
   // Remove previous error messages
   elms = document.querySelectorAll('[id$="Error"]');  // id ends with Error
   for (var i = 0; i < elms.length; i++) {
      elms[i].innerHTML = "";
   }
 
   // Set initial focus
   document.getElementById("txtUrl").focus();
}



/*****************delete Below */


/*
 * Validate that input value is not empty.
 *
 * @param inputElm (object): input element
 * @param errMsg (string): error message
 * @param errElm (object): element to place error message
 */
function isNotEmpty(inputElm, errMsg, errElm) {
      var isValid = (inputElm.value.trim() !== "");
      postValidate(isValid, errMsg, errElm, inputElm);
      return isValid;
} 
 /*Validate that input value contains only one or more letters */
function isAlphabetic(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(/^[a-zA-Z]+$/) !== null) ;
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}
 
/* Validate that input value contains one or more digits or letters */
function isAlphanumeric(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(/^[0-9a-zA-Z]+$/) !== null);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}
 
/* Validate that input value length is between minLength and maxLength */
function isLengthMinMax(inputElm, minLength, maxLength, errMsg, errElm) {
   var inputValue = inputElm.value.trim();
   var isValid = (inputValue.length >= minLength) && (inputValue.length <= maxLength);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}