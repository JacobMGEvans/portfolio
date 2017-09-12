'use strict';

var project = [];

function Projects(name, url) {
  this.name = name;
  this.url = url;
  project.push(this);
}

new Projects ('Bus Mall', 'https://github.com/Cloud887/bus-mall');
new Projects ('Tennis Anyone', 'https://github.com/Cloud887/tennis_anyone');

$(document).ready(function() {
  $('.fa fa-bars').click(function() {
    $('.fa fa-bars').css('display', 'none');
  })
})
