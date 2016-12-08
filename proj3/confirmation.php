<!DOCTYPE html>
<head>
    <meta charset=utf-8>
	<title>Happy Days Summer Camp</title>
	<link rel="stylesheet" type="text/css" href="main.css" />
</head>

<body>

<?php

echo <<<ENDBLOCK
	<div id="top_level">
  		<div class="clear_it"></div>
    	<img id="image" alt="Happy Days Summer Camp" src="images/1.png" /> 
    	<h1>Happy Days Summer Camp!!</h1>
	</div>
 	
 	<div id="confirm_container">
	
	<h1> Enrollment is successful !! </h1>
	<h1> Hey $parentFirstName, thank you for registering $childFirstName.</h1>
    
    <table class='enrollTable'>
        <tr>
            <td>Child Name</td>
            <td>$childFirstName $childLastName</td>
        </tr>
        <tr>
            <td>Photo</td>
            <td><img src=ugs_p3/$childPhotoPath width='200px' /></td>
        </tr>
       	<tr>
            <td>Programs Enrolled</td>
            <td>
ENDBLOCK;
		for($i = 0; $i < count($program); $i++) 
		{
			if($program[$i]==1)
				echo "Basketball Camp";
			if($program[$i]==2)
				echo "Baseball Camp";
			if($program[$i]==3)
				echo "Physical Training";
			if($program[$i]==4)
				echo "Band Camp";
			if($program[$i]==5)
				echo "Swimming";
			if($program[$i]==6)
				echo "Nature Discovery";
			echo "<br/>";
    	}
echo <<<ENDBLOCK
		</td>
        </tr>
       	<tr>
            <td>Birth Date (yyyy-mm-dd)</td>
            <td>$fullBirthday</td>
        </tr>
        <tr>
            <td>Address</td>
            <td>$address1</td>
        </tr>
        <tr>
            <td>City</td>
            <td>$city</td>
        </tr>
        <tr>
            <td>State</td>
            <td>$state</td>
        </tr>
        <tr>
            <td>Zip Code</td>
            <td>$zip</td>
        </tr>
        <tr>
            <td>Contact No.</td>
            <td>$fullHomePhone</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>$email</td>
        </tr>
        <tr>
            <td>Emergency Contact</td>
            <td>$emergencyName</td>
        </tr> 
        <tr>
            <td>Emergency Contact No.</td>
            <td>$fullEmergencyPhone</td>
        </tr> 
    </table>   
    <br/>
    <br/>
    
    <div id="enrollpagebutton">
    	<a id="home" href="index.html"> Back to Home Page </a> 
	</div> 
	</div>
ENDBLOCK;

?>

</body>
</html>
