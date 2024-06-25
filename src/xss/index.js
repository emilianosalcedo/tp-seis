document.getElementById('commentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let comment = document.getElementById('comment').value;
  let commentSection = document.getElementById('comments');
  let newComment = document.createElement('div');
  newComment.innerHTML = comment;
  commentSection.appendChild(newComment);
  document.getElementById('comment').value = '';
});
