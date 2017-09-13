'use strict';

var projectArr = [], educationArr = [], awardsArr = [];

function Projects(projectDataSource) {
  Object.assign(this, projectDataSource)
}

dataSource.forEach(function(rawData) {
  if(rawData.url){
    projectArr.push(new Projects(rawData))
  }else {
    educationArr.push(new Projects(rawData))
  }
})

$('.fa-bars').click(function(){
  $('.hide').css('display', 'block');
})

$('#projects').text(projectArr[0].name)
$('.projectsAnchor').attr('href', projectArr[0].url);

//jquery clone after grab of .template of the div
//Use the prototype for the template stuff
// Projects.prototype.toHtml = function () {
//   if(this.url){
//
//   }
// };
