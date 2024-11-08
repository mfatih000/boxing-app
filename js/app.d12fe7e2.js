(function(){"use strict";var e={7590:function(e,t,s){var o=s(5130),n=s(6768);const i={id:"app"};function r(e,t,s,o,r,a){const l=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.bF)(l)])}var a={name:"App"},l=s(1241);const c=(0,l.A)(a,[["render",r]]);var d=c,u=s(1387);const v={class:"d-flex justify-content-center align-items-center vh-100 home-background"},k={class:"text-center"},p={class:"mb-4"};function h(e,t,s,o,i,r){return(0,n.uX)(),(0,n.CE)("div",v,[(0,n.Lk)("div",k,[(0,n.Lk)("div",p,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>r.goToWorkout&&r.goToWorkout(...e)),class:"btn home-button"},"Model Çalış")]),(0,n.Lk)("div",null,[(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>r.goToComboAdd&&r.goToComboAdd(...e)),class:"btn home-button"},"Model Ekle")])])])}s(4114);var m={name:"Home",methods:{goToWorkout(){this.$router.push("/workout")},goToComboAdd(){this.$router.push("/combo-add")}}};const b=(0,l.A)(m,[["render",h],["__scopeId","data-v-f0508588"]]);var f=b,S=s(4232);const w={class:"workout-main"},g={class:"d-flex justify-content-between align-items-center mb-1"},y={key:0,class:"series-part"},L={class:"list-group"},M=["onClick"],E={class:"btn btn-primary"},C={key:1,class:"d-flex justify-content-between align-items-center"},A={key:2,class:"workout-display mt-4"},T={class:"d-flex justify-content-end"},I={key:0,disabled:"",class:"btn btn-danger mb-1"},x={key:1,disabled:"",class:"btn btn-warning mb-1"},_={class:"d-flex justify-content-between align-items-center"},X={key:0,class:"workout-move"},j={key:1,class:"workout-move"},N={class:"d-flex justify-content-end"},O={class:"btn btn-secondary mx-1"};function K(e,t,s,o,i,r){const a=(0,n.g2)("font-awesome-icon");return(0,n.uX)(),(0,n.CE)("div",w,[(0,n.Lk)("div",g,[t[4]||(t[4]=(0,n.Lk)("h1",null,"Model Çalış",-1)),(0,n.Lk)("button",{class:"btn btn-secondary",onClick:t[0]||(t[0]=e=>r.toBack())},"Geri")]),i.series.length>0&&null==i.selectedSeries?((0,n.uX)(),(0,n.CE)("div",y,[t[5]||(t[5]=(0,n.Lk)("h3",null,"Modellerim",-1)),(0,n.Lk)("ul",L,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.series,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t,class:"list-group-item",onClick:t=>r.startWorkout(e)},[(0,n.Lk)("button",E,(0,S.v_)(e.name),1)],8,M)))),128))])])):(0,n.Q3)("",!0),0==i.series.length?((0,n.uX)(),(0,n.CE)("div",C," KAYITLI SERİNİZ BULUNMAMAKTADIR.LÜTFEN EKLEME EKRANINDAN BİR SERİ EKLEYİNİZ. ")):(0,n.Q3)("",!0),i.currentMove?((0,n.uX)(),(0,n.CE)("div",A,[(0,n.Lk)("div",null,[(0,n.Lk)("div",T,[(0,n.Lk)("button",{class:"btn btn-primary mt-3",onClick:t[1]||(t[1]=(...e)=>r.stopWorkout&&r.stopWorkout(...e))},"Kapat")]),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.weaveList,((e,t)=>((0,n.uX)(),(0,n.CE)("p",{key:t},["ESKİV"===e?((0,n.uX)(),(0,n.CE)("button",I,"Eskiv")):((0,n.uX)(),(0,n.CE)("button",x,(0,S.v_)(e.side)+"-"+(0,S.v_)(e.type),1))])))),128))])]),(0,n.Lk)("div",_,[(0,n.Lk)("h3",null,(0,S.v_)(i.selectedSeries?i.selectedSeries.name:""),1)]),i.currentMove.side?((0,n.uX)(),(0,n.CE)("div",j,[(0,n.Lk)("p",null,(0,S.v_)(i.currentMove.side)+"-"+(0,S.v_)(i.currentMove.type),1)])):((0,n.uX)(),(0,n.CE)("div",X,[(0,n.Lk)("p",null,(0,S.v_)(i.currentMove.type),1)])),(0,n.Lk)("div",N,[(0,n.Lk)("button",{onClick:t[2]||(t[2]=e=>r.changeSpeed("slower")),class:"btn btn sm btn-warning btn-sm"},[(0,n.bF)(a,{icon:["fas","fast-backward"]})]),(0,n.Lk)("button",O,(0,S.v_)(i.currentSpeed),1),(0,n.Lk)("button",{onClick:t[3]||(t[3]=e=>r.changeSpeed("faster")),class:"btn btn sm btn-primary btn-sm"},[(0,n.bF)(a,{icon:["fas","fast-forward"]})])])])):(0,n.Q3)("",!0)])}var V={data(){return{series:[],selectedSeries:null,currentMove:null,currentSpeed:3}},computed:{weaveList(){if(!this.selectedSeries||this.selectedSeries.weaveInterval<=0)return this.selectedSeries?this.selectedSeries.moves:[];const e=[];return this.selectedSeries.moves.forEach(((t,s)=>{e.push(t),(s+1)%this.selectedSeries.weaveInterval===0&&e.push("ESKİV")})),e}},mounted(){const e=JSON.parse(localStorage.getItem("series"))||[];this.series=e},methods:{changeSpeed(e){"faster"==e?this.currentSpeed+=.25:this.currentSpeed-=.25},toBack(){this.$router.push("/")},startWorkout(e){this.selectedSeries=e;let t=0;var s=0;const o=()=>{if(this.selectedSeries)if(s==this.selectedSeries.weaveInterval)this.currentMove={side:"",type:"Eskiv"},this.readMoveAloud(this.currentMove).then((()=>{o()})),s=0;else if(t<this.selectedSeries.moves.length){const e=this.selectedSeries.moves[t];this.currentMove=e,this.readMoveAloud(e).then((()=>{t++,o()})),s++}else s=0,t=0,o()};o()},stopWorkout(){this.currentMove=null,this.selectedSeries=null,this.currentSpeed=4,window.speechSynthesis.cancel()},readMoveAloud(e){return new Promise((t=>{window.speechSynthesis.cancel();const s=new SpeechSynthesisUtterance(e.side);s.lang="tr-TR",s.rate=this.currentSpeed;const o=new SpeechSynthesisUtterance(e.type);o.lang=e.type.toLowerCase().includes("kick")?"en-US":"tr-TR",o.rate=this.currentSpeed,s.onend=()=>{window.speechSynthesis.speak(o)},o.onend=()=>{t()},window.speechSynthesis.speak(s)}))}},beforeDestroy(){this.intervalId&&clearInterval(this.intervalId)}};const F=(0,l.A)(V,[["render",K],["__scopeId","data-v-fdff654c"]]);var W=F;const B={class:"workout-main"},U={class:"d-flex justify-content-between align-items-center mb-2"},D={class:"d-flex justify-content-end"},Y={class:"list-group mt-3"},R=["onClick"],H=["onClick"],P={key:0,class:"modal-overlay"},Q={class:"modal-content"},$={class:"modal-footer"},J={key:1,class:"modal-overlay"},z={class:"modal-content"},G={class:"modal-title"},Z={class:"list-group mt-3"},q=["onClick"],ee={class:"modal-footer"};function te(e,t,s,i,r,a){return(0,n.uX)(),(0,n.CE)("div",B,[(0,n.Lk)("div",U,[t[10]||(t[10]=(0,n.Lk)("h1",{class:"page-title"},"Modellerim",-1)),(0,n.Lk)("button",{class:"btn btn-secondary",onClick:t[0]||(t[0]=e=>a.toBack())},"Geri")]),(0,n.Lk)("div",D,[(0,n.Lk)("button",{class:"btn btn-success",onClick:t[1]||(t[1]=(...e)=>a.showAddSeriesModal&&a.showAddSeriesModal(...e))},"Model Ekle")]),(0,n.Lk)("ul",Y,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.series,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t,class:"list-group-item d-flex justify-content-between align-items-center"},[(0,n.eW)((0,S.v_)(e.name)+" ",1),(0,n.Lk)("div",null,[(0,n.Lk)("button",{class:"btn btn-danger btn-sm me-1",onClick:t=>a.deleteSeries(e.name)},"Sil",8,R),(0,n.Lk)("button",{class:"btn btn-primary btn-sm",onClick:e=>a.showEditSeriesModal(t)},"Düzenle",8,H)])])))),128))]),r.isAddSeriesModalVisible?((0,n.uX)(),(0,n.CE)("div",P,[(0,n.Lk)("div",Q,[t[12]||(t[12]=(0,n.Lk)("h5",{class:"modal-title"},"Model Ekle",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>r.newSeriesName=e),class:"form-control",placeholder:"Model Adı"},null,512),[[o.Jo,r.newSeriesName]]),t[13]||(t[13]=(0,n.Lk)("p",{class:"mt-3"},"Eskiv Aralığı:",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.weaveInterval=e),class:"form-control"},t[11]||(t[11]=[(0,n.Lk)("option",{value:"-1"},"Yok",-1),(0,n.Lk)("option",{value:"1"},"1",-1),(0,n.Lk)("option",{value:"2"},"2",-1),(0,n.Lk)("option",{value:"3"},"3",-1)]),512),[[o.u1,r.weaveInterval]]),(0,n.Lk)("div",$,[(0,n.Lk)("button",{class:"btn btn-secondary",onClick:t[4]||(t[4]=(...e)=>a.closeAddSeriesModal&&a.closeAddSeriesModal(...e))},"Kapat"),(0,n.Lk)("button",{class:"btn btn-primary",onClick:t[5]||(t[5]=(...e)=>a.addSeries&&a.addSeries(...e))},"Ekle")])])])):(0,n.Q3)("",!0),r.isEditSeriesModalVisible?((0,n.uX)(),(0,n.CE)("div",J,[(0,n.Lk)("div",z,[(0,n.Lk)("h5",G,"Hareket Ekle: "+(0,S.v_)(r.selectedSeries.name),1),(0,n.Lk)("h6",null,"Eskiv Aralığı: "+(0,S.v_)(r.selectedSeries.weaveInterval)+" Harekette Bir",1),(0,n.Lk)("ul",Z,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.selectedSeries.moves,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t,class:"list-group-item d-flex justify-content-between align-items-center"},[(0,n.eW)((0,S.v_)(e.type)+" - "+(0,S.v_)(e.side)+" ",1),(0,n.Lk)("button",{class:"btn btn-danger btn-sm",onClick:e=>a.removeMove(t)},"Sil",8,q)])))),128))]),t[16]||(t[16]=(0,n.Lk)("p",{class:"mt-3"},"Hareket Türü Seç:",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[6]||(t[6]=e=>r.newMoveType=e),class:"form-control"},t[14]||(t[14]=[(0,n.Fv)('<option value="Kroşe" data-v-71ccca44>Kroşe</option><option value="Direkt" data-v-71ccca44>Direkt</option><option value="Aparkat" data-v-71ccca44>Aparkat</option><option value="Yüksek Tekme" data-v-71ccca44>Yüksek Tekme</option><option value="Yan Tekme" data-v-71ccca44>Yan Tekme</option><option value="Bacağa Tekme" data-v-71ccca44>Bacağa Tekme</option><option value="Direkt Tekme" data-v-71ccca44>Direkt Tekme</option>',7)]),512),[[o.u1,r.newMoveType]]),t[17]||(t[17]=(0,n.Lk)("p",{class:"mt-3"},"Taraf Seç:",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[7]||(t[7]=e=>r.newMoveSide=e),class:"form-control"},t[15]||(t[15]=[(0,n.Lk)("option",{value:"Sağ"},"Sağ",-1),(0,n.Lk)("option",{value:"Sol"},"Sol",-1)]),512),[[o.u1,r.newMoveSide]]),(0,n.Lk)("div",ee,[(0,n.Lk)("button",{class:"btn btn-secondary",onClick:t[8]||(t[8]=(...e)=>a.closeEditSeriesModal&&a.closeEditSeriesModal(...e))},"Kapat"),(0,n.Lk)("button",{class:"btn btn-primary",onClick:t[9]||(t[9]=(...e)=>a.addMove&&a.addMove(...e))},"Hareket Ekle")])])])):(0,n.Q3)("",!0)])}var se={data(){return{series:[],newSeriesName:"",selectedSeries:null,selectedSeriesIndex:null,newMoveType:"",newMoveSide:"",weaveInterval:-1,isAddSeriesModalVisible:!1,isEditSeriesModalVisible:!1}},mounted(){const e=localStorage.getItem("series");e&&(this.series=JSON.parse(e))},methods:{toBack(){this.$router.push("/")},showAddSeriesModal(){this.newSeriesName="",this.isAddSeriesModalVisible=!0},closeAddSeriesModal(){this.isAddSeriesModalVisible=!1},addSeries(){if(this.newSeriesName){this.series.push({name:this.newSeriesName,moves:[],weaveInterval:this.weaveInterval}),this.saveToLocalStorage(),this.closeAddSeriesModal();const e=this.series.length-1;this.showEditSeriesModal(e)}},deleteSeries(e){const t=confirm(`"${e}" adlı seriyi silmek istediğinize emin misiniz?`);t&&(this.series=this.series.filter((t=>t.name!==e)),this.saveToLocalStorage())},showEditSeriesModal(e){this.selectedSeries=this.series[e],this.selectedSeriesIndex=e,this.newMoveType="",this.newMoveSide="",this.isEditSeriesModalVisible=!0},closeEditSeriesModal(){this.isEditSeriesModalVisible=!1},addMove(){this.newMoveType&&this.newMoveSide&&(this.series[this.selectedSeriesIndex].moves.push({type:this.newMoveType,side:this.newMoveSide}),this.saveToLocalStorage(),this.newMoveType="",this.newMoveSide="")},removeMove(e){this.series[this.selectedSeriesIndex].moves.splice(e,1),this.saveToLocalStorage()},saveToLocalStorage(){localStorage.setItem("series",JSON.stringify(this.series))}}};const oe=(0,l.A)(se,[["render",te],["__scopeId","data-v-71ccca44"]]);var ne=oe;const ie=[{path:"/",name:"Home",component:f},{path:"/workout",name:"Workout",component:W},{path:"/combo-add",name:"ComboAdd",component:ne}],re=(0,u.aE)({history:(0,u.LA)("/boxing-app/"),routes:ie});var ae=re,le=(s(8077),s(4458));(0,le.k)("/boxing-app/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var ce=s(8950),de=s(292),ue=s(2353);Object.values(ue).filter((e=>e.prefix&&e.iconName)).forEach((e=>ce.Yv.add(e)));const ve=(0,o.Ef)(d);ve.component("font-awesome-icon",de.gc),ve.use(ae),ve.mount("#app")}},t={};function s(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,o,n,i){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],i=e[d][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||r>=i)&&Object.keys(s.O).every((function(e){return s.O[e](o[l])}))?o.splice(l--,1):(a=!1,i<r&&(r=i));if(a){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,n,i]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,i,r=o[0],a=o[1],l=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(l)var d=l(s)}for(t&&t(o);c<r.length;c++)i=r[c],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(d)},o=self["webpackChunkboxing_app"]=self["webpackChunkboxing_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[504],(function(){return s(7590)}));o=s.O(o)})();
//# sourceMappingURL=app.d12fe7e2.js.map