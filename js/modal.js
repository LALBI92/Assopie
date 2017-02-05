	$('#submit_form').click(function(e) {
		e.preventDefault();
		var DATA = $('#negoci').serialize();
		$.ajax({
			type: "POST",
			url: 'result.php',
			data: DATA,
			success: function(data){
			},
			error: function()  {
				alert('erreur');
			}
		});
	
	});	

	
	$('.fillModal').click(function() {
		var row = $(this).closest('.one-nego').html();
		$('#negoci').find('.one-nego').html(row);
		$('#negoci').find('.btn-lot').remove();
		
		fillModal();
	}); 
	
	function fillModal() {
		$('#form_name').val($('#name_residence').html());
		$('#form_price').val($('#negoci .modal_price').html());
		$('#form_min_price').val($('#negoci .modal_min_reduc').html());
		$('#form_max_price').val($('#negoci .modal_max_reduc').html());
		$('#form_fiscalite').val($('#fiscalite_ref').html());
		$('#form_city').val($('#city_residence').html());
		$('#form_lot').val($('#negoci .modal_lot').html());
	};
	
	$('#email_field').change(function() {
		var email = $(this).val();
		if (validateEmail(email)) {
			$('#submit_form').removeClass('disabled');
		} else {
			$('#submit_form').addClass('disabled');
		}
	});
	
	$('#email_field').keyup(function() {
		var email = $(this).val();
		if (validateEmail(email)) {
			$('#submit_form').removeClass('disabled');
		} else {
			$('#submit_form').addClass('disabled');
		}
	});	
	
	function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}		
