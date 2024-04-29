import{$b as ue,Aa as W,Ba as ae,C as ee,D as te,Db as he,H as ie,J as F,Mb as k,N as _,O as E,P as R,Pb as w,Q as l,Qb as de,R as ne,Rb as I,Ta as U,U as P,Ua as H,V as j,W as y,X as re,ca as se,d as A,e as V,ea as D,f as Y,fa as x,g as p,hb as $,ja as S,l as f,la as u,m as q,o as v,pb as ce,pc as fe,qc as Z,r as Q,rb as C,s as L,sa as T,tc as G,u as K,v as N,va as B,w as X,xa as oe,y as J,zb as le}from"./chunk-PQW5ROTZ.js";var Re=["*"],O;function ye(){if(O===void 0&&(O=null,typeof window<"u")){let s=window;s.trustedTypes!==void 0&&(O=s.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return O}function b(s){return ye()?.createHTML(s)||s}function ge(s){return Error(`Unable to find icon with the name "${s}"`)}function be(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}function me(s){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${s}".`)}function _e(s){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${s}".`)}var g=class{constructor(n,c,e){this.url=n,this.svgText=c,this.options=e}},Fe=(()=>{let n=class n{constructor(e,t,i,r){this._httpClient=e,this._sanitizer=t,this._errorHandler=r,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=i}addSvgIcon(e,t,i){return this.addSvgIconInNamespace("",e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace("",e,t,i)}addSvgIconInNamespace(e,t,i,r){return this._addSvgIconConfig(e,t,new g(i,null,r))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,r){let o=this._sanitizer.sanitize(S.HTML,i);if(!o)throw _e(i);let a=b(o);return this._addSvgIconConfig(e,t,new g("",a,r))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new g(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let r=this._sanitizer.sanitize(S.HTML,t);if(!r)throw _e(t);let o=b(r);return this._addSvgIconSetConfig(e,new g("",o,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(S.RESOURCE_URL,e);if(!t)throw me(e);let i=this._cachedIconsByUrl.get(t);return i?f(z(i)):this._loadSvgIconFromConfig(new g(e,null)).pipe(F(r=>this._cachedIconsByUrl.set(t,r)),v(r=>z(r)))}getNamedSvgIcon(e,t=""){let i=pe(t,e),r=this._svgIconConfigs.get(i);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(t,e),r)return this._svgIconConfigs.set(i,r),this._getSvgFromConfig(r);let o=this._iconSetConfigs.get(t);return o?this._getSvgFromIconSetConfigs(e,o):q(ge(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?f(z(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(v(t=>z(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return f(i);let r=t.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(X(a=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(S.RESOURCE_URL,o.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(d)),f(null)})));return Q(r).pipe(v(()=>{let o=this._extractIconWithNameFromAnySet(e,t);if(!o)throw ge(e);return o}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let r=t[i];if(r.svgText&&r.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(r),a=this._extractSvgIconFromSet(o,e,r.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(F(t=>e.svgText=t),v(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?f(null):this._fetchIcon(e).pipe(F(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let r=e.querySelector(`[id="${t}"]`);if(!r)return null;let o=r.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,i);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),i);let a=this._svgElementFromString(b("<svg></svg>"));return a.appendChild(o),this._setSvgAttributes(a,i)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let i=t.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let t=this._svgElementFromString(b("<svg></svg>")),i=e.attributes;for(let r=0;r<i.length;r++){let{name:o,value:a}=i[r];o!=="id"&&t.setAttribute(o,a)}for(let r=0;r<e.childNodes.length;r++)e.childNodes[r].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[r].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,r=i?.withCredentials??!1;if(!this._httpClient)throw be();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let o=this._sanitizer.sanitize(S.RESOURCE_URL,t);if(!o)throw me(t);let a=this._inProgressUrlFetches.get(o);if(a)return a;let h=this._httpClient.get(o,{responseType:"text",withCredentials:r}).pipe(v(d=>b(d)),ee(()=>this._inProgressUrlFetches.delete(o)),te());return this._inProgressUrlFetches.set(o,h),h}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set(pe(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let r=this._resolvers[i](t,e);if(r)return De(r)?new g(r.url,null,r.options):new g(r,null)}}};n.\u0275fac=function(t){return new(t||n)(l(le,8),l(he),l(C,8),l(D))},n.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"});let s=n;return s})();function z(s){return s.cloneNode(!0)}function pe(s,n){return s+":"+n}function De(s){return!!(s.url&&s.options)}var xe=new R("MAT_ICON_DEFAULT_OPTIONS"),Te=new R("mat-icon-location",{providedIn:"root",factory:ke});function ke(){let s=ne(C),n=s?s.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}var Se=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Oe=Se.map(s=>`[${s}]`).join(", "),ze=/^url\(['"]?#(.*?)['"]?\)$/,tt=(()=>{let n=class n{get color(){return this._color||this._defaultColor}set color(e){this._color=e}get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}constructor(e,t,i,r,o,a){this._elementRef=e,this._iconRegistry=t,this._location=r,this._errorHandler=o,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=A.EMPTY,a&&(a.color&&(this.color=this._defaultColor=a.color),a.fontSet&&(this.fontSet=a.fontSet)),i||e.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,r)=>{i.forEach(o=>{r.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Oe),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<t.length;r++)Se.forEach(o=>{let a=t[r],h=a.getAttribute(o),d=h?h.match(ze):null;if(d){let m=i.get(a);m||(m=[],i.set(a,m)),m.push({name:o,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(J(1)).subscribe(r=>this._setSvgElement(r),r=>{let o=`Error retrieving icon ${t}:${i}! ${r.message}`;this._errorHandler.handleError(new Error(o))})}}};n.\u0275fac=function(t){return new(t||n)(u(x),u(Fe),se("aria-hidden"),u(Te),u(D),u(xe,8))},n.\u0275cmp=j({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,i){t&2&&(oe("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),ae(i.color?"mat-"+i.color:""),W("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[P.HasDecoratorInputTransform,"inline","inline",ce],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[B,$],ngContentSelectors:Re,decls:1,vars:0,template:function(t,i){t&1&&(U(),H(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0});let s=n;return s})(),it=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=y({type:n}),n.\u0275inj=E({imports:[G,G]});let s=n;return s})();var Ce=class{};function at(s){return s&&typeof s.connect=="function"&&!(s instanceof Y)}var M=function(s){return s[s.REPLACED=0]="REPLACED",s[s.INSERTED=1]="INSERTED",s[s.MOVED=2]="MOVED",s[s.REMOVED=3]="REMOVED",s}(M||{}),ct=new R("_ViewRepeater"),we=class{applyChanges(n,c,e,t,i){n.forEachOperation((r,o,a)=>{let h,d;if(r.previousIndex==null){let m=e(r,o,a);h=c.createEmbeddedView(m.templateRef,m.context,m.index),d=M.INSERTED}else a==null?(c.remove(o),d=M.REMOVED):(h=c.get(o),c.move(h,a),d=M.MOVED);i&&i({context:h?.context,operation:d,record:r})})}detach(){}};var Ie=class{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(n=!1,c,e=!0,t){this._multiple=n,this._emitChanges=e,this.compareWith=t,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new p,c&&c.length&&(n?c.forEach(i=>this._markSelected(i)):this._markSelected(c[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(e=>this._markSelected(e));let c=this._hasQueuedChanges();return this._emitChangeEvent(),c}deselect(...n){this._verifyValueAssignment(n),n.forEach(e=>this._unmarkSelected(e));let c=this._hasQueuedChanges();return this._emitChangeEvent(),c}setSelection(...n){this._verifyValueAssignment(n);let c=this.selected,e=new Set(n);n.forEach(i=>this._markSelected(i)),c.filter(i=>!e.has(this._getConcreteValue(i,e))).forEach(i=>this._unmarkSelected(i));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let c=this._hasQueuedChanges();return n&&this._emitChangeEvent(),c}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,c){if(this.compareWith){c=c??this._selection;for(let e of c)if(this.compareWith(n,e))return e;return n}else return n}};var lt=(()=>{let n=class n{constructor(){this._listeners=[]}notify(e,t){for(let i of this._listeners)i(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"});let s=n;return s})();var Ae=20,Ve=(()=>{let n=class n{constructor(e,t,i){this._ngZone=e,this._platform=t,this._scrolled=new p,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=i}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Ae){return this._platform.isBrowser?new V(t=>{this._globalSubscription||this._addGlobalListener();let i=e>0?this._scrolled.pipe(N(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):f()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(K(r=>!r||i.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((i,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let i=ue(t),r=e.getElementRef().nativeElement;do if(i==r)return!0;while(i=i.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return L(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}};n.\u0275fac=function(t){return new(t||n)(l(T),l(k),l(C,8))},n.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"});let s=n;return s})(),Wt=(()=>{let n=class n{constructor(e,t,i,r){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=i,this.dir=r,this._destroyed=new p,this._elementScrolled=new V(o=>this.ngZone.runOutsideAngular(()=>L(this.elementRef.nativeElement,"scroll").pipe(ie(this._destroyed)).subscribe(o)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=i?e.end:e.start),e.right==null&&(e.right=i?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),i&&I()!=w.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),I()==w.INVERTED?e.left=e.right:I()==w.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;de()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",i="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let o=this.dir&&this.dir.value=="rtl";return e=="start"?e=o?i:t:e=="end"&&(e=o?t:i),o&&I()==w.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:o&&I()==w.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}};n.\u0275fac=function(t){return new(t||n)(u(x),u(Ve),u(T),u(fe,8))},n.\u0275dir=re({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0});let s=n;return s})(),Le=20,Ut=(()=>{let n=class n{constructor(e,t,i){this._platform=e,this._change=new p,this._changeListener=r=>{this._change.next(r)},this._document=i,t.runOutsideAngular(()=>{if(e.isBrowser){let r=this._getWindow();r.addEventListener("resize",this._changeListener),r.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),i=e.documentElement,r=i.getBoundingClientRect(),o=-r.top||e.body.scrollTop||t.scrollY||i.scrollTop||0,a=-r.left||e.body.scrollLeft||t.scrollX||i.scrollLeft||0;return{top:o,left:a}}change(e=Le){return e>0?this._change.pipe(N(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}};n.\u0275fac=function(t){return new(t||n)(l(k),l(T),l(C,8))},n.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"});let s=n;return s})();var Ee=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=y({type:n}),n.\u0275inj=E({});let s=n;return s})(),Ht=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=y({type:n}),n.\u0275inj=E({imports:[Z,Ee,Z,Ee]});let s=n;return s})();export{Ce as a,at as b,M as c,ct as d,we as e,Ie as f,lt as g,Ve as h,Wt as i,Ut as j,Ee as k,Ht as l,tt as m,it as n};
