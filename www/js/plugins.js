/*
 * FirstFactory Inc. 2013
 * 
 */
var FBPlugin =
{
    callSampleFunction : function(success, fail, resultType)
    {
        //alert("Plugin Calls");
        cordova.exec(function (){ console.log('success:' +  resultType); alert('success') }, function () { console.log('error') },  'Facebook_Plugin', 'myMethod', [resultType]);
    },
    
    callFacebookLogin : function(sucess, fail, resultType)
    {
        cordova.exec(sucess, fail,  'Facebook_Plugin', 'FacebookLogin', [resultType]);
        
    }
    
    
};