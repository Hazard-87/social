(this["webpackJsonpmy-firs-app"]=this["webpackJsonpmy-firs-app"]||[]).push([[4],{297:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(25),s=a(26),r=a(28),o=a(27),u=a(10),l=a(0),c=a.n(l),i=a(14),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(r.a)(l,t);var a=Object(o.a)(l);function l(){return Object(n.a)(this,l),a.apply(this,arguments)}return Object(s.a)(l,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(u.a,{to:"/login"})}}]),l}(c.a.Component);return Object(i.b)(m)(t)}},298:function(e,t,a){e.exports={phone:"MyProfile_phone__1JvIO",avatar:"MyProfile_avatar__3x52m",name:"MyProfile_name__7gVIp",status:"MyProfile_status__wt4Pq",profile:"MyProfile_profile__25ME1"}},299:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(91);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,s=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(l){s=!0,r=l}finally{try{n||null==u.return||u.return()}finally{if(s)throw r}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},304:function(e,t,a){e.exports={myPosts:"MyPosts_myPosts__3sfJ4",newPost:"MyPosts_newPost__mrvqT",send:"MyPosts_send__2y8y4",posts:"MyPosts_posts__3YE1l"}},305:function(e,t,a){e.exports={item:"Posts_item__2MCBc",like:"Posts_like__3KTlK",newComment:"Posts_newComment__21DDS",send:"Posts_send__3veT_",post:"Posts_post__IhN0r"}},309:function(e,t,a){"use strict";a.r(t);var n=a(25),s=a(26),r=a(28),o=a(27),u=a(0),l=a.n(u),c=a(92),i=a(39),m=a(304),p=a.n(m),f=a(305),d=a.n(f),v=function(e){var t=l.a.createRef();return l.a.createElement("div",{className:d.a.post},l.a.createElement("div",{className:d.a.item},l.a.createElement("img",{src:"https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg"})," ",e.message),l.a.createElement("div",{className:d.a.like},l.a.createElement("img",{src:"https://img.icons8.com/cotton/2x/facebook-like.png"}),e.likesCount),l.a.createElement("div",null,l.a.createElement("textarea",{className:d.a.newComment,ref:t,cols:"50",rows:"1",type:"text",placeholder:"Comments..."})),l.a.createElement("div",null,l.a.createElement("button",{className:d.a.send,onClick:function(){var e=t.current.value;alert(e),t.current.value=""}},"Send")))},b=a(126),h=a(127),E=a(70),_=a(64),y=l.a.memo((function(e){var t=Object(i.a)(e.posts).reverse().map((function(e){return l.a.createElement(v,{message:e.post,likesCount:e.likesCount})}));return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",{className:p.a.myPosts},"My posts"),l.a.createElement(j,{onSubmit:function(t){e.addPost(t.newPostBody),t.newPostBody=""}})),l.a.createElement("div",{className:p.a.posts},t))})),P=Object(E.a)(15),j=Object(h.a)({form:"addPostForm"})((function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("div",null,l.a.createElement(b.a,{className:p.a.newPost,component:_.b,name:"newPostBody",placeholder:"Your post...",validate:[E.b,P]})),l.a.createElement("div",null,l.a.createElement("button",{className:p.a.send},"Send")))})),O=y,S=a(14),g=Object(S.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(c.a)(t))}}}))(O),w=a(298),k=a.n(w),N=(l.a.Component,a(54)),M=a(299),C=function(e){var t=Object(u.useState)(!1),a=Object(M.a)(t,2),n=a[0],s=a[1],r=Object(u.useState)(e.status),o=Object(M.a)(r,2),c=o[0],i=o[1];Object(u.useEffect)((function(){i(e.status)}),[e.status]);return l.a.createElement("div",{className:k.a.status},n?l.a.createElement("div",null,l.a.createElement("input",{onChange:function(e){i(e.target.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(c)},value:c})):l.a.createElement("div",null,l.a.createElement("span",{onClick:function(){s(!0)}},e.status||"-----")))},I=function(e){return e.profile.photos?l.a.createElement("div",{className:k.a.content},l.a.createElement("div",{className:k.a.phone}),l.a.createElement("div",null,l.a.createElement("div",{className:k.a.avatar},l.a.createElement("img",{src:e.profile.photos.small})),l.a.createElement("div",{className:k.a.profile},l.a.createElement("p",{className:k.a.name},e.profile.fullName),l.a.createElement(C,{status:e.status,updateStatus:e.updateStatus}),l.a.createElement("p",null,"About Me: ",e.profile.aboutMe),l.a.createElement("p",null,"Facebook: ",l.a.createElement("a",{href:"https://ru-ru.facebook.com/"},e.profile.contacts.facebook))))):l.a.createElement(N.a,null)},x=function(e){return l.a.createElement("div",null,l.a.createElement(I,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),l.a.createElement(g,null))},A=a(10),B=a(297),J=a(8),T=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizesUserId),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return l.a.createElement(x,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(l.a.Component);t.default=Object(J.d)(Object(S.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizesUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{setUserProfile:c.e,getProfile:c.c,getStatus:c.d,updateStatus:c.f}),A.f,B.a)(T)}}]);
//# sourceMappingURL=4.c02b8ae3.chunk.js.map