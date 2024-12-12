"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[9877],{59877:(t,e,a)=>{a.r(e),a.d(e,{default:()=>$});var o=a(37951),r=a(50566),n=a(89353),i=a(93305),s=a(10063),l=a(45186),c=a(85219),m=a(10947),p=a(30525),d=a(85793);function g(t){return(0,p.A)("MuiCard",t)}(0,d.A)("MuiCard",["root"]);var u=a(29127);const h=["className","raised"],A=(0,l.Ay)(m.A,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})((()=>({overflow:"hidden"}))),v=o.forwardRef((function(t,e){const a=(0,c.A)({props:t,name:"MuiCard"}),{className:o,raised:l=!1}=a,m=(0,n.A)(a,h),p=(0,r.A)({},a,{raised:l}),d=(t=>{const{classes:e}=t;return(0,s.A)({root:["root"]},g,e)})(p);return(0,u.jsx)(A,(0,r.A)({className:(0,i.A)(d.root,o),elevation:l?8:void 0,ref:e,ownerState:p},m))}));function f(t){return(0,p.A)("MuiCardMedia",t)}(0,d.A)("MuiCardMedia",["root","media","img"]);const y=["children","className","component","image","src","style"],C=(0,l.Ay)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t,{isMediaComponent:o,isImageComponent:r}=a;return[e.root,o&&e.media,r&&e.img]}})((({ownerState:t})=>(0,r.A)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"}))),M=["video","audio","picture","iframe","img"],w=["picture","img"],b=o.forwardRef((function(t,e){const a=(0,c.A)({props:t,name:"MuiCardMedia"}),{children:o,className:l,component:m="div",image:p,src:d,style:g}=a,h=(0,n.A)(a,y),A=-1!==M.indexOf(m),v=!A&&p?(0,r.A)({backgroundImage:`url("${p}")`},g):g,b=(0,r.A)({},a,{component:m,isMediaComponent:A,isImageComponent:-1!==w.indexOf(m)}),N=(t=>{const{classes:e,isMediaComponent:a,isImageComponent:o}=t,r={root:["root",a&&"media",o&&"img"]};return(0,s.A)(r,f,e)})(b);return(0,u.jsx)(C,(0,r.A)({className:(0,i.A)(N.root,l),as:m,ref:e,style:v,ownerState:b,src:A?p||d:void 0},h,{children:o}))}));function N(t){return(0,p.A)("MuiCardContent",t)}(0,d.A)("MuiCardContent",["root"]);const B=["className","component"],x=(0,l.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),R=o.forwardRef((function(t,e){const a=(0,c.A)({props:t,name:"MuiCardContent"}),{className:o,component:l="div"}=a,m=(0,n.A)(a,B),p=(0,r.A)({},a,{component:l}),d=(t=>{const{classes:e}=t;return(0,s.A)({root:["root"]},N,e)})(p);return(0,u.jsx)(x,(0,r.A)({as:l,className:(0,i.A)(d.root,o),ownerState:p,ref:e},m))}));var k=a(34412),S=a(66279),E=a(4881),W=a(82657),I=a(20879),j=a(83358),T=a(76530),O=(0,W.A)((function(t){return{card:{maxWidth:345,margin:t.spacing(2)},media:{height:140},button:{marginTop:t.spacing(1)},installBtn:{backgroundColor:j.A[500],color:"white"},uninstallBtn:{backgroundColor:T.A[500],color:"white"},progress:{margin:t.spacing(2)}}}));const $=function(t){var e=t.title,a=t.image,r=t.onInstall,n=t.onUninstall,i=t.installing,s=t.uninstalling,l=O();return o.createElement(v,{className:l.card},o.createElement(b,{className:l.media,image:a,title:e}),o.createElement(R,null,o.createElement(k.A,{variant:"h5",component:"h2"},e),i||s?o.createElement(S.A,{className:l.progress}):o.createElement("div",null,o.createElement(E.A,{className:l.installBtn,onClick:r},o.createElement(I.g,{icon:["fas","download"]})),o.createElement(E.A,{className:l.uninstallBtn,onClick:n},o.createElement(I.g,{icon:["fas","x"]})))))}},34412:(t,e,a)=>{a.d(e,{A:()=>y});var o=a(89353),r=a(50566),n=a(37951),i=a(93305),s=a(39272),l=a(10063),c=a(45186),m=a(85219),p=a(94202),d=a(30525);function g(t){return(0,d.A)("MuiTypography",t)}(0,a(85793).A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var u=a(29127);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],A=(0,c.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,a.variant&&e[a.variant],"inherit"!==a.align&&e[`align${(0,p.A)(a.align)}`],a.noWrap&&e.noWrap,a.gutterBottom&&e.gutterBottom,a.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,r.A)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=n.forwardRef((function(t,e){const a=(0,m.A)({props:t,name:"MuiTypography"}),n=(t=>f[t]||t)(a.color),c=(0,s.A)((0,r.A)({},a,{color:n})),{align:d="inherit",className:y,component:C,gutterBottom:M=!1,noWrap:w=!1,paragraph:b=!1,variant:N="body1",variantMapping:B=v}=c,x=(0,o.A)(c,h),R=(0,r.A)({},c,{align:d,color:n,className:y,component:C,gutterBottom:M,noWrap:w,paragraph:b,variant:N,variantMapping:B}),k=C||(b?"p":B[N]||v[N])||"span",S=(t=>{const{align:e,gutterBottom:a,noWrap:o,paragraph:r,variant:n,classes:i}=t,s={root:["root",n,"inherit"!==t.align&&`align${(0,p.A)(e)}`,a&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return(0,l.A)(s,g,i)})(R);return(0,u.jsx)(A,(0,r.A)({as:k,ref:e,ownerState:R,className:(0,i.A)(S.root,y)},x))}))}}]);