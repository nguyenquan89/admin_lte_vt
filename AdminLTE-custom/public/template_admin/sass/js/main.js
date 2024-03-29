$(document).ready(function() {
	$('body').on('click', '*[data-show_detail]', function() {
		element = $(this);
		element.closest('.custom-wrap').find('.timeline-body').slideToggle();
		element.closest('.custom-wrap').find('.timeline-footer').slideToggle();
	});

    $('body').on('click', '*[data-box_info]', function() {
        element = $(this);
        element.closest('.action-ul__ol').find('.box-info-ol').toggle();
    });
});

$(document).ready(function(){
    $('body').on('click','*[data-show_contact]', function(e) {
    	id = $(this).data('show_contact');
    	element = $(this);
        $('.box-active').css('display','none');
        $('.contacts-content_'+id).css('display','block');
        $('.item-contact').removeClass('active');
        $(this).addClass('active');

    });
    $('body').on('click','*[data-close_contacts]', function(e) {
    	id = $(this).data('close_contacts');
    	$('.box-active').css('display','block');
    	$('.contacts-content_'+id).css('display','none');
    });
});
function reloadDrag(){
    $( "#sortable1, #sortable2, #sortable3,#sortable4,#sortable5,#sortable6" ).sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
}
$('.select2').select2();
$('.datepicker').datepicker();
$('.multipleSelect').fastselect();