// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//==========Jquery===============
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require readyselector

//==========Backbonejs===============
//= require underscore
//= require backbone
//= require backbone_rails_sync
//= require backbone_datalink
//= require backbone/simple_project

//==========Handlebars===============
//= require handlebars
//= require handlebars.runtime
//enables to store handlebar templates in a file, and precache them via sprockets
//see here for docs: https://github.com/leshill/handlebars_assets#the-template-files
//= require_tree ./templates

//==========I18n===============
// This is optional (in case you have `I18n is not defined` error)
// If you want to put this line, you must put it BEFORE `i18n/translations`
//= require i18n
// Some people even need to add the extension to make it work, see https://github.com/fnando/i18n-js/issues/283
//= require i18n.js
//
// This is a must
//= require i18n/translations


//==========Application code===============

//= require views/players.js



