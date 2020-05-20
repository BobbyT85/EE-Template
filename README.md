# README #

### What is this repository for? ###

Template with consolidated CSS from previous EE banners that use classes similar to h1 tags for different headline and subcopy sizes

The CSS is structured in the following way:
CSS that shouldn't be changed
	Preloader
	Util Classes
	Copy

Editable CSS
	CSS overrides for copy classes
	Constants - logos and CTA buttons
	Everything else


-	All divs can use the 'asset' class as it will apply absolute positioning and image related CSS to them

-	All copy containers should have the 'copyContainer' class

-	All child divs within a container should have 3 classes - size (or legals etc), font and colour e.g. class="h2 nobblee yellow"

-	To add the glow for text on top of a firefly background: 
	- Add and change the background colour for the 'copyContainer' class in the CSS overrides section
	- The background colour has a '55' at the end of the hex code for alpha. Change that accordingly but must be present so it's not a full solid colour. If in doubt, leave as is
	- Change only the colour and not the alpha for the 'shadowed' class in the same section
	- Add the 'shadowed' class to any containers that have a 'copyContainer' class

-	Any copy divs not placed inside a copy container should have an extra 'text' class added to it