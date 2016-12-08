/*  Shah, Urvija    Account:  jadrn046
    CS545, Fall 2015
    Project #2
*/     

var programInfo;
var parentFirstNameInfo, parentLastNameInfo, relationToChildInfo, addressInfo, cityInfo, stateInfo, zipcodeInfo;
var phoneNumberAreaInfo, phoneNumberPrefixInfo, phoneNumberExtenstionInfo, emailInfo;
var childFirstNameInfo, childLastNameInfo, imageInfo, genderInfo, dobMonthInfo, dobDateInfo, dobYearInfo;
var emergencyFirstNameInfo, emergencyLastNameInfo;
var informationArray;
var inputType = { TEXT:1, ADDRESS:2, STATE:3, NUMBER:4, EMAIL:5, PHOTO:6, GENDER:7, ZIPCODE:8, 
        PHONE_AREA_PREFIX:9, PHONE_EXT:10, MONTH:11, DATE:12, YEAR:13, CITY:14, CHECKBOX:15, DROPDOWN:16 };
//error_message divs
var ErrorMessageDivArray = ["program_message","parent_message", "child_message","emergency_message"];
    
onsubmit = function validateForm() {
	if(!informationArray) {
		initializeVariables();
	}
	clearAllErrorMessages();
     
	for(var i= 0; i<informationArray.length; i++) {
    	if(checkEmptyCell(informationArray[i], true) == false) {
        	return false;
        }
        if(validateInput(informationArray[i], true) == false) {
           return false;
        }
	}    
}
 
$(document).ready(function() {
	
	$('[value="basketball"]').focus();
	initializeVariables();
    
    function focusPhoneField(phoneInputIdFocused, phoneInputIdToTransfer) {
        if($(phoneInputIdFocused).val().length == 3) {
        	$(phoneInputIdToTransfer).focus();
        }
    }
  
	$("#homephonearea").keyup(function(){
		focusPhoneField("#homephonearea", "#homephoneprefix");
  	});
    
    $("#homephoneprefix").keyup(function(){
        focusPhoneField("#homephoneprefix", "#homephoneextension");
  	});
   
	$("#ephonearea").keyup(function(){
      focusPhoneField("#ephonearea", "#ephoneprefix");
  	});
    
    $("#ephoneprefix").keyup(function(){
        focusPhoneField("#ephoneprefix", "#ephoneextension");
  	});
}); 

//initializes everything when page loads
function initializeVariables() {
    
    programInfo = {
        ID:"checkboxes", TYPE:inputType.CHECKBOX, ERROR:"Please select at least one program.", ERROR_DIV_ID:"program_message"
    }
    parentFirstNameInfo = {
    	ID:"parentfirstname", TYPE:inputType.TEXT, ERROR_DIV_ID:"parent_message", NAME:"parent's first name"
    }
    parentLastNameInfo = {
    	ID:"parentlastname", TYPE:inputType.TEXT, ERROR_DIV_ID:"parent_message", NAME:"parent's last name"
    }  
    relationToChildInfo = {
		ID:"relationshiptochild", TYPE:inputType.DROPDOWN, ERROR:"Please select relationship to the child", ERROR_DIV_ID:"parent_message"
    }
    addressInfo = {
		ID:"address1", TYPE:inputType.ADDRESS, ERROR:"Please enter valid address. Only characters, space, numbers, #, -, / and . are allowed.", ERROR_DIV_ID:"parent_message", NAME:"address"
    }
    cityInfo = { 
		ID:"city", TYPE:inputType.CITY, ERROR:"Please enter valid city. Special characters and numbers are not allowed.", ERROR_DIV_ID:"parent_message", NAME:"city"
    }
    stateInfo = {
        ID:"state", TYPE:inputType.STATE, ERROR:"Please enter valid 2-digit state abbreviation. e.g. ca or CA", ERROR_DIV_ID:"parent_message", NAME: "state"
    }
    zipcodeInfo = {
        ID:"zipcode", TYPE:inputType.ZIPCODE, ERROR:"Please enter valid zipcode. Only numbers are allowed.", ERROR_DIV_ID:"parent_message", NAME:"zipcode"
    }
    phoneNumberAreaInfo = {
    	ID:"homephonearea", TYPE:inputType.PHONE_AREA_PREFIX, ERROR:"Please enter valid areacode for phone. Only numbers are allowed.", ERROR_DIV_ID:"parent_message", NAME: "phone area code"
    }
    phoneNumberPrefixInfo = {
    	ID:"homephoneprefix", TYPE:inputType.PHONE_AREA_PREFIX, ERROR:"Please enter valid prefix for phone. Only numbers are allowed.", ERROR_DIV_ID:"parent_message", NAME: "phone prefix"
    }
    phoneNumberExtenstionInfo = {
    	ID:"homephoneextension", TYPE:inputType.PHONE_EXT, ERROR:"Please enter valid extension for phone. Only numbers are allowed.", ERROR_DIV_ID:"parent_message", NAME: "phone extension"
    }
    emailInfo = {
    	ID:"emailaddress", TYPE:inputType.EMAIL, ERROR:"Please enter valid e-mail address. Example: johndoe@gmail.com", ERROR_DIV_ID:"parent_message", NAME: "e-mail Address"
    }
    childFirstNameInfo = {
        ID:"childfirstname", TYPE:inputType.TEXT, ERROR_DIV_ID:"child_message", NAME:"child's first name"
    }
    childLastNameInfo = {
        ID:"childlastname", TYPE:inputType.TEXT, ERROR_DIV_ID:"child_message", NAME:"child's last name"
    }
    imageInfo = {
    	ID:"photoupload", TYPE:inputType.PHOTO, ERROR:"Please upload image.", ERROR_DIV_ID:"child_message"
    }
    genderInfo = {
		ID:"gender", TYPE:inputType.GENDER, ERROR:"Please select gender.", ERROR_DIV_ID:"child_message", NAME:"gender"
    }
    dobMonthInfo = {
    	ID:"mm", TYPE:inputType.MONTH, ERROR:"Please enter valid month. Only numbers are allowed.", ERROR_DIV_ID:"child_message", NAME:"month"
    }
    dobDateInfo = {
		ID:"dd", TYPE:inputType.DATE, ERROR:"Please enter valid date. Only numbers are allowed.", ERROR_DIV_ID:"child_message", NAME:"date"
    }
    dobYearInfo = {
    	ID:"yyyy", TYPE:inputType.YEAR, ERROR:"Please enter valid year. Only numbers are allowed.", ERROR_DIV_ID:"child_message", NAME:"year"
    }
    emergencyFirstNameInfo = {
    	ID:"emergencyfirstname", TYPE:inputType.TEXT, ERROR_DIV_ID:"emergency_message", NAME: "first name for emergency contact"
	}
    emergencyLastNameInfo = {
		ID:"emergencylastname", TYPE:inputType.TEXT, ERROR_DIV_ID:"emergency_message", NAME:"last name for emergency contact"
    }
    telephoneNumberAreaInfo = {
		ID:"ephonearea", TYPE:inputType.PHONE_AREA_PREFIX, ERROR:"Please enter valid areacode for emergency contact. Only numbers are allowed.", ERROR_DIV_ID:"emergency_message", NAME:"emergency contact number's area code "
    }
    telephoneNumberPrefixInfo = {
        ID:"ephoneprefix", TYPE:inputType.PHONE_AREA_PREFIX, ERROR:"Please enter valid prefix for emergency contact. Only numbers are allowed.", ERROR_DIV_ID:"emergency_message", NAME:"emergency contact number's prefix "
    }
    telephoneNumberExtensionInfo = {
    	ID:"ephoneextension", TYPE:inputType.PHONE_EXT, ERROR:"Please enter valid extension for emergency contact. Only numbers are allowed.", ERROR_DIV_ID:"emergency_message", NAME:"emergency contact number's extension"
	}
        
    informationArray = [programInfo, parentFirstNameInfo, parentLastNameInfo, relationToChildInfo, addressInfo, cityInfo, stateInfo, zipcodeInfo, phoneNumberAreaInfo, phoneNumberPrefixInfo, phoneNumberExtenstionInfo, emailInfo, childFirstNameInfo, childLastNameInfo, imageInfo, genderInfo, dobMonthInfo, dobDateInfo, dobYearInfo, emergencyFirstNameInfo, emergencyLastNameInfo, telephoneNumberAreaInfo, telephoneNumberPrefixInfo , telephoneNumberExtensionInfo];
    
    for(var i=0; i<informationArray.length; i++) {
        var obj = informationArray[i];
    
        //for gender radiobutton, use individual radiobutton's ID.
        if(obj.ID == "gender") {
       		document.getElementById("gendermale").addEventListener("blur", getBlurFunction(obj), false);
        	document.getElementById("genderfemale").addEventListener("blur", getBlurFunction(obj), false);
        }
        //for program selection checkboxes, use individual checkbox's ID.
        else if(obj.ID == "checkboxes") {
       		document.getElementById("camp1").addEventListener("blur", getBlurFunction(obj), false);
       		document.getElementById("camp2").addEventListener("blur", getBlurFunction(obj), false);
       		document.getElementById("camp3").addEventListener("blur", getBlurFunction(obj), false);
       		document.getElementById("camp4").addEventListener("blur", getBlurFunction(obj), false);
       		document.getElementById("camp5").addEventListener("blur", getBlurFunction(obj), false);
       		document.getElementById("camp6").addEventListener("blur", getBlurFunction(obj), false);
        }
        else {
			document.getElementById(obj.ID).addEventListener("blur", getBlurFunction(obj), false);
        }
    }//end for
    
    function getBlurFunction(obj) {
        return function() {
        	validateOnBlur(obj);
        }
    }
}//end function initializeVariables()

function validateOnBlur(obj) {
	if(checkEmptyCell(obj, false) == false) {
		return false;
	}
	if(validateInput(obj, false) == false) {
    	return false;
	}
    clearError(obj);
}

function validateInput(obj, isError) {
	switch(obj.TYPE) {
        case inputType.CHECKBOX:
        if(validateProgramSelection(obj, isError) == false) 
            return false;
        break;

        case inputType.TEXT:
        if(validateName(obj, isError) == false) 
            return false;
        break;
		
		case inputType.NUMBER:
        if(validateNumber(obj, isError) == false) 
            return false;
        break;
        
        case inputType.ADDRESS:
        if(validateAddress(obj, isError) == false) 
            return false;
        break;
        
        case inputType.CITY:
        if(validateCity(obj, isError) == false) 
            return false;
        break;
                     
        case inputType.STATE:
        if(validateState(obj, isError) == false) 
            return false;
        break;
                                         
    	case inputType.ZIPCODE:
        if(validateZipcode(obj, isError) == false) 
            return false;
        break;
                    
        case inputType.PHONE_AREA_PREFIX:
        if(validateNumberLength(obj, 3, isError) == false) 
            return false;
        break; 
                     
        case inputType.PHONE_EXT:
        if(validateNumberLength(obj, 4, isError) == false) 
            return false;
        break; 
                         	             
    	case inputType.EMAIL:
        if(validateEmail(obj, isError) == false) 
            return false;
        break;
               
        case inputType.PHOTO:
        if(validatePhoto(obj, isError) == false) 
            return false;
        break;
                     
        case inputType.GENDER:    
        if(validateGender(obj, isError) == false) 
            return false;
        break;
              
    	case inputType.DROPDOWN:
        if(validateRelationship(obj, isError)==false) 
            return false;
        break;
                   
        case inputType.MONTH:
        if(validateMonth(obj, isError) == false) 
            return false;
        break;

        case inputType.DATE:
        if(validateDate(obj, isError) == false) 
            return false;
        break;
                     
        case inputType.YEAR:
        if(validateBirthDate(obj, isError) == false) 
            return false;
        break;
    }// end switch
} // end function validateInput()

function checkEmptyCell(obj, isError) {
	if(obj.TYPE != inputType.CHECKBOX 
		&& obj.TYPE != inputType.DROPDOWN
        && obj.TYPE != inputType.PHOTO
        && obj.TYPE != inputType.GENDER) {
		
		var value = getValueFromId(obj.ID);
        if(isEmpty(value)) {
        	if(isError) {
            	showErrorDivision(obj, true);
            }
            return false;
        }
    }
	return true;
}

function validateProgramSelection(obj, isError) {
    if($('[name="programSelection[]"]:checked').length<=0) {
    	if(isError) {
        	document.getElementById(obj.ERROR_DIV_ID).innerHTML = obj.ERROR;
        	$('[value="basketball"]').focus();
			document.getElementById("checkboxes").style.border="1px solid red";
        }
        return false;
    } 
    if(isError == false) {
     	clearError(obj);
	}
    return true;
}

function validateRelationship(obj, isError) {
	if(isEmpty(document.getElementById(obj.ID).value.trim()) == false) {
         return true;  
    }  
    else {  
        if(isError) {
        	showErrorDivision(obj, true);
        }
        return false;  
    } 
}
     
function validateAddress(obj, isError) {
    var value = getValueFromId(obj.ID);
    if(isAddress(value)) {
        return true;  
    }  
    else {  
        if(isError) {
        	showErrorDivision(obj, false);
        }
        return false;  
    } 
}
     
function validateCity(obj, isError) {
    var value = getValueFromId(obj.ID);
    if(isCity(value)) {
        return true;  
    }  
    else {
        if(isError) {
        	showErrorDivision(obj, false);
        }
        return false;   
    }
}
     
function validateState(obj, isError) {
    if(validateTextInput(obj, isError) == false) {
       return false;
    }
    
    var value = getValueFromId(obj.ID);
    statesUS = "ga;sc;nc;oh;wv;va;pa;ny;vt;me;nh;ma;ri;ct;nj;de;md;dc;wa;or;ca;ak;nv;id;ut;az;hi;mt;wy;co;nm;nd;sd;ne;ks;ok;tx;mn;ia;mo;ar;la;wi;il;ms;mi;in;ky;tn;al;fl";
    if (value.length == 2 && statesUS.indexOf(value.toLowerCase() + ";") > -1) {
       return true;
    } 
    else {
        if(isError) {
        	showErrorDivision(obj, false);
        }
        return false;
    }
}
     
function validateZipcode(obj, isError) {
    if(validateNumber(obj) == false) {
        if(isError) {
        	showErrorDivision(obj, false);
        }
        return false;
    } 
    else if(getValueFromId(obj.ID).length < 5) {         
        if(isError) {
        	document.getElementById(obj.ERROR_DIV_ID).innerHTML = "Please Enter 5-digit ZipCode";
       		document.getElementById(obj.ID).style.borderColor="red";
        	document.getElementById(obj.ID).focus();
        }
        return false;
     } 
    else 
	    return true;
}
     
function validateNumberLength(obj, length, isError) {
    if(validateNumber(obj)) {
    	if(getValueFromId(obj.ID).length == length) {
        	return true;
    	} 
   		else {
        	if(isError) {
        		document.getElementById(obj.ERROR_DIV_ID).innerHTML = "Please enter "+length+' digits in '+obj.NAME;
        		document.getElementById(obj.ID).style.borderColor="red";
        		document.getElementById(obj.ID).focus();
        	}
        	return false;
    	}
	} 
    else {
    	if(isError) {
    		showErrorDivision(obj, false);
   		 }
    	return false;  
    }
}
     
function validateEmail(obj, isError) {
    var value = getValueFromId(obj.ID);
    if(isEmail(value)) {
        return true;  
    }  
    else {  
        if(isError) {
        	showErrorDivision(obj, false);
    	}
        return false;  
    } 
}

function validatePhoto(obj, isError) {
	var value = getValueFromId(obj.ID);
    if(isEmpty(value)) {   
    	if(isError) {
        	showErrorDivision(obj, true);
     	}
        return false;
	}
	var fileUpload = value;
    var fileTypeValidation = fileUpload.substring(fileUpload.lastIndexOf('.') + 1);
     //checking following extensions for photos
    if(fileTypeValidation == "gif" || fileTypeValidation == "GIF" || fileTypeValidation == "png" || fileTypeValidation == "PNG" || fileTypeValidation == "JPEG" || fileTypeValidation == "jpeg" || fileTypeValidation == "jpg" || fileTypeValidation == "JPG") {
         return true;
    } 
    else {
        if(isError) {
        	document.getElementById(obj.ERROR_DIV_ID).innerHTML = "Please upload valid Image. Only GIF/PNG/JPEG/JPG allowed ";
        	document.getElementById(obj.ID).style.borderColor="red";
        	document.getElementById(obj.ID).focus();
    	}
        return false;
	}         
}
    
function validateGender(obj, isError) {
	if(document.summercamp.childGender[0].checked == false && document.summercamp.childGender[1].checked == false ) {
		if(isError) {
        	document.getElementById(obj.ERROR_DIV_ID).innerHTML = obj.ERROR;
        	document.getElementById("gender").style.border="1px solid red";
        }
        return false;
    }
    if(isError == false) {
    	clearError(obj);
    }
    return true;
}
 
function validateBirthDate(obj, isError) {
    var today = new Date();
	var currentYear = today.getFullYear();   
	
	var ageValidation = new Date("2016", "05", "01"); //5 because month is in zero base
	var validationYear = ageValidation.getFullYear(); 
	
	//validate 4 digit year.
    if(validateNumberLength(obj, 4, isError) == false) {   
        return false;
    } 
   
    if(currentYear - getValueFromId(obj.ID) < 0) {   
    	if(isError) {
        	document.getElementById(obj.ERROR_DIV_ID).innerHTML = "Please enter valid birth year.";
       		document.getElementById(obj.ID).style.borderColor="red";
        	document.getElementById(obj.ID).focus();
    	}
        return false;
    } 
    
    var inDate = document.summercamp.dd.value.trim();
    var inMonth = document.summercamp.mm.value.trim()-1;
    var inYear = document.summercamp.yyyy.value.trim();
    
    var diff = validationYear - inYear;
    if(diff >16 || diff <7) {
        if(isError) {
        	document.getElementById(obj.ERROR_DIV_ID).innerHTML = "Please enter valid birthdate. Child must be between 7 and 16 years of age inclusive as of June 1, 2016.";
        	document.getElementById(obj.ID).style.borderColor="red";
        	document.getElementById(obj.ID).focus();
       	}
       	return false;
    }
    if(inYear == 2000 && inMonth < 5) {
        if(isError) {
        	document.getElementById(obj.ERROR_DIV_ID).innerHTML = "Please enter valid month. Child must be between 7 and 16 years of age inclusive as of June 1, 2016.";
        	document.getElementById("mm").style.borderColor="red";
        	document.getElementById("mm").focus();
       	} 
       	return false;
    }
    if(inYear == 2009 && inMonth > 5) {
        if(isError) {
        	document.getElementById(obj.ERROR_DIV_ID).innerHTML = "Please enter valid month. Child must be between 7 and 16 years of age inclusive as of June 1, 2016.";
        	document.getElementById("mm").style.borderColor="red";
        	document.getElementById("mm").focus();
       	} 
       	return false;
    }
   if(inYear == 2009 && inMonth == 5 && inDate > 1) {
        if(isError) {
        	document.getElementById(obj.ERROR_DIV_ID).innerHTML = "Please enter valid date. Child must be between 7 and 16 years of age inclusive as of June 1, 2016.";
        	document.getElementById("dd").style.borderColor="red";
        	document.getElementById("dd").focus();
       	} 
       	return false;
    }
}
          
function validateDate(obj, isError) {
    var value = getValueFromId(obj.ID);
    if(validateNumber(obj)) { 
        if( value >0 && value <=31) {
        	return true;
    	} 
    	else {
    		if(isError) { 
    			document.getElementById(obj.ERROR_DIV_ID).innerHTML = "Please enter valid date between 0 to 31.";
        		document.getElementById(obj.ID).style.borderColor="red";
        		document.getElementById(obj.ID).focus();
     		}
        return false;
     	}
    }
    else {
        if(isError) {
        	showErrorDivision(obj, false);
        }
        return false;     
    }
}
     
function validateMonth(obj, isError) {
    var value = getValueFromId(obj.ID);
    if(validateNumber(obj)) {
    	if(value >0 && value <=12) {
        	return true;
    	} 
    	
    	else {
        	if(isError) {
        		document.getElementById(obj.ERROR_DIV_ID).innerHTML = "Please enter valid month between 1 to 12";
        		document.getElementById(obj.ID).style.borderColor="red";
        		document.getElementById(obj.ID).focus();
        	}
    	return false;
    	}
    } 
    else {
    	if(isError) {
    		showErrorDivision(obj, false);
        }
    return false;     
    }
}
  
function getValueFromId(id) {
    return document.getElementById(id).value.trim();
}

function validateTextInput(obj, isError) {
    var value = document.getElementById(obj.ID).value.trim();
    if(isLetter(value)) {
        return true;  
    }  
    else {  
        if(isError) {
        	showErrorDivision(obj, false);
        }
    	return false;  
    }  
}

function isLetter(value) {
    var letters = /^[A-Za-z]+$/; 
    return value.match(letters); 
}

function validateName(obj, isError) {
	var value = document.getElementById(obj.ID).value.trim();
    if(isName(value)) {
        return true;  
    }  
    else {  
        if(isError) {
        	showErrorDivision(obj, false);
        }
        return false;  
	}  
}

function isName(value) {
//    var letters = /^[A-Za-z\s\-\']+$/; 
//    return value.match(letters); 
	return value;
}

function validateNumber(obj) {
    var value = getValueFromId(obj.ID);
    if(isNumber(value)) {
        return true;  
    }  
    else {  
        return false;  
    }  
}

function isNumber(value) {
    var numberExpression = /^[0-9]+$/;
    return value.match(numberExpression); 
}   
         
function isEmpty(value) {
    if(value !="") {
        return false;
    }
    else {
       return true;
    }
}
 
function isAddress(value) {
    var addressExpression=/^[a-zA-Z\s\d\#\/\.\-]+$/;
    return value.match(addressExpression);
}

function isCity(value) {
    var cityExpression= /^[a-zA-Z\s]+$/;
    return value.match(cityExpression); 
}
      
function isEmail(value) {
    var emailExpression=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return value.match(emailExpression); 
}
      
//clears all "red borders" and "error messages"
function clearAllErrorMessages() {
    clearAllErrors();
    clearAllErrorBorder();
}
     
function clearAllErrorBorder() {
	for(var i=0; i<informationArray.length; i++) 
		clearError(informationArray[i]);
}
     
function clearError(obj) {
	clearAllErrors();
	var id = obj.ID;
    if(id == "gender") {
		document.getElementById(obj.ID).style.borderColor="#FFF";
    }
    else if(id == "checkboxes") {
		document.getElementById(obj.ID).style.borderColor="#FFF";    
    }
    else {
		document.getElementById(obj.ID).style.borderColor="#AAA";
    }
}

function clearAllErrors() {
	document.getElementById("program_message").innerHTML = "";
    document.getElementById("parent_message").innerHTML = "";
    document.getElementById("child_message").innerHTML = "";
    document.getElementById("emergency_message").innerHTML = "";
}
       
function showErrorDivision(obj, isEmpty) {
    if(isEmpty) {
        if( obj.TYPE == inputType.CHECKBOX || obj.TYPE == inputType.DROPDOWN || obj.TYPE == inputType.PHOTO) {
            document.getElementById(obj.ERROR_DIV_ID).innerHTML = obj.ERROR;
        } 
        else {
            document.getElementById(obj.ERROR_DIV_ID).innerHTML = 'Please enter ' + obj.NAME;
        }
    } 
    else { 
        document.getElementById(obj.ERROR_DIV_ID).innerHTML = obj.ERROR; 
    }
    document.getElementById(obj.ID).style.borderColor="red";
    document.getElementById(obj.ID).focus();
}    