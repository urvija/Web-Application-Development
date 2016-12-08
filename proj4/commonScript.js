$(document).ready( function() {
  
  var cart = new shopping_cart("jadrn046");
  
  var cartNumber = $("[name='cart_number']");
  var cartIcon = $("[name='cart_icon']");
 
  cartNumber.html(cart.size());

  cartIcon.click(function(){ 
  	window.location.href = "order_page.html";
  });
  
  cartNumber.click(function(){ 
  	window.location.href = "order_page.html";
  });

}); 