/** Javascript Document */ 
/**
 * element5 is a javascript for game and app with Html5 elements and css.
 * element5 support on Microsoft Edge, Chrome, Firefox, ... 
 */
 
function Element5UniversalExport( root, factory ) 
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
				module.exports.style5 = __webpack_require__( 2 ); 
				module.exports.timeline5 = __webpack_require__( 3 ); 
				module.exports.request5 = __webpack_require__( 4 );
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
				var elementExtCollection = [];
				
				var elementStyleModifier = 
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
					
					Show: function() 
					{
						if( this.HasClass( 'hidden' ) )
						{
							this.RemoveClass( 'hidden' );
						}
					}, 
					
					IsShow: function() 
					{
						return ( !this.HasClass( 'hidden' ) );
					}, 
					
					Hide: function() 
					{
						this.AddClass( 'hidden' );
					}, 
					
					IsHide: function() 
					{
						return ( this.HasClass( 'hidden' ) );
					}, 
					
					Toggle: function() 
					{
						if( this.HasClass( 'hidden' ) ) 
						{
							this.RemoveClass( 'hidden' );
						} 
						else 
						{
							this.AddClass( 'hidden' );
						}
					}
				};
				// Alias Section for Element Style Modifier.
				elementStyleModifier.SetProperty = elementStyleModifier.SetStyles; 
				
				var elementDOMModifier = 
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
						clsnAttr = ( clsnAttr != null ) ? clsnAttr.trim() : ''; 
						this.setAttribute( 'class', (clsn.trim() + ' ' + clsnAttr ).trim() ); 
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

						if( ( el.enable || el.tagName === 'BODY') && nodeType === 1 ) 
						{
							el.appendChild( this );
						}
					}, 
				}; 
				// Alias Section for Element DOM Modifier.
				elementDOMModifier.PushClass = elementDOMModifier.AddClass; 
				
				var elementAnimationModifier = {
					EffectedBy: function( timeline, duration, delay, timing ) 
					{
						timeline.Effect( this, duration, delay, timing );
					}, 
				};
				elementAnimationModifier.Animation = elementAnimationModifier.EffectedBy;
				elementAnimationModifier.Run = elementAnimationModifier.EffectedBy;
				elementAnimationModifier.Play = elementAnimationModifier.EffectedBy;
				
				var cert = function( el ) 
				{
					element5.Extend( el, elementDOMModifier ); 
					element5.Extend( el, elementStyleModifier ); 
					element5.Extend( el, elementAnimationModifier ); 
					
					var extLen = elementExtCollection.length; 
					elementExtCollection.forEach( function( item, index ) { element5.Extend( el, item ) });
					
					el.enable = true; 
					
					if( el.tagName != 'BODY' && el.createdBy ) 
					{
						el.EquipedBy( document.body ); 
					}
					
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
						el.CssSelf = style5.Find( self ); 
					}
				};
				
				var element5 = function( target, limit ) 
				{
					try 
					{
						var elTag = 'div';
						var len = 0; 
						var css = 0;
						
						if( typeof target == 'string' ) 
						{
							css = style5.Find( target );
							
							var collect = document.querySelectorAll( target ); 
							
							len = collect.length;
							
							var name = target.slice( 1 );
							var queryType = target.slice( 0, 1 ); 

							// Element had existed.
							if ( len ) 
							{
								if( len == 1 ) 				// Single
								{
									var el = collect[ 0 ]; 
									el.createdBy = false;
									
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
									for( var i = 0; i < len; i++ ) 
									{
										var el = collect[ i ]; 
										el.createdBy = false;
										if( el.enable ) 
											continue;
										
										if( el.CssSelf == undefined ) 
										{
											effect( el, css, '.el5_' + element5.Deep() );	
										}
										
										childs[ i ] = cert( el ); 
									} 
									return childs; 
								}
							} 
							else if( queryType == '#' )		// Single
							{
								// target.attributes.length
								var el = document.createElement( elTag ); 
								el.createdBy = true;
								el.id = name; 
								
								effect( el, css );
								
								cert( el );
								
								return el;
							} 
							else if( queryType == '.' )		// Multiple
							{
								limit = limit || 10;
								var childs = [];
								
								for( var i = 0; i < limit; i++ ) 
								{
									var el = document.createElement( elTag ); 
									el.createdBy = true;
									el.setAttribute( 'class', target.slice( 1 ) ); 
									
									effect( el, css, '.el5_' + element5.Deep() ); 
									
									childs[ i ] = cert( el ); 
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
				
				element5.Body = document.body; 
				element5.Deep = function( numLen ) 
				{
					numLen = numLen || 4;
					
					if( element5.Deep.deepIndex == undefined )
					{
						element5.Deep.deepIndex = 0;
					} 
					
					var deep = element5.Deep.deepIndex.toString(); 
					element5.Deep.deepIndex++; 
					
					var dateTime = new Date(); 
					var time = ( dateTime.getTime() ).toString();
					var limit = numLen - deep.length; 
					
					limit = ( limit < 0 ) ? 0 : limit;
					time = time.slice( time.length - ( limit ) ); 
					
					return ( deep + time );
				};
				
				element5.Create = function( tagName ) 
				{
					var pat = ( /^[a-zA-Z0-9]+$/ ) . exec ( tagName );
					if( pat ) 
					{
						var clsName = '.el5_' + element5.Deep();
						
						var css = style5.Find( clsName ); 
						
						var el = document.createElement( pat.input ); 
						
						// make the private class style for element.
						el.CssSelf = css; 
						
						cert( el );
					}
					return el;
				}; 
				
				element5.Extension = function( ext ) 
				{
					elementExtCollection.push( ext ); 
				};
				
				element5.Extend = function( applier, hier ) 
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
				var element5 = __webpack_require__( 1 ); 
				
				var Style = document.createElement( 'style' ); 
				document.head.appendChild( Style ); 
				Style.sheet.attach = Style.sheet.insertRule || Style.sheet.addRule; 
				Style.sheet.detach = Style.sheet.deleteRule || Style.sheet.removeRule; 
				Style.currentIndex = -1;
				
				Style.Delete = function( index ) 
				{
					Style.sheet.detach( index );
				};
				
				Style.AddLine = function( selector ) 
				{
					var index = Style.sheet.cssRules.length; 
					
					Style.sheet.attach( selector + ' {}', index ); 
					
					var rule = Style.sheet.cssRules[ index ];
					
					return element5.Extend( rule, Style.ruleModifier ); 
				}; 
				
				Style.AddTimeLine = function( timeline ) 
				{
					var keyframes = timeline.keyframes;
					
					this.Find( timeline.name, function() 
					{
						if( Style.currentIndex >= 0 ) 
						{
							Style.Delete( Style.currentIndex ); 
						}
					}); 
					
					var index = Style.sheet.cssRules.length; 
					var len = keyframes.length;
					var content = [];
					
					for( var i = 0; i < len; i++ ) 
					{
						content.push( keyframes[ i ].timek + '% { }' );
					}
					
					Style.sheet.attach( '@keyframes ' + timeline.name + ' { ' + content.join( ' ' ) + ' } ' , index );
					
					timeline = Style.sheet.cssRules[ index ]; 
					
					for( var i = 0; i < len; i++ ) 
					{
						element5.Extend( timeline.cssRules[ i ], Style.ruleModifier );
						
						timeline.cssRules[ i ].SetStyles( keyframes[ i ].style );
					}
					
					timeline.Effect = function( el, duration, delay, timing ) 
					{
						var timeline = this;
						delay = (delay || 0 ) + 's'; 
						duration = ( duration || 1 ) + 's'; 
						timing = timing || 'linear';
						
						el.AddProperty( 'animation-delay', delay ); 
						el.AddProperty( 'animation-duration', duration ); 
						el.AddProperty( 'animation-timing-function', timing ); 
						
						el.AddProperty( 'animation-name', '' );
						var timer = setTimeout( function() 
						{
							el.AddProperty( 'animation-name', timeline.name ); 
							clearTimeout( timer );
						}, 30); 
					};
					
					timeline.keyframes = keyframes; 
					timeline.Keyframes = timeline.cssRules;
					
					return timeline;
				}; 
				
				Style.Find = function( selector, autoplus ) 
				{
					if( autoplus == undefined ) 
					{
						autoplus = true;
					} 
					
					var len = this.sheet.cssRules.length; 
					var result = 0;
					Style.currentIndex = -1;
					
					if( len ) 
					{
						for( var i = 0; i < len; i++ ) 
						{
							if( selector == ( this.sheet.cssRules[ i ].selectorText || this.sheet.cssRules[ i ].name ) )
							{
								Style.currentIndex = i;
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
					
					Style.currentIndex = -1;
					
					if( result ) 
					{
						return result;
					} 
					else 
					{
						return -1;
					}
				};
				
				Style.ruleModifier = 
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
				
				Style.AddLine( '.hidden' ).SetStyles( { position: 'fixed', bottom : '-100%', left : '-100%', top : 'auto', right : 'auto' } ); 
				Style.AddLine( '.invisible' ).SetStyles( { visibility : 'hidden', opacity: '0' } ); 
	
				module.exports = Style;
			}, 
			function( module, __webpack_require__ ) 		// pack require ( 3 ) 
			{
				var Timeline = 
				{
					Create: function( timeline ) 
					{
						return style5.AddTimeLine( timeline );
					}
				};
				
				module.exports = Timeline;
			}, 
			function( module, __webpack_require__ )  		// pack require ( 4 ) 
			{
				var Request = 
				{
					Create: function( url, data, onload ) 
					{
						var xhRequest = new XMLHttpRequest(); 
						xhRequest.requestUrl = data || '';
						xhRequest.requestData = data || null;
						xhRequest.onload = onload;
						return xhRequest;
					},
				} 
				
				module.exports = Request;
			}
		]
	);
} 

// Export Element 5
Element5UniversalExport( this, Factory ); 
	