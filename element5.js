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
				module.exports.bom5 = __webpack_require__( 6 ); 
				module.exports.store5 = __webpack_require__( 7 );
				module.exports.geo5 = __webpack_require__( 8 ); 
				module.exports.solution5 = __webpack_require__( 9 ); 
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
					element5.Extend( el, DOMModifier ); 
					element5.Extend( el, StyleModifier ); 
					element5.Extend( el, AniModifier ); 
					element5.Extend( el, DOMLoader ); 
					element5.Extend( el, MediaModifier ); 
					element5.Extend( el, ClimbModifier ); 
					element5.Extend( el, JSONModifier );
					
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
					if( el.CssComm == undefined && css != 0 ) 
					{
						el.CssComm = css;
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
									var childs = [];
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
				
				var ClimbModifier = 
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
							return ClimbModifier.Parent( selector, true, el );
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
									var parentEl = ClimbModifier.ParentUntil( selector, s, el );
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
								correct = ClimbModifier.typing( selector, el );
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
				ClimbModifier.typing = function( selector, target ) 
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
							return DOMModifier.HasId( selector[ 2 ], el );
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
							return DOMModifier.HasClass( selector[ 2 ], el );
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
				
				var StyleModifier = 
				{
					Style: function( styles ) 
					{
						if( this.CssSelf )
							this.CssSelf.SetStyles( styles ); 
						else if( this.CssComm )
							this.CssComm.SetStyles( styles ); 
						return this;
					}, 
					
					AddStyle: function( name, value ) 
					{
						if( this.CssSelf ) 
							this.CssSelf.SetStyle( name, value ); 
						else if( this.CssComm )
							this.CssComm.SetStyle( name, value ); 
						else 
							this.style[ name ] = value;
						return this;
					}, 
					
					SetStyle: function( name, value, com ) 
					{
						if( com ) 
						{
							if( this.CssComm )
								this.CssComm.SetStyle( name, value ); 
							else if( this.CssSelf ) 
								this.CssSelf.SetStyle( name, value ); 
							else 
								this.style[ name ] = value; 
							return this;
						}
						if( this.CssSelf ) 
							this.CssSelf.SetStyle( name, value ); 
						else if( this.CssComm )
							this.CssComm.SetStyle( name, value ); 
						else 
							this.style[ name ] = value;
						return this;
					}, 
					
					css: function() 
					{
						var el = this;
						if( arguments.length == 2 )
						{
							return el.SetStyle( arguments[0], arguments[1] );;
						}
						return el.SetStyles( arguments[0] );
					},
					
					Css: function() 
					{
						var el = this;
						if( arguments.length == 2 )
						{
							return el.SetStyle( arguments[0], arguments[1], 'com' );;
						}
						return el.SetStyles( arguments[0], 'com' );
					},  
					
					SetStyles: function( styles, com ) 
					{
						if( com === 'com' ) 
						{
							if( this.CssComm )
								this.CssComm.SetStyles( styles ); 
							else if( this.CssSelf )
								this.CssSelf.SetStyles( styles ); 
							return this;
						}
						if( this.CssSelf )
							this.CssSelf.SetStyles( styles ); 
						else if( this.CssComm )
							this.CssComm.SetStyles( styles ); 
						return this;
					}, 
					
					SetWidth: function( v ) 
					{
						this.SetStyle( 'width', v + 'px' );
						return this;
					}, 
					
					SetHeight: function( v ) 
					{
						this.SetStyle( 'height', v + 'px' ); 
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
				StyleModifier.SetCss = StyleModifier.SetStyles; 
				
				var MediaModifier = 
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
						else if( this.CssComm != undefined ) 
						{
							selector = this.CssComm.selectorText;
						} 
						
						return media.product.Find( selector ); 
					},
				};
				
				var DOMModifier = 
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
							classies.forEach( function( value, index ) 
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
						return el;
					}, 
					
					EquipedBy: function( el ) 
					{
						var nodeType = parseInt( el.nodeType ); 

						if( ( el.el5 || el.tagName === 'BODY') && nodeType === 1 ) 
						{
							el.appendChild( this );
						} 
						return this;
					}, 
					
					EquipEvent: function( addHandle, removeHandle ) 
					{
						solution5.SetMutationEvent( this, addHandle, removeHandle ); 
						return this;
					},
				}; 
				// Alias Section for Element DOM Modifier.
				DOMModifier.PushClass = DOMModifier.AddClass; 
				
				var DOMLoader = 
				{
					includeHTML: function() 
					{
						element5.includeHtml( this ); 
						return this;
					},
				};
				
				var AniModifier = {
					EffectedBy: function( timeline, duration, delay, timing ) 
					{
						timeline.Effect( this, duration, delay, timing ); 
						return this;
					}, 
				};
				AniModifier.Animation = AniModifier.EffectedBy;
				AniModifier.Run = AniModifier.EffectedBy;
				AniModifier.Play = AniModifier.EffectedBy; 
				
				var JSONModifier = 
				{
					JSonString: function( value ) 
					{
						return JSON.stringify( value );
					}, 
					
					ParseJSON: function( json ) 
					{
						return JSON.parse( json );
					}, 
					
					AddData: function( name, value ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							if( value == undefined ) throw "The value is undefined."; 
							
							var el = this;
							
							if( el.BackData == undefined ) 
							{
								el.BackData = new Array();
							} 

							el.BackData.push( '{"' + name + '":' + el.JSonString( value ) + '}' ); 
							
							return el;
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err ); 
							else 
								console.log( err ); 
							return this;
						}
						
					}, 
					
					SetData: function( name, value ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							if( value == undefined ) throw "The value is undefined."; 
							
							var el = this;
							
							if( el.BackData == undefined ) 
							{
								return el.AddData( name, value );
							}
							
							var len = el.BackData.length;
							
							for( var i = 0; i < len; i++ ) 
							{
								var item = el.BackData[ i ];
								if( item != undefined ) 
								{
									if( item.indexOf( name ) === 2 ) 
									{
										el.BackData[ index ] = ( '{"' + name + '":' + el.JSonString( value ) + '}' ); 
										return el;
									}
								}
							}
							
							return el.AddData( name, value );
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err );
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					GetData: function( name ) 
					{
						var el = this;
						if( name == undefined && el.BackData != undefined ) 
						{
							return el.BackData; 
						} 
						else 
						{
							var len = el.BackData.length;
							for( var i = 0; i < len; i++ ) 
							{
								if( el.BackData[ i ].indexOf( name ) === 2 ) 
								{
									return el.ParseJSON( el.BackData[ i ] )[ name ]; 
								}
							}
							return -1;
						}
					}, 
					
					DeleteData: function( name ) 
					{
						try 
						{
							if( name == undefined ) throw "Delete the data need the name specify.";
							var el = this;
							var len = el.BackData.length;
							
							for( var i = 0; i < len; i++ ) 
							{
								if( el.BackData[ i ].indexOf( name ) === 2 ) 
								{
									return delete el.BackData[ index ]; 
								} 
							}
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err );
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					SetBackData: function( name, value ) 
					{
						try 
						{
							if( typeof name != 'string' ) throw "The name must be string value.";
							if( typeof value != 'string' ) throw "The value must be string value."; 
							
							if( /^[a-zA-Z0-9\-]{0,32}$/.exec( name ) && value.length <= 256 ) 
							{
								var el = this;
								el.setAttribute( 'data-' + name, value );
							}
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err );
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					GetBackData: function( name ) 
					{
						var el = this;
						var len = el.attributes.length; 
						var result;
						if( name == undefined ) 
						{
							result = new Array(); 
						}
						
						for( var i = 0; i < len; i++ ) 
						{
							if( el.attributes[ i ].name.indexOf( 'data-' ) >= 0 ) 
							{
								if( name == undefined )
									result.push( { name: el.attributes[ i ].name, value: el.attributes[ i ].value } ); 
								else
									if( ( 'data-' + name ) === ( el.attributes[ i ].name ) ) 
										return el.attributes[ i ].value;
							}
						} 
						
						return result;
					},
					
					SetProperty: function( name, value ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							if( value == undefined ) throw "The value is undefined."; 

							var el = this;
							if( !el.hasOwnProperty( name ) ) 
							{
								return el.ModifyProperty( name, value );
							} 
							return el;
						} 
						catch ( err ) 
						{
							if( console.error ) 
								console.error( err );
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					AddProperty: function( name, value ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							if( value == undefined ) throw "The value is undefined."; 
							
							var el = this;
							if( el [ name ] != undefined ) 
							{
								if( this.ModifyProperty[ name ] != 'RestoreValue' ) 
								{
									this.ModifyProperty[ name ] = el [ name ]; 
								}
							}
							return this.ModifyProperty( name, value );
						} 
						catch( err ) 
						{
							if( console.error )
								console.error( err );
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					HasProperty: function( name ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							
							return this.hasOwnProperty( name );
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err );
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					ModifyProperty: function( name, value ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							if( value == undefined ) throw "The value is undefined."; 
							
							var el = this;
							el [ name ] = value; 
							return el;
						}
						catch( err )
						{
							if( console.error ) 
								console.error( err ); 
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					GetRestorePropertyValue: function( name ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							
							var el = this;
							el.RestorePropertyValue( name );
							return el.ModifyProperty.RestoreValue;
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err ); 
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					RestorePropertyValue: function( name ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							
							var el = this;
							var restoreValue = el.ModifyProperty[ name ]; 
							
							if( restoreValue != undefined ) 
							{
								el.ModifyProperty.RestoreValue = restoreValue; 
							}
							
							return this;
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err );
							else 
								console.log( err ); 
							return this;
						}
					}, 
					
					RemoveProperty: function( name ) 
					{
						try 
						{
							if( name == undefined ) throw "The name is undefined."; 
							var el = this;
							if( el[ name ] != undefined ) 
							{
								delete el[ name ]; 
							} 
							if( el.RestorePropertyValue[ name ] != undefined ) 
							{
								delete el [el.RestorePropertyValue[ name ] != undefined];
							}
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err ); 
							else 
								console.log( err );
								return this;
						}
					}, 
					
					AddMethod: function() 
					{
						var el = this;
						var len = arguments.length;
						if( len ) 
						{
							len = len - 1;
							var name = arguments[ 0 ]; 
							var body = arguments[ len ]; 
							
							var params = [];
							
							for( var i = 1; i < len; i++ ) 
							{
								params.push( arguments[ i ] );
							} 
							
							el[ name ] = eval( 'new Function( ' + params.join() + ', "' + body + '" )' );
						} 
						return el;
					}, 
					
					AddFunction: function() 
					{
						var el = this;
						var len = arguments.length;
						if( len ) 
						{
							len = len - 1; 
							var name = arguments[ 0 ]; 
							var body = arguments[ len ]; 
						
							var params = [];
								
							for( var i = 1; i < len; i++ ) 
							{
								params.push( '"' + arguments[ i ] + '"' );
							} 
							
							el[ name ] = eval( 'new Function( ' + params.join() + ', "' + body + '" )' );
						} 
						return el;
					}, 
					
					AddEvent: function( eventType, eventHandle, trace ) 
					{
						trace = trace || false;
						var el = this;
						el.addEventListener( eventType, eventHandle, trace );
					}, 
					
					// TODO OnDrag , OnDrop.
					Dragable: function() 
					{
						
					}, 
					
					Droppable: function() 
					{
						
					}, 
				}; 
				JSONModifier.DeleteProperty = JSONModifier.RemoveProperty;
				
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
				
				element5.CreateBlock = function( block ) 
				{
					var len = block.length;
					if( !len ) 
						return;
					
					var down = '>';
					var up = '^';
					var root = element5.Create( 'div' );
					var curr = root;
					block = block.join( ' ' ).split( ' ' );
					len = block.length;
					
					for( var i = 0; i < len; i++ ) 
					{
						var codes = block[ i ];
						var posId = codes . indexOf ( '@' ); 
						var id = codes.substr( posId + 1 );
						var codes = codes.substr( 0, posId );
						var pat = /([\.|\#|\[a-z]{1,})+/; 
						console.log( codes );
						console.log( pat.exec(codes) );
						curr[ id ] = { id : id }; 
						console.log( curr );
						curr = curr[ id ];	// Move to next point.
						console.log( curr );
						break;
					} 
					
					return root;
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
				
				Style.AddCss = function( selector ) 
				{
					return Style.AddLine( selector );
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
						
						el.SetStyle( 'animation-delay', delay ); 
						el.SetStyle( 'animation-duration', duration ); 
						el.SetStyle( 'animation-timing-function', timing ); 
						
						el.SetStyle( 'animation-name', '' );
						var timer = setTimeout( function() 
						{
							el.SetStyle( 'animation-name', timeline.name ); 
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
						var media = this;
						var len = media.cssRules.length;
						if( len ) 
						{
							for( var i = 0; i < len; i++ ) 
							{
								var item = media.cssRules[ i ]; 
								if( item.selectorText == selector ) 
								{
									return item;
								}
							}
						} 
						return media.AddLine( selector ); 
					},
					AddLine: function( selector ) 
					{
						var media = this;
						var index = media.cssRules.length; 
						media.attach = media.insertRule || media.addRule;
						media.detach = media.deleteRule || media.removeRule; 
						media.attach( selector + ' {}', index ); 
						return element5.Extend( media.cssRules[ index ], Style.ruleModifier );
					}, 
					AddCss: function( selector ) 
					{
						return this.AddLine( selector );
					}, 
					GetDescription: function() 
					{
						return this.media[ 0 ];
					},
				};
				
				Style.ruleModifier = 
				{
					AddSelector: function( selector ) 
					{
						var rule = this;
						rule.selectorText = rule.selectorText + ', ' + selector.trim(); 
						return rule;
					},
					SetStyle: function( name, value ) 
					{
						this.style[name] = value;
						return this;
					}, 
					
					css: function() 
					{
						if( arguments.length ) 
						{
							if( arguments.length == 1 )
								this.SetStyles( arguments[0] );
							else if( arguments.length == 2 ) 
								this.SetStyle( arguments[0], arguments[1] );
						}
						return this;
					}, 
					
					Css: function() 
					{
						if( arguments.length ) 
						{
							if( arguments.length == 1 )
								this.SetStyles( arguments[0] );
							else if( arguments.length == 2 ) 
								this.SetStyle( arguments[0], arguments[1] );
						}
						return this;
					},
					
					AddStyle: function( name, value ) 
					{
						this.style[name] = value;
						return this;
					}, 
					
					SetStyles: function( styles ) 
					{
						for( x in styles) 
						{
							this.SetStyle( x, styles[x] );
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
			function( module, __webpack_require__ ) 		// pack require ( 4 )
			{
				// TODO
				var Media = 
				{
					CreateVideo: function() 
					{
						// var video = element5.Create( 'video' );
						// video.css( {'background': 'red'} );
						// video.id = 'videoTag'; 

						// navigator.mediaDevices.getUserMedia( { video: { facingMode: "user" } } )
						// .then( function ( stream ) 
						// {
							// var video = document.getElementById('videoTag');
							// video.srcObject = stream;
						// }).catch( function ( error ) 
						// {
							// console.log(error.name + ": " + error.message);
						// });
					}, 
					CreateAudio: function() 
					{
						var audioContext = new AudioContext();

						navigator.mediaDevices.getUserMedia({

							audio: true

						}).then(function (stream) {

							var sourceNode = audioContext.createMediaStreamSource(stream);

							var gainNode = audioContext.createGain();

							sourceNode.connect(gainNode);

						}).catch( function (error) {

							console.log(error.name + ": " + error.message);

						});
					}
				};
				
				module.exports = Media;
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
				var Bom = 			// Browser Object Model.
				{
					Browser: 
					{
						// Opera 8.0+
						IsOpera: (function() 
						{
							return ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0);
						})(),
						
						// Firefox 1.0+ 
						IsFirefox: (function() 
						{
							return (typeof InstallTrigger !== 'undefined'); 
						})(), 
						
						// At least Safari 3+
						IsSafari: (function()
						{
							return (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0);
						})(), 
						
						// Internet Explorer 6-11
						IsIE: (function()
						{
							return (/*@cc_on!@*/false || !!document.documentMode);
						})(),
						
						// Edge 20+
						IsEdge: (function()
						{
							return (!(/*@cc_on!@*/false || !!document.documentMode) && !!window.StyleMedia);
						})(), 
						
						// Chrome 1+
						IsChrome: (function()
						{
							return (!!window.chrome && !!window.chrome.webstore);
						})(), 
						
						// Blink engine detection
						IsBlink: (function()
						{
							return (((!!window.chrome && !!window.chrome.webstore) || ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0)) && !!window.CSS);
						})(), 
						
						IsOperaMini: (function()
						{
							return (navigator.userAgent.match(/Opera Mini/i));
						})(),
					}, 
					
					Device: 
					{
						IsAndroid: (function()
						{
							return (/android/i.test(navigator.userAgent.toLowerCase()));
						})(), 
						
						IsBlackBerry: (function()
						{
							return (/blackberry/i.test(navigator.userAgent.toLowerCase()));
						})(),
						
						IsiOs: (function()
						{
							return (/ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase())); 
						})(), 
						
						IsiPhone: (function()
						{
							return (/iphone/i.test(navigator.userAgent.toLowerCase()));
						})(), 
						
						IsiPad: (function()
						{
							return (/ipad/i.test(navigator.userAgent.toLowerCase()));
						})(), 
						
						IsiPos: (function()
						{
							return (/ipod/i.test(navigator.userAgent.toLowerCase()));
						})(), 
						
						IsWP: (function()
						{
							return (/windows phone/i.test(navigator.userAgent.toLowerCase()));
						})(), 
						
						IsWebOS: (function()
						{
							return (/webos/i.test(navigator.userAgent.toLowerCase()));
						})(), 
						
						IsMobile: (function()
						{
							return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)));
						})(), 
					}
				};
				
				module.exports = Bom;
			}, 
			function( module, __webpack_require__ ) 		// pack require ( 7 ) 
			{
				// TODO: 
				var PromiseImplement = 
				{
					id: '', 
					err: '', 
					
					Catch: function( callback ) 
					{
						if( callback ) 
						{
							callback( err );
						}
					}, 
					
					Then: function( callback ) 
					{
						if( callback ) 
						{
							callback( this.id ); 
						}
					},
				}; 
				
				var IdentityImplement = 
				{
					entityName: '', 
					subEntList: '', 
					
					SetName: function() 
					{
						
					}, 
					
					GetName: function() 
					{
						
					}, 
					
					Rename: function() 
					{
						
					}, 
				};
				
				var DatabaseImplement = 
				{
					
				};

				var TableImplement = 
				{
					insert: function(  ) 
					{
						
					}, 
					update: function(  ) 
					{
						
					}, 
					select: function(  ) 
					{
						
					}, 
					delete: function( ) 
					{
						
					}, 
					alter: function(  ) 
					{
						
					}, 
					count: function(  ) 
					{
						
					}, 
				};
				
				var storageTypes = 
				[
					[	'expireds', 	'ExpDS', 		'ExpireDataSim'		], 		// Cookie DataStorage Simulator.
					[	'cacheds', 		'CacDS', 		'CacheDataSim'		], 		// CachesStoge DataStorage Simulator.
					[	'localds', 		'LocDS', 		'LocalDataSim'		], 		// LocalStorage DataStorage Simulator.
					[	'sessionds', 	'SesDS', 		'SessionDataSim'	], 		// SessionStorage DataStorage Simulator.
					[	'appds', 		'AppDS', 		'ApplicationDataSim'],		// ApplicationStorage DataStorage Simulator.
					[	'indexeddb', 	'IndexedDB',	'ClientDatabase'	], 		// IndexedDB Database Technology.
					[	'clientdb', 	'ClientDB', 	'ClientDatabase'	] 		// Web Database Technology.
				]; 
				
				var fieldType = [ ':number', ':string', ':boolean', ':object', ':prototype' ];
				fieldType.buffNumber = function( fieldName ) 
				{
					console.log( 'field name: ' + fieldName ); 
					console.log( this );
				}
				
				var Store = {
					open: function( storageType ) 
					{
						try 
						{
							if( arguments.length <= 0 ) throw "storageType is undefined."; 
							
							var len = storageTypes.length; 
							
							for( var i = 0; i < len; i++ ) 
							{
								for( var j = 0; j < 3; j++ ) 
								{
									if( storageTypes[ i ][ j ].indexOf( storageType ) >= 0) 
									{
										len = i;
										break;
									}
								}
							}								
							
							if( len == storageTypes.length ) 
							{
								return false;
							} 
							
							// Open new a database.
							Store[ 'ClientDB' ] = new Array(); 
							
							var database = new Array(); 
							
							database.cdb5_name = 'test'; 
							database.cdb5_chemmaset = 
							[ 
								'schools', 
								'students' 
							]; 
							
							var schoolTable = new Array(); 
							schoolTable.cdb5_name = 'school';
							schoolTable.cdb5_chemmaset = 
							[ 
								'id:number:16', 
								'name:string:11', 
								'address:string:127',
							]; 
							
							schoolTable . insert = function ( ) 
							{
								console.log( this );
							};
							
							database[ 'cdb5_table_schools' ] = schoolTable;
							
							Store[ 'ClientDB' ].push( database ); 
							
							return Store[ 'ClientDB' ];
						} 
						catch( err ) 
						{
							if( console.error ) 
								console.error( err ); 
							else 
								console.log( err ); 
							return; 
						} 
					}
				}; 
				
				module.exports = Store;
			}, 
			function( module, __webpack_require__ ) 		// pack require ( 8 ) 
			{
				// TODO Check Review Code.
				var Geo = (function( obj ) 
				{
					return new (function GeoClass () 
					{
						this.__proto__ = obj.__proto__; 
						this.position = 0;
						this.onDetectHandle = 0; 
						
						this.Settings = 
						{
							enableHighAccuracy: true,
							timeout: 5000,
							maximumAge: 0
						};
						
						this.onDetect = function( detectionEventHandle ) 
						{
							this.onDetectHandle = detectionEventHandle; 
							return this;
						};
						
						this.onChange = function( changeEventHandle ) 
						{
							this.watchPosition( changeEventHandle ); 
							return this;
						}; 
						
						this.Reset = function() 
						{
							this.position = 0;
							this.onDetectHandle = 0;
							this.clearWatch();
							return this;
						}; 
						
						this.GetLocation = function() 
						{
							function success ( pos ) 
							{
								this.position = pos; 

								if( this.onDetectHandle ) 
								{
									var callback = ( this.onDetectHandle )();
								} 

								return this;
							} 
							
							function error ( err ) 
							{
								console.warn( 'ERROR(' + err.code + '): ' + err.message ); 
							}
							
							var position = obj.getCurrentPosition( success, error ); 
							
							return this; 
						}; 
						
						this.ScanWith = function( success, error, options ) 
						{
							// Init the new Settings.
							var settings = {}; 
							
							var ssuccess = function( pos ) 
							{
								// Loop via the options of settings
								for( var x in options ) 
								{
									this.Settings[ x ] = options[ x ];	// Re-Assign the values of settings.
								} 
								
								if( success ) 
								{
									var callback = success;
									callback( pos );
								}
							};
							
							this.getCurrentPosition( ssuccess, error, options ); 
							return this;
						}; 
						
						this.ShowMyPositionOnMap = function() 
						{
							var latlon = this.position.coords.latitude + "," + this.position.coords.longitude;
							return img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";
						}; 
						
						this.onDetectPosition = this.onDetect;
						this.onChangePosition = this.onChange;
						this.GetPosition = this.GetLocation;
						this.GetCurrentPosition = this.GetLocation;
						this.GetCurrentLocation = this.GetLocation; 
						this.Scan = this.GetLocation; 
					})();
				})( navigator.geolocation ); 
				
				module.exports = Geo;
			}, 
			function( module, __webpack_require__ ) 		// pack require ( 9 ) 
			{
				var Solution = 
				{
					SetMutationEvent: (function()
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
					})(), 
					
					// TODO:
					RequestWorker: function ( scriptPath, onMessage ) 
					{
						try 
						{
							if( typeof Worker !== 'undefined' ) 
							{
								throw 'Your browser have not support the Worker.';
							}
							
							var worker = new Worker( scriptPath ); 
							worker.onmessage = onMessage;
							return worker;
						} 
						catch( err ) 
						{
							if( console.warn ) 
							{
								console.warn( err ); 
							} 
							else if( console.error )
							{
								console.error( err );
							} 
							else 
							{
								console.log( err );
							}
						}
					}, 
					
					OutThread: function( scriptPath, onWait ) 
					{
						return this.RequestWorker( scriptPath, onWait );
					}, 
					
					ServerSentEvent: function( serverScriptPath, onMessage ) 
					{
						try 
						{
							if( typeof EventSource == 'undefined' ) 
							{
								throw 'Your browser have not support the EventSource.';
							}
							
							var source = new EventSource( serverScriptPath );
							source.onmessage = onMessage;
							return source;
						} 
						catch( err ) 
						{
							if( console.warn ) 
							{
								console.warn( err ); 
							} 
							else if( console.error )
							{
								console.error( err );
							} 
							else 
							{
								console.log( err );
							}
						}
					}, 

					ServerMessage: function( scriptPath, onMessage ) 
					{
						return this.ServerSentEvent( scriptPath, onMessage );
					}, 
				}; 
				
				module.exports = Solution; 
			}
		]
	);
} 

// Export Element 5
Element5UniversalExport( this, Factory ); 
	