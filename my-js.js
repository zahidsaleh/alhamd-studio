
// add to cart script
$(function () {

    var goToCartIcon = function($addTocartBtn){
      var $cartIcon = $(".my-cart-icon");
      var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
      $addTocartBtn.prepend($image);
      var position = $cartIcon.position();
      $image.animate({
        top: position.top,
        left: position.left
      }, 500 , "linear", function() {
        $image.remove();
      });
    }
    
    $('.my-cart-btn').myCart({
      classCartIcon: 'my-cart-icon',
      classCartBadge: 'my-cart-badge',
      affixCartIcon: true,
      checkoutCart: function(products) {
        $.each(products, function(){
          alert("Products details.\n" + "Quantity: " + this.quantity + "\n" + "Product Name: " + this.name + "\n" + "Price: " + this.price)
        });
      },
      clickOnAddToCart: function($addTocart){
        goToCartIcon($addTocart);
      },
      getDiscountPrice: function(products) {
        var total = 0;
        $.each(products, function(){
          total += this.quantity * this.price;
        });
        return total * 0.5;
      }
    });
    
    });
    //add to cart script
    
    //add to wishlist script

    

    //add to wishlist script
    
    
    
    
    // back to top btn script starts
    var btn = $('#back-to-top-btn');
    
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
    
    
    $(function () {
      $('[data-toggle="tooltip"]').tooltip({"show": 500, "hide": 100 })
    })
    
    // back to top btn script ends
    
    
    
    
    
    
    
    // searchbar toogle jQuery
    
    $(document).ready(function() {
         
         $(".search").click(function() {
            $(".search-box").slideToggle();
            $("input[type='text']").focus();
          });
    
      });
    
    // searchbar toogle jQuery
    

// size chart toggle

jQuery(document).ready(function() {
     
  jQuery(".size-guide-bg").click(function() {
     jQuery(".div-to-show").slideToggle();
   });

});

// size chart toggle


// product quantity functionality

$(document).ready(function(){
 var quantitiy=1;
$('.increaseQty').click(function(e){
     
     // Stop acting like a button
     e.preventDefault();
     // Get the field name
     var quantity = parseInt($('#quantity').val());
     
     // If is not undefined
     if(quantity<20){

         $('#quantity').val(quantity + 1);
     }
     
     $(this).addClass("clicked");
 setTimeout(function(){
   $(".clicked").removeClass("clicked");
 },100);
       
         // Increment
     
 });

  $('.decreaseQty').click(function(e){
     // Stop acting like a button
     e.preventDefault();
     // Get the field name
     var quantity = parseInt($('#quantity').val());
     
     // If is not undefined
   
         if(quantity>1){
         $('#quantity').val(quantity - 1);
         }

         $(this).addClass("clicked");
 setTimeout(function(){
   $(".clicked").removeClass("clicked");
 },100);
 });
});

// product quantity functionality


// product details functionality

jQuery(document).ready(function() {
 

  jQuery("#product-toggle").click(function() {
     jQuery("#product-toggle-desc").slideToggle();
   });
 jQuery('#product-toggle').click(function(){
       jQuery('#toggle-icon1').text(jQuery('#toggle-icon1').text() == '-' ? '+' : '-');
   })

 jQuery("#disclaimer-toggle").click(function() {
     jQuery("#disclaimer-toggle-desc").slideToggle();
   });
 jQuery('#disclaimer-toggle').click(function(){
       jQuery('#toggle-icon2').text(jQuery('#toggle-icon2').text() == '-' ? '+' : '-');
   })

   
   

});

// product details functionality






// loader javascript
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('loader').style.visibility="hidden";
      },500);
  }
}
// loader javascript

// mobiel slider OWL carousel jquery for responsiveness
$(".mobile-carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
          767:{
            items:4,
            nav: false
          },
          400:{
              items:4,
              nav:false
          },
          300:{
              items:2,
              nav:false
          },
          200:{
              items:2,
              nav:false
          }
        }
      });
// mobiel slider OWL carousel jquery for responsiveness

// overlay function

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "400px";
}
$('.openOverlay').click(function(){
  $("body").addClass("scrolling");
})

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
$('.closebtn').click(function(){
  $("body").removeClass("scrolling");
})
// overlay function



// $('.my-cart-icon').click(function(){
//   alert("clicked");
//   $('#my-cart-modal').css({"opacity" : "1" , "display" :  "block" });
// })

// $('.closebtn').click(function(){
//   alert("clicked");
//   // $(".modal").hide();
//   // $('#my-cart-modal').css({"opacity" : "0" , "display" :  "none" });
// })
