webpackJsonp([69],{867:function(e,a,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function t(e){var a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:case 2:return a+":a"}return a+":e"}Object.defineProperty(a,"__esModule",{value:!0});var o=n(196),u=r(o),l=n(195),s=r(l),d={narrow:["sö","må","ti","on","to","fr","lö"],short:["sön","mån","tis","ons","tor","fre","lör"],long:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"]},f={short:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],long:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},i={long:["f.m.","e.m."]},g={ordinalNumber:t,weekday:(0,u.default)(d,"long"),weekdays:(0,s.default)(d,"long"),month:(0,u.default)(f,"long"),months:(0,s.default)(f,"long"),timeOfDay:(0,u.default)(i,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,s.default)(i,"long")};a.default=g,e.exports=a.default}});
//# sourceMappingURL=61f290c912161d29af19.js.map
