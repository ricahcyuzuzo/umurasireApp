!function(){function e(e,t){return"function"==typeof __an_obj_extend_thunk?__an_obj_extend_thunk(e,t):e}function t(e,t){"function"==typeof __an_err_thunk&&__an_err_thunk(e,t)}function n(e,t){if("function"==typeof __an_redirect_thunk)__an_redirect_thunk(e);else{var n=navigator.connection;navigator.__an_connection&&(n=navigator.__an_connection),window==window.top&&n&&n.downlinkMax<=.115&&"function"==typeof HTMLIFrameElement&&HTMLIFrameElement.prototype.hasOwnProperty("srcdoc")?(window.__an_resize=function(e,t,n){var r=e.frameElement;r&&"__an_if"==r.getAttribute("name")&&(t&&(r.style.width=t+"px"),n&&(r.style.height=n+"px"))},document.write('<iframe name="__an_if" style="width:0;height:0" srcdoc="<script type=\'text/javascript\' src=\''+e+"&"+t.bdfif+"=1'></sc"),document.write('ript>" frameborder="0" scrolling="no" marginheight=0 marginwidth=0 topmargin="0" leftmargin="0" allowtransparency="true"></iframe>')):document.write('<script language="javascript" src="'+e+'"></scr'+'ipt>')}};var r=function(e){this.rdParams=e};r.prototype={constructor:r,walkAncestors:function(e){try{if(!window.location.ancestorOrigins)return;for(var t=0,n=window.location.ancestorOrigins.length;n>t;t++)e.call(null,window.location.ancestorOrigins[t],t)}catch(r){"undefined"!=typeof console}return[]},walkUpWindows:function(e){var t,n=[];do try{t=t?t.parent:window,e.call(null,t,n)}catch(r){return"undefined"!=typeof console,n.push({referrer:null,location:null,isTop:!1}),n}while(t!=window.top);return n},getPubUrlStack:function(e){var n,r=[],o=null,i=null,a=null,c=null,d=null,s=null,u=null;for(n=e.length-1;n>=0;n--){try{a=e[n].location}catch(l){"undefined"!=typeof console,t(l,"AnRDModule::getPubUrlStack:: location")}if(a)i=encodeURIComponent(a),r.push(i),u||(u=i);else if(0!==n){c=e[n-1];try{d=c.referrer,s=c.ancestor}catch(l){"undefined"!=typeof console,t(l,"AnRDModule::getPubUrlStack:: prevFrame")}d?(i=encodeURIComponent(d),r.push(i),u||(u=i)):s?(i=encodeURIComponent(s),r.push(i),u||(u=i)):r.push(o)}else r.push(o)}return{stack:r,detectUrl:u}},getLevels:function(){var e=this.walkUpWindows(function(e,n){try{n.push({referrer:e.document.referrer||null,location:e.location.href||null,isTop:e==window.top})}catch(r){n.push({referrer:null,location:null,isTop:e==window.top}),"undefined"!=typeof console,t(r,"AnRDModule::getLevels")}});return this.walkAncestors(function(t,n){e[n].ancestor=t}),e},getRefererInfo:function(){var e="";try{var n=this.getLevels(),r=n.length-1,o=null!==n[r].location||r>0&&null!==n[r-1].referrer,i=this.getPubUrlStack(n);e=this.rdParams.rdRef+"="+i.detectUrl+"&"+this.rdParams.rdTop+"="+o+"&"+this.rdParams.rdIfs+"="+r+"&"+this.rdParams.rdStk+"="+i.stack+"&"+decodeURI(this.rdParams.rdQs)}catch(a){e="","undefined"!=typeof console,t(a,"AnRDModule::getRefererInfo")}return e}};var o=function(n){var o="";try{n=e(n,0);var i=e(new r(n),1);return i.getRefererInfo()}catch(a){o="","undefined"!=typeof console,t(a,"AnRDModule::executeRD")}return o};;var c="https://ib.adnxs.com/ttj?ttjb=1&bdc=1632063386&bdh=-s6hEpxY9IBEN0z2uYL4B8eEetw.";c+="&"+o({rdRef:"bdref",rdTop:"bdtop",rdIfs:"bdifs",rdStk:"bstk",rdQs:"&id=7048865&psa=0&cb=482179703&gdpr=0&gdpr_consent=&loc=%2C&pubclick=https%3A%2F%2Ffra1-ib.adnxs.com%2Fclick%3FAAAAAAAAAAAAAAAAAAAAAAAAAKCZmak_AAAAAAAAAAAAAAAAAAAAAGR0zuNV0IxdXPWCrnalv2CZT0dhAAAAAGMBHQHKIAAA5QAAAAIAAABPUpECmKoUAAAAAAAAAAAAVVNEAEABMgD1wwAAAAABAgEAAAAAANgAbRaw1wAAAAA.%2Fbcr%3DAAAAAAAAAAA%3D%2Fbn%3D90834%2Fclickenc%3Dhttps%253A%252F%252Fadclick.g.doubleclick.net%252Fpcs%252Fclick%25253Fxai%25253DAKAOjsuAmUwTuhBlcyROqn3XiKKyyIsY4mP4s1Zlde-otPhhkB3sc2K1tIEiS4HbzpBA9vAycTQNU-zSdWTG7sQlC79_bx0dKzrMmtk4WjNFKr4KuV8a-6wANwN3lMgru23jsujpgOeQzvcIYekVEsnHorkCgIboMjZB3DAD6Dcgp-FXFYrErsHv3WKvDXeyBUtu3YO_Ga_Tl9tCSW3NMpbwieDCVEdeZ16KUmgR1MBQ6c4d6QpYVq3lATQT_Grv7gIeDMUiaeGHmhOzI8awnfyrrBGyWXyhTFuMKkBP02lF1ff5VjAGf_2LIyCK1fEJeLwPYLiYX-b0TzeVBthdEXk%252526sai%25253DAMfl-YRqKkZ5L6FpgAZ2MlLs2XSCL_g0FafjjhWkNilHibiZApO_uar_HWDoAeNjRp3JUucy-kVYCCVGpa3qiEFqKqN7QKMMY5onTHkV_cPPIMfJlpN3pDv-P5WjrtGVlow%252526sig%25253DCg0ArKJSzChsY61A1RMzEAE%252526fbs_aeid%25253D%25255Bgw_fbsaeid%25255D%252526urlfix%25253D1%252526adurl%25253D"}),n(c,{bdfif:"bdfif"})}();