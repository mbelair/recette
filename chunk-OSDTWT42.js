import{c as nt}from"./chunk-W2CUE4ZP.js";import{a as Re,b as De,c as de}from"./chunk-TPIAM5O7.js";import{a as rt}from"./chunk-HCVQ5M66.js";import{a as pe,b as ce}from"./chunk-SQSQ553F.js";import{a as xe}from"./chunk-YZP6IWLT.js";import{i as z,j as Se,k as J,m as K,n as X,o as Z,p as D}from"./chunk-572O5HEG.js";import"./chunk-WVJCHVHC.js";import{a as O,b as N}from"./chunk-Y4LV4BO2.js";import"./chunk-CDXG2HUH.js";import{a as $e,c as Ye,e as He,f as ze,g as Je,h as Ke}from"./chunk-DQSKVTUK.js";import{a as F,b as Ee,e as P,f as oe}from"./chunk-GB4SDFSF.js";import{a as w,c as H,d as R,e as Xe,f as Te,g as ke,l as me,m as Ze,n as et,o as tt,p as it,q as we}from"./chunk-I4VRNCHD.js";import{b as je}from"./chunk-E3AQEYJ5.js";import{$a as W,$b as $,Ab as Q,Ba as m,Bd as ee,Ca as M,Cb as b,Dd as T,E as fe,Ed as te,Fb as Me,Fd as ie,Gb as ye,Hd as v,Id as Qe,J as Ce,Jd as ne,Kd as be,Ld as k,Md as re,Pd as x,Qd as V,R as he,Ra as h,S as _e,Sd as ae,Td as le,Ua as u,Za as q,_a as G,ab as L,ac as ve,bb as i,cb as r,cc as Ie,db as _,dd as Y,ec as E,ha as S,hb as B,kb as g,mb as I,oa as f,pa as C,qb as We,rb as Le,sb as Ue,tb as ue,ub as d,vb as y,wb as ge,yb as U,zb as j,zd as A}from"./chunk-D7P2BXP5.js";function dt(a,l){a&1&&(i(0,"mat-error"),d(1,"Cat\xE9gorie est "),i(2,"strong"),d(3,"obligatoire"),r()())}var Ae=(()=>{let l=class l{constructor(o){this.dialogRef=o,this.nomCtrl=new v("",[ee.required]),this.form=new ie({nomCtrl:this.nomCtrl}),this.data=new Xe}onCancelClick(){this.dialogRef.close()}onOkClick(){if(!this.form.valid){this.form.markAllAsTouched();return}this.data.nom=this.nomCtrl.value,this.dialogRef.close(this.data)}};l.\u0275fac=function(t){return new(t||l)(M(z))},l.\u0275cmp=S({type:l,selectors:[["app-create-recette-add-category-dialog"]],standalone:!0,features:[b],decls:14,vars:3,consts:[[3,"formGroup"],["mat-dialog-title",""],["mat-dialog-content",""],["matInput","",3,"formControl"],["mat-dialog-actions",""],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","primary",3,"click"]],template:function(t,e){t&1&&(i(0,"form",0)(1,"h1",1),d(2,"Ajouter une cat\xE9gorie"),r(),i(3,"div",2)(4,"mat-form-field")(5,"mat-label"),d(6,"Cat\xE9gorie"),r(),_(7,"input",3),h(8,dt,4,0,"mat-error"),r()(),i(9,"div",4)(10,"button",5),g("click",function(){return e.onCancelClick()}),d(11,"Cancel"),r(),i(12,"button",6),g("click",function(){return e.onOkClick()}),d(13,"Ok"),r()()()),t&2&&(u("formGroup",e.form),m(7),u("formControl",e.nomCtrl),m(),q(8,e.nomCtrl.hasError("required")?8:-1))},dependencies:[E,D,K,Z,X,x,ne,A,T,te,V,k,re,N,O,P,F,Ee,R,w]});let a=l;return a})();function st(a,l){if(a&1&&(i(0,"mat-option",12),d(1),r()),a&2){let c=l.$implicit;u("value",c.id),m(),y(c.nom)}}function ut(a,l){if(a&1&&(i(0,"mat-option",12),d(1),r()),a&2){let c=l.$implicit;u("value",c.typeCode),m(),y(c.label)}}function gt(a,l){a&1&&(i(0,"mat-error"),d(1,"Unit\xE9 est "),i(2,"strong"),d(3,"obligatoire"),r()())}function ft(a,l){a&1&&(i(0,"mat-error"),d(1,"Quantit\xE9 est "),i(2,"strong"),d(3,"obligatoire"),r()())}function Ct(a,l){if(a&1&&(i(0,"mat-form-field")(1,"mat-label"),d(2,"Quantit\xE9"),r(),_(3,"input",17),h(4,ft,4,0,"mat-error"),r()),a&2){let c=I();m(3),u("formControl",c.quantiteCtrl),m(),q(4,c.quantiteCtrl.hasError("required")?4:-1)}}function ht(a,l){if(a&1&&(i(0,"mat-option",12),d(1),r()),a&2){let c=l.$implicit;u("value",c),m(),y(c.nom)}}function _t(a,l){a&1&&(i(0,"mat-error"),d(1,"Ingr\xE9dient est "),i(2,"strong"),d(3,"obligatoire"),r()())}var qe=(()=>{let l=class l{constructor(o,t,e,n){this.dialogRef=o,this.data=t,this.dialog=e,this.appService=n,this.categorieIngredient=[],this.ingredientCtrl=new v(null,[ee.required]),this.categoryCtrl=new v(0),this.quantiteCtrl=new v(null,[ee.required]),this.uniteCtrl=new v("",[ee.required]),this.detailCtrl=new v(""),this.form=new ie({ingredientCtrl:this.ingredientCtrl,categoryCtrl:this.categoryCtrl,uniteCtrl:this.uniteCtrl,quantiteCtrl:this.quantiteCtrl,detailCtrl:this.detailCtrl}),this.editingIngredient=null,this.UNITE_GROUP=me.UNITE_GROUP,this.recette=t.recette;let p=null;t.ingredient?(p=this.recette.categorieIngredient.find(s=>s.ingredient.includes(t.ingredient)),this.ingredientCtrl.setValue(t.ingredient.ingredient),this.quantiteCtrl.setValue(t.ingredient.quantite),this.uniteCtrl.setValue(t.ingredient.unite),this.detailCtrl.setValue(t.ingredient.detail),this.editingIngredient=t.ingredient):(p=this.recette.categorieIngredient.find(s=>s.isDefaultCategory),p||(p=new Te(!0),this.recette.categorieIngredient.push(p))),this.categoryCtrl.setValue(p.id),this.categorieIngredient=[],this.recette.categorieIngredient.map(s=>this.categorieIngredient.push(s)),this.filteredIngredients=this.ingredientCtrl.valueChanges.pipe(he(null),fe(300),Ce(),_e(s=>{let se=typeof s=="string"?s:s?.nom;return this.appService.getAllIngredients(se)})),this.appService.allIngredients.subscribe({next:()=>{this.ingredientCtrl.updateValueAndValidity()}})}get hasQuantite(){return this.form.contains("quantiteCtrl")}ngOnInit(){(!this.uniteCtrl.value||this.uniteCtrl.value===me.AUCUN.typeCode)&&this.form.removeControl("quantiteCtrl"),this.uniteCtrl.valueChanges.subscribe({next:o=>{o&&o!==me.AUCUN.typeCode?this.form.addControl("quantiteCtrl",this.quantiteCtrl):this.form.removeControl("quantiteCtrl")}})}displayFn(o){return o&&o.nom?o.nom:""}getTitle(){return this.editingIngredient?"Modifier un ingr\xE9dient":"Ajouter un ingr\xE9dient"}onCancelClick(){this.dialogRef.close(null)}onOkClick(){if(typeof this.ingredientCtrl.value=="string"&&this.ingredientCtrl.setValue(""),!this.form.valid){this.form.markAllAsTouched();return}let o=this.editingIngredient?this.editingIngredient:new Ze;this.categorieIngredient.map(n=>{this.recette.categorieIngredient.some(p=>p.id===n.id)||this.recette.categorieIngredient.push(n)});let t=this.recette.categorieIngredient.find(n=>n.id===this.categoryCtrl.getRawValue()),e=this.recette.categorieIngredient.find(n=>n.ingredient.find(p=>p.ingredient_Id===o.ingredient_Id));o.ingredient=typeof this.ingredientCtrl.value=="string"?null:this.ingredientCtrl.value,o.detail=this.detailCtrl.value,this.hasQuantite?o.quantite=this.quantiteCtrl.value:o.quantite=null,o.unite=this.uniteCtrl.value,this.editingIngredient||(o.ingredient_Id=1+this.recette.categorieIngredient.reduce((n,p)=>Math.max(n,p.ingredient.reduce((s,se)=>Math.max(s,se.ingredient_Id),-1)),-1)),t.id!==e?.id&&(e&&e.ingredient.splice(e.ingredient.indexOf(this.editingIngredient),1),o.ordre=t.ingredient.length,this.recette.categorieIngredient.find(n=>n.id===this.categoryCtrl.getRawValue()).ingredient.push(o)),this.dialogRef.close()}openAddCategoryDialog(){this.dialog.open(Ae,{}).afterClosed().subscribe(t=>{t.ordre=this.categorieIngredient.length,t.id=1+this.categorieIngredient.reduce((e,n)=>Math.max(e,n.id),-1),this.categorieIngredient.push(Te.fromBase(t)),this.categoryCtrl.setValue(t.id)})}openAddIngredientDialog(){let o=this.dialog.open(rt,{})}};l.\u0275fac=function(t){return new(t||l)(M(z),M(Se),M(J),M(we))},l.\u0275cmp=S({type:l,selectors:[["app-create-recette-add-ingredient-dialog"]],standalone:!0,features:[b],decls:41,vars:15,consts:[["auto","matAutocomplete"],["mat-dialog-title",""],["mat-dialog-content",""],[3,"formGroup"],[1,"inputRow"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["mat-icon-button","","color","primary",3,"click"],["fontIcon","add"],[4,"ngIf"],["matInput","",3,"matAutocomplete","formControl"],[3,"displayWith"],[3,"value"],["matInput","",3,"formControl"],["mat-dialog-actions",""],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","primary",3,"click"],["matInput","","type","number",3,"formControl"]],template:function(t,e){if(t&1){let n=B();i(0,"h1",1),d(1),r(),i(2,"div",2)(3,"form",3)(4,"div",4)(5,"mat-form-field")(6,"mat-label"),d(7,"Cat\xE9gorie"),r(),i(8,"mat-select",5),h(9,st,2,2,"mat-option",6),r()(),i(10,"button",7),g("click",function(){return f(n),C(e.openAddCategoryDialog())}),_(11,"mat-icon",8),r()(),i(12,"mat-form-field")(13,"mat-label"),d(14,"Unit\xE9"),r(),i(15,"mat-select",5),h(16,ut,2,2,"mat-option",6),r(),h(17,gt,4,0,"mat-error"),r(),h(18,Ct,5,2,"mat-form-field",9),i(19,"div",4)(20,"mat-form-field")(21,"mat-label"),d(22,"Ingr\xE9dient"),r(),_(23,"input",10),i(24,"mat-autocomplete",11,0),W(26,ht,2,2,"mat-option",12,G),Me(28,"async"),r(),h(29,_t,4,0,"mat-error"),r(),i(30,"button",7),g("click",function(){return f(n),C(e.openAddIngredientDialog())}),_(31,"mat-icon",8),r()(),i(32,"mat-form-field")(33,"mat-label"),d(34,"D\xE9tail"),r(),_(35,"input",13),r()()(),i(36,"div",14)(37,"button",15),g("click",function(){return f(n),C(e.onCancelClick())}),d(38,"Cancel"),r(),i(39,"button",16),g("click",function(){return f(n),C(e.onOkClick())}),d(40,"Ok"),r()()}if(t&2){let n=ue(25);m(),y(e.getTitle()),m(2),u("formGroup",e.form),m(5),u("formControl",e.categoryCtrl),m(),u("ngForOf",e.categorieIngredient),m(6),u("formControl",e.uniteCtrl),m(),u("ngForOf",e.UNITE_GROUP.units),m(),q(17,e.uniteCtrl.hasError("required")?17:-1),m(),u("ngIf",e.hasQuantite),m(5),u("matAutocomplete",n)("formControl",e.ingredientCtrl),m(),u("displayWith",e.displayFn),m(2),L(ye(28,13,e.filteredIngredients)),m(3),q(29,e.ingredientCtrl.hasError("required")?29:-1),m(6),u("formControl",e.detailCtrl)}},dependencies:[oe,P,F,Ee,le,ae,de,Re,Y,De,E,$,ve,Ie,x,ne,A,be,T,te,V,k,re,N,O,ce,pe,D,K,Z,X,R,w,H],styles:["mat-form-field[_ngcontent-%COMP%]{display:block}.inputRow[_ngcontent-%COMP%]{display:flex}.inputRow[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{display:flex;flex:1 1 0;margin-right:10px}"]});let a=l;return a})();function Mt(a,l){if(a&1&&(i(0,"mat-option",12),d(1),r()),a&2){let c=l.$implicit;u("value",c.id),m(),y(c.nom)}}var Ge=(()=>{let l=class l{constructor(o,t,e){this.dialogRef=o,this.data=t,this.dialog=e,this.categoriePreparation=[],this.categoryCtrl=new v(0),this.detailCtrl=new v(""),this.form=new ie({categoryCtrl:this.categoryCtrl,detailCtrl:this.detailCtrl}),this.editingStep=null,this.recette=t.recette;let n=null;t.step?(n=this.recette.categoriePreparation.find(p=>p.preparation.includes(t.step)),this.detailCtrl.setValue(t.step.text),this.editingStep=t.step):(n=this.recette.categoriePreparation.find(p=>p.isDefaultCategory),n||(n=new ke(!0),this.recette.categoriePreparation.push(n))),this.categoryCtrl.setValue(n.id),this.categoriePreparation=[],this.recette.categoriePreparation.map(p=>this.categoriePreparation.push(p))}getTitle(){return this.editingStep?"Modifier une \xE9tape de pr\xE9paration":"Ajouter une \xE9tape de pr\xE9paration"}onCancelClick(){this.dialogRef.close(null)}onOkClick(){if(!this.form.valid){this.form.markAllAsTouched();return}let o=this.editingStep?this.editingStep:new et;this.categoriePreparation.map(n=>{this.recette.categoriePreparation.some(p=>p.id===n.id)||this.recette.categoriePreparation.push(n)});let t=this.recette.categoriePreparation.find(n=>n.id===this.categoryCtrl.getRawValue()),e=this.recette.categoriePreparation.find(n=>n.preparation.find(p=>p.id===o.id));o.text=this.detailCtrl.value,this.editingStep||(o.id=1+this.recette.categoriePreparation.reduce((n,p)=>Math.max(n,p.preparation.reduce((s,se)=>Math.max(s,se.id),-1)),-1)),t.id!==e?.id&&(e&&e.preparation.splice(e.preparation.indexOf(this.editingStep),1),o.ordre=t.preparation.length,this.recette.categoriePreparation.find(n=>n.id===this.categoryCtrl.getRawValue()).preparation.push(o)),this.dialogRef.close()}openAddCategoryDialog(){this.dialog.open(Ae,{}).afterClosed().subscribe(t=>{t.ordre=this.categoriePreparation.length,t.id=1+this.categoriePreparation.reduce((e,n)=>Math.max(e,n.id),-1),this.categoriePreparation.push(ke.fromBase(t)),this.categoryCtrl.setValue(t.id)})}};l.\u0275fac=function(t){return new(t||l)(M(z),M(Se),M(J))},l.\u0275cmp=S({type:l,selectors:[["app-create-recette-add-preparation-dialog-component"]],standalone:!0,features:[b],decls:21,vars:5,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"formGroup"],[1,"inputRow"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["mat-icon-button","","color","primary",3,"click"],["fontIcon","add"],["matInput","","rows","10",3,"formControl"],["mat-dialog-actions",""],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","primary",3,"click"],[3,"value"]],template:function(t,e){t&1&&(i(0,"h1",0),d(1),r(),i(2,"div",1)(3,"form",2)(4,"div",3)(5,"mat-form-field")(6,"mat-label"),d(7,"Cat\xE9gorie"),r(),i(8,"mat-select",4),h(9,Mt,2,2,"mat-option",5),r()(),i(10,"button",6),g("click",function(){return e.openAddCategoryDialog()}),_(11,"mat-icon",7),r()(),i(12,"mat-form-field")(13,"mat-label"),d(14,"D\xE9tail"),r(),_(15,"textarea",8),r()()(),i(16,"div",9)(17,"button",10),g("click",function(){return e.onCancelClick()}),d(18,"Cancel"),r(),i(19,"button",11),g("click",function(){return e.onOkClick()}),d(20,"Ok"),r()()),t&2&&(m(),y(e.getTitle()),m(2),u("formGroup",e.form),m(5),u("formControl",e.categoryCtrl),m(),u("ngForOf",e.categoriePreparation),m(6),u("formControl",e.detailCtrl))},dependencies:[oe,P,F,le,ae,de,Y,E,$,x,ne,A,T,te,V,k,re,N,O,ce,pe,D,K,Z,X,R,w,H],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.inputRow[_ngcontent-%COMP%]{display:flex}.inputRow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px}"]});let a=l;return a})();var yt=["input"];function vt(a,l){if(a&1){let c=B();i(0,"mat-chip-row",14),g("removed",function(){let t=f(c).$implicit,e=I();return C(e.remove(t))}),d(1),i(2,"button",15)(3,"mat-icon"),d(4,"cancel"),r()()()}if(a&2){let c=l.$implicit;m(),ge(" ",c.nom," ")}}function It(a,l){if(a&1&&(i(0,"mat-option",7),d(1),r()),a&2){let c=l.$implicit;u("value",c),m(),y(c.nom)}}function St(a,l){if(a&1&&(i(0,"mat-option",7),d(1),r()),a&2){let c=l.$implicit;u("value",c.typeCode),m(),y(c.label)}}function bt(a,l){if(a&1&&(i(0,"h3"),d(1),r()),a&2){let c=I().$implicit;m(),y(c.nom)}}function Et(a,l){if(a&1){let c=B();i(0,"li"),d(1),i(2,"button",17),g("click",function(){let t=f(c).$implicit,e=I(2);return C(e.openEditIngredientDialog(t))}),_(3,"mat-icon",18),r(),i(4,"button",17),g("click",function(){let t=f(c).$implicit,e=I(2);return C(e.openDeleteIngredientDialog(t))}),_(5,"mat-icon",19),r()()}if(a&2){let c=l.$implicit;m(),ge(" ",c.getLabel(1)," ")}}function wt(a,l){if(a&1&&(i(0,"div"),h(1,bt,2,1,"h3",16),i(2,"ul"),h(3,Et,6,1,"li",12),r()()),a&2){let c=l.$implicit;m(),u("ngIf",!c.isDefaultCategory),m(2),u("ngForOf",c.ingredient)}}function Rt(a,l){if(a&1&&(i(0,"h3"),d(1),r()),a&2){let c=I().$implicit;m(),y(c.nom)}}function Dt(a,l){if(a&1){let c=B();i(0,"li"),d(1),i(2,"button",17),g("click",function(){let t=f(c).$implicit,e=I(2);return C(e.openEditPreparationtDialog(t))}),_(3,"mat-icon",18),r(),i(4,"button",17),g("click",function(){let t=f(c).$implicit,e=I(2);return C(e.openDeletePreparationtDialog(t))}),_(5,"mat-icon",19),r()()}if(a&2){let c=l.$implicit;m(),ge(" ",c.text," ")}}function At(a,l){if(a&1&&(i(0,"div"),h(1,Rt,2,1,"h3",16),i(2,"ol"),h(3,Dt,6,1,"li",12),r()()),a&2){let c=l.$implicit;m(),u("ngIf",!c.isDefaultCategory),m(2),u("ngForOf",c.preparation)}}var Vi=(()=>{let l=class l{constructor(o,t,e){this.dialog=o,this.appService=t,this.route=e,this.allMealTypes=Ke.ALL,this.id=-1,this.recette=new it(!0),this.tagsCtrl=new v(null,[]),this.tags=[],this.filteredTags=this.tagsCtrl.valueChanges.pipe(he(null),fe(300),Ce(),_e(n=>{let p=typeof n=="string"?n:n?.nom;return this.appService.getAllTags(p)}))}ngOnInit(){this.route.params.subscribe(o=>{this.id=+o.id,this.id&&this.appService.getRecette(this.id).subscribe({next:t=>{this.recette=t,this.tags=this.recette.tags}})})}displayFn(o){return o&&o.nom?o.nom:""}openAddIngredientDialog(){this.dialog.open(qe,{data:{recette:this.recette,ingredient:null}})}getUnitLabel(o){return me.fromTypeCode(o.unite).getFormatedLabel(o.quantite>1)}openEditIngredientDialog(o){this.dialog.open(qe,{data:{recette:this.recette,ingredient:o}})}openDeleteIngredientDialog(o){this.dialog.open(xe,{data:{title:"Supprimer un ingr\xE9dient"}}).afterClosed().subscribe(e=>{if(e){let n=this.recette.categorieIngredient.find(p=>p.ingredient.includes(o));n.ingredient.splice(n.ingredient.indexOf(o),1)}})}openEditPreparationtDialog(o){this.dialog.open(Ge,{data:{recette:this.recette,step:o}})}openDeletePreparationtDialog(o){this.dialog.open(xe,{data:{title:"Supprimer une \xE9tape"}}).afterClosed().subscribe(e=>{if(e){let n=this.recette.categoriePreparation.find(p=>p.preparation.includes(o));n.preparation.splice(n.preparation.indexOf(o),1)}})}openAddPreparationDialog(){this.dialog.open(Ge,{data:{recette:this.recette,step:null}})}submit(){this.recette.tags=[...new Set(this.tags)],this.id?this.appService.updateRecette(this.recette).subscribe({next:()=>{alert("YAY!")}}):this.appService.createRecette(this.recette).subscribe({next:()=>{alert("YAY!")}})}add(o){let t=(o.value||"").trim(),e=this.appService.allTags.value.find(n=>n.nom===t);e||(e=new tt,e.id=-1,e.nom=t),t&&this.tags.push(e),o.chipInput.clear(),this.tagsCtrl.setValue(null)}remove(o){let t=this.tags.indexOf(o);t>=0&&this.tags.splice(t,1)}selected(o){this.tags.push(o.option.value),this.input.nativeElement.value="",this.tagsCtrl.setValue(null)}get pageTitle(){return this.id?"Modifier une recette":"Cr\xE9er une recette"}get submitButton(){return this.id?"Modifier":"Cr\xE9er"}};l.\u0275fac=function(t){return new(t||l)(M(J),M(we),M(je))},l.\u0275cmp=S({type:l,selectors:[["app-create-recette"]],viewQuery:function(t,e){if(t&1&&We(yt,5),t&2){let n;Le(n=Ue())&&(e.input=n.first)}},standalone:!0,features:[b],decls:56,vars:15,consts:[["chipGrid",""],["input",""],["auto","matAutocomplete"],["matInput","",3,"ngModelChange","ngModel"],["matInput","","type","number",3,"ngModelChange","ngModel"],["matInput","",3,"matChipInputTokenEnd","matAutocomplete","formControl","matChipInputFor"],[3,"optionSelected","displayWith"],[3,"value"],["multiple","",3,"ngModelChange","ngModel"],[1,"ingredientHeader"],["mat-stroked-button","","color","primary",3,"click"],["fontIcon","add"],[4,"ngFor","ngForOf"],["mat-flat-button","","color","primary",3,"click"],[3,"removed"],["matChipRemove",""],[4,"ngIf"],["mat-icon-button","","color","primary",3,"click"],["fontIcon","edit"],["fontIcon","delete"]],template:function(t,e){if(t&1){let n=B();i(0,"h1"),d(1),r(),i(2,"h2"),d(3,"Information"),r(),i(4,"mat-form-field")(5,"mat-label"),d(6,"Nom de la recette"),r(),i(7,"input",3),Q("ngModelChange",function(s){return f(n),j(e.recette.nom,s)||(e.recette.nom=s),C(s)}),r()(),i(8,"mat-form-field")(9,"mat-label"),d(10,"Nombre de portions"),r(),i(11,"input",4),Q("ngModelChange",function(s){return f(n),j(e.recette.nombrePortion,s)||(e.recette.nombrePortion=s),C(s)}),r()(),i(12,"mat-form-field")(13,"mat-label"),d(14,"Temps de pr\xE9paration"),r(),i(15,"input",4),Q("ngModelChange",function(s){return f(n),j(e.recette.tempsPreparation,s)||(e.recette.tempsPreparation=s),C(s)}),r()(),i(16,"mat-form-field")(17,"mat-label"),d(18,"Temps de cuisson"),r(),i(19,"input",4),Q("ngModelChange",function(s){return f(n),j(e.recette.tempsCuisson,s)||(e.recette.tempsCuisson=s),C(s)}),r()(),i(20,"mat-form-field")(21,"mat-label"),d(22,"\xC9tiquettes"),r(),i(23,"mat-chip-grid",null,0),W(25,vt,5,1,"mat-chip-row",null,G),r(),i(27,"input",5,1),g("matChipInputTokenEnd",function(s){return f(n),C(e.add(s))}),r(),i(29,"mat-autocomplete",6,2),g("optionSelected",function(s){return f(n),C(e.selected(s))}),W(31,It,2,2,"mat-option",7,G),Me(33,"async"),r()(),i(34,"mat-form-field")(35,"mat-label"),d(36,"Type de repas"),r(),i(37,"mat-select",8),Q("ngModelChange",function(s){return f(n),j(e.recette.typeRepas,s)||(e.recette.typeRepas=s),C(s)}),W(38,St,2,2,"mat-option",7,G),r()(),i(40,"h2"),d(41,"Ingr\xE9dients"),r(),i(42,"div",9)(43,"button",10),g("click",function(){return f(n),C(e.openAddIngredientDialog())}),_(44,"mat-icon",11),d(45," Ingr\xE9dient "),r()(),h(46,wt,4,2,"div",12),i(47,"h2"),d(48,"Pr\xE9paration"),r(),i(49,"div",9)(50,"button",10),g("click",function(){return f(n),C(e.openAddPreparationDialog())}),_(51,"mat-icon",11),d(52," \xC9tape "),r()(),h(53,At,4,2,"div",12),i(54,"button",13),g("click",function(){return f(n),C(e.submit())}),d(55),r()}if(t&2){let n=ue(24),p=ue(30);m(),y(e.pageTitle),m(6),U("ngModel",e.recette.nom),m(4),U("ngModel",e.recette.nombrePortion),m(4),U("ngModel",e.recette.tempsPreparation),m(4),U("ngModel",e.recette.tempsCuisson),m(6),L(e.tags),m(2),u("matAutocomplete",p)("formControl",e.tagsCtrl)("matChipInputFor",n),m(2),u("displayWith",e.displayFn),m(2),L(ye(33,13,e.filteredTags)),m(6),U("ngModel",e.recette.typeRepas),m(),L(e.allMealTypes),m(8),u("ngForOf",e.recette.categorieIngredient),m(7),u("ngForOf",e.recette.categoriePreparation),m(2),ge(" ",e.submitButton,`
`)}},dependencies:[E,$,ve,Ie,oe,P,F,Je,He,ze,$e,Ye,ce,pe,Y,nt,x,A,be,T,Qe,de,Re,De,V,k,N,O,R,w,H,le,ae,D],styles:["mat-form-field[_ngcontent-%COMP%]{display:block}.ingredientHeader[_ngcontent-%COMP%]{display:flex;margin-bottom:10px}.ingredientHeader[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px}[_nghost-%COMP%]{display:block}li[_ngcontent-%COMP%]{font-size:16px}"]});let a=l;return a})();export{Vi as CreateRecetteComponent};