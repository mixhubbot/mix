import{s as l}from"./service-C1WMdIg4.js";import{_ as u,G as h,r as d,o as s,c as f,w as c,a as i,t as n,b as o,F as _,d as p,e as r,n as k}from"./index-DRafgg6n.js";const v={name:"Nextcloud",components:{Generic:h},mixins:[l],props:{item:Object},data:()=>({fetchOk:null,versionstring:null,maintenance:null}),computed:{status:function(){return this.fetchOk?this.maintenance?"maintenance":"online":"offline"}},created(){this.fetchStatus()},methods:{fetchStatus:async function(){this.fetch("/status.php").then(t=>{this.fetchOk=!0,this.versionstring=t.versionstring,this.maintenance=t.maintenance}).catch(t=>{this.fetchOk=!1,console.log(t)})}}},g={class:"title is-4"},x={class:"subtitle is-6"};function N(t,O,a,y,B,e){const m=d("Generic");return s(),f(m,{item:a.item},{content:c(()=>[i("p",g,n(a.item.name),1),i("p",x,[t.versionstring?(s(),o(_,{key:0},[p(" Version "+n(t.versionstring),1)],64)):r("",!0)])]),indicator:c(()=>[e.status?(s(),o("div",{key:0,class:k(["status",e.status])},n(e.status),3)):r("",!0)]),_:1},8,["item"])}const V=u(v,[["render",N],["__scopeId","data-v-c902ac94"]]);export{V as default};