"use strict";

// * MINIIFY - https://javascript-minifier.com/



//* Check to see if saatchi object is there
//* Create one if not
if ((window["saatchi"] === undefined) || (window["saatchi"] === null)) window["saatchi"] = {};
console.log(":: SETTING SPRITESHEET OBJECT ::");
// console.log(saatchi);





/* ********************************************************************************************* */
/* ********************************************************************************************* */
// Spritesheet functions
var spritesheetObject = {
	play: function($asset, $width, $height, $duration, $direction, $yoyo, $repeat, $callback) {
		// Play a spritesheet by passing the div, it's full width and height, duration and the direction to play
		// CSS isn't needed and values are calculated automatically from the passed in parameters
		// The CSS spritesheet class is only needed to make sure the background image is set to cover
		// Does mean that each spritesheet frame must be 100% width and height of the banner

		// Has a callback object parameter and uses the properties 'onStart', 'onUpdate' and 'onComplete' to run corresponding callbacks

		var fullWidth = $width, fullHeight = $height, 
			widthCount = fullWidth / $asset.offsetWidth, heightCount = fullHeight / $asset.offsetHeight,
			startWidth, startHeight, newX, newY;

			// console.log($asset.id, heightCount, $duration);

		// if (!$yoyo) this.resetSpritesheet($asset);
		if (!$yoyo) gsap.set($asset, {x:0, y:0});;
		
		switch ($direction) {
			case "horizontal": case "h":
				// Automatically calculate the distance and iterations needed for the horizontal spritesheet animation
				$asset.style.width 	= $width + "px";
				$asset.style.height = $height + "px";
				startWidth 			= fullWidth / widthCount;
				newX 				= -(startWidth * (widthCount - 1));
				widthCount--;
				// console.log(fullWidth, widthCount, startWidth, newX);
				window[$asset.id].widthCount = widthCount; 


				if ($callback === undefined) {
					gsap.to($asset, {duration:$duration, x:newX, ease:"steps(" + widthCount + ")", yoyo:$yoyo, repeat:$repeat, force3D:false, rotation:0.01, overwrite:false});
				} else {
					gsap.to($asset, {duration:$duration, x:newX, ease:"steps(" + widthCount + ")", yoyo:$yoyo, repeat:$repeat, force3D:false, rotation:0.01, overwrite:false,
						onStart:		function() { if ($callback.hasOwnProperty("onStart")) 		$callback.onStart(); },
						onUpdate:		function() { if ($callback.hasOwnProperty("onUpdate")) 		$callback.onUpdate(); },
						onComplete:		function() { if ($callback.hasOwnProperty("onComplete")) 	$callback.onComplete(); },
					});
				}
				break;

			case "vertical": case "v": default:
				// Automatically calculate the distance and iterations needed for the vertical spritesheet animation
				$asset.style.width 	= $width + "px";
				$asset.style.height = $height + "px";
				startHeight 		= fullHeight / heightCount;
				newY 				= -(startHeight * (heightCount - 1));
				heightCount--;
				// console.log($asset, fullHeight, heightCount, startHeight, newY);
				window[$asset.id].heightCount = heightCount; 

				if ($callback === undefined) {
					gsap.to($asset, {duration:$duration, y:newY, ease:"steps(" + heightCount + ")", yoyo:$yoyo, repeat:$repeat, force3D:false, rotation:0.01, overwrite:false});
				} else {
					gsap.to($asset, {duration:$duration, y:newY, ease:"steps(" + heightCount + ")", yoyo:$yoyo, repeat:$repeat, force3D:false, rotation:0.01, overwrite:false,
						onStart:		function() { if ($callback.hasOwnProperty("onStart")) 		$callback.onStart(); },
						onUpdate:		function() { if ($callback.hasOwnProperty("onUpdate")) 		$callback.onUpdate(); },
						onComplete:		function() { if ($callback.hasOwnProperty("onComplete")) 	$callback.onComplete(); },
					});
				}
				break;
		}
	},





	reverse: function($asset, $width, $height, $duration, $direction, $callback) {
		// Same as the function above but reversed so the sprite goes back to 0

		var fullWidth = $width, fullHeight = $height, 
			widthCount = fullWidth / $asset.offsetWidth, heightCount = fullHeight / $asset.offsetHeight;
		
		switch ($direction) {
			case "horizontal": case "h":
				// Automatically calculate the distance and iterations needed for the horizontal spritesheet animation
				$asset.style.width 	= $width + "px";
				$asset.style.height = $height + "px";
				// widthCount--;

				if ($callback === undefined) {
					gsap.to($asset, {duration:$duration, x:0, ease:"steps(" + window[$asset.id].widthCount + ")", force3D:false, rotation:0.01, overwrite:false});
				} else {
					gsap.to($asset, {duration:$duration, x:0, ease:"steps(" + window[$asset.id].widthCount + ")", force3D:false, rotation:0.01, overwrite:false,
						onStart:		function() { if ($callback.hasOwnProperty("onStart")) 		$callback.onStart(); },
						onUpdate:		function() { if ($callback.hasOwnProperty("onUpdate")) 		$callback.onUpdate(); },
						onComplete:		function() { if ($callback.hasOwnProperty("onComplete")) 	$callback.onComplete(); },
					});
				}
				break;

			case "vertical": case "v": default:
				// Automatically calculate the distance and iterations needed for the vertical spritesheet animation
				$asset.style.width 	= $width + "px";
				$asset.style.height = $height + "px";
				// heightCount--;
				// console.log($asset, heightCount);

				if ($callback === undefined) {
					gsap.to($asset, {duration:$duration, y:0, ease:"steps(" + window[$asset.id].heightCount + ")", force3D:false, rotation:0.01, overwrite:false});
				} else {
					gsap.to($asset, {duration:$duration, y:0, ease:"steps(" + window[$asset.id].heightCount + ")", force3D:false, rotation:0.01, overwrite:false,
						onStart:		function() { if ($callback.hasOwnProperty("onStart")) 		$callback.onStart(); },
						onUpdate:		function() { if ($callback.hasOwnProperty("onUpdate")) 		$callback.onUpdate(); },
						onComplete:		function() { if ($callback.hasOwnProperty("onComplete")) 	$callback.onComplete(); },
					});
				}
				break;
		}
	},	





	resetSpritesheet: function($asset) { gsap.set($asset, {x:0, y:0}); }
}


//* Check to see if saatchi object is there
//* Create one if not
// if (!window["saatchi"]) window["saatchi"] = {};
saatchi.spritesheet = spritesheetObject;
console.log(":: SPRITESHEET OBJECT SET ::", saatchi);
// console.log("complete", saatchi);
// console.log("spritesheet", saatchi.spritesheet);