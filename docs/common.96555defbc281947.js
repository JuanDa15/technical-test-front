"use strict";(self.webpackChunktechnical_test_front=self.webpackChunktechnical_test_front||[]).push([[592],{2492:(O,h,a)=>{a.r(h),a.d(h,{HotelModule:()=>y});var e=a(6814),u=a(3057),n=a(4946),_=a(5516),g=a(9862);let m=(()=>{class o{get hotel$(){return this._hotel.asReadonly()}constructor(i){this._http=i,this._URL=`${_.N.API}api/hotels`,this._hotel=(0,n.tdS)(null)}getHotel(i){this._http.get(`${this._URL}/${i}`).subscribe({next:c=>{this._hotel.set(c.data)}})}}return o.\u0275fac=function(i){return new(i||o)(n.LFG(g.eN))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function l(o,p){if(1&o&&(n.TgZ(0,"p"),n._uU(1,"Tipo: "),n.TgZ(2,"b"),n._uU(3),n.qZA()()),2&o){const i=n.oxw();n.xp6(3),n.Oqu(i.roomTypes[i.room.type])}}function d(o,p){if(1&o&&(n.TgZ(0,"p"),n._uU(1,"Valor (noche): "),n.TgZ(2,"b"),n._uU(3),n.ALo(4,"currency"),n.qZA()()),2&o){const i=n.oxw();n.xp6(3),n.Oqu(n.gM2(4,1,i.calculateTaxes(i.room),"COP","symbol","0.0-0"))}}function r(o,p){if(1&o&&(n.TgZ(0,"a",4),n.O4$(),n.TgZ(1,"svg",5),n._UZ(2,"path",6),n.qZA(),n._uU(3," Reservar "),n.qZA()),2&o){const i=n.oxw();n.hYB("routerLink","/reservation/create/",i.hotelId,"/",i.room._id,"")}}function t(o,p){1&o&&(n.TgZ(0,"span")(1,"b"),n._uU(2,"Reservada"),n.qZA()())}const s=function(o,p,i){return{reserved:o,"not-reserved":p,deactivated:i}};let f=(()=>{class o{constructor(){this.roomTypes={Suite:"Suite",JuniorSuite:"Junior suite",GranSuite:"Gran suite",Individual:"Individual",Double:"Doble",Quadruple:"Cuadruple"}}calculateTaxes(i){const c=Number(i.baseCost);return c+c*Number(i.taxes)/100}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["room"]],inputs:{room:"room",hotelId:"hotelId"},decls:7,vars:11,consts:[[1,"room",3,"ngClass"],[4,"ngIf"],[1,"actions"],["class","actions-btn",3,"routerLink",4,"ngIf"],[1,"actions-btn",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","width","24px"],["stroke-linecap","round","stroke-linejoin","round","d","M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"]],template:function(i,c){1&i&&(n.TgZ(0,"div",0),n._uU(1),n.YNc(2,l,4,1,"p",1),n.YNc(3,d,5,6,"p",1),n.TgZ(4,"div",2),n.YNc(5,r,4,2,"a",3),n.YNc(6,t,3,0,"span",1),n.qZA()()),2&i&&(n.Q6J("ngClass",n.kEZ(7,s,c.room.reserved,!c.room.reserved,!c.room.active)),n.xp6(1),n.AsE(" Habitaci\xf3n ",c.room.location.floor," - ",c.room.location.room," "),n.xp6(1),n.Q6J("ngIf",c.room.type),n.xp6(1),n.Q6J("ngIf",c.room.baseCost),n.xp6(2),n.Q6J("ngIf",!c.room.reserved),n.xp6(1),n.Q6J("ngIf",c.room.reserved))},dependencies:[e.mk,e.O5,u.rH,e.H9],styles:[".room[_ngcontent-%COMP%]{padding:1rem;border-radius:.5rem}.reserved[_ngcontent-%COMP%]{background-color:var(--error)}.not-reserved[_ngcontent-%COMP%]{background-color:var(--success)}.deactivated[_ngcontent-%COMP%]{background-color:#78909c}.actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;margin-top:1rem}.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;text-decoration:none;color:var(--text);cursor:pointer;border-radius:.2rem;padding:.2rem .4rem;transition:background-color .3s ease,color .3s ease}.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:var(--primary);color:var(--text)}"]}),o})();function v(o,p){if(1&o&&n._UZ(0,"room",7),2&o){const i=p.$implicit,c=n.oxw();let C;n.Q6J("room",i)("hotelId",null==(C=c.hotelDetailService.hotel$())?null:C._id)}}const P=[{path:"detail/:id",component:(()=>{class o{constructor(){this.ar=(0,n.f3M)(u.gz),this.hotelDetailService=(0,n.f3M)(m)}ngOnInit(){const{id:i}=this.ar.snapshot.params;this.hotelDetailService.getHotel(i)}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-detail"]],decls:19,vars:5,consts:[[1,"content-container"],[1,"indicators"],[1,"not-reserved"],[1,"reserved"],[1,"deactivated"],[1,"rooms"],[3,"room","hotelId",4,"ngFor","ngForOf"],[3,"room","hotelId"]],template:function(i,c){if(1&i&&(n.TgZ(0,"section",0)(1,"h1"),n._uU(2),n.qZA(),n.TgZ(3,"h3"),n._uU(4),n.qZA(),n.TgZ(5,"p"),n._uU(6),n.qZA(),n.TgZ(7,"div",1)(8,"p"),n._UZ(9,"span",2),n._uU(10,"Disponible"),n.qZA(),n.TgZ(11,"p"),n._UZ(12,"span",3),n._uU(13,"Ocupado"),n.qZA(),n.TgZ(14,"p"),n._UZ(15,"span",4),n._uU(16,"Deshabilitada"),n.qZA()(),n.TgZ(17,"div",5),n.YNc(18,v,1,2,"room",6),n.qZA()()),2&i){let C,b,M,T;n.xp6(2),n.hij("Hotel ",null==(C=c.hotelDetailService.hotel$())?null:C.name,""),n.xp6(2),n.AsE("",null==(b=c.hotelDetailService.hotel$())?null:b.location,", ",null==(b=c.hotelDetailService.hotel$())?null:b.address,""),n.xp6(2),n.Oqu(null==(M=c.hotelDetailService.hotel$())?null:M.email),n.xp6(12),n.Q6J("ngForOf",null==(T=c.hotelDetailService.hotel$())?null:T.rooms)}},dependencies:[e.sg,f],styles:[".rooms[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:1rem}.reserved[_ngcontent-%COMP%]{background-color:var(--error)}.not-reserved[_ngcontent-%COMP%]{background-color:var(--success)}.deactivated[_ngcontent-%COMP%]{background-color:#78909c}.indicators[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:1rem;margin:2rem 0}.indicators[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:.5rem}.indicators[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:24px;height:24px;border-radius:.2rem}"]}),o})()}];let I=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.Bz.forChild(P),u.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[e.ez,I]}),o})()},868:(O,h,a)=>{a.d(h,{G:()=>l});var e=a(4946),u=a(95),n=a(9098),_=a(6814),g=a(7332);function m(d,r){if(1&d&&(e.TgZ(0,"p",4),e._uU(1),e.qZA()),2&d){const t=e.oxw();e.xp6(1),e.hij(" ",t.formHelper.getControlErrors(t.controlInstance)," ")}}let l=(()=>{class d{constructor(t,s,f){this.formHelper=t,this._fb=s,this._destroyRef=f,this.onChange=v=>v,this.onTouch=()=>{},this.onValidatorChange=()=>{},this.label="",this.id="",this._subscriptions=[],this.controlInstance=null,this.form=this._initializeForm(),this._subscribeToValueChanges(),this._destroyRef.onDestroy(()=>{this._subscriptions.forEach(v=>v.unsubscribe())})}writeValue(t){null!==t&&(this.form.setValue(t),this.onChange(t))}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}setDisabledState(t){t?this.form.disable():this.form.enable()}validate(t){return this.controlInstance=t,null}registerOnValidatorChange(t){this.onValidatorChange=t}_initializeForm(){return this._fb.control(null,{updateOn:"change"})}_subscribeToValueChanges(){const t=this.form.valueChanges.subscribe({next:s=>{null!==s&&(this.onChange(s),this.onValidatorChange(),this.onTouch())}});this._subscriptions.push(t)}markAsTouch(){this.controlInstance?.markAsDirty(),this.onTouch(),this.onValidatorChange()}}return d.\u0275fac=function(t){return new(t||d)(e.Y36(n.k),e.Y36(u.qu),e.Y36(e.ktI))},d.\u0275cmp=e.Xpm({type:d,selectors:[["c-email-input"]],inputs:{label:"label",id:"id",name:"name"},features:[e._Bn([{provide:u.JU,useExisting:(0,e.Gpc)(()=>d),multi:!0},{provide:u.Cf,useExisting:(0,e.Gpc)(()=>d),multi:!0}])],decls:5,vars:8,consts:[[1,"input-container"],[1,"input-label"],["type","email","NoWhiteSpaces","","autocomplete","off",1,"input",3,"name","formControl","blur"],["class","input-error",4,"ngIf"],[1,"input-error"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2),e.qZA(),e.TgZ(3,"input",2),e.NdJ("blur",function(){return s.markAsTouch()}),e.qZA(),e.YNc(4,m,2,1,"p",3),e.qZA()),2&t&&(e.ekj("error",null!==s.controlInstance&&s.formHelper.checkControlErrors(s.controlInstance)),e.xp6(1),e.uIk("for",s.id?s.id:null),e.xp6(1),e.Oqu(s.label),e.xp6(1),e.s9C("name",s.name?s.name:null),e.Q6J("formControl",s.form),e.uIk("id",s.id?s.id:null),e.xp6(1),e.Q6J("ngIf",null!==s.controlInstance&&s.formHelper.checkControlErrors(s.controlInstance)))},dependencies:[_.O5,u.Fj,u.JJ,u.oH,g.q],styles:[".input-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.input-container[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%]{font-size:.9rem}.input-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{background:var(--bg);border:none;padding:.4rem .6rem;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:1px solid var(--primary);color:var(--text);border-radius:.3rem;transition:border .3s ease}.input-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus{outline:none;border-radius:.3rem;border:1px solid var(--primary)}.input-container.error[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%]{color:var(--error)}.input-container.error[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid var(--error)}.input-container.error[_ngcontent-%COMP%]   .input-error[_ngcontent-%COMP%]{font-size:.9rem;color:var(--error)}"]}),d})()},2331:(O,h,a)=>{a.d(h,{D:()=>m});var e=a(4946),u=a(95),n=a(9098),_=a(6814);function g(l,d){if(1&l&&(e.TgZ(0,"p",4),e._uU(1),e.qZA()),2&l){const r=e.oxw();e.xp6(1),e.hij(" ",r.formHelper.getControlErrors(r.controlInstance)," ")}}let m=(()=>{class l{constructor(r,t,s){this.formHelper=r,this._fb=t,this._destroyRef=s,this.onChange=f=>f,this.onTouch=()=>{},this.onValidatorChange=()=>{},this.label="",this.id="",this.inputType="text",this._subscriptions=[],this.controlInstance=null,this._destroyRef.onDestroy(()=>{this._subscriptions.forEach(f=>f.unsubscribe())}),this.form=this._initializeForm(),this._subscribeToValueChanges()}set type(r){this.inputType=r}writeValue(r){null!==r&&(this.form.setValue(r),this.onChange(r))}registerOnChange(r){this.onChange=r}registerOnTouched(r){this.onTouch=r}setDisabledState(r){r?this.form.disable():this.form.enable()}validate(r){return this.controlInstance=r,null}registerOnValidatorChange(r){this.onValidatorChange=r}_initializeForm(){return this._fb.control(null,{updateOn:"change"})}_subscribeToValueChanges(){const r=this.form.valueChanges.subscribe({next:t=>{null!==t&&(this.onChange(t),this.onValidatorChange(),this.onTouch())}});this._subscriptions.push(r)}markAsTouch(){this.controlInstance?.markAsDirty(),this.onTouch(),this.onValidatorChange()}}return l.\u0275fac=function(r){return new(r||l)(e.Y36(n.k),e.Y36(u.qu),e.Y36(e.ktI))},l.\u0275cmp=e.Xpm({type:l,selectors:[["c-input"]],inputs:{label:"label",id:"id",name:"name",type:"type"},features:[e._Bn([{provide:u.JU,useExisting:(0,e.Gpc)(()=>l),multi:!0},{provide:u.Cf,useExisting:(0,e.Gpc)(()=>l),multi:!0}])],decls:5,vars:9,consts:[[1,"input-container"],[1,"input-label"],["autocomplete","off",1,"input",3,"type","name","formControl","blur"],["class","input-error",4,"ngIf"],[1,"input-error"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2),e.qZA(),e.TgZ(3,"input",2),e.NdJ("blur",function(){return t.markAsTouch()}),e.qZA(),e.YNc(4,g,2,1,"p",3),e.qZA()),2&r&&(e.ekj("error",null!==t.controlInstance&&t.formHelper.checkControlErrors(t.controlInstance)),e.xp6(1),e.uIk("for",t.id?t.id:null),e.xp6(1),e.Oqu(t.label),e.xp6(1),e.s9C("name",t.name?t.name:null),e.Q6J("type",t.inputType)("formControl",t.form),e.uIk("id",t.id?t.id:null),e.xp6(1),e.Q6J("ngIf",null!==t.controlInstance&&t.formHelper.checkControlErrors(t.controlInstance)))},dependencies:[_.O5,u.Fj,u.JJ,u.oH],styles:[".input-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.input-container[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%]{font-size:.9rem}.input-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{background:var(--bg);border:none;padding:.4rem .6rem;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:1px solid var(--primary);color:var(--text);border-radius:.3rem;transition:border .3s ease}.input-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus{outline:none;border-radius:.3rem;border:1px solid var(--primary)}.input-container.error[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%]{color:var(--error)}.input-container.error[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid var(--error)}.input-container.error[_ngcontent-%COMP%]   .input-error[_ngcontent-%COMP%]{font-size:.9rem;color:var(--error)}"]}),l})()},7332:(O,h,a)=>{a.d(h,{q:()=>n});var e=a(4946),u=a(95);let n=(()=>{class _{constructor(m,l){this._el=m,this._control=l}onSpacePressed(m){m.preventDefault()}onInputChange(m){const l=m.data?.charCodeAt(m.data.length-1);l&&32===l&&this._control&&this._control?.control?.setValue(this._el.nativeElement.value.trim())}}return _.\u0275fac=function(m){return new(m||_)(e.Y36(e.SBq),e.Y36(u.a5))},_.\u0275dir=e.lG2({type:_,selectors:[["input","NoWhiteSpaces",""]],hostBindings:function(m,l){1&m&&e.NdJ("keydown.space",function(r){return l.onSpacePressed(r)})("input",function(r){return l.onInputChange(r)})}}),_})()}}]);