
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

var time; 
var inter = setInterval(() => {
    time = moment().format('H:mm:ss');
    $("#timer").text(time)
}, 1000);
console.log(inter)