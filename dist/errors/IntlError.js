"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"IntlError",{enumerable:!0,get:function(){return o}});const t=require("../i18n"),r=(e=require("./CustomError"))&&e.__esModule?e:{default:e};class o extends r.default{constructor(e,{language:r,...o},s=500){super(t.TranslateService.execute(e,{language:r},o),s),this.name=new.target.name,Object.setPrototypeOf(this,new.target.prototype)}}