/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function n(){for(var n=0,r=0,a=arguments.length;r<a;r++)n+=arguments[r].length;var o=Array(n),e=0;for(r=0;r<a;r++)for(var i=arguments[r],t=0,l=i.length;t<l;t++,e++)o[e]=i[t];return o}var r=function(n){if(null!=n){var r=parseFloat(n);return isNaN(r)?void 0:0===r||r===-1/0?"0":isFinite(r)?r+"px":void 0}};function a(n){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];var o=[];return n.forEach((function(n,a){(n||0===n)&&o.push(n),(r[a]||0===r[a])&&o.push(r[a])})),o.join("")}function o(o){var e=void 0,i=void 0;return Array.isArray(o)?(e=r(o[0]),i=r(o[1])):(e=r(o.min),i=r(o.max)),{css:function(r){for(var o=[],t=1;t<arguments.length;t++)o[t-1]=arguments[t];var l=a.apply(void 0,n([r],o));switch(!0){case Boolean(e&&i)||Boolean(0===e)&&Boolean(0===i)||Boolean(0===e)&&Boolean(i)||Boolean(0===i)&&Boolean(e):return"@media only screen and (min-width: "+e+") and (max-width: "+i+") {"+l+"}";case Boolean(e||0===e):return"@media only screen and (min-width: "+e+") {"+l+"}";case Boolean(i||0===i):return"@media only screen and (max-width: "+i+") {"+l+"}";default:return""}}}}export{o as breakpoint};
