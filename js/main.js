/*
    App specific methods, extends Instagram functions
*/

var App = (function(Instagram) {

    var publicFunction = {};

    // event listeners
    var _eventListeners = function() {
        // elements
        var $item = $('.js-item-image');
        var $image = $('.js-gallery-image');
        var $overlay = $('.gallery-overlay');
        var $body = $('body');

        // show image modal
        $item.on('click', function() {
            $image.attr('src', $(this).attr('src'));
            $body.addClass('active');
        });

        // close image modal
        $overlay.on('click', function() {
           $body.removeClass('active');
        });
    }

    // regex to get value of query string parameter
    var _parseUrl = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)')
                .exec(location.search) || [,""])[1]
                .replace(/\+/g, '%20') ) || null;
    };

    // check if user is logged in
    var _loginCheck = function() {
        return loggedIn = _parseUrl('login');
    };

    // output results, just pass data object
    var _outputResults = function(data) {

        var $content = $('.content');
        var context;
        var html;

        // using handlebars for templating
        var source   = $("#item-template").html();
        var template = Handlebars.compile(source);

        for (var i = 0; i < data.length; i++) {
            context = {
                itemImage: data[i].images.standard_resolution.url,
                profileImage: data[i].user.profile_picture,
                username: data[i].user.username,
                itemText: data[i].caption.text
            };

            $content.append(template(context));
        }
    };

    // public methods that are available outside of function

    publicFunction.init = function() {
        // if user is logged in, then authenticate, else send to login page
        (_loginCheck() ? Instagram.authenticate() : Instagram.login());

        // async function, use defer
        var result = Instagram.getResultsTag('tmz'); // pass tag

        result.success(function(response) {
            _outputResults(response.data);
            _eventListeners();
        });
    };

    return publicFunction;

})( Instagram || {} );


// ready go!
$(document).ready(function() {
    // initialize app
    App.init();
});