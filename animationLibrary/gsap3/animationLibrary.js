var textArray;
const particleImageRoot = "https://s0.2mdn.net/creatives/assets/3620468/";

function createParticleText($array) {
    var scrapeArray = $array, tempArray = [];
	textArray = [];

	for (i = 0; i < scrapeArray.length; i++) {
        TweenMax.to(scrapeArray[i][0], 0, {autoAlpha:0, overwrite:false});
        
        //Identify variation of a break tag and replace with a | to use later on
		scrapeArray[i][1] = scrapeArray[i][1].replace("<br/>", "|");
		scrapeArray[i][1] = scrapeArray[i][1].replace("<br>", "|");

		//Forces the particle text to reset its bottom margin if there's only one line
		if (scrapeArray[i][1].indexOf("|") === -1) TweenMax.set(scrapeArray[i][0], {marginBottom:"-4px"});
	}

	for (i = 0; i < scrapeArray.length; i++) {
        TweenMax.to(scrapeArray[i][0], 0, {autoAlpha:0, overwrite:false});
        
        //Split string into individual characters
		tempArray[i] = scrapeArray[i][1].split("");
    }
    
	//Create a multidimensional array with the dynamic strings split up by characters
	// console.log(tempArray);
	for (i = 0; i < tempArray.length; i++) {
		var t = {}, a = [];
		t.container = scrapeArray[i][0];

		for (j = 0; j < tempArray[i].length; j++) a[j] = assignGif(tempArray[i][j]);

		t.copyLine = a;
		textArray[i] = t;
		//Assign the correct gif to its corresponding letter
		//t = object
		//a = array of gifs in string order
		// console.log(t, a);
	}

	for (i = 0; i < textArray.length; i++) {
		for (j = 0; j < textArray[i].copyLine.length; j++) {
            //Creates an img tag and adds the gif to it
            //Checks if the gif URL is 'newLine' which then adds a break tag rather than a new img

			// console.log(textArray[i])
			if (textArray[i].copyLine[j] !== "newLine") {
				var tempImage 	= document.createElement("img");
				tempImage.id 	= textArray[i].container.id + "_character" + j;
				tempImage.src 	= textArray[i].copyLine[j];
				tempImage.classList.add("character");
				textArray[i].container.appendChild(tempImage);
			} else {
				var br = document.createElement("br");
				textArray[i].container.appendChild(br);
			}
		}
	}

	// console.log(textArray);
}

function assignGif($character) {
	var image;

    //Runs through all individual characters to assign it its corresponding gif
    //The | character returns "newLine" to add a break tag later on in the process   
	switch ($character) {
		case "A":	image = particleImageRoot.concat("a.gif");	break;
		case "B":	image = particleImageRoot.concat("b.gif");	break;
		case "C":	image = particleImageRoot.concat("c.gif");	break;
		case "D":	image = particleImageRoot.concat("d.gif");	break;
		case "E":	image = particleImageRoot.concat("e.gif");	break;
		case "F":	image = particleImageRoot.concat("f.gif");	break;
		case "G":	image = particleImageRoot.concat("g.gif");	break;
		case "H":	image = particleImageRoot.concat("h.gif");	break;
		case "I":	image = particleImageRoot.concat("i.gif");	break;
		case "J":	image = particleImageRoot.concat("j.gif");	break;
		case "K":	image = particleImageRoot.concat("k.gif");	break;
		case "L":	image = particleImageRoot.concat("l.gif");	break;
		case "M":	image = particleImageRoot.concat("m.gif");	break;
		case "N":	image = particleImageRoot.concat("n.gif");	break;
		case "O":	image = particleImageRoot.concat("o.gif");	break;
		case "P":	image = particleImageRoot.concat("p.gif");	break;
		case "Q":	image = particleImageRoot.concat("q.gif");	break;
		case "R":	image = particleImageRoot.concat("r.gif");	break;
		case "S":	image = particleImageRoot.concat("s.gif");	break;
		case "T":	image = particleImageRoot.concat("t.gif");	break;
		case "U":	image = particleImageRoot.concat("u.gif");	break;
		case "V":	image = particleImageRoot.concat("v.gif");	break;
		case "W":	image = particleImageRoot.concat("w.gif");	break;
		case "X":	image = particleImageRoot.concat("x.gif");	break;
		case "Y":	image = particleImageRoot.concat("y.gif");	break;
		case "0":	image = particleImageRoot.concat("0.gif");	break;
		case "1":	image = particleImageRoot.concat("1.gif");	break;
		case "2":	image = particleImageRoot.concat("2.gif");	break;
		case "3":	image = particleImageRoot.concat("3.gif");	break;
		case "4":	image = particleImageRoot.concat("4.gif");	break;
		case "5":	image = particleImageRoot.concat("5.gif");	break;
		case "6":	image = particleImageRoot.concat("6.gif");	break;
		case "7":	image = particleImageRoot.concat("7.gif");	break;
		case "8":	image = particleImageRoot.concat("8.gif");	break;
		case "9":	image = particleImageRoot.concat("9.gif");	break;
		case "e":	image = particleImageRoot.concat("lowercaseE.gif");	break;
		case "h":	image = particleImageRoot.concat("lowercaseH.gif");	break;
		case "i":	image = particleImageRoot.concat("lowercaseI.gif");	break;
		case "o":	image = particleImageRoot.concat("lowercaseO.gif");	break;
		case "&":	image = particleImageRoot.concat("ampersand.gif");	break;
		case "'":	image = particleImageRoot.concat("apostrophe.gif");	break;
		case "*":	image = particleImageRoot.concat("asterisk.gif");	break;
		case "@":	image = particleImageRoot.concat("at.gif");	break;
		case ":":	image = particleImageRoot.concat("colon.gif");	break;
		case "!":	image = particleImageRoot.concat("exclamationMark.gif");	break;
		case "#":	image = particleImageRoot.concat("hashtag.gif");	break;
		case "-":	image = particleImageRoot.concat("hyphen.gif");	break;
		case "£":	image = particleImageRoot.concat("poundSign.gif");	break;
		case "?":	image = particleImageRoot.concat("questionMark.gif");	break;
		case " ":	image = particleImageRoot.concat("space.gif");	break;
		case "|":	image = "newLine";	break;
	}

	return image;
}













// Example usage
// prepareCopy(frame1CopyContainer, "left"); - sets the copy 10px to the left to animate to the right
// prepareCopy(frame2CopyContainer, "right"); - sets the copy 10px to the right to animate to the left
// prepareCopy(frame3CopyContainer, "up"); - sets the copy -10px to the top to animate down
// prepareCopy(frame4CopyContainer); - the default setting to set the copy 10px down to animate up

function prepareCopy($container, $direction) {
    var tX, tY, tempArray = [], splitPoint;
    
    //Removes empty particle text and copy elements
	for (i = 0; i < $container.children.length; i++) {
		if ($container.children[i].innerHTML.trim() === "") $container.removeChild($container.children[i]);
	}

    //Puts particle text and copy elements that are being used into a new temporary array
	for (i = 0; i < $container.children.length; i++) {
		if ($container.children[i].innerHTML.trim() !== "") tempArray.push($container.children[i]);
    }

    splitPoint = Math.round(tempArray.length * 0.5) - 1;
    
    if ($direction === "split") {
        for (i = 0; i < tempArray.length; i++) {
            TweenMax.to(tempArray[i], 0, {autoAlpha:0, y:(i <= splitPoint) ? -10 : 10, ease:Quad.easeInOut, overwrite:false});
        }
    } else {
        for (i = 0; i < $container.children.length; i++) {
            switch ($direction) {
                case "left":
                    tX = -10;
                    tY = 0;
                    break;

                case "right":
                    tX = 10;
                    tY = 0;
                    break;

                case "up":
                    tX = 0;
                    tY = -10;
                    break;

                case undefined:
                case null:
                case "down":
                default:
                    tX = 0;
                    tY = 10;
                    break;
            }

            TweenMax.to($container.children[i], 0, {autoAlpha:0, x:tX, y:tY});
        }
    }
}





// Example usage
// .call(animateCopy, [frame1CopyContainer, "in"], this, "animateFrame1") - copy fades and animates in 10px from bottom to top - ONLY USES "SPLIT" AS A DIRECTION PARAMETER
// .call(animateCopy, [frame1CopyContainer, "in"], this, "animateFrame1", "split") - copy fades and animates in 10px from the bottom and top - ONLY USES "SPLIT" AS A DIRECTION PARAMETER
// .call(animateCopy, [frame2CopyContainer, "out"], this, "animateFrame3") - default copy fade out and animates 10px up
// .call(animateCopy, [frame1CopyContainer, "out", "left"], this, "animateFrame2") - copy fades and animates out 10px from right to left
// .call(animateCopy, [frame2CopyContainer, "out", "right"], this, "animateFrame3") - copy fades and animates out 10px from left to right
// .call(animateCopy, [frame3CopyContainer, "out", "split"], this, "animateFrame4") - copy fades and animates out 10px by splitting the lines in HTMLBaseFontElement, with the top half animation up and the bottom half animating down

function animateCopy($container, $mode, $direction) {
    var tempArray = [], splitPoint = 0, tempCount = 0, containsParticleText = false;
    
    //Removes empty particle text and copy elements
	for (i = 0; i < $container.children.length; i++) {
		if ($container.children[i].innerHTML.trim() === "") $container.removeChild($container.children[i]);
	}

    //Puts particle text and copy elements that are being used into a new temporary array
	for (i = 0; i < $container.children.length; i++) {
		if ($container.children[i].innerHTML.trim() !== "") tempArray.push($container.children[i]);
	}

	for (i = 0; i < tempArray.length; i++) {
		for (j = 0; j < tempArray[i].children.length; j++) {
			if (tempArray[i].children[j].tagName === "IMG") {
				containsParticleText = true;
				break;
			}
		}
	}

    //The number of lines down to know where to animate a split transition
    splitPoint = Math.round(tempArray.length * 0.5) - 1;
    
    // Took these for loops out of the main one below as nested for loops impacted animation
    if ($mode === "in" && $direction === "split") {
        for (i = splitPoint; i >= 0; i--) {
			if (containsParticleText) {
				if (tempArray[i].id.includes("particle")) {
					TweenMax.to(tempArray[i], 0.35, {autoAlpha:1, y:0, ease:Quad.easeInOut, overwrite:false});
				} else {
					TweenMax.to(tempArray[i], 0.35, {delay:(0.075 * tempCount) + 1, autoAlpha:1, y:0, ease:Quad.easeInOut, overwrite:false});
				}
			} else {
				TweenMax.to(tempArray[i], 0.35, {delay:0.075 * tempCount, autoAlpha:1, y:0, ease:Quad.easeInOut, overwrite:false});
			}
            tempCount++;
        }
    } else if ($mode === "out" && $direction === "split") {
        for (i = tempArray.length - 1; i > splitPoint; i--) {
            TweenMax.to(tempArray[i], 0.35, {delay:0.075 * tempCount, autoAlpha:0, y:10, ease:Quad.easeInOut, overwrite:false});
            tempCount++;
        }
    }

	tempCount = 0;
	
	for (i = 0; i < tempArray.length; i++) {
		if ($mode === "in") {
            //Detects img tags and reloads character gifs by setting its source again
            for (j = 0; j < tempArray[i].children.length; j++) {
				if (tempArray[i].children[j].tagName === "IMG") tempArray[i].children[j].src = tempArray[i].children[j].src;
				// containsParticleText = (tempArray[i].children[j].tagName === "IMG") ? true : false;
            }

            if ($direction === "split") {
                // Lower half
                if (i >= splitPoint) {
					if (containsParticleText) {
						if (tempArray[i].id.includes("particle")) {
							TweenMax.to(tempArray[i], 0.35, {delay:0.075 * tempCount, autoAlpha:1, y:0, ease:Quad.easeInOut, overwrite:false});
						} else {
							TweenMax.to(tempArray[i], 0.35, {delay:(0.075 * tempCount) + 1, autoAlpha:1, y:0, ease:Quad.easeInOut, overwrite:false});
						}
					} else {
						TweenMax.to(tempArray[i], 0.35, {delay:0.075 * tempCount, autoAlpha:1, y:0, ease:Quad.easeInOut, overwrite:false});
					}

                    tempCount++;
                }
            } else {
				if (containsParticleText) {
					if (tempArray[i].id.includes("particle")) {
						TweenMax.to(tempArray[i], 0.35, {delay:0.075 * i, autoAlpha:1, x:0, y:0, ease:Quad.easeInOut, overwrite:false});
					} else {
						TweenMax.to(tempArray[i], 0.35, {delay:(0.075 * i) + 1, autoAlpha:1, x:0, y:0, ease:Quad.easeInOut, overwrite:false});
					}
				} else {
					TweenMax.to(tempArray[i], 0.35, {delay:0.075 * i, autoAlpha:1, x:0, y:0, ease:Quad.easeInOut, overwrite:false});
				}
            }
		} else if ($mode === "out") {
            //Detects img tags and clears character gifs by removing its source
            for (j = 0; j < tempArray[i].children.length; j++) {
                if (tempArray[i].children[j].tagName === "IMG") tempArray[i].children[j].src = "";
            }

			switch ($direction) {
                case "split":
                    // Upper half
					if (i <= splitPoint) TweenMax.to(tempArray[i], 0.35, {delay:0.075 * i, autoAlpha:0, y:-10, ease:Quad.easeInOut, overwrite:false});
                    break;

				case "left":
                    //oncomplete, remove img src
					TweenMax.to(tempArray[i], 0.35, {delay:0.075 * i, autoAlpha:0, x:-10, ease:Quad.easeInOut, overwrite:false});
					break;

				case "right":
					TweenMax.to(tempArray[i], 0.35, {delay:0.075 * i, autoAlpha:0, x:10, ease:Quad.easeInOut, overwrite:false});
					break;

                case "down":
                    TweenMax.to(tempArray[i], 0.35, {delay:0.075 * i, autoAlpha:0, y:10, ease:Quad.easeInOut, overwrite:false});
                    break;

				case undefined:
                case null:
                case "up":
                default:
                    TweenMax.to(tempArray[i], 0.35, {delay:0.075 * i, autoAlpha:0, y:-10, ease:Quad.easeInOut, overwrite:false});
                    break;
			}
		}
	}
}





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
