$(document).ready(function(){
    $('#fates img').popover({
	    delay: {hide: 400},
	    trigger: 'hover'
    });
    $('#fates img').popover('shown', function () {
        $('#fates img').not(this).popover('hide');
    });
});