/*
 * Initializes the Home page
 * FirstFactory Inc. 2013
 */
var index = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        
        $('#homepage').on('pagebeforeshow',function(){
        });
        
        $('#homepage').on('pageshow',function(){
          $('#btn_login').unbind('click').bind('click',function(){
            //callNativeFBLogin( 'SUCCESS' )
              alert('facebook should go here');
          });
          $('#btn_kaplan').unbind('click').bind('click',function(){
                $.mobile.changePage( "#home");   
          });
                          
        });
        
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    }
};
