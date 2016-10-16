/** Common Javascript API */
// Commit the new extension.
element5.Extension( {
	HelloExtension: function() 
	{
		console.log( 'Hello! I\'m an extension.' );
	},
});

var mobile400 = 
{
	deviceOption: '', 
	deviceType: 'screen', 
	features: [ 'max-width:399px' ], 
	producted: false,
};
element5.MountDevice( mobile400 );

// Edit the title
document.title = 'element5 API Referrence';
var webdir = 'http://bapquadgames.com/';

// Reset the padding, margin.
style5.AddCss( '*' ).css( { 'padding': '0', 'margin': '0' } );
style5.AddCss( 'body' ).css( { 'background': '#070117', 'color': 'white', 'font-family': 'Arial', 'font-size': '90%' } );
style5.AddCss( 'ul#list li' ).css( { 'margin': '10px 0', 'font-size':'90%' } );
style5.AddCss( 'h2#doc-top' ).css( { 'margin-left': '10px', 'margin-bottom': '20px', 'color': '#09f' } );
style5.AddCss( 'h3.ttl' ).css( { 'margin-left': '10px', 'font-family': 'monospace', 'font-size': '17px' } );
style5.AddCss( '.code' ).css( { 'font-family': 'monospace' } ); 
style5.AddCss( '.mt' ).css( { 'margin-top': '18px' } ); 
style5.AddCss( '.keyword' ).css( { 'font-family': 'monospace', 'color': '#09f' } );
style5.AddCss( '.param' ).css( { 'font-family': 'monospace', 'color': '#fa0' } );
style5.AddCss( '.string' ).css( { 'font-family': 'monospace', 'color': '#da6c0b' } );
style5.AddCss( '.htxt' ).css( { 'margin-left': '10px', 'margin-top': '20px' } ); 
style5.AddCss( '.mdh' ).css( { 'margin-left' : '10px', 'font-size': '17px' } ); 
style5.AddCss( '.txt' ).css( { 'margin-left' : '10px', 'font-size': '12px' } ); 
style5.AddCss( '.param-list' ).css( { 'margin' : '6px 10px', 'list-style': 'none', 'font-size': '12px' } ); 
style5.AddCss( 'pre' ).css( { 'margin' : '0px 10px', 'padding': '10px', 'background': '#222', 'border': '1px solid #aaa', 'overflow-x': 'scroll' } ); 

// Create the top page
var topPage = element5.Create( 'h1#top-page' ); 
topPage.css( { 'font-size': '18px', 'background': '#28262d', 'color': 'white', 'padding': '5px 0 5px 0', 'position': 'fixed', 'width': '100%' } ); 
	
topPage.text = topPage.Equip( element5.Create( 'span' ) ); 
topPage.text.css( 'padding-left', '8px' ); 
topPage.text.innerText = document.title; 
topPage.menuBtn = topPage.Equip( element5( '#menu-button' ) );
topPage.menuBtn.css( { 'margin-right': '8px', 'margin-top': '2px', 'float': 'right', 'width': '18px', 'height': '18px', 'background-image': 'url( ' + webdir + 'element5/img/mobilemenu.png )', 'background-size': '24px 18px', 'background-repeat': 'no-repeat', 'background-position': '-3px 0' }); 
topPage.menuBtn.AddEvent( 'click', function() { }); 

// Create the main of page.
var mainPage = element5( '#main-page' ); 
mainPage.SetStyle( 'border-top', '1px solid #000' );
mainPage.SetStyle( 'padding-top', '31px' );
mainPage.Logo = mainPage.Equip( element5.Create( 'img' ) ); 
mainPage.Logo.src = webdir + 'element5/logo/element5-light-logo.png'; 
mainPage.Logo.SetStyle( 'margin', '0 auto' ).SetStyle( 'display', 'block' ).SetStyle( 'padding', '20px 0' ); 
mainPage.introSection = mainPage.Equip( element5( '#intro-section' ) );
mainPage.introSection.SetStyle( 'border-top', '1px solid #333' ).SetStyle( 'padding', '10px' );
mainPage.introSection.introTxt = element5( '#intro-txt' );
mainPage.introSection.introTxt.EquipedBy( mainPage.introSection );
mainPage.introSection.introTxt.innerText = "element5 is a javascript library, which allows developer scripting for an application on web flatform with HTML5, CSS3 and Javascript.";

var text = mainPage.Equip( element5.Create( 'h4' ) ).css( 'padding-left', '10px' ).css( 'margin-top', '20px' );
text.innerText = 'element5 includes follow objects:';

var list = mainPage.Equip( element5.Create( 'ul#list' ) ).css( { 'padding-left': '10px', 'list-style': 'none', 'padding':'10px', 'background':'#27183a', 'margin': '15px 10px 0', 'max-width': '550px' } );
list.Equip( element5.Create( 'li' ) ).innerHTML = '<a href="element5.html">element5</a> - This is an object primary using with our dom elements.';
list.Equip( element5.Create( 'li' ) ).innerHTML = '<a href="style5.html">style5</a> - This is an object using in adjusting the css.';
list.Equip( element5.Create( 'li' ) ).innerHTML = '<a href="timeline5.html">timeline5</a> - This is an object using to creating the animation.';
list.Equip( element5.Create( 'li' ) ).innerHTML = '<a href="motion5.html">motion5</a> - This is an object using to creating the motion like as ani-sprite or ani-scroll.';
list.Equip( element5.Create( 'li' ) ).innerHTML = '<a href="media5.html">media5</a> - This is an object used with camera, microphone or other device.';
list.Equip( element5.Create( 'li' ) ).innerHTML = '<a href="request5.html">request5</a> - This is an object using to load or post the another data.';
list.Equip( element5.Create( 'li' ) ).innerHTML = '<a href="bom5.html">bom5</a> - This is an object helping for navigator object of browser.';
list.Equip( element5.Create( 'li' ) ).innerHTML = '<a href="store5.html">store5</a> - This is an object helping for data storage.';
list.Equip( element5.Create( 'li' ) ).innerHTML = '<a href="geo5.html">geo5</a> - This is an object using to locates the device position.';
list.Equip( element5.Create( 'li' ) ).innerHTML = '<a href="solution5.html">solution5</a> - This is an ulitily object.';
mainPage.head3_01 = mainPage.Equip( element5.Create( 'h3' ) ).css( { 'padding':'10px' } ); 
mainPage.head3_01.innerText = 'Tutorial, demo, source code.';

// Create the footer of page.
var footPage = element5.Create( 'footer' );
footPage.SetStyle( 'text-align', 'center' ); 
footPage.SetStyle( 'font-size', '11px' ); 
footPage.SetStyle( 'margin', '50px 0 20px' ); 
footPage.innerHTML = 'Copyright ' + "&copy;" + ' 2016-2017 Bapquad Games. All Rights Reserved.'; 

window.addEventListener( 'DOMContentLoaded', function( e ) 
{
	// Documentation body
	var docBody = element5( '#doc-body' );
	docBody.Remove();
	document.body = element5.GetBody();
	document.body.Equip( topPage );
	document.body.Equip( mainPage );
	document.body.Equip( docBody );
	document.body.Equip( footPage );
}, false );