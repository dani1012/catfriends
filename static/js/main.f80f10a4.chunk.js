(this.webpackJsonpcatfriends=this.webpackJsonpcatfriends||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),i=n(5),s=n(7),l=n(14),u=n(15),d={searchfield:""},h={robots:[],isPending:!1,error:""},f=(n(26),n(1)),p=n(2),b=n(4),m=n(3),g=(n(27),function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"bg-light-green br2 dib pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/set_set4/".concat(r,"/?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h4",null,t),a.a.createElement("p",null,n)))}),v=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(g,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})})))},E=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa3"},a.a.createElement("input",{"aria-label":"Search cats",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search cats by name",onChange:t}))},O=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},w=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(p.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops,something went wrong."):this.props.children}}]),n}(a.a.Component),y=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(p.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return a.a.createElement("button",{onClick:this.updateCount},"Count:",this.state.count)}}]),n}(r.Component),R=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",{className:"f1"},"CATFRIENDS"),a.a.createElement(y,null))}}]),n}(r.Component),S=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchfield,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a.a.createElement("div",{className:"tc"},a.a.createElement(R,null),a.a.createElement(E,{searchChange:n}),a.a.createElement(O,null,o?a.a.createElement("h1",null,"Loading..."):a.a.createElement(w,null,a.a.createElement(v,{robots:c}))))}}]),n}(r.Component),C=Object(s.b)((function(e){return{searchfield:e.searchRobotsReducer.searchfield,robots:e.requestRobotsReducer.robots,isPending:e.requestRobotsReducer.isPending,error:e.requestRobotsReducer.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(S),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(28);var _=Object(l.createLogger)(),T=Object(i.c)({searchRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchfield:t.payload});default:return e}},requestRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(i.d)(T,Object(i.a)(u.a,_));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:N},a.a.createElement(C,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/catfriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/catfriends","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.f80f10a4.chunk.js.map