import{e as ue,f as he,g as ge,h as Ue,i as Ze,j as Je,m as et,o as tt,p as it}from"./chunk-4ULYVBJU.js";import{f as Qe,j as qe,k as Ke}from"./chunk-GUBK6LRS.js";import{c as lt,d as st,f as ct}from"./chunk-EDHGTQOS.js";import{c as pe,d as me,g as Z,h as Ye,j as J,k as Xe,l as $e}from"./chunk-RGNDWIHZ.js";import{a as We,d as ze}from"./chunk-NNG3ON6H.js";import{$ as Se,$a as j,Aa as K,Ac as Le,B as ke,Ca as Te,Cc as Ge,Da as A,Dc as Pe,F as oe,Fc as je,G as ne,Gc as Ne,H as S,Ha as u,Hc as He,Ia as g,Ic as de,Ja as E,Na as L,O as H,Oc as at,P as I,Pc as ot,Qa as b,R as Ce,Sa as _,Ta as U,Tc as nt,U as c,Ua as G,V as O,Va as P,W,Wa as F,Wb as se,Xa as k,Y as Me,Ya as C,Z as v,Za as Y,Zc as rt,_ as y,_a as w,ca as z,fa as Q,fc as Oe,g as B,ga as x,gb as re,gc as ce,hb as R,ic as xe,ka as h,la as s,mc as De,nc as Ae,o as ie,ob as X,pc as Ee,q as ve,qb as f,rb as le,t as N,tc as V,u as ae,ua as q,ub as we,uc as Fe,va as D,vc as Re,wa as Ie,xa as T,y as ye,ya as M,yc as Ve,zb as $,zc as Be}from"./chunk-KXVFDBQH.js";var wt=["trigger"],Ot=["panel"],xt=[[["mat-select-trigger"]],"*"],Dt=["mat-select-trigger","*"];function At(o,a){if(o&1&&(u(0,"span",4),w(1),g()),o&2){let l=_();h(),j(l.placeholder)}}function Et(o,a){o&1&&G(0)}function Ft(o,a){if(o&1&&(u(0,"span",11),w(1),g()),o&2){let l=_(2);h(),j(l.triggerValue)}}function Rt(o,a){if(o&1&&(u(0,"span",10),D(1,Et,1,0)(2,Ft,2,1),g()),o&2){let l=_();h(),A(1,l.customTrigger?1:2)}}function Vt(o,a){if(o&1){let l=L();u(0,"div",12,1),b("@transformPanel.done",function(t){v(l);let i=_();return y(i._panelDoneAnimatingStream.next(t.toState))})("keydown",function(t){v(l);let i=_();return y(i._handleKeydown(t))}),G(2,1),g()}if(o&2){let l=_();Te("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ",l._getPanelTheme(),""),M("ngClass",l.panelClass)("@transformPanel","showing"),T("id",l.id+"-panel")("aria-multiselectable",l.multiple)("aria-label",l.ariaLabel||null)("aria-labelledby",l._getPanelAriaLabelledby())}}var Bt={transformPanelWrap:pe("transformPanelWrap",[J("* => void",$e("@transformPanel",[Xe()],{optional:!0}))]),transformPanel:pe("transformPanel",[Ye("void",Z({opacity:0,transform:"scale(1, 0.8)"})),J("void => showing",me("120ms cubic-bezier(0, 0, 0.2, 1)",Z({opacity:1,transform:"scale(1, 1)"}))),J("* => void",me("100ms linear",Z({opacity:0})))])};var pt=0,bt=new I("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let o=Ce(ue);return()=>o.scrollStrategies.reposition()}});function Lt(o){return()=>o.scrollStrategies.reposition()}var Gt=new I("MAT_SELECT_CONFIG"),Pt={provide:bt,deps:[ue],useFactory:Lt},jt=new I("MatSelectTrigger"),be=class{constructor(a,l){this.source=a,this.value=l}},wi=(()=>{let a=class a{_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,n=Ne(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&n===1?i.scrollTop=0:i.scrollTop=He(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new be(this,e)}get focused(){return this._focused||this._panelOpen}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(at.required)??!1}set required(e){this._required=e,this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,i,n,r,m,d,ft,_t,_e,vt,yt,kt,ee){this._viewportRuler=e,this._changeDetectorRef=t,this._elementRef=r,this._dir=m,this._parentFormField=_t,this.ngControl=_e,this._liveAnnouncer=kt,this._defaultOptions=ee,this._positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}],this._panelOpen=!1,this._compareWith=(p,te)=>p===te,this._uid=`mat-select-${pt++}`,this._triggerAriaLabelledBy=null,this._destroy=new B,this.stateChanges=new B,this.disableAutomaticLabeling=!0,this._onChange=()=>{},this._onTouched=()=>{},this._valueId=`mat-select-value-${pt++}`,this._panelDoneAnimatingStream=new B,this._overlayPanelClass=this._defaultOptions?.overlayPanelClass||"",this._focused=!1,this.controlType="mat-select",this.disabled=!1,this.disableRipple=!1,this.tabIndex=0,this._hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1,this._multiple=!1,this.disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1,this.ariaLabel="",this.panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto",this._initialized=new B,this.optionSelectionChanges=ve(()=>{let p=this.options;return p?p.changes.pipe(oe(p),ne(()=>N(...p.map(te=>te.onSelectionChange)))):this._initialized.pipe(ne(()=>this.optionSelectionChanges))}),this.openedChange=new x,this._openedStream=this.openedChange.pipe(ae(p=>p),ie(()=>{})),this._closedStream=this.openedChange.pipe(ae(p=>!p),ie(()=>{})),this.selectionChange=new x,this.valueChange=new x,this._trackedModal=null,this._skipPredicate=p=>this.panelOpen?!1:p.disabled,this.ngControl&&(this.ngControl.valueAccessor=this),ee?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=ee.typeaheadDebounceInterval),this._errorStateTracker=new Fe(n,_e,ft,d,this.stateChanges),this._scrollStrategyFactory=yt,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(vt)||0,this.id=this.id}ngOnInit(){this._selectionModel=new Qe(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe(ke(),S(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen)),this._viewportRuler.change().pipe(S(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(S(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(oe(null),S(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval)}ngOnDestroy(){this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&ce(this._trackedModal,"aria-owns",t),Oe(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;ce(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next())}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,n=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&n&&!se(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let m=this.selected;r.onKeydown(e);let d=this.selected;d&&m!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,n=i===40||i===38,r=t.isTyping();if(n&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!se(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let m=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(m?d.select():d.deselect())})}else{let m=t.activeItemIndex;t.onKeydown(e),this._multiple&&n&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==m&&t.activeItem._selectViaInteraction()}}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe(ye(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return i.value!=null&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof he?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new xe(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=N(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(S(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),N(...this.options.map(t=>t._stateChanges)).pipe(S(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=(e?e+" ":"")+this._valueId;return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}};a.\u0275fac=function(t){return new(t||a)(s(qe),s(X),s(Ie),s(Re),s(Q),s(Ee,8),s(nt,8),s(rt,8),s(st,8),s(ot,10),z("tabindex"),s(bt),s(De),s(Gt,8))},a.\u0275cmp=O({type:a,selectors:[["mat-select"]],contentQueries:function(t,i,n){if(t&1&&(P(n,jt,5),P(n,je,5),P(n,Pe,5)),t&2){let r;k(r=C())&&(i.customTrigger=r.first),k(r=C())&&(i.options=r),k(r=C())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&(F(wt,5),F(Ot,5),F(ge,5)),t&2){let n;k(n=C())&&(i.trigger=n.first),k(n=C())&&(i.panel=n.first),k(n=C())&&(i._overlayDir=n.first)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:19,hostBindings:function(t,i){t&1&&b("keydown",function(r){return i._handleKeydown(r)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(T("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),K("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple))},inputs:{userAriaDescribedBy:[c.None,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[c.HasDecoratorInputTransform,"disabled","disabled",f],disableRipple:[c.HasDecoratorInputTransform,"disableRipple","disableRipple",f],tabIndex:[c.HasDecoratorInputTransform,"tabIndex","tabIndex",e=>e==null?0:le(e)],hideSingleSelectionIndicator:[c.HasDecoratorInputTransform,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",f],placeholder:"placeholder",required:[c.HasDecoratorInputTransform,"required","required",f],multiple:[c.HasDecoratorInputTransform,"multiple","multiple",f],disableOptionCentering:[c.HasDecoratorInputTransform,"disableOptionCentering","disableOptionCentering",f],compareWith:"compareWith",value:"value",ariaLabel:[c.None,"aria-label","ariaLabel"],ariaLabelledby:[c.None,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[c.HasDecoratorInputTransform,"typeaheadDebounceInterval","typeaheadDebounceInterval",le],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],standalone:!0,features:[re([{provide:lt,useExisting:a},{provide:Ge,useExisting:a}]),q,Me,R],ngContentSelectors:Dt,decls:11,vars:8,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"backdropClick","attach","detach","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",3,"keydown","ngClass"]],template:function(t,i){if(t&1){let n=L();U(xt),u(0,"div",2,0),b("click",function(){return v(n),y(i.open())}),u(3,"div",3),D(4,At,2,1,"span",4)(5,Rt,3,1),g(),u(6,"div",5)(7,"div",6),Se(),u(8,"svg",7),E(9,"path",8),g()()()(),D(10,Vt,3,9,"ng-template",9),b("backdropClick",function(){return v(n),y(i.close())})("attach",function(){return v(n),y(i._onAttached())})("detach",function(){return v(n),y(i.close())})}if(t&2){let n=Y(1);h(3),T("id",i._valueId),h(),A(4,i.empty?4:5),h(6),M("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||n)("cdkConnectedOverlayOpen",i.panelOpen)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)}},dependencies:[he,ge,we],styles:['.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color);font-family:var(--mat-select-trigger-text-font);line-height:var(--mat-select-trigger-text-line-height);font-size:var(--mat-select-trigger-text-size);font-weight:var(--mat-select-trigger-text-weight);letter-spacing:var(--mat-select-trigger-text-tracking)}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color)}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color)}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color)}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}div.mat-mdc-select-panel .mat-mdc-option{--mdc-list-list-item-container-color: var(--mat-select-panel-background-color)}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform)}'],encapsulation:2,data:{animation:[Bt.transformPanel]},changeDetection:0});let o=a;return o})();var Oi=(()=>{let a=class a{};a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=W({type:a}),a.\u0275inj=H({providers:[Pt],imports:[$,Ue,de,V,Ke,ct,de,V]});let o=a;return o})();var Vi=(()=>{let a=class a{constructor(e,t){this.data=e,this.dialogRef=t,this.title=e.title}onCancelClick(){this.dialogRef.close(!1)}onOkClick(){this.dialogRef.close(!0)}};a.\u0275fac=function(t){return new(t||a)(s(Je),s(Ze))},a.\u0275cmp=O({type:a,selectors:[["app-generic-delete-dialog"]],standalone:!0,features:[R],decls:7,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-actions",""],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","primary",3,"click"]],template:function(t,i){t&1&&(u(0,"h1",0),w(1),g(),u(2,"div",1)(3,"button",2),b("click",function(){return i.onCancelClick()}),w(4,"Cancel"),g(),u(5,"button",3),b("click",function(){return i.onOkClick()}),w(6,"Ok"),g()()),t&2&&(h(),j(i.title))},dependencies:[$,it,et,tt,ze,We]});let o=a;return o})();var Nt=["button"],Ht=["*"];function Wt(o,a){if(o&1&&E(0,"mat-pseudo-checkbox",3),o&2){let l=_();M("disabled",l.disabled)}}function zt(o,a){if(o&1&&E(0,"mat-pseudo-checkbox",3),o&2){let l=_();M("disabled",l.disabled)}}var Qt=new I("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:qt});function qt(){return{hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1}}var Kt=new I("MatButtonToggleGroup");var Ut=0,fe=class{constructor(a,l){this.source=a,this.value=l}};var Yt=(()=>{let a=class a{get buttonId(){return`${this.id}-button`}get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}constructor(e,t,i,n,r,m){this._changeDetectorRef=t,this._elementRef=i,this._focusMonitor=n,this._checked=!1,this.ariaLabelledby=null,this._disabled=!1,this.change=new x;let d=Number(r);this.tabIndex=d||d===0?d:null,this.buttonToggleGroup=e,this.appearance=m&&m.appearance?m.appearance:"standard"}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||`mat-button-toggle-${Ut++}`,e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){let e=this._isSingleSelector()?!0:!this._checked;e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.change.emit(new fe(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this._isSingleSelector()?this.buttonToggleGroup.name:this.name||null}_isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}};a.\u0275fac=function(t){return new(t||a)(s(Kt,8),s(X),s(Q),s(Ae),z("tabindex"),s(Qt,8))},a.\u0275cmp=O({type:a,selectors:[["mat-button-toggle"]],viewQuery:function(t,i){if(t&1&&F(Nt,5),t&2){let n;k(n=C())&&(i._buttonElement=n.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:12,hostBindings:function(t,i){t&1&&b("focus",function(){return i.focus()}),t&2&&(T("aria-label",null)("aria-labelledby",null)("id",i.id)("name",null),K("mat-button-toggle-standalone",!i.buttonToggleGroup)("mat-button-toggle-checked",i.checked)("mat-button-toggle-disabled",i.disabled)("mat-button-toggle-appearance-standard",i.appearance==="standard"))},inputs:{ariaLabel:[c.None,"aria-label","ariaLabel"],ariaLabelledby:[c.None,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[c.HasDecoratorInputTransform,"disableRipple","disableRipple",f],appearance:"appearance",checked:[c.HasDecoratorInputTransform,"checked","checked",f],disabled:[c.HasDecoratorInputTransform,"disabled","disabled",f]},outputs:{change:"change"},exportAs:["matButtonToggle"],standalone:!0,features:[q,R],ngContentSelectors:Ht,decls:8,vars:11,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-label-content"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){if(t&1){let n=L();U(),u(0,"button",1,0),b("click",function(){return v(n),y(i._onButtonClick())}),u(2,"span",2),D(3,Wt,1,1,"mat-pseudo-checkbox",3)(4,zt,1,1,"mat-pseudo-checkbox",3),G(5),g()(),E(6,"span",4)(7,"span",5)}if(t&2){let n=Y(1);M("id",i.buttonId)("disabled",i.disabled||null),T("tabindex",i.disabled?-1:i.tabIndex)("aria-pressed",i.checked)("name",i._getButtonName())("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby),h(3),A(3,i.buttonToggleGroup&&i.checked&&!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator?3:-1),h(),A(4,i.buttonToggleGroup&&i.checked&&i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator?4:-1),h(3),M("matRippleTrigger",n)("matRippleDisabled",i.disableRipple||i.disabled)}},dependencies:[Ve,Le],styles:[".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape);border:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-standard-button-toggle-selected-state-text-color )}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-legacy-button-toggle-selected-state-text-color )}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-legacy-button-toggle-disabled-state-text-color )}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color);background-color:var(--mat-standard-button-toggle-background-color);font-family:var(--mat-standard-button-toggle-label-text-font);font-size:var(--mat-standard-button-toggle-label-text-size);line-height:var(--mat-standard-button-toggle-label-text-line-height);font-weight:var(--mat-standard-button-toggle-label-text-weight);letter-spacing:var(--mat-standard-button-toggle-label-text-tracking)}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color);background-color:var(--mat-standard-button-toggle-selected-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-standard-button-toggle-disabled-selected-state-text-color )}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color)}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity)}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity)}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape);border-bottom-right-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape);border-bottom-left-radius:var(--mat-standard-button-toggle-shape)}"],encapsulation:2,changeDetection:0});let o=a;return o})(),Zi=(()=>{let a=class a{};a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=W({type:a}),a.\u0275inj=H({imports:[V,Be,Yt,V]});let o=a;return o})();export{wi as a,Oi as b,Zi as c,Vi as d};
