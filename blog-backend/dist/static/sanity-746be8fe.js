import{d as i,E as l,r as s,_ as m,a as r,C as p,b as u,c,e as y}from"./desk-eb7b3548-e6af1ec5.js";const d=i(t=>{const{name:e,title:o,icon:n,...a}=t||{};return{name:"@sanity/vision",tools:[{name:e||"vision",title:o||"Vision",icon:n||l,component:s.lazy(()=>m(()=>import("./SanityVision-8a519187-32f4192a.js"),["static/SanityVision-8a519187-32f4192a.js","static/desk-eb7b3548-e6af1ec5.js","static/index-b48a7945.js"])),options:a,router:r.create("/*")}]}}),g={name:"post",title:"Post",type:"document",fields:[{name:"title",title:"Title",type:"string"},{name:"slug",title:"Slug",type:"slug",options:{source:"title",maxLength:96}},{name:"author",title:"Author",type:"reference",to:{type:"author"}},{name:"mainImage",title:"Main image",type:"image",options:{hotspot:!0}},{name:"publishedAt",title:"Published at",type:"datetime"},{name:"body",title:"Body",type:"blockContent"}],preview:{select:{title:"title",author:"author.name",media:"mainImage"},prepare(t){const{author:e}=t;return Object.assign({},t,{subtitle:e&&`by ${e}`})}}},h={title:"Block Content",name:"blockContent",type:"array",of:[{title:"Block",type:"block",styles:[{title:"Normal",value:"normal"},{title:"H1",value:"h1"},{title:"H2",value:"h2"},{title:"H3",value:"h3"},{title:"H4",value:"h4"},{title:"Quote",value:"blockquote"}],lists:[{title:"Bullet",value:"bullet"}],marks:{decorators:[{title:"Strong",value:"strong"},{title:"Emphasis",value:"em"}],annotations:[{title:"URL",name:"link",type:"object",fields:[{title:"URL",name:"href",type:"url"}]}]}},{type:"image",options:{hotspot:!0}}]},b={name:"author",title:"Author",type:"document",fields:[{name:"name",title:"Name",type:"string"},{name:"slug",title:"Slug",type:"slug",options:{source:"name",maxLength:96}},{name:"image",title:"Image",type:"image",options:{hotspot:!0}}],preview:{select:{title:"name",media:"image"}}},v={name:"comment",type:"document",title:"Comment",icon:p,fields:[{name:"name",type:"string"},{name:"email",type:"string"},{name:"comment",type:"text"},{name:"post",type:"reference",to:[{type:"post"}]}],preview:{select:{name:"name",comment:"comment",post:"post.title"},prepare({name:t,comment:e,post:o}){return{title:`${t} on ${o}`,subtitle:e}}}},f=[g,h,b,v],k=u({name:"default",title:"blog-backend",projectId:"ek734hes",dataset:"production",plugins:[c(),d()],schema:{types:f}});y(document.getElementById("sanity"),k,{reactStrictMode:!1,basePath:"/"});
