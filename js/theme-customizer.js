(function( $ ) {

        /**
         * Connects to the Theme Customizer's color picker, and changes the anchor
         * color whenever the user changes colors in the Theme Customizer.
         */
	wp.customize( 'tmx_link_color', function( value ) {
		value.bind( function( to ) {
			$( 'a' ).css( 'color', to );
		});
	});

}( jQuery ));