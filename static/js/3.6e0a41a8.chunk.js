(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{94:function(t,n,e){t.exports={ContactForm:"ContactForm_ContactForm__2Asif",ContactButton:"ContactForm_ContactButton__1lCJP"}},95:function(t,n,e){t.exports={ContactButton:"ContactsList_ContactButton__2blyE"}},99:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return E}));var c=e(39),r=e(40),a=e(42),o=e(41),u=e(0),i=e(3),s=e(19),b=e(8),j=e(17),f=e.n(j),l=e(23),d=e(20),O=e.n(d),h=e(10),m=function(t){var n=t.name,e=t.number;return function(t){var c={name:n,number:e};t(Object(h.b)()),O.a.post("/contacts",c).then((function(n){var e=n.data;return t(Object(h.c)(e))})).catch((function(n){return t(Object(h.a)(n.message))}))}},p=function(t){return function(n){n(Object(h.e)()),O.a.delete("/contacts/".concat(t)).then((function(){return n(Object(h.f)(t))})).catch((function(t){return n(Object(h.d)(t.message))}))}},C=function(){return function(){var t=Object(l.a)(f.a.mark((function t(n){var e,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(h.h)()),t.prev=1,t.next=4,O.a.get("/contacts");case 4:e=t.sent,c=e.data,n(Object(h.i)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(Object(h.g)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(n){return t.apply(this,arguments)}}()},g=e(28),x=function(t){return t.contacts.filter},v=function(t){return t.contacts.items},y={getLoading:function(t){return t.contacts.loading},getFilter:x,getContacts:v,getVisibleContacts:Object(g.a)([v,x],(function(t,n){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}))},F=e(94),k=e.n(F),L=e(1),_=Object(b.b)((function(t){return{contacts:y.getContacts(t)}}),(function(t){return{onAdd:function(n){return t(m(n))}}}))((function(t){var n=t.contacts,e=t.onAdd,c={name:"",number:""},r=function(t){c=Object(s.a)(Object(s.a)({},c),{},Object(i.a)({},t.target.id,t.target.value))};return Object(L.jsxs)("form",{className:k.a.ContactForm,children:[Object(L.jsx)("label",{children:"Name"}),Object(L.jsx)("input",{type:"text",onChange:r,id:"name"}),Object(L.jsx)("label",{children:"Number"}),Object(L.jsx)("input",{type:"text",onChange:r,id:"number"}),Object(L.jsx)("button",{className:k.a.ContactButton,type:"submit",onClick:function(t){t.preventDefault(),n.map((function(t){return t.name})).includes(c.name)?alert("".concat(c.name," is already in contacts.")):e(c)},children:"AddContact"})]})})),w=e(95),B=e.n(w),N=Object(b.b)((function(t){return{contacts:y.getVisibleContacts(t),filter:y.getFilter(t),isLoadingContacts:y.getLoading(t)}}),(function(t){return{fetchContacts:function(){return t(C())},onDelete:function(n){return t(p(n))}}}))((function(t){var n=t.contacts,e=t.isLoadingContacts,c=t.onDelete,r=t.fetchContacts;Object(u.useEffect)((function(){return r()}),[]);var a=function(t){c(t.currentTarget.id)};return Object(L.jsx)("ul",{children:n.map((function(t){var n=t.id,c=t.name,r=t.number;return Object(L.jsxs)("li",{children:[c,": ",r,Object(L.jsx)("button",{id:n,className:B.a.ContactButton,type:"button",onClick:a,children:"Delete"}),e&&Object(L.jsx)("h1",{children:"Loading..."})]},n)}))})})),A=e(43),D=Object(b.b)(null,(function(t){return{updateFilter:function(n){return t(Object(h.j)(n.target.value))}}}))((function(t){var n=t.updateFilter;return Object(L.jsx)("div",{children:Object(L.jsx)("input",{type:"text",onChange:n,id:"find",placeholder:"Enter name for Search"})})})),E=function(t){Object(a.a)(e,t);var n=Object(o.a)(e);function e(){return Object(c.a)(this,e),n.apply(this,arguments)}return Object(r.a)(e,[{key:"render",value:function(){return Object(L.jsxs)(A.a,{children:[Object(L.jsx)("h2",{children:"Form Contact"}),Object(L.jsx)(_,{}),Object(L.jsx)("h2",{children:"Contacts List"}),Object(L.jsx)(D,{}),Object(L.jsx)(N,{})]})}}]),e}(u.Component)}}]);
//# sourceMappingURL=3.6e0a41a8.chunk.js.map