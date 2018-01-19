
$(function() {
  $.getJSON("data.json", function(data) {
      var theTemplateScript = $("#Username").html();
      var theTemplate = Handlebars.compile(theTemplateScript);
      $(".heading").append(theTemplate(data));
  });
});
