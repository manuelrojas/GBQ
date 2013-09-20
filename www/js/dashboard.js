/*
 * Initializes the Home page
 * FirstFactory Inc. 2013
 */
var dashboard = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.initToolBox();
        this.loadDashboard();
    },
    initToolBox: function(){
        $('td.dashboard').bind('click', function(){ dashboard.loadDashboard(); });
        $('td.quiz').bind('click', function(){ dashboard.loadQuiz(); });
        $('td.clazz').bind('click', function(){ dashboard.loadClasses(); });
    },
    loadDashboard: function(){
        try{
        $('.dashboard-body').load('sections/detail.html');
        }catch(e){alert(e)}
    },
    loadQuiz: function(){
        $('.dashboard-body').load('sections/quiz.html');
    },
    loadClasses: function(){
        $('.dashboard-body').load('sections/classes.html');
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
