<!DOCTYPE html>
<head>
    <meta charset=utf-8>
	<title>Happy Days Summer Camp</title>
	<link rel="stylesheet" type="text/css" href="main.css" />
</head>

<body>

<?php

include('helpers.php');

echo <<<ENDBLOCK
	<div id="top_level">
  		<div class="clear_it"></div>
    	<img id="image" alt="Happy Days Summer Camp" src="images/1.png" /> 
    	<h1>Happy Days Summer Camp Registration!!</h1>
	</div>
 	
 	<div id="confirm_container">

ENDBLOCK;

	$programCount = 6;
	for($i=1;$i<=$programCount;$i++) 
    {
		$res = getProgramRoster($i); // from helpers.php
    	if ($res->num_rows > 0) 
    	{
    		$count = 0;
    		while($row = $res->fetch_assoc()) 
    		{
    			if($count==0) 
    			{
     				echo '<div class="centerReport">';
     				echo "<h2>". $row['description']." </h2>";
     				echo '<table class="report">';
     				echo '<th> Photo </th>';
     				echo '<th> Child Details </th>';
     				echo '<th> Parent/Emergency Details </th>';
     				$count++;
    			}
     		echo '<tr>';
     		echo '<tr>';
     		
     		echo '<td id="reportImageColumn">';
     		echo '<img src=ugs_p3/'.str_replace(' ', '%20', $row['image_filename']).' width="200px" />';
     		echo '</td>';
     		
			echo '<td class="reportColumn">';
     		echo ' <p> <b>Name :</b> '.$row['first_name'].' '.$row['last_name'].'</p>';
     		echo ' <p> <b>Nickname :</b> '.$row['nickname'].'</p>';
     		echo ' <p> <b>Age :</b> '.$row['age'].'</p>';
     		echo ' <p> <b>Gender :</b> '.$row['gender'].'</p>';
   		   	echo '</td>';
			
			echo '<td class="reportColumn">';
     		echo ' <p> <b>Name :</b> '.$row['pfn'].' '.$row['pln'].'</p>';
     		echo ' <p> <b>Primary Phone :</b> '.$row['primary_phone'].'</p>';
     		echo ' <p> <b>Emergency Contact :</b> '.$row['emergency_name'].'</p>';
     		echo ' <p> <b>Emergency Phone :</b> '.$row['emergency_phone'].'</p>';
   		   	echo '</td>';

     		echo '</tr>';
     		echo '</tr>';
    		} // while
     	echo '</table>';
     	echo '</div>';
     	} //if
	} //for
    
    if($count == 0) {
    	echo '<h1>No data available for Report</h1>';
    }
echo "</div>";
echo "</body>";
echo "</html>";

?>

