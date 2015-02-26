// when "My Boards" is clicked
// create an xhr get request to /api/my_boards.json
$('#boards').click(function (argument) {
  $.getJSON (
    '/api/my_boards.json',
    function(data,status) {
      for(var i = 0; i < data.data.children.length; i++) {
      console.log(data.data.children[i].data.author);
      }
    }
  );
});


// when "Random" is clicked
// create an xhr get request to /api/random.json
$('#random').click(function (argument) {
  // body...
});


// when "Get the app" is clicked
// create an xhr get request to /api/get_the_app.json
$('#app').click(function (argument) {
  // body...
});


// when the page loads, trigger the event listener that is bound to "My Boards"