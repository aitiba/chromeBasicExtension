function clickHandler(e) {
  // window.open(this.href);
  var url = this.href;

  chrome.bookmarks.getTree(function(itemTree) {
    itemTree.forEach(function(item){
      // add bookmark on "Other bookmarks"
      chrome.bookmarks.create({
        'parentId': item.parentId,
        'title': 'TITLE',
        'url': url
      });

      // add folder on "Other bookmarks"
      /* chrome.bookmarks.create({
        'parentId': item.patentId,
        'title': 'Extension bookmarks'},
        function(newFolder) {
          alert("added folder: " + newFolder.title);
        }); */
    });
  });

}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#link').addEventListener('click', clickHandler);
});
