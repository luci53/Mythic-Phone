"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[606,5041,5565,6121],{26121:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var n=o(37951),r=(o(11009),o(82657)),a=o(8102),i=o(66361),l=o(99135),c=o(71741),s=o.n(c),u=(0,r.A)((function(e){return{}}));const d=function(e){var t=e.document;u();return n.createElement(a.Ay,{divider:!0,button:!0,component:l.N_,to:"/apps/documents/view/".concat(t._id,"/v")},n.createElement(i.A,{primary:"".concat(t.title),secondary:n.createElement("span",null,"Last Edited"," ",n.createElement(s(),{unix:!0,fromNow:!0},t.time))}))}},25041:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var n=o(37951),r=o(11009),a=o(82657),i=o(41268),l=o(26121),c=(0,a.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},status:{color:e.palette.success.main,"&::before":{content:'" - "',color:e.palette.text.main},"&.spawned":{color:e.palette.error.main}},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"},list:{height:"95%",overflowX:"hidden",overflowY:"auto"}}}));const s=function(e){var t=e.documents,o=e.showShared,a=c(),s=(0,r.d4)((function(e){return e.data.data.player})),u=t.filter((function(e){return o?!!e.shared||e.owner!=s.ID:!e.shared&&e.owner==s.ID}));return u.length>0?n.createElement(i.A,{className:a.list},u.sort((function(e,t){return t.time-e.time})).map((function(e,t){return n.createElement(l.default,{key:e._id,document:e})}))):n.createElement("div",{className:a.emptyMsg},o?"No Documents Shared With You":"No Saved Documents")}},45565:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var n=o(37951),r=o(11009),a=o(82657),i=o(72563),l=o(9720),c=o(66178),s=o(38631),u=o(10606),d=o(218),p=o(892),m=o(4881),f=o(20879),h=o(25041);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,a,i,l=[],c=!0,s=!1;try{if(a=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;c=!1}else for(;!(c=(n=a.call(o)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=o.return&&(i=o.return(),Object(i)!==i))return}finally{if(s)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var o={}.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}var y=(0,a.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},header:{background:"#696969",fontSize:20,padding:15,lineHeight:"50px",height:78},content:{height:"83.5%",overflow:"hidden"},headerAction:{},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"},tabPanel:{top:0,height:"97.5%"},list:{height:"100%",overflow:"auto"}}})),b=(0,i.A)((function(e){return{root:{borderBottom:"1px solid #696969"},indicator:{backgroundColor:"#696969"}}}))((function(e){return n.createElement(c.A,e)})),v=(0,i.A)((function(e){return{root:{width:"50%","&:hover":{color:"#696969",transition:"color ease-in 0.15s"},"&$selected":{color:"#696969",transition:"color ease-in 0.15s"},"&:focus":{color:"#696969",transition:"color ease-in 0.15s"}},selected:{}}}))((function(e){return n.createElement(s.A,e)}));const x=function(e){var t=y(),o=((0,r.wA)(),(0,l.W6)()),a=(0,r.d4)((function(e){return e.data.data.myDocuments})),i=A((0,n.useState)(0),2),c=i[0],s=i[1];return n.createElement("div",{className:t.wrapper},n.createElement(u.A,{position:"static",className:t.header},n.createElement(d.Ay,{container:!0},n.createElement(d.Ay,{item:!0,xs:7,style:{lineHeight:"50px"}},"My Documents"),n.createElement(d.Ay,{item:!0,xs:5,style:{textAlign:"right"}},n.createElement(p.A,{title:"Create"},n.createElement("span",null,n.createElement(m.A,{className:t.headerAction,onClick:function(){o.push("/apps/documents/view/doc/new")}},n.createElement(f.g,{className:"fa",icon:["fas","plus"]}))))))),n.createElement("div",{className:t.content},n.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:0!==c,id:"latest"},0===c&&n.createElement(h.default,{documents:a})),n.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:1!==c,id:"categories"},1===c&&n.createElement(h.default,{documents:a,showShared:!0}))),n.createElement("div",{className:t.tabs},n.createElement(b,{value:c,onChange:function(e,t){s(t)},scrollButtons:!1,centered:!0},n.createElement(v,{label:"My Documents"}),n.createElement(v,{label:"Shared With Me"}))))}},10606:(e,t,o)=>{o.d(t,{A:()=>g});var n=o(89353),r=o(50566),a=o(37951),i=o(93305),l=o(10063),c=o(45186),s=o(85219),u=o(94202),d=o(10947),p=o(30525);function m(e){return(0,p.A)("MuiAppBar",e)}(0,o(85793).A)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var f=o(29127);const h=["className","color","enableColorOnDark","position"],A=(0,c.Ay)(d.A,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,u.A)(o.position)}`],t[`color${(0,u.A)(o.color)}`]]}})((({theme:e,ownerState:t})=>{const o="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,r.A)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},"default"===t.color&&{backgroundColor:o,color:e.palette.getContrastText(o)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,r.A)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"}))})),g=a.forwardRef((function(e,t){const o=(0,s.A)({props:e,name:"MuiAppBar"}),{className:a,color:c="primary",enableColorOnDark:d=!1,position:p="fixed"}=o,g=(0,n.A)(o,h),y=(0,r.A)({},o,{color:c,position:p,enableColorOnDark:d}),b=(e=>{const{color:t,position:o,classes:n}=e,r={root:["root",`color${(0,u.A)(t)}`,`position${(0,u.A)(o)}`]};return(0,l.A)(r,m,n)})(y);return(0,f.jsx)(A,(0,r.A)({square:!0,component:"header",ownerState:y,elevation:4,className:(0,i.A)(b.root,a,"fixed"===p&&"mui-fixed"),ref:t},g))}))}}]);