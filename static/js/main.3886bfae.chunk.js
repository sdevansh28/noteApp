(this.webpackJsonpnotelist=this.webpackJsonpnotelist||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),c=n.n(l),u=n(8),o=n(4);var i=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"My Notes"))};var m=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",e))};var E=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(t){return e.deleteNote(e.id)}},"DELETE"))},f=n(3),d=n(5);var s=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(o.a)(t,2),l=n[0],c=n[1],u=function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(f.a)({},n,a))}))};return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{name:"title",onChange:u,value:l.title,placeholder:"Title"}),r.a.createElement("textarea",{name:"content",onChange:u,value:l.content,placeholder:"Take a note...",rows:"3"}),r.a.createElement("button",{onClick:function(t){e.addNote(l),c((function(e){return{title:"",content:""}})),t.preventDefault()}},"Add")))};var v=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1],c=function(e){return l((function(t){return t.filter((function(t,n){return n!==e}))}))};return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(s,{addNote:function(e){return l((function(t){return[].concat(Object(u.a)(t),[e])}))}}),r.a.createElement("div",{className:"notes"},n.map((function(e,t){return r.a.createElement(E,{key:t,id:t,deleteNote:c,title:e.title,content:e.content})}))),r.a.createElement(m,null))};c.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.3886bfae.chunk.js.map