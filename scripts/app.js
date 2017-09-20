'use strict';

let projectArr = [], awardsArr = [];
let rawTemplateHTML = $('.proTemplate').html();
let compiledTemplate = Handlebars.compile(rawTemplateHTML);
let templateHTML = $('.awardTemplate').html();
let compTemplate = Handlebars.compile(templateHTML);

function Projects(projectDataSource) {
  Object.assign(this, projectDataSource)
}


Projects.prototype.toHtml = function (rawData) {
  let fillHTML = compiledTemplate(this);
  $('#projectTemplate').append(fillHTML);
  let fillHtml2 = compTemplate(this);
  $('#awTemp').append(fillHtml2);
};

$.get('data/biographyData.json',function(databaseData){
  databaseData.forEach(function(info){
    (info.url) ? projectArr.push(new Projects(info)) :
      awardsArr.push(new Projects(info))
  })
  projectArr.forEach(function(project){
    $('#projectTemplate').append(project.toHtml());
  })

  awardsArr.forEach(function(award){
    $('#awTemp').append(award.toHtml());
  })
})

$('.fa-bars').on('click', function(){
  $('#projectTemplate').toggle();
  $('#awTemp').toggle();
})

$('#projects').on('click', function(){
  $('#projectTemplate').toggle();
})

$('#awards').on('click', function(){
  $('#awTemp').toggle();
})
