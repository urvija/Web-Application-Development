<?php

$bad_chars = array('$','%','?','<','>','php');

function check_post_only() 
{
	if(!$_POST) 
	{
    	write_error_page("This script can only be called from a form.");
    	exit;
	}
}

function write_error_page($msg) 
{
    write_header();
    echo "<h2>Sorry, an error occurred<br />",
    $msg,"</h2>";
    write_footer();
}
    
function write_header() 
{
print <<<ENDBLOCK
<!DOCTYPE html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <title>Happy Days Summer Camp</title>
	<link rel="stylesheet" type="text/css" href="main.css" />
</head>
<body>    
ENDBLOCK;
}

function write_footer() 
{
    echo "</body></html>";
}

// database functions
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

function getProgramRoster($programId) 
{      
	$db = get_db_connection();
	
	$sql = "SELECT child.first_name, child.last_name, child.nickname, image_filename, gender, TIMESTAMPDIFF(YEAR,birthdate,CURDATE()) 
	AS age, program.description, parent.first_name AS pfn, parent.last_name AS pln, parent.primary_phone, child.emergency_name, 
	child.emergency_phone from child JOIN enrollment ON child.id=enrollment.child_id 
	JOIN program ON enrollment.program_id=program.id JOIN parent ON child.parent_id = parent.id WHERE program_id='$programId'";

    if(!($result = mysqli_query($db, $sql))) 
    {
		echo "Query for getting Program Roaster failed.";
		return 0;
    }
    return $result;
	mysqli_close($db);		
}

function do_insertion($query) 
{      
	$db = get_db_connection();
    
    if(!($result = mysqli_query($db, $query))) 
    {
    	echo "Insertion did not happen.";
		return 0;
    }
    $id =  mysqli_insert_id($db);
	mysqli_close($db);	
	return $id;	
}	
	
function isDuplicateEntry($enrollArr) 
{
	$db = get_db_connection();
    $status = false;
    
    $parent_id = 0;
    $sql ="SELECT id from parent WHERE first_name='$enrollArr[0]' AND 
	last_name='$enrollArr[1]' AND email='$enrollArr[2]' AND primary_phone='$enrollArr[3]';";
    $result = mysqli_query($db,$sql);
    if(mysqli_num_rows($result) >0) {
        $row = mysqli_fetch_array($result);
        $parent_id = $row[0];
    }
        
    $child_id = 0;
    $childSql ="SELECT id from child WHERE parent_id=$parent_id AND  
    first_name='$enrollArr[4]' AND last_name = '$enrollArr[5]' AND birthdate='$enrollArr[6]';";     
    $result = mysqli_query($db,$sql);
    if(mysqli_num_rows($result) >0) {
        $row = mysqli_fetch_array($result);
        $child_id = $row[0];
    }

    $enrollment = 0;
    for($i = 0; $i < count($enrollArr[8]); $i++) {
        $sql = "SELECT * from enrollment WHERE program_id={$enrollArr[8][$i]} AND child_id=$child_id;";
        $result = mysqli_query($db,$sql);
		if(mysqli_num_rows($result) >0) {
            $row = mysqli_fetch_array($result);
            $enrollment = 1;
        } //if
    } //for
                
    if($parent_id && $child_id && $enrollment) { // all>0
        write_error_page("Your record appears to be duplicate");
        $status = false;
        exit;
    }
    elseif($parent_id != 0 && $parent_id == $child_id && $enrollment == 0) {
    	$program_insertion_id = 0;
    	for($i = 0; $i < count($enrollArr[8]); $i++) {
			$programStatement = "INSERT INTO enrollment VALUES({$enrollArr[8][$i]}, $child_id)";
    		$program_insertion_id =  do_insertion($programStatement);
    	}
    	$status = false;
    }
    else  { //all=0
    	$status = true; 
	}
    return $status;
}         

?>

