'use strict';

var projectArr = [], educationArr = [], awardsArr = [];

function Projects(projectDataSource) {
  Object.assign(this, projectDataSource)
}

//not working with handlebars template
dataSource.forEach(function(rawData) {
  if(rawData.url){
    projectArr.push(new Projects(rawData))
    var projectRender = `<a href= '${rawData.url}'> <p>${rawData.name}</p>  </a>
    ${rawData.description}`
    $('#projectRender').append(projectRender);
  }else if(rawData.award){
    awardsArr.push(new Projects(rawData))
    var awardRender = `<p> ${rawData.award} </p>`
    $('#awardsRender').append(awardRender)
  }
  else{
    educationArr.push(new Projects(rawData));
    var educationRender =  `<p>${rawData.name}</p>
    ${rawData.degree}`
    $('#educationRender').append(educationRender);
  }
})

var rawTemplateHTML = $('.template').html();
var compiledTemplate = Handlebars.compile(rawTemplateHTML);

Projects.prototype.toHtml = function (rawData) {
  var fillHTML = compiledTemplate(this);
  $('#renderedTemplate').append(fillHTML);
};

$('.fa-bars').click(function(){
  $('.hide').css('display', 'block');
})
