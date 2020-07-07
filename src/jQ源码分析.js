( function( global, factory ) {

})(window, function( window, noGlobal ){
    var jQuery = function( selector, context ){
        return new jQuery.fn.init( selector, context );
    }
    jQuery.fn = jQuery.prototype = {

    };

    var init= jQuery.fn.init = function( selector, context, root ) {

    };
    init.prototype = jQuery.fn


    if ( typeof noGlobal === "undefined" ) {
        window.jQuery = window.$ = jQuery;
    }
})