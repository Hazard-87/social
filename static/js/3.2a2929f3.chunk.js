(this["webpackJsonpmy-firs-app"]=this["webpackJsonpmy-firs-app"]||[]).push([[3],{297:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(25),s=t(26),r=t(28),c=t(27),i=t(10),m=t(0),l=t.n(m),o=t(14),u=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var a=function(a){Object(r.a)(m,a);var t=Object(c.a)(m);function m(){return Object(n.a)(this,m),t.apply(this,arguments)}return Object(s.a)(m,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(i.a,{to:"/login"})}}]),m}(l.a.Component);return Object(o.b)(u)(a)}},300:function(e,a,t){e.exports={messages:"Messages_messages__2CyTr"}},301:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3IXxf",dialog:"Dialogs_dialog__xycMi",active:"Dialogs_active__2Xjeb",img:"Dialogs_img__1NiPJ"}},302:function(e,a,t){e.exports={chatbar:"Chatbar_chatbar__3twJT",chatSend:"Chatbar_chatSend__r3kqn",sms:"Chatbar_sms__tf0d6"}},303:function(e,a,t){e.exports={message:"Chat_message__3Wo2Y",img:"Chat_img__y5t-h",text:"Chat_text__1H-Wm"}},310:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(14),c=t(300),i=t.n(c),m=t(301),l=t.n(m),o=t(13),u=function(e){return s.a.createElement("div",{className:l.a.dialogs},s.a.createElement("div",{className:l.a.dialog},s.a.createElement(o.b,{to:"/messages/"+e.id,activeClassName:l.a.active},s.a.createElement("div",{className:l.a.img},s.a.createElement("img",{src:e.ava})),e.name)))},g=t(124),d=t(302),_=t.n(d),f=t(303),v=t.n(f),b=function(e){return s.a.createElement("div",{className:v.a.chat},s.a.createElement("div",{className:v.a.message},s.a.createElement("div",{className:v.a.img},s.a.createElement("img",{src:e.avatar})),s.a.createElement("div",{className:v.a.text},e.message)))},h=t(126),E=t(127),p=t(64),N=t(70),j=Object(N.a)(50),y=Object(E.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(h.a,{className:_.a.sms,component:p.b,name:"newMessageBody",placeholder:"Enter your message...",validate:[N.b,j]})),s.a.createElement("div",null,s.a.createElement("button",{className:_.a.chatSend},"Send")))})),O=function(e){var a=e.messagesPage.messages.map((function(e){return s.a.createElement(b,{message:e.message,avatar:e.ava,id:e.id})}));return s.a.createElement("div",{className:_.a.chatbar},a,s.a.createElement("div",null,s.a.createElement(y,{onSubmit:function(a){e.addMessage(a.newMessageBody),a.newMessageBody=""}})))},x=Object(r.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{addMessage:function(a){e(Object(g.a)(a))}}}))(O),C=function(e){var a=e.dialogs.map((function(e){return s.a.createElement(u,{name:e.name,id:e.id,ava:e.ava})}));return s.a.createElement("div",{className:i.a.messages},s.a.createElement("div",null,a),s.a.createElement(x,null))},M=t(297),S=t(8);a.default=Object(S.d)(Object(r.b)((function(e){return{dialogs:e.messagesPage.dialogs}})),M.a)(C)}}]);
//# sourceMappingURL=3.2a2929f3.chunk.js.map