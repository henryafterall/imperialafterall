$(document).ready(function() {
  $("a#toMusic").click(function(event) {
    event.preventDefault();
    linkLocation = this.href;

    $("#site").animate({ left: "-300%" }, redirectPage);
  });
  function redirectPage() {
    window.location = linkLocation;
  }
});
