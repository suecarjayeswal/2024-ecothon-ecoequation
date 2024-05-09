/*! For license information please see 644.87de8998.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkargon_dashboard_react=self.webpackChunkargon_dashboard_react||[]).push([[644],{9644:(e,t,n)=>{function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t,n){return(a=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&o(a,n.prototype),a}).apply(null,arguments)}function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if(typeof Symbol<"u"&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t),n.d(t,{default:()=>ne});var c=Object.hasOwnProperty,u=Object.setPrototypeOf,s=Object.isFrozen,m=Object.getPrototypeOf,p=Object.getOwnPropertyDescriptor,f=Object.freeze,d=Object.seal,h=Object.create,g=typeof Reflect<"u"&&Reflect,y=g.apply,b=g.construct;y||(y=function(e,t,n){return e.apply(t,n)}),f||(f=function(e){return e}),d||(d=function(e){return e}),b||(b=function(e,t){return a(e,i(t))});var _,v=L(Array.prototype.forEach),T=L(Array.prototype.pop),N=L(Array.prototype.push),E=L(String.prototype.toLowerCase),A=L(String.prototype.toString),S=L(String.prototype.match),w=L(String.prototype.replace),k=L(String.prototype.indexOf),x=L(String.prototype.trim),C=L(RegExp.prototype.test),O=(_=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return b(_,t)});function L(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return y(e,t,r)}}function R(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:E,u&&u(e,null);for(var o=t.length;o--;){var a=t[o];if("string"==typeof a){var i=n(a);i!==a&&(s(t)||(t[o]=i),a=i)}e[a]=!0}return e}function D(e){var t,n=h(null);for(t in e)!0===y(c,e,[t])&&(n[t]=e[t]);return n}function M(e,t){for(;null!==e;){var n=p(e,t);if(n){if(n.get)return L(n.get);if("function"==typeof n.value)return L(n.value)}e=m(e)}return function(e){return console.warn("fallback value for",e),null}}var I=f(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),F=f(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),U=f(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),H=f(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),z=f(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),P=f(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),j=f(["#text"]),B=f(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),G=f(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),W=f(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),q=f(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Y=d(/\{\{[\w\W]*|[\w\W]*\}\}/gm),$=d(/<%[\w\W]*|[\w\W]*%>/gm),K=d(/\${[\w\W]*}/gm),V=d(/^data-[\-\w.\u00B7-\uFFFF]/),X=d(/^aria-[\-\w]+$/),Z=d(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),J=d(/^(?:\w+script|data):/i),Q=d(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ee=d(/^html$/i),te=d(/^[a-z][.\w]*(-[.\w]+)+$/i);var ne=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:typeof window>"u"?null:window,n=function(t){return e(t)};if(n.version="2.5.2",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var o=t.document,a=t.document,l=t.DocumentFragment,c=t.HTMLTemplateElement,u=t.Node,s=t.Element,m=t.NodeFilter,p=t.NamedNodeMap,d=void 0===p?t.NamedNodeMap||t.MozNamedAttrMap:p,h=t.HTMLFormElement,g=t.DOMParser,y=t.trustedTypes,b=s.prototype,_=M(b,"cloneNode"),L=M(b,"nextSibling"),ne=M(b,"childNodes"),re=M(b,"parentNode");if("function"==typeof c){var oe=a.createElement("template");oe.content&&oe.content.ownerDocument&&(a=oe.content.ownerDocument)}var ae=function(e,t){if("object"!==r(e)||"function"!=typeof e.createPolicy)return null;var n=null,o="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(o)&&(n=t.currentScript.getAttribute(o));var a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}}(y,o),ie=ae?ae.createHTML(""):"",le=a,ce=le.implementation,ue=le.createNodeIterator,se=le.createDocumentFragment,me=le.getElementsByTagName,pe=o.importNode,fe={};try{fe=D(a).documentMode?a.documentMode:{}}catch{}var de={};n.isSupported="function"==typeof re&&ce&&void 0!==ce.createHTMLDocument&&9!==fe;var he,ge,ye=Y,be=$,_e=K,ve=V,Te=X,Ne=J,Ee=Q,Ae=te,Se=Z,we=null,ke=R({},[].concat(i(I),i(F),i(U),i(z),i(j))),xe=null,Ce=R({},[].concat(i(B),i(G),i(W),i(q))),Oe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Le=null,Re=null,De=!0,Me=!0,Ie=!1,Fe=!0,Ue=!1,He=!0,ze=!1,Pe=!1,je=!1,Be=!1,Ge=!1,We=!1,qe=!0,Ye=!1,$e=!0,Ke=!1,Ve={},Xe=null,Ze=R({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Je=null,Qe=R({},["audio","video","img","source","image","track"]),et=null,tt=R({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),nt="http://www.w3.org/1998/Math/MathML",rt="http://www.w3.org/2000/svg",ot="http://www.w3.org/1999/xhtml",at=ot,it=!1,lt=null,ct=R({},[nt,rt,ot],A),ut=["application/xhtml+xml","text/html"],st=null,mt=a.createElement("form"),pt=function(e){return e instanceof RegExp||e instanceof Function},ft=function(e){st&&st===e||((!e||"object"!==r(e))&&(e={}),e=D(e),he=he=-1===ut.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,ge="application/xhtml+xml"===he?A:E,we="ALLOWED_TAGS"in e?R({},e.ALLOWED_TAGS,ge):ke,xe="ALLOWED_ATTR"in e?R({},e.ALLOWED_ATTR,ge):Ce,lt="ALLOWED_NAMESPACES"in e?R({},e.ALLOWED_NAMESPACES,A):ct,et="ADD_URI_SAFE_ATTR"in e?R(D(tt),e.ADD_URI_SAFE_ATTR,ge):tt,Je="ADD_DATA_URI_TAGS"in e?R(D(Qe),e.ADD_DATA_URI_TAGS,ge):Qe,Xe="FORBID_CONTENTS"in e?R({},e.FORBID_CONTENTS,ge):Ze,Le="FORBID_TAGS"in e?R({},e.FORBID_TAGS,ge):{},Re="FORBID_ATTR"in e?R({},e.FORBID_ATTR,ge):{},Ve="USE_PROFILES"in e&&e.USE_PROFILES,De=!1!==e.ALLOW_ARIA_ATTR,Me=!1!==e.ALLOW_DATA_ATTR,Ie=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Fe=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Ue=e.SAFE_FOR_TEMPLATES||!1,He=!1!==e.SAFE_FOR_XML,ze=e.WHOLE_DOCUMENT||!1,Be=e.RETURN_DOM||!1,Ge=e.RETURN_DOM_FRAGMENT||!1,We=e.RETURN_TRUSTED_TYPE||!1,je=e.FORCE_BODY||!1,qe=!1!==e.SANITIZE_DOM,Ye=e.SANITIZE_NAMED_PROPS||!1,$e=!1!==e.KEEP_CONTENT,Ke=e.IN_PLACE||!1,Se=e.ALLOWED_URI_REGEXP||Se,at=e.NAMESPACE||ot,Oe=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&pt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Oe.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&pt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Oe.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Oe.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ue&&(Me=!1),Ge&&(Be=!0),Ve&&(we=R({},i(j)),xe=[],!0===Ve.html&&(R(we,I),R(xe,B)),!0===Ve.svg&&(R(we,F),R(xe,G),R(xe,q)),!0===Ve.svgFilters&&(R(we,U),R(xe,G),R(xe,q)),!0===Ve.mathMl&&(R(we,z),R(xe,W),R(xe,q))),e.ADD_TAGS&&(we===ke&&(we=D(we)),R(we,e.ADD_TAGS,ge)),e.ADD_ATTR&&(xe===Ce&&(xe=D(xe)),R(xe,e.ADD_ATTR,ge)),e.ADD_URI_SAFE_ATTR&&R(et,e.ADD_URI_SAFE_ATTR,ge),e.FORBID_CONTENTS&&(Xe===Ze&&(Xe=D(Xe)),R(Xe,e.FORBID_CONTENTS,ge)),$e&&(we["#text"]=!0),ze&&R(we,["html","head","body"]),we.table&&(R(we,["tbody"]),delete Le.tbody),f&&f(e),st=e)},dt=R({},["mi","mo","mn","ms","mtext"]),ht=R({},["foreignobject","annotation-xml"]),gt=R({},["title","style","font","a","script"]),yt=R({},F);R(yt,U),R(yt,H);var bt=R({},z);R(bt,P);var _t=function(e){N(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=ie}catch{e.remove()}}},vt=function(e,t){try{N(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{N(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!xe[e])if(Be||Ge)try{_t(t)}catch{}else try{t.setAttribute(e,"")}catch{}},Tt=function(e){var t,n;if(je)e="<remove></remove>"+e;else{var r=S(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===he&&at===ot&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ae?ae.createHTML(e):e;if(at===ot)try{t=(new g).parseFromString(o,he)}catch{}if(!t||!t.documentElement){t=ce.createDocument(at,"template",null);try{t.documentElement.innerHTML=it?ie:o}catch{}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(a.createTextNode(n),i.childNodes[0]||null),at===ot?me.call(t,ze?"html":"body")[0]:ze?t.documentElement:i},Nt=function(e){return ue.call(e.ownerDocument||e,e,m.SHOW_ELEMENT|m.SHOW_COMMENT|m.SHOW_TEXT|m.SHOW_PROCESSING_INSTRUCTION|m.SHOW_CDATA_SECTION,null,!1)},Et=function(e){return"object"===r(u)?e instanceof u:e&&"object"===r(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},At=function(e,t,r){de[e]&&v(de[e],(function(e){e.call(n,t,r,st)}))},St=function(e){var t;if(At("beforeSanitizeElements",e,null),function(e){return e instanceof h&&(typeof e.__depth<"u"&&"number"!=typeof e.__depth||typeof e.__removalCount<"u"&&"number"!=typeof e.__removalCount||"string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof d)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)}(e)||C(/[\u0080-\uFFFF]/,e.nodeName))return _t(e),!0;var r=ge(e.nodeName);if(At("uponSanitizeElement",e,{tagName:r,allowedTags:we}),e.hasChildNodes()&&!Et(e.firstElementChild)&&(!Et(e.content)||!Et(e.content.firstElementChild))&&C(/<[/\w]/g,e.innerHTML)&&C(/<[/\w]/g,e.textContent)||"select"===r&&C(/<template/i,e.innerHTML)||7===e.nodeType||He&&8===e.nodeType&&C(/<[/\w]/g,e.data))return _t(e),!0;if(!we[r]||Le[r]){if(!Le[r]&&kt(r)&&(Oe.tagNameCheck instanceof RegExp&&C(Oe.tagNameCheck,r)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(r)))return!1;if($e&&!Xe[r]){var o=re(e)||e.parentNode,a=ne(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i){var l=_(a[i],!0);l.__removalCount=(e.__removalCount||0)+1,o.insertBefore(l,L(e))}}return _t(e),!0}return e instanceof s&&!function(e){var t=re(e);(!t||!t.tagName)&&(t={namespaceURI:at,tagName:"template"});var n=E(e.tagName),r=E(t.tagName);return!!lt[e.namespaceURI]&&(e.namespaceURI===rt?t.namespaceURI===ot?"svg"===n:t.namespaceURI===nt?"svg"===n&&("annotation-xml"===r||dt[r]):!!yt[n]:e.namespaceURI===nt?t.namespaceURI===ot?"math"===n:t.namespaceURI===rt?"math"===n&&ht[r]:!!bt[n]:e.namespaceURI===ot?!(t.namespaceURI===rt&&!ht[r]||t.namespaceURI===nt&&!dt[r])&&!bt[n]&&(gt[n]||!yt[n]):!("application/xhtml+xml"!==he||!lt[e.namespaceURI]))}(e)||("noscript"===r||"noembed"===r||"noframes"===r)&&C(/<\/no(script|embed|frames)/i,e.innerHTML)?(_t(e),!0):(Ue&&3===e.nodeType&&(t=e.textContent,t=w(t,ye," "),t=w(t,be," "),t=w(t,_e," "),e.textContent!==t&&(N(n.removed,{element:e.cloneNode()}),e.textContent=t)),At("afterSanitizeElements",e,null),!1)},wt=function(e,t,n){if(qe&&("id"===t||"name"===t)&&(n in a||n in mt))return!1;if((!Me||Re[t]||!C(ve,t))&&(!De||!C(Te,t)))if(!xe[t]||Re[t]){if(!(kt(e)&&(Oe.tagNameCheck instanceof RegExp&&C(Oe.tagNameCheck,e)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(e))&&(Oe.attributeNameCheck instanceof RegExp&&C(Oe.attributeNameCheck,t)||Oe.attributeNameCheck instanceof Function&&Oe.attributeNameCheck(t))||"is"===t&&Oe.allowCustomizedBuiltInElements&&(Oe.tagNameCheck instanceof RegExp&&C(Oe.tagNameCheck,n)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(n))))return!1}else if(!et[t]&&!C(Se,w(n,Ee,""))&&("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==k(n,"data:")||!Je[e])&&(!Ie||C(Ne,w(n,Ee,"")))&&n)return!1;return!0},kt=function(e){return"annotation-xml"!==e&&S(e,Ae)},xt=function(e){var t,o,a,i;At("beforeSanitizeAttributes",e,null);var l=e.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:xe};for(i=l.length;i--;){var u=t=l[i],s=u.name,m=u.namespaceURI;if(o="value"===s?t.value:x(t.value),a=ge(s),c.attrName=a,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,At("uponSanitizeAttribute",e,c),o=c.attrValue,!c.forceKeepAttr&&(vt(s,e),c.keepAttr)){if(!Fe&&C(/\/>/i,o)){vt(s,e);continue}Ue&&(o=w(o,ye," "),o=w(o,be," "),o=w(o,_e," "));var p=ge(e.nodeName);if(wt(p,a,o)){if(Ye&&("id"===a||"name"===a)&&(vt(s,e),o="user-content-"+o),ae&&"object"===r(y)&&"function"==typeof y.getAttributeType&&!m)switch(y.getAttributeType(p,a)){case"TrustedHTML":o=ae.createHTML(o);break;case"TrustedScriptURL":o=ae.createScriptURL(o)}try{m?e.setAttributeNS(m,s,o):e.setAttribute(s,o),T(n.removed)}catch{}}}}At("afterSanitizeAttributes",e,null)}},Ct=function e(t){var n,r=Nt(t);for(At("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)if(At("uponSanitizeShadowNode",n,null),!St(n)){var o=re(n);1===n.nodeType&&(o&&o.__depth?n.__depth=(n.__removalCount||0)+o.__depth+1:n.__depth=1),n.__depth>=255&&_t(n),n.content instanceof l&&(n.content.__depth=n.__depth,e(n.content)),xt(n)}At("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var a,i,c,s,m,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((it=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Et(e)){if("function"!=typeof e.toString)throw O("toString is not a function");if("string"!=typeof(e=e.toString()))throw O("dirty is not a string, aborting")}if(!n.isSupported){if("object"===r(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Et(e))return t.toStaticHTML(e.outerHTML)}return e}if(Pe||ft(p),n.removed=[],"string"==typeof e&&(Ke=!1),Ke){if(e.nodeName){var f=ge(e.nodeName);if(!we[f]||Le[f])throw O("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof u)1===(i=(a=Tt("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===i.nodeName||"HTML"===i.nodeName?a=i:a.appendChild(i);else{if(!Be&&!Ue&&!ze&&-1===e.indexOf("<"))return ae&&We?ae.createHTML(e):e;if(!(a=Tt(e)))return Be?null:We?ie:""}a&&je&&_t(a.firstChild);for(var d=Nt(Ke?e:a);c=d.nextNode();)if((3!==c.nodeType||c!==s)&&!St(c)){var h=re(c);1===c.nodeType&&(h&&h.__depth?c.__depth=(c.__removalCount||0)+h.__depth+1:c.__depth=1),c.__depth>=255&&_t(c),c.content instanceof l&&(c.content.__depth=c.__depth,Ct(c.content)),xt(c),s=c}if(s=null,Ke)return e;if(Be){if(Ge)for(m=se.call(a.ownerDocument);a.firstChild;)m.appendChild(a.firstChild);else m=a;return(xe.shadowroot||xe.shadowrootmod)&&(m=pe.call(o,m,!0)),m}var g=ze?a.outerHTML:a.innerHTML;return ze&&we["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&C(ee,a.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+g),Ue&&(g=w(g,ye," "),g=w(g,be," "),g=w(g,_e," ")),ae&&We?ae.createHTML(g):g},n.setConfig=function(e){ft(e),Pe=!0},n.clearConfig=function(){st=null,Pe=!1},n.isValidAttribute=function(e,t,n){st||ft({});var r=ge(e),o=ge(t);return wt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(de[e]=de[e]||[],N(de[e],t))},n.removeHook=function(e){if(de[e])return T(de[e])},n.removeHooks=function(e){de[e]&&(de[e]=[])},n.removeAllHooks=function(){de={}},n}()}}]);