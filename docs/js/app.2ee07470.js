(function(){"use strict";var t={7818:function(t,e,i){var a=i(6848),s=function(){var t=this,e=t._self._c;return e("div",{class:{"table-min-width":t.loaded},attrs:{id:"app"}},[e("div",{staticClass:"content"},[e("h1",[t._v("Application Tracker")]),t.loaded?e("div",[e("application-tracker",{attrs:{applicationsOrig:t.applications}})],1):e("div",[e("create-or-upload",{on:{created:t.onCreate}})],1)]),t._m(0)])},n=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"footer"},[t._v("Made in an evening by "),e("a",{attrs:{href:"https://github.com/o-i-z-y-s"}},[t._v("this dweeb.")])])}],o=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"file-uploader",on:{dragover:t.dragover,dragleave:t.dragleave,drop:t.drop}},[e("input",{ref:"uploader",staticClass:"file-input",attrs:{id:"uploader",type:"file",accept:".csv"},on:{change:t.onChange}}),e("label",{staticClass:"drop-space",attrs:{for:"uploader"}},[t.hovering?e("div",[t._v("Drop file here.")]):e("div",[e("h4",[t._v("Drag and drop your file or click in here to upload it manually.")])])])]),e("div",{staticClass:"btn-row"},[t.show?e("button",{staticClass:"col btn btn-dark loader",on:{click:t.load}},[t._v("You have a saved tracker."),e("br"),t._v("Click here to load it.")]):t._e(),e("button",{staticClass:"col btn btn-dark",staticStyle:{"margin-bottom":"1rem"},on:{click:t.onNew}},[t._v("Or click here to create"),e("br"),t._v("a new one instead.")])])])},r=[];class l{constructor(){this.company="",this.title="",this.payScale="",this.dateApplied="",this.mostRecentContactDate="",this.step="",this.notes=""}init(t){this.company=t.company,this.title=t.title,this.payScale=t.payScale,this.dateApplied=t.dateApplied,this.mostRecentContactDate=t.mostRecentContactDate,this.step=t.step,this.notes=t.notes}}var c=l,d=i(8344),p=i.n(d),u={name:"CreateOrUpload",data:function(){return{file:"",hovering:!1,show:!1}},mounted:function(){this.checkForSavedTracker()},methods:{onChange(t){this.file=t.target.files[0],this.parseFile()},async parseFile(t=!1){if(""===this.file)return;let e=[];e=t?this.file:await this.parser();let i=[];for(let a=0;a<e.length;a++){let t={};t["company"]=e[a][0],t["title"]=e[a][1],t["payScale"]=e[a][2],t["dateApplied"]=e[a][3],t["mostRecentContactDate"]=e[a][4],t["step"]=e[a][5],t["notes"]=e[a][6];let s=new c;s.init(t),i[a]=s}i.length>0&&this.$emit("created",i)},async parser(){return new Promise((t=>{p().parse(this.file,{complete:function(e){t(e.data)}})}))},onNew(){this.$emit("created",[new c])},dragover(t){t.preventDefault(),this.hovering=!0},dragleave(t){t.preventDefault(),this.hovering=!1},drop(t){t.preventDefault(),this.file=t.dataTransfer.files[0],this.parseFile(),this.hovering=!1},load(){const t=document.cookie.split("; ").find((t=>t.startsWith("content=")))?.split("=",2)[1];this.file=JSON.parse(t),this.parseFile(!0)},checkForSavedTracker(){try{const t=document.cookie.split("; ").find((t=>t.startsWith("content=")))?.split("=",2)[1];t&&(this.show=!0)}catch{return}}}},h=u,v=i(1656),f=(0,v.A)(h,o,r,!1,null,"80bec5d8",null),b=f.exports,m=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"scrollbars"},[e("table",{staticClass:"table table-dark table-hover"},[t._m(0),e("tbody",[t._l(t.applications,(function(a,s){return e("tr",{key:s,class:t.getStepStyle(a.step)},[e("td",[e("img",{staticClass:"table-icon",class:{filter:"Closed"!==a.step},attrs:{src:i(3279)},on:{click:function(e){return t.removeRow(s)}}})]),e("td",[t._v(t._s(Number(s)+1))]),e("td",[e("table-cell",{attrs:{val:a.company,uid:"company",index:s},on:{update:t.update}})],1),e("td",[e("table-cell",{attrs:{val:a.title,uid:"title",index:s},on:{update:t.update}})],1),e("td",[e("table-cell",{attrs:{val:a.payScale,uid:"payScale",index:s},on:{update:t.update}})],1),e("td",[e("table-cell",{attrs:{val:a.dateApplied,uid:"dateApplied",index:s},on:{update:t.update}})],1),e("td",[e("table-cell",{attrs:{val:a.mostRecentContactDate,uid:"mostRecentContactDate",index:s},on:{update:t.update}})],1),e("td",[e("table-cell",{attrs:{val:a.step,uid:"step",index:s},on:{update:t.update}})],1),e("td",[e("table-cell",{attrs:{val:a.notes,uid:"notes",index:s},on:{update:t.update}})],1)])})),e("tr",{},[e("td",{staticStyle:{cursor:"pointer"},on:{click:t.addRow}},[e("img",{staticClass:"table-icon",attrs:{src:i(9287)}})]),t._l(Array(8),(function(t){return e("td",{key:t})}))],2)],2)])]),e("em",[t._v("Click a cell to edit.")]),e("br"),t.mobile?e("div",{staticClass:"portrait-message"},[t._v(" (Psst. The table fits better in landscape. "),e("img",{staticClass:"table-icon",attrs:{src:i(518)}}),t._v(") ")]):t._e(),e("div",{staticClass:"btn-row"},[e("button",{staticClass:"btn btn-dark",staticStyle:{"margin-top":"1rem"},on:{click:t.download}},[t._v("Download as CSV")]),e("button",{staticClass:"btn btn-dark",staticStyle:{"margin-top":"1rem"},attrs:{disabled:t.cookiesDisabled},on:{click:t.save}},[t._v("Save to Cookies")])]),t.cookiesDisabled?e("div",{staticStyle:{"font-size":"0.9rem"}},[t._v(" Your browser has cookies disabled, so you'll have to download to save."),e("br"),t._v(' On Safari, this is probably due to "Prevent Cross-Site Tracking" in your settings (if it wasn\'t intentional). ')]):t._e(),t.saveClicked?e("p",{style:{color:"Saved successfully."===t.message?"greenyellow":"red"}},[t._v(t._s(t.message))]):t._e(),e("a",{staticStyle:{visibility:"hidden"},attrs:{href:"/Application Tracker",download:""}})])},g=[function(){var t=this,e=t._self._c;return e("thead",{},[e("tr",[e("th",{attrs:{scope:"col"}}),e("th",{attrs:{scope:"col"}},[t._v("#")]),e("th",{attrs:{scope:"col"}},[t._v("🏢")]),e("th",{attrs:{scope:"col"}},[t._v("Title")]),e("th",{attrs:{scope:"col"}},[t._v("💰 Est.")]),e("th",{attrs:{scope:"col"}},[t._v("Apply Date")]),e("th",{attrs:{scope:"col"}},[t._v("Last Comm.")]),e("th",{attrs:{scope:"col"}},[t._v("Step")]),e("th",{attrs:{scope:"col"}},[t._v("📝")])])])}],k=(i(4114),i(4603),i(7566),i(8721),function(){var t=this,e=t._self._c;return e("div",["step"!==t.uid||!t.editing&&""!==t.val?t.editing||""===t.val&&"step"!==t.uid?e("input",{staticClass:"form-control",domProps:{value:t.val},on:{blur:t.onChange}}):e("div",{on:{click:function(e){t.editing=!t.editing}}},[t._v(t._s(t.val))]):e("select",{staticClass:"form-select",on:{change:t.onChange}},[e("option",{attrs:{selected:""}},[t._v("Select")]),t._l(t.steps,(function(i,a){return e("option",{key:a},[t._v(" "+t._s(i)+" ")])}))],2)])}),y=[],_={name:"TableCell",props:{val:{type:String,required:!0},uid:{type:String,required:!0},index:{type:Number,required:!0}},data:function(){return{editing:!1,steps:["Applied","Phone Screen","Assessment","Onsite","Accepted","Rejected","Closed"]}},methods:{onChange(t){this.editing=!1,this.$emit("update",t.target.value,this.index,this.uid)}}},C=_,w=(0,v.A)(C,k,y,!1,null,"57497560",null),S=w.exports,A={components:{TableCell:S},name:"ApplicationTracker",props:{applicationsOrig:{type:Array,required:!0}},data:function(){return{applications:{},fields:["company","title","payScale","dateApplied","mostRecentContactDate","step","notes"],mobile:!1,message:"",saveClicked:!1,cookiesDisabled:!1}},mounted:function(){this.applications=this.applicationsOrig,this.checkDevice(),this.areCookiesEnabled()},methods:{update(t,e,i){this.applications[e][i]=t},addRow(){this.applications.push(new c)},removeRow(t){this.applications.splice(t,1)},buildTracker(){let t=[];for(let e=0;e<this.applications.length;e++){let i=[];for(let t=0;t<this.fields.length;t++){let a=this.fields[t];i.push(this.applications[e][a])}t.push(i)}return t},download(){let t=this.buildTracker(),e=t.map((t=>t.join(","))).join("\n"),i=new Blob([e],{type:"data:text/csv;charset=utf-8,"}),a=document.createElement("a");a.href=window.URL.createObjectURL(i),a.setAttribute("download",this.getFileName()),document.body.appendChild(a),a.click(),document.body.removeChild(a)},save(){let t=this.buildTracker(),e=new Date;e.setFullYear(e.getFullYear()+10);try{for(var i=document.cookie.split(";"),a=0;a<i.length;a++)document.cookie=i[a]+"=; expires="+new Date(0).toUTCString();this.$nextTick((()=>{document.cookie="content="+JSON.stringify(t)+"; expires="+e.toUTCString()+";",this.message="Saved successfully."}))}catch{this.message="Failed to save."}this.saveClicked=!0},getFileName(){let t=new Date,e=t.getMonth()+1,i="0"===t.getSeconds()?"12":t.getSeconds();return"Application Tracker "+t.getFullYear()+"-"+e+"-"+t.getDate()+" "+t.getHours()+"-"+t.getMinutes()+"-"+i+".csv"},getStepStyle(t){switch(t){case"Applied":return"table-light";case"Phone Screen":return"table-info";case"Assessment":return"table-primary";case"Onsite":return"table-secondary";case"Accepted":return"table-success";case"Rejected":return"table-danger";case"Closed":return"table-dark"}},checkDevice(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?this.mobile=!0:this.mobile=!1},areCookiesEnabled(){document.cookie="test=test;SameSite=None";try{const t=document.cookie.split("; ").find((t=>t.startsWith("test=")))?.split("=")[1];if("test"!==t)throw new Error("cookies disabled")}catch{this.cookiesDisabled=!0}}}},x=A,O=(0,v.A)(x,m,g,!1,null,"0fefb936",null),D=O.exports,T={name:"App",components:{CreateOrUpload:b,ApplicationTracker:D},data:function(){return{applications:"",loaded:!1}},methods:{onCreate(t){this.applications=t,this.$nextTick((()=>{this.loaded=!0}))}}},R=T,F=(0,v.A)(R,s,n,!1,null,null,null),j=F.exports;a.Ay.config.productionTip=!1,new a.Ay({render:t=>t(j)}).$mount("#app")},518:function(t,e,i){t.exports=i.p+"img/arrows-rotate-solid.0af92041.svg"},3279:function(t,e,i){t.exports=i.p+"img/square-minus-whitesmoke.be46fc4d.svg"},9287:function(t,e,i){t.exports=i.p+"img/square-plus-whitesmoke.089f7363.svg"}},e={};function i(a){var s=e[a];if(void 0!==s)return s.exports;var n=e[a]={exports:{}};return t[a].call(n.exports,n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,a,s,n){if(!a){var o=1/0;for(d=0;d<t.length;d++){a=t[d][0],s=t[d][1],n=t[d][2];for(var r=!0,l=0;l<a.length;l++)(!1&n||o>=n)&&Object.keys(i.O).every((function(t){return i.O[t](a[l])}))?a.splice(l--,1):(r=!1,n<o&&(o=n));if(r){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[a,s,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/application-tracker/"}(),function(){var t={524:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,n,o=a[0],r=a[1],l=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(l)var d=l(i)}for(e&&e(a);c<o.length;c++)n=o[c],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(d)},a=self["webpackChunkapplication_tracker"]=self["webpackChunkapplication_tracker"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[504],(function(){return i(7818)}));a=i.O(a)})();
//# sourceMappingURL=app.2ee07470.js.map