(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(4),u=n.n(r),o=(n(13),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,u=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),u(t),o(t)}))}),c=(n(14),n(1));function s(t){return Object(c.jsx)("span",{className:t.enterSetButton?"span-enter-set-button":t.incorrectValue?"span-incorrect-value":t.value===t.maxValue?"":"span",children:t.enterSetButton?"Enter values and press 'set'":t.incorrectValue?"Incorrect value":t.value===t.maxValue?Object(c.jsxs)("span",{className:"span-max-value",children:[Object(c.jsx)("div",{className:"span-count",children:t.value}),Object(c.jsx)("div",{className:"span-text",children:"It is max value. Press 'reset'"})]}):t.value})}function l(t){return Object(c.jsxs)("button",{id:t.id,className:t.className,onClick:t.onClick,disabled:t.disabled,children:[t.nameButton," "]})}function i(t){return Object(c.jsx)("span",{className:"span",children:Object(c.jsxs)("div",{style:{height:"180px"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"maxValue",style:{fontSize:"25px",marginRight:"10px"},children:"max value:"}),Object(c.jsx)("input",{className:t.errorMaxValue?"error":"input",type:"number",id:"maxValue",onChange:t.onChangeMaxValue,value:t.maxValue,onKeyPress:t.onKeyPress})]}),Object(c.jsxs)("div",{style:{marginTop:"-5px"},children:[Object(c.jsx)("label",{htmlFor:"startValue",style:{fontSize:"25px",marginRight:"10px"},children:"start value:"}),Object(c.jsx)("input",{className:t.errorStartValue?"error":"input",type:"number",id:"startValue",onChange:t.onChangeStartValue,value:t.startValue,onKeyPress:t.onKeyPress})]})]})})}var b=n(2),d={count:0,maxCount:10,startCount:0,errorMaxValue:!1,errorStartValue:!1,buttonSetDisabled:!0,enterSetButton:!1,incorrectValue:!1,incButtonDisabled:!1,resetButtonDisabled:!1},j=function(t,e,n,a){return{type:"START-VALUE-MAX-VALUE-IS-CORRECT",errorMaxValue:t,errorStartValue:e,buttonSetDisabled:n,incorrectValue:a}},x=function(t){return{type:"MAX-VALUE-IS-CORRECT",errorMaxValue:t}},O=function(t,e){return{type:"INC-AND-RESET-BUTTON-DISABLED",incButtonDisabled:t,resetButtonDisabled:e}},C=function(t){return{type:"ENTER-SET-BUTTON-TITLE-SHOW",enterSetButton:t}},m=n(3);var S=function(){var t=Object(m.b)(),e=Object(m.c)((function(t){return t.counter}));Object(a.useEffect)((function(){null===e.startCount||e.startCount>=e.maxCount?t(j(!0,!0,!0,!0)):e.startCount<0?t(j(!1,!0,!0,!0)):e.startCount<e.maxCount&&t(j(!1,!1,!1,!1))}),[e.startCount,e.maxCount,t]),Object(a.useEffect)((function(){e.maxCount<=0?t(x(!0)):e.maxCount>0&&e.maxCount>e.startCount&&t(x(!1))}),[e.maxCount,e.startCount,t]),Object(a.useEffect)((function(){e.incorrectValue||e.errorStartValue||e.errorMaxValue?(e.incorrectValue||e.errorStartValue||e.errorMaxValue)&&t(O(!0,!0)):t(O(!1,!1))}),[e.incorrectValue,e.errorStartValue,e.errorMaxValue,t]),Object(a.useEffect)((function(){e.buttonSetDisabled?t(C(!1)):t(C(!0))}),[e.buttonSetDisabled,t]),Object(a.useEffect)((function(){e.enterSetButton?t(O(!0,!0)):e.count!==e.maxCount||e.incorrectValue?e.count===e.maxCount||e.count===e.startCount||e.incorrectValue?e.count!==e.startCount||e.incorrectValue?e.count===e.startCount||e.incorrectValue||t({type:"RESET-BUTTON-DISABLED",resetButtonDisabled:!1}):t(O(!1,!0)):t(O(!1,!1)):t(O(!0,!1))}),[e.enterSetButton,e.count,e.maxCount,e.startCount,e.incorrectValue,t]);var n=function(){var n,a,r,u,o;t((n=e.startCount,a=e.maxCount,r=e.buttonSetDisabled,u=e.enterSetButton,o=e.resetButtonDisabled,{type:"SET-BUTTON",count:n,maxCount:a,buttonSetDisabled:r,enterSetButton:u,resetButtonDisabled:o}))};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"div-value",children:[Object(c.jsx)(i,{maxValue:e.maxCount,onChangeMaxValue:function(e){e.currentTarget.value||t(j(!0,!0,!0,!0)),t({type:"CHANGE-MAX-VALUE",maxCount:parseInt(e.currentTarget.value)})},startValue:e.startCount,onChangeStartValue:function(e){e.currentTarget.value||t(j(!0,!0,!0,!0)),t({type:"CHANGE-START-VALUE",startCount:parseInt(e.currentTarget.value)})},errorMaxValue:e.errorMaxValue,errorStartValue:e.errorStartValue,onKeyPress:function(t){var e=document.getElementById("button-set");"Enter"===t.key&&e&&(n(),e.focus())}}),Object(c.jsx)("div",{className:"div-button",children:Object(c.jsx)(l,{id:"button-set",className:"button",nameButton:"set",onClick:n,disabled:e.buttonSetDisabled})})]}),Object(c.jsxs)("div",{className:"div-value",children:[Object(c.jsx)(s,{value:e.count,maxValue:e.maxCount,incorrectValue:e.incorrectValue,enterSetButton:e.enterSetButton}),Object(c.jsxs)("div",{className:"div-button",children:[Object(c.jsx)(l,{id:"button-inc",className:"button",onClick:function(){e.count<e.maxCount&&t({type:"INC-COUNT",count:e.count})},disabled:e.incButtonDisabled,nameButton:"inc"}),Object(c.jsx)(l,{id:"button-reset",className:"button-v",onClick:function(){var n,a;t((n=e.startCount,a=e.resetButtonDisabled,{type:"RESET-COUNT",count:n,resetButtonDisabled:a}))},disabled:e.resetButtonDisabled,nameButton:"reset"})]})]})]})},V=n(7),T=Object(V.a)({counter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INC-COUNT":return Object(b.a)(Object(b.a)({},t),{},{count:e.count+1});case"CHANGE-MAX-VALUE":return Object(b.a)(Object(b.a)({},t),{},{maxCount:e.maxCount});case"CHANGE-START-VALUE":return Object(b.a)(Object(b.a)({},t),{},{startCount:e.startCount});case"RESET-COUNT":return Object(b.a)(Object(b.a)({},t),{},{count:e.count,resetButtonDisabled:!0});case"SET-BUTTON":return Object(b.a)(Object(b.a)({},t),{},{count:e.count,maxCount:e.maxCount,buttonSetDisabled:!0,enterSetButton:!1,resetButtonDisabled:!0});case"START-VALUE-MAX-VALUE-IS-CORRECT":return Object(b.a)(Object(b.a)({},t),{},{errorMaxValue:e.errorMaxValue,errorStartValue:e.errorStartValue,buttonSetDisabled:e.buttonSetDisabled,incorrectValue:e.incorrectValue});case"MAX-VALUE-IS-CORRECT":return Object(b.a)(Object(b.a)({},t),{},{errorMaxValue:e.errorMaxValue});case"INC-AND-RESET-BUTTON-DISABLED":return Object(b.a)(Object(b.a)({},t),{},{incButtonDisabled:e.incButtonDisabled,resetButtonDisabled:e.resetButtonDisabled});case"ENTER-SET-BUTTON-TITLE-SHOW":return Object(b.a)(Object(b.a)({},t),{},{enterSetButton:e.enterSetButton});case"RESET-BUTTON-DISABLED":return Object(b.a)(Object(b.a)({},t),{},{resetButtonDisabled:e.resetButtonDisabled});default:return t}}}),p=Object(V.b)(T,function(){try{var t=localStorage.getItem("app-state");if(null===t)return;return JSON.parse(t)}catch(e){return}}());p.subscribe((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("app-state",e)}catch(n){}}({counter:p.getState().counter})})),window.store=p,u.a.render(Object(c.jsx)(m.a,{store:p,children:Object(c.jsx)(S,{})}),document.getElementById("root")),o()}},[[22,1,2]]]);
//# sourceMappingURL=main.c1d57446.chunk.js.map