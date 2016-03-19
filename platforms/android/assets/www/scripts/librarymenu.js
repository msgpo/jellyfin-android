define(["imageLoader","jQuery","paper-icon-button","paper-button","emby-icons"],function(e,n){function t(){var n="",t=browserInfo.safari?"chevron-left":"arrow-back";n+='<paper-icon-button icon="'+t+'" class="headerButton headerButtonLeft headerBackButton hide"></paper-icon-button>',AppInfo.enableNavDrawer&&(n+='<paper-icon-button icon="menu" class="headerButton mainDrawerButton barsMenuButton headerButtonLeft"></paper-icon-button>'),n+='<div class="libraryMenuButtonText headerButton">'+Globalize.translate("ButtonHome")+"</div>",n+='<div class="viewMenuSecondary">',n+='<span class="headerSelectedPlayer"></span>',n+='<paper-icon-button icon="cast" class="btnCast headerButton headerButtonRight hide"></paper-icon-button>',AppInfo.enableSearchInTopMenu&&(n+='<paper-icon-button icon="search" class="headerButton headerButtonRight headerSearchButton hide" onclick="Search.showSearchPanel();"></paper-icon-button>',n+='<div class="viewMenuSearch hide">',n+='<form class="viewMenuSearchForm">',n+='<input type="text" data-role="none" data-type="search" class="headerSearchInput" autocomplete="off" spellcheck="off" />',n+='<paper-icon-button icon="close" class="btnCloseSearch"></paper-icon-button>',n+="</form>",n+="</div>"),n+='<paper-icon-button icon="mic" class="headerButton headerButtonRight headerVoiceButton hide"></paper-icon-button>',n+='<paper-button class="headerButton headerButtonRight btnNotifications subdued" type="button" title="Notifications"><div class="btnNotificationsInner">0</div></paper-button>',n+='<paper-icon-button icon="person" class="headerButton headerButtonRight headerUserButton"></paper-icon-button>',browserInfo.mobile||Dashboard.isConnectMode()||(n+='<paper-icon-button icon="settings" class="headerButton headerButtonRight dashboardEntryHeaderButton" onclick="return LibraryMenu.onSettingsClicked(event);"></paper-icon-button>'),n+="</div>";var a=document.createElement("div");a.classList.add("viewMenuBar"),a.classList.add("ui-body-b"),a.innerHTML=n,document.body.appendChild(a),e.lazyChildren(document.querySelector(".viewMenuBar")),document.dispatchEvent(new CustomEvent("headercreated",{})),d()}function a(){Dashboard.exitOnBack()?Dashboard.exit():history.back()}function r(e){var n,t=document.querySelector(".viewMenuBar"),a=t.querySelector(".headerUserButton");if(e&&e.name&&e.imageUrl){var i=26,r=e.imageUrl;e.supportsImageParams&&(r+="&height="+i*Math.max(window.devicePixelRatio||1,2)),a&&(o(a,r,null),n=!0)}a&&!n&&o(a,null,"person"),e&&s(e.localUser),O=!1}function o(e,n,t){var a=e,e=document.createElement("paper-icon-button");e.className=a.className,e.addEventListener("click",l),n?(e.classList.add("headerUserButtonRound"),e.src=n):t?(e.classList.remove("headerUserButtonRound"),e.icon=t):e.classList.remove("headerUserButtonRound"),a.parentNode.replaceChild(e,a)}function s(e){var n=document.querySelector(".viewMenuBar"),t=n.querySelector(".headerSearchButton"),a=n.querySelector(".btnCast"),i=n.querySelector(".dashboardEntryHeaderButton");e?(a.classList.remove("hide"),t&&t.classList.remove("hide"),i&&(e.Policy.IsAdministrator?i.classList.remove("hide"):i.classList.add("hide")),require(["voice/voice"],function(e){e.isSupported()?n.querySelector(".headerVoiceButton").classList.remove("hide"):n.querySelector(".headerVoiceButton").classList.add("hide")})):(a.classList.add("hide"),n.querySelector(".headerVoiceButton").classList.add("hide"),t&&t.classList.add("hide"),i&&i.classList.add("hide"))}function c(){require(["voice/voice"],function(e){e.startListening()})}function l(e){Dashboard.showUserFlyout(e.target)}function d(){var e=document.querySelector(".mainDrawerButton");e&&e.addEventListener("click",v);var n=document.querySelector(".headerBackButton");n&&n.addEventListener("click",a);var t=document.querySelector(".headerVoiceButton");t&&t.addEventListener("click",c);var i=document.querySelector(".headerUserButton");i&&i.addEventListener("click",l);var r=document.querySelector(".viewMenuBar");F(r),r.querySelector(".btnNotifications").addEventListener("click",function(){Dashboard.navigate("notificationlist.html")})}function u(e,n){return LibraryBrowser.getHref(e,n)}function v(){var e=document.querySelector(".mainDrawerPanel");"drawer"==e.selected?b(e):h(e)}function h(e){e=e||document.querySelector(".mainDrawerPanel"),e.openDrawer(),G=(new Date).getTime()}function m(){browserInfo.mobile&&document.body.classList.add("bodyWithPopupOpen");var e=n.mobile.activePage;(z||U)&&ConnectionManager.user(window.ApiClient).then(function(n){var t=document.querySelector(".mainDrawerPanel .mainDrawer");z&&(y(t),L(n,t),f(n,t),k(n,t),document.dispatchEvent(new CustomEvent("libraryMenuCreated",{})),S(n.localUser)),(z||U)&&(g(e,n,t),U=!1),z=!1}),q(e),document.querySelector(".mainDrawerPanel #drawer").classList.add("verticalScrollingDrawer")}function b(e){e=e||document.querySelector(".mainDrawerPanel"),e.closeDrawer()}function p(e){var n=e.target;"drawer"!=n.selected?(document.body.classList.remove("bodyWithPopupOpen"),document.querySelector(".mainDrawerPanel #drawer").classList.remove("verticalScrollingDrawer")):m()}function y(e){if(!e.querySelector(".mainDrawerContent")){var n='<div class="mainDrawerContent">';n+='<div class="userheader">',n+="</div>",n+='<div class="libraryDrawerContent">',n+="</div>",n+='<div class="dashboardDrawerContent">',n+="</div>",n+='<div class="userFooter">',n+="</div>",n+="</div>",e.innerHTML=n}}function L(e,n){var t="",a=window.ApiClient?"home.html":"selectserver.html?showuser=1";t+='<div style="margin-top:5px;"></div>',t+='<a class="lnkMediaFolder sidebarLink" href="'+a+'" onclick="return LibraryMenu.onLinkClicked(event, this);">',t+="<div style=\"background-image:url('css/images/mblogoicon.png');width:28px;height:28px;background-size:contain;background-repeat:no-repeat;background-position:center center;border-radius:1000px;vertical-align:middle;margin:0 1.6em 0 1.5em;display:inline-block;\"></div>",t+=Globalize.translate("ButtonHome"),t+="</a>",t+='<a class="sidebarLink lnkMediaFolder" data-itemid="remote" href="nowplaying.html" onclick="return LibraryMenu.onLinkClicked(event, this);"><iron-icon icon="tablet-android" class="sidebarLinkIcon" style="color:#673AB7;"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonRemote")+"</span></a>";var i=n.querySelector(".userheader");i.innerHTML=t,require(["imageLoader"],function(e){e.fillImages(i.getElementsByClassName("lazy"))})}function f(e,n){var t="";t+='<div class="sidebarDivider"></div>',t+='<div class="libraryMenuOptions">',t+="</div>",n.querySelector(".libraryDrawerContent").innerHTML=t}function g(e,n,t){var a="";a+='<div class="sidebarDivider"></div>',a+=Dashboard.getToolsMenuHtml(e),a=a.split("href=").join('onclick="return LibraryMenu.onLinkClicked(event, this);" href='),t.querySelector(".dashboardDrawerContent").innerHTML=a}function k(e,n){var t="";t+='<div class="adminMenuOptions">',t+='<div class="sidebarDivider"></div>',t+='<div class="sidebarHeader">',t+=Globalize.translate("HeaderAdmin"),t+="</div>",t+='<a class="sidebarLink lnkMediaFolder lnkManageServer" data-itemid="dashboard" href="#"><iron-icon icon="dashboard" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonManageServer")+"</span></a>",t+='<a class="sidebarLink lnkMediaFolder editorViewMenu" data-itemid="editor" onclick="return LibraryMenu.onLinkClicked(event, this);" href="edititemmetadata.html"><iron-icon icon="mode-edit" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonMetadataManager")+"</span></a>",browserInfo.mobile||(t+='<a class="sidebarLink lnkMediaFolder" data-itemid="reports" onclick="return LibraryMenu.onLinkClicked(event, this);" href="reports.html"><iron-icon icon="insert-chart" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonReports")+"</span></a>"),t+="</div>",t+='<div class="userMenuOptions">',t+='<div class="sidebarDivider"></div>',e.localUser&&AppInfo.isNativeApp&&browserInfo.android&&(t+='<a class="sidebarLink lnkMediaFolder lnkMySettings" onclick="return LibraryMenu.onLinkClicked(event, this);" href="mypreferencesmenu.html?userId='+e.localUser.Id+'"><iron-icon icon="settings" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonSettings")+"</span></a>"),t+='<a class="sidebarLink lnkMediaFolder lnkMySync" data-itemid="mysync" onclick="return LibraryMenu.onLinkClicked(event, this);" href="mysync.html"><iron-icon icon="sync" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonSync")+"</span></a>",Dashboard.isConnectMode()&&(t+='<a class="sidebarLink lnkMediaFolder" data-itemid="selectserver" onclick="return LibraryMenu.onLinkClicked(event, this);" href="selectserver.html?showuser=1"><iron-icon icon="wifi" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonSelectServer")+"</span></a>"),e.localUser&&(t+='<a class="sidebarLink lnkMediaFolder" data-itemid="logout" onclick="return LibraryMenu.onLogoutClicked(this);" href="#"><iron-icon icon="lock" class="sidebarLinkIcon"></iron-icon><span class="sidebarLinkText">'+Globalize.translate("ButtonSignOut")+"</span></a>"),t+="</div>",n.querySelector(".userFooter").innerHTML=t,n.querySelector(".lnkManageServer").addEventListener("click",C)}function w(){var e=this.getElementsByClassName("sectionName")[0],n=e?e.innerHTML:this.innerHTML;LibraryMenu.setTitle(n)}function M(e,n){return e.getUserViews({},n).then(function(e){for(var n=e.Items,t=[],a=0,i=n.length;i>a;a++){var r=n[a];if(t.push(r),"livetv"==r.CollectionType){r.ImageTags={},r.icon="live-tv",r.onclick="LibraryBrowser.showTab('livetv.html', 0);";var o=Object.assign({},r);o.Name=Globalize.translate("ButtonGuide"),o.ImageTags={},o.icon="dvr",o.url="livetv.html?tab=1",o.onclick="LibraryBrowser.showTab('livetv.html', 1);",t.push(o);var s=Object.assign({},r);s.Name=Globalize.translate("ButtonRecordedTv"),s.ImageTags={},s.icon="video-library",s.url="livetv.html?tab=3",s.onclick="LibraryBrowser.showTab('livetv.html', 3);",t.push(s)}}return t})}function B(e,n){var t=document.querySelector(e);t&&(n?t.classList.remove("hide"):t.classList.add("hide"))}function S(e){if(!e)return B(".adminMenuOptions",!1),B(".lnkMySync",!1),void B(".userMenuOptions",!1);var n=Dashboard.getCurrentUserId(),t=window.ApiClient;M(t,n).then(function(e){var n=e,t="";t+='<div class="sidebarHeader">',t+=Globalize.translate("HeaderMedia"),t+="</div>",t+=n.map(function(e){var n="folder",t="inherit",a=e.Id;"channels"==e.CollectionType?a="channels":"livetv"==e.CollectionType&&(a="livetv"),"photos"==e.CollectionType?(n="photo-library",t="#009688"):"music"==e.CollectionType||"musicvideos"==e.CollectionType?(n="library-music",t="#FB8521"):"books"==e.CollectionType?(n="library-books",t="#1AA1E1"):"playlists"==e.CollectionType?(n="view-list",t="#795548"):"games"==e.CollectionType?(n="games",t="#F44336"):"movies"==e.CollectionType?(n="video-library",t="#CE5043"):"channels"==e.CollectionType||"Channel"==e.Type?(n="videocam",t="#E91E63"):"tvshows"==e.CollectionType?(n="tv",t="#4CAF50"):"livetv"==e.CollectionType&&(n="live-tv",t="#293AAE"),n=e.icon||n;var i=e.onclick?" function(){"+e.onclick+"}":"null";return'<a data-itemid="'+a+'" class="lnkMediaFolder sidebarLink" onclick="return LibraryMenu.onLinkClicked(event, this, '+i+');" href="'+u(e,e.CollectionType)+'"><iron-icon icon="'+n+'" class="sidebarLinkIcon" style="color:'+t+'"></iron-icon><span class="sectionName">'+e.Name+"</span></a>"}).join("");var a=document.querySelector(".libraryMenuOptions");a.innerHTML=t;for(var i=a,r=i.querySelectorAll(".sidebarLink"),o=0,s=r.length;s>o;o++)r[o].removeEventListener("click",w),r[o].addEventListener("click",w)}),e.Policy.IsAdministrator?B(".adminMenuOptions",!0):B(".adminMenuOptions",!1),e.Policy.EnableSync?B(".lnkMySync",!0):B(".lnkMySync",!1)}function C(){b(),Dashboard.navigate("dashboard.html")}function T(){return getParameterByName("topParentId")||null}function D(){var e=document,n=e.querySelector(".btnCast"),t=MediaController.getPlayerInfo();t.isLocalPlayer?(n.icon="cast",n.classList.remove("btnActiveCast"),e.querySelector(".headerSelectedPlayer").innerHTML=""):(n.icon="cast-connected",n.classList.add("btnActiveCast"),e.querySelector(".headerSelectedPlayer").innerHTML=t.deviceName||t.name)}function q(e){var n,t,a=e.classList.contains("liveTvPage"),i=e.classList.contains("channelsPage"),r=e.classList.contains("metadataEditorPage"),o=e.classList.contains("reportsPage"),s=e.classList.contains("mySyncPage"),c=a||i||r||o||s||e.classList.contains("allLibraryPage")?"":T()||"",l=document.getElementsByClassName("lnkMediaFolder");for(n=0,t=l.length;t>n;n++){var d=l[n],u=d.getAttribute("data-itemid");i&&"channels"==u?d.classList.add("selectedMediaFolder"):a&&"livetv"==u?d.classList.add("selectedMediaFolder"):r&&"editor"==u?d.classList.add("selectedMediaFolder"):o&&"reports"==u?d.classList.add("selectedMediaFolder"):s&&"mysync"==u?d.classList.add("selectedMediaFolder"):c&&u==c?d.classList.add("selectedMediaFolder"):d.classList.remove("selectedMediaFolder")}}function I(e){var n=e.querySelectorAll(".scopedLibraryViewNav a"),t=e.classList.contains("liveTvPage")||e.classList.contains("channelsPage")||e.classList.contains("metadataEditorPage")||e.classList.contains("reportsPage")||e.classList.contains("mySyncPage")||e.classList.contains("allLibraryPage")?"":T()||"";if(t)for(i=0,length=n.length;length>i;i++){var a=n[i],r=a.href;-1==r.indexOf("#")&&(r=replaceQueryString(r,"topParentId",t),a.href=r)}}function P(e,n){var t=n;"UserConfigurationUpdated"===t.MessageType&&t.Data.Id==Dashboard.getCurrentUserId()&&(R=!0)}function E(e){var n=document.querySelector(".viewMenuBar");e.classList.contains("standalonePage")?n.classList.add("hide"):n.classList.remove("hide"),O&&ConnectionManager.user(window.ApiClient).then(r)}function A(e){var n=e.getAttribute("data-title")||e.getAttribute("data-contextname");if(!n){var t=getParameterByName("titlekey");t&&(n=Globalize.translate(t))}n||e.classList.contains("type-interior")&&(n=Globalize.translate("ButtonHome")),n&&LibraryMenu.setTitle(n)}function H(e){var n=!e.classList.contains("homePage")&&history.length>0,t=document.querySelector(".headerBackButton"),a=AppInfo.enableBackButton;a||(a="true"==e.getAttribute("data-backbutton")),t&&(n&&a?t.classList.remove("hide"):t.classList.add("hide"))}function F(e){AppInfo.enableHeadRoom&&require(["headroom"],function(){var n=new Headroom(e,{tolerance:{down:40,up:0}});n.init(),e.classList.add("headroomEnabled")})}function N(e){R=!0,Events.off(e,"websocketmessage",P),Events.on(e,"websocketmessage",P)}function x(){var e=document.querySelector(".mainDrawerPanel #drawer");e&&e.classList.add("darkDrawer")}var z=!0,U=!0,O=!0,G=(new Date).getTime(),R=!1;window.LibraryMenu={getTopParentId:T,onLinkClicked:function(e,n,t){return 1!=e.which?!0:((new Date).getTime()-G>200&&setTimeout(function(){b();var e=browserInfo.mobile?350:200;setTimeout(function(){t?t():Dashboard.navigate(n.href)},e)},50),e.stopPropagation(),e.preventDefault(),!1)},onLogoutClicked:function(){if((new Date).getTime()-G>200){b();var e=browserInfo.mobile?350:200;setTimeout(function(){Dashboard.logout()},e)}return!1},onHardwareMenuButtonClick:function(){v()},onSettingsClicked:function(e){return 1!=e.which?!0:(Dashboard.navigate("dashboard.html"),!1)},setTitle:function(e){document.querySelector(".libraryMenuButtonText").innerHTML=e},setBackButtonVisible:function(e){var n=document.querySelector(".headerBackButton");n&&(e?n.classList.remove("hide"):n.classList.add("hide"))},setMenuButtonVisible:function(e){var n=document.querySelector(".mainDrawerButton");n&&n.classList.remove(!e&&browserInfo.mobile?"hide":"hide")},setTransparentMenu:function(e){var n=document.querySelector(".viewMenuBar");n&&(e?n.classList.add("semiTransparent"):n.classList.remove("semiTransparent"))}},pageClassOn("pageinit","page",function(){var e=this,n=e.classList.contains("libraryPage");if(n)for(var t=e.querySelectorAll(".libraryViewNav"),a=0,i=t.length;i>a;a++)F(t[a])}),pageClassOn("pagebeforeshow","page",function(){var e=this;e.classList.contains("type-interior")&&(U=!0),E(e),I(e)}),pageClassOn("pageshow","page",function(e){var n=this;e.detail.isRestored||window.scrollTo(0,0),A(n),H(n);var t=n.classList.contains("libraryPage");t?(document.body.classList.add("libraryDocument"),document.body.classList.remove("dashboardDocument"),document.body.classList.remove("hideMainDrawer")):n.classList.contains("type-interior")?(document.body.classList.remove("libraryDocument"),document.body.classList.add("dashboardDocument"),document.body.classList.remove("hideMainDrawer")):(document.body.classList.remove("libraryDocument"),document.body.classList.remove("dashboardDocument"),document.body.classList.add("hideMainDrawer"))}),window.ApiClient&&N(window.ApiClient);var V=document.querySelector(".mainDrawerPanel");V.addEventListener("iron-select",p),t(),Events.on(ConnectionManager,"apiclientcreated",function(e,n){N(n)}),Events.on(ConnectionManager,"localusersignedin",function(e,n){R=!0,z=!0,x(),ConnectionManager.user(ConnectionManager.getApiClient(n.ServerId)).then(r)}),Events.on(ConnectionManager,"localusersignedout",function(){R=!0,z=!0,r()}),Events.on(MediaController,"playerchange",function(){D()}),x()});