$(function() {
    $(document).foundation();
    $('#icon-glasses').on('click', function(){
        var stylesheet = document.getElementById("custom");
        stylesheet.href = '';
    });
});

// (function() {
//     var glass = document.getElementById('icon-glasses');
//     glass.addEventListener('click', function() {
//         var stylesheet = document.getElementById("custom");
//         stylesheet.href = '';
//     }, false);
// }());
