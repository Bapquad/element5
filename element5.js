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
				module.exports.media5 = __webpack_require__( 4 );
				module.exports.request5 = __webpack_require__( 5 ); 
				module.exports.solution5 = __webpack_require__( 6 );
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
				
				var cert = function( el ) 
				{
					// Registry the element5 extension el with modifier, loader, ...
					element5.Extend( el, DOMMod ); 
					element5.Extend( el, StyleMod ); 
					element5.Extend( el, AniMod ); 
					element5.Extend( el, DOMLoader ); 
					element5.Extend( el, MediaMod ); 
					element5.Extend( el, ClimbMod ); 
					
					// Execute the giving extension.
					elementExtCollection.forEach( function( item, index ) 
					{ 
						element5.Extend( el, item ); 
					});
					
					// Check the body.
					if( el.tagName != 'BODY' && el.createdBy ) 
					{
						el.EquipedBy( document.body ); 
					}
					
					// Add Class Css Self
					if( el.CssSelf != undefined ) 
					{
						var clsn = (/^(.)(el5\_[a-zA-Z0-9]+)$/).exec( el.CssSelf.selectorText ); 
						if( clsn ) 
						{
							el.ShiftClass( clsn[ 2 ] ); 
						}
					} 
					
					el.el5 = true; 
					
					return el;
				}; 
				
				var effect = function( el, css, self ) 
				{
					if( el.Css == undefined && css != 0 ) 
					{
						el.Css = css;
					} 

					// Case of body
					if( el.tagName === 'BODY' )
					{
						if( el.CssSelf === undefined ) 
						{
							// Search and fill the body css rule.
							el.CssSelf = style5.Find( 'body' ); 
							return;
						}
						else 
						{
							return;
						}
					} 
					
					if( self != undefined ) 
					{ 
						if( (/^(.)(el5\_[a-zA-Z0-9]+)$/).exec( self ) ) 
						{
							el.CssSelf = style5.Find( self ); 
						}
					}
				};
				
				var element5 = function( target, limit ) 
				{
					try 
					{
						if( typeof target == 'string' ) 
						{
							var elTag = 'div';
							var len = 0; 
							var css = 0;
							
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
									if( !el.el5 ) 
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
									var childs = []; WZQB8524uscm
									for( var i = 0; i < len; i++ ) 
									{
										var el = collect[ i ]; 
										el.createdBy = false; 
										if( el.el5 ) 
											continue; 
										if( el.CssSelf == undefined ) 
										{
											effect( el, css, '.el5_' + element5.ComDeep() );	
										} 
										childs[ i ] = cert( el ); 
									} 
									return childs; 
								}
							} 
							else 
							{
								// Check pass
								if( ( /^(.|#)[a-zA-Z0-9\-]+$/ ).exec( target ) == null ) 
									return null;
								
								if( queryType == '#' )							// Single
								{
									var el = document.createElement( elTag ); 
									el.createdBy = true; 
									el.id = name; 
									effect( el, css ); 
									cert( el ); 
									return el;
								} 
								else if( queryType == '.' )						// Multiple
								{
									limit = limit || 10;
									var childs = []; 
									for( var i = 0; i < limit; i++ ) 
									{
										var el = document.createElement( elTag ); 
										el.createdBy = true; 
										el.setAttribute( 'class', target.slice( 1 ) ); 
										effect( el, css, '.el5_' + element5.ComDeep() ); 
										childs[ i ] = cert( el ); 
									} 								
									return childs;
								}
							}
						} 
						else if( typeof target == 'object' ) 
						{
							if( target.nodeType != undefined && parseInt( target.nodeType ) === 1 ) 
							{
								if( !target.el5 ) 
								{
									effect( target, 0, '.el5_' + element5.ComDeep() );
									return cert( target ); 
								}
								else 
									return target;
							} 
							else if( target.length ) 
							{
								var limit = target.length; 
								for( var i = 0;  i < limit; i++ ) 
								{
									if( target[ i ].el5 == undefined && ( parseInt( target[ i ].nodeType ) === 1 ) ) 
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
				
				var ClimbMod = 
				{
					Find: function( selector ) 
					{
						if( selector == undefined ) 
						{
							return null;
						}
						
						var el = this;
						var domNodes = this.querySelectorAll( selector ); 
						var len = domNodes.length;
						if( len == 1 ) 
						{
							el = domNodes[ 0 ]; 
							return ( !el.el5 ) ? element5( el ) : el;
						} 
						else if( len > 1 )
						{
							var childs = [];
							for( var i = 0; i < len; i++ ) 
							{
								var el = domNodes[ i ];
								childs.push( ( !el.el5 ) ? element5( el ) : el );
							} 
							return childs;
						} 
						else 
						{
							return len;
						}
					}, 
					Parents: function( selector ) 
					{
						var el = this;
						if( el.Parent ) 
						{
							return el.Parent( selector, true );
						} 
						else 
						{
							return ClimbMod.Parent( selector, true, el );
						}
					},
					Parent: function( selector, s, target ) 
					{
						var el = target || this;
						var parentEl = 0;
						
						if( selector == undefined )
						{
							var parentEl = this.parentNode || this.parentElement; 
						} 
						else 
						{
							var pat = /(#|.|\[|[a-zA-Z0-9]*)([a-zA-Z0-9]+)/;
							var selector = pat.exec( selector );
							
							if( selector )
							{
								if( el.ParentUntil ) 
								{
									var parentEl = el.ParentUntil( selector, s ); 
								} 
								else 
								{
									var parentEl = ClimbMod.ParentUntil( selector, s, el );
								}
							}
						}
						
						if( parentEl ) 
							return parentEl;
						else 
							return null;
					}, 
					ParentUntil : function( selector, s, target ) 
					{
						var el = target || this;
						var correct;
						var collect;
						
						if( s ) 
						{
							collect = new Array();
						}
						
						while( el ) 
						{
							el = el.parentNode || el.parentElement;
							
							if( el == null ) 
							{
								break;
							}
							
							if( s ) 
							{
								collect.push( el );
							}
							
							if( el.typing )
							{
								correct = el.typing( selector );
							}
							else 
							{
								correct = ClimbMod.typing( selector, el );
							}
							
							if( correct ) 
							{
								break;
							}
						}
						
						if( !correct ) 
						{
							return null;
						}
						
						if( collect ) 
						{
							collect.forEach( function( item, index ) 
							{
								if( !item.el5 ) 
								{
									return element5( item );
								}
							});
							return collect;
						} 
						
						if( !el.el5 ) 
						{
							return element5( el );
						}
						return el;
					}
				};
				ClimbMod.typing = function( selector, target ) 
				{
					var el = target || this;
					
					var selectType = selector[ 1 ];
								
					if( selectType === '#' )
					{
						if( el.HasId ) 
						{
							return el.HasId( selector[ 2 ] );
						} 
						else 
						{
							return DOMMod.HasId( selector[ 2 ], el );
						}
					} 
					else if( selectType === '.') 
					{
						if( el.HasClass ) 
						{
							return el.HasClass( selector[ 2 ] );
						} 
						else 
						{
							return DOMMod.HasClass( selector[ 2 ], el );
						}
					} 
					else if( selectType === '[' ) 
					{
						var pat = /\[([a-zA-Z0-9]+)=([a-zA-Z0-9]+)(\])/
						selector = pat.exec( selector.input ); 
						if( el.getAttribute ) 
						{
							var attrValue = el.getAttribute( selector[ 1 ] );
							return ( selector[ 2 ] == attrValue ); 
						}
					}
					else 
					{
						var pat = /^([a-zA-Z0-9]+)$/g;
						selector = pat.exec( selector.input );
						if( el.tagName ) 
						{
							return ( el.tagName.toLowerCase() == selector.input ); 
						} 
						else 
						{
							return false;
						}
					}
				};
				
				var StyleMod = 
				{
					Style: function( styles ) 
					{
						if( this.CssSelf )
							this.CssSelf.SetStyles( styles ); 
						else if( this.Css )
							this.Css.SetStyles( styles ); 
						return this;
					}, 
					
					AddProperty: function( name, value ) 
					{
						if( this.CssSelf ) 
							this.CssSelf.AddProperty( name, value ); 
						else if( this.Css )
							this.Css.AddProperty( name, value ); 
						else 
							this.style[ name ] = value;
						return this;
					}, 
					
					SetStyles: function( styles ) 
					{
						if( this.CssSelf )
							this.CssSelf.SetStyles( styles ); 
						else if( this.Css )
							this.Css.SetStyles( styles ); 
						return this;
					}, 
					
					SetWidth: function( v ) 
					{
						this.AddProperty( 'width', v + 'px' );
						return this;
					}, 
					
					SetHeight: function( v ) 
					{
						this.AddProperty( 'height', v + 'px' ); 
						return this;
					}, 
					
					Show: function() 
					{
						if( this.HasClass( 'hidden' ) )
						{
							this.RemoveClass( 'hidden' );
						} 
						return this;
					}, 
					
					IsShow: function() 
					{
						return ( !this.HasClass( 'hidden' ) );
					}, 
					
					Hide: function() 
					{
						this.AddClass( 'hidden' ); 
						return this;
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
						return this;
					}
				};
				// Alias Section for Element Style Modifier.
				StyleMod.SetProperty = StyleMod.SetStyles; 
				
				var MediaMod = 
				{
					onMedia : function( media ) 
					{
						/**
						 *{
						 *	deviceOption: '(not|only)', 
						 *	deviceType: '(all|print|screen|tv)', 
						 *	features: [ 'max-width : 100px', 'min-width : 200px' ], 
						 *	producted: false,
						 *}
						 */
						// Check exporting device
						if( media.producted == false ) 
						{
							var feature = 0;
							var device = 0;
							var deviceOption = 0;
							var deviceType = 0;
							
							if( media.deviceOption == undefined ) 
							{
								deviceOption = '';
							} 
							else 
							{
								deviceOption = media.deviceOption.trim(); 
							}
							
							if( [ 'not', 'only', '' ].indexOf( deviceOption ) < 0 ) 
							{
								deviceOption = '';
							}
							
							media.deviceOption = deviceOption;
							
							if( media.deviceType == undefined ) 
							{
								deviceType = '';
							} 
							else 
							{
								deviceType = media.deviceType.trim();
							} 
							
							if( [ 'all', 'print', 'screen' ].indexOf( deviceType ) < 0 ) 
							{
								deviceType = '';
							} 
							
							media.deviceType = deviceType; 
							
							if( deviceOption != '' ) 
							{
								if( deviceType != '' ) 
								{
									deviceOption = deviceOption + ' '; 
								} 
								else 
								{
									deviceOption = ''; 
									media.deviceOption = deviceOption;
								}
							}
							
							device = deviceOption + deviceType; 
							
							if( typeof media.features != 'object' && media.features.length <= 0 ) 
							{
								feature = ''; 
							} 
							else 
							{
								var features = new Array(); 
								var featureTypes = 
								[ 
									'aspect-ratio', 'color', 'color-index', 'device-aspect-ratio', 'device-height', 'device-width', 
									'grid', 'height', 'max-aspect-ratio', 'max-color', 'max-color-index', 'max-device-aspect-ratio', 
									'max-device-height', 'max-device-width', 'max-height', 'max-monochrome', 'max-resolution', 'max-width', 
									'min-aspect-ratio', 'min-color', 'min-color-index', 'min-device-aspect-ratio', 'min-device-width', 'min-device-height', 
									'min-height', 'min-monochrome', 'min-resolution', 'min-width', 'monochrome', 'orientation', 
									'overflow-block', 'overflow-inline', 'resolution', 'scan', 'update-frequency', 'width',
								]; 
								
								media.features.forEach( function( item, index ) 
								{
									var featureItem = item.split( ':' );
									if( featureItem.length === 2 ) 
									{
										featureItem.name = featureItem[ 0 ].trim();
										featureItem.value = featureItem[ 1 ].trim(); 
										if( featureTypes.indexOf( featureItem.name ) >= 0 ) 
										{
											features.push( '( ' + featureItem.name + ': ' + featureItem.value + ' )' );
										}
									} 
								});
								
								feature = features.join( ' and ' );
							} 
							
							if( feature != '' ) 
							{
								feature = ' ' + feature;
							} 
							
							media.product = style5.AddMedia( device, feature ); 
							media.producted = true;
							
							if( this.devices == undefined ) 
							{
								this.devices = [ media.product ];
							}
							else 
							{
								this.devices.push( media.product );
							} 
						} 
						
						var selector = 0;
							
						if( this.CssSelf != undefined ) 
						{
							selector = this.CssSelf.selectorText;
						} 
						else if( this.Css != undefined ) 
						{
							selector = this.Css.selectorText;
						} 
						
						return media.product.Find( selector ); 
					},
				};
				
				var DOMMod = 
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
					
					HasClass: function( clsn, target ) 
					{
						var el = target || this;
						var clsnAttr = el.getAttribute( 'class' ); 
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
					
					HasId: function( idstr, target ) 
					{
						var el = target || this;
						return ( el.id === idstr );
					},
					
					Equip: function( el ) 
					{
						var nodeType = parseInt( el.nodeType );

						if( el.el5 && nodeType === 1 ) 
						{
							this.appendChild( el );
						}
					}, 
					
					EquipedBy: function( el ) 
					{
						var nodeType = parseInt( el.nodeType ); 

						if( ( el.el5 || el.tagName === 'BODY') && nodeType === 1 ) 
						{
							el.appendChild( this );
						}
					}, 
					
					EquipEvent: function( addHandle, removeHandle ) 
					{
						solution5.SetMutationEvent( this, addHandle, removeHandle );
					},
				}; 
				// Alias Section for Element DOM Modifier.
				DOMMod.PushClass = DOMMod.AddClass; 
				
				var DOMLoader = 
				{
					includeHTML: function() 
					{
						element5.includeHtml( this );
					},
				};
				
				var AniMod = {
					EffectedBy: function( timeline, duration, delay, timing ) 
					{
						timeline.Effect( this, duration, delay, timing );
					}, 
				};
				AniMod.Animation = AniMod.EffectedBy;
				AniMod.Run = AniMod.EffectedBy;
				AniMod.Play = AniMod.EffectedBy;
				
				element5.fps = 60;
				element5.GetWindow = function() 
				{
					return window;
				};
				
				element5.GetBody = function() 
				{ 
					var BODY = document.body;
					if( BODY != undefined && BODY.tagName === 'BODY' && BODY.el5 == undefined ) 
					{
						BODY.scrollToY = function( position, duration ) 
						{
							var maxScrollY = document.body.scrollHeight - window.innerHeight; 
							
							var anime = element5.Math.ComAni1( BODY.scrollTop, position, duration );
							
							var timer = setInterval( function() 
							{
								// Update the scroll.
								BODY.scrollTop -= anime.d; 
								
								// Check the down scroll.
								if( anime.d < 0 && BODY.scrollTop >= position ) 
									clearInterval( timer ); 
								
								// Check the up scroll.
								else if( anime.d > 0 && BODY.scrollTop <= position ) 
									clearInterval( timer ); 
								
								// Check the min and max scroll.
								else if( BODY.scrollTop <= 0 || BODY.scrollTop >= maxScrollY )
									clearInterval( timer );
							}, anime.t );
						}
						return element5( BODY ); 
					}
				}; 
				
				element5.Math = {};
				
				element5.Math.ComAni1 = function( c, e, d ) 
				{
					var comObj = new Object();
					d = d || 1000;
					comObj.d = ( c - e ) / element5.fps; 
					comObj.t = d / element5.fps; 
					return comObj;
				};
				
				element5.ComDeep = function( numLen ) 
				{
					numLen = numLen || 4;
					
					if( element5.ComDeep.deepIndex == undefined )
					{
						element5.ComDeep.deepIndex = 0;
					} 
					
					var deep = element5.ComDeep.deepIndex.toString(); 
					element5.ComDeep.deepIndex++; 
					
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
						var el = document.createElement( pat.input ); 
						
						// Creation certification.
						el.createdBy = true;
						
						// Make the private class style for element.
						var clsn = '.el5_' + element5.ComDeep(); 
						
						effect( el, 0, clsn );
						
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
				
				element5.includeHtml = function( el ) 
				{
					if ( el.getAttribute("w3-include-html") ) 
					{
						var a = el.cloneNode( false );
						
						var file = el.getAttribute("w3-include-html");
						
						var xhr = new XMLHttpRequest();
						
						xhr.onreadystatechange = function() 
						{
							if ( xhr.readyState == 4 && xhr.status == 200 ) 
							{
								a.removeAttribute( "w3-include-html" );
								
								a.innerHTML = xhr.responseText; 
								
								el.parentNode.replaceChild( a, el );
								
								var callback = el.getAttribute( 'callback' );
								if( callback ) 
									new Function( callback )();
							}
						}      
						
						xhr.open("GET", file, true);
						
						xhr.send();
						
						return;
					}
				}
				
				module.exports = element5; 
			},  
			function( module, __webpack_require__ ) 		// pack require ( 2 ) 
			{
				var element5 = __webpack_require__( 1 ); 
				
				var Style = document.createElement( 'style' ); 
				Style.title = 'element5 free style Mode.5'; 
				Style.type = 'text/css';
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
						content.push( keyframes[ i ].time + '% { }' );
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
						delay = ( ( delay / 1000 ) || 0 ) + 's'; 
						duration = ( ( duration / 1000 ) || 1 ) + 's'; 
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
				
				Style.AddMedia = function( device, features ) 
				{
					var index = Style.sheet.cssRules.length; 
					var media = (function( d, f ) 
					{
						var and = ( d != '' && f != '' ) ? ' and ' : '';
						return ( d + and + f ).trim();
					})( device, features );
					
					Style.sheet.attach( '@media ' + media + ' {}' , index ); 
					
					media = Style.sheet.cssRules[ index ];
					
					return element5.Extend( media, Style.mediaModifer ); 
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
				
				Style.mediaModifer = 
				{
					Find: function( selector ) 
					{
						if( this.cssRules.length ) 
						{
							this.cssRules.forEach( function( item, index ) 
							{
								if( item.selectorText == selector ) 
								{
									return item;
								}
							});
						} 
						return this.AddLine( selector ); 
					},
					AddLine: function( selector ) 
					{
						var index = this.cssRules.length; 
						this.attach = this.insertRule || this.addRule;
						this.detach = this.deleteRule || this.removeRule; 
						this.attach( selector + ' {}', index ); 
						return element5.Extend( this.cssRules[ index ], Style.ruleModifier );
					}, 
					GetDescription: function() 
					{
						return this.media[ 0 ];
					},
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
			function( module, __webpack_require__ ) 		// pack require ( 5 )
			{
				var Media = 
				{
					
				}
			},
			function( module, __webpack_require__ )  		// pack require ( 5 ) 
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
			}, 
			function( module, __webpack_require__ ) 		// pack require ( 6 ) 
			{
				var Solution = {};
				
				Solution.SetMutationEvent = (function()
				{
					var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
						eventListenerSupported = window.addEventListener;
					
					return function(obj, addDomHandle, removeDomHandle)
					{
						if(MutationObserver)
						{
							// define a new observer
							var obs = new MutationObserver( function( mutations, observer ) 
							{
								mutations.forEach( function( item, index ) 
								{
									if( item.addedNodes.length 
									&&  item.addedNodes[0] . nodeType == 1 
									&& 	addDomHandle != undefined ) 
									{
										var customEvent = 
										{
											target : item.addedNodes[0], 
											srcElement : item.addedNodes[0], 
											observe : observer, 
										};
										addDomHandle( customEvent );
									} 
									else if ( item.removedNodes.length 
									&&	item.removedNodes[0] . nodeType == 1 
									&& 	removeDomHandle != undefined ) 
									{
										var customEvent = 
										{
											target : item.removedNodes[0], 
											srcElement : item.removedNodes[0], 
											observe : observer, 
										}; 
										
										// Meet observer.disconnect();
										
										removeDomHandle( customEvent );
									}
								}); 
							});
							// have the observer observe foo for changes in children
							obs.observe( obj, { childList:true, subtree:true });
						}
						else if(eventListenerSupported)
						{
							obj.addEventListener('DOMNodeInserted', addDomHandle, false);
							obj.addEventListener('DOMNodeRemoved', removeDomHandle, false);
						}
					}
				})(); 
				
				module.exports = Solution;
			}
		]
	);
} 

// Export Element 5
Element5UniversalExport( this, Factory ); 
	