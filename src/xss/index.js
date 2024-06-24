document.getElementById('commentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var comment = document.getElementById('comment').value;
  var commentSection = document.getElementById('comments');
  var newComment = document.createElement('div');
  newComment.innerHTML = comment;
  commentSection.appendChild(newComment);
  document.getElementById('comment').value = '';
});
