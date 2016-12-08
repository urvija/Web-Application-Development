	function isEmpty(fieldValue) 
	{
    	return $.trim(fieldValue).length == 0;    
	} 
        
	function isValidState(state) 
	{                                
        var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
        "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
        "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
        "UT","VA","VT","WA","WI","WV","WY");
        for(var i=0; i < stateList.length; i++) 
            if(stateList[i] == $.trim(state))
                return true;
        return false;
    }  
    
    // from stackoverflow.com        
    function isValidEmail(email) 
    {
        var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return pattern.test(email);
    }                
                  
$(document).ready( function() {
    var errorStatusHandle = $('#message_line');
    var element = new Array(40);
    element[0] = $('[name="programSelection[]"]');
    element[1] = $('[name="parentfirstname"]');
    element[2] = $('[name="parentmiddlename"]');
    element[3] = $('[name="parentlastname"]');
    element[4] = $('[name="relationshiptochild"]');
    element[5] = $('[name="address1"]');
    element[6] = $('[name="address2"]');
    element[7] = $('[name="city"]');
    element[8] = $('[name="state"]');
    element[9] = $('[name="zipcode"]');
	element[10] = $('[name="phone_areacode"]');
	element[11] = $('[name="phone_prefix"]');
	element[12] = $('[name="phone_extension"]');
	element[13] = $('[name="phoneareacode"]');
	element[14] = $('[name="phoneprefix"]');
	element[15] = $('[name="phoneextension"]');
	element[16] = $('[name="emailaddress"]');
	element[17] = $('[name="childfirstname"]');
	element[18] = $('[name="childmiddlename"]');
	element[19] = $('[name="childlastname"]');
	element[20] = $('[name="nickname"]');
	element[21] = $('[name="photoupload"]');
	element[22] = $('[name="childGender"]');
	element[23] = $('[name="birthday_mm"]');
	element[30] = $('[name="birthday_dd"]');
	element[31] = $('[name="birthday_yyyy"]');
	element[24] = $('[name="medicalcondition"]');
	element[25] = $('[name="specialdietaryrequirements"]');
	element[26] = $('[name="emergencyfirstname"]');
	element[27] = $('[name="ephone_areacode"]');
	element[28] = $('[name="ephone_prefix"]');
	element[29] = $('[name="ephone_extension"]');
	element[32] = $('[name="emergencylastname"]');
     
	var errorMessage = new Array(32);
    errorMessage[0] = "Please select at least one program";
    errorMessage[1] = "Please enter parent's first name";
    errorMessage[2] = "Please enter parent's middle name";
    errorMessage[3] = "Please enter parent's last name";
    errorMessage[4] = "Please select your relationship to child";
    errorMessage[5] = "Please enter address";                      
    errorMessage[6] = "Please enter address2";
    errorMessage[7] = "Please enter city";
    errorMessage[8] = "Please enter state";
    errorMessage[9] = "Please enter zip code";
	errorMessage[10] = "Please enter home phone area code";  
	errorMessage[11] = "Please enter prefix for home phone number";  
	errorMessage[12] = "Please enter the last four digits of your home phone number";  
	errorMessage[13] = "Please enter cell phone area code";  
	errorMessage[14] = "Please enter prefix for cell phone number";  
	errorMessage[15] = "Please enter the last four digits of your cell phone number";  
	errorMessage[16] = "Please enter your email address";  
	errorMessage[17] = "Please enter child's first name";  
	errorMessage[18] = "Please enter child's middle name";  
	errorMessage[19] = "Please enter child's last name";  
	errorMessage[23] = "Please enter month"; 
	errorMessage[30] = "Please enter date";  
	errorMessage[31] = "Please enter year";  
	errorMessage[20] = "Please enter the name child goes by";  
	errorMessage[21] = "Please upload a picture of your child";
	errorMessage[22] = "Please select your child's gender"; 
	errorMessage[24] = "Please state your child's medical condition"; 
	errorMessage[25] = "Please state your child's special dietary requirements"; 
	errorMessage[26] = "Please enter the emergency contact's first name";
	errorMessage[32] = "Please enter the emergency contact's last name";
	errorMessage[27] = "Please enter the emergency contact's phone area code"; 
	errorMessage[28] = "Please enter the emergency contact's pefix phone number"; 
	errorMessage[29] = "Please enter the last four digits of emergency contact's number";        
	    
    function isValidData() {

		//program selection
        if(element[0].serializeArray()==0) {
			$("#checkboxes").addClass("error");
			errorStatusHandle.text(errorMessage[0]);
			$('[class="checkboxes"]').focus();
			return false;
		}
		else {
			$("#checkboxes").removeClass("error");
			errorStatusHandle.text("");
		}
        
        //parent's first name
		if(isEmpty(element[1].val())) {
			element[1].addClass("error");
			errorStatusHandle.text(errorMessage[1]);
			element[1].focus();
			return false;
		}
		
		//parent's last name
		if(isEmpty(element[3].val())) {
			element[3].addClass("error");
			errorStatusHandle.text(errorMessage[3]);
			element[3].focus();
			return false;
		}

		//Relationship to child		
		if(element[4].val() == '') {
			element[4].addClass("error");
			errorStatusHandle.text(errorMessage[4]);
			element[4].focus();
			return false;
		}

		//address1
		if(isEmpty(element[5].val())) {
			element[5].addClass("error");
			errorStatusHandle.text(errorMessage[5]);
			element[5].focus();
			return false;
		}
		
		//city
		if(isEmpty(element[7].val())) {
			element[7].addClass("error");
			errorStatusHandle.text(errorMessage[7]);
			element[7].focus();
			return false;
		}
		
		//state 
		if(isEmpty(element[8].val())) {
			element[8].addClass("error");
			errorStatusHandle.text(errorMessage[8]);
			element[8].focus();
			return false;
		}
		
		if(!isValidState(element[8].val())) {
			element[8].addClass("error");
			errorStatusHandle.text("The state appears to be invalid, "+
            "please use valid two letter state abbreviation");
            element[8].focus();            
            return false;
		}
		
		//zipcode		
		if(isEmpty(element[9].val())) {
			element[9].addClass("error");
			errorStatusHandle.text(errorMessage[9]);
			element[9].focus();
			return false;
		}
		
		if(!$.isNumeric(element[9].val())) {
            element[9].addClass("error");
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "please enter numbers only");
            element[9].focus();            
            return false;
        }
        
        if(element[9].val().length != 5) {
            element[9].addClass("error");
            errorStatusHandle.text("The zip code must have exactly five digits")
            element[9].focus();            
            return false;
        }
			
		//Parent's Home Phone Area Code		
		if(isEmpty(element[10].val())){
			element[10].addClass("error");
			errorStatusHandle.text(errorMessage[10]);
			element[10].focus();
			return false;
		}   
        
        if(element[10].val().length != 3) {
            element[10].addClass("error");
            errorStatusHandle.text("The home phone area code must have exactly three digits")
            element[10].focus();            
            return false;
            }		
		
		if(!$.isNumeric(element[10].val())) {
            element[10].addClass("error");
            errorStatusHandle.text("Your home phone area code appears to be invalid, "+
            "please enter numbers only");
            element[10].focus();            
            return false;
        }
		
		//Parent's Home Phone Prefix	 	
		if(isEmpty(element[11].val())){
			element[11].addClass("error");
			errorStatusHandle.text(errorMessage[11]);
			element[11].focus();
			return false;
		}
		
		if(element[11].val().length != 3) {
            element[11].addClass("error");
            errorStatusHandle.text("The home phone prefix must have exactly three digits")
            element[11].focus();            
            return false;
        }		
        
        if(!$.isNumeric(element[11].val())) {
            element[11].addClass("error");
            errorStatusHandle.text("Your home phone number prefix appears to be invalid, "+
            "please enter numbers only");
            element[11].focus();            
            return false;
        }
		
		//Parent's Home Phone Number 		
		if(isEmpty(element[12].val())){
			element[12].addClass("error");
			errorStatusHandle.text(errorMessage[12]);
			element[12].focus();
			return false;
		}
		
		if(element[12].val().length != 4) {
        	element[12].addClass("error");
            errorStatusHandle.text("The home phone must have exactly four digits")
            element[12].focus();            
            return false;
        }			          
        
        if(!$.isNumeric(element[12].val())) {
            element[12].addClass("error");
            errorStatusHandle.text("Your home phone number appears to be invalid, "+
            "please enter numbers only");
            element[12].focus();            
            return false;
		}
		
		//Email	
		if(isEmpty(element[16].val())){
			element[16].addClass("error");
			errorStatusHandle.text(errorMessage[16]);
			element[16].focus();
			return false;
		}
					         
        if(!isValidEmail(element[16].val())) {
            element[16].addClass("error");
            errorStatusHandle.text("The email address appears to be invalid");
            element[16].focus();            
            return false;
        }                                                                          
		
		//child's first name
		if(isEmpty(element[17].val())){
			element[17].addClass("error");
			errorStatusHandle.text(errorMessage[17]);
			element[17].focus();
			return false;
		}
		
		//child's last name
		if(isEmpty(element[19].val())){
			element[19].addClass("error");
			errorStatusHandle.text(errorMessage[19]);
			element[19].focus();
			return false;
		}
				
		//photo uploaded	
		if(isEmpty(element[21].val())){
			element[21].addClass("error");
			errorStatusHandle.text(errorMessage[21]);
			element[21].focus();
			return false;
		}
 		
 		//stack overflow
 		var ext = element[21].val().split('.').pop().toLowerCase();
        if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
            element[21].addClass("error");
            errorStatusHandle.text("File type is invalid. Please choose gif, png, jpg or jpeg file.");
            elementHandle[21].focus();
            return false;
        } 
		
		//Gender	
		if($('input[name=childGender]:checked').length<=0){
			$("#gender").addClass("error");
			errorStatusHandle.text(errorMessage[22]);
			return false;
		}
		else{
			$("#gender").removeClass("error");
			errorStatusHandle.text("");
		}
		
		//birthday_month
		if(isEmpty(element[23].val())){
			element[23].addClass("error");
			errorStatusHandle.text(errorMessage[23]);
			element[23].focus();
			return false;
		}
		//birthday_date
		else if(isEmpty(element[30].val())){
			element[30].addClass("error");
			errorStatusHandle.text(errorMessage[30]);
			element[30].focus();
			return false;
		}
		//birthday_year
		else if(isEmpty(element[31].val())){
			element[31].addClass("error");
			errorStatusHandle.text(errorMessage[31]);
			element[31].focus();
			return false;
		}
		else
		{
            if(!checkDate()){
             	return false;
			}
        }

		//emergency first name
		if(isEmpty(element[26].val())){
			element[26].addClass("error");
			errorStatusHandle.text(errorMessage[26]);
			element[26].focus();
			return false;
		}
		
		//emergency last name
		if(isEmpty(element[32].val())){
			element[32].addClass("error");
			errorStatusHandle.text(errorMessage[32]);
			element[32].focus();
			return false;
		}
		
		//emergency phone number
		if(isEmpty(element[27].val())){
			element[27].addClass("error");
			errorStatusHandle.text(errorMessage[27]);
			element[27].focus();
			return false;
		}
		
		//emergency Contact's Phone Number   
        if(element[27].val().length != 3) {
            element[27].addClass("error");
            errorStatusHandle.text("The phone area code must have exactly three digits")
            element[27].focus();            
            return false;
        }
			
		if(!$.isNumeric(element[27].val())) {
            element[27].addClass("error");
            errorStatusHandle.text("The area code appears to be invalid, "+
            "please enter numbers only");
            element[27].focus();            
            return false;
        }
		
		if(isEmpty(element[28].val())){
			element[28].addClass("error");
			errorStatusHandle.text(errorMessage[28]);
			element[28].focus();
			return false;
		}
		
		if(element[28].val().length != 3) {
            element[28].addClass("error");
            errorStatusHandle.text("The phone number prefix must have exactly three digits")
            element[28].focus();            
            return false;
        }
					           
        if(!$.isNumeric(element[28].val())) {
            element[28].addClass("error");
            errorStatusHandle.text("The phone number prefix appears to be invalid, "+
            "please enter numbers only");
            element[28].focus();            
            return false;
        }
			          
		if(isEmpty(element[29].val())){
			element[29].addClass("error");
			errorStatusHandle.text(errorMessage[29]);
			element[29].focus();
			return false;
		}
			
		if(element[29].val().length != 4) {
            element[29].addClass("error");
            errorStatusHandle.text("The phone number must have exactly four digits")
            element[29].focus();            
            return false;
        }	
						  
        if(!$.isNumeric(element[29].val())) {
            element[29].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "please enter numbers only");
            element[29].focus();            
            return false;
        }

		return true;
}//function isValidData()
element[1].focus();     

//validating the date
function checkDate() { 
    var monthCheck = document.getElementById("birthday_mm").value;
    var dayCheck = document.getElementById("birthday_dd").value;
    var yearCheck = document.getElementById("birthday_yyyy").value;
        
    var checkDate = new Date(yearCheck, monthCheck - 1, dayCheck);
    var checkDay = checkDate.getDate();
    var checkMonth = checkDate.getMonth() + 1;
    var checkYear = checkDate.getFullYear();
        
    //for showing error to user
    var dobError = document.getElementById("dobError");
    var birthday_mm = document.getElementById("birthday_mm");
    var birthday_dd = document.getElementById("birthday_dd");
    var birthday_yyyy = document.getElementById("birthday_yyyy");
    var d = new Date();

    if (dayCheck == checkDay && monthCheck == checkMonth && yearCheck == checkYear && yearCheck <= d.getFullYear()) {
        return checkAge(checkDate,dobError,birthday_mm);
    }
    else {
        element[23].addClass("error");
        errorStatusHandle.text("This date does not appear to be valid")
        birthday_mm.value="";
        birthday_dd.value="";
        birthday_yyyy.value="";
        return false;
    }
}//function checkDate()

//validating the age
function checkAge(checkDate,errorId,monthReturn) {  
	var ageBy = new Date("2016", "05", "01"); 
    var age = ageBy.getFullYear() - checkDate.getFullYear();
    var m = ageBy.getMonth() - checkDate.getMonth();
    if (m < 0 || m == 0 && ageBy.getDate() < checkDate.getDate()) {
		age--;
    }
    if (age < 7 || age > 16) {
        var birthday_dd = document.getElementById("birthday_dd");
        var birthday_yyyy = document.getElementById("birthday_yyyy");
        monthReturn.value="";
        birthday_dd.value="";
        birthday_yyyy.value="";
        element[23].addClass("error");
        errorStatusHandle.text("Your child does not fit our age requirements");
        return false;
    }
    return true;
}// function checkAge
      
// HANDLERS //
function blurHandler(index){
	element[index].on('blur',function(){
		element[index].removeClass("error");
		errorStatusHandle.text("");
	}
);}
		
for(var i=0; i<=32; i++){
	blurHandler(i);
}
   
	element[8].on('keyup', function() { //state
        element[8].val(element[8].val().toUpperCase());
    });
		
    element[8].on('keyup', function() { //state
    	if(element[8].val().length == 2)
        	element[9].focus();
    });
	
	element[9].on('keyup', function() { //zipcode
    	if(element[9].val().length == 5)
        	element[10].focus();
    });
			   
    element[10].on('keyup', function() { //home phone area code
    	if(element[10].val().length == 3)
        	element[11].focus();
    });
            
    element[11].on('keyup', function() { // home phone prefix
    	if(element[11].val().length == 3)
        	element[12].focus();
    });            
	
	element[12].on('keyup', function() { // home phone
    	if(element[12].val().length == 4)
        	element[13].focus();
    }); 
			
	element[13].on('keyup', function() {
    	if(element[13].val().length == 3)
    		element[14].focus();
    });
            
    element[14].on('keyup', function() {
    	if(element[14].val().length == 3)
        	element[15].focus();
    });            
	
	element[15].on('keyup', function() {
        if(element[15].val().length == 4)
            element[16].focus();
    }); 
			
   	element[27].on('keyup', function() {
        if(element[27].val().length == 3)
            element[28].focus();
    });
            
    element[28].on('keyup', function() {
        if(element[28].val().length == 3)
            element[29].focus();
	});
			 
// AJAX //
    
  	$(':submit').on('click', function() {
        var valid = submitValidation();
        if(!valid) 
            return false;
        else {
			var data = $('#signUpForm').serialize();
			var url = "check_dup.php";
       		var req = new HttpRequest(url, handleData);
        	req.send(data);
        	$('#busy_wait').css('visibility','visible');
        }
        return false; 
  	});

	function submitValidation()
	{
    	for (var i=0; i<=32; i++)
            element[i].removeClass("error");
        errorStatusHandle.text("");
    	return isValidData();
    }
    
	$(':reset').on('click', function() {
        for(var i=0; i <=32; i++)
            element[i].removeClass("error");
        errorStatusHandle.text("");
    });                                       

}); //document.ready

function handleData(response) {
	$('#busy_wait').css('visibility','hidden');
    var answer = $.trim(response);
	if(answer === "DUP")
		$('#message_line').text("Sorry, your record appears to be duplicate.");
    else { 
    	//$('#message_line').text("This record is OK, not a duplicate.");
       	$("#signUpForm").submit();
    }
}        
