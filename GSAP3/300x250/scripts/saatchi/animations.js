"use strict";

// * MINIIFY - https://javascript-minifier.com/



//* Check to see if saatchi object is there
//* Create one if not
if ((window["saatchi"] === undefined) || (window["saatchi"] === null)) window["saatchi"] = {};
console.log(":: SETTING ANIMATIONS OBJECT ::");


/* ********************************************************************************************* */
/* ********************************************************************************************* */
// Copy functions

// Example usage
// prepareCopy(frame1CopyContainer, "left"); - sets the copy 10px to the left to animate to the right
// prepareCopy(frame2CopyContainer, "right"); - sets the copy 10px to the right to animate to the left
// prepareCopy(frame3CopyContainer, "up"); - sets the copy -10px to the top to animate down
// prepareCopy(frame4CopyContainer); - the default setting to set the copy 10px down to animate up

var animationsObject = {
	prepareSlideCopy: function($container, $direction) {
		var container = $container.children, splitPoint, o;
		
		// Removes empty copy elements within the container
		for (i = 0; i < container.length; i++) {
			if (container[i].innerHTML.trim() === "") $container.removeChild(container[i]);
		}

		// Gets the split point to know where to split all the lines of copy in half to animate from
		splitPoint = Math.round(container.length * 0.5) - 1;
		
		if ($direction === "split") {
			for (i = 0; i < container.length; i++) {
				// Moves the copy div up or down depending on where they are in relation to the split point
				gsap.set(container[i], {autoAlpha:0, y:(i <= splitPoint) ? -10 : 10, ease:"quad.inOut", overwrite:false});
			}
		} else {
			for (i = 0; i < container.length; i++) {
				// Moves the copy div according to where they need to be at the start of their designated animation
				switch ($direction) {
					case "left": 	o = {x:-10, y:0}; 	break;
					case "right": 	o = {x:10, y:0}; 	break;
					case "up": 		o = {x:0, y:-10}; 	break;
					case undefined: case null: case "down": default: o = {x:0, y:10}; break;
				}

				gsap.set(container, {autoAlpha:0, x:o.x, y:o.y});
			}
		}
	},





	// Example usage
	// .call(animateCopy, [frame1CopyContainer, "in"], "animateFrame1") - copy fades and animates in 10px from bottom to top - ONLY USES "SPLIT" AS A DIRECTION PARAMETER
	// .call(animateCopy, [frame1CopyContainer, "in"], "animateFrame1", "split") - copy fades and animates in 10px from the bottom and top - ONLY USES "SPLIT" AS A DIRECTION PARAMETER
	// .call(animateCopy, [frame2CopyContainer, "out"], "animateFrame3") - default copy fade out and animates 10px up
	// .call(animateCopy, [frame1CopyContainer, "out", "left"], "animateFrame2") - copy fades and animates out 10px from right to left
	// .call(animateCopy, [frame2CopyContainer, "out", "right"], "animateFrame3") - copy fades and animates out 10px from left to right
	// .call(animateCopy, [frame3CopyContainer, "out", "split"], "animateFrame4") - copy fades and animates out 10px by splitting the lines in HTMLBaseFontElement, with the top half animation up and the bottom half animating down

	animateSlideCopy: function($container, $mode, $direction, $duration) {
		var container = $container.children, splitPoint = 0, tempCount = 0,
			duration = ($duration !== undefined) ? $duration : 0.35, o;
		
		// Removes empty copy elements within the container
		for (i = 0; i < $container.children.length; i++) {
			if ($container.children[i].innerHTML.trim() === "") $container.removeChild($container.children[i]);
		}



		// The number of lines down to know where to animate a split transition
		splitPoint = Math.round(container.length * 0.5) - 1;
		
		// Took these for loops for the split animation out of the main one below as nested for loops impacted animation
		if ($mode === "in" && $direction === "split") {
			for (i = splitPoint; i >= 0; i--) {
				gsap.to(container[i], {duration:duration, delay:0.075 * tempCount, autoAlpha:1, y:0, ease:"quad.inOut", overwrite:false});
				tempCount++;
			}
		} else if ($mode === "out" && $direction === "split") {
			for (i = container.length - 1; i > splitPoint; i--) {
				gsap.to(container[i], {duration:duration, delay:0.075 * tempCount, autoAlpha:0, y:10, ease:"quad.inOut", overwrite:false});
				tempCount++;
			}
		}

		// Reset temp count
		tempCount = 0;
		
		for (i = 0; i < container.length; i++) {
			if ($mode === "in") {
				switch ($direction) {
					case "split":			
						// Lower half
						if (i >= splitPoint) {
							gsap.to(container[i], {duration:duration, delay:0.075 * tempCount, autoAlpha:1, y:0, ease:"quad.inOut", overwrite:false});
							tempCount++;
						}
						break;
					
					case "down":
						gsap.to(container[(container.length - 1) - i], {duration:duration, delay:0.075 * i, autoAlpha:1, x:0, y:0, ease:"quad.inOut", overwrite:false});
						break;

					default:
						gsap.to(container[i], {duration:duration, delay:0.075 * i, autoAlpha:1, x:0, y:0, ease:"quad.inOut", overwrite:false});
						break;
				}
			} else if ($mode === "out") {
				switch ($direction) {
					case "split":
						// Upper half
						if (i <= splitPoint) gsap.to(container[i], {duration:duration, delay:0.075 * i, autoAlpha:0, y:-10, ease:"quad.inOut", overwrite:false});
						break;
					case "left": 	o  = {x:-10, y:0};	break;
					case "right":	o  = {x:10, y:0}; 	break;
					case "down": 	o  = {x:0, y:10};	break;
					case undefined: case null: case "up": default: o = {x:0, y:-10}; break;
				}

				switch ($direction) {
					case "down":
						gsap.to(container[(container.length - 1) - i], {duration:duration, delay:0.075 * i, autoAlpha:0, x:o.x, y:o.y, ease:"quad.inOut", overwrite:false});
						break;
					case "left":
					case "right":
					case "up":
						gsap.to(container[i], {duration:duration, delay:0.075 * i, autoAlpha:0, x:o.x, y:o.y, ease:"quad.inOut", overwrite:false});
						break;
				}
			}
		}
	},





	/* ********************************************************************************************* */
	/* ********************************************************************************************* */
	// Animation functions

	flickerOn: function($array, $duration, $strength, $points) {
		if ($duration === undefined) 	$duration = getRandomNumberRange(1, 4);
		if ($strength === undefined) 	$strength = 3;
		if ($points === undefined)		$points = 30;

		for (i = 0; i < $array.length; i++) {
			gsap.fromTo($array[i], {autoAlpha:0}, {duration:$duration, autoAlpha:1, ease:"rough({template:quad.inOut, strength:" + $strength + ", points:" + $points + ", taper:none, randomize:true, clamp:false})", overwrite:true})
		}
	},

	flickerOff: function($array, $duration, $strength, $points) {
		if ($duration === undefined) 	$duration = getRandomNumberRange(1, 4);
		if ($strength === undefined) 	$strength = 3;
		if ($points === undefined)		$points = 30;

		for (i = 0; i < $array.length; i++) {
			gsap.frromTo($array[i], {autoAlpha:1}, {duration:$duration, autoAlpha:0, ease:"rough({template:quad.inOut, strength:" + $strength + ", points:" + $points + ", taper:none, randomize:true, clamp:false})", overwrite:true})
		}
	},

	// DONE - still working on it
	flicker: function($array, $duration, $strength, $points) {
		if ($duration === undefined) 	$duration = getRandomNumberRange(1, 4);
		if ($strength === undefined) 	$strength = 2;
		if ($points === undefined)		$points = 10;

		for (i = 0; i < $array.length; i++) {
			gsap.fromTo($array[i], {autoAlpha:0.25}, {duration:$duration, autoAlpha:1, ease:"rough({template:none, strength:" + $strength + ", points:" + $points + ", taper:none, randomize:true, clamp:false})", overwrite:true})
		}
	}
}


saatchi.animations = animationsObject;
console.log(":: ANIMATIONS OBJECT SET ::", saatchi);