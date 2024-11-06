(function(){"use strict";var e={6906:function(e,t,o){var s=o(5130),n=o(6768);const i={id:"app"};function r(e,t,o,s,r,l){const a=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.bF)(a)])}var l={name:"App"},a=o(1241);const c=(0,a.A)(l,[["render",r]]);var d=c,u=o(1387);const v={class:"d-flex justify-content-center align-items-center vh-100 home-background"},k={class:"text-center"},p={class:"mb-4"};function m(e,t,o,s,i,r){return(0,n.uX)(),(0,n.CE)("div",v,[(0,n.Lk)("div",k,[(0,n.Lk)("div",p,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>r.goToWorkout&&r.goToWorkout(...e)),class:"btn home-button"},"Kayıtlı Serilerim")]),(0,n.Lk)("div",null,[(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>r.goToComboAdd&&r.goToComboAdd(...e)),class:"btn home-button"},"Seri Ekle")])])])}o(4114);var b={name:"Home",methods:{goToWorkout(){this.$router.push("/workout")},goToComboAdd(){this.$router.push("/combo-add")}}};const h=(0,a.A)(b,[["render",m],["__scopeId","data-v-6bfedbe8"]]);var S=h,f=o(4232);const g={class:"workout-main"},w={class:"d-flex justify-content-between align-items-center"},y={key:0,class:"series-part"},L={class:"list-group"},M=["onClick"],E={class:"btn btn-primary"},C={key:1},A={key:2,class:"workout-display mt-4"},T={class:"d-flex justify-content-end"},I={disabled:"true",class:"btn btn-warning mb-1"},x={class:"d-flex justify-content-between align-items-center"},_={key:0,class:"workout-move"},N={key:1,class:"workout-move"},j={class:"d-flex justify-content-end"},X={class:"btn btn-secondary mx-1"};function O(e,t,o,s,i,r){const l=(0,n.g2)("font-awesome-icon");return(0,n.uX)(),(0,n.CE)("div",g,[(0,n.Lk)("div",w,[t[4]||(t[4]=(0,n.Lk)("h1",null,"Workout",-1)),(0,n.Lk)("button",{class:"btn btn-secondary",onClick:t[0]||(t[0]=e=>r.toBack())},"Geri")]),i.series.length>0&&null==i.selectedSeries?((0,n.uX)(),(0,n.CE)("div",y,[t[5]||(t[5]=(0,n.Lk)("h3",null,"Seriler",-1)),(0,n.Lk)("ul",L,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.series,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t,class:"list-group-item",onClick:t=>r.startWorkout(e)},[(0,n.Lk)("button",E,(0,f.v_)(e.name),1)],8,M)))),128))])])):(0,n.Q3)("",!0),0==i.series.length?((0,n.uX)(),(0,n.CE)("div",C," KAYITLI SERİNİZ BULUNMAMAKTADIR.LÜTFEN EKLEME EKRANINDAN BİR SERİ EKLEYİNİZ. ")):(0,n.Q3)("",!0),i.currentMove?((0,n.uX)(),(0,n.CE)("div",A,[(0,n.Lk)("div",null,[(0,n.Lk)("div",T,[(0,n.Lk)("button",{class:"btn btn-primary mt-3",onClick:t[1]||(t[1]=(...e)=>r.stopWorkout&&r.stopWorkout(...e))},"Kapat")]),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.selectedSeries.moves,((e,t)=>((0,n.uX)(),(0,n.CE)("p",{key:t},[(0,n.Lk)("button",I,(0,f.v_)(e.side)+"-"+(0,f.v_)(e.type),1)])))),128))])]),(0,n.Lk)("div",x,[(0,n.Lk)("h3",null,(0,f.v_)(i.selectedSeries?i.selectedSeries.name:""),1)]),i.currentMove.side?((0,n.uX)(),(0,n.CE)("div",N,[(0,n.Lk)("p",null,(0,f.v_)(i.currentMove.side)+"-"+(0,f.v_)(i.currentMove.type),1)])):((0,n.uX)(),(0,n.CE)("div",_,[(0,n.Lk)("p",null,(0,f.v_)(i.currentMove.type),1)])),(0,n.Lk)("div",j,[(0,n.Lk)("button",{onClick:t[2]||(t[2]=e=>r.changeSpeed("slower")),class:"btn btn sm btn-warning btn-sm"},[(0,n.bF)(l,{icon:["fas","fast-backward"]})]),(0,n.Lk)("button",X,(0,f.v_)(i.currentSpeed),1),(0,n.Lk)("button",{onClick:t[3]||(t[3]=e=>r.changeSpeed("faster")),class:"btn btn sm btn-primary btn-sm"},[(0,n.bF)(l,{icon:["fas","fast-forward"]})])])])):(0,n.Q3)("",!0)])}var K={data(){return{series:[],selectedSeries:null,currentMove:null,currentSpeed:4}},mounted(){const e=JSON.parse(localStorage.getItem("series"))||[];this.series=e},methods:{changeSpeed(e){"faster"==e?this.currentSpeed+=.5:this.currentSpeed-=.5},toBack(){this.$router.push("/")},startWorkout(e){this.selectedSeries=e;let t=0;var o=0;const s=()=>{if(this.selectedSeries)if(o==this.selectedSeries.weaveInterval)this.currentMove={side:"",type:"Eskiv"},this.readMoveAloud(this.currentMove).then((()=>{s()})),o=0,console.log(this.selectedSeries.weaveInterval),console.log(o+" eskiv ");else{if(t<this.selectedSeries.moves.length){const e=this.selectedSeries.moves[t];this.currentMove=e,this.readMoveAloud(e).then((()=>{t++,s()})),o++}else o=0,t=0,s(),console.log(o+" yeniden");console.log(this.selectedSeries.weaveInterval),console.log(o)}};s()},stopWorkout(){this.currentMove=null,this.selectedSeries=null,this.currentSpeed=4,window.speechSynthesis.cancel()},readMoveAloud(e){return new Promise((t=>{window.speechSynthesis.cancel();const o=new SpeechSynthesisUtterance(e.side);o.lang="tr-TR",o.rate=this.currentSpeed;const s=new SpeechSynthesisUtterance(e.type);s.lang=e.type.toLowerCase().includes("kick")?"en-US":"tr-TR",s.rate=this.currentSpeed,o.onend=()=>{window.speechSynthesis.speak(s)},s.onend=()=>{t()},window.speechSynthesis.speak(o)}))}},beforeDestroy(){this.intervalId&&clearInterval(this.intervalId)}};const F=(0,a.A)(K,[["render",O],["__scopeId","data-v-5f520368"]]);var V=F;const W={class:"workout-main"},B={class:"d-flex justify-content-between align-items-center mb-2"},U={class:"d-flex justify-content-end"},D={class:"list-group mt-3"},Y=["onClick"],R=["onClick"],H={key:0,class:"modal-overlay"},P={class:"modal-content"},Q={class:"modal-footer"},$={key:1,class:"modal-overlay"},J={class:"modal-content"},z={class:"modal-title"},G={class:"list-group mt-3"},Z=["onClick"],q={class:"modal-footer"};function ee(e,t,o,i,r,l){return(0,n.uX)(),(0,n.CE)("div",W,[(0,n.Lk)("div",B,[t[10]||(t[10]=(0,n.Lk)("h1",{class:"page-title"},"Serilerim",-1)),(0,n.Lk)("button",{class:"btn btn-secondary",onClick:t[0]||(t[0]=e=>l.toBack())},"Geri")]),(0,n.Lk)("div",U,[(0,n.Lk)("button",{class:"btn btn-success",onClick:t[1]||(t[1]=(...e)=>l.showAddSeriesModal&&l.showAddSeriesModal(...e))},"Seri Ekle")]),(0,n.Lk)("ul",D,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.series,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t,class:"list-group-item d-flex justify-content-between align-items-center"},[(0,n.eW)((0,f.v_)(e.name)+" ",1),(0,n.Lk)("div",null,[(0,n.Lk)("button",{class:"btn btn-danger btn-sm me-1",onClick:t=>l.deleteSeries(e.name)},"Sil",8,Y),(0,n.Lk)("button",{class:"btn btn-primary btn-sm",onClick:e=>l.showEditSeriesModal(t)},"Düzenle",8,R)])])))),128))]),r.isAddSeriesModalVisible?((0,n.uX)(),(0,n.CE)("div",H,[(0,n.Lk)("div",P,[t[12]||(t[12]=(0,n.Lk)("h5",{class:"modal-title"},"Seri Ekle",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>r.newSeriesName=e),class:"form-control",placeholder:"Seri Adı"},null,512),[[s.Jo,r.newSeriesName]]),t[13]||(t[13]=(0,n.Lk)("p",{class:"mt-3"},"Eskiv Aralığı:",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.weaveInterval=e),class:"form-control"},t[11]||(t[11]=[(0,n.Lk)("option",{value:"-1"},"Yok",-1),(0,n.Lk)("option",{value:"1"},"1",-1),(0,n.Lk)("option",{value:"2"},"2",-1),(0,n.Lk)("option",{value:"3"},"3",-1)]),512),[[s.u1,r.weaveInterval]]),(0,n.Lk)("div",Q,[(0,n.Lk)("button",{class:"btn btn-secondary",onClick:t[4]||(t[4]=(...e)=>l.closeAddSeriesModal&&l.closeAddSeriesModal(...e))},"Kapat"),(0,n.Lk)("button",{class:"btn btn-primary",onClick:t[5]||(t[5]=(...e)=>l.addSeries&&l.addSeries(...e))},"Ekle")])])])):(0,n.Q3)("",!0),r.isEditSeriesModalVisible?((0,n.uX)(),(0,n.CE)("div",$,[(0,n.Lk)("div",J,[(0,n.Lk)("h5",z,"Hareket Ekle: "+(0,f.v_)(r.selectedSeries.name),1),(0,n.Lk)("h6",null,"Eskiv Aralığı: "+(0,f.v_)(r.selectedSeries.weaveInterval)+" Harekette Bir",1),(0,n.Lk)("ul",G,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.selectedSeries.moves,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t,class:"list-group-item d-flex justify-content-between align-items-center"},[(0,n.eW)((0,f.v_)(e.type)+" - "+(0,f.v_)(e.side)+" ",1),(0,n.Lk)("button",{class:"btn btn-danger btn-sm",onClick:e=>l.removeMove(t)},"Sil",8,Z)])))),128))]),t[16]||(t[16]=(0,n.Lk)("p",{class:"mt-3"},"Hareket Türü Seç:",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[6]||(t[6]=e=>r.newMoveType=e),class:"form-control"},t[14]||(t[14]=[(0,n.Fv)('<option value="Kroşe" data-v-b2429460>Kroşe</option><option value="Direkt" data-v-b2429460>Direkt</option><option value="Aparkat" data-v-b2429460>Aparkat</option><option value="Yüksek Tekme" data-v-b2429460>Yüksek Tekme</option><option value="Yan Tekme" data-v-b2429460>Yan Tekme</option><option value="Bacağa Tekme" data-v-b2429460>Bacağa Tekme</option><option value="Direkt Tekme" data-v-b2429460>Direkt Tekme</option>',7)]),512),[[s.u1,r.newMoveType]]),t[17]||(t[17]=(0,n.Lk)("p",{class:"mt-3"},"Taraf Seç:",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[7]||(t[7]=e=>r.newMoveSide=e),class:"form-control"},t[15]||(t[15]=[(0,n.Lk)("option",{value:"Sağ"},"Sağ",-1),(0,n.Lk)("option",{value:"Sol"},"Sol",-1)]),512),[[s.u1,r.newMoveSide]]),(0,n.Lk)("div",q,[(0,n.Lk)("button",{class:"btn btn-secondary",onClick:t[8]||(t[8]=(...e)=>l.closeEditSeriesModal&&l.closeEditSeriesModal(...e))},"Kapat"),(0,n.Lk)("button",{class:"btn btn-primary",onClick:t[9]||(t[9]=(...e)=>l.addMove&&l.addMove(...e))},"Hareket Ekle")])])])):(0,n.Q3)("",!0)])}var te={data(){return{series:[],newSeriesName:"",selectedSeries:null,selectedSeriesIndex:null,newMoveType:"",newMoveSide:"",weaveInterval:-1,isAddSeriesModalVisible:!1,isEditSeriesModalVisible:!1}},mounted(){const e=localStorage.getItem("series");e&&(this.series=JSON.parse(e))},methods:{toBack(){this.$router.push("/")},showAddSeriesModal(){this.newSeriesName="",this.isAddSeriesModalVisible=!0},closeAddSeriesModal(){this.isAddSeriesModalVisible=!1},addSeries(){this.newSeriesName&&(this.series.push({name:this.newSeriesName,moves:[],weaveInterval:this.weaveInterval}),this.saveToLocalStorage(),this.closeAddSeriesModal())},deleteSeries(e){const t=confirm(`"${e}" adlı seriyi silmek istediğinize emin misiniz?`);t&&(this.series=this.series.filter((t=>t.name!==e)),this.saveToLocalStorage())},showEditSeriesModal(e){this.selectedSeries=this.series[e],this.selectedSeriesIndex=e,this.newMoveType="",this.newMoveSide="",this.isEditSeriesModalVisible=!0},closeEditSeriesModal(){this.isEditSeriesModalVisible=!1},addMove(){this.newMoveType&&this.newMoveSide&&(this.series[this.selectedSeriesIndex].moves.push({type:this.newMoveType,side:this.newMoveSide}),this.saveToLocalStorage(),this.newMoveType="",this.newMoveSide="")},removeMove(e){this.series[this.selectedSeriesIndex].moves.splice(e,1),this.saveToLocalStorage()},saveToLocalStorage(){localStorage.setItem("series",JSON.stringify(this.series))}}};const oe=(0,a.A)(te,[["render",ee],["__scopeId","data-v-b2429460"]]);var se=oe;const ne=[{path:"/",name:"Home",component:S},{path:"/workout",name:"Workout",component:V},{path:"/combo-add",name:"ComboAdd",component:se}],ie=(0,u.aE)({history:(0,u.LA)("/boxing-app/"),routes:ne});var re=ie,le=(o(8077),o(4458));(0,le.k)("/boxing-app/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var ae=o(8950),ce=o(292),de=o(2353);Object.values(de).filter((e=>e.prefix&&e.iconName)).forEach((e=>ae.Yv.add(e)));const ue=(0,s.Ef)(d);ue.component("font-awesome-icon",ce.gc),ue.use(re),ue.mount("#app")}},t={};function o(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,s,n,i){if(!s){var r=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],i=e[d][2];for(var l=!0,a=0;a<s.length;a++)(!1&i||r>=i)&&Object.keys(o.O).every((function(e){return o.O[e](s[a])}))?s.splice(a--,1):(l=!1,i<r&&(r=i));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,n,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,i,r=s[0],l=s[1],a=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(a)var d=a(o)}for(t&&t(s);c<r.length;c++)i=r[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},s=self["webpackChunkboxing_app"]=self["webpackChunkboxing_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(6906)}));s=o.O(s)})();
//# sourceMappingURL=app.132adbc6.js.map