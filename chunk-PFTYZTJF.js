import{c as b}from"./chunk-VTI6R5NX.js";import"./chunk-I66XTNVJ.js";import"./chunk-GB34YSBD.js";import"./chunk-NPRYI5RF.js";import"./chunk-WFAH5BXO.js";import{p as I}from"./chunk-4AMG6IFK.js";import{b as v,d as g}from"./chunk-LZDYDGZP.js";import{Ba as s,Ca as r,Cb as f,Ua as d,bb as a,cb as c,db as l,dc as h,ha as p,ub as m,vb as u}from"./chunk-KJHA3E4B.js";var j=(()=>{let t=class t{constructor(i,e,n){this.service=i,this.route=e,this.router=n,this.id=-1,this.tag=null}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.service.getTagDetail(this.id).subscribe({next:e=>{this.tag=e}})})}};t.\u0275fac=function(e){return new(e||t)(r(I),r(v),r(g))},t.\u0275cmp=p({type:t,selectors:[["app-tag-detail"]],standalone:!0,features:[f],decls:5,vars:2,consts:[[3,"recettes"]],template:function(e,n){e&1&&(a(0,"h1"),m(1),c(),a(2,"h2"),m(3,"Recettes"),c(),l(4,"app-recette-element",0)),e&2&&(s(),u(n.tag.nom),s(3),d("recettes",n.tag.recettes))},dependencies:[h,b]});let o=t;return o})();export{j as TagDetailComponent};
