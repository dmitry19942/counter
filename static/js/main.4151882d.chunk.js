(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),r=n.n(s),u=(n(9),n(2)),i=(n(10),n(0));function l(e){return Object(i.jsxs)("div",{className:"div-b",children:[Object(i.jsx)("button",{className:"button",onClick:e.incCount,disabled:e.incButtonDisabled,children:"inc"}),Object(i.jsx)("button",{className:"button-v",onClick:e.resetCount,disabled:e.resetButtonDisabled,children:"reset"})]})}function o(e){return Object(i.jsx)("span",{className:e.enterSetButton?"span-enter-set-button":e.incorrectValue?"span-incorrect-value":e.span,children:e.enterSetButton?"Enter values and press 'set'":e.incorrectValue?"Incorrect value":e.value})}function b(e){return Object(i.jsx)("div",{className:"div-b",children:Object(i.jsx)("button",{className:"button",onClick:e.onClick,disabled:e.disabled,children:"set"})})}function j(e){return Object(i.jsx)("span",{className:"span",children:Object(i.jsxs)("div",{style:{height:"180px"},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"ml",style:{fontSize:"25px",marginRight:"10px"},children:"max value:"}),Object(i.jsx)("input",{className:e.errorMaxValue?"error":"input",type:"number",id:"ml",onChange:e.onChangeMaxValue,value:e.maxValue})]}),Object(i.jsxs)("div",{style:{marginTop:"-5px"},children:[Object(i.jsx)("label",{htmlFor:"sv",style:{fontSize:"25px",marginRight:"10px"},children:"start value:"}),Object(i.jsx)("input",{className:e.errorStartValue?"error":"input",type:"number",id:"sv",onChange:e.onChangeStartValue,value:e.startValue})]})]})})}var O=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(10),r=Object(u.a)(s,2),O=r[0],d=r[1],f=Object(a.useState)(0),v=Object(u.a)(f,2),p=v[0],x=v[1],m=Object(a.useState)(!1),h=Object(u.a)(m,2),S=h[0],g=h[1],V=Object(a.useState)(!1),N=Object(u.a)(V,2),C=N[0],y=N[1],E=Object(a.useState)(!0),J=Object(u.a)(E,2),B=J[0],I=J[1],k=Object(a.useState)(!1),F=Object(u.a)(k,2),D=F[0],M=F[1],T=Object(a.useState)(!1),w=Object(u.a)(T,2),z=w[0],L=w[1];Object(a.useEffect)((function(){p>=O?(g(!0),y(!0),I(!0),L(!0)):p<0?(y(!0),I(!0),L(!0)):p<O&&(g(!1),y(!1),I(!1),L(!1))}),[p,O,S,C]),Object(a.useEffect)((function(){M(!B)}),[B]),Object(a.useEffect)((function(){var e=localStorage.getItem("counterValue");if(e){var t=JSON.parse(e);c(t)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("counterValue",JSON.stringify(n)),I(!0)}),[n]),Object(a.useEffect)((function(){var e=localStorage.getItem("maxValue");if(e){var t=JSON.parse(e);d(t)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("maxValue",JSON.stringify(O))}),[O]),Object(a.useEffect)((function(){var e=localStorage.getItem("startValue");if(e){var t=JSON.parse(e);x(t)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("startValue",JSON.stringify(p))}),[p]);var P=n===O,R=n===p,A=n===O?"span-v":"span";return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{className:"div-v",children:[Object(i.jsx)(j,{maxValue:O,onChangeMaxValue:function(e){var t=JSON.parse(e.currentTarget.value);d(t)},startValue:p,onChangeStartValue:function(e){var t=JSON.parse(e.currentTarget.value);x(t)},errorMaxValue:S,errorStartValue:C}),Object(i.jsx)(b,{onClick:function(){c(p),d(O),I(!0)},disabled:B})]}),Object(i.jsxs)("div",{className:"div-v",children:[Object(i.jsx)(o,{value:n,span:A,incorrectValue:z,enterSetButton:D}),Object(i.jsx)(l,{incCount:function(){n<O&&c(n+1)},resetCount:function(){c(p)},incButtonDisabled:P,resetButtonDisabled:R})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.4151882d.chunk.js.map