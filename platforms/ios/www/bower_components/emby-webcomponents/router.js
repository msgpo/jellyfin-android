define(["loading","viewManager","skinManager","pluginManager","backdrop","browser","pageJs","appSettings","apphost"],function(e,n,t,r,o,i,a,s,u){function c(){o.clear(),e.show(),z.connect({enableAutoLogin:s.enableAutoLogin()}).then(function(n){l(n,e)})}function l(e,n){switch(e.State){case MediaBrowser.ConnectionState.SignedIn:n.hide(),t.loadUserSkin();break;case MediaBrowser.ConnectionState.ServerSignIn:e.ApiClient.getPublicUsers().then(function(n){n.length?Q.showLocalLogin(e.ApiClient,e.Servers[0].Id):Q.showLocalLogin(e.ApiClient,e.Servers[0].Id,!0)});break;case MediaBrowser.ConnectionState.ServerSelection:Q.showSelectServer();break;case MediaBrowser.ConnectionState.ConnectSignIn:Q.showWelcome();break;case MediaBrowser.ConnectionState.ServerUpdateNeeded:require(["alert"],function(e){e({text:Globalize.translate("sharedcomponents#ServerUpdateNeeded","https://emby.media"),html:Globalize.translate("sharedcomponents#ServerUpdateNeeded",'<a href="https://emby.media">https://emby.media</a>')}).then(function(){Q.showSelectServer()})})}}function d(e,n,t,r){var o=t.contentPath||t.path;0!=o.toLowerCase().indexOf("http")&&0!=o.indexOf("file:")&&(0!=o.indexOf("/")&&(o="/"+o),o=x()+o),e.querystring&&t.enableContentQueryString&&(o+="?"+e.querystring),require(["text!"+o],function(n){y(e,t,n,r)})}function h(e,n,t){S(e,t,function(){f(e,n,t)})}function f(e,n,t){var r=function(r){g(e,n,t,r)};require(t.dependencies||[],function(){t.controller?require([t.controller],r):r()})}function p(){var e=H;e&&(e.cancel=!0)}function g(e,t,r,o){if(J&&"home"==r.type)return void(J=!1);p();var i=e.isBack,a={url:x()+e.path,transition:r.transition,isBack:i,state:e.state,type:r.type,controllerFactory:o,options:{supportsThemeMedia:r.supportsThemeMedia||!1},autoFocus:r.autoFocus};H=a;var s=function(){"string"==typeof r.path?d(e,t,r,a):t()};return i?void n.tryRestoreView(a).then(function(){X={route:r,path:e.path}},s):void s()}function m(n){e.show(),require(["connectionManager"],function(t){z=t,z.connect({enableAutoLogin:s.enableAutoLogin()}).then(function(t){W=t,e.hide(),n=n||{},a({click:n.click!==!1,hashbang:n.hashbang!==!1,enableHistory:v()})})})}function v(){return i.xboxOne?!1:!0}function w(){return a.enableNativeHistory()}function S(n,r,o){var i=W;if(i&&(W=null,i.State!=MediaBrowser.ConnectionState.SignedIn&&!r.anonymous))return void l(i,e);var a=z.currentApiClient(),s=(n.pathname.toLowerCase(),X?X.route.startup:!0),d=n.isBack&&r.isDefaultRoute&&s;if(!(d||a&&a.isLoggedIn()||r.anonymous))return void c();if(d){if(u.supports("exit"))return void u.exit()}else{if(a&&a.isLoggedIn()){if(n.isBack&&(r.isDefaultRoute||r.startup)&&!s)return void C();if(r.isDefaultRoute)return void t.loadUserSkin();if(r.roles)return void b(a,r.roles).then(function(){a.ensureWebSocket(),o()},c)}o()}}function b(e,n){return Promise.all(n.split(",").map(function(n){return k(e,n)}))}function k(e,n){return"admin"==n?e.getCurrentUser().then(function(e){return e.Policy.IsAdministrator?Promise.resolve():Promise.reject()}):Promise.resolve()}function C(){return!u.supports("exitmenu")&&u.supports("exit")?void u.exit():(J=!0,t.loadUserSkin(),void(j||t.getCurrentSkin().showBackMenu().then(function(){j=!1})))}function y(e,t,r,o){r=Globalize.translateDocument(r,t.dictionary),o.view=r,n.loadView(o),X={route:t,path:e.path},e.handled=!0}function L(){var e=window.location.pathname||"",n=e.lastIndexOf("/");return e=-1!=n?e.substring(n):"/"+e,e&&"/"!=e||(e="/index.html"),e}function x(){return K}function I(e){return function(n,t){h(n,t,e)}}function B(){var e=X?X.path||"":"",n=e.indexOf("?"),t="";return-1!=n&&(t=e.substring(n)),t||""}function M(e,n){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t="[\\?&]"+e+"=([^&#]*)",r=new RegExp(t,"i"),o=r.exec(n||B());return null==o?"":decodeURIComponent(o[1].replace(/\+/g," "))}function R(){a.back()}function T(){var e=U();return e?"home"==e.type?!1:a.canGoBack():!1}function A(n,t){var r=x();return n=n.replace(r,""),X&&X.path==n&&"home"!=X.route.type?(e.hide(),Promise.resolve()):(a.show(n,t),new Promise(function(e){setTimeout(e,500)}))}function U(){return X?X.route:null}function q(){var e=t.getCurrentSkin(),n=e.getRoutes().filter(function(e){return"home"==e.type})[0];return A(r.mapRoute(e,n))}function G(e,n,r){"string"==typeof e?require(["connectionManager"],function(t){var o=n?t.getApiClient(n):t.currentApiClient();o.getItem(o.getCurrentUserId(),e).then(function(e){Q.showItem(e,r)})}):(2==arguments.length&&(r=arguments[1]),t.getCurrentSkin().showItem(e,r))}function O(e){t.getCurrentSkin().setTitle(e)}function P(){var e=t.getCurrentSkin(),n=e.getRoutes().filter(function(e){return"video-osd"==e.type})[0];return A(r.mapRoute(e,n))}function D(e,n){a(e,I(n)),$.push(n)}function F(){return $}function V(e){Y||(Y=document.querySelector(".backdropContainer")),Z||(Z=document.querySelector(".backgroundContainer")),"full"==e||e==Emby.TransparencyLevel.Full?(o.clear(!0),document.documentElement.classList.add("transparentDocument"),Z.classList.add("backgroundContainer-transparent"),Y.classList.add("hide")):"backdrop"==e||e==Emby.TransparencyLevel.Backdrop?(o.externalBackdrop(!0),document.documentElement.classList.add("transparentDocument"),Z.classList.add("backgroundContainer-transparent"),Y.classList.add("hide")):(o.externalBackdrop(!1),document.documentElement.classList.remove("transparentDocument"),Z.classList.remove("backgroundContainer-transparent"),Y.classList.remove("hide"))}function E(e,n,t){e.navigate=!1,a.pushState(e,n,t)}function N(){var e=window.location.pathname.replace(L(),"");e.lastIndexOf("/")==e.length-1&&(e=e.substring(0,e.length-1)),a.base(e)}var z,H,W,j,J,Q={showLocalLogin:function(e,n,t){var r=t?"manuallogin":"login";A("/startup/"+r+".html?serverid="+n)},showSelectServer:function(){A("/startup/selectserver.html")},showWelcome:function(){A("/startup/welcome.html")},showSettings:function(){A("/settings/settings.html")},showSearch:function(){t.getCurrentSkin().search()},showGenre:function(e){t.getCurrentSkin().showGenre(e)},showGuide:function(){t.getCurrentSkin().showGuide()},showLiveTV:function(){t.getCurrentSkin().showLiveTV()},showRecordedTV:function(){t.getCurrentSkin().showRecordedTV()},showFavorites:function(){t.getCurrentSkin().showFavorites()}},K=window.location.href.split("?")[0].replace(L(),"");K=K.split("#")[0],K.lastIndexOf("/")==K.length-1&&(K=K.substring(0,K.length-1));var X,Y,Z,$=[];return N(),Q.addRoute=D,Q.param=M,Q.back=R,Q.show=A,Q.start=m,Q.baseUrl=x,Q.canGoBack=T,Q.current=U,Q.beginConnectionWizard=c,Q.goHome=q,Q.showItem=G,Q.setTitle=O,Q.setTransparency=V,Q.getRoutes=F,Q.pushState=E,Q.enableNativeHistory=w,Q.showVideoOsd=P,Q.TransparencyLevel={None:0,Backdrop:1,Full:2},Q});