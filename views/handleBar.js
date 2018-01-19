
$(function() {
  $.getJSON("data.json", function(data) {
      var theTemplateScript = $("#Username").html();
      var theTemplate = Handlebars.compile(theTemplateScript);
      $(".heading").append(theTemplate(data));
  });

  $.getJSON("data.json", function(data) {
      var theTemplateScript2 = $("#Message").html();
      var theTemplate2 = Handlebars.compile(theTemplateScript2);
      $(".message").append(theTemplate2(data));
  });
});
