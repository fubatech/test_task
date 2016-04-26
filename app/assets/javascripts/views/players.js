  var app = app || {};


//Init the view using the readyselector module 
//http://brandonhilkert.com/blog/page-specific-javascript-in-rails/
$(".players.index").ready(function(){
  console.log("Creating players index view");
  app.players_index=new app.PlayersView({players:gon.players});
});



(function ($) {
  'use strict';


  app.PlayersView = Backbone.View.extend({

  	el:"#players",

    events: {
        'click .btn_hide' : 'onHidePlayer'
      },

    /*
    Input params:
    * players: the list of player objects
    * tags_bundle: Array of all tags in the recording over all videos.
    * play_video_by_video_id_and_time: a function callback
    **/
    initialize: function(inp) {
		console.log("Started RecordingTagControl initialize with input: %o", inp);
		this.players=inp.players;
        this.list_template=HandlebarsTemplates["players"];//uses the fila assets/javascripts/templates/players.hbs
        this.initHandleBarsHelpers();
        this.render();
    },

    initHandleBarsHelpers:function()
    {
      Handlebars.registerHelper('I18n',
        function(str){
          return (I18n != undefined ? I18n.t(str) : str);
        }
      );
    },

    onHidePlayer:function(evt)
    {
        console.log("Clicked on .hide, elem: %o", evt.target);
        $(evt.target).parent().parent().fadeOut();
    },

    render:function()
    {
        $(this.el).html(this.list_template(this.players));
    }


  });
})(jQuery);