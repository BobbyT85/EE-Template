"use strict";

// * MINIIFY - https://javascript-minifier.com/
// * DEFAULT PARTICLE TEXT COLOUR IS YELLOW


// * ENDFRAME GIFS SET TO FALSE


// BUG - using 3 colours on multiple lines with a break tag - temp 'fix' seems to make it work for only 3 changes so far
// DONE - separate out animationLibrary to other files - util file with OS/browser detection - spritesheet for spritesheet animations etc
// TODO - also search for TODO to find other bits further down
// TODO - centre aligned particle text
// TODO - different font sizes per line
// WISHLIST - use user agent to detect device and load in webp, apng, gif etc accordingly
// WISHLIST - maybe do a device check and swap gifs for static pngs for older devices

// WISHLIST - could also in theory just have the one line and create the other divs dynamically at break tags





//* Check to see if saatchi object is there
//* Create one if not
if ((window["saatchi"] === undefined) || (window["saatchi"] === null)) window["saatchi"] = {};
console.log(":: SETTING EETEXT OBJECT ::");
// console.log("ee text", saatchi);






const 	particleImageRoot = "https://s0.2mdn.net/creatives/assets/3620468/";

var 	particleInfoArray = [], particleTextReady = false;


if (!saatchi.util) {
	var s = document.createElement("script");
    s.type = "text/javascript";
	s.src = "scripts/saatchi/util.js";
	 s.onload = function() {
		// console.log("loaded util");
		// console.log(saatchi.util.isEven())
		createEEText();
    };
    document.body.appendChild(s);
} else {
	createEEText();
}



function createEEText() {

/* ********************************************************************************************* */
/* ********************************************************************************************* */
// Copy & particle text functions

// Example usage
// prepareCopy(frame1CopyContainer, "left"); - sets the copy 10px to the left to animate to the right
// prepareCopy(frame2CopyContainer, "right"); - sets the copy 10px to the right to animate to the left
// prepareCopy(frame3CopyContainer, "up"); - sets the copy -10px to the top to animate down
// prepareCopy(frame4CopyContainer); - the default setting to set the copy 10px down to animate up


// console.log("CREATE EE", saatchi, saatchi.util);

var u = saatchi.util;

var eeTextObject = {
	prepareCopy:function ($container, $direction) {
		var container = $container.children, splitPoint, o;
		
		// Removes empty particle text and copy elements
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

	createParticleText: function($array, $debug) {
		var scrapeArray = $array, tempArray = [], textArray = [];
		
		// Find < and > in a span tag and get their positions
		// Put them in an array in an object for a global particle array
		for (i = 0; i < scrapeArray.length; i++) {
			var o = {}, a = [];
			
			// Identify variations of a break tag and replace with a '|' to use later on
			scrapeArray[i][1] = scrapeArray[i][1].replace("<br/>", "|");
			scrapeArray[i][1] = scrapeArray[i][1].replace("<br>", "|");
	
			for (j = 0; j < scrapeArray[i][1].length; j++) {
				if (scrapeArray[i][1].charAt(j) === "{") {
					a.push(j);
				}
	
				if (scrapeArray[i][1].charAt(j) === "}") {
					a.push(j + 1);
				}
			}
	
			o.div 			= scrapeArray[i][0];
			o.positions 	= a;
			particleInfoArray.push(o);
			// console.log(o);
		}
	
	
		// Create substrings of the span tags and put them in an array and add them to the their
		// corresponding object in the global particle array
		for (i = 0; i < particleInfoArray.length; i++) {
			var a1 = [], a2 = [], s1, s2;
	
			// Uses j+=2 to skip to every second iteration to bypass the end position of the span tag and to get to the start of the next span tag instead
			for (j = 0; j < particleInfoArray[i].positions.length; j+=2) {
				// Create the span tag string
				s1 = scrapeArray[i][1].substring(particleInfoArray[i].positions[j], particleInfoArray[i].positions[j + 1]);
				// console.log(s1);
				
				// Only pushes span tags to the array
				if (s1.indexOf("{") !== -1) {
					a1.push(s1);
	
					// Pushes a new string of just the class itself without the span tag
					s2 = s1.substring(s1.indexOf("{") + 1, s1.indexOf("}"));
					a2.push(s2);
					//console.log(s2);
				}
			}
			
			particleInfoArray[i].colourTags 	= a1;
			particleInfoArray[i].foundClasses	= a2;
		}
	
	
		// String manipulation for span and break tags
		for (i = 0; i < scrapeArray.length; i++) {
			gsap.set(scrapeArray[i][0], {autoAlpha:0, overwrite:false});
			
			// Remove the span tags from the final copy string
			for (j = 0; j < particleInfoArray[i].colourTags.length; j++) {
				scrapeArray[i][1] = scrapeArray[i][1].replace(particleInfoArray[i].colourTags[j], "");
			}
			
			// Identify variations of a break tag and replace with a '|' to use later on
			scrapeArray[i][1] = scrapeArray[i][1].replace("<br/>", "|");
			scrapeArray[i][1] = scrapeArray[i][1].replace("<br>", "|");
	
			// Forces the particle text to reset its bottom margin if there's only one line
			// TODO - might need to change the marginBottom value depending on particle text font size
			if (scrapeArray[i][1].indexOf("|") === -1) gsap.set(scrapeArray[i][0], {marginBottom:"-4px"});
	
			// console.log(scrapeArray[i][1]);
		}
	
	
		// Calculate span points
		for (i = 0; i < scrapeArray.length; i++) {
			var counter = 0, a = [], n;
			for (j = 0; j < particleInfoArray[i].positions.length; j++) {
				// console.log(i, particleInfoArray[i].positions[j]);
			
				// Does an initial point for the 0 starting point of the string
				if (j === 0) { 
					a.push(particleInfoArray[i].positions[j]) 
					// console.log("new pos", particleInfoArray[i].positions[j]);
	
				// Checks to see if j is even and not 1, then does the calculation of a[j] - a[j - 1] + cumulativeAmount and pushes that to the temp array
				} else if (u.isEven(j) && j !== 1) {
					n = particleInfoArray[i].positions[j] - particleInfoArray[i].positions[j - 1] + counter;
					counter += n;
					// console.log("new pos", n);
					a.push(n);
				}
			}
	
			particleInfoArray[i].classPositions = a;
		}
	
	
		for (i = 0; i < scrapeArray.length; i++) {
			// Set particle text container alpha to 0
			gsap.set(scrapeArray[i][0], {autoAlpha:0, overwrite:false});
			
			// Split string into individual characters
			tempArray[i] = scrapeArray[i][1].split("");
		}
		
		
		// Create an array with the dynamic strings split up by characters
		// console.log(tempArray);
		for (i = 0; i < tempArray.length; i++) {
			var o = {}, a = [];
			o.container = scrapeArray[i][0];
	
			// Gets and assigns the URL to the corresponding character gif
			// Send a boolean flag for the endframe to load in endframe gifs
			// console.log(i, tempArray.length);
			for (j = 0; j < tempArray[i].length; j++) a[j] = assignGif(tempArray[i][j], (i !== tempArray.length - 1) ? false : true);
	
			// Assign the correct gif to its corresponding letter
			// t = object
			// a = array of gifs in string order
			// console.log(t, a);
			o.copyLine = a;
			textArray[i] = o;
		}
	
	
		// Merge particleInfoArray objects into textArray objects
		for (i = 0; i < particleInfoArray.length; i++) {
			for (var attrname in particleInfoArray[i]) { textArray[i][attrname] = particleInfoArray[i][attrname]; }
		}
	
	
		// Create and fill out arrays with span classes for every particle text character
		for (i = 0; i < textArray.length; i++) {
			// Create new array with length that matches the amount of characters in the copy line
			var a = new Array(textArray[i].copyLine.length);
	
			for (j = 1; j <= textArray[i].classPositions.length; j++) {
				// Example of fill that's easier to understand
				// fill with 0 from position 2 until position 4
				// console.log(array1.fill(0, 2, 4));
	
				// Uses the fill function to fill the array with the span class between the different span class positions
				// if (Array.prototype.fill !== undefined) 
				a = a.fill((textArray[i].foundClasses[j - 1]), textArray[i].classPositions[j - 1], textArray[i].classPositions[j]);
				// console.log(a, j);
			}
	
			textArray[i].classes = a;
		}
	
	
		// Add corresponding gifs to each particle text character
		for (i = 0; i < textArray.length; i++) {
			// console.log(textArray);
			for (j = 0; j < textArray[i].copyLine.length; j++) {
				if (textArray[i].copyLine[j] !== "newLine") {
					var tempImage 	= document.createElement("img");
					tempImage.id 	= textArray[i].container.id + "_character" + j;
					tempImage.src 	= textArray[i].copyLine[j];
					tempImage.classList.add("character");
					tempImage.classList.add(textArray[i].classes[j]);
					textArray[i].container.appendChild(tempImage);
				} else {
					var br = document.createElement("br");
					textArray[i].container.appendChild(br);
				}
			}
		}
	
	
		if ($debug === true) {
			console.log("\n\n\n");
			console.log("%c%s", "color:red;font-size:14px", "master particle text array:");
			console.log(textArray);
			console.log("\n\n\n");
		} else {
			// Clear out the arrays to free up resources
			while (textArray.length > 0) 			textArray.pop();
			while (particleInfoArray.length > 0) 	particleInfoArray.pop();
			textArray 								= null;
			particleInfoArray 						= null;
		}
	
	
		particleTextReady = true;
	},




	// Example usage
	// .call(animateCopy, [frame1CopyContainer, "in"], "animateFrame1") - copy fades and animates in 10px from bottom to top - ONLY USES "SPLIT" AS A DIRECTION PARAMETER
	// .call(animateCopy, [frame1CopyContainer, "in"], "animateFrame1", "split") - copy fades and animates in 10px from the bottom and top - ONLY USES "SPLIT" AS A DIRECTION PARAMETER
	// .call(animateCopy, [frame2CopyContainer, "out"], "animateFrame3") - default copy fade out and animates 10px up
	// .call(animateCopy, [frame1CopyContainer, "out", "left"], "animateFrame2") - copy fades and animates out 10px from right to left
	// .call(animateCopy, [frame2CopyContainer, "out", "right"], "animateFrame3") - copy fades and animates out 10px from left to right
	// .call(animateCopy, [frame3CopyContainer, "out", "split"], "animateFrame4") - copy fades and animates out 10px by splitting the lines in HTMLBaseFontElement, with the top half animation up and the bottom half animating down

	animateCopy: function($container, $mode, $direction, $duration) {
		var container = $container.children, splitPoint = 0, tempCount = 0, containsParticleText = false, 
			duration = ($duration !== undefined) ? $duration : 0.35, o;
		
		// Removes empty particle text and copy elements
		for (i = 0; i < $container.children.length; i++) {
			if ($container.children[i].innerHTML.trim() === "") $container.removeChild($container.children[i]);
		}

		// Detects if there's any particle text in the container divs
		// Stops the for loop as soon as an img tag is found
		for (i = 0; i < container.length; i++) {
			for (j = 0; j < container[i].children.length; j++) {
				if (container[i].children[j].tagName === "IMG") {
					containsParticleText = true;
					break;
				}
			}
		}

		// The number of lines down to know where to animate a split transition
		splitPoint = Math.round(container.length * 0.5) - 1;
		
		// Took these for loops for the split animation out of the main one below as nested for loops impacted animation
		if ($mode === "in" && $direction === "split") {
			for (i = splitPoint; i >= 0; i--) {
				if (containsParticleText) {
					// Makes sure the particle text is shown first before animating the rest of the copy in a split animation
					var delay = (container[i].id.indexOf("particle") !== -1) ? 0 : ((0.075 * tempCount) + 1);
					gsap.to(container[i], {duration:duration, delay:delay, autoAlpha:1, y:0, ease:"quad.inOut", overwrite:false});
				} else {
					gsap.to(container[i], {duration:duration, delay:0.075 * tempCount, autoAlpha:1, y:0, ease:"quad.inOut", overwrite:false});
				}
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
				// Detects img tags and reloads character gifs by setting its source again
				for (j = 0; j < container[i].children.length; j++) {
					if (container[i].children[j].tagName === "IMG") {
						if (u.detectBrowser() === "ie" || u.detectBrowser() === "edge") {
							container[i].children[j].src = container[i].children[j].src + "?" + new Date().getTime();
						} else {
							container[i].children[j].src = container[i].children[j].src;
						}
					}
				}

				switch ($direction) {
					case "split":			
						// Lower half
						if (i >= splitPoint) {
							if (containsParticleText) {
								var delay = (container[i].id.indexOf("particle") !== -1) ? (0.075 * tempCount) : ((0.075 * tempCount) + 1);
								gsap.to(container[i], {duration:duration, delay:delay, autoAlpha:1, x:0, y:0, ease:"quad.inOut", overwrite:false});
							} else {
								gsap.to(container[i], {duration:duration, delay:0.075 * tempCount, autoAlpha:1, y:0, ease:"quad.inOut", overwrite:false});
							}

							tempCount++;
						}
						break;
					
					case "down":
						if (containsParticleText) {
							var delay = (container[i].id.indexOf("particle") !== -1) ? (0.075 * i) : ((0.075 * i) + 1);
							gsap.to(container[i], {duration:duration, delay:delay, autoAlpha:1, x:0, y:0, ease:"quad.inOut", overwrite:false});
						} else {
							gsap.to(container[(container.length - 1) - i], {duration:duration, delay:0.075 * i, autoAlpha:1, x:0, y:0, ease:"quad.inOut", overwrite:false});
						}
						break;

					default:
						if (containsParticleText) {
							var delay = (container[i].id.indexOf("particle") !== -1) ? (0.075 * i) : ((0.075 * i) + 1);
							gsap.to(container[i], {duration:duration, delay:delay, autoAlpha:1, x:0, y:0, ease:"quad.inOut", overwrite:false});
						} else {
							gsap.to(container[i], {duration:duration, delay:0.075 * i, autoAlpha:1, x:0, y:0, ease:"quad.inOut", overwrite:false});
						}
						break;
				}
			} else if ($mode === "out") {
				switch ($direction) {
					case "split":
						// Upper half
						if (i <= splitPoint) gsap.to(container[i], {duration:duration, delay:0.075 * i, autoAlpha:0, y:-10, ease:"quad.inOut", overwrite:false, onComplete:removeParticleTextImage, onCompleteParams:[container[i]]});
						break;
					case "left": 	o  = {x:-10, y:0};	break;
					case "right":	o  = {x:10, y:0}; 	break;
					case "down": 	o  = {x:0, y:10};	break;
					case undefined: case null: case "up": default: o = {x:0, y:-10}; break;
				}

				switch ($direction) {
					case "down":
						gsap.to(container[(container.length - 1) - i], {duration:duration, delay:0.075 * i, autoAlpha:0, x:o.x, y:o.y, ease:"quad.inOut", overwrite:false, onComplete:removeParticleTextImage, onCompleteParams:[container[i]]});
						break;
					case "left":
					case "right":
					case "up":
						gsap.to(container[i], {duration:duration, delay:0.075 * i, autoAlpha:0, x:o.x, y:o.y, ease:"quad.inOut", overwrite:false, onComplete:removeParticleTextImage, onCompleteParams:[container[i]]});
						break;
				}
			}
		}
	}
}











function assignGif($character, $endframe) {
	var image;

    // Runs through all individual characters to assign it its corresponding gif
	// The '|' character returns "newLine" to add a break tag later on in the process   

	// $endframe = true;
	
	// TODO - check for any other missing characters like a comma and full stop for example

	switch ($character) {
		case "A":	image = particleImageRoot.concat("a" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "B":	image = particleImageRoot.concat("b" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "C":	image = particleImageRoot.concat("c" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "D":	image = particleImageRoot.concat("d" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "E":	image = particleImageRoot.concat("e" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "F":	image = particleImageRoot.concat("f" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "G":	image = particleImageRoot.concat("g" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "H":	image = particleImageRoot.concat("h" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "I":	image = particleImageRoot.concat("i" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "J":	image = particleImageRoot.concat("j" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "K":	image = particleImageRoot.concat("k" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "L":	image = particleImageRoot.concat("l" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "M":	image = particleImageRoot.concat("m" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "N":	image = particleImageRoot.concat("n" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "O":	image = particleImageRoot.concat("o" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "P":	image = particleImageRoot.concat("p" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "Q":	image = particleImageRoot.concat("q" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "R":	image = particleImageRoot.concat("r" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "S":	image = particleImageRoot.concat("s" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "T":	image = particleImageRoot.concat("t" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "U":	image = particleImageRoot.concat("u" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "V":	image = particleImageRoot.concat("v" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "W":	image = particleImageRoot.concat("w" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "X":	image = particleImageRoot.concat("x" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "Y":	image = particleImageRoot.concat("y" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "0":	image = particleImageRoot.concat("0" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "1":	image = particleImageRoot.concat("1" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "2":	image = particleImageRoot.concat("2" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "3":	image = particleImageRoot.concat("3" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "4":	image = particleImageRoot.concat("4" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "5":	image = particleImageRoot.concat("5" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "6":	image = particleImageRoot.concat("6" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "7":	image = particleImageRoot.concat("7" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "8":	image = particleImageRoot.concat("8" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "9":	image = particleImageRoot.concat("9" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "e":	image = particleImageRoot.concat("lowercaseE" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "h":	image = particleImageRoot.concat("lowercaseH" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "i":	image = particleImageRoot.concat("lowercaseI" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "o":	image = particleImageRoot.concat("lowercaseO" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "&":	image = particleImageRoot.concat("ampersand" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "'":	image = particleImageRoot.concat("apostrophe" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "*":	image = particleImageRoot.concat("asterisk" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "@":	image = particleImageRoot.concat("at" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case ":":	image = particleImageRoot.concat("colon" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case ",":	image = particleImageRoot.concat("comma" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "!":	image = particleImageRoot.concat("exclamationMark" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case ".":	image = particleImageRoot.concat("fullStop" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "#":	image = particleImageRoot.concat("hashtag" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "-":	image = particleImageRoot.concat("hyphen" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "£":	image = particleImageRoot.concat("poundSign" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "?":	image = particleImageRoot.concat("questionMark" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case " ":	image = particleImageRoot.concat("space" + (($endframe) ? "_endframe" : "") + ".gif");	break;
		case "|":	image = "newLine";	break;
	}

	return image;
}











function removeParticleTextImage($array) {
	for (i = 0; i < $array.children.length; i++) { 
		if ($array.children[i].tagName === "IMG") $array.children[i].src = ""; 
		if ((i === $array.children.length - 1) && ($array.parentNode.parentNode)) $array.parentNode.parentNode.removeChild($array.parentNode);
	}
}




saatchi.eeText = eeTextObject;
console.log(":: EETEXT OBJECT SET ::", saatchi);
// console.log("complete", eeText);
// console.log("eeText", saatchi.eeText);




/* ********************************************************************************************* */
/* ********************************************************************************************* */
// Polyfills

// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill?v=example#Polyfill
Object.defineProperty(Array.prototype, "fill", {
    value: function($value) {
		if (this == null) throw new TypeError("this is null or not defined");

		var o 				= Object(this),
			len 			= o.length >>> 0,
			start 			= arguments[1],
			relativeStart 	= start >> 0,
			k 				= (relativeStart < 0) ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len),
			end 			= arguments[2],
			relativeEnd 	= (end === undefined) ? len : end >> 0,
			finalValue 		= (relativeEnd < 0) ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);

		while (k < finalValue) {
			o[k] = $value;
			k++;
		}

		return o;
    }
});
}