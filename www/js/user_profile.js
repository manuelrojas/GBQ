/*
 * Initializes the User Profile page
 * FirstFactory Inc. 2013
 */
var user_profile = {
    initialize: function() {
        
        this.bindEvents();
        
        $('#user_profile').on('pagebeforeshow',function(){
                              
          var profile =  JSON.parse(sessionStorage.getItem('logininfo'))
          $("#profileimage").attr("src", profile.fbprofileinfo[0]);
          $("#username").html(profile.fbprofileinfo[1].first_name + " " + profile.fbprofileinfo[1].last_name )
          $("#gender").html(profile.fbprofileinfo[1].gender);
          $("#school").html(profile.fbprofileinfo[1].education[0].type);

        });
        
        $('#user_profile').on('pageshow',function(){

                          
        });
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        //alert('device ready');

    }
};
