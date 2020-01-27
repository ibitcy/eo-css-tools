"use strict";
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
function n(){for(var n=0,e=0,r=arguments.length;e<r;e++)n+=arguments[e].length;var o=Array(n),a=0;for(e=0;e<r;e++)for(var t=arguments[e],i=0,l=t.length;i<l;i++,a++)o[a]=t[i];return o}Object.defineProperty(exports,"__esModule",{value:!0});var e=function(n){if(null!=n){var e=parseFloat(n);return isNaN(e)?void 0:0===e||e===-1/0?"0":isFinite(e)?e+"px":void 0}};function r(n){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var o=[];return n.forEach((function(n,r){(n||0===n)&&o.push(n),(e[r]||0===e[r])&&o.push(e[r])})),o.join("")}exports.breakpoint=function(o){var a=void 0,t=void 0;return Array.isArray(o)?(a=e(o[0]),t=e(o[1])):(a=e(o.min),t=e(o.max)),{css:function(e){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];var l=r.apply(void 0,n([e],o));switch(!0){case Boolean(a&&t)||Boolean(0===a)&&Boolean(0===t)||Boolean(0===a)&&Boolean(t)||Boolean(0===t)&&Boolean(a):return"@media only screen and (min-width: "+a+") and (max-width: "+t+") {"+l+"}";case Boolean(a||0===a):return"@media only screen and (min-width: "+a+") {"+l+"}";case Boolean(t||0===t):return"@media only screen and (max-width: "+t+") {"+l+"}";default:return""}}}};
