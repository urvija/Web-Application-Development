var proj4_data;
var product = "";
var productPageHtml;

$(document).ready(function()
{
	var cart = new shopping_cart("jadrn046");
    proj4_data = new Array();
    
  	var cartIcon = $("[name='cart_icon']");
  	var cartNumber = $("[name='cart_number']");
  	var cancelButton = $("[name='cancel_button']");
  	var addToCartButton = $("[name='addtocart_button']");
 	var quantityDropDown = $("[name='quantity']");
    
    cancelButton.click(function(){ $("#dialog-modal").dialog('close');});
  	cartIcon.click(function(){ window.location.href = "order_page.html";});
  	cartNumber.click(function(){ window.location.href = "order_page.html";});
	cartNumber.html(cart.size());
	
	var request = new HttpRequest(
    "http://jadran.sdsu.edu/perl/jadrn046/proj4/get_products.cgi", storeData);   
    request.send();
	
	function storeData(response) {
    	var tmpArray = explodeArray(response,';');
    	for(var i=0; i < tmpArray.length; i++) {
        	innerArray = explodeArray(tmpArray[i],'|');
        	proj4_data[i] = innerArray;
    	}
		productPage();
	}

	// from http://www.webmasterworld.com/forum91/3262.htm            
	function explodeArray(item,delimiter) {
		tempArray=new Array(1);
		var Count=0;
		var tempString=new String(item);

		while (tempString.indexOf(delimiter)>0) {
			tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
			tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
			Count=Count+1
		}
		tempArray[Count]=tempString;
		return tempArray;
	}
	
	function productPage() {
		milkChock()
		$('#content').html(product);
    	productPageHtml = $('body').html();
	}	

	$('ul#chocMenu li').click(function(){ 
		var ind = $(this).index();
    	if(ind == 0) {
    		$('#content').html(milkChock());
    	}
    	if(ind == 1) {
    		$('#content').html(darkChock());
    	}
    	if(ind == 2) {
    		$('#content').html(nutChock());
    	}
    	if(ind == 3) {
    		$('#content').html(brittleChock());
    	}
    	if(ind == 4) {
    		$('#content').html(trufflesChock());
    	}
    	if(ind == 5) {
    		$('#content').html(gifts());
    	}
    	if(ind == 6) {
    		$('#content').html(holiday());
    	}
    });
    
	function milkChock(){
    	product = "<h2 class ='titlesofproducts'>Milk Chocolate</h2><table class='displayTable'><tr><th>Picture</th>"+
        "<th class='description'>Description</th><th class='price'>Price</th></tr>";
    	for(var i=0; i < proj4_data.length; i++) {
        	if (proj4_data[i][1] == "Milk chocolate") {
            	product += "<tr><td><img width=\"200px\" src=\"/~jadrn000/PROJ4_IMAGES/" +
                proj4_data[i][0] + ".jpg\"></td><td><b>" + proj4_data[i][2] +"</b><br><br>"+
                proj4_data[i][4] + "</td><td>\$" + proj4_data[i][6] +
//           		"<br><br><img src=\"/~jadrn046/proj4/images/addtocart.png\" alt=\"add to cart\" width=\"120\" "+
       		    "<br><br><img src=\"images/addtocart.png\" alt=\"add to cart\" width=\"120\" "+
       			"name=\""+proj4_data[i][0]+"\" class=\"add_item_to_cart\">";
        	}
   		}
    	product += "</table>"
    	return product;
	}

	function darkChock(){
    	product = "<h2 class ='titlesofproducts'>Dark Chocolate</h2><table class='displayTable'><tr><th>Picture</th>"+
        "<th class='description'>Description</th><th class='price'>Price</th></tr>";
    	for(var i=0; i < proj4_data.length; i++) {
        	if (proj4_data[i][1] == "Dark chocolate") {
           		product += "<tr><td><img width=\"200px\" src=\"/~jadrn000/PROJ4_IMAGES/" +
                proj4_data[i][0] + ".jpg\"></td><td><b>" + proj4_data[i][2] +"</b><br><br>"+
                proj4_data[i][4] + "</td><td>\$" + proj4_data[i][6] +
//                 "<br><br><img src=\"/~jadrn046/proj4/images/addtocart.png\" alt=\"add to cart\" width=\"120\" "+
       			"<br><br><img src=\"images/addtocart.png\" alt=\"add to cart\" width=\"120\" "+
       			"name=\""+proj4_data[i][0]+"\" class=\"add_item_to_cart\">";
        	}
    	}
    	product += "</table>"
    	return product;
	}

	function nutChock(){
    	product = "<h2 class ='titlesofproducts'>Nuts and Chews </h2><table class='displayTable'><tr><th>Picture</th>"+
        "<th class='description'>Description</th><th class='price'>Price</th></tr>";
    	for(var i=0; i < proj4_data.length; i++) {
        	if (proj4_data[i][1] == "Nuts and chews") {
            	product += "<tr><td><img width=\"200px\" src=\"/~jadrn000/PROJ4_IMAGES/" +
                proj4_data[i][0] + ".jpg\"></td><td><b>" + proj4_data[i][2] +"</b><br><br>"+
                proj4_data[i][4] + "</td><td>\$" + proj4_data[i][6] +
//                 "<br><br><img src=\"/~jadrn046/proj4/images/addtocart.png\" alt=\"add to cart\" width=\"120\" "+
       			"<br><br><img src=\"images/addtocart.png\" alt=\"add to cart\" width=\"120\" "+
       			"name=\""+proj4_data[i][0]+"\" class=\"add_item_to_cart\">";
        	}
    	}
    	product += "</table>"
    	return product;
	}

	function brittleChock(){
    	product = "<h2 class ='titlesofproducts'>Brittles and Toffies</h2><table class='displayTable'><tr><th>Picture</th>"+
        "<th class='description'>Description</th><th class='price'>Price</th></tr>";
    	for(var i=0; i < proj4_data.length; i++) {
        	if (proj4_data[i][1] == "Brittles and toffies") {
            	product += "<tr><td><img width=\"200px\" src=\"/~jadrn000/PROJ4_IMAGES/" +
                proj4_data[i][0] + ".jpg\"></td><td><b>" + proj4_data[i][2] +"</b><br><br>"+
                proj4_data[i][4] + "</td><td>\$" + proj4_data[i][6] +
//                 "<br><br><img src=\"/~jadrn046/proj4/images/addtocart.png\" alt=\"add to cart\" width=\"120\" "+
       			"<br><br><img src=\"images/addtocart.png\" alt=\"add to cart\" width=\"120\" "+
       			"name=\""+proj4_data[i][0]+"\" class=\"add_item_to_cart\">";
        	}
   		}
    	product += "</table>"
    	return product;
	}

	function trufflesChock(){
    	product = "<h2 class ='titlesofproducts'>Truffles</h2><table class='displayTable'><tr><th>Picture</th>"+
        "<th class='description'>Description</th><th class='price'>Price</th></tr>";
    	for(var i=0; i < proj4_data.length; i++) {
        	if (proj4_data[i][1] == "Truffles") {
            	product += "<tr><td><img width=\"200px\" src=\"/~jadrn000/PROJ4_IMAGES/" +
                proj4_data[i][0] + ".jpg\"></td><td><b>" + proj4_data[i][2] +"</b><br><br>"+
                proj4_data[i][4] + "</td><td>\$" + proj4_data[i][6] +
//                 "<br><br><img src=\"/~jadrn046/proj4/images/addtocart.png\" alt=\"add to cart\" width=\"120\" "+
       			"<br><br><img src=\"images/addtocart.png\" alt=\"add to cart\" width=\"120\" "+
       			"name=\""+proj4_data[i][0]+"\" class=\"add_item_to_cart\">";
        	}
    	}
    	product += "</table>"
    	return product;
	}

	function gifts(){
    	product = "<h2 class ='titlesofproducts'>Gifts</h2><table class='displayTable'><tr><th>Picture</th>"+
        "<th class='description'>Description</th><th class='price'>Price</th></tr>";
    	for(var i=0; i < proj4_data.length; i++) {
        	if (proj4_data[i][1] == "Gifts") {
            	product += "<tr><td><img width=\"200px\" src=\"/~jadrn000/PROJ4_IMAGES/" +
                proj4_data[i][0] + ".jpg\"></td><td><b>" + proj4_data[i][2] +"</b><br><br>"+
                proj4_data[i][4] + "</td><td>\$" + proj4_data[i][6] +
//                 "<br><br><img src=\"/~jadrn046/proj4/images/addtocart.png\" alt=\"add to cart\" width=\"120\" "+
       			"<br><br><img src=\"images/addtocart.png\" alt=\"add to cart\" width=\"120\" "+
       			"name=\""+proj4_data[i][0]+"\" class=\"add_item_to_cart\">";
        	}
		}
    	product += "</table>"
    	return product;
	}

	function holiday(){
    	product = "<h2 class ='titlesofproducts'>Holiday Assortments</h2><table class='displayTable'><tr><th>Picture</th>"+
        "<th class='description'>Description</th><th class='price'>Price</th></tr>";
    	for(var i=0; i < proj4_data.length; i++) {
        	if (proj4_data[i][1] == "Holiday assortments") {
            	product += "<tr><td><img width=\"200px\" src=\"/~jadrn000/PROJ4_IMAGES/" +
                proj4_data[i][0] + ".jpg\"></td><td><b>" + proj4_data[i][2] +"</b><br><br>"+
                proj4_data[i][4] + "</td><td>\$" + proj4_data[i][6] +
//                 "<br><br><img src=\"/~jadrn046/proj4/images/addtocart.png\" alt=\"add to cart\" width=\"120\" "+
       			"<br><br><img src=\"images/addtocart.png\" alt=\"add to cart\" width=\"120\" "+
       			"name=\""+proj4_data[i][0]+"\" class=\"add_item_to_cart\">";
        	}
    	}
    	product += "</table>"
    	return product;
	}

	$( "#dialog-modal" ).dialog({
            height: 250,
            width: 500,
            modal: true,
            autoOpen: false
    });
	
  	$(document).on('click', '.add_item_to_cart', function(){
  		openCartDialog(this.name);
  	});

	function openCartDialog(sku) {
    	addToCartButton.click(function(){ 
    		addItemtoCart(sku);
    	});
    	var str = "";
    	quantityDropDown.val("1");

    	for(var i=0; i<proj4_data.length; i++){
      		if(sku == proj4_data[i][0]) {
       			$("[name='addtocart_dialog']").html("Add "+proj4_data[i][2]+" to cart?");
      		}
    	}
    	$("#dialog-modal").dialog('open');
  	}
    
    function addItemtoCart(sku) {
    	addToCartButton.off();

    	var quantity = quantityDropDown.val();
    	cart.add(sku, quantity);

    	$("#dialog-modal").dialog('close');
    	cartNumber.html(cart.size());
    	window.location.href = "order_page.html";
  	}

});

