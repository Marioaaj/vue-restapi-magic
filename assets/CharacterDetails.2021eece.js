import{u as l,o as i,a as d,b as r,c as o,d as t,e as a,t as c,f as m,g as u}from"./index.5ae7d522.js";const _={class:"min-h-screen bg-gradient-to-r from-red-500 to-indigo-500 py-8 text-white"},h={key:0,class:"flex flex-col items-center justify-center gap-6"},p=["src","alt"],f={class:"text-6xl font-bold text-emerald-300"},b={__name:"CharacterDetails",setup(g){const s=l(),{fetchCharacter:n,currentCharacter:e}=u();return i(async()=>{await n(s.params.id),console.log(s.params.id)}),d(()=>{e.value=null}),(x,y)=>(r(),o("main",_,[t(e)?(r(),o("div",h,[a("img",{src:t(e).card.imageUrl,alt:t(e).card.name},null,8,p),a("h1",f," Hi, I'm "+c(t(e).card.name),1),a("pre",null,c(t(e).card.originalText),1)])):m("",!0)]))}};export{b as default};
