use DBI;
use CGI;
use CGI::Session;

my $q = new CGI;

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn046";

my $username = "jadrn046";
my $password = "plastic";

my $database_source = "dbi:mysql:$database:$host:$port";	
my $dbh = DBI->connect($database_source, $username, $password)
or die 'Cannot connect to db';

my $sth = $dbh->prepare("select jadrn046.sales.orderdate, jadrn046.sales.sku, proj4.products.title, jadrn046.sales.quantity, proj4.products.cost, proj4.products.retail from jadrn046.sales, proj4.products where jadrn046.sales.sku = proj4.products.sku  ORDER BY jadrn046.sales.orderdate");
$sth->execute();

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
	<h1>Report</h1>
	
	<table class="displayTable">
  	<tr>
    	<th>Order Date</th>
    	<th>SKU</th>		
    	<th>Title</th>
    	<th>Quantity</th>
    	<th>Cost\(\$\)</th>		
    	<th>Retail\(\$\)</th>
    	<th>Profit\(\$\)</th> 
  	</tr>
END_CONTENT

$totalQuantity = 0;
$totalSales = 0;
$totalCost = 0;
$skuProfit = 0;

while(my @row=$sth->fetchrow_array()) {
print "<tr>\n";
       
for(my $i=0; $i<@row; $i++) {
	if($i == 3) {
		$totalQuantity += $row[$i];
		$totalSales += ($row[$i]*$row[5]);
		$totalCost += ($row[$i]*$row[4]);
	}
}

foreach $item (@row) { 
     print "<td>$item</td>\n";
}         

foreach $item ($row[6]) {
	$skuProfit = ($row[5]*$row[3]) - ($row[4]*$row[3]);
	print "<td> \$$skuProfit </td>\n";
}

print "</tr>\n"; 
}
 
$sth->finish();
$dbh->disconnect();

my $profit = $totalSales - $totalCost;
print "</table>\n";

print "<table class='displayTable'>\n";
print "<tr>\n";
print "<th>Total Quantity</th>\n";
print "<th>Total Retail\(\$\)</th>\n";
print "<th>Total Profit\(\$\)</th>\n";
print "</tr>";
print "<tr>\n";
print "<td>$totalQuantity</td>\n";
print "<td>\$$totalSales</td>\n"; 
print "<td>\$$profit</td>\n";
print "</tr>\n";
print "</table>\n";


print "</div>\n";
print "</body>\n";
print "</html>\n";

