import{d,x as m,D as f,S as b,H as g,c as x,L as v,w as n,i as s,a9 as e,bu as y,n as o,f as _,t as i,bv as h,bw as S,I as w,E as C}from"./C5MVNvNR.js";import{r as k}from"./NCR-YPZL.js";import"./Dnd51l0P.js";const V=d({__name:"Collapsible",props:{name:{type:String,default:"properties"},openText:{type:String,default:"Show"},closeText:{type:String,default:"Hide"}},setup(a){const c=m(),l=f(()=>({button:{base:"flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{name:c.ui.icons.chevron,base:"w-4 h-4 transform transition-transform duration-200",active:"",inactive:"-rotate-90"}},panel:"mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800 [&>div]:!mt-0"})),{ui:t}=b("content.collapsible",void 0,l,void 0,!0);return g(()=>w()),(u,I)=>{const p=C;return x(),v(e(S),{as:"div"},{default:n(({open:r})=>[s(e(y),{class:o(e(t).button.base)},{default:n(()=>[s(p,{name:e(t).button.icon.name,class:o([e(t).button.icon.base,r?e(t).button.icon.active:e(t).button.icon.inactive])},null,8,["name","class"]),_("span",null,i(r?a.closeText:a.openText)+" "+i(a.name),1)]),_:2},1032,["class"]),s(e(h),{class:o(e(t).panel)},{default:n(()=>[k(u.$slots,"default",{unwrap:"p"})]),_:3},8,["class"])]),_:3})}}});export{V as default};
