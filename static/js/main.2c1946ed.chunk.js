(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),r=a.n(s),u=(a(9),a(2)),i=(a(10),a(0));function l(e){return Object(i.jsxs)("div",{className:"div-b",children:[Object(i.jsx)("button",{className:"button",onClick:e.incCount,disabled:e.incButtonDisabled,children:"inc"}),Object(i.jsx)("button",{className:"button-v",onClick:e.resetCount,disabled:e.resetButtonDisabled,children:"reset"})]})}function o(e){return Object(i.jsx)("span",{className:e.enterSetButton?"span-enter-set-button":e.incorrectValue?"span-incorrect-value":e.span,children:e.enterSetButton?"Enter values and press 'set'":e.incorrectValue?"Incorrect value":e.value})}function b(e){return Object(i.jsx)("div",{className:"div-b",children:Object(i.jsx)("button",{className:"button",onClick:e.onClick,disabled:e.disabled,children:"set"})})}function j(e){return Object(i.jsx)("span",{className:"span",children:Object(i.jsxs)("div",{style:{height:"180px"},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"ml",style:{fontSize:"25px",marginRight:"10px"},children:"max value:"}),Object(i.jsx)("input",{className:e.errorMaxValue?"error":"input",type:"number",id:"ml",onChange:e.onChangeMaxValue,value:e.maxValue})]}),Object(i.jsxs)("div",{style:{marginTop:"-5px"},children:[Object(i.jsx)("label",{htmlFor:"sv",style:{fontSize:"25px",marginRight:"10px"},children:"start value:"}),Object(i.jsx)("input",{className:e.errorStartValue?"error":"input",type:"number",id:"sv",onChange:e.onChangeStartValue,value:e.startValue})]})]})})}var O=function(){var e=Object(n.useState)(-1),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(10),r=Object(u.a)(s,2),O=r[0],f=r[1],d=Object(n.useState)(0),v=Object(u.a)(d,2),p=v[0],x=v[1],m=Object(n.useState)(!1),S=Object(u.a)(m,2),h=S[0],g=S[1],V=Object(n.useState)(!1),N=Object(u.a)(V,2),C=N[0],y=N[1],E=Object(n.useState)(!0),J=Object(u.a)(E,2),B=J[0],I=J[1],k=Object(n.useState)(!1),F=Object(u.a)(k,2),D=F[0],M=F[1],T=Object(n.useState)(!1),w=Object(u.a)(T,2),z=w[0],L=w[1],P=Object(n.useState)(!1),R=Object(u.a)(P,2),A=R[0],q=R[1],G=Object(n.useState)(!1),H=Object(u.a)(G,2),K=H[0],Q=H[1];Object(n.useEffect)((function(){p>=O?(g(!0),y(!0),I(!0),L(!0),q(!0),Q(!0)):p<0?(y(!0),I(!0),L(!0),q(!0),Q(!0)):p<O&&(g(!1),y(!1),I(!1),L(!1))}),[p,O]),Object(n.useEffect)((function(){M(!B)}),[B]),Object(n.useEffect)((function(){D?(q(!0),Q(!0)):a===O?(q(!0),Q(!1)):a!==O?(q(!1),Q(!1)):a===p?(Q(!0),q(!1)):a!==p&&Q(!1)}),[D,a,O,p]),Object(n.useEffect)((function(){var e=localStorage.getItem("counterValue");if(e){var t=JSON.parse(e);c(t)}}),[]),Object(n.useEffect)((function(){localStorage.setItem("counterValue",JSON.stringify(a)),I(!0)}),[a]),Object(n.useEffect)((function(){var e=localStorage.getItem("maxValue");if(e){var t=JSON.parse(e);f(t)}}),[]),Object(n.useEffect)((function(){localStorage.setItem("maxValue",JSON.stringify(O))}),[O]),Object(n.useEffect)((function(){var e=localStorage.getItem("startValue");if(e){var t=JSON.parse(e);x(t)}}),[]),Object(n.useEffect)((function(){localStorage.setItem("startValue",JSON.stringify(p))}),[p]);var U=a===O?"span-v":"span";return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{className:"div-v",children:[Object(i.jsx)(j,{maxValue:O,onChangeMaxValue:function(e){var t=JSON.parse(e.currentTarget.value);f(t)},startValue:p,onChangeStartValue:function(e){var t=JSON.parse(e.currentTarget.value);x(t)},errorMaxValue:h,errorStartValue:C}),Object(i.jsx)(b,{onClick:function(){c(p),f(O),I(!0),M(!1),Q(!0)},disabled:B})]}),Object(i.jsxs)("div",{className:"div-v",children:[Object(i.jsx)(o,{value:a,span:U,incorrectValue:z,enterSetButton:D}),Object(i.jsx)(l,{incCount:function(){a<O&&c(a+1)},resetCount:function(){c(p),Q(!0)},incButtonDisabled:A,resetButtonDisabled:K})]})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),f()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.2c1946ed.chunk.js.map