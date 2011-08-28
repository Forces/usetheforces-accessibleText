/**
 * jQuery plugin that returns the text nodes within the target element, combined/concatenated with any alt text.
 */

if ( jQuery !== "undefined" ) {
(function( $ ) {
	"use strict";

	$.fn.accessibleText = function () {

		var result = '';

		$(this).contents().each(function(){
			switch (this.nodeType) {
			case 3: // text
				result += $(this).text();
			break;
			case 1: // element
				if ($(this).prop('nodeName') === 'IMG' && typeof $(this).attr('alt') !== 'undefined') {
				result += $(this).attr('alt');
				}
			break;
			default: break; // otherwise ignore
			}
		});
		return result;
	};

}( jQuery ));
}
