"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),!function(t,e){for(var r in e)Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}(exports,{CustomError:function(){return t},default:function(){return e}});class t extends Error{httpStatus;constructor(t,e){super(t),this.httpStatus=e,Object.setPrototypeOf(this,new.target.prototype)}}const e=t;