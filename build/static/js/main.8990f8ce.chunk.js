(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),o=t(15),u=t.n(o),a=t(6),i=t(3),s=t(0),l=function(e){var n=e.addPerson,t=e.newName,r=e.newNumber,c=e.handleNameChange,o=e.handleNumberChange;return Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:t,onChange:c})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:r,onChange:o})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.person,t=e.removePerson;return Object(s.jsxs)("div",{children:[n.name," ",n.number,Object(s.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})]})},j=function(e){var n=e.persons,t=(e.newFilter,e.removePerson);return Object(s.jsx)("ul",{children:n.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(d,{person:e,removePerson:t})},e.name)}))})},b=function(e){var n=e.newFilter,t=e.handleFilterChange;return Object(s.jsxs)("div",{children:["filter shown with: ",Object(s.jsx)("input",{value:n,onChange:t})]})},f=t(4),h=t.n(f),m="/api/persons",O=function(){return h.a.get(m).then((function(e){return e.data}))},v=function(e){return h.a.post(m,e).then((function(e){return e.data}))},p=function(e){return console.log(m+"/"+e),h.a.delete(m+"/"+e)},g=function(e,n){return h.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){var n=e.message,t=e.type;return null===n?null:(console.log(t),Object(s.jsx)("div",{className:t,children:n}))},w=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),u=Object(i.a)(o,2),d=u[0],f=u[1],h=Object(r.useState)(""),m=Object(i.a)(h,2),w=m[0],C=m[1],S=Object(r.useState)(""),y=Object(i.a)(S,2),N=(y[0],y[1],Object(r.useState)("")),P=Object(i.a)(N,2),F=P[0],T=P[1],k=Object(r.useState)(null),E=Object(i.a)(k,2),I=E[0],J=E[1],L=Object(r.useState)(null),U=Object(i.a)(L,2),A=U[0],B=U[1];Object(r.useEffect)((function(){O().then((function(e){c(e)}))}),[]);var D=t.filter((function(e){return e.name.toString().toLowerCase().includes(F.toString().toLowerCase())}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(b,{newFilter:F,handleFilterChange:function(e){console.log(e.target.value),T(e.target.value)}}),Object(s.jsx)(x,{message:I,type:A}),Object(s.jsx)(l,{addPerson:function(e){e.preventDefault();var n={name:d,number:w};if(-1===t.findIndex((function(e){return e.name===n.name})))v(n).then((function(e){c(t.concat(e))}),B("success"),J("added '".concat(n.name,"'")),setTimeout((function(){J(null)}),5e3)).catch((function(e){B("error"),J(e.response.data.error),setTimeout((function(){J(null)}),5e3)}));else if(window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))){var r=t.find((function(e){return e.name===n.name})),o=Object(a.a)(Object(a.a)({},r),{},{number:w});g(o.id,o).then((function(e){c(t.map((function(n){return n.id!==o.id?n:e})))}),B("success"),J("updated '".concat(o.name,"'")),setTimeout((function(){J(null)}),5e3)).catch((function(e){B("error"),J("User '".concat(d,"' has already been removed")),setTimeout((function(){J(null)}),5e3)}))}f(""),C("")},newName:d,handleNumberChange:function(e){console.log(e.target.value),C(e.target.value)},newNumber:w,handleNameChange:function(e){console.log(e.target.value),f(e.target.value)}}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(j,{persons:D,newFilter:F,removePerson:function(e){var n=t.filter((function(n){return n.id===e}))[0];console.log(n,typeof n),window.confirm("Are you sure you want to delete?")&&p(e).then(c(t.filter((function(n){return n.id!==e}))),B("success"),J("deleted '".concat(n.name,"'")),setTimeout((function(){J(null)}),5e3)).catch((function(e){B("error"),J("User '".concat(n.name,"' has already been removed")),setTimeout((function(){J(null)}),5e3)}))}})]})};t(39);u.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8990f8ce.chunk.js.map