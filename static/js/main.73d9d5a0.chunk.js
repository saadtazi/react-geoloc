(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{228:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(32),c=a.n(l),r=a(86),i=a.n(r),u=a(87),m=a.n(u),A=a(92),s=a.n(A),d=a(89),b=a.n(d),E=a(90),g=a.n(E),p=a(25),h=a.n(p),v=a(91),G=a.n(v),y=a(26),I=a.n(y),x=a(27),N=a.n(x),w=a(88),L=a.n(w),C=a(20),D=a.n(C),Y=a(33),J=a.n(Y),M=a(55),Z=a(54),f=a.n(Z),T=a(84),k=a.n(T),O=J()({typography:{useNextVariants:!0}}),X=Object(M.b)(function(e){return{githubIcon:{width:30},toolbar:{display:"grid",justifyContent:"space-between",gridTemplateColumns:"1fr 40px"},hero:{margin:"25px 25px 50px 25px",padding:"50px 25px 50px 25px",backgroundColor:"#737373",borderRadius:10,textAlign:"center",color:e.palette.primary.contrastText}}});function W(){var e=X();return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{position:"static",color:"default"},o.a.createElement(L.a,{className:e.toolbar},o.a.createElement(D.a,{variant:"h6",color:"inherit"},"React-Geoloc"),o.a.createElement("a",{href:"https://github.com/saadtazi/react-geoloc"},o.a.createElement("img",{className:e.githubIcon,src:k.a,alt:"github repo",title:"github repo"})))),o.a.createElement(b.a,null,o.a.createElement(g.a,null,o.a.createElement("div",{className:e.hero},o.a.createElement(D.a,{variant:"h3",color:"inherit"},"Geolocation React Component"),o.a.createElement(D.a,{variant:"h5",color:"inherit"},"... using React Hooks and React Context.")),o.a.createElement(D.a,{variant:"h4",color:"inherit"},"Features"),o.a.createElement(D.a,{component:"div"},o.a.createElement("ul",null,o.a.createElement("li",null,"You can get the"," ",o.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Position"},"device position"),", including its"," ",o.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Coordinates"},"coordinates"),"."),o.a.createElement("li",null,"You can decide when you request/fetch user location"),o.a.createElement("li",null,"you can specify any"," ",o.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions"},"Geolocation API options"),", like ",o.a.createElement("code",null,"enablehighAccuracy")," or ",o.a.createElement("code",null,"timeout"),"."))),o.a.createElement(D.a,{variant:"h4"},"Example"),o.a.createElement(f.a,{lazy:!0,watch:!1},o.a.createElement(R,null)),o.a.createElement(D.a,{style:{marginTop:30},component:"div"},o.a.createElement(h.a,null),"Code used in the example can be found"," ",o.a.createElement("a",{href:"https://github.com/saadtazi/react-geoloc/blob/master/example/src/App.js"},"here")))))}function R(){var e=Object(Z.useLocationContext)(),t=e.error,a=e.isFetching,n=e.position,l=e.fetchLocation;t.message&&alert(t.message);var c=n&&(n.coords||{}),r=c.latitude,i=c.longitude,u=c.altitude;return o.a.createElement(o.a.Fragment,null,o.a.createElement(G.a,null,o.a.createElement(I.a,null,o.a.createElement(N.a,{primary:"Latitude",secondary:r||"N/A"})),o.a.createElement(h.a,null),o.a.createElement(I.a,null,o.a.createElement(N.a,{primary:"Longitude",secondary:i||"N/A"})),o.a.createElement(h.a,null),o.a.createElement(I.a,null,o.a.createElement(N.a,{primary:"Altitude",secondary:u||"N/A"})),o.a.createElement(h.a,null),o.a.createElement(I.a,null,o.a.createElement(N.a,{primary:"isFetching?",secondary:JSON.stringify(a)})),o.a.createElement(h.a,null),o.a.createElement(I.a,null,o.a.createElement(N.a,{primary:"Error?",secondary:t.message||"None"}))),o.a.createElement(s.a,{color:"default",onClick:function(){return l()}},"Geolocate me!"))}c.a.render(o.a.createElement(function(){return o.a.createElement(M.a,{theme:O},o.a.createElement(i.a,null),o.a.createElement(W,null))},null),document.getElementById("root"))},54:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=a(0),l=(n=o)&&"object"===typeof n&&"default"in n?n.default:n,c=o.createContext({isFetching:!1,fetchLocation:function(){}});t.LocationContext=c,t.useLocationContext=function(){return o.useContext(c)},t.default=function(e){var t=e.lazy,a=void 0===t||t,n=e.watch,r=void 0!==n&&n,i=e.options,u=void 0===i?{}:i,m=e.children;function A(e){G(!1),b(!0),navigator.geolocation.getCurrentPosition(y,I,e||u)}var s=o.useState(!1),d=s[0],b=s[1],E=o.useState({}),g=E[0],p=E[1],h=o.useState(!1),v=h[0],G=h[1];function y(e){G(!1),b(!1),p(e)}function I(e){G(e)}"geolocation"in navigator||G({code:99,message:"Geolocation not available"}),o.useEffect(function(){a||(b(!0),A(u))},[]),o.useEffect(function(){if(r){var e=navigator.geolocation.watchPosition(y,I,u);return function(){navigator.geolocation.clearWatch(e)}}},[]);var x={error:v,isFetching:d,position:g,fetchLocation:A};return l.createElement(c.Provider,{value:x},m)}},84:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEzMjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTQxNEFCQzk5QTExMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMwOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTMxOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+R7ClIwAADR5JREFUeNrsnQuw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"},98:function(e,t,a){e.exports=a(228)}},[[98,2,1]]]);
//# sourceMappingURL=main.73d9d5a0.chunk.js.map