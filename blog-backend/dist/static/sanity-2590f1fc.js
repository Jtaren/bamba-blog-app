import{d as n,E as l,r as s,_ as r,a as m,b as u,c as p,e as c}from"./desk-eb7b3548-5911e3eb.js";const d=n(t=>{const{name:e,title:o,icon:a,...i}=t||{};return{name:"@sanity/vision",tools:[{name:e||"vision",title:o||"Vision",icon:a||l,component:s.lazy(()=>r(()=>import("./SanityVision-8a519187-d18fef09.js"),["static/SanityVision-8a519187-d18fef09.js","static/desk-eb7b3548-5911e3eb.js","static/index-3caa9520.js"])),options:i,router:m.create("/*")}]}}),g={name:"post",title:"Post",type:"document",fields:[{name:"title",title:"Title",type:"string"},{name:"slug",title:"Slug",type:"slug",options:{source:"title",maxLength:96}},{name:"author",title:"Author",type:"reference",to:{type:"author"}},{name:"mainImage",title:"Main image",type:"image",options:{hotspot:!0}},{name:"publishedAt",title:"Published at",type:"datetime"},{name:"body",title:"Body",type:"blockContent"}],preview:{select:{title:"title",author:"author.name",media:"mainImage"},prepare(t){const{author:e}=t;return Object.assign({},t,{subtitle:e&&`by ${e}`})}}},y={title:"Block Content",name:"blockContent",type:"array",of:[{title:"Block",type:"block",styles:[{title:"Normal",value:"normal"},{title:"H1",value:"h1"},{title:"H2",value:"h2"},{title:"H3",value:"h3"},{title:"H4",value:"h4"},{title:"Quote",value:"blockquote"}],lists:[{title:"Bullet",value:"bullet"}],marks:{decorators:[{title:"Strong",value:"strong"},{title:"Emphasis",value:"em"}],annotations:[{title:"URL",name:"link",type:"object",fields:[{title:"URL",name:"href",type:"url"}]}]}},{type:"image",options:{hotspot:!0}}]},h={name:"author",title:"Author",type:"document",fields:[{name:"name",title:"Name",type:"string"},{name:"slug",title:"Slug",type:"slug",options:{source:"name",maxLength:96}},{name:"image",title:"Image",type:"image",options:{hotspot:!0}}],preview:{select:{title:"name",media:"image"}}},b=[g,y,h],v=u({name:"default",title:"blog-backend",projectId:"ek734hes",dataset:"production",plugins:[p(),d()],schema:{types:b}});c(document.getElementById("sanity"),v,{reactStrictMode:!1,basePath:"/"});
