import{_ as j,o as i,c as d,a as n,d as k,u as x,r as B,f as D,e as f,t as w,h as M,F as b,i as S,g as N,j as W,w as $,T as E,E as A,k as z,l as F,b as H,m as I,n as R}from"./index-7f624a71.js";import{g as a}from"./index-9e2476f3.js";const Y={},L={fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},O=n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"},null,-1),T=[O];function P(t,s){return i(),d("svg",L,T)}const q=j(Y,[["render",P]]);function G(){const t=["#f07c82","#ee3f4d","#de1c31","#ed556a","#f03752","#e77c8e","#ec9bad","#eeb8c3","#c08eaf","#806d9e","#525288","#61649f","#2b73af","#2376b7","#5698c3","#1772b4","#1781b5","#12aa9c","#45b787","#ffd111","#feba07","#fca106","#f26b1f","#f86b1d"];return t[~~(Math.random()*t.length)]}const J=["view-box"],K=["d"],Q=k({__name:"RandomSvg",props:{viewBoxW:{type:Number,default:200},viewBoxH:{type:Number,default:200}},setup(t){const{viewBoxW:s,viewBoxH:p}=t,r=((u=s,l=p)=>{let o=[],h=~~(Math.random()*3)+2;for(let v=0;v<h;v++){const y=Math.floor(Math.random()*u),e=Math.floor(Math.random()*l),m=Math.floor(Math.random()*u),_=Math.floor(Math.random()*l),c=Math.floor(Math.random()*180),C=Math.floor(Math.random()*2),V=Math.floor(Math.random()*2);o.push(`M ${y} ${e} a ${m} ${_} ${c} ${C} ${V} ${y} ${e}`)}return o.join(" ")})();return(u,l)=>(i(),d("svg",{"view-box":`0 0 ${t.viewBoxW} ${t.viewBoxH}`,stroke:"current","stroke-width":"currentWidth",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:"currentColor","stroke-width":"currentWidth",d:x(r)},null,8,K)],8,J))}}),U={class:"p-4 text-2xl font-bold"},X={class:"flex flex-col p-2 text-xs text-right opacity-50"},Z={class:"w-full max-h-[100%-2rem] pr-4 my-4 text-sm basis-7/12 scrollbar"},ee=["onClick"],te={class:"inline-block mr-1"},oe={key:0,class:"absolute inset-0 flex h-full overflow-hidden bg-gray-100 dark:bg-gray-700"},ne={class:"inline-block w-2 text-xs tracking-tighter"},re=k({__name:"DirCard",props:{dir:{type:Object,required:!0}},setup(t){const s=G(),p={backgroundColor:s+"00"},g={borderColor:"#ffffff55",borderWidth:"3px"},r={color:s+"aa"},u={color:s+""},l={backgroundColor:s+"aa"},o=B(),h=e=>{a.set(e.firstElementChild,{x:"100%",opacity:0}),a.set(e.lastElementChild,{x:"100%"}),a.set(e,{opacity:0})},v=e=>{a.to(e.firstElementChild,{x:"0%",opacity:1,duration:.3,delay:.2,ease:"power2.out"}),a.to(e.lastElementChild,{x:"0%",duration:.3,ease:"power2.out"}),a.to(e,{opacity:1,duration:.4,ease:"power2.out"})},y=(e,m)=>{a.to(e.firstElementChild,{x:"-100%",duration:.1,ease:"power2.in"}),a.to(e.lastElementChild,{x:"-100%",duration:.3,delay:.1,ease:"power2.in"}),a.to(e,{duration:.4,opacity:0,ease:"power2.in",onComplete:m})};return(e,m)=>{const _=D("DirCard",!0);return i(),d("div",{class:"flex overflow-hidden rounded-lg shadow-lg glass",style:g},[n("div",{class:"relative flex flex-col justify-between basis-5/12",style:p},[f(Q,{class:"absolute -z-[1] top-0 left-0 w-full h-full stroke-[.5em]",style:r}),n("h2",U,w(t.dir.name),1),n("div",X,[n("p",null,w(t.dir.children.length)+" 份文件",1),n("p",null,"更新于 "+w(x(M)(t.dir.mtime).format("YY/MM/DD")),1),n("p",null,"创建于 "+w(x(M)(t.dir.birthtime).format("YY/MM/DD")),1)])]),n("ul",Z,[(i(!0),d(b,null,S(t.dir.children,c=>(i(),d("li",{key:c.name,class:"p-2 truncate rounded-md cursor-pointer hover:bg-opacity-40 hover:bg-white",onClick:C=>c.type==="dir"?o.value=c:e.$router.push(c.url)},[n("div",te,[c.children?(i(),N(x(q),{key:0,class:"inline-block w-4 align-text-top stroke-2",style:u})):(i(),d("span",{key:1,class:"inline-block w-2 h-[2px] mx-1 my-1 rounded-full",style:l}))]),W(" "+w(c.name),1)],8,ee))),128))]),f(E,{onBeforeEnter:h,onEnter:v,onLeave:y},{default:$(()=>[o.value?(i(),d("div",oe,[n("div",{class:"w-6 h-full pt-2 text-red-300 hover:text-red-400 cursor-pointer [writing-mode:horizontal-rl] text-center",onClick:m[0]||(m[0]=c=>o.value=null)},[f(x(A),{class:"w-full rotate-180"}),n("span",ne,w(t.dir.name),1)]),f(E,null,{default:$(()=>[f(_,{dir:o.value,class:"flex-grow h-full"},null,8,["dir"])]),_:1})])):z("",!0)]),_:1})])}}}),se=I('<div class="grid none"><span class="row-span-1"></span><span class="row-span-2"></span><span class="row-span-3"></span><span class="row-span-4"></span><span class="row-span-5"></span></div>',1),ie=k({__name:"DocsCatalog",setup(t){const s=[],p={name:"其他",children:[],type:"dir",mtime:Date.now(),birthtime:Date.now()};F.children.forEach(r=>{typeof r.children<"u"?s.push(r):p.children.push(r)}),s.push(p);const g=B(null);return H(()=>{var l;const r=(l=g.value)==null?void 0:l.children;if(!r)return;const u=r.length;for(let o=0;o<u;o++){const h=r[o];a.set(h,{opacity:0,y:20}),a.to(h,{opacity:1,y:0,duration:.4,delay:o*.1,ease:"power2.out"})}}),(r,u)=>{const l=D("RouterView");return i(),d(b,null,[se,n("div",{tag:"div",class:"grid grid-flow-row-dense grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto",ref_key:"Container",ref:g},[(i(),d(b,null,S(s,(o,h)=>f(re,{dir:o,key:h,class:R(`row-span-${Math.ceil(o.children.length/5)}`)},null,8,["dir","class"])),64))],512),f(l)],64)}}});export{ie as default};