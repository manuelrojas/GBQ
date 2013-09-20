/*
 * Initializes the Home page
 * FirstFactory Inc. 2013
 */
var index = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        
        $('#homepage').on('pagebeforeshow',function(){
          //alert('pageshow');
        });
        
        $('#homepage').on('pageshow',function(){
          $('#btn_login').unbind();
          $('#btn_login').bind('click',function(){
            callNativeFBLogin( 'SUCCESS' )
          });

          $('#btn_kaplan').bind('click',function(){
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
        //alert('device ready');
    }
};
