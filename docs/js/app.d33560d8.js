(function(){"use strict";var t={9268:function(t,e,a){var i=a(6848),s=function(){var t=this,e=t._self._c;return e("div",{class:{"table-min-width":t.loaded},attrs:{id:"app"}},[e("div",{staticClass:"content"},[e("h1",[t._v("Job Application Tracker")]),t.loaded?e("div",[e("application-tracker",{attrs:{applicationsOrig:t.applications}})],1):e("div",[e("create-or-upload",{on:{created:t.onCreate}})],1)]),t._m(0)])},o=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"footer"},[t._v("Made by "),e("a",{attrs:{href:"https://github.com/o-i-z-y-s"}},[t._v("this dweeb.")])])}],n=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"file-uploader",on:{dragover:t.dragover,dragleave:t.dragleave,drop:t.drop}},[e("input",{ref:"uploader",staticClass:"file-input",attrs:{id:"uploader",type:"file",accept:".csv"},on:{change:t.onChange}}),e("label",{staticClass:"drop-space",attrs:{for:"uploader"}},[t.hovering?e("div",[t._v("Drop file here.")]):e("div",[e("h4",[t._v("Drag and drop your file or click in here to upload it manually.")])])])]),e("div",{staticClass:"btn-row"},[t.show?e("button",{staticClass:"col btn btn-dark loader",on:{click:t.load}},[t._v("You have a saved tracker."),e("br"),t._v("Click here to load it.")]):t._e(),e("button",{staticClass:"col btn btn-dark",staticStyle:{"margin-bottom":"1rem"},on:{click:t.onNew}},[t._v("Or click here to create"),e("br"),t._v("a new one instead.")])])])},r=[];class l{constructor(){this.id="",this.company="",this.title="",this.payScale="",this.dateApplied="",this.mostRecentContactDate="",this.step="",this.notes=""}init(t){this.id=t.id,this.company=t.company,this.title=t.title,this.payScale=t.payScale,this.dateApplied=t.dateApplied,this.mostRecentContactDate=t.mostRecentContactDate,this.step=t.step,this.notes=t.notes}}var c=l,d=a(8344),p=a.n(d),u={name:"CreateOrUpload",data:function(){return{file:"",hovering:!1,show:!1}},mounted:function(){this.checkStorage()},methods:{onChange(t){this.file=t.target.files[0],this.parseFile()},async parseFile(t=!1){if(""===this.file)return;let e=[];e=t?this.file:await this.parser();let a=[];for(let i=0;i<e.length;i++){let t={};t["id"]=e[i][0],t["company"]=e[i][1],t["title"]=e[i][2],t["payScale"]=e[i][3],t["dateApplied"]=e[i][4],t["mostRecentContactDate"]=e[i][5],t["step"]=e[i][6],t["notes"]=e[i][7];let s=new c;s.init(t),a[i]=s}a.length>0&&this.$emit("created",a)},async parser(){return new Promise((t=>{p().parse(this.file,{complete:function(e){t(e.data)}})}))},onNew(){let t=new c;t.id="1",this.$emit("created",[t])},dragover(t){t.preventDefault(),this.hovering=!0},dragleave(t){t.preventDefault(),this.hovering=!1},drop(t){t.preventDefault(),this.file=t.dataTransfer.files[0],this.parseFile(),this.hovering=!1},load(){this.file=JSON.parse(window.localStorage.getItem("content")),this.parseFile(!0)},checkStorage(){window.localStorage.getItem("content")&&(this.show=!0)}}},h=u,f=a(1656),v=(0,f.A)(h,n,r,!1,null,"16f8bb60",null),g=v.exports,m=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"scrollbars"},[e("table",{staticClass:"table table-dark table-hover"},[e("thead",{},[e("tr",[t._m(0),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("id")}}},[t._v("#")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("company")}}},[t._v("Company")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("title")}}},[t._v("Title")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("payScale")}}},[t._v("💰 Est.")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("dateApplied")}}},[t._v("Apply Date")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("mostRecentContactDate")}}},[t._v("Last Contact")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("step")}}},[t._v("Step")]),e("th",{attrs:{scope:"col"}},[t._v("📝")])])]),e("tbody",[t._l(t.sorted,(function(i,s){return e("tr",{key:s,class:t.getStepStyle(i.step)},[e("td",[e("img",{staticClass:"clickable-icon",class:{filter:t.doFilter(i.step)},attrs:{src:a(3279)},on:{click:function(e){return t.removeRow(s)}}})]),e("td",[t._v(t._s(i.id))]),e("td",[e("table-cell",{attrs:{val:i.company,uid:"company",index:s},on:{update:t.update}})],1),e("td",[e("table-cell",{attrs:{val:i.title,uid:"title",index:s},on:{update:t.update}})],1),e("td",[e("table-cell",{attrs:{val:i.payScale,uid:"payScale",index:s},on:{update:t.update}})],1),e("td",[e("table-cell",{attrs:{val:i.dateApplied,uid:"dateApplied",index:s},on:{update:t.update}})],1),e("td",[e("table-cell",{attrs:{val:i.mostRecentContactDate,uid:"mostRecentContactDate",index:s},on:{update:t.update}})],1),e("td",[e("table-cell",{attrs:{val:i.step,uid:"step",index:s},on:{update:t.update}})],1),e("td",[e("table-cell",{attrs:{val:i.notes,uid:"notes",index:s},on:{update:t.update}})],1)])})),e("tr",{},[e("td",{staticStyle:{cursor:"pointer"},on:{click:t.addRow}},[e("img",{staticClass:"clickable-icon",attrs:{src:a(9287)}})]),t._l(Array(8),(function(t){return e("td",{key:t})}))],2)],2)])]),e("em",[t._v("Click a cell to edit.")]),e("br"),t.mobile?e("div",{staticClass:"portrait-message"},[t._v(" (Psst. The table fits better in landscape. "),e("img",{staticClass:"icon",attrs:{src:a(518)}}),t._v(") ")]):t._e(),e("div",{staticClass:"btn-row"},[e("button",{staticClass:"btn btn-dark",staticStyle:{"margin-top":"1rem"},on:{click:t.download}},[t._v("Download as CSV")]),e("button",{staticClass:"btn btn-dark",staticStyle:{"margin-top":"1rem"},attrs:{disabled:t.storageDisabled},on:{click:t.save}},[t._v("Save to Browser Storage")])]),t.storageDisabled?e("div",{staticStyle:{"font-size":"0.9rem"}},[t._v(" You (might) have local storage disabled in your browser settings, so you'll need to download to save."),e("br")]):t._e(),e("div",{staticStyle:{height:"1.5rem"}},[e("p",{ref:"saveMessage",staticClass:"save-message",style:{color:"Saved successfully."===t.message?"greenyellow":"red"}},[t._v(t._s(t.message))])]),e("a",{staticStyle:{visibility:"hidden"},attrs:{href:"/Job Application Tracker",download:""}})])},b=[function(){var t=this,e=t._self._c;return e("th",{attrs:{scope:"col"}},[e("img",{staticClass:"icon",attrs:{src:a(1788)}})])}],y=(a(4114),a(4603),a(7566),a(8721),function(){var t=this,e=t._self._c;return e("div",["step"!==t.uid||!t.editing&&""!==t.val?t.editing||""===t.val&&"step"!==t.uid?e("input",{staticClass:"form-control",domProps:{value:t.val},on:{blur:t.onChange}}):e("div",{on:{click:function(e){t.editing=!t.editing}}},[t._v(t._s(t.val))]):e("select",{staticClass:"form-select",on:{change:t.onChange}},[e("option",{attrs:{selected:""}},[t._v("Select")]),t._l(t.steps,(function(a,i){return e("option",{key:i},[t._v(" "+t._s(a)+" ")])}))],2)])}),w=[],k={name:"TableCell",props:{val:{type:String,required:!0},uid:{type:String,required:!0},index:{type:Number,required:!0}},data:function(){return{editing:!1,steps:["Applied","Phone Screen","Assessment","Onsite","Accepted","Rejected","Closed"]}},methods:{onChange(t){this.editing=!1,this.$emit("update",t.target.value,this.index,this.uid)}}},_=k,C=(0,f.A)(_,y,w,!1,null,"57497560",null),S=C.exports;const A=a(8626);var x={components:{TableCell:S},name:"ApplicationTracker",props:{applicationsOrig:{type:Array,required:!0}},data:function(){return{applications:{},fields:["id","company","title","payScale","dateApplied","mostRecentContactDate","step","notes"],mobile:!1,message:"",storageDisabled:!1,sortKey:"id",lastSortKey:""}},computed:{sorted:function(t){return this.sortKey===this.lastSortKey?A.orderBy(this.applications,[e=>e[t.sortKey].toLowerCase()],["desc"]):A.orderBy(this.applications,[e=>e[t.sortKey].toLowerCase()],["asc"])}},mounted:function(){this.applications=this.applicationsOrig,this.checkDevice(),this.isStorageEnabled()},methods:{sort(t){t===this.sortKey&&t===this.lastSortKey?this.lastSortKey="!"+this.sortKey:this.lastSortKey=this.sortKey,this.sortKey=t},update(t,e,a){this.applications[e][a]=t},addRow(){this.addingRow=!0;let t=new c;t.id=String(this.applications.length+1),this.applications.push(t)},removeRow(t){this.applications.splice(t,1)},buildTracker(){let t=[];for(let e=0;e<this.applications.length;e++){let a=[];for(let t=0;t<this.fields.length;t++){let i=this.fields[t];a.push(this.applications[e][i])}t.push(a)}return t},download(){let t=this.buildTracker(),e=t.map((t=>t.join(","))).join("\n"),a=new Blob([e],{type:"data:text/csv;charset=utf-8,"}),i=document.createElement("a");i.href=window.URL.createObjectURL(a),i.setAttribute("download",this.getFileName()),document.body.appendChild(i),i.click(),document.body.removeChild(i)},save(){let t=this.buildTracker();try{window.localStorage.setItem("content",JSON.stringify(t)),this.message="Saved successfully."}catch{this.message="Failed to save. Check your browser storage settings."}this.$refs.saveMessage.style.display="block",this.$refs.saveMessage.classList.value+=" fade-in-fade-out",setTimeout((()=>{this.$refs.saveMessage.style.display="none"}),2500)},getFileName(){let t=new Date,e=t.getMonth()+1,a="0"===t.getSeconds()?"12":t.getSeconds();return"Job Application Tracker "+t.getFullYear()+"-"+e+"-"+t.getDate()+" "+t.getHours()+"-"+t.getMinutes()+"-"+a+".csv"},getStepStyle(t){switch(t){case"Applied":return"table-light";case"Phone Screen":return"table-info";case"Assessment":return"table-primary";case"Onsite":return"table-secondary";case"Accepted":return"table-success";case"Rejected":return"table-danger";case"Closed":return"table-dark"}},doFilter(t){return"Closed"!==t&&""!==t},checkDevice(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?this.mobile=!0:this.mobile=!1},isStorageEnabled(){window.localStorage.setItem("test","test");try{window.localStorage.getItem("test")}catch{this.storageDisabled=!0}}}},O=x,D=(0,f.A)(O,m,b,!1,null,"0b8e3e5a",null),T=D.exports,R={name:"App",components:{CreateOrUpload:g,ApplicationTracker:T},data:function(){return{applications:"",loaded:!1}},methods:{onCreate(t){this.applications=t,this.$nextTick((()=>{this.loaded=!0}))}}},j=R,K=(0,f.A)(j,s,o,!1,null,null,null),F=K.exports;a(8626);i.Ay.config.productionTip=!1,new i.Ay({render:t=>t(F)}).$mount("#app")},518:function(t,e,a){t.exports=a.p+"img/arrows-rotate-solid.0af92041.svg"},1788:function(t,e,a){t.exports=a.p+"img/sort-solid.7358aff1.svg"},3279:function(t,e,a){t.exports=a.p+"img/square-minus-whitesmoke.be46fc4d.svg"},9287:function(t,e,a){t.exports=a.p+"img/square-plus-whitesmoke.089f7363.svg"}},e={};function a(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=t,function(){var t=[];a.O=function(e,i,s,o){if(!i){var n=1/0;for(d=0;d<t.length;d++){i=t[d][0],s=t[d][1],o=t[d][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(r=!1,o<n&&(n=o));if(r){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[i,s,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p="/job-application-tracker/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,o,n=i[0],r=i[1],l=i[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(l)var d=l(a)}for(e&&e(i);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},i=self["webpackChunkjob_application_tracker"]=self["webpackChunkjob_application_tracker"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[504],(function(){return a(9268)}));i=a.O(i)})();
//# sourceMappingURL=app.d33560d8.js.map