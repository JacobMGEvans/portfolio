'use strict';

let projectArr = [], awardsArr = [];

function Projects(projectDataSource) {
  Object.assign(this, projectDataSource)
}

dataSource.forEach(function(rawData) {
  if(rawData.url){
    projectArr.push(new Projects(rawData))
  }else {
    awardsArr.push(new Projects(rawData))
  }
})

let rawTemplateHTML = $('.proTemplate').html();
let compiledTemplate = Handlebars.compile(rawTemplateHTML);
let templateHTML = $('.awardTemplate').html();
let compTemplate = Handlebars.compile(templateHTML);

Projects.prototype.toHtml = function (rawData) {
  let fillHTML = compiledTemplate(new Projects(this));
  $('#projectTemplate').append(fillHTML);
  let fillHtml2 = compTemplate(new Projects(this));
  $('#awTemp').append(fillHtml2);
};

$('.fa-bars').click(function(){
  $('#projectTemplate').toggle();
  $('#awTemp').toggle();
})
projectArr.forEach(function(project){
  $('#projectTemplate').append(project.toHtml());
})
awardsArr.forEach(function(award){
  $('#awTemp').append(award.toHtml());
})
$('#projects').click(function(){
  $('#projectTemplate').toggle();
})
$('#awards').click(function(){
  $('#awTemp').toggle();
})
