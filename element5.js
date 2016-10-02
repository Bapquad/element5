/** Javascript Document */ 
/**
 * element5 is a javascript for game and app with Html5 elements and css.
 * element5 support on Microsoft Edge, Chrome, Firefox, ... 
 */
 
function Element5IniversalExport( root, factory ) 
{
	if( typeof exports === 'object' && typeof module === 'object' ) 
	{
		module.exports = factory();
	}
	else if( typeof define === 'function' && define.amd ) 
	{
		define( factory );
	}
	else 
	{
		var a = factory(); 
		for( var i in a ) 
		{
			( typeof exports === 'object' ? exports : root )[ i ] = a[ i ];
		}
	}
}

function Export( modules ) 
{
	var installedModules = {  };

	// The require function
	function __webpack_require__( moduleId ) 
	{

		// Check if module is in cache
		if( installedModules[ moduleId ] )
			return installedModules[ moduleId ].exports;

		// Create a new module (and put it into the cache)
		var module = installedModules[ moduleId ] = 
		{
			exports: {},
			id: moduleId,
			loaded: false
		};

		// Execute the module function
		modules[ moduleId ].call( module.exports, module, __webpack_require__ );

		// Flag the module as loaded
		module.loaded = true;
		
		// Return the exports of the module
		return module.exports;
	}

	// Load entry module and return exports
	return __webpack_require__( 0 );
}

function Factory() 
{
	return ( function( modules ) 
	{ 
		return Export( modules ) 
	})(
		[
			function( module, __webpack_require__ ) 
			{
				module.exports.element5 = __webpack_require__( 1 ); 
				module.exports.modify = __webpack_require__( 2 ); 
				module.exports.style = __webpack_require__( 3 ); 
				module.exports.styleMod = __webpack_require__( 4 ); 
				module.exports.timeline = __webpack_require__( 5 );
			},
			function( module ) 								// pack require ( 1 ) 
			{
				"use strict"; 
				
				/**
				 * @class element5 
				 * @name element5 
				 *
				 * @description . Uses find element5
				 */
				document.body.equip = function( el ) 
				{
					document.body.appendChild( el ); 
					return el;
				} 
				
				var element5 = function( target, limit ) 
				{
					try 
					{
						var elTag = 'div';
						var len = 0; 
						var css = 0;
						var cert = function( el ) 
						{
							element5.extend( el, modify ); 
							element5.extend( el, styleMod );
							el.enable = true; 
							
							if( el.tagName != 'BODY' ) 
								document.body.equip( el ); 
							
							// Add Class Css Self
							if( el.CssSelf != undefined ) 
							{
								var clsn = el.CssSelf.selectorText.slice( 1 );
								el.ShiftClass( clsn ); 
							}
							
							return el;
						}; 
						var effect = function( el, css, self ) 
						{
							if( el.css == undefined && css != 0 ) 
							{
								el.Css = css;
							}
							if( self != undefined ) 
							{
								el.CssSelf = style.Find( self ); 
							}
						};
						
						if( typeof target == 'string' ) 
						{
							css = style.Find( target );
							
							var collect = document.querySelectorAll( target ); 
							len = collect.length;
							
							if( target.indexOf( '#' || '.' ) == 0 ) 
							{
								var name = target.slice( 1 );
								var queryType = target.slice( 0, 1 ); 
							}

							// Element had existed.
							if ( len ) 
							{
								if( len == 1 ) 				// Single
								{
									var el = collect[ 0 ]; 
									
									effect( el, css );
									
									if( !el.enable ) 
									{
										return cert( el );
									} 
									else 
									{
										return el;
									}
								}
								else 						// Multiple
								{
									var childs = []; 
									var dateTime = new Date();
									for( var i = 0; i < len; i++ ) 
									{
										var el = collect[ i ]; 
										
										if( el.enable ) 
											continue;
										
										if( el.CssSelf == undefined ) 
										{
											effect( el, css, '.el5_' + dateTime.getTime() + i );	
										}
										
										childs[ i ] = element5( el ); 
									} 
									return childs; 
								}
							} 
							else if( queryType == '#' )		// Single
							{
								// target.attributes.length
								var el = document.createElement( elTag ); 
								
								el.id = name; 
								
								effect( el, css );
								
								cert( el );
								
								return el;
							} 
							else 							// Multiple
							{
								limit = limit || 10;
								var childs = [];
								
								var dateTime = new Date();
								
								for( var i = 0; i < limit; i++ ) 
								{
									var el = document.createElement( elTag ); 
									
									el.setAttribute( 'class', target.slice( 1 ) ); 
									
									effect( el, css, '.el5_' + dateTime.getTime() + i ); 
									
									childs[ i ] = element5( el ); 
								} 								
								return childs;
							}
						} 
						else if( typeof target == 'object' ) 
						{
							if( target.nodeType != undefined && parseInt( target.nodeType ) === 1 ) 
							{
								if( !target.enable )
									return cert( target ); 
								else 
									return target;
							} 
							else if( target.length ) 
							{
								var limit = target.length; 
								for( var i = 0;  i < limit; i++ ) 
								{
									if( target[ i ].enable == undefined && ( parseInt( target[ i ].nodeType ) === 1 ) ) 
									{
										element5( target[ i ] );
									} 
								} 
								return target;
							}
							return;
						} 
						
					} 
					catch ( err ) 
					{
						if( console.error ) 
							console.error( err );
						else 
							console.log( err ); 
						return;
					}
				};
				
				element5.extend = function( applier, hier ) 
				{
					for( var x in hier ) 
					{
						if( typeof hier[ x ] == 'function' || applier[ x ] == undefined ) 
						{
							applier[ x ] = hier[ x ];
						} 
						else 
						{
							// Save the primary data.
						}
					} 
					
					return applier;
				};
				
				module.exports = element5; 
			}, 
			function( module, __webpack_require__ ) 		// pack require ( 2 ) 
			{				
				var modify = 
				{
					AddClass: function( clsn ) 
					{
						if( this.HasClass( clsn.trim() ) ) 
						{
							return this; 
						} 
						
						var clsnAttr = this.getAttribute( 'class' ); 
						if( clsnAttr == null || clsnAttr == '' )
						{
							this.setAttribute( 'class', clsn );
						} 
						else if( clsnAttr.indexOf( clsn ) <= -1 ) 
						{
							clsnAttr = clsnAttr.trim() + ' ' + clsn;
							this.setAttribute( 'class', clsnAttr.trim() );
						}					
						return this;
					}, 
					
					HasClass: function( clsn ) 
					{
						var clsnAttr = this.getAttribute( 'class' ); 
						return ( clsnAttr != null && clsnAttr != '' && clsnAttr.indexOf( clsn ) >= 0 ); 
					}, 
					
					RemoveClass: function( clsn ) 
					{
						if( clsn.indexOf( 'el5_' ) >= 0 ) 
							return this;
						
						if( this.HasClass( clsn ) ) 
						{
							var clsnAttr = this.getAttribute( 'class' );
							var classies = clsnAttr.trim().split( ' ' ); 
							console.log( clsnAttr );
							classies.find( function( value, index, arr ) 
							{
								if( value == clsn ) 
								{
									classies.splice( index, 1 ); 
									return value;
								}
							});
							
							this.setAttribute( 'class', classies.join( ' ' ).trim() );
						} 
						
						return this;
					}, 
					
					ShiftClass: function( clsn ) 
					{
						var clsnAttr = this.getAttribute( 'class' ); 
						this.setAttribute( 'class', clsn.trim() + ' ' + clsnAttr.trim() ); 
						return this;
					}, 
					
					SetId: function( idstr ) 
					{
						// Processing for id
						if( idstr.indexOf( '#' ) >= 0 ) 
						{
							this.id  = idstr.slice( 1 ); 
						}
						else if( idstr != '' )
						{
							this.id = idstr; 
						} 
						else 
						{
							return this;
						}
					}, 
					
					Equip: function( el ) 
					{
						var nodeType = parseInt( el.nodeType );
						if( el.enable && nodeType === 1 ) 
						{
							this.appendChild( el );
						}
					}, 
					
					EquipedBy: function( el ) 
					{
						var nodeType = parseInt( el.nodeType );
						if( el.enable && nodeType === 1 ) 
						{
							el.appendChild( this );
						}
					}, 
				}; 
				
				modify.PushClass = modify.AddClass; 
				
				module.exports = modify; 
			}, 
			function( module, __webpack_require__ ) 
			{
				var element5 = __webpack_require__( 1 ); 
				
				var style = document.createElement( 'style' ); 
				document.head.appendChild( style ); 
				style.sheet.attach = style.sheet.insertRule || style.sheet.addRule; 
				style.sheet.detach = style.sheet.deleteRule || style.sheet.removeRule; 
				style.currentIndex = -1;
				
				style.Delete = function( index ) 
				{
					style.sheet.detach( index );
				};
				
				style.AddLine = function( selector ) 
				{
					var index = style.sheet.cssRules.length; 
					
					style.sheet.attach( selector + ' {}', index ); 
					
					var rule = style.sheet.cssRules[ index ];
					
					return element5.extend( rule, style.modify ); 
				}; 
				
				style.AddTimeLine = function( timeline ) 
				{
					var keyframes = timeline.keyframes;
					
					this.Find( timeline.name );
					
					if( style.currentIndex >= 0 ) 
					{
						style.Delete( style.currentIndex ); 
						style.currentIndex = -1;
					}
					
					var index = style.sheet.cssRules.length; 
					var len = keyframes.length;
					var content = [];
					
					for( var i = 0; i < len; i++ ) 
					{
						content.push( keyframes[ i ].timek + '% { }' );
					}
					
					style.sheet.attach( '@keyframes ' + timeline.name + ' { ' + content.join( ' ' ) + ' } ' , index );
					
					timeline = style.sheet.cssRules[ index ]; 
					
					for( var i = 0; i < len; i++ ) 
					{
						element5.extend( timeline.cssRules[ i ], style.modify );
						
						timeline.cssRules[ i ].SetStyles( keyframes[ i ].style );
					}
					
					timeline.Effect = function( el, duration, delay, timing ) 
					{
						delay = (delay || 1 ) + 's'; 
						duration = ( duration || 1 ) + 's'; 
						timing = timing || 'linear';
						
						el.AddProperty( 'animation-delay', delay ); 
						el.AddProperty( 'animation-duration', duration ); 
						el.AddProperty( 'animation-timing-function', timing ); 
						el.AddProperty( 'animation-name', this.name ); 
					};
					
					timeline.keyframes = keyframes; 
					timeline.Keyframes = timeline.cssRules;
					
					return timeline;
				}; 
				
				style.Find = function( selector, autoplus ) 
				{
					if( autoplus == undefined ) 
					{
						autoplus = true;
					} 
					
					var len = this.sheet.cssRules.length; 
					var result = 0;
					style.currentIndex = -1;
					
					if( len ) 
					{
						for( var i = 0; i < len; i++ ) 
						{
							if( selector == this.sheet.cssRules[ i ].selectorText ) 
							{
								result = this.sheet.cssRules[ i ];
							} 
						}
					} 
					
					if( typeof autoplus == 'boolean' && autoplus ) 
					{
						if( !result ) 
						{
							return this.AddLine( selector );
						}
					}
					else if( typeof autoplus == 'function' ) 
					{
						autoplus(); 
					} 
					
					if( result ) 
					{
						return result;
					} 
					else 
					{
						return -1;
					}
				};
				
				style.modify = 
				{
					AddProperty: function( name, value ) 
					{
						this.style[name] = value;
						return this;
					}, 
					
					SetStyles: function( styles ) 
					{
						for( x in styles) 
						{
							this.AddProperty( x, styles[x] );
						} 
						return this;
					}, 
				};
				
				style.AddLine( '*' ).SetStyles( { position: 'absolute', bottom : '0', left : '0' } ); 
				style.AddLine( 'hidden' ).SetStyles( { bottom : '-100%', left : '-100%' } ); 
				style.AddLine( 'transparent' ).SetStyles( { background : 'transparent' } ); 
				style.AddLine( 'invisible' ).SetStyles( { visibility : 'hidden', opacity: '0' } ); 
				var bodyStyle = style.AddLine( 'body' ).SetStyles( { margin: '0', width: '100%', height : '100%', background : '#000' } ); 
				
				bodyStyle.AddProperty( 'width', window.innerWidth + 'px' );
				bodyStyle.AddProperty( 'height', window.innerHeight + 'px' );
				
				window.addEventListener( 'resize', function( e ) 
				{
					bodyStyle.AddProperty( 'width', window.innerWidth + 'px' );
					bodyStyle.AddProperty( 'height', window.innerHeight + 'px' );
				}, false);
	
				module.exports = style;
			}, 
			function( module, __webpack_require__ ) 
			{				
				var styleMod = 
				{
					Style: function( styles ) 
					{
						if( this.CssSelf )
							this.CssSelf.SetStyles( styles ); 
						else 
							this.Css.SetStyles( styles ); 
						return this;
					}, 
					
					AddProperty: function( name, value ) 
					{
						if( this.CssSelf ) 
							this.CssSelf.AddProperty( name, value ); 
						else 
							this.Css.AddProperty( name, value ); 
						return this;
					}, 
					
					SetStyles: function( styles ) 
					{
						if( this.CssSelf )
							this.CssSelf.SetStyles( styles ); 
						else 
							this.Css.SetStyles( styles ); 
						return this;
					}, 
					
					SetWidth: function( v ) 
					{
						console.log( this ); 
						return this;
					}, 
					
					SetHeight: function( v ) 
					{
						
					}, 
				};
				
				module.exports = styleMod;
			}, 
			function( module, __webpack_require__ ) 
			{
				var Timeline = 
				{
					Create: function( timeline ) 
					{
						return style.AddTimeLine( timeline );
					}
				};
				
				module.exports = Timeline;
			}, 
		]
	);
}
 
 