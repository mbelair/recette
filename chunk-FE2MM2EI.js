import{a as y}from"./chunk-W72AFNIX.js";import"./chunk-D3QWAVVM.js";import"./chunk-5LWBKBCP.js";import"./chunk-SJYLQD7N.js";import"./chunk-RGNDWIHZ.js";import{e as I}from"./chunk-SAZDILK7.js";import{$a as u,Gb as v,Ha as a,Ia as c,Ib as g,Ja as l,V as m,_a as d,hb as f,ka as s,la as r,ya as p,zb as h}from"./chunk-H4BCIEQT.js";var j=(()=>{let t=class t{constructor(i,e,n){this.service=i,this.route=e,this.router=n,this.id=-1,this.ingredient=null}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.service.getIngredientDetail(this.id).subscribe({next:e=>{this.ingredient=e}})})}};t.\u0275fac=function(e){return new(e||t)(r(I),r(v),r(g))},t.\u0275cmp=m({type:t,selectors:[["app-ingredient-detail"]],standalone:!0,features:[f],decls:5,vars:2,consts:[[1,"mat-display-small"],[3,"recettes"]],template:function(e,n){e&1&&(a(0,"h1"),d(1),c(),a(2,"h2",0),d(3,"Recettes"),c(),l(4,"app-recette-element",1)),e&2&&(s(),u(n.ingredient.nom),s(3),p("recettes",n.ingredient.recettes))},dependencies:[h,y]});let o=t;return o})();export{j as IngredientDetailComponent};
