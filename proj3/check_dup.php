<?php

function get_db_connection() 
{
	$server = 'opatija.sdsu.edu:3306';
	$user = 'jadrn046';
	$password = 'plastic';
	$database = 'jadrn046';  	
	
	if(!($db = mysqli_connect($server, $user, $password, $database)))
	{
		write_error_page("Database connection failed");
	}
	return $db;
}
	
	$db = get_db_connection();
    
    $parent_id = 0;
    $parent_fname = $_POST['parentfirstname'];
    $parent_lname = $_POST['parentlastname'];
    $emailadd = $_POST['emailaddress'];
    $parent_phone= $_POST['phone_areacode']."-".$_POST['phone_prefix']."-".$_POST['phone_extension'];
    $sql ="SELECT id from parent WHERE first_name='$parent_fname' AND 
	last_name='$parent_lname' AND email='$emailadd' AND primary_phone='$parent_phone';";
    $result = mysqli_query($db,$sql);
		
 	if(mysqli_num_rows($result) >0) {
 	    $row = mysqli_fetch_array($result);
        $parent_id = $row[0];
    }
        
    $child_id = 0;
    $cfname = $_POST['childfirstname'];
    $clname = $_POST['childlastname'];
    $bdate = $_POST['birthday_yyyy']."-".$_POST['birthday_mm']."-".$_POST['birthday_dd'];
    
    $childSql ="SELECT id from child WHERE parent_id=$parent_id AND  
    first_name='$cfname' AND last_name='$clname' AND birthdate='$bdate';";     
    $result = mysqli_query($db,$sql);
		
    if(mysqli_num_rows($result) >0) {
        $row = mysqli_fetch_array($result);
        $child_id = $row[0];
    }

    $enrollment = 0;
    $program = $_POST['programSelection']; 
    for($i = 0; $i < count($program); $i++) {
    	$sql = "SELECT * from enrollment WHERE program_id={$program[$i]} AND child_id=$child_id;";
        $result = mysqli_query($db,$sql);
		
 		if(mysqli_num_rows($result) >0) {
            $row = mysqli_fetch_array($result);
            $enrollment = 1;
        }
    }

    if($parent_id && $child_id && $enrollment) //all>0
        echo "DUP";
    else 
    	echo "OK"
?>    
