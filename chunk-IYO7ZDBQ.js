import{a as K,b as Q,c as X}from"./chunk-HM6S7YBJ.js";import{a as G,b as V}from"./chunk-J4GAYDVQ.js";import{i as E,j as w,m as A,n as D,o as L,p as W}from"./chunk-LWGMSCV3.js";import{a as P,e as U,f as j}from"./chunk-WFAH5BXO.js";import{a as O,d as T,h as q,i as z,j as H,p as J}from"./chunk-4AMG6IFK.js";import{Ab as M,Ba as m,Ca as s,Cb as S,Cd as B,Hd as R,Od as N,Ra as _,Ua as p,_b as v,bb as e,cb as i,cd as F,dc as k,ha as h,kb as c,mb as y,ub as a,vb as b,wb as I,yb as u,yd as x,zb as f}from"./chunk-KJHA3E4B.js";function Y(r,n){if(r&1&&(e(0,"mat-option",8),a(1),i()),r&2){let C=n.$implicit,d=y();p("value",C),m(),I(" ",d.getCategoryLabel(C)," ")}}var Ct=(()=>{let n=class n{constructor(d,l,t){this.dialogRef=d,this.appService=l,this.injectedData=t,this.data=new q,this.isUpdating=!1,this.getCategoryLabel=H,this.categories=z(),t?.ingredient&&(this.data.id=t.ingredient.id,this.data.nom=t.ingredient.nom,this.data.category=t.ingredient.category,this.isUpdating=!0)}get title(){return this.isUpdating?"Modifier un ingr\xE9dient":"Ajouter un ingr\xE9dient"}onCancelClick(){this.dialogRef.close(!1)}onOkClick(){this.isUpdating?this.appService.updateIngredient(this.data).subscribe({next:()=>this.dialogRef.close(!0)}):this.appService.createIngredient(this.data).subscribe({next:()=>this.dialogRef.close(!0)})}};n.\u0275fac=function(l){return new(l||n)(s(E),s(J),s(w))},n.\u0275cmp=h({type:n,selectors:[["app-create-ingredient"]],standalone:!0,features:[S],decls:17,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["mat-dialog-actions",""],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","primary",3,"click"],[3,"value"]],template:function(l,t){l&1&&(e(0,"h1",0),a(1),i(),e(2,"div",1)(3,"mat-form-field")(4,"mat-label"),a(5,"Nom"),i(),e(6,"input",2),M("ngModelChange",function(o){return f(t.data.nom,o)||(t.data.nom=o),o}),i()(),e(7,"mat-form-field")(8,"mat-label"),a(9,"Cat\xE9gorie"),i(),e(10,"mat-select",3),M("ngModelChange",function(o){return f(t.data.category,o)||(t.data.category=o),o}),_(11,Y,2,2,"mat-option",4),i()()(),e(12,"div",5)(13,"button",6),c("click",function(){return t.onCancelClick()}),a(14,"Cancel"),i(),e(15,"button",7),c("click",function(){return t.onOkClick()}),a(16,"Ok"),i()()),l&2&&(m(),b(t.title),m(5),u("ngModel",t.data.nom),m(4),u("ngModel",t.data.category),m(),p("ngForOf",t.categories))},dependencies:[k,v,W,A,L,D,N,x,B,R,V,G,U,P,T,O,X,j,Q,K,F],styles:["mat-form-field[_ngcontent-%COMP%]{display:block}mat-button-toggle-group[_ngcontent-%COMP%]{margin-bottom:1em}"]});let r=n;return r})();export{Ct as a};
