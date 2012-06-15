// write your javascript in here

//saving form data w/ console preview
var parseReviewForm = function(data){
	console.log(data);
};

//Clear Textbox on focus
/*
$(document).ready(function(){
	$('#reviewdate').focus(function(){
		$(this).val('');	
	});
});
*/

//Validator Functions
$(document).ready(function(){

	var rcform = $('#courseReview');
	
	rcform.validate({
		invalidHandler: function(form, validator){},
		submitHandler: function(){
			var data = rcform.serializeArray();
			parseReviewForm(data);
		}
	});

});

