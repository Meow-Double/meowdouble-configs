import{j as l}from"./iframe-CkfrYEXM.js";import"./preload-helper-PPVm8Dsz.js";function i(e){var a,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var _=e.length;for(a=0;a<_;a++)e[a]&&(t=i(e[a]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function u(){for(var e,a,t=0,r="",_=arguments.length;t<_;t++)(e=arguments[t])&&(a=i(e))&&(r&&(r+=" "),r+=a);return r}const g="_typography_180qg_1",y="_title_180qg_7",b="_text_180qg_11",h="_accent_180qg_15",v="_regular_14_180qg_19",q="_regular_16_180qg_24",T="_regular_18_180qg_29",x="_regular_20_180qg_34",f="_medium_14_180qg_39",N="_medium_16_180qg_44",j="_medium_18_180qg_49",S="_medium_20_180qg_54",w="_semibold_16_180qg_59",A="_semibold_18_180qg_64",E="_semibold_20_180qg_69",I="_semibold_22_180qg_74",O="_bold_16_180qg_79",R="_bold_18_180qg_84",P="_bold_20_180qg_89",W="_bold_22_180qg_94",$="_bold_24_180qg_99",s={typography:g,title:y,text:b,accent:h,regular_14:v,regular_16:q,regular_18:T,regular_20:x,medium_14:f,medium_16:N,medium_18:j,medium_20:S,semibold_16:w,semibold_18:A,semibold_20:E,semibold_22:I,bold_16:O,bold_18:R,bold_20:P,bold_22:W,bold_24:$},C={CONTAINER:"typography-container"},n=e=>{const{variant:a,className:t,children:r,tag:_="div",type:d="text",...p}=e,c=_;return l.jsx(c,{"data-testid":C.CONTAINER,className:u(s.typography,[s[a],s[d],t]),...p,children:r})};n.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},tag:{required:!0,tsType:{name:"Tag"},description:""},variant:{required:!0,tsType:{name:"union",raw:`| "regular_14"
| "regular_16"
| "regular_18"
| "regular_20"
| "medium_14"
| "medium_16"
| "medium_18"
| "medium_20"
| "semibold_16"
| "semibold_18"
| "semibold_20"
| "semibold_22"
| "bold_16"
| "bold_18"
| "bold_20"
| "bold_22"
| "bold_24"`,elements:[{name:"literal",value:'"regular_14"'},{name:"literal",value:'"regular_16"'},{name:"literal",value:'"regular_18"'},{name:"literal",value:'"regular_20"'},{name:"literal",value:'"medium_14"'},{name:"literal",value:'"medium_16"'},{name:"literal",value:'"medium_18"'},{name:"literal",value:'"medium_20"'},{name:"literal",value:'"semibold_16"'},{name:"literal",value:'"semibold_18"'},{name:"literal",value:'"semibold_20"'},{name:"literal",value:'"semibold_22"'},{name:"literal",value:'"bold_16"'},{name:"literal",value:'"bold_18"'},{name:"literal",value:'"bold_20"'},{name:"literal",value:'"bold_22"'},{name:"literal",value:'"bold_24"'}]},description:""},type:{required:!1,tsType:{name:"union",raw:'"title" | "text" | "accent"',elements:[{name:"literal",value:'"title"'},{name:"literal",value:'"text"'},{name:"literal",value:'"accent"'}]},description:""}}};const m=["regular_14","regular_16","regular_18","regular_20","medium_14","medium_16","medium_18","medium_20","semibold_16","semibold_18","semibold_20","semibold_22","bold_16","bold_18","bold_20","bold_22","bold_24"],z={title:"UI/Typography",component:n,args:{type:"title"},argTypes:{variant:{control:{type:"select"},options:m},tag:{control:{type:"select"},options:["div","p","span","h1","h2","h3","h4","h5","h6"]}}},D="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",V=e=>{const a=e.match(/(\w+)_(\d+)$/);return a?l.jsxs("div",{className:"typography_block",style:{fontSize:`${a[2]}px`,fontWeight:`${a[1]}`},children:[l.jsxs("div",{className:"typography_info",children:[l.jsxs("p",{children:[a[2],"px"]}),l.jsxs("span",{children:["(",a[1],")"]})]}),l.jsx(n,{variant:e,tag:"p",children:D})]}):null},o={render:()=>l.jsxs("div",{className:"typography_inner",children:[l.jsx("h1",{className:"title",children:"Typography variants"}),l.jsx("div",{className:"typography_content",children:m.map(V)})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className='typography_inner'>
      <h1 className='title'>Typography variants</h1>
      <div className='typography_content'>{typographyVariants.map(TypographyWrapper)}</div>
    </div>
} satisfies StoryObj<TypographyProps<'div'>>`,...o.parameters?.docs?.source}}};const G=["TypographyShowcase"];export{o as TypographyShowcase,G as __namedExportsOrder,z as default};
