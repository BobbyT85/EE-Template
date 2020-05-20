"use strict";

/*************************************************************************************************/
/* Custom variables - divs are automatically made into vars in vars.min.js ***********************/
/*************************************************************************************************/

var tl = gsap.timeline(),
	buttonArray, button, disabledArray, disabledButton, clickthroughArray, clickthroughButton, type,
	particleTimeout,
	i, j;


function setDynamicContent() {
	// Dynamic Content variables and sample values
	Enabler.setProfileId(10495229);
	var devDynamicContent = {};

	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1 							= [{}];
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0]._id 					= 0;
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Unique_ID 			= 1;
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Reporting_Label 		= "XMAS_SIMO_2019_300x250";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Start_Date 			= {};
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Start_Date.RawValue 	= "2019-09-30";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Start_Date.UtcValue 	= 1569801600000;
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].End_Date 				= {};
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].End_Date.RawValue 	= "2019-11-25 23:59:00";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].End_Date.UtcValue 	= 1574726340000;
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Exit_URL 				= {};
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Exit_URL.Url 			= "https://shop.ee.co.uk/sim-only/pay-monthly-phones";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].logo1 				= {};
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].logo1.Type 			= "file";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].logo1.Url 			= "https://s0.2mdn.net/ads/richmedia/studio/11561/11561_20190930084948472_apple-music.png";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].logo2 				= {};
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].logo2.Type 			= "file";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].logo2.Url 			= "https://s0.2mdn.net/ads/richmedia/studio/11561/11561_20190814064442307_rm_h1_2019_medium_2x.png";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_particletext 	= "{particleYellow}25GB FOR £20<br>{particleWhite}BECAUSE WHY {particleYellow}NOT?";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_A 		= "per month on a 12 month plan";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_B 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_C 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_D	 	= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_E 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_F 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_particletext 	= "PLUS, {particleWhite}GET<br>6 FREE {particleYellow}MONTHS";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_A 		= "of Apple Music";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_B 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_C 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_D	 	= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_E 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_F 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_particletext 	= "{particleWhite}ALL {particleGreen}ON THE UK'S<br>NO. 1 {particleWhite}NETWORK";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_A 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_B 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_C 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_D	 	= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_E	 	= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_F 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_particletext 	= "25GB FOR £20";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_A 		= "per month on a 12 month plan";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_B 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_C 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_D 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_E 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_F	 	= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_legals 		= "Annual price changes apply";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame4_offerends 		= "Offer ends 26th November";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].termsText 			= "Terms apply";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].isActive 				= true;
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].isDefault 			= true;
	Enabler.setDevDynamicContent(devDynamicContent);


	console.log('setting dynamic data')


	saatchi.eeText.createParticleText([
		[Frame_1_particletext, dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_particletext],
		[Frame_2_particletext, dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_particletext],
		[Frame_3_particletext, dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_particletext],
		[Frame_4_particletext, dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_particletext],
	], true);


	Frame_1_text_A.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_A;
	Frame_1_text_B.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_B;
	Frame_1_text_C.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_C;
	Frame_1_text_D.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_D;
	Frame_1_text_E.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_E;
	Frame_1_text_F.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_F;
	Frame_2_text_A.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_A;
	Frame_2_text_B.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_B;
	Frame_2_text_C.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_C;
	Frame_2_text_D.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_D;
	Frame_2_text_E.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_E;
	Frame_2_text_F.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_F;
	Frame_3_text_A.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_A;
	Frame_3_text_B.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_B;
	Frame_3_text_C.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_C;
	Frame_3_text_D.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_D;
	Frame_3_text_E.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_E;
	Frame_3_text_F.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_F;
	Frame_4_text_A.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_A;
	Frame_4_text_B.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_B;
	Frame_4_text_C.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_C;
	Frame_4_text_D.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_D;
	Frame_4_text_E.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_E;
	Frame_4_text_F.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_F;
	Frame_4_legals.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_legals;
	Frame_4_offerends.innerHTML 	= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame4_offerends;
	termsText.innerHTML 			= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].termsText;
}



/*************************************************************************************************/
/* Banner initialisation, loading, event listening etc *******************************************/
/*************************************************************************************************/

function init() {
	console.log(saatchi, saatchi.util);
	saatchi.util.detectOS();
	saatchi.util.detectBrowser();

	createTimeline();
	addEventListeners();

	setDynamicContent();

	politeLoad([
		{url:"images/background.jpg", div:"background"},
		{url:"images/cars.png", div:"cars"},
		{url:"images/cars_end.png", div:"carsEnd"},
		{url:"images/cars_endFrame.png", div:"cars_endFrame"},
		{url:"images/intro.png", div:"intro"},
		{url:"images/ctaButton.png", div:"ctaButton"},
		{url:"images/apple-music_300x250.png", div:"appleMusic"},
		{url:"images/logo.png", div:"logo"},
	],

	function() {
		console.log(":: all loads complete ::");
		// gsap.delayedCall(1, function() { tl.play(); });

		particleTimeout = setTimeout(function() {
			if (particleTextReady) {
				clearTimeout(particleTimeout);
				gsap.delayedCall(1, function() { tl.play(); });
			}
		}, 500);
	});
}

function addEventListeners() {
	buttonArray = [container];
	for (i = 0; i < buttonArray.length; i++) {
		button = buttonArray[i];
		button.style.cursor = "pointer";
		button.addEventListener("mouseover", buttonHandler, false);
		button.addEventListener("mouseout", buttonHandler, false);
		button.addEventListener("click", buttonHandler, false);
	}

	disabledArray = [];
	for (i = 0; i < disabledArray.length; i++) {
		disabledButton = disabledArray[i];
		disabledButton.style.pointerEvents = "none";
	}
}





/*************************************************************************************************/
/* Timeline & any other animation & logic ********************************************************/
/*************************************************************************************************/

function createTimeline() {
	tl	.set(cars_endFrame, {autoAlpha:0})
		.set(animationContainer, {transformOrigin:"70% 55%", scale:1.8})
		.call(function() {
			saatchi.eeText.prepareCopy(frame1CopyContainer, "left");
			saatchi.eeText.prepareCopy(frame2CopyContainer);
			saatchi.eeText.prepareCopy(frame3CopyContainer, "split");
			saatchi.eeText.prepareCopy(frame4CopyContainer);

			ctaButton.style.pointerEvents = "none";

			console.log(saatchi, saatchi.spritesheet);
		})

		
		.addLabel("start")

		.call(function() {
			console.log("ASD");
			console.log(saatchi);
		}, [], "start")

		.to(preloader, {duration:0.35, autoAlpha:0, ease:"quad.inOut", overwrite:false})
		.call(saatchi.spritesheet.play, [intro, 300, 3000, 0.5, "vertical", false, 0], "start+=2")
		.to(animationContainer, {duration:1.5, transformOrigin:"70% 55%", scale:1, ease:"quad.inOut"}, "start+=2")
		.call(saatchi.spritesheet.play, [cars, 300, 15250, 2, "vertical", false, 0], "start+=2")


		.addLabel("animateFrame1", 3)
		.call(saatchi.eeText.animateCopy, [frame1CopyContainer, "in"], "animateFrame1")
		// .addPause()


		.addLabel("animateFrame2", 6.25)
		// .call(resetSpritesheet, [cars], "animateFrame2")
		.call(saatchi.spritesheet.play, [cars, 300, 15250, 2, "vertical", false, 0], "animateFrame2")
		.call(saatchi.eeText.animateCopy, [frame1CopyContainer, "out", "left"], "animateFrame2")
		.call(saatchi.eeText.animateCopy, [frame2CopyContainer, "in"], "animateFrame2+=1")


		.addLabel("animateFrame3", 10.5)
		// .call(resetSpritesheet, [cars], "animateFrame3")
		.call(saatchi.spritesheet.play, [cars, 300, 15250, 2, "vertical", false, 0, {onStart:function(){console.log("starting spritesheet")}, onComplete:function(){console.log("completed")}}], "animateFrame3")
		.call(saatchi.eeText.animateCopy, [frame2CopyContainer, "out", "right"], "animateFrame3")
		.call(saatchi.eeText.animateCopy, [frame3CopyContainer, "in", "split"], "animateFrame3+=1")
		.from(appleMusic, {duration:0.35, autoAlpha:0}, "animateFrame3+=1.75")
		.from(termsText, {duration:0.35, autoAlpha:0}, "animateFrame3+=1.75")


		.addLabel("animateFrame4", 14.75)
		// .call(resetSpritesheet, [cars], "animateFrame4")
		.call(saatchi.spritesheet.play, [cars, 300, 15250, 2, "vertical", false, 0], "animateFrame4")
		.call(saatchi.eeText.animateCopy, [frame3CopyContainer, "out", "split"], "animateFrame4")
		.to(appleMusic, {duration:0.35, autoAlpha:0}, "animateFrame4")
		.to(termsText, {duration:0.35, autoAlpha:0}, "animateFrame4")
		.call(saatchi.eeText.animateCopy, [frame4CopyContainer, "in"], "animateFrame4+=0.5")
		.call(saatchi.spritesheet.play, [ctaButton, 300, 7250, 0.35, "vertical", false, 0], "animateFrame4+=2")
		.call(saatchi.spritesheet.play, [carsEnd, 300, 10750, 2, "vertical", true, 2, {onComplete:function() {
			gsap.set(carsEnd, {autoAlpha:0, overwrite:false});
			gsap.set(cars_endFrame, {autoAlpha:1, overwrite:false});
		}}], "animateFrame4+=2")


		.pause();
}

function killCarTween() { gsap.killTweensOf(cars); }






/*************************************************************************************************/
/* Event handlers ********************************************************************************/
/*************************************************************************************************/

function buttonHandler($e) {
	button 	= $e.currentTarget;
	type	= $e.type;

	switch (button) {
		case container:
			if 		(type === "mouseover") 	{ gsap.to(ctaButton, {duration:0.2, alpha:0.75, ease:"quad.inOut"}); }
			else if (type === "mouseout") 	{ gsap.to(ctaButton, {duration:0.2, alpha:1, ease:"quad.inOut"}); }
			else if (type === "click") 		{ Enabler.exitOverride("banner_clickthrough", dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Exit_URL.Url); }
			break;
	}
}





/*************************************************************************************************/
/* Check page and Enabler has been loaded and initialised ****************************************/
/*************************************************************************************************/

function checkEnabler() {
	(Enabler.isInitialized()) ? enablerInitHandler() : Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
}

function enablerInitHandler() {
	(Enabler.isVisible()) ? init() : Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, init);
}

domready(function() {
	console.log(":: dom ready ::");
	if (elementScrape()) checkEnabler();
});