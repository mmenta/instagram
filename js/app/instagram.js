/*
    I decoupled the instagram functions from the specific app functions
    for reusability, wrapped as an anonymous function in order to
    provide better encapsulation.
*/

var Instagram = (function () {

    var publicFunction = {};
    var token;

    // instagram parameters specific per app
    var instagram = {
        clientID: '349b9ec41183472cb59373dd2ce9b83a'
    }

    // public methods that are available outside of function

    // get instagram access token
    publicFunction.authenticate = function() {
        var hash = window.location.hash.substr(1);

        // set token as global variable to be used througout app
        token = hash.split('=')[1];
    };

    // redirects to instagram login
    publicFunction.login = function() {
        var endpoint = 'https://instagram.com/oauth/authorize/?';
        //var redirect_uri = window.location.href + '?login=true';
        var redirect_uri = 'http://localhost:8000?login=true';

        window.location = endpoint + 'client_id=' + instagram.clientID + '&redirect_uri=' + redirect_uri + '&response_type=token';
    };

    // will return an object of hashtag results, just pass in tag
    publicFunction.getResultsTag = function(tag) {
        var endpoint = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent';

        return $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: endpoint + "?access_token=" + token
        });
    };

    return publicFunction;

})();