$(document).ready(function() {
  $("a#toIndex").click(function(event) {
    event.preventDefault();
    linkLocation = this.href;

    $("#site").fadeOut(1000, redirectPage);
  });
  function redirectPage() {
    window.location = linkLocation;
  }
});
