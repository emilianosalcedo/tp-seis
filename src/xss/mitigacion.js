document.getElementById('commentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var comment = document.getElementById('comment').value;
  var commentSection = document.getElementById('comments');
  var newComment = document.createElement('div');
  var textNode = document.createTextNode(comment);
  newComment.appendChild(textNode);
  commentSection.appendChild(newComment);
  document.getElementById('comment').value = '';
});
