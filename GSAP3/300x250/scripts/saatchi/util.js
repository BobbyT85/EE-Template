"use strict";

// * MINIIFY - https://javascript-minifier.com/



//* Check to see if saatchi object is there
//* Create one if not
if ((window["saatchi"] === undefined) || (window["saatchi"] === null)) window["saatchi"] = {};
console.log(":: SETTING UTIL OBJECT ::");



var 	currentDate = Date.now(), date = new Date(2020, 3, 9), timestamp = date.getTime(), timestampMode;





/* ********************************************************************************************* */
/* ********************************************************************************************* */
// Utility functions
var utilObject = {
	isEven: function ($n) { return $n % 2 === 0;},
	isOdd: function($n) { return $n % 2;},
	getRandomNumberRange: function($min, $max) 	{ return Math.random() * ($max - $min) + $min; },
	getRandomIntegerRange: function($min, $max) 	{ return Math.floor(Math.random() * ($max - $min + 1)) + $min; },
	toDecimalPoint: function($n, $dP)			{ return parseFloat($n.toFixed($dP)); },

	detectOS: function () {
		// * https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js
		var userAgent 		= window.navigator.userAgent,
		platform 			= window.navigator.platform,
		macOSPlatforms 		= ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "Darwin", "darwin"],
		windowsPlatforms 	= ["Win32", "Win64", "Windows", "WinCE"],
		iOSPlatforms 		= ["iPhone", "iPad", "iPod"],
		os 					= null;

		if (macOSPlatforms.indexOf(platform) !== -1) {
			os = "Mac OS";
		} else if (iOSPlatforms.indexOf(platform) !== -1) {
			os = "iOS";
		} else if (windowsPlatforms.indexOf(platform) !== -1) {
			os = "Windows";
		} else if (/Android/.test(userAgent)) {
			os = "Android";
		} else if (!os && /Linux/.test(platform)) {
			os = "Linux";
		}

		// console.log(os);
		return os;
	},

	detectBrowser: function() {
		// * https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
		// Using ducktyping(?)
		var isOpera, isFirefox, isSafari, isIE, isEdge, isChrome, isEdgeChromium, isBlink, browser;

		// Opera 8.0+
		isOpera 		= (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;

		// Firefox 1.0+
		isFirefox 		= typeof InstallTrigger !== "undefined";

		// Safari 3.0+ "[object HTMLElementConstructor]" 
		isSafari 		= /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window["safari"] || (typeof safari !== "undefined" && safari.pushNotification));

		// Internet Explorer 6-11
		isIE 			= /*@cc_on!@*/false || !!document.documentMode;

		// Edge 20+
		isEdge 			= !isIE && !!window.StyleMedia;

		// Chrome 1 - 79
		isChrome 		= !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

		// Edge (based on chromium) detection
		isEdgeChromium 	= isChrome && (navigator.userAgent.indexOf("Edg") != -1);

		// Blink engine detection
		isBlink 		= (isChrome || isOpera) && !!window.CSS;

		browser 		= 	"Detecting browsers by ducktyping:\n";
		browser 		+= 	"isFirefox: " + isFirefox + "\n";
		browser 		+= 	"isChrome: " + isChrome + "\n";
		browser 		+= 	"isSafari: " + isSafari + "\n";
		browser 		+= 	"isOpera: " + isOpera + "\n";
		browser 		+= 	"isIE: " + isIE + "\n";
		browser 		+= 	"isEdge: " + isEdge + "\n";
		browser 		+= 	"isEdgeChromium: " + isEdgeChromium + "\n";
		browser 		+= 	"isBlink: " + isBlink + "\n";

		if 		(isOpera)			{ browser = "opera"; }
		else if (isFirefox)			{ browser = "firefox"; }
		else if (isSafari)			{ browser = "safari"; }
		else if (isIE)				{ browser = "ie"; }
		else if (isEdge)			{ browser = "edge"; }
		else if (isChrome)			{ browser = "chrome"; }
		else if (isEdgeChromium)	{ browser = "edgeChromium"; }
		else if (isBlink)			{ browser = "blink"; }

		// console.log(browser);
		return browser;
	},

	getTimestamp: function($date) {
		currentDate 	= Date.now();
		date 			= $date;
		timestamp 		= date.getTime();
		timestampMode 	= (currentDate >= timestamp) ?  "after" : "before";

		return timestampMode;
	}
}

saatchi.util = utilObject;
console.log(":: UTIL OBJECT SET ::", saatchi);
// console.log("complete", saatchi);
// console.log("util", saatchi.util);





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