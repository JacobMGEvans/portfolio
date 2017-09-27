'use strict';
var app = app || {};

(function(module) {

  const Controller = {};

  Controller.menuButtonControl = function() {
    $('.fa-bars').on('click', function(){
      $('#projectTemplate').toggle();
      $('#awTemp').toggle();
    })
  }

  module.Controller = Controller;
})(app);
//something needs to be added here for the repo AJAX BS
