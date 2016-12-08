var proj4_data;
var cookieArray;

$(document).ready( function(){

	var cart = new shopping_cart("jadrn046");
	proj4_data = new Array();

	var cartNumber = $("[name='cart_number']");
  	
  	var items = $("[name='items']");
  	var totals = $("[name='totals']");
  	var totalPrice;

	var errorStatusHandle = $('#error_line');
    var elementHandle = new Array(25);
    elementHandle[0] = $('[name="first_name"]');
    elementHandle[1] = $('[name="last_name"]');
    elementHandle[2] = $('[name="address1"]');
    elementHandle[3] = $('[name="address2"]');
    elementHandle[4] = $('[name="city"]');
    elementHandle[5] = $('[name="state"]');
    elementHandle[6] = $('[name="zip"]');
    elementHandle[7] = $('[name="phone"]');
    elementHandle[8] = $('[name="billing_first_name"]');
    elementHandle[9] = $('[name="billing_last_name"]');
    elementHandle[10] = $('[name="billing_address1"]');
    elementHandle[11] = $('[name="billing_address2"]');
    elementHandle[12] = $('[name="billing_city"]');
    elementHandle[13] = $('[name="billing_state"]');
    elementHandle[14] = $('[name="billing_zip"]');
    elementHandle[15] = $('[name="billing_phone"]');
    elementHandle[16] = $('[name="credit_cards"]');
    elementHandle[17] = $('[name="cc_number"]');
    elementHandle[18] = $('[name="expiration1"]');
    elementHandle[19] = $('[name="expiration2"]');

	var cancelButton = $("[name='cancel_button']");
 	var sameAsShippingButton = $("[name='same_as_shipping']");
  	
  	cookieArray = cart.getCartArray();
  	cartNumber.html(cart.size());
  	
  	var request = new HttpRequest(
    "http://jadran.sdsu.edu/perl/jadrn046/proj4/get_products.cgi", storeData);   
  	request.send();
	
  	cancelButton.click(function(){ $("#dialog-modal").dialog('close');});
  	sameAsShippingButton.click(function(){ sameAsShipping();});

  	$(document).on('click', '#change_quantity', function(){changeQuantity(this.name);});
  	$(document).on('click', '#remove_item', function(){removeItem(this.name);});
  	$(document).on('click', '#checkout_button', function(){showCheckout();});
	
	$( "#dialog-modal" ).dialog({
		height: 600,
        width: 850,
        resizable: false,
        modal: true,
        autoOpen: false
  	});

function storeData(response) {
	var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
    }
    getContent();
  	getTotals(); 
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

function getContent() {
	var str = "";
	for(var i=0; i<cookieArray.length; i++){
		var itemSKU = cookieArray[i][0];
	  	for(var j=0; j<proj4_data.length; j++){
	 		if(itemSKU == proj4_data[j][0]){
        		str += "<div class=\"item_order\">";
          		str += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[j][0]+
            		".jpg\" alt=\""+proj4_data[j][2]+"\" width=\"150px\" " +
            		"class=\"floatleft bottom\" name=\""+proj4_data[j][0]+"\" />";
				str += "<div class=\"checkout_description\">";
          		str += proj4_data[j][2];
          		str += "<p class=\"item_category\">in "+proj4_data[j][1]+"<br /><br /></p>";
          		str += "<p>$"+proj4_data[j][6]+"</p>";
          		str += "</div>";
				str += "<div class=\"checkout_quantities\">";
         		str += "<span class=\"quantity_label\">Quantity</span>";
         		str += "<input type=\"text\" id=\""+itemSKU+"\" class=\"checkouts\" name=\"quantity\" value=\""+cookieArray[i][1]+"\" maxlength=\"3\" size=\"3\" /><br />";
          		str += "<a href=\"javascript:;\" id=\"change_quantity\" name=\""+itemSKU+"\">Update Quantity</a><br />";
          		str += "<a href=\"javascript:;\" id=\"remove_item\" name=\""+itemSKU+"\">Remove Item from Cart</a>";
          		str += "</div>";
				str += "</div>";
          		if(i != cookieArray.length-1){
            		str += "<hr class=\"checkout\" />";
          		}
        	}
		}
	}
	
    if(cart.size() == 0) {
    	items.html("<div class=\"item_order\"><h1>Cart is Empty <br /> Please visit the Products page<br />to add items to your cart</h1></div>");
    }
    else {
    	items.html(str);
    }
}

function getTotals() {
    var str = "";
    var tax = 0.0;
    totalPrice = 0;
    for(var i=0; i<cookieArray.length; i++){
    	var itemSKU = cookieArray[i][0];
      	var itemQuantity = parseInt(cookieArray[i][1]);

    	for(var j=0; j<proj4_data.length; j++){
        	if(proj4_data[j][0] == itemSKU){
          		var itemPrice = parseFloat(proj4_data[j][6]) * itemQuantity;
          		totalPrice += itemPrice;
        	}
      	} 
    } 
    tax = totalPrice * 0.08;

    var grandTotal;
    var strItemTotal = parseFloat(totalPrice.toFixed(2));
    var strTax = parseFloat(tax.toFixed(2));
    var strShipping = parseFloat("2.00");
    if(strItemTotal != 0.00) {
    	grandTotal = strItemTotal + strTax + strShipping;
    }
    else {
      	grandTotal = strItemTotal + strTax;
    }

    if(strItemTotal != 0.00) {
    	str += "<div class=\"floatright\"><p class=\"totals\">$"+totalPrice.toFixed(2)+"</p><p class=\"totals\">$"+tax.toFixed(2)+"</p><p class=\"totals\">$2.00</p></div>";
    }
    else {
      	str += "<div class=\"floatright\"><p class=\"totals\">$"+totalPrice.toFixed(2)+"</p><p class=\"totals\">$"+tax.toFixed(2)+"</p><p class=\"totals\">$0.00</p></div>";
    }
    str += "<div class=\"floatright\"><p class=\"totals\">Item(s) Total:</p><p class=\"totals\">Tax:</p><p class=\"totals\">Shipping:</p></div>";
    str += "<hr class=\"totals\" />";
    str += "<div class=\"floatright\"><p class=\"totals\">$"+grandTotal.toFixed(2)+"</p></div>";
    str += "<div class=\"floatright\"><p class=\"totals\">Total:</p></div>";
    if(strItemTotal != 0.00) {
    	str += "<img src=\"./images/checkout.gif\" id=\"checkout_button\" class=\"cur_pointer floatright checkout_button\"alt= \"checkout button\" name=\"checkout_button\" width=\"185\" />";
    }
    totals.html(str);
} 

function changeQuantity(sku) {
    removeFocus();
    var quantityValue = $('#'+sku).val();
    if(quantityValue == "0"){
      	removeItem(sku);
      	return;
    }
    if(!isNumber(quantityValue)){
      	alert("Quantity must be a Number");
      	$('#'+sku).focus();
      	return;
    }
    cart.setQuantity(sku, quantityValue);
    cookieArray = cart.getCartArray();
    $('#'+sku).val(quantityValue);
    cartNumber.html(cart.size());
    getContent();
    getTotals();
}

function removeItem(sku) {
    cart.delete(sku);
    cookieArray = cart.getCartArray();
    cartNumber.html(cart.size());
    getContent();
    getTotals();
}

function removeFocus() {
    for(var i=0; i<cookieArray.length; i++) {
      	$('#'+cookieArray[i][0]).blur();
    }
}

function showCheckout() {
    removeFocus();
    for(var i=0; i<cookieArray.length; i++){
    	if(!isNumber($('#'+cookieArray[i][0]).val())) {
        	alert("All quantities must be Numbers.");
        	$('#'+cookieArray[i][0]).focus();
        	return;
      	}
    }

	for(var i=0; i <=19 ; i++)
        elementHandle[i].val("");

	sameAsShippingButton.prop('checked', false);
    $("#dialog-modal").dialog('open');
}

function sameAsShipping() {
	if(sameAsShippingButton.is(":checked")) {
    	elementHandle[8].val(elementHandle[0].val());
    	elementHandle[9].val(elementHandle[1].val());
    	elementHandle[10].val(elementHandle[2].val());
    	elementHandle[11].val(elementHandle[3].val());
    	elementHandle[12].val(elementHandle[4].val());
    	elementHandle[13].val(elementHandle[5].val());
    	elementHandle[14].val(elementHandle[6].val());
    	elementHandle[15].val(elementHandle[7].val());
    }
    else {
    	elementHandle[8].text("");
    	elementHandle[9].text("");
    	elementHandle[10].text("");
    	elementHandle[11].text("");
    	elementHandle[12].text("");
    	elementHandle[13].text("");
    	elementHandle[14].text("");
    	elementHandle[15].text("");
	}
}

$(':submit').on('click', function() {
    for(var i=0; i<=19 ; i++)
        elementHandle[i].removeClass("error");
    errorStatusHandle.text("");
    return isValidData();
});

function isValidData() {

	if(isEmpty($.trim(elementHandle[0].val()))) {
        elementHandle[0].addClass("error");
        errorStatusHandle.text("Please enter your first name");
        elementHandle[0].focus();
        return false;
    }
    if(isEmpty(elementHandle[1].val())) {
        elementHandle[1].addClass("error");
        errorStatusHandle.text("Please enter your last name");
        elementHandle[1].focus();
        return false;
    }
    if(isEmpty(elementHandle[2].val())) {
        elementHandle[2].addClass("error");
        errorStatusHandle.text("Please enter address");
        elementHandle[2].focus();
        return false;
    }
    if(isEmpty(elementHandle[4].val())) {
        elementHandle[4].addClass("error");
        errorStatusHandle.text("Please enter city");
        elementHandle[4].focus();
        return false;
    }
	if(isEmpty(elementHandle[5].val())) {
        elementHandle[5].addClass("error");
        errorStatusHandle.text("Please select a state");
        elementHandle[5].focus();
        return false;
    }
	if(!isValidState(elementHandle[5].val())) {
		elementHandle[5].addClass("error");
		errorStatusHandle.text("The state appears to be invalid, "+
        "please use valid two letter state abbreviation");
        elementHandle[5].focus();            
        return false;
	}
	if(isEmpty($.trim(elementHandle[6].val()))) {
        elementHandle[6].addClass("error");
        errorStatusHandle.text("Please enter zipcode");
        elementHandle[6].focus();
        return false;
    }
	else if(!$.isNumeric($.trim(elementHandle[6].val()))) {
    	elementHandle[6].addClass("error");
        errorStatusHandle.text("The zipcode appears to be invalid, "+
        "numbers only please. ");
        elementHandle[6].focus();
        return false;
    }
    else if($.trim(elementHandle[6].val()).length != 5) {
        elementHandle[6].addClass("error");
        errorStatusHandle.text("The zipcode must have exactly five digits")
        elementHandle[6].focus();
        return false;
    }
	if(isEmpty($.trim(elementHandle[8].val()))) {
        elementHandle[8].addClass("error");
        errorStatusHandle.text("Please enter your billing first name");
        elementHandle[8].focus();
        return false;
    }
    if(isEmpty(elementHandle[9].val())) {
        elementHandle[9].addClass("error");
        errorStatusHandle.text("Please enter your billing last name");
        elementHandle[9].focus();
        return false;
    }
    if(isEmpty(elementHandle[10].val())) {
        elementHandle[10].addClass("error");
        errorStatusHandle.text("Please enter address");
        elementHandle[10].focus();
        return false;
    }
    if(isEmpty(elementHandle[12].val())) {
        elementHandle[12].addClass("error");
        errorStatusHandle.text("Please enter city");
        elementHandle[12].focus();
        return false;
    }
	if(elementHandle[13].val()=="") {
        elementHandle[13].addClass("error");
        errorStatusHandle.text("Please select a state");
        elementHandle[13].focus();
        return false;
    }
	else if(!isValidState(elementHandle[13].val())) {
		elementHandle[13].addClass("error");
		errorStatusHandle.text("The state appears to be invalid, "+
        "please use valid two letter state abbreviation");
        elementHandle[13].focus();            
        return false;
	}
	if(isEmpty($.trim(elementHandle[14].val()))) {
        elementHandle[14].addClass("error");
        errorStatusHandle.text("Please enter zipcode");
        elementHandle[14].focus();
        return false;
    }
	else if(!$.isNumeric($.trim(elementHandle[14].val()))) {
        elementHandle[14].addClass("error");
        errorStatusHandle.text("The zipcode appears to be invalid, "+
        "numbers only please. ");
        elementHandle[14].focus();
        return false;
    }
    else if($.trim(elementHandle[14].val()).length != 5) {
        elementHandle[14].addClass("error");
        errorStatusHandle.text("The zipcode must have exactly five digits")
        elementHandle[14].focus();
        return false;
    }
    if(isEmpty(elementHandle[16].val())) {
		elementHandle[16].addClass("error");
		errorStatusHandle.text("Please select your credit card type");
		elementHandle[16].focus();
		return false;
	}
	if(isEmpty($.trim(elementHandle[17].val()))) {
        elementHandle[17].addClass("error");
        errorStatusHandle.text("Please enter your credit card number");
        elementHandle[17].focus();
        return false;
    }
	else if(!$.isNumeric($.trim(elementHandle[17].val()))) {
        elementHandle[17].addClass("error");
        errorStatusHandle.text("The credit card details appears to be invalid, "+
        "numbers only please. ");
        elementHandle[17].focus();
        return false;
    }
    else if($.trim(elementHandle[17].val()).length != 16) {
        elementHandle[17].addClass("error");
        errorStatusHandle.text("The credit card number must have exactly sixteen digits")
        elementHandle[17].focus();
        return false;
    }
    if(isEmpty(elementHandle[18].val())){
		elementHandle[18].addClass("error");
		errorStatusHandle.text("Please enter card-expiry month");
		elementHandle[18].focus();
		return false;
	}
	else if(!$.isNumeric($.trim(elementHandle[18].val()))) {
        elementHandle[18].addClass("error");
        errorStatusHandle.text("The month appears to be invalid, "+
        "numbers only please. ");
        elementHandle[18].focus();
        return false;
    }
    else if($.trim(elementHandle[18].val()) < 1 || $.trim(elementHandle[18].val()) > 12) {
        elementHandle[18].addClass("error");
        errorStatusHandle.text("Please enter valid month");
		elementHandle[18].focus();
		return false;
 	}
 	if(isEmpty(elementHandle[19].val())){
		elementHandle[19].addClass("error");
		errorStatusHandle.text("Please enter card-expiry year");
		elementHandle[19].focus();
		return false;
	}
	else if(!$.isNumeric($.trim(elementHandle[19].val()))) {
        elementHandle[19].addClass("error");
        errorStatusHandle.text("The year appears to be invalid, "+
        "numbers only please. ");
        elementHandle[19].focus();
        return false;
    }
    else if($.trim(elementHandle[19].val()).length != 4) {
        elementHandle[19].addClass("error");
        errorStatusHandle.text("Please enter valid year")
        elementHandle[19].focus();
        return false;
    }
	return true;
}

function isEmpty(fieldValue) {
    return $.trim(fieldValue).length == 0;    
} 

function isValidState(state) {                                
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
                
function isNumber(num) {
	for(var i=0; i < num.length; i++) {
		if(!isDigit(num[i]))
			return false;
	}
	return true;
}

function isDigit(checknumber) {
	if(checknumber.match(/[0-9]/)) {
		return true;
	}
	return false;
}

elementHandle[5].on('keyup', function() { //state
        elementHandle[5].val(elementHandle[5].val().toUpperCase());
});
elementHandle[13].on('keyup', function() { //state
        elementHandle[13].val(elementHandle[13].val().toUpperCase());
});
	   
}); 
