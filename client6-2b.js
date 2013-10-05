$(document).ready(function() {
$.fn.editable.defaults.mode = 'inline';
// $('.editThis').editable({
//     type: 'text',
//     pk: 1,
//     url: '#',
//     title: 'Enter username'
// });


$('.editThis').editable({
    type: 'text',
    title: 'Enter username',
    success: function(response, newValue) {
        // userModel.set('username', newValue); //update backbone model
    }
});

});