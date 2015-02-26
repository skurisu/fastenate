$(document).ready(function () {
  retrieve('/api/my_boards.json');

  // when "My Boards" is clicked
  // create an xhr get request to /api/my_boards.json

  // when "My Boards" is clicked
  // create an xhr get request to /api/my_boards.json
  $('#boards').click(function (argument) {
    retrieve('/api/my_boards.json');
  });


  // when "Random" is clicked
  // create an xhr get request to /api/random.json
  $('#random').click(function (argument) {
    retrieve('/api/random.json');
  });


  // when "Get the app" is clicked
  // create an xhr get request to /api/get_the_app.json
  $('#app').click(function (argument) {
    retrieve('/api/get_the_app.json');
  });

});

function retrieve (url) {
  $.getJSON (
    url,
    function(data,status) {
      $(".content_wrapper").empty();
      
      for(var i = 0; i < data.data.children.length; i++) {
      // console.log(data.data.children[i].data.author);
      var new_box = renderBox(data.data.children[i].data);

      $(".content_wrapper").append(new_box);
      }
    }
  );
}

function renderBox (article_data) {
  // create the outermost container element
  // this will be returned in the end

  // console.log(article_data);

  var box = $("<div>", { "class" : "box"});

  // create the image div
  var image = $("<div>", {"class" : "image"});
  // set its background image to article_data.url
  image.css ("background-image", "url('"+ article_data.url +"')");
  // add the image to the box (append adds image to the end of the box div)
  box.append(image);

  // create the tagline, and add the article_data.title to it
  var tagline = $("<h2>",
  {
    "class" : "tagline",
    html : article_data.title
  });
  // add tagline to the box
  box.append(tagline);

  // create ul
  var ul = $("<ul>");

  // create by_line li
  var by_line = $("<li>", 
  {
    "class" : "by_line",
    html : article_data.author
  });
  // add by_line to ul
  ul.append(by_line);

    // create time_ago li
  var time_ago = $("<li>", 
  {
    "class" : "time_ago",
    html : moment.unix(article_data.created).fromNow()
  });
  // add time_ago to ul
  ul.append(time_ago);

  var views = $("<li>", 
  {
    "class" : "views",
    html : article_data.score
  });
  // add views to ul
  ul.append(views);

  // add ul>li*3 to box
  box.append(ul);

  // hardcode two lines of lorem ipsum to description
  var description = $("<p>",
  {
    "class" : "description",
    html : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa voluptas, laboriosam veniam."
  });
  // add description to box
  box.append(description);


  return box;

}
