#!/usr/bin/perl  

use DBI;
use CGI;
use CGI::Cookie

$q = new CGI;

my $cookie = $q->cookie(-name=>'jadrn046',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn046";

my $username = "jadrn046";
my $password = "plastic";

my $database_source = "dbi:mysql:$database:$host:$port";

my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';

my $v = $q->cookie('jadrn046');
@rows = split('\|\|',$v);
foreach $row (@rows) {
    ($sku, $qty) = split('\|',$row);
    my $statement =  "INSERT INTO sales VALUES('0',now(),'$sku','$qty');";
    my $count = $dbh->do($statement);
    if($count == 1) {
    		print "SUCCESS, the number of rows affected is $count\n";
    }
	else {
    		print "ERROR: ".$dbh->errstr()."<br />\n";
		    print "ERROR: ".$dbh->state()."\n";    
    }
} 

print<<END_CONTENT;
Content-type: text/html

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">   

<head>
	<title>Bertha's Deluxe Chocolates</title>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="/~jadrn046/proj4/main.css" />
	
</head>

<body>
	<div id="top_level">
		<div id="heading">
            <h1 id="headingname">Bertha's Deluxe Chocolates</h1>
        </div>

		<div id="navigation">
		<ul>
			<li><a href="/~jadrn046/proj4/index.html">Home</a></li>
			<li id="selected"><a href="/~jadrn046/proj4/products.html">Products</a></li>
			<li><a href="/~jadrn046/proj4/order_page.html">Order Online</a></li>
			<li><a href="/~jadrn046/proj4/aboutus.html">About Us</a></li>
			<li><a href="/~jadrn046/proj4/contact.html">Contact</a></li>
		</ul>
		</div>
 	</div>
 	
 	<div id="container">
	
	<h2><span id="confirmation">Order Confirmation</span></h2>
	<div id="aboutus">
		<p id="orderpage"> Thank you for your order.<br/> Your order has been accepted and being processed.<br/>
		We hope you enjoy our fine chocolates.</p>
	</div>
    
</body>
</html>
END_CONTENT
