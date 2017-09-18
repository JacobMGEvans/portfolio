'use strict';

var projectArr = [], awardsArr = [];

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

var rawTemplateHTML = $('.proTemplate').html();
var compiledTemplate = Handlebars.compile(rawTemplateHTML);
var templateHTML = $('.awardTemplate').html();
var compTemplate = Handlebars.compile(templateHTML);

Projects.prototype.toHtml = function (rawData) {
  var fillHTML = compiledTemplate(new Projects(this));
  $('#projectTemplate').append(fillHTML);
  var fillHtml2 = compTemplate(new Projects(this));
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
