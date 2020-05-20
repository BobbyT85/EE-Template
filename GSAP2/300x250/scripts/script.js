/*************************************************************************************************/
/* Custom variables - divs are automatically made into vars in vars.min.js ***********************/
/*************************************************************************************************/

var tl = new TimelineMax();
var buttonArray, button, disabledArray, disabledButton, clickthroughArray, clickthroughButton, type;
var i, j;


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
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_particletext 	= "THE INCREDIBLE<br/>NEW iPAD";//"WITH 25GB FOR";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_A 		= "POWER UP";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_B 		= "YOUR STOCKINGS";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_C 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_subtext_A 	= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_subtext_B 	= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_subtext_C 	= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_particletext 	= "MORE PARTICLE<br>TEXT INNIT";//"WITH 25GB FOR";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_A 		= "WITH 25GB FOR";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_B 		= "\u00A320 PER MONTH";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_C 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_subtext_A 	= "on a 12 month SIM plan";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_subtext_B 	= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_subtext_C 	= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_particletext 	= "";//"WAIT THERE'S MORE";//"WITH 25GB FOR";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_A 		= "<span class=\"white\">PLUS, GET<\/span> 6 FREE";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_B 		= "MONTHS OF";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_C 		= "APPLE MUSIC";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_subtext_A 	= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_subtext_B 	= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_subtext_C 	= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_particletext 	= "SINGLE LINE";//"WITH 25GB FOR";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_A 		= "25GB FOR \u00A320";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_B 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_C 		= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_subtext_A 	= "Per month on a";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_subtext_B 	= "12 month SIM plan";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_subtext_C 	= "";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_legals 		= "Annual price changes apply";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame4_offerends 		= "Offer ends 26th November";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].termsText 			= "Terms apply";
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].isActive 				= true;
	devDynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].isDefault 			= true;
	Enabler.setDevDynamicContent(devDynamicContent);


	console.log('setting dynamic data')

	createParticleText([
		[Frame_1_particletext, dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_particletext],
		[Frame_2_particletext, dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_particletext],
		[Frame_3_particletext, dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_particletext],
		[Frame_4_particletext, dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_particletext],
	]);

	Frame_1_text_A.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_A;
	Frame_1_text_B.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_B;
	Frame_1_text_C.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_text_C;
	Frame_1_subtext_A.innerHTML 	= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_subtext_A;
	Frame_1_subtext_B.innerHTML 	= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_subtext_B;
	Frame_1_subtext_C.innerHTML 	= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_1_subtext_C;
	Frame_2_text_A.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_A;
	Frame_2_text_B.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_B;
	Frame_2_text_C.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_text_C;
	Frame_2_subtext_A.innerHTML 	= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_subtext_A;
	Frame_2_subtext_B.innerHTML 	= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_subtext_B;
	Frame_2_subtext_C.innerHTML 	= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_2_subtext_C;
	Frame_3_text_A.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_A;
	Frame_3_text_B.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_B;
	Frame_3_text_C.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_text_C;
	Frame_3_subtext_A.innerHTML 	= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_subtext_A;
	Frame_3_subtext_B.innerHTML 	= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_subtext_B;
	Frame_3_subtext_C.innerHTML 	= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_3_subtext_C;
	Frame_4_text_A.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_A;
	Frame_4_text_B.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_B;
	Frame_4_text_C.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_text_C;
	Frame_4_subtext_A.innerHTML 	= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_subtext_A;
	Frame_4_subtext_B.innerHTML 	= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_subtext_B;
	Frame_4_subtext_C.innerHTML 	= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_subtext_C;
	Frame_4_legals.innerHTML 		= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame_4_legals;
	Frame_4_offerends.innerHTML 	= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].Frame4_offerends;
	termsText.innerHTML 			= dynamicContent.EE_XMAS_SIMO_2019_Sheet1[0].termsText;
}



/*************************************************************************************************/
/* Banner initialisation, loading, event listening etc *******************************************/
/*************************************************************************************************/

function init() {
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
		TweenLite.delayedCall(0.5, function() { tl.play(); });
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
	tl	.set(content, {css:{display: "block"}})
		.set(cars_endFrame, {autoAlpha:0})
		.set(animationContainer, {transformOrigin:"70% 55%", scale:1.8})
		.call(function() {
			prepareCopy(frame1CopyContainer, "left");
			prepareCopy(frame2CopyContainer);
			prepareCopy(frame3CopyContainer, "split");
			prepareCopy(frame4CopyContainer);

			ctaButton.style.pointerEvents = "none";
		})

		.addLabel("start")
		.to(content, 0.35, {autoAlpha:1, ease:Quad.easeInOut, overwrite:false})
		// .to(intro, 0.5, {y:-250 * 11, ease:SteppedEase.config(11), force3D:false, rotation:0.01}, "start+=2")
		.call(playSpritesheet, [intro, 300, 3000, 0.5, "vertical"], this, "start+=2")
		.to(animationContainer, 1.5, {transformOrigin:"70% 55%", scale:1, ease:Quad.easeInOut}, "start+=2")
		// .to(cars, 2.5, {y:-250 * 61, ease:SteppedEase.config(61), force3D:false, rotation:0.01}, "start+=2")
		.call(playSpritesheet, [cars, 300, 15250, 2, "vertical"], this, "start+=2")

		.addLabel("animateFrame1", 3)
		.call(animateCopy, [frame1CopyContainer, "in"], this, "animateFrame1")


		.addLabel("animateFrame2", 8)
		// .set(cars, {y:0}, "animateFrame2")
		.call(resetSpritesheet, [cars], this, "animateFrame2")
		// .to(cars, 2, {y:-250 * 61, ease:SteppedEase.config(61), force3D:false, rotation:0.01}, "animateFrame2")
		.call(playSpritesheet, [cars, 300, 15250, 2, "vertical"], this, "animateFrame2")
		.call(animateCopy, [frame1CopyContainer, "out", "left"], this, "animateFrame2")
		.call(animateCopy, [frame2CopyContainer, "in"], this, "animateFrame2+=1")


		.addLabel("animateFrame3", 14)
		// .set(cars, {y:0}, "animateFrame3")
		.call(resetSpritesheet, [cars], this, "animateFrame3")
		// .to(cars, 2, {y:-250 * 61, ease:SteppedEase.config(61), force3D:false, rotation:0.01}, "animateFrame3")
		.call(playSpritesheet, [cars, 300, 15250, 2, "vertical"], this, "animateFrame3")
		.call(animateCopy, [frame2CopyContainer, "out", "right"], this, "animateFrame3")
		.call(animateCopy, [frame3CopyContainer, "in", "split"], this, "animateFrame3+=1")
		.from(appleMusic, 0.35, {autoAlpha:0}, "animateFrame3+=1.75")
		.from(termsText, 0.35, {autoAlpha:0}, "animateFrame3+=1.75")


		.addLabel("animateFrame4", 20)
		// .set(cars, {y:0}, "animateFrame4")
		.call(resetSpritesheet, [cars], this, "animateFrame4")
		// .to(cars, 2, {y:-250 * 61, ease:SteppedEase.config(61), force3D:false, rotation:0.01}, "animateFrame4")
		.call(playSpritesheet, [cars, 300, 15250, 2, "vertical"], this, "animateFrame4")
		.call(animateCopy, [frame3CopyContainer, "out", "split"], this, "animateFrame4")
		.to(appleMusic, 0.35, {autoAlpha:0}, "animateFrame4")
		.to(termsText, 0.35, {autoAlpha:0}, "animateFrame4")
		.call(animateCopy, [frame4CopyContainer, "in"], this, "animateFrame4+=1")
		.to(ctaButton, 1.5, {y:-250 * 27, ease:SteppedEase.config(27), force3D:false, rotation:0.01}, "animateFrame4+=2")
		.to(carsEnd, 2, {y:-250 * 42, ease:SteppedEase.config(42), force3D:false, rotation:0.01, onComplete:function() {
			TweenLite.to(carsEnd, 0, {autoAlpha:0, overwrite:false});
			TweenLite.to(cars_endFrame, 0, {autoAlpha:1, overwrite:false});
		}}, "animateFrame4+=2")

		.pause();
}

function killCarTween() {
	TweenMax.killTweensOf(cars);
	console.log('kill tween');
}






/*************************************************************************************************/
/* Event handlers ********************************************************************************/
/*************************************************************************************************/

function buttonHandler($e) {
	button 	= $e.currentTarget;
	type	= $e.type;

	switch (button) {
		case container:
			if 		(type === "mouseover") 	{ TweenLite.to(ctaButton, 0.2, {alpha:0.75, ease:Quad.easeInOut}); }
			else if (type === "mouseout") 	{ TweenLite.to(ctaButton, 0.2, {alpha:1, ease:Quad.easeInOut}); }
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