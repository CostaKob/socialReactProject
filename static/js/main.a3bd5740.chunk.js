(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return s}));var r=n(133),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b06971d9-611c-48a0-b181-a32de5e059d3"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("obsolete method. Please use profileAPI object"),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},u={me:function(){return a.get("auth/me/")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login/",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login/")}},s={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},107:function(e,t,n){e.exports=n.p+"static/media/user.129ab51c.png"},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(42),a=n(4),o={messages:[{id:1,message:"Hi, how are you ?"},{id:2,message:"What's up ?"},{id:3,message:"Hello world !"},{id:4,message:"My name is Costa"},{id:5,message:"Whaaaat!??"},{id:6,message:"Yo yo yo!!"}],dialogs:[{id:1,name:"Costa"},{id:2,name:"Darya"},{id:3,name:"Yuli"},{id:4,name:"Diana"},{id:5,name:"Vasya"},{id:6,name:"Petya"}]},c=function(e){return{type:"dialogs/ADD-MESSAGE",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},134:function(e,t,n){e.exports=n.p+"static/media/preloader.49c8c1d4.svg"},138:function(e,t,n){e.exports={footer:"Footer_footer__laLIB"}},164:function(e,t,n){e.exports=n(293)},169:function(e,t,n){},17:function(e,t,n){e.exports={nav:"Navbar_nav__2nrb7",item:"Navbar_item__1ZthA",active:"Navbar_active__xnuAk"}},192:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var r=n(56),a=n(0),o=n.n(a),c=n(25),u=n.n(c),s=n(89),i=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=r&&n;return o.a.createElement("div",{className:u.a.formControl+" "+(c?u.a.error:"")},o.a.createElement("div",null,a),c&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(i,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(i,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",{className:u.a.inputs},o.a.createElement(s.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a)),o.a.createElement("span",{className:u.a.fieldText},c))}},25:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2AxtE",error:"FormsControls_error__2cKMa",formSummaryError:"FormsControls_formSummaryError__1BPXs",loginForm:"FormsControls_loginForm__3et7z",inputs:"FormsControls_inputs__3JDUv",fieldText:"FormsControls_fieldText__3fXGb",loginBtn:"FormsControls_loginBtn__30kK2"}},292:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(65),c=n.n(o),u=n(36),s=n(37),i=n(39),l=n(38),f=(n(169),n(46)),p=n.n(f),m=n(13),d=function(e){var t=e.isAuth,n=e.login,r=e.logout;return a.a.createElement("header",{className:p.a.headerData},a.a.createElement("img",{src:"http://gambolthemes.net/workwise-new/images/logo.png"}),a.a.createElement("div",{className:p.a.headerSearch},a.a.createElement("input",{placeholder:"Search..."}),a.a.createElement("a",{href:"#"},a.a.createElement("i",{className:"fa"},"\uf002"))),a.a.createElement("div",{className:p.a.loginBlock},t?a.a.createElement("div",null,"Hello, ",n," ",a.a.createElement("button",{onClick:r},"Logout")):a.a.createElement(m.b,{to:"/login"},"Login")))},g=n(14),h=n(7),E=n.n(h),b=n(12),v=n(4),O=n(10),w=n(31),S={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},j=function(e,t,n,r){return{type:"auth/SET-USER-DATA",payload:{id:e,email:t,login:n,isAuth:r}}},C=function(e){return{type:"auth/GET-CAPTCHA-URL-SUCCESS",payload:{captchaUrl:e}}},P=function(){return function(){var e=Object(b.a)(E.a.mark((function e(t){var n,r,a,o,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.email,c=r.login,t(j(a,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){return function(){var e=Object(b.a)(E.a.mark((function e(t){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(C(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USER-DATA":case"auth/GET-CAPTCHA-URL-SUCCESS":return Object(v.a)(Object(v.a)({},e),t.payload);default:return e}},U=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:p.a.header},a.a.createElement(d,this.props))}}]),n}(a.a.Component),N=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.logout();case 2:0===e.sent.data.resultCode&&t(j(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(U),T=n(17),k=n.n(T),I=function(){return a.a.createElement("nav",{className:k.a.nav},a.a.createElement("div",{className:k.a.item},a.a.createElement(m.b,{to:"/profile",activeClassName:k.a.active},"Profile")),a.a.createElement("div",{className:k.a.item},a.a.createElement(m.b,{to:"/dialogs",activeClassName:k.a.active},"Messages")),a.a.createElement("div",{className:k.a.item},a.a.createElement(m.b,{to:"/news",activeClassName:k.a.active},"News")),a.a.createElement("div",{className:k.a.item},a.a.createElement(m.b,{to:"/music",activeClassName:k.a.active},"Music")),a.a.createElement("div",{className:k.a.item},a.a.createElement(m.b,{to:"/settings",activeClassName:k.a.active},"Settings")),a.a.createElement("div",{className:k.a.item},a.a.createElement(m.b,{to:"/users",activeClassName:k.a.active},"Users")))},x=(n(192),function(e){return a.a.createElement("div",null,"News")}),A=(n(193),function(e){return a.a.createElement("div",null,"Music")}),F=(n(194),function(e){return a.a.createElement("div",null,"Settings")}),L=n(30),z=n(9),D=n(42),R=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(v.a)(Object(v.a)({},e),r):e}))},G="users/FOLLOW",M={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},H=function(e){return{type:G,userId:e}},B=function(e){return{type:"users/UNFOLLOW",userId:e}},W=function(e){return{type:"users/TOGGLE-IS-FETCHING",isFetching:e}},K=function(e,t){return{type:"users/TOGGLE-FOLLOWING-IN-PROGRESS",isFetching:e,userId:t}},q=function(){var e=Object(b.a)(E.a.mark((function e(t,n,r,a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(K(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(K(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(v.a)(Object(v.a)({},e),{},{users:R(e.users,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(v.a)(Object(v.a)({},e),{},{users:R(e.users,t.userId,"id",{followed:!1})});case"users/SET-USERS":return Object(v.a)(Object(v.a)({},e),{},{users:t.users});case"users/SET-CURRENT-PAGE":return Object(v.a)(Object(v.a)({},e),{},{currentPage:t.currentPage});case"users/SET-TOTAL-USERS-COUNT":return Object(v.a)(Object(v.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"users/TOGGLE-IS-FETCHING":return Object(v.a)(Object(v.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE-FOLLOWING-IN-PROGRESS":return Object(v.a)(Object(v.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(D.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},V=n(41),X=n(56),Y=n(88),Z=n.n(Y),Q=n(95),$=n(70),ee=n.n($),te=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChange,u=e.portionSize,s=void 0===u?10:u,i=Math.ceil(t/n),l=[],f=1;f<=i;f++)l.push(f);var p=Math.ceil(i/s),m=Object(r.useState)(1),d=Object(Q.a)(m,2),g=d[0],h=d[1],E=(g-1)*s+1,b=g*s;return a.a.createElement("div",{className:ee.a.paginator},g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"Prev"),l.filter((function(e){return e>=E&&e<=b})).map((function(e){return a.a.createElement("span",{onClick:function(t){c(e)},className:o===e?ee.a.selectedPage:ee.a.pageNumbers},e+" ")})),p>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"Next"))},ne=n(107),re=n.n(ne),ae=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,o=e.unfollow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement(m.b,{to:"/profile/"+t.id,className:Z.a.user},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:re.a})),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("div",null,t.name)))},oe=function(e){var t=e.currentPage,n=e.onPageChange,r=e.totalUsersCount,o=e.pageSize,c=e.users,u=Object(X.a)(e,["currentPage","onPageChange","totalUsersCount","pageSize","users"]);return a.a.createElement("div",null,a.a.createElement(te,{currentPage:t,onPageChange:n,totalItemsCount:r,pageSize:o}),a.a.createElement("div",null,c.map((function(e){return a.a.createElement(ae,{user:e,followingInProgress:u.followingInProgress,key:e.id,unfollow:u.unfollow,follow:u.follow})}))))},ce=n(135),ue=function(e){return e.usersPage.isFetching},se=Object(ce.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ie=function(e){return e.usersPage.pageSize},le=function(e){return e.usersPage.totalUsersCount},fe=function(e){return e.usersPage.currentPage},pe=function(e){return e.usersPage.followingInProgress},me=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChange=function(t){var n=e.props.pageSize;e.props.setCurrentPage(t),e.props.requestUsers(t,n)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(V.a,null):null,a.a.createElement(oe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(a.a.Component),de=Object(z.d)(Object(g.b)((function(e){return{users:se(e),pageSize:ie(e),totalUsersCount:le(e),currentPage:fe(e),isFetching:ue(e),followingInProgress:pe(e)}}),{follow:function(e){return function(){var t=Object(b.a)(E.a.mark((function t(n){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=O.d.follow.bind(O.d),q(n,e,r,H);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(b.a)(E.a.mark((function t(n){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=O.d.unfollow.bind(O.d),q(n,e,r,B);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:"users/SET-CURRENT-PAGE",currentPage:e}},toggleFollowingInProgress:K,requestUsers:function(e,t){return function(){var n=Object(b.a)(E.a.mark((function n(r){var a;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(W(!0)),n.next=3,O.d.getUsers(e,t);case 3:a=n.sent,r(W(!1)),r({type:"users/SET-USERS",users:a.items}),r({type:"users/SET-TOTAL-USERS-COUNT",totalUsersCount:a.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(me),ge=n(25),he=n.n(ge),Ee=n(129),be=n(24),ve=n(66),Oe=Object(Ee.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(be.c)("E-mail","email",[ve.b],be.a),Object(be.c)("Password","password",[ve.b],be.a,{type:"password"}),Object(be.c)(null,"rememberMe",[],be.a,{type:"checkbox"},"Remember me"),r&&a.a.createElement("img",{src:r}),r&&Object(be.c)("Symbols from image","captcha",[ve.b],be.a),n&&a.a.createElement("div",{className:he.a.formSummaryError},n),a.a.createElement("div",{className:he.a.loginBtn},a.a.createElement("button",null,"Login")))})),we=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var a=Object(b.a)(E.a.mark((function a(o){var c,u;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.login(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?o(P()):(10===c.data.resultCode&&o(y()),u=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(w.a)("login",{_error:u})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(L.a,{to:"/profile"}):a.a.createElement("div",{className:he.a.loginForm},a.a.createElement("h1",null,"Login"),a.a.createElement(Oe,{captchaUrl:e.captchaUrl,onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)}}))})),Se={initialized:!1},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED-SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{initialized:!0});default:return e}},Ce=n(94),Pe=n(128),ye={friends:[{id:100,name:"Darya",img:"https://www.kindpng.com/picc/b/163/1636340.png"},{id:200,name:"Diana",img:"https://www.kindpng.com/picc/b/163/1636340.png"},{id:300,name:"Yuli",img:"https://www.kindpng.com/picc/b/163/1636340.png"}]},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye;arguments.length>1&&arguments[1];return e},Ue=n(137),Ne=n(130),Te=Object(z.c)({profilePage:Ce.b,dialogsPage:Pe.b,sideBar:_e,usersPage:J,auth:_,form:Ne.a,app:je}),ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,Ie=Object(z.e)(Te,ke(Object(z.a)(Ue.a)));window.__store__=Ie;var xe=Ie,Ae=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(V.a,null)},a.a.createElement(e,t))}},Fe=n(138),Le=n.n(Fe),ze=function(e){return a.a.createElement("footer",{className:Le.a.footer},a.a.createElement("div",null,"Something in the footer 2020"))},De=a.a.lazy((function(){return n.e(4).then(n.bind(null,300))})),Re=a.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),Ge=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){alert("Some error occured")},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null),a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(I,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(L.d,null,a.a.createElement(L.b,{exact:!0,path:"/",render:function(){return a.a.createElement(L.a,{to:"/profile"})}}),a.a.createElement(L.b,{path:"/profile/:userId?",render:Ae(Re)}),a.a.createElement(L.b,{path:"/dialogs",render:Ae(De)}),a.a.createElement(L.b,{path:"/users",render:function(){return a.a.createElement(de,null)}}),a.a.createElement(L.b,{path:"/news",render:function(){return a.a.createElement(x,null)}}),a.a.createElement(L.b,{path:"/music",render:function(){return a.a.createElement(A,null)}}),a.a.createElement(L.b,{path:"/settings",render:function(){return a.a.createElement(F,null)}}),a.a.createElement(L.b,{path:"/login",render:function(){return a.a.createElement(we,null)}}),a.a.createElement(L.b,{path:"*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}}))),a.a.createElement(ze,null))):a.a.createElement(V.a,null)}}]),n}(a.a.Component),Me=Object(z.d)(L.g,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(P()).then((function(){e({type:"app/INITIALIZED-SUCCESS"})}))}}}))(Ge),He=function(e){return a.a.createElement(m.a,null,a.a.createElement(g.a,{store:xe},a.a.createElement(Me,null)))};n(292);c.a.render(a.a.createElement(He,null),document.getElementById("root"))},41:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(134),c=n.n(o);t.a=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:c.a}))}},46:function(e,t,n){e.exports={header:"Header_header__1BfEJ",headerData:"Header_headerData__znWKh",headerSearch:"Header_headerSearch__3z_TK",loginBlock:"Header_loginBlock__DRZ9P"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max Length is ".concat(e," symbols")}}},70:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3Eh0r",pageNumbers:"Paginator_pageNumbers__Hj5z-"}},88:function(e,t,n){e.exports={user:"Users_user__3H5ez"}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return b}));var r=n(7),a=n.n(r),o=n(12),c=n(42),u=n(4),s=n(10),i=n(31),l="profile/ADD-POST",f={posts:[{id:1,message:"Hi, how are you?",likesCount:"15"},{id:2,message:"It is my first post",likesCount:"20"},{id:3,message:"Hi?",likesCount:"0"},{id:4,message:"yo yo yo",likesCount:"12"}],profile:null,status:""},p=function(e){return{type:l,newPostBody:e}},m=function(e){return{type:"profile/SET-STATUS",status:e}},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.getProfile(e);case 2:r=t.sent,n({type:"profile/SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(m(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"profile/SAVE-PHOTO-SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var o,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.id,t.next=3,s.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(d(o)),t.next=10;break;case 8:return n(Object(i.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostBody,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case"profile/SET-USER-PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"profile/SET-STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"profile/DELETE-POST":return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"profile/SAVE-PHOTO-SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[164,1,2]]]);
//# sourceMappingURL=main.a3bd5740.chunk.js.map