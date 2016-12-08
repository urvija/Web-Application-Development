// In the original project, we were required to populate data from the server
// However, server is not accessible now so I have hardcoded the images 
// But only on the homepage.. I haven't changed anything on products page

var proj4_data;
var data = "";

$(document).ready(function()
{
	var cart = new shopping_cart("jadrn046");
    proj4_data = new Array();
    
  	var cartIcon = $("[name='cart_icon']");
  	var cartNumber = $("[name='cart_number']");
  	cartNumber.html(cart.size());

//     var request = new HttpRequest(
//     "http://jadran.sdsu.edu/perl/jadrn046/proj4/get_products.cgi", storeData);   
//     request.send();
	
  	cartIcon.click(function(){ window.location.href = "order_page.html";});
  	cartNumber.click(function(){ window.location.href = "order_page.html";});

// 	function storeData(response) {
//     	var tmpArray = explodeArray(response,';');
//     	for(var i=0; i < tmpArray.length; i++) {
//         	innerArray = explodeArray(tmpArray[i],'|');
//         	proj4_data[i] = innerArray;
//     	}
    	homePage();
// 	}

	// from http://www.webmasterworld.com/forum91/3262.htm            
// 	function explodeArray(item,delimiter) {
// 		tempArray=new Array(1);
// 		var Count=0;
// 		var tempString=new String(item);
// 
// 		while (tempString.indexOf(delimiter)>0) {
// 			tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
// 			tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
// 			Count=Count+1
// 		}
// 		tempArray[Count]=tempString;
// 		return tempArray;
// 	}

});

function homePage(){
    milkChock();
    darkChock();
    nutChock();
    brittleChock();
    trufflesChock();
    gifts();
    holiday();
    $('#content').html(data);
}

function milkChock(){
//     var milk = new Array();
//     for(var i=0; i < proj4_data.length; i++) {
//         if (proj4_data[i][1] == "Milk chocolate") {
// 			milk.push("PROJ4_IMAGES/" + proj4_data[i][0] + ".jpg");
//         }
//     }
//     
//     data += "<h2 class = \"homepage\">Milk Chocolates</h2>"+
//         "<div><img class=\"chocolate\" width=\"200px\" src=\""+ milk[0]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ milk[1]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ milk[4]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ milk[5]+"\"></div>";

	data += "<h2 class = \"homepage\">Milk Chocolates</h2>"+
        "<div><img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Milk Chocolates/54X99B43C.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Milk Chocolates/55P99Y43A.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Milk Chocolates/55Q99Y43A.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Milk Chocolates/55Q99Y73C.jpg\"></div>";
}


function darkChock(){
//     var dark = new Array();
//     for(var i=0; i < proj4_data.length; i++) {
//         if (proj4_data[i][1] == "Dark chocolate") {
//             dark.push("PROJ4_IMAGES/" + proj4_data[i][0] + ".jpg");
//         }
//     }
//     data += "<h2 class = \"homepage\">Dark Chocolates</h2>"+
//         "<div><img class=\"chocolate\" width=\"200px\" src=\""+ dark[0]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ dark[1]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ dark[4]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ dark[5]+"\"></div>";

	data += "<h2 class = \"homepage\">Dark Chocolates</h2>"+
        "<div><img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Dark Chocolates/84X99B43C.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Dark Chocolates/85P99Y43A.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Dark Chocolates/85Q99Y73C.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Dark Chocolates/85Q99Y43A.jpg\"></div>";
}

function nutChock(){
//     var nuts = new Array();
//     for(var i=0; i < proj4_data.length; i++) {
//         if (proj4_data[i][1] == "Nuts and chews") {
//             nuts.push("/~jadrn000/PROJ4_IMAGES/" + proj4_data[i][0] + ".jpg");
//         }
//     }
//     data += "<h2 class = \"homepage\">Nuts and Chews</h2>"+
//         "<div><img class=\"chocolate\" width=\"200px\" src=\""+ nuts[0]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ nuts[1]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ nuts[2]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ nuts[3]+"\"></div>";

	data += "<h2 class = \"homepage\">Nuts and Chews</h2>"+
        "<div><img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Nuts and Chews/33X98P89N.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Nuts and Chews/35E94Y99P.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Nuts and Chews/35J74Y99W.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Nuts and Chews/39J98Q99N.jpg\"></div>";
}

function brittleChock(){
//     var brittle = new Array();
//     for(var i=0; i < proj4_data.length; i++) {
//         if (proj4_data[i][1] == "Brittles and toffies") {
//             brittle.push("/~jadrn000/PROJ4_IMAGES/" + proj4_data[i][0] + ".jpg");
//         }
//     }
//     data += "<h2 class = \"homepage\">Brittles and Toffies</h2>"+
//         "<div><img class=\"chocolate\" width=\"200px\" src=\""+ brittle[0]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ brittle[1]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ brittle[2]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ brittle[3]+"\"></div>";

	data += "<h2 class = \"homepage\">Brittles and Toffies</h2>"+
        "<div><img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Brittles and Toffies/1J94K63Y9.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Brittles and Toffies/1O94G76Q9.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Brittles and Toffies/1U77T63C9.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Brittles and Toffies/1W96T63B8.jpg\"></div>";
}

function trufflesChock(){
//     var truffles = new Array();
//     for(var i=0; i < proj4_data.length; i++) {
//         if (proj4_data[i][1] == "Truffles") {
//             truffles.push("/~jadrn000/PROJ4_IMAGES/" + proj4_data[i][0] + ".jpg");
//         }
//     }
//     data += "<h2 class = \"homepage\">Truffles</h2>"+
//         "<div><img class=\"chocolate\" width=\"200px\" src=\""+ truffles[0]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ truffles[1]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ truffles[2]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ truffles[3]+"\"></div>";

	data += "<h2 class = \"homepage\">Truffles</h2>"+
        "<div><img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Truffles/2K35T93T5.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Truffles/2L65T93T5.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Truffles/2M47X93S5.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Truffles/2U85T93Z5.jpg\"></div>";
}

function gifts(){
//     var gifts = new Array();
//     for(var i=0; i < proj4_data.length; i++) {
//         if (proj4_data[i][1] == "Gifts") {
//             gifts.push("/~jadrn000/PROJ4_IMAGES/" + proj4_data[i][0] + ".jpg");
//         }
//     }
//     data += "<h2 class = \"homepage\">Gifts</h2>"+
//         "<div><img class=\"chocolate\" width=\"200px\" src=\""+ gifts[0]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ gifts[1]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ gifts[2]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ gifts[3]+"\"></div>";

	data += "<h2 class = \"homepage\">Gifts</h2>"+
        "<div><img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Gifts/9Q34N66P3.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Gifts/9Q35N88P6.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Gifts/9U39J36R3.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Gifts/9Z34M45A3.jpg\"></div>";
}

function holiday(){
//     var holiday = new Array();
//     for(var i=0; i < proj4_data.length; i++) {
//         if (proj4_data[i][1] == "Holiday assortments") {
//             holiday.push("/~jadrn000/PROJ4_IMAGES/" + proj4_data[i][0] + ".jpg");
//         }
//     }
//     data += "<h2 class = \"homepage\">Holiday Assortments</h2>"+
//         "<div><img class=\"chocolate\" width=\"200px\" src=\""+ holiday[0]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ holiday[1]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ holiday[2]+"\">"+
//         "<img class=\"chocolate\" width=\"200px\" src=\""+ holiday[3]+"\"></div>";

	data += "<h2 class = \"homepage\">Holiday Assortments</h2>"+
        "<div><img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Holiday Assortments/8G42K77D3.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Holiday Assortments/8I96H86E4.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Holiday Assortments/8Y29L37E5.jpg\">"+
        "<img class=\"chocolate\" width=\"200px\" src=\"PROJ4_IMAGES/Holiday Assortments/8Z29Q84C5.jpg\"></div>";
}