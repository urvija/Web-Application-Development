<?php

$IMAGE_DIR = 'ugs_p3/';
$HOME_DIR = '/home/jadrn046/public_html/proj3/ugs_p3/';

    $parentFirstName = $parentMiddleName = $parentLastName = $relation = $address1 = 
    $address2 = $city  = $state = $zip = $areaHomePhone = $prefixHomePhone = $homePhone = 
    $areaCellPhone = $prefixCellPhone = $cellPhone = $email = $childFirstName = $childMiddleName = 
    $childLastName = $alias = $photoupload = $childGender = $birthMonth = $birthDate = 
    $birthYear = $medicalCondition = $specialDietaryRequirement = $emergencyFirstName = $emergencyLastName = 
    $areaEmergencyPhone = $prefixEmergencyPhone = $emergencyPhone = $fullBirthday = 
    $fullHomePhone= $fullCellPhone = $fullEmergencyPhone=$childPhoto="";

    global $bad_chars;

if(!empty($_POST))
{
    $program = $_POST['programSelection']; 
	$parentFirstName = trim(str_replace($bad_chars, "", $_POST['parentfirstname'])); 
	$parentMiddleName = trim(str_replace($bad_chars, "", $_POST['parentmiddlename'])); 
	$parentLastName = trim(str_replace($bad_chars, "", $_POST['parentlastname'])); 
	$relation = trim(str_replace($bad_chars, "", $_POST['relationshiptochild'])); 
	$address1 = trim(str_replace($bad_chars, "", $_POST['address1'])); 
	$address2 = trim(str_replace($bad_chars, "", $_POST['address2'])); 
	$city = trim(str_replace($bad_chars, "", $_POST['city'])); 
	$state = trim(str_replace($bad_chars, "", $_POST['state'])); 
	$zip = trim(str_replace($bad_chars, "", $_POST['zipcode'])); 
	$areaHomePhone = trim(str_replace($bad_chars, "", $_POST['phone_areacode'])); 
	$prefixHomePhone = trim(str_replace($bad_chars, "", $_POST['phone_prefix'])); 
	$homePhone = trim(str_replace($bad_chars, "", $_POST['phone_extension'])); 
	$areaCellPhone = trim(str_replace($bad_chars, "", $_POST['phoneareacode'])); 
	$prefixCellPhone = trim(str_replace($bad_chars, "", $_POST['phoneprefix'])); 
	$cellPhone = trim(str_replace($bad_chars, "", $_POST['phoneextension'])); 
	$email = trim(str_replace($bad_chars, "", $_POST['emailaddress'])); 
	$childFirstName = trim(str_replace($bad_chars, "", $_POST['childfirstname']));
	$childMiddleName = trim(str_replace($bad_chars, "", $_POST['childmiddlename']));
	$childLastName = trim(str_replace($bad_chars, "", $_POST['childlastname']));
	$alias = trim(str_replace($bad_chars, "", $_POST['nickname']));
	$childGender = trim(str_replace($bad_chars, "", $_POST['childGender']));
	$birthMonth = trim(str_replace($bad_chars, "", $_POST['birthday_mm']));
	$birthDate = trim(str_replace($bad_chars, "", $_POST['birthday_dd']));
	$birthYear = trim(str_replace($bad_chars, "", $_POST['birthday_yyyy']));
	$medicalCondition = trim(str_replace($bad_chars, "", $_POST['medicalcondition']));
	$specialDietaryRequirement = trim(str_replace($bad_chars, "", $_POST['specialdietaryrequirements']));
	$emergencyFirstName = trim(str_replace($bad_chars, "", $_POST['emergencyfirstname']));
	$emergencyLastName = trim(str_replace($bad_chars, "", $_POST['emergencylastname']));
	$areaEmergencyPhone = trim(str_replace($bad_chars, "", $_POST['ephone_areacode']));
	$prefixEmergencyPhone = trim(str_replace($bad_chars, "", $_POST['ephone_prefix']));
	$emergencyPhone = trim(str_replace($bad_chars, "", $_POST['ephone_extension']));
	
    $msg = "";
    
    if(empty($program))
    	$msg .= "Please select at least one program<br />";
    if(strlen($parentFirstName) == 0) 
        $msg .= "Please enter parent's first name<br />";
    if(strlen($parentLastName) == 0)
        $msg .= "Please enter parent's last name<br />";  
    if(strlen($relation) == 0)
        $msg .= "Please select relationship to the child <br />";  
    if(strlen($address1) == 0)
        $msg .= "Please enter the address<br />"; 
    if(strlen($city) == 0)
        $msg .= "Please enter the city<br />";
    if(strlen($state) == 0)
        $msg .= "Please enter the state<br />"; 
    elseif(!isValidState(strtoupper($state)))
			$msg .= "please use the appropriate two letter state abbreviation <br />";
    if(strlen($zip) == 0)
        $msg .= "Please enter the zip code<br />";
    elseif(!is_numeric($zip)) 
        $msg .= "Zip code may contain only numeric digits<br />";
	elseif(strlen($zip) != 5) 
        $msg .= "The zip code must have exactly five digits<br />";
    if(strlen($areaHomePhone) == 0)
        $msg .= "Please enter parent's phone area code<br />";
    elseif(!is_numeric($areaHomePhone))
    	$msg .= "please enter valid area code. only numbers are allowed<br />";
    elseif(strlen($areaHomePhone) != 3)
        $msg .= "Please enter 3 digits in parent's phone area code<br />";
    
    if(strlen($prefixHomePhone) == 0)
        $msg .= "Please enter parent's phone prefix<br />";
    elseif(!is_numeric($prefixHomePhone))
    	$msg .= "please enter valid prefix for parent's phone. only numbers are allowed<br />";
    elseif(strlen($prefixHomePhone) != 3)
        $msg .= "Please enter 3 digits in parent's phone prefix<br />";
    
    if(strlen($homePhone) == 0)
        $msg .= "Please enter parent's phone number<br />";
    elseif(!is_numeric($homePhone))
    	$msg .= "please enter valid number for parent's phone. only numbers are allowed<br />";
    elseif(strlen($homePhone) != 4)
        $msg .= "Please enter 4 digits in parent's phone number<br />";
   
   	if(strlen($areaCellPhone) != 0 && strlen($prefixCellPhone) != 0 && strlen($cellPhone) != 0) {
    	if(!is_numeric($areaCellPhone))
    		$msg .= "please enter valid cellphone area code<br />";
    	elseif(strlen($areaCellPhone) != 3)
        	$msg .= "Please enter 3 digit cellphone area code<br />";
  	  	
  	  	if(!is_numeric($prefixCellPhone))
    		$msg .= "please enter valid cellphone prefix<br />";
    	elseif(strlen($prefixCellPhone) != 3)
        	$msg .= "Please enter 3 digit cellphone prefix<br />";
    
    	if(!is_numeric($cellPhone))
    		$msg .= "please enter valid cellphone<br />";
    	elseif(strlen($cellPhone) != 4)
       		$msg .= "Please enter 4 digits in cellphone<br />";
    }
    
    if(strlen($email) == 0)
        $msg .= "Please enter email<br />";
    elseif(!filter_var($email, FILTER_VALIDATE_EMAIL))
        $msg .= "Your email appears to be invalid<br/>";        
    
    if(strlen($childFirstName) == 0)
        $msg .= "Please enter child's first name<br />"; 
    if(strlen($childLastName) == 0)
        $msg .= "Please enter child's last name<br />"; 
    if(empty($childGender))
		$msg .= "Please select gender <br />";
	
	if(strlen($birthMonth) == 0 && strlen($birthDate) == 0 && strlen($birthYear) == 0)
		$msg .= "Please enter child's birthdate<br />"; 
	elseif(strlen($birthMonth) == 0)
        $msg .= "Please enter month<br />"; 
    elseif(strlen($birthDate) == 0)
        $msg .= "Please enter Date<br />"; 
    elseif(strlen($birthYear) == 0)
        $msg .= "Please enter Year<br />"; 
    else 
    {
    	if(!checkdate($birthMonth, $birthDate, $birthYear))
        	$msg .= "The date appears to be invalid. <br />";
        else
        {
        	if(!checkAge($birthMonth, $birthDate, $birthYear))
        		$msg .= "Your child does not fit into our age requirements.<br />";
    	}
    }
   
    if(strlen($emergencyFirstName) == 0) 
        $msg .= "Please enter emergency contact's first name<br />";
    if(strlen($emergencyLastName) == 0)
        $msg .= "Please enter emergency contact's last name<br />";  
    
    if(strlen($areaEmergencyPhone) == 0)
        $msg .= "Please enter emergency contact's phone area code<br />";
    elseif(!is_numeric($areaEmergencyPhone))
    	$msg .= "please enter valid emergency contact's area code. only numbers are allowed<br />";
    elseif(strlen($areaEmergencyPhone) != 3)
        $msg .= "Please enter 3 digits in emergency contact's phone area code<br />";
    
    if(strlen($prefixEmergencyPhone) == 0)
        $msg .= "Please enter emergency contact's phone prefix<br />";
    elseif(!is_numeric($prefixEmergencyPhone))
    	$msg .= "please enter valid prefix for emergency contact's phone. only numbers are allowed<br />";
    elseif(strlen($prefixEmergencyPhone) != 3)
        $msg .= "Please enter 3 digits in emergency contact's phone prefix<br />";
    
    if(strlen($emergencyPhone) == 0)
        $msg .= "Please enter emergency contact's phone number<br />";
    elseif(!is_numeric($emergencyPhone))
    	$msg .= "please enter valid number for emergency contact's phone. only numbers are allowed<br />";
    elseif(strlen($emergencyPhone) != 4)
        $msg .= "Please enter 4 digits in emergency contact's phone number<br />";
    
    if($msg) 
    {
        write_form_error_page($msg);
        exit;
    }
}//if

function isValidState($state) 
{     
	$letters = "/^[A-Za-z]+$/"; 
	if(!preg_match($letters, $state)) {
    	return false;
	}
    $stateString = "wa;or;ca;ak;nv;id;ut;az;hi;mt;wy;co;nm;nd;sd;ne;ks;ok;tx;mn;ia;mo;ar;la;wi;il;ms;mi;in;ky;tn;al;fl;ga;sc;nc;oh;wv;va;pa;ny;vt;me;nh;ma;ri;ct;nj;de;md;dc";
    if (strlen($state) == 2 && (stripos($stateString, $state.";") > -1)) {
       return true;
    } 
    else {
        return false;
    }
}  

function checkAge($month,$day,$year) 
{   
    $y = $year;
    $m = $month;
    $d = $day;
    $ageBy = new DateTime('2016-06-01');
	$birthdate = new DateTime($y.'-'.$m.'-'.$d);
	$age = $ageBy->diff($birthdate);

    if ($age->y < 7 || $age->y > 16)
    	return false;
    else
    	return true;
}// function checkAge

function write_form_error_page($msg) 
{
    write_header();
    echo "<h3>Sorry, an error occurred<br />",
    $msg,"</h3>";
    write_form();
    write_footer();
}  

function write_form() 
{
    print <<<ENDBLOCK
	<div id="container">
	
	<form  
		name="summercamp"
		action="process_request.php"
		enctype="multipart/form-data"
        method="post">
        
    <h1> Summer Camp Registration </h1>
    
    <fieldset>
        <legend>Program Selection</legend>
		
		<label class="title">Program:<span class="required">*</span></label><br /><br />
		<div id="checkboxes">
ENDBLOCK;

	echo "<input type=checkbox name=programSelection[] value=1 id=camp1 ";
	if(in_array(1,$_POST[programSelection]))
		echo  "checked />";
	echo "<label> Basketball</label>";

	echo "<input type=checkbox name=programSelection[] value=2 id=camp2 ";
	if(in_array(2,$_POST[programSelection]))
		echo  "checked />";
	echo "<label> Baseball</label>";

	echo "<input type=checkbox name=programSelection[] value=3 id=camp3 ";
	if(in_array(3,$_POST[programSelection]))
		echo  "checked />";
	echo "<label> Physical Training</label>";
	
	echo "<input type=checkbox name=programSelection[] value=4 id=camp4 ";
	if(in_array(4,$_POST[programSelection]))
		echo  "checked />";
	echo "<label> Band Camp</label>";

	echo "<input type=checkbox name=programSelection[] value=5 id=camp5 ";
	if(in_array(5,$_POST[programSelection]))
		echo  "checked />";
	echo "<label> Swimming</label>";
	
	echo "<input type=checkbox name=programSelection[] value=6 id=camp6 ";
	if(in_array(6,$_POST[programSelection]))
		echo  "checked />";
	echo "<label> Nature Discovery</label>";

	print <<<ENDBLOCK
        </div>   
    
    <div id="program_message"> </div> 
	</fieldset>                  
	
	<fieldset>
        <legend>Parent/Primary Guardian Information</legend>
        
        <ul class="parent_info">
            <li><label class="title">Name:</label></li>
            <li><label class="listitem">First Name<span class="required">*</span></label>
                <input type="text" name="parentfirstname" id="parentfirstname" value="$_POST[parentfirstname]" size="25" /></li>       
			<li><label class="listitem">Middle Name</label>
                <input type="text" name="parentmiddlename" id="parentmiddlename" value="$_POST[parentmiddlename]" size="25" /></li>  
 			<li><label class="listitem">Last Name<span class="required">*</span></label>
                <input type="text" name="parentlastname" id="parentlastname" value="$_POST[parentlastname]" size="25" /></li> 
        </ul>
     
        <ul class="parent_info">     
            <li><label class="title">Relationship to Child:<span class="required">*</span></label>
            
ENDBLOCK;

if($_POST['relationshiptochild'] == 'Father')
{
	echo "<select name=relationshiptochild id=relationshiptochild >";
    echo "<option value=''>Select</option>";
    echo "<option value=Father selected >Father</option>";
    echo "<option value=Mother>Mother</option>";
    echo "<option value=Guardian>Guardian</option>";                             
    echo "</select>";    
    echo "</li>";
    echo "</ul>" ;
}
elseif($_POST['relationshiptochild'] == 'Mother')
{
	echo "<select name=relationshiptochild id=relationshiptochild >";
    echo "<option value=''>Select</option>";
    echo "<option value=Father>Father</option>";
    echo "<option value=Mother selected>Mother</option>";
    echo "<option value=Guardian>Guardian</option>";                             
    echo "</select>";    
    echo "</li>";
    echo "</ul>" ;
}
elseif($_POST['relationshiptochild'] == 'Guardian')
{
	echo "<select name=relationshiptochild id=relationshiptochild >";
    echo "<option value=''>Select</option>";
    echo "<option value=Father>Father</option>";
    echo "<option value=Mother>Mother</option>";
    echo "<option value=Guardian selected>Guardian</option>";                             
    echo "</select>";    
    echo "</li>";
    echo "</ul>";
}
else
{
	echo "<select name=relationshiptochild id=relationshiptochild >";
    echo "<option value=''>Select</option>";
    echo "<option value=Father>Father</option>";
    echo "<option value=Mother>Mother</option>";
    echo "<option value=Guardian>Guardian</option>";                             
    echo "</select>";    
    echo "</li>";
    echo "</ul>" ;
}

	print <<<ENDBLOCK1
        <ul class="parent_info"> 
            <li><label class="title">Address:</label></li>
            <li><label class="listitem">Address 1<span class="required">*</span></label>
           		<input type="text" name="address1" id="address1" value="$_POST[address1]" size="25" /></li> 
     		<li><label class="listitem">Address 2</label>
            	<input type="text" name="address2" id="address2" value="$_POST[address2]" size="25" /></li>
            <li><label class="listitem">City<span class="required">*</span></label>
            	<input type="text" name="city" id="city" value="$_POST[city]" size="20" /> </li>
            <li><label class="listitem">State<span class="required">*</span></label>
            	<input type="text" name="state" id="state" value="$_POST[state]" size="2" maxlength="2" placeholder="CA" /></li>
            <li><label class="listitem">Zip<span class="required">*</span></label>
            	<input name="zipcode" id="zipcode" value="$_POST[zipcode]" size="5" maxlength="5" /></li>
        </ul>
     
        <ul class="parent_info">   
            <li><label class="title">Phone Number:</label></li>
            <li><label class="listitem">Home Phone<span class="required">*</span></label>
                (<input type="text" name="phone_areacode" value="$_POST[phone_areacode]" size="3" id="homephonearea" maxlength="3" placeholder="xxx"/>)
                <input type="text" name="phone_prefix" value="$_POST[phone_prefix]" size="3" id="homephoneprefix" maxlength="3" placeholder="xxx"/>
                <input type="text" name="phone_extension" value="$_POST[phone_extension]" size="4" id="homephoneextension" maxlength="4" placeholder="xxxx"/>
            </li>     
     		<li><label class="listitem">Cell Phone</label>
                (<input type="text" name="phoneareacode" value="$_POST[phoneareacode]" size="3" id="cellphone" maxlength="3" placeholder="xxx"/>)
                <input type="text" name="phoneprefix" value="$_POST[phoneprefix]" size="3" maxlength="3" placeholder="xxx"/> 
                <input type="text" name="phoneextension" value="$_POST[phoneextension]" size="4" maxlength="4" placeholder="xxxx"/>
            </li> 
        </ul>
     
        <ul class="parent_info">
            <li><label class="title">E-Mail: <span class="required">*</span></label>
                <input type="text" name="emailaddress" id="emailaddress" value="$_POST[emailaddress]" size="40" /></li>       
        </ul> 

    <div id="parent_message"> </div>                 
	</fieldset>
        	
	<fieldset>
    <legend>Child Information</legend>
		<ul class="child_info">
			<li><label class="title">Name:</label></li> 
            <li><label class="listitem">First Name<span class="required">*</span></label>   
                <input type="text" name="childfirstname" id="childfirstname" value="$_POST[childfirstname]" size="25" /></li>
            <li><label class="listitem">Middle Name</label>
				<input type="text" name="childmiddlename" id="childmiddlename" value="$_POST[childmiddlename]" size="25" /></li>  
 			<li><label class="listitem">Last Name<span class="required">*</span></label>
                <input type="text" name="childlastname" id="childlastname" value="$_POST[childlastname]" size="25" /></li> 
        </ul>  
  
        <ul class="child_info">
            <li><label class="title">Name the Child goes by:</label>
                <input type="text" name="nickname" id="nickname" value="$_POST[nickname]" size="30" /></li> 
        </ul>   

        <ul class="child_info">    
			<li><label class="title">Photo: <span class="required">*</span></label>
				<input type="file" name="photoupload" id="photoupload" value="$_POST[photoupload]" accept="image/*" /></li>
        </ul>
  
        <ul class="child_info">
			<li><label class="title">Gender: <span class="required">*</span></label>
        	<div id="gender">
ENDBLOCK1;

if($_POST['childGender'] == 'male')
{
	echo "<input type=radio value=male name=childGender id=gendermale checked/>";
	echo " Male ";
	echo "<input type=radio value=female name=childGender id=genderfemale />";
	echo " Female";
}
elseif ($_POST['childGender'] == 'female')
{
	echo "<input type=radio value=male name=childGender id=gendermale/>";
	echo " Male ";
	echo "<input type=radio value=female name=childGender id=genderfemale checked/>";
	echo " Female";	 
}
else
{
	echo "<input type=radio value=male name=childGender id=gendermale/>";
	echo " Male ";
	echo "<input type=radio value=female name=childGender id=genderfemale/>";
	echo " Female";	 
}

print <<<ENDBLOCK2

            </div>
            </li>
        </ul>

        <ul class="child_info">
            <li><label class="title">Date of Birth: <span class="required">*</span></label></li>
			<li><label class="listitem">mm</label> 
                <input type="text" name="birthday_mm" id="mm" value="$_POST[birthday_mm]" size="2" maxlength="2"/> / </li> 
            <li> <label class="listitem">dd</label> 
            	<input type="text" name="birthday_dd" id="dd" size="2" value="$_POST[birthday_dd]" maxlength="2"/> / </li> 
    		<li> <label class="listitem">yyyy</label>
                <input type="text" name="birthday_yyyy" id="yyyy" size="4" value="$_POST[birthday_yyyy]" maxlength="4"/></li>
        </ul>
     
        <ul class="child_info">    
            <li><label class="title">Medical Conditions:</label>
                <textarea rows="5" cols="80" name="medicalcondition" id="medicalcondition" value="$_POST[medicalcondition]">
            	</textarea></li>
 			<li><label class="title">Special Dietary Requirements:</label>
                <textarea rows="5" cols="80" name="specialdietaryrequirements" id="specialdietaryrequirements" value="$_POST[specialdietaryrequirements]">
            	</textarea></li>
        </ul>
        
    <div id="child_message"> </div>  
	</fieldset>   

	<fieldset>
    <legend>Secondary Emergency Contact</legend>
        <ul class="emergency_info">
            <li><label class="title">Name: <span class="required">*</span></label></li>    
            <li><label class="listitem">First Name</label>        
                <input type="text" name="emergencyfirstname" id="emergencyfirstname" value="$_POST[emergencyfirstname]" size="25" /></li>
			<li><label class="listitem">Last name</label>
                <input type="text" name="emergencylastname" id="emergencylastname" value="$_POST[emergencylastname]" size="25" /></li>
        </ul>
     
        <ul class="emergency_info">     
            <li><label class="title">Contact: <span class="required">*</span></label></li>
            <li><label class="listitem">Phone</label>
                (<input type="text" name="ephone_areacode" size="3" id="ephonearea" value="$_POST[ephone_areacode]" maxlength="3" placeholder="xxx"/>)
                <input type="text" name="ephone_prefix" size="3" id="ephoneprefix" value="$_POST[ephone_prefix]" maxlength="3" placeholder="xxx"/>
                <input type="text" name="ephone_extension" size="4" id="ephoneextension" value="$_POST[ephone_extension]" maxlength="4" placeholder="xxxx"/> 
            </li> 
        </ul>
            
    <div id="emergency_message"> </div>  
	</fieldset>   
       
    <div id="enrollpagebutton">  
        <input type="submit" value="Submit" name="submit" class="enrollpagebutton" />
        <input type="reset" value="Reset" name="reset" class="enrollpagebutton" />
    </div>   
     
	</form> 
	     
	</div>
ENDBLOCK2;
} // write_form()                  

	$fullHomePhone = $areaHomePhone."-".$prefixHomePhone."-".$homePhone;
	$fullCellPhone = $areaCellPhone."-".$prefixCellPhone."-".$cellPhone;
	$emergencyName = $emergencyFirstName." ".$emergencyLastName;
	$fullBirthday =  $birthYear."-".$birthMonth."-".$birthDate;
	$fullEmergencyPhone = $areaEmergencyPhone."-".$prefixEmergencyPhone."-".$emergencyPhone;
	$fname = $_FILES['photoupload']['name'];
    $childPhotoPath = $fname;
    
	if($_FILES['photoupload']['error'] > 0) 
	{
    	$err = $_FILES['photoupload']['error'];	
    	if($err == 1) {
			echo "The file was too big to upload, the limit is 2MB<br />";
        	exit;
    	} 	
    	else if($err == 4) {
    		echo "Photo is missing. Please upload photo.";
    		exit;
    	} 
    	else if($err != 0) {
    		echo "Error while uploading photo.";
    		exit;
    	}
	}
	
	else if($fname != "" && $fname != null) 
	{
    	$extension = pathinfo($fname, PATHINFO_EXTENSION);
    	if($extension == "gif" || $extension == "GIF" || $extension == "png" || $extension == "PNG" || $extension == "JPEG" || $extension == "jpeg" || $extension == "jpg" || $extension == "JPG")
    	{//valid file
    	} 
    	else {
    		echo "Invalid image file. Only jpeg/gif/png/jpg files are allowed";
       		exit;
    	} 
   		move_uploaded_file($_FILES['photoupload']['tmp_name'], "$IMAGE_DIR".$fname);
   	
   	$childInfoArr = array($parentFirstName, $parentLastName, $email, $fullHomePhone, $childFirstName, $childLastName, $fullBirthday, $childPhotoPath, $program);
    
    if(isDuplicateEntry($childInfoArr)) {
		$child_id = 0;
   		$parent_id = 0;
   		$program_insertion_id = 0;
	
		$statement = "INSERT INTO parent VALUES('0','$parentFirstName','$parentMiddleName','$parentLastName','$address1','$address2', '$city',
		'$state','$zip','$fullHomePhone','$fullCellPhone','$email');";
    
   		$parent_id =  do_insertion($statement);
   
   		if($parent_id != 0) {
     
     		$bdate = $timestamp = date('Y-m-d', strtotime($fullBirthday));
    
    		$childStatement = "INSERT INTO child VALUES('0', $parent_id, '$relation','$childFirstName','$childMiddleName','$childLastName','$alias','$childPhotoPath',
   			'$childGender','$bdate','$medicalCondition','$specialDietaryRequirement','$emergencyName','$fullEmergencyPhone');";
        
    		$child_id =  do_insertion($childStatement);
    	}
    	else {
    		echo "database insertion failed for child";
        	exit;
    	}
          
    	if($child_id != 0) {
    		for($i = 0; $i < count($program); $i++) {
				$programStatement = "INSERT INTO enrollment VALUES({$program[$i]}, $child_id)";
    			$program_insertion_id =  do_insertion($programStatement);
    		}
   		}
    	else {
        	echo "database insertion failed for parent";
        	exit;
    	}
	} //if
} //elseif   
  
?>   