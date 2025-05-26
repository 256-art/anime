// salintxt.js

document.addEventListener('copy', function (e) {
  const selection = window.getSelection();
  const selectedText = selection.toString();

  const anchorNode = selection.anchorNode;
  const parent = anchorNode ? anchorNode.parentElement : null;

  if (parent && parent.classList.contains('judul') && parent.dataset.full) {
    e.preventDefault();
    e.clipboardData.setData('text/plain', parent.dataset.full);
  }
});