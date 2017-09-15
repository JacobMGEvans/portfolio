'use strict';

var projectArr = [], educationArr = [], awardsArr = [];

function Projects(projectDataSource) {
  Object.assign(this, projectDataSource)
}

dataSource.forEach(function(rawData) {
  if(rawData.url){
    projectArr.push(new Projects(rawData))
    var projectRender = `<a href= '${rawData.url}'> <p>${rawData.name}</p>  </a>
    ${rawData.description}`
    $('#projectRender').append(projectRender);
  }else{
    educationArr.push(new Projects(rawData));
    var educationRender =  `<p>${rawData.name}</p>
    ${rawData.degree}`
    $('#educationRender').append(educationRender);
  }
})

$('.fa-bars').click(function(){
  $('.hide').css('display', 'block');
})
