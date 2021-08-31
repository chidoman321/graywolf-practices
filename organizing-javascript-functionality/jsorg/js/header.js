// put event handlers for header links here.

var Header = (function () {
  function headerLink(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();

    console.log("hola");

    var url = $(evt.target).attr("href");

    $.ajax(url, { dataType: "text" }).then(function (contents) {
      $modal.html(contents).show();
    });
  }

  function init() {
    $modal = $("[rel=js-modal]");
    $("[rel=js-header]").on("click", "> [rel^=js]", headerLink);
  }

  var $modal;

  return { init };
})();
