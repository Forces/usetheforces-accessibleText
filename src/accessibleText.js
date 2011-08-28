/**
 * jQuery plugin that returns the text nodes within the target element, combined/concatenated with any alt text.
 */

if ( jQuery !== "undefined" ) {
(function( $ ) {
	"use strict";

	$.fn.accessibleText = function() {

		return $.map( this.contents(), function( domElement ) {

			if ( domElement.nodeType === 3 ) {
				return domElement.data;
				
			} else if ( domElement.nodeType === 1 ) {

				var $element = $( domElement );

				if ( $element.is( "img" ) === true ) {
					return $element.attr( "alt" );

				} else if ( $element.find( "img[alt]" ).length > 0 ) {
					return $element.accessibleText();

				} else {
					return $element.text();
				}
			}

		}).join( "" );

	};

}( jQuery ));
}
