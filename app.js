$(document).ready(function(){

  $("#publicar").on("click", publicar);

})

function publicar() {
  var tweet = $("#new-tweet").val();
  var html = htmlTweet(tweet);
  $("#tweets").append(html);
}

function htmlTweet(textTweet) {
  var html = `<div class="past-tweets">
      <i class="fas fa-times"></i>
      <div class="row">
        <div class="col-md-2">
          <img class="avatar2" src="img/avatars/p1.jpg" alt="persona 1">
        </div>
        <div class="user-name col-md-10">
          <p><b>Gato Triste</b> @SadCat 3m</p>
          <p>`+textTweet+` <a href="#">bit.ly/asdfasdf</a></p>
        </div>
      </div>
      <div>
        <img  class="img-responsive picture" src="https://picsum.photos/600/400" alt="imagen aleatoria">
      </div>
      <p id="likes"><i class="far fa-heart"></i> 0</p>
    </div>`

  return html;
}
