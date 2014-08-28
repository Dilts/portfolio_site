$(document).ready(function() {
$('.honeycombs').honeycombs({
combWidth: 170,
margin: 10
});
});

// $(document).on('click', '.inner-text', function(event){
// 	event.stopPropagation();
// 	$(this).addClass('visable').removeClass('hidden');
// 	$(this).append('<a href="http://www.gghomefix.com"></a>');
// 	// $(this).find('h1').addClass('reset-friend-name').removeClass('friend-name')
// 	// $(this).find('img').addClass('img-resizer').removeClass('img-sizer')
// 	// $(this).append('<div class="share-buttons"><button type="button" data-share-type="phone" class="btn btn-default active top-margin" data-toggle="button"><i class="fa fa-phone-square">    Phone</i></button><button type="button" data-share-type="email" class="btn btn-default active top-margin"><i class="fa fa-envelope">    E-mail</i></button><button type="button" data-share-type="Twitter" class="btn btn-default active top-margin"><i class="fa fa-twitter-square">   Twitter</i></button><button type="button" data-share-type="Instagram" class="btn btn-default active top-margin"><i class="fa fa-instagram">   Instagram</i></button><button type="button" data-share-type="Facebook" class="btn btn-default active top-margin" ><i class="fa fa-facebook-square">   Facebook</i></button><button type="button" data-share-type="Linkedin" class="btn btn-default active top-margin"><i class="fa fa-linkedin-square">   Linkedin</i></button></div><textarea class="form-control top-margin" rows="3" placeholder="Leave this person a message"></textarea><div class="share-items top-margin"><button type="button" class="btn btn-info btn-lg btn-block">Share these items</button></div>')
// })

function overlay() {
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

// $(document).on('ready', function() {
  
//   // $('.honeycombs').honeycombs({
//   // combWidth: 250,
//   // margin: 10
//   // });
  
// });