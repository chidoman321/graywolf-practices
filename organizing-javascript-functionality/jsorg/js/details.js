var Detail = (function () {
  var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
  var $content = $("[rel=js-details]");

  async function personClicked(evt) {
    let id = $(evt.target).attr("rel").split("-")[2];
    let content = await $.ajax("details/" + id + ".html", { dataType: "text" });
    $content.html(content);
  }

  async function persnClick(id) {
    let content = await $.ajax("details/" + id + ".html", { dataType: "text" });
    $content.html(content);
  }

  function selectPerson(evt) {
    evt.preventDefault();
    let ID = $(evt.target).attr("data-person");

    EVT.emit("person-selected", ID);
  }

  function init() {
    $content.on("click", "[rel=js-select-person]", selectPerson);
    $items.on("click", "> [rel^=js-item-]", personClicked);

    EVT.on("person-selected", persnClick);
  }

  return { init };

  // on click of a carousel item, do an Ajax request for
  // the "details/2.html" (or whatever) file for the person
  // clicked, and load those contents into the `$content` div.

  // hint: you will probably want to use "event propagation"
  // (aka "event delegation"), by attaching a single event
  // handler the `$content` element rather than individual
  // event handlers to each item in the carousel.
})();
