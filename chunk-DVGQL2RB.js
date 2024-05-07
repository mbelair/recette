import{a as A,b as ct,c as st,d as dt,e as pt,f as ut,g as ft,h as gt,i as _t,j as Ct,k as Mt,l as ht,m as Tt,n as St,o as vt}from"./chunk-XLQVCL42.js";import{b as rt,c as lt,d as mt}from"./chunk-HXUOJUO6.js";import{i as G,j as J,k as K,m as U,n as X,o as Y,p as k,q as L,r as F}from"./chunk-4ULYVBJU.js";import{m as nt,n as at}from"./chunk-GUBK6LRS.js";import{a as E,e as I,f as R}from"./chunk-EDHGTQOS.js";import"./chunk-RGNDWIHZ.js";import{a as Q,c as z,d as x,n as ot,p as V}from"./chunk-NNG3ON6H.js";import{$a as W,Ha as r,Ia as a,Ib as q,Ja as b,Ka as C,La as M,Mc as Z,Na as h,Qa as p,Qc as tt,Sa as T,V as v,Vc as et,Wa as P,Xa as O,Ya as H,Z as f,_ as g,_a as m,ab as w,ad as it,db as B,eb as N,fb as j,hb as y,ka as s,la as d,va as u,wb as $,ya as _,zb as D}from"./chunk-KXVFDBQH.js";var bt=(()=>{let i=class i{constructor(n,e,o){this.dialogRef=n,this.appService=e,this.injectedData=o,this.data=new ot,o?.tag&&(this.data.id=o.tag.id,this.data.nom=o.tag.nom)}get title(){return"Modifier une \xE9tiquette"}onCancelClick(){this.dialogRef.close(!1)}onOkClick(){this.appService.updateTag(this.data).subscribe({next:()=>this.dialogRef.close(!0)})}};i.\u0275fac=function(e){return new(e||i)(d(G),d(V),d(J))},i.\u0275cmp=v({type:i,selectors:[["app-edit-tag"]],standalone:!0,features:[y],decls:12,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","",3,"ngModelChange","ngModel"],["mat-dialog-actions",""],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","primary",3,"click"]],template:function(e,o){e&1&&(r(0,"h1",0),m(1),a(),r(2,"div",1)(3,"mat-form-field")(4,"mat-label"),m(5,"Nom"),a(),r(6,"input",2),j("ngModelChange",function(S){return N(o.data.nom,S)||(o.data.nom=S),S}),a()()(),r(7,"div",3)(8,"button",4),p("click",function(){return o.onCancelClick()}),m(9,"Cancel"),a(),r(10,"button",5),p("click",function(){return o.onOkClick()}),m(11,"Ok"),a()()),e&2&&(s(),W(o.title),s(5),B("ngModel",o.data.nom))},dependencies:[D,k,U,Y,X,it,Z,tt,et,F,L,I,E,x,Q,lt,R,rt],styles:["mat-form-field[_ngcontent-%COMP%]{display:block}mat-button-toggle-group[_ngcontent-%COMP%]{margin-bottom:1em}"]});let t=i;return t})();function Rt(t,i){t&1&&(r(0,"th",11),m(1,"Id"),a())}function Lt(t,i){if(t&1&&(r(0,"td",12),m(1),a()),t&2){let c=i.$implicit;s(),w(" ",c.id," ")}}function Ft(t,i){t&1&&(r(0,"th",11),m(1,"Nom"),a())}function Vt(t,i){if(t&1&&(r(0,"td",12),m(1),a()),t&2){let c=i.$implicit;s(),w(" ",c.nom," ")}}function At(t,i){t&1&&(r(0,"th",11),m(1,"Nombre de recettes"),a())}function Pt(t,i){if(t&1&&(r(0,"td",12),m(1),a()),t&2){let c=i.$implicit;s(),w(" ",c.recetteCount," ")}}function Ot(t,i){t&1&&(r(0,"th",11),m(1,"Actions"),a())}function Ht(t,i){if(t&1){let c=h();r(0,"button",13),p("click",function(e){f(c);let o=T().$implicit,l=T();return g(l.openDeleteTagDialog(o,e))}),b(1,"mat-icon",16),a()}}function Wt(t,i){if(t&1){let c=h();r(0,"td",12)(1,"button",13),p("click",function(e){let o=f(c).$implicit,l=T();return g(l.openEditTagDialog(o,e))}),b(2,"mat-icon",14),a(),u(3,Ht,2,0,"button",15),a()}if(t&2){let c=i.$implicit;s(3),_("ngIf",c.recetteCount===0)}}function Bt(t,i){t&1&&b(0,"tr",17)}function Nt(t,i){if(t&1){let c=h();r(0,"tr",18),p("click",function(){let e=f(c).$implicit,o=T();return g(o.handleRowClicked(e))}),a()}}var fe=(()=>{let i=class i{constructor(n,e,o){this.service=n,this.dialog=e,this.router=o,this.dataSource=new vt,this.displayedColumns=["nom","recetteCount","actions"]}ngAfterViewInit(){this.dataSource.sort=this.sort,this.dataSource.filterPredicate=this.filterPredicate.bind(this)}filterPredicate(n,e){return this.service.normalize(n.nom).includes(this.service.normalize(e))}ngOnInit(){this.getAllTagsWithRecetteCount()}getAllTagsWithRecetteCount(){this.service.getAllTagsWithRecetteCount().subscribe({next:n=>{this.dataSource.data=n}})}handleRowClicked(n){this.router.navigate(["tags",n.id])}applyFilter(n){let e=n.target.value;this.dataSource.filter=e.trim().toLowerCase()}openEditTagDialog(n,e){e.stopPropagation(),this.dialog.open(bt,{data:{tag:n}}).afterClosed().subscribe(l=>{l&&this.getAllTagsWithRecetteCount()})}openDeleteTagDialog(n,e){e.stopPropagation(),this.dialog.open(mt,{data:{title:"Supprimer une \xE9tiquette"}}).afterClosed().subscribe(l=>{l&&this.service.deleteTag(n).subscribe({next:()=>{this.getAllTagsWithRecetteCount()}})})}};i.\u0275fac=function(e){return new(e||i)(d(V),d(K),d(q))},i.\u0275cmp=v({type:i,selectors:[["app-tag-list"]],viewQuery:function(e,o){if(e&1&&P(A,5),e&2){let l;O(l=H())&&(o.sort=l.first)}},standalone:!0,features:[y],decls:22,vars:3,consts:[["input",""],["matInput","",3,"keyup"],["matSort","","mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nom"],["matColumnDef","recetteCount"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-icon-button","","color","primary",3,"click"],["fontIcon","edit"],["mat-icon-button","","color","primary",3,"click",4,"ngIf"],["fontIcon","delete"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(e,o){if(e&1){let l=h();r(0,"h1"),m(1,"\xC9tiquettes"),a(),r(2,"mat-form-field")(3,"mat-label"),m(4,"Filtre"),a(),r(5,"input",1,0),p("keyup",function(wt){return f(l),g(o.applyFilter(wt))}),a()(),r(7,"table",2),C(8,3),u(9,Rt,2,0,"th",4)(10,Lt,2,1,"td",5),M(),C(11,6),u(12,Ft,2,0,"th",4)(13,Vt,2,1,"td",5),M(),C(14,7),u(15,At,2,0,"th",4)(16,Pt,2,1,"td",5),M(),C(17,8),u(18,Ot,2,0,"th",4)(19,Wt,4,1,"td",5),M(),u(20,Bt,1,0,"tr",9)(21,Nt,1,0,"tr",10),a()}e&2&&(s(7),_("dataSource",o.dataSource),s(13),_("matHeaderRowDef",o.displayedColumns),s(),_("matRowDefColumns",o.displayedColumns))},dependencies:[D,$,St,dt,ut,Ct,ft,pt,Mt,gt,_t,ht,Tt,st,A,ct,R,I,E,F,L,x,z,at,nt,k],styles:['.mat-mdc-row[_ngcontent-%COMP%]{position:relative;cursor:pointer}.mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]:before{inset:0;position:absolute;content:"";opacity:0;pointer-events:none}.mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%]:before{background-color:var(--mdc-list-list-item-hover-state-layer-color);opacity:var(--mdc-list-list-item-hover-state-layer-opacity)}']});let t=i;return t})();export{fe as TagListComponent};
