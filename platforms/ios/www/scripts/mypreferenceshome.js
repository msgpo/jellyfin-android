!function(e){function t(t,n,i){var o="";o+='<div class="paperCheckboxList">',o+=i.map(function(e){var t="",i="chkGroupFolder"+e.Id,o=null!=n.Configuration.ExcludeFoldersFromGrouping&&-1==n.Configuration.ExcludeFoldersFromGrouping.indexOf(e.Id)||-1!=n.Configuration.GroupedFolders.indexOf(e.Id),r=o?' checked="checked"':"";return t+='<paper-checkbox class="chkGroupFolder" data-folderid="'+e.Id+'" id="'+i+'"'+r+">"+e.Name+"</paper-checkbox>"}).join(""),o+="</div>",e(".folderGroupList",t).html(o)}function n(t,n,i){var o="";o+='<div class="paperCheckboxList">',o+=i.map(function(e){var t="",i="chkPlainFolder"+e.Id,o=-1==n.Configuration.PlainFolderViews.indexOf(e.Id),r=o?' checked="checked"':"";return t+='<paper-checkbox class="chkPlainFolder" data-folderid="'+e.Id+'" id="'+i+'"'+r+">"+e.Name+"</paper-checkbox>"}).join(""),o+="</div>",e(".viewStylesList",t).html(o),i.length?e(".viewStylesSection",t).show():e(".viewStylesSection",t).hide()}function i(t,n,i){var o="";o+='<div class="paperCheckboxList">',o+=i.Items.map(function(e){var t="",i="chkIncludeInLatest"+e.Id,o=-1==n.Configuration.LatestItemsExcludes.indexOf(e.Id),r=o?' checked="checked"':"";return t+='<paper-checkbox class="chkIncludeInLatest" data-folderid="'+e.Id+'" id="'+i+'"'+r+">"+e.Name+"</paper-checkbox>"}).join(""),o+="</div>",e(".latestItemsList",t).html(o)}function o(t,n,i){var o="",r=0;o+=i.Items.map(function(e){var t="";return t+='<paper-icon-item class="viewItem" data-viewid="'+e.Id+'">',t+='<paper-fab mini style="background-color:#444;" icon="folder-open" item-icon></paper-fab>',t+="<paper-item-body>",t+="<div>",t+=e.Name,t+="</div>",t+="</paper-item-body>",r>0?t+='<paper-icon-button icon="keyboard-arrow-up" class="btnViewItemUp btnViewItemMove" title="'+Globalize.translate("ButtonUp")+'"></paper-icon-button>':i.Items.length>1&&(t+='<paper-icon-button icon="keyboard-arrow-down" class="btnViewItemDown btnViewItemMove" title="'+Globalize.translate("ButtonDown")+'"></paper-icon-button>'),t+="</paper-icon-item>",r++,t}).join(""),e(".viewOrderList",t).html(o)}function r(r,a,s){r.querySelector(".chkDisplayCollectionView").checked=a.Configuration.DisplayCollectionsView||!1,r.querySelector(".chkHidePlayedFromLatest").checked=a.Configuration.HidePlayedInLatest||!1,r.querySelector(".chkDisplayChannelsInline").checked=a.Configuration.DisplayChannelsInline||!1,e("#selectHomeSection1",r).val(s.CustomPrefs.home0||""),e("#selectHomeSection2",r).val(s.CustomPrefs.home1||""),e("#selectHomeSection3",r).val(s.CustomPrefs.home2||""),e("#selectHomeSection4",r).val(s.CustomPrefs.home3||"");var c=ApiClient.getItems(a.Id,{sortBy:"SortName"}),l=ApiClient.getUserViews({},a.Id),d=ApiClient.getJSON(ApiClient.getUrl("Users/"+a.Id+"/SpecialViewOptions")),u=ApiClient.getJSON(ApiClient.getUrl("Users/"+a.Id+"/GroupingOptions"));Promise.all([c,l,d,u]).then(function(e){t(r,a,e[3]),i(r,a,e[0]),o(r,a,e[1]),n(r,a,e[2]),Dashboard.hideLoadingMsg()})}function a(t,n,i){return n.Configuration.DisplayCollectionsView=t.querySelector(".chkDisplayCollectionView").checked,n.Configuration.HidePlayedInLatest=t.querySelector(".chkHidePlayedFromLatest").checked,n.Configuration.DisplayChannelsInline=t.querySelector(".chkDisplayChannelsInline").checked,n.Configuration.LatestItemsExcludes=e(".chkIncludeInLatest",t).get().filter(function(e){return!e.checked}).map(function(e){return e.getAttribute("data-folderid")}),n.Configuration.ExcludeFoldersFromGrouping=null,n.Configuration.GroupedFolders=e(".chkGroupFolder",t).get().filter(function(e){return e.checked}).map(function(e){return e.getAttribute("data-folderid")}),n.Configuration.PlainFolderViews=e(".chkPlainFolder",t).get().filter(function(e){return!e.checked}).map(function(e){return e.getAttribute("data-folderid")}),n.Configuration.OrderedViews=e(".viewItem",t).get().map(function(e){return e.getAttribute("data-viewid")}),i.CustomPrefs.home0=e("#selectHomeSection1",t).val(),i.CustomPrefs.home1=e("#selectHomeSection2",t).val(),i.CustomPrefs.home2=e("#selectHomeSection3",t).val(),i.CustomPrefs.home3=e("#selectHomeSection4",t).val(),ApiClient.updateDisplayPreferences("home",i,n.Id,AppSettings.displayPreferencesKey()).then(function(){return ApiClient.updateUserConfiguration(n.Id,n.Configuration)})}function s(e){Dashboard.showLoadingMsg();var t=getParameterByName("userId")||Dashboard.getCurrentUserId();AppInfo.enableAutoSave||Dashboard.showLoadingMsg(),ApiClient.getUser(t).then(function(t){ApiClient.getDisplayPreferences("home",t.Id,AppSettings.displayPreferencesKey()).then(function(n){a(e,t,n).then(function(){Dashboard.hideLoadingMsg(),AppInfo.enableAutoSave||require(["toast"],function(e){e(Globalize.translate("SettingsSaved"))})},function(){Dashboard.hideLoadingMsg()})})})}function c(){var t=e(this).parents(".page")[0];return s(t),!1}pageIdOn("pageinit","homeScreenPreferencesPage",function(){var t=this;e(".viewOrderList",t).on("click",".btnViewItemMove",function(){var t=e(this).parents(".viewItem"),n=t.parents(".paperList");if(e(this).hasClass("btnViewItemDown")){var i=t.next();t.remove().insertAfter(i)}else{var o=t.prev();t.remove().insertBefore(o)}e(".viewItem",n).each(function(){var t=e(".btnViewItemMove",this)[0];e(this).prev(".viewItem").length?(t.classList.add("btnViewItemUp"),t.classList.remove("btnViewItemDown"),t.icon="keyboard-arrow-up"):(t.classList.remove("btnViewItemUp"),t.classList.add("btnViewItemDown"),t.icon="keyboard-arrow-down")})}),e(".homeScreenPreferencesForm").off("submit",c).on("submit",c),AppInfo.enableAutoSave?t.querySelector(".btnSave").classList.add("hide"):t.querySelector(".btnSave").classList.remove("hide")}),pageIdOn("pageshow","homeScreenPreferencesPage",function(){var e=this;Dashboard.showLoadingMsg();var t=getParameterByName("userId")||Dashboard.getCurrentUserId();ApiClient.getUser(t).then(function(t){ApiClient.getDisplayPreferences("home",t.Id,AppSettings.displayPreferencesKey()).then(function(n){r(e,t,n)})})}),pageIdOn("pagebeforehide","homeScreenPreferencesPage",function(){var e=this;AppInfo.enableAutoSave&&s(e)})}(jQuery,window,document);