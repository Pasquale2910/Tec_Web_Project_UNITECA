$(document).ready(function()
{

});

/*LOGIN*/
$('form[name=login]').submit(function(){
    $.ajax({
        url: "http://localhost:5000/",
        type: 'POST',
        data: {
            email: $("#Email").val(),
            pwd:  $("#Password").val()
        },

    });
});

/*SEARCH*/
$('form[name=search]').submit(function(){
    $.ajax({
        url: "http://localhost:5000/",
        type: 'POST',
        data: {
            name: $("#name").val()
        },
    });
	
});

/*REGISTRATION*/
$('form[name=regis]').submit(function(){
	    $.ajax({
        url: "http://localhost:5000/",
        type: 'POST',
        data: {
            name: $("#Name").val()
			Surname	: $("#Surname").val()
			email: $("#FromEmailAddress").val()
			pwd: $("#Password").val()
			cpwd: $("#ConfirmPassword").val()*/
        },

    });
});


/*ADD_BOOK*/
$('form[name=add_book1]').submit(function(){
	    $.ajax({
        url: "http://localhost:5000/",
        type: 'POST',
        data: {
            name: $("#name").val()
			n_writer: $("#n_writer").val()
			tag: $("#tag").val()
			ann_d_p: $("#ann_d_p").val()
			editore: $("#editore").val()
			disponibile: $("#disponibile").val()
        },

    });
});
