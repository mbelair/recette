import{e as de,f as he,g as ue,h as qe}from"./chunk-572O5HEG.js";import{f as We,j as ze,k as Qe}from"./chunk-WVJCHVHC.js";import{c as et,d as tt,f as it}from"./chunk-GB4SDFSF.js";import{A as ee,Ba as p,Bb as ne,Bd as Xe,Ca as s,Cb as K,Cd as $e,Fc as Oe,G as ve,Gc as se,Gd as Ze,Ic as xe,J as ye,Mc as De,Md as Je,Na as W,Nc as Ae,Pb as U,Pc as Fe,R as te,Ra as O,Rb as m,S as ie,Sa as Se,Sb as re,T as S,Ta as w,Tc as F,Ua as C,Uc as Ee,Vc as Re,Wa as z,Ya as Ie,Yc as Ve,Za as x,Zc as Le,_ as P,_b as we,_c as Be,aa as I,ad as Pe,bb as u,bd as Ge,cb as v,da as ke,db as D,dd as je,ec as Te,ed as Ne,fd as He,ga as c,gd as ce,ha as G,hb as R,ia as j,j as E,kb as M,ld as ge,mb as b,md as pe,na as Ce,nb as Q,oa as f,ob as V,pa as _,pb as L,pd as Y,qa as Me,qb as A,qd as Ke,rb as y,s as J,sb as k,sd as X,ta as N,tb as q,td as Ue,ub as ae,uc as le,ud as Ye,va as H,vb as oe,wa as T,x as _e,z as B}from"./chunk-D7P2BXP5.js";var yt=["trigger"],kt=["panel"],Ct=[[["mat-select-trigger"]],"*"],Mt=["mat-select-trigger","*"];function St(o,a){if(o&1&&(u(0,"span",4),ae(1),v()),o&2){let l=b();p(),oe(l.placeholder)}}function It(o,a){o&1&&V(0)}function wt(o,a){if(o&1&&(u(0,"span",11),ae(1),v()),o&2){let l=b(2);p(),oe(l.triggerValue)}}function Tt(o,a){if(o&1&&(u(0,"span",10),O(1,It,1,0)(2,wt,2,1),v()),o&2){let l=b();p(),x(1,l.customTrigger?1:2)}}function Ot(o,a){if(o&1){let l=R();u(0,"div",12,1),M("@transformPanel.done",function(t){f(l);let i=b();return _(i._panelDoneAnimatingStream.next(t.toState))})("keydown",function(t){f(l);let i=b();return _(i._handleKeydown(t))}),V(2,1),v()}if(o&2){let l=b();Ie("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ",l._getPanelTheme(),""),C("ngClass",l.panelClass)("@transformPanel","showing"),w("id",l.id+"-panel")("aria-multiselectable",l.multiple)("aria-label",l.ariaLabel||null)("aria-labelledby",l._getPanelAriaLabelledby())}}var xt={transformPanelWrap:ge("transformPanelWrap",[X("* => void",Ye("@transformPanel",[Ue()],{optional:!0}))]),transformPanel:ge("transformPanel",[Ke("void",Y({opacity:0,transform:"scale(1, 0.8)"})),X("void => showing",pe("120ms cubic-bezier(0, 0, 0.2, 1)",Y({opacity:1,transform:"scale(1, 1)"}))),X("* => void",pe("100ms linear",Y({opacity:0})))])};var lt=0,st=new I("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let o=ke(de);return()=>o.scrollStrategies.reposition()}});function Dt(o){return()=>o.scrollStrategies.reposition()}var At=new I("MAT_SELECT_CONFIG"),Ft={provide:st,deps:[de],useFactory:Dt},Et=new I("MatSelectTrigger"),me=class{constructor(a,l){this.source=a,this.value=l}},yi=(()=>{let a=class a{_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,n=Ne(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&n===1?i.scrollTop=0:i.scrollTop=He(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new me(this,e)}get focused(){return this._focused||this._panelOpen}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(Xe.required)??!1}set required(e){this._required=e,this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,i,n,r,g,d,ct,dt,fe,ht,ut,gt,$){this._viewportRuler=e,this._changeDetectorRef=t,this._elementRef=r,this._dir=g,this._parentFormField=dt,this.ngControl=fe,this._liveAnnouncer=gt,this._defaultOptions=$,this._positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}],this._panelOpen=!1,this._compareWith=(h,Z)=>h===Z,this._uid=`mat-select-${lt++}`,this._triggerAriaLabelledBy=null,this._destroy=new E,this.stateChanges=new E,this.disableAutomaticLabeling=!0,this._onChange=()=>{},this._onTouched=()=>{},this._valueId=`mat-select-value-${lt++}`,this._panelDoneAnimatingStream=new E,this._overlayPanelClass=this._defaultOptions?.overlayPanelClass||"",this._focused=!1,this.controlType="mat-select",this.disabled=!1,this.disableRipple=!1,this.tabIndex=0,this._hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1,this._multiple=!1,this.disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1,this.ariaLabel="",this.panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto",this._initialized=new E,this.optionSelectionChanges=_e(()=>{let h=this.options;return h?h.changes.pipe(te(h),ie(()=>B(...h.map(Z=>Z.onSelectionChange)))):this._initialized.pipe(ie(()=>this.optionSelectionChanges))}),this.openedChange=new T,this._openedStream=this.openedChange.pipe(ee(h=>h),J(()=>{})),this._closedStream=this.openedChange.pipe(ee(h=>!h),J(()=>{})),this.selectionChange=new T,this.valueChange=new T,this._trackedModal=null,this._skipPredicate=h=>this.panelOpen?!1:h.disabled,this.ngControl&&(this.ngControl.valueAccessor=this),$?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=$.typeaheadDebounceInterval),this._errorStateTracker=new Ee(n,fe,ct,d,this.stateChanges),this._scrollStrategyFactory=ut,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(ht)||0,this.id=this.id}ngOnInit(){this._selectionModel=new We(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe(ye(),S(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen)),this._viewportRuler.change().pipe(S(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(S(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(te(null),S(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval)}ngOnDestroy(){this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&se(this._trackedModal,"aria-owns",t),Oe(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;se(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next())}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,n=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&n&&!le(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let g=this.selected;r.onKeydown(e);let d=this.selected;d&&g!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,n=i===40||i===38,r=t.isTyping();if(n&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!le(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let g=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(g?d.select():d.deselect())})}else{let g=t.activeItemIndex;t.onKeydown(e),this._multiple&&n&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==g&&t.activeItem._selectViaInteraction()}}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe(ve(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return i.value!=null&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof he?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new xe(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=B(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(S(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),B(...this.options.map(t=>t._stateChanges)).pipe(S(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=(e?e+" ":"")+this._valueId;return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}};a.\u0275fac=function(t){return new(t||a)(s(ze),s(U),s(Se),s(Re),s(H),s(Fe,8),s(Ze,8),s(Je,8),s(tt,8),s($e,10),N("tabindex"),s(st),s(De),s(At,8))},a.\u0275cmp=G({type:a,selectors:[["mat-select"]],contentQueries:function(t,i,n){if(t&1&&(L(n,Et,5),L(n,je,5),L(n,Ge,5)),t&2){let r;y(r=k())&&(i.customTrigger=r.first),y(r=k())&&(i.options=r),y(r=k())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&(A(yt,5),A(kt,5),A(ue,5)),t&2){let n;y(n=k())&&(i.trigger=n.first),y(n=k())&&(i.panel=n.first),y(n=k())&&(i._overlayDir=n.first)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:19,hostBindings:function(t,i){t&1&&M("keydown",function(r){return i._handleKeydown(r)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(w("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),z("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple))},inputs:{userAriaDescribedBy:[c.None,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[c.HasDecoratorInputTransform,"disabled","disabled",m],disableRipple:[c.HasDecoratorInputTransform,"disableRipple","disableRipple",m],tabIndex:[c.HasDecoratorInputTransform,"tabIndex","tabIndex",e=>e==null?0:re(e)],hideSingleSelectionIndicator:[c.HasDecoratorInputTransform,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",m],placeholder:"placeholder",required:[c.HasDecoratorInputTransform,"required","required",m],multiple:[c.HasDecoratorInputTransform,"multiple","multiple",m],disableOptionCentering:[c.HasDecoratorInputTransform,"disableOptionCentering","disableOptionCentering",m],compareWith:"compareWith",value:"value",ariaLabel:[c.None,"aria-label","ariaLabel"],ariaLabelledby:[c.None,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[c.HasDecoratorInputTransform,"typeaheadDebounceInterval","typeaheadDebounceInterval",re],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],standalone:!0,features:[ne([{provide:et,useExisting:a},{provide:Pe,useExisting:a}]),W,Ce,K],ngContentSelectors:Mt,decls:11,vars:8,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"backdropClick","attach","detach","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",3,"keydown","ngClass"]],template:function(t,i){if(t&1){let n=R();Q(Ct),u(0,"div",2,0),M("click",function(){return f(n),_(i.open())}),u(3,"div",3),O(4,St,2,1,"span",4)(5,Tt,3,1),v(),u(6,"div",5)(7,"div",6),Me(),u(8,"svg",7),D(9,"path",8),v()()()(),O(10,Ot,3,9,"ng-template",9),M("backdropClick",function(){return f(n),_(i.close())})("attach",function(){return f(n),_(i._onAttached())})("detach",function(){return f(n),_(i.close())})}if(t&2){let n=q(1);p(3),w("id",i._valueId),p(),x(4,i.empty?4:5),p(6),C("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||n)("cdkConnectedOverlayOpen",i.panelOpen)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)}},dependencies:[he,ue,we],styles:['.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color);font-family:var(--mat-select-trigger-text-font);line-height:var(--mat-select-trigger-text-line-height);font-size:var(--mat-select-trigger-text-size);font-weight:var(--mat-select-trigger-text-weight);letter-spacing:var(--mat-select-trigger-text-tracking)}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color)}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color)}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color)}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}div.mat-mdc-select-panel .mat-mdc-option{--mdc-list-list-item-container-color: var(--mat-select-panel-background-color)}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform)}'],encapsulation:2,data:{animation:[xt.transformPanel]},changeDetection:0});let o=a;return o})();var ki=(()=>{let a=class a{};a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=j({type:a}),a.\u0275inj=P({providers:[Ft],imports:[Te,qe,ce,F,Qe,it,ce,F]});let o=a;return o})();var Rt=["button"],Vt=["*"];function Lt(o,a){if(o&1&&D(0,"mat-pseudo-checkbox",3),o&2){let l=b();C("disabled",l.disabled)}}function Bt(o,a){if(o&1&&D(0,"mat-pseudo-checkbox",3),o&2){let l=b();C("disabled",l.disabled)}}var Pt=new I("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:Gt});function Gt(){return{hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1}}var jt=new I("MatButtonToggleGroup");var Nt=0,be=class{constructor(a,l){this.source=a,this.value=l}};var Ht=(()=>{let a=class a{get buttonId(){return`${this.id}-button`}get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}constructor(e,t,i,n,r,g){this._changeDetectorRef=t,this._elementRef=i,this._focusMonitor=n,this._checked=!1,this.ariaLabelledby=null,this._disabled=!1,this.change=new T;let d=Number(r);this.tabIndex=d||d===0?d:null,this.buttonToggleGroup=e,this.appearance=g&&g.appearance?g.appearance:"standard"}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||`mat-button-toggle-${Nt++}`,e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){let e=this._isSingleSelector()?!0:!this._checked;e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.change.emit(new be(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this._isSingleSelector()?this.buttonToggleGroup.name:this.name||null}_isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}};a.\u0275fac=function(t){return new(t||a)(s(jt,8),s(U),s(H),s(Ae),N("tabindex"),s(Pt,8))},a.\u0275cmp=G({type:a,selectors:[["mat-button-toggle"]],viewQuery:function(t,i){if(t&1&&A(Rt,5),t&2){let n;y(n=k())&&(i._buttonElement=n.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:12,hostBindings:function(t,i){t&1&&M("focus",function(){return i.focus()}),t&2&&(w("aria-label",null)("aria-labelledby",null)("id",i.id)("name",null),z("mat-button-toggle-standalone",!i.buttonToggleGroup)("mat-button-toggle-checked",i.checked)("mat-button-toggle-disabled",i.disabled)("mat-button-toggle-appearance-standard",i.appearance==="standard"))},inputs:{ariaLabel:[c.None,"aria-label","ariaLabel"],ariaLabelledby:[c.None,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[c.HasDecoratorInputTransform,"disableRipple","disableRipple",m],appearance:"appearance",checked:[c.HasDecoratorInputTransform,"checked","checked",m],disabled:[c.HasDecoratorInputTransform,"disabled","disabled",m]},outputs:{change:"change"},exportAs:["matButtonToggle"],standalone:!0,features:[W,K],ngContentSelectors:Vt,decls:8,vars:11,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-label-content"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){if(t&1){let n=R();Q(),u(0,"button",1,0),M("click",function(){return f(n),_(i._onButtonClick())}),u(2,"span",2),O(3,Lt,1,1,"mat-pseudo-checkbox",3)(4,Bt,1,1,"mat-pseudo-checkbox",3),V(5),v()(),D(6,"span",4)(7,"span",5)}if(t&2){let n=q(1);C("id",i.buttonId)("disabled",i.disabled||null),w("tabindex",i.disabled?-1:i.tabIndex)("aria-pressed",i.checked)("name",i._getButtonName())("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby),p(3),x(3,i.buttonToggleGroup&&i.checked&&!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator?3:-1),p(),x(4,i.buttonToggleGroup&&i.checked&&i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator?4:-1),p(3),C("matRippleTrigger",n)("matRippleDisabled",i.disableRipple||i.disabled)}},dependencies:[Ve,Be],styles:[".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape);border:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-standard-button-toggle-selected-state-text-color )}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-legacy-button-toggle-selected-state-text-color )}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-legacy-button-toggle-disabled-state-text-color )}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color);background-color:var(--mat-standard-button-toggle-background-color);font-family:var(--mat-standard-button-toggle-label-text-font);font-size:var(--mat-standard-button-toggle-label-text-size);line-height:var(--mat-standard-button-toggle-label-text-line-height);font-weight:var(--mat-standard-button-toggle-label-text-weight);letter-spacing:var(--mat-standard-button-toggle-label-text-tracking)}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color);background-color:var(--mat-standard-button-toggle-selected-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-standard-button-toggle-disabled-selected-state-text-color )}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color)}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity)}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity)}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape);border-bottom-right-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape);border-bottom-left-radius:var(--mat-standard-button-toggle-shape)}"],encapsulation:2,changeDetection:0});let o=a;return o})(),Pi=(()=>{let a=class a{};a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=j({type:a}),a.\u0275inj=P({imports:[F,Le,Ht,F]});let o=a;return o})();export{yi as a,ki as b,Pi as c};