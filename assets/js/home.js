console.log("reached!!");
var array = [];
$('#going').on('click', function(event) {
    event.preventDefault();
    $("input:checkbox[name=type]:checked").each(function() {
        array.push($(this).val());
        console.log(array);
    });
    $.ajax({
        url: `/delete?Array=${array}`, //send array containg id as query params
        type: 'POST',
        contentType: 'application/json',
        success: function(){
            console.log("OK");
            setInterval('refreshPage()', 50);
        }
    }).fail(function() {
        alert('Ajax is not working');
    })
});
//refresh page after deleting users
function refreshPage() {
    location.reload();
}
