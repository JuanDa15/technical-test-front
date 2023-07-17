"use strict";(self.webpackChunktechnical_test_front=self.webpackChunktechnical_test_front||[]).push([[845,516],{7845:(y,_,l)=>{l.r(_),l.d(_,{ReservationModule:()=>U});var t=l(6814),p=l(3057),e=l(4946),s=l(95),u=l(5516),d=l(9862);let h=(()=>{class o{constructor(n){this._http=n,this._URL=`${u.N.API}api/reservations`}createReservation(n){return this._http.post(this._URL,n)}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(d.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var m=l(4942),C=l(2331),r=l(4929),i=l(9098);function g(o,c){if(1&o&&(e.TgZ(0,"p",4),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.formHelper.getControlErrors(n.controlInstance)," ")}}let f=(()=>{class o{constructor(n,a,v){this.formHelper=n,this._fb=a,this._destroyRef=v,this.onChange=b=>b,this.onTouch=()=>{},this.onValidatorChange=()=>{},this.label="",this.id="",this.inputType="text",this.minValue=null,this.maxValue=null,this.stepValue=null,this._subscriptions=[],this.controlInstance=null,this.form=this._initializeForm(),this._subscribeToValueChanges(),this._destroyRef.onDestroy(()=>{this._subscriptions.forEach(b=>b.unsubscribe())})}set type(n){this.inputType=n}set maxLength(n){this.maxValue=n}set minLength(n){this.minValue=n}set step(n){this.stepValue=n}writeValue(n){null!==n&&(this.form.setValue(n),this.onChange(n))}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouch=n}setDisabledState(n){n?this.form.disable():this.form.enable()}validate(n){return this.controlInstance=n,null}registerOnValidatorChange(n){this.onValidatorChange=n}_initializeForm(){return this._fb.control(null,{updateOn:"change"})}_subscribeToValueChanges(){const n=this.form.valueChanges.subscribe({next:a=>{null!==a&&(this.onChange(a),this.onValidatorChange(),this.onTouch())}});this._subscriptions.push(n)}markAsTouch(){this.controlInstance?.markAsDirty(),this.onTouch(),this.onValidatorChange()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(i.k),e.Y36(s.qu),e.Y36(e.ktI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["c-date-input"]],inputs:{label:"label",id:"id",name:"name",type:"type",maxLength:"maxLength",minLength:"minLength",step:"step"},features:[e._Bn([{provide:s.JU,useExisting:(0,e.Gpc)(()=>o),multi:!0},{provide:s.Cf,useExisting:(0,e.Gpc)(()=>o),multi:!0}])],decls:5,vars:12,consts:[[1,"input-container"],[1,"input-label"],["autocomplete","off",1,"input",3,"formControl","type","id","name","blur"],["class","input-error",4,"ngIf"],[1,"input-error"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2),e.qZA(),e.TgZ(3,"input",2),e.NdJ("blur",function(){return a.markAsTouch()}),e.qZA(),e.YNc(4,g,2,1,"p",3),e.qZA()),2&n&&(e.ekj("error",null!==a.controlInstance&&a.formHelper.checkControlErrors(a.controlInstance)),e.xp6(1),e.uIk("for",a.id?a.id:null),e.xp6(1),e.Oqu(a.label),e.xp6(1),e.s9C("type",a.inputType),e.s9C("id",a.id?a.id:null),e.s9C("name",a.name?a.name:null),e.Q6J("formControl",a.form),e.uIk("max",a.maxValue?a.maxValue:null)("min",a.minValue?a.minValue:null)("step",a.stepValue?a.stepValue:null),e.xp6(1),e.Q6J("ngIf",null!==a.controlInstance&&a.formHelper.checkControlErrors(a.controlInstance)))},dependencies:[t.O5,s.Fj,s.JJ,s.oH],styles:[".input-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.input-container[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%]{font-size:.9rem}.input-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{background:var(--bg);border:none;padding:.4rem .6rem;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:1px solid var(--primary);color:var(--text);border-radius:.3rem;transition:border .3s ease}.input-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus{outline:none;border-radius:.3rem;border:1px solid var(--primary)}.input-container.error[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%]{color:var(--error)}.input-container.error[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid var(--error)}.input-container.error[_ngcontent-%COMP%]   .input-error[_ngcontent-%COMP%]{font-size:.9rem;color:var(--error)}"]}),o})();var O=l(868),T=l(9768);function M(o,c){if(1&o&&(e.TgZ(0,"option",11),e._uU(1),e.qZA()),2&o){const n=c.$implicit;e.Q6J("value",n.key),e.xp6(1),e.hij(" ",n.value," ")}}function I(o,c){if(1&o&&(e.TgZ(0,"option",11),e._uU(1),e.qZA()),2&o){const n=c.$implicit;e.Q6J("value",n.key),e.xp6(1),e.hij(" ",n.value," ")}}function P(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(n);const v=e.oxw();return e.KtG(v.onRemove.emit())}),e.O4$(),e.TgZ(1,"svg",13),e._UZ(2,"path",14),e.qZA()()}}let k=(()=>{class o{constructor(){this.isFirst=!1,this.onRemove=new e.vpe,this.DOCUMENT_TYPES={cc:"C\xe9dula de ciudadan\xeda",ce:"C\xe9dula de extranjer\xeda",passport:"Pasaporte",nit:"NIT"},this.genreDicc={M:"Masculino",F:"Femenino",O:"Otro"}}castToFormGroup(n){return n}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["traveler-form"]],inputs:{form:"form",isFirst:"isFirst"},outputs:{onRemove:"onRemove"},decls:14,vars:8,consts:[[1,"traveler-form",3,"formGroup"],[1,"grid"],["formControlName","name","label","Nombres*"],["formControlName","lastName","label","Apellidos*"],["label","Correo electr\xf3nico*","formControlName","email"],["formControlName","genre","label","G\xe9nero*"],[3,"value",4,"ngFor","ngForOf"],["formControlName","documentType","label","Tip\xf3 de documento*"],["formControlName","document","label","Documento"],["formControlName","phone","label","Tel\xe9fono"],["type","button","class","danger-button","style","margin-top: 1rem;",3,"click",4,"ngIf"],[3,"value"],["type","button",1,"danger-button",2,"margin-top","1rem",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","width","24"],["stroke-linecap","round","stroke-linejoin","round","d","M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"]],template:function(n,a){1&n&&(e.TgZ(0,"form",0)(1,"div",1),e._UZ(2,"c-input",2)(3,"c-input",3)(4,"c-email-input",4),e.TgZ(5,"c-select-input",5),e.YNc(6,M,2,2,"option",6),e.ALo(7,"keyvalue"),e.qZA(),e.TgZ(8,"c-select-input",7),e.YNc(9,I,2,2,"option",6),e.ALo(10,"keyvalue"),e.qZA(),e._UZ(11,"c-number-input",8)(12,"c-number-input",9),e.qZA(),e.YNc(13,P,3,0,"button",10),e.qZA()),2&n&&(e.Q6J("formGroup",a.castToFormGroup(a.form)),e.xp6(6),e.Q6J("ngForOf",e.lcZ(7,4,a.genreDicc)),e.xp6(3),e.Q6J("ngForOf",e.lcZ(10,6,a.DOCUMENT_TYPES)),e.xp6(4),e.Q6J("ngIf",!a.isFirst))},dependencies:[t.sg,t.O5,s._Y,s.YN,s.Kr,s.JJ,s.JL,s.sg,s.u,C.D,O.G,r.c,T.p,t.Nd],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:1rem}.traveler-form[_ngcontent-%COMP%]{padding:1rem;border:1px solid #37474F;border-radius:.5rem}.emergency[_ngcontent-%COMP%]{margin:1rem 0;padding:1rem;border:1px solid #37474F;border-radius:.5rem}.emergency[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:1rem}"]}),o})();function Z(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"div")(1,"traveler-form",12),e.NdJ("onRemove",function(){const b=e.CHM(n).index,L=e.oxw();return e.KtG(L.travelersArr.removeAt(b))}),e.qZA()()}if(2&o){const n=c.$implicit,a=c.first;e.xp6(1),e.Q6J("form",n)("isFirst",a)}}let F=(()=>{class o{constructor(){this.ar=(0,e.f3M)(p.gz),this.fb=(0,e.f3M)(s.qu),this.router=(0,e.f3M)(p.F0),this.reservationService=(0,e.f3M)(h),this.notifications=(0,e.f3M)(m.g),this.form=this.fb.group({startDate:["",s.kI.required],endDate:["",s.kI.required],travelers:this.fb.array([]),hotel:["",s.kI.required],room:["",s.kI.required],emergencyContact:this.fb.group({name:["",s.kI.required],phone:["",s.kI.required]})})}get travelersArr(){return this.form.get("travelers")}ngOnInit(){const{hotelId:n,roomId:a}=this.ar.snapshot.params;this.form.patchValue({hotel:n,room:a}),this.createTravelerForm()}createTravelerForm(){this.travelersArr.push(this.fb.group({name:["",s.kI.required],lastName:["",s.kI.required],email:["",s.kI.required],genre:["",s.kI.required],documentType:["",s.kI.required],document:["",s.kI.required],phone:["",s.kI.required]}))}save(){this.reservationService.createReservation(this.form.value).subscribe({next:()=>{this.notifications.create({severity:"success",summary:"Reserva creada",detail:"En unos minutos te llegara un correo con la informacion de tu reserva"}),this.router.navigate(["/"])}})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-create"]],decls:21,vars:2,consts:[[1,"content-container"],[1,"main-form",3,"formGroup","ngSubmit"],[1,"grid"],["type","date","formControlName","startDate","label","Desde*"],["type","date","formControlName","endDate","label","Hasta*"],["formGroupName","emergencyContact",1,"emergency"],["formControlName","name","label","Nombre*"],["formControlName","phone","label","Tel\xe9fono"],["formArrayName","travelers",1,"travelers"],["type","button",1,"primary-button",3,"click"],[4,"ngFor","ngForOf"],["type","submit",1,"primary-button"],[3,"form","isFirst","onRemove"]],template:function(n,a){1&n&&(e.TgZ(0,"section",0)(1,"h1"),e._uU(2,"Realizar reserva"),e.qZA(),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return a.save()}),e.TgZ(4,"div",2),e._UZ(5,"c-date-input",3)(6,"c-date-input",4),e.qZA(),e.TgZ(7,"form",5)(8,"h4"),e._uU(9,"Contacto de emergencia"),e.qZA(),e.TgZ(10,"div",2),e._UZ(11,"c-input",6)(12,"c-number-input",7),e.qZA()(),e.TgZ(13,"div",8)(14,"h3"),e._uU(15," Pasajeros "),e.TgZ(16,"button",9),e.NdJ("click",function(){return a.createTravelerForm()}),e._uU(17," Agregar pasajero "),e.qZA()(),e.YNc(18,Z,2,2,"div",10),e.qZA(),e.TgZ(19,"button",11),e._uU(20,"Reservar"),e.qZA()()()),2&n&&(e.xp6(3),e.Q6J("formGroup",a.form),e.xp6(15),e.Q6J("ngForOf",a.travelersArr.controls))},dependencies:[t.sg,s._Y,s.JJ,s.JL,s.sg,s.u,s.x0,s.CE,C.D,r.c,f,k],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:1rem}.main-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;margin-top:2rem}.travelers[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.travelers[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:.5rem;margin-bottom:2rem}.emergency[_ngcontent-%COMP%]{margin:1rem 0;padding:1rem;border:1px solid #37474F;border-radius:.5rem}.emergency[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:1rem}"]}),o})();var A=l(7398);let N=(()=>{class o{get reservations(){return this._reservations.asReadonly()}constructor(n){this._http=n,this._URL=`${u.N.API}api/reservations/byEmail`,this._reservations=(0,e.tdS)([])}checkReservation(n){return this._http.get(this._URL,{params:n}).pipe((0,A.U)(a=>(this._reservations.set(a.data),!0)))}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(d.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function D(o,c){if(1&o&&(e.TgZ(0,"li")(1,"p"),e._uU(2),e.ALo(3,"date"),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"a",5),e.O4$(),e.TgZ(6,"svg",6),e._UZ(7,"path",7)(8,"path",8),e.qZA()()()),2&o){const n=c.$implicit;e.xp6(2),e.HOy("",n.name," ",n.lastName,", ",e.xi3(3,5,n.reservation.startDate,"yyyy/MM/dd hh:mm a")," - ",e.xi3(4,8,n.reservation.endDate,"yyyy/MM/dd hh:mm a"),""),e.xp6(3),e.MGl("routerLink","/reservation/detail/",n.reservation._id,"")}}const J=[{path:"create/:hotelId/:roomId",component:F},{path:"check",component:(()=>{class o{constructor(){this.fb=(0,e.f3M)(s.qu),this.checkService=(0,e.f3M)(N),this.form=this.fb.group({email:["",[s.kI.email,s.kI.required]]})}check(){this.form.invalid?this.form.markAllAsTouched():this.checkService.checkReservation(this.form.value).subscribe({next:a=>{}})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-check"]],decls:9,vars:2,consts:[[1,"content-container"],[3,"formGroup","ngSubmit"],["label","Correo electr\xf3nico","formControlName","email"],["type","submit",1,"primary-button"],[4,"ngFor","ngForOf"],[3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","width","24"],["stroke-linecap","round","stroke-linejoin","round","d","M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"],["stroke-linecap","round","stroke-linejoin","round","d","M15 12a3 3 0 11-6 0 3 3 0 016 0z"]],template:function(n,a){1&n&&(e.TgZ(0,"section",0)(1,"h1"),e._uU(2,"Consulta tu reserva"),e.qZA(),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return a.check()}),e._UZ(4,"c-email-input",2),e.TgZ(5,"button",3),e._uU(6," Consultar "),e.qZA()(),e.TgZ(7,"ul"),e.YNc(8,D,9,11,"li",4),e.qZA()()),2&n&&(e.xp6(3),e.Q6J("formGroup",a.form),e.xp6(5),e.Q6J("ngForOf",a.checkService.reservations()))},dependencies:[t.sg,p.rH,s._Y,s.JJ,s.JL,s.sg,s.u,O.G,t.uU],styles:["h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}form[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:1rem}form[_ngcontent-%COMP%]   c-email-input[_ngcontent-%COMP%]{flex:1 1 auto}ul[_ngcontent-%COMP%]{list-style:none;margin-top:2rem}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;max-width:700px;margin:0 auto}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary)}"]}),o})()},{path:"detail/:id",component:l(164).J}];let V=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.Bz.forChild(J),p.Bz]}),o})();var R=l(8524);let U=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[t.ez,V,s.UX,R.m]}),o})()},4929:(y,_,l)=>{l.d(_,{c:()=>h});var t=l(4946),p=l(95),e=l(9098),s=l(6814);let u=(()=>{class m{constructor(r,i){this._el=r,this._control=i,this.allowDecimals=!1}onInputChange(r){const i=this._getCharCode(r);if(i){if(32===i)return void this._control?.control?.setValue(this._el.nativeElement.value.trim());if(i>=48&&i<=57||this.allowDecimals&&46===i)return;let g=this._el.nativeElement.value;g=g.slice(0,g.length-1),this._control?.control?.setValue(g)}}_getCharCode(r){return r.data?.charCodeAt(r.data.length-1)}}return m.\u0275fac=function(r){return new(r||m)(t.Y36(t.SBq),t.Y36(p.a5))},m.\u0275dir=t.lG2({type:m,selectors:[["","OnlyNumbers",""]],hostBindings:function(r,i){1&r&&t.NdJ("input",function(f){return i.onInputChange(f)})},inputs:{allowDecimals:"allowDecimals"}}),m})();function d(m,C){if(1&m&&(t.TgZ(0,"p",4),t._uU(1),t.qZA()),2&m){const r=t.oxw();t.xp6(1),t.hij(" ",r.formHelper.getControlErrors(r.controlInstance)," ")}}let h=(()=>{class m{constructor(r,i,g){this.formHelper=r,this._fb=i,this._destroyRef=g,this.onChange=f=>f,this.onTouch=()=>{},this.onValidatorChange=()=>{},this.id="",this.label="",this.allowDecimals=!1,this._subscriptions=[],this.controlInstance=null,this.form=this._initializeForm(),this._subscribeToValueChanges(),this._destroyRef.onDestroy(()=>{this._subscriptions.forEach(f=>f.unsubscribe())})}writeValue(r){null!==r&&(this.form.setValue(r),this.onChange(r))}registerOnChange(r){this.onChange=r}registerOnTouched(r){this.onTouch=r}setDisabledState(r){r?this.form.disable():this.form.enable()}validate(r){return this.controlInstance=r,null}registerOnValidatorChange(r){this.onValidatorChange=r}_initializeForm(){return this._fb.control(null,{updateOn:"change"})}_subscribeToValueChanges(){const r=this.form.valueChanges.subscribe({next:i=>{null!==i&&(this.onValidatorChange(),this.onTouch(),this.onChange(i.toString()))}});this._subscriptions.push(r)}markAsTouch(){this.controlInstance?.markAsDirty(),this.onTouch(),this.onValidatorChange()}avoidLetters(r){const i=r.clipboardData?.getData("text")||"";if(i&&i.match(/[a-zA-Z]+/))return r.target.value="",this.form.reset(),r.preventDefault(),void r.stopPropagation()}}return m.\u0275fac=function(r){return new(r||m)(t.Y36(e.k),t.Y36(p.qu),t.Y36(t.ktI))},m.\u0275cmp=t.Xpm({type:m,selectors:[["c-number-input"]],inputs:{id:"id",label:"label",name:"name",allowDecimals:"allowDecimals"},features:[t._Bn([{provide:p.JU,useExisting:(0,t.Gpc)(()=>m),multi:!0},{provide:p.Cf,useExisting:(0,t.Gpc)(()=>m),multi:!0}])],decls:5,vars:9,consts:[[1,"input-container"],[1,"input-label"],["type","number","OnlyNumbers","","autocomplete","off",1,"input",3,"formControl","name","allowDecimals","blur","paste"],["class","input-error",4,"ngIf"],[1,"input-error"]],template:function(r,i){1&r&&(t.TgZ(0,"div",0)(1,"label",1),t._uU(2),t.qZA(),t.TgZ(3,"input",2),t.NdJ("blur",function(){return i.markAsTouch()})("paste",function(f){return i.avoidLetters(f)}),t.qZA(),t.YNc(4,d,2,1,"p",3),t.qZA()),2&r&&(t.ekj("error",null!==i.controlInstance&&i.formHelper.checkControlErrors(i.controlInstance)),t.xp6(1),t.uIk("for",i.id?i.id:null),t.xp6(1),t.Oqu(i.label),t.xp6(1),t.s9C("name",i.name?i.name:null),t.Q6J("formControl",i.form)("allowDecimals",i.allowDecimals),t.uIk("id",i.id?i.id:null),t.xp6(1),t.Q6J("ngIf",null!==i.controlInstance&&i.formHelper.checkControlErrors(i.controlInstance)))},dependencies:[s.O5,p.Fj,p.wV,p.JJ,p.oH,u],styles:[".input-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.input-container[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%]{font-size:.9rem}.input-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{background:var(--bg);border:none;padding:.4rem .6rem;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:1px solid var(--primary);color:var(--text);border-radius:.3rem;transition:border .3s ease}.input-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus{outline:none;border-radius:.3rem;border:1px solid var(--primary)}.input-container.error[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%]{color:var(--error)}.input-container.error[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid var(--error)}.input-container.error[_ngcontent-%COMP%]   .input-error[_ngcontent-%COMP%]{font-size:.9rem;color:var(--error)}"]}),m})()},9768:(y,_,l)=>{l.d(_,{p:()=>h});var t=l(4946),p=l(95),e=l(9098),s=l(6814);function u(m,C){if(1&m&&(t.TgZ(0,"p",6),t._uU(1),t.qZA()),2&m){const r=t.oxw();t.xp6(1),t.hij(" ",r.formHelper.getControlErrors(r.controlInstance)," ")}}const d=["*"];let h=(()=>{class m{constructor(r,i,g){this.formHelper=r,this._fb=i,this._destroyRef=g,this.onChange=f=>f,this.onTouch=()=>{},this.onValidatorChange=()=>{},this.label="",this.id="",this._subscriptions=[],this.controlInstance=null,this.form=this._initializeForm(),this._subscribeToValueChanges(),this._destroyRef.onDestroy(()=>{this._subscriptions.forEach(f=>f.unsubscribe())})}writeValue(r){null!==r&&r.length>0&&(this.form.setValue(r),this.onChange(r))}registerOnChange(r){this.onChange=r}registerOnTouched(r){this.onTouch=r}setDisabledState(r){r?this.form.disable():this.form.enable()}validate(r){return this.controlInstance=r,null}registerOnValidatorChange(r){this.onValidatorChange=r}change(r){this.onChange(r)}_initializeForm(){return this._fb.control(null,{updateOn:"change"})}_subscribeToValueChanges(){const r=this.form.valueChanges.subscribe({next:i=>{null!==i&&(this.onChange(i),this.onValidatorChange(),this.onTouch())}});this._subscriptions.push(r)}markAsTouch(){this.controlInstance?.markAsDirty(),this.onTouch(),this.onValidatorChange()}}return m.\u0275fac=function(r){return new(r||m)(t.Y36(e.k),t.Y36(p.qu),t.Y36(t.ktI))},m.\u0275cmp=t.Xpm({type:m,selectors:[["c-select-input"]],inputs:{label:"label",id:"id",name:"name"},features:[t._Bn([{provide:p.JU,useExisting:(0,t.Gpc)(()=>m),multi:!0},{provide:p.Cf,useExisting:(0,t.Gpc)(()=>m),multi:!0}])],ngContentSelectors:d,decls:8,vars:9,consts:[[1,"input-container"],[1,"input-label"],["ngDefaultControl","","autocomplete","off",1,"input",3,"formControl","name","blur","change"],["select",""],["value","","selected",""],["class","input-error",4,"ngIf"],[1,"input-error"]],template:function(r,i){if(1&r){const g=t.EpF();t.F$t(),t.TgZ(0,"div",0)(1,"label",1),t._uU(2),t.qZA(),t.TgZ(3,"select",2,3),t.NdJ("blur",function(){return i.markAsTouch()})("change",function(){t.CHM(g);const O=t.MAs(4);return t.KtG(i.change(O.value))}),t._UZ(5,"option",4),t.Hsn(6),t.qZA(),t.YNc(7,u,2,1,"p",5),t.qZA()}2&r&&(t.ekj("error",null!==i.controlInstance&&i.formHelper.checkControlErrors(i.controlInstance)),t.xp6(1),t.uIk("for",i.id?i.id:null),t.xp6(1),t.Oqu(i.label),t.xp6(1),t.s9C("name",i.name?i.name:null),t.Q6J("formControl",i.form),t.uIk("id",i.id?i.id:null)("form",i.form?i.form:null),t.xp6(4),t.Q6J("ngIf",null!==i.controlInstance&&i.formHelper.checkControlErrors(i.controlInstance)))},dependencies:[s.O5,p.YN,p.Kr,p.Fj,p.EJ,p.JJ,p.oH],styles:[".input-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.input-container[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%]{font-size:.9rem}.input-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{background:var(--bg);border:none;padding:.4rem .6rem;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:1px solid var(--primary);color:var(--text);border-radius:.3rem;transition:border .3s ease}.input-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus{outline:none;border-radius:.3rem;border:1px solid var(--primary)}.input-container.error[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%]{color:var(--error)}.input-container.error[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid var(--error)}.input-container.error[_ngcontent-%COMP%]   .input-error[_ngcontent-%COMP%]{font-size:.9rem;color:var(--error)}"]}),m})()},9098:(y,_,l)=>{l.d(_,{k:()=>p});var t=l(4946);let p=(()=>{class e{checkFormErrors(u,d){const h=u.get(d);return h?.touched&&h.invalid}getFormErrors(u,d){const h=u.get(d)?.errors;return this._errorsDicc(h)}checkControlErrors(u){return u.invalid&&u.touched}getControlErrors(u){return this._errorsDicc(u.errors)}_errorsDicc(u){if(u?.required)return"Este campo es requerido";if(u?.email)return"No cumple con un formato de correo v\xe1lido";if(u?.maxlength){const{requiredLength:d,actualLength:h}=u.maxlength;return`Longitud m\xe1xima permitida ${d}, longitud actual ${h}`}if(u?.minlength){const{requiredLength:d,actualLength:h}=u.minlength;return`Longitud m\xednima permitida ${d}, longitud actual ${h}`}if(u?.invalidPasswordFormat)return"No cumple con el formato requerido: al menos una letra may\xfascula, al menos una letra min\xfascula, al menos un d\xedgito, sin espacios en blanco, m\xednimo 7 caracteres y m\xe1ximo 10.";if(u?.passwordNotMatch)return"Las contrase\xf1as no coinciden";if(u?.pattern)return"No cumple con el formato requerido";if(u?.max){const{actual:d,max:h}=u.max;return`El valor m\xe1ximo permitido es ${h}, valor actual ${d}`}if(u?.min){const{actual:d,min:h}=u.min;return`El valor m\xednimo permitido es ${h}, valor actual ${d}`}return""}}return e.\u0275fac=function(u){return new(u||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},5516:(y,_,l)=>{l.d(_,{N:()=>t});const t={API:"http://localhost:3000/"}}}]);