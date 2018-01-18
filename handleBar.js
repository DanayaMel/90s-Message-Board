
$(function() {

  // The List of Shoes
  var shoesData = {
      
        name: "Nike",
        price: 199.00,
        color: "black",
        size: 10 
  };

  var templateScript = $('#Username').html();
  var template = Handlebars.compile(templateScript);

  // Handlebars.registerPartial("description", $("#shoe-description").html());

  $(".Heading").append(template(shoesData));
});