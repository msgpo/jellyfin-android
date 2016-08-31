define(["dialogHelper","dom","components/libraryoptionseditor/libraryoptionseditor","emby-button","listViewStyle","paper-icon-button-light","formDialogStyle"],function(e,t,i){function r(e,t){var i=y.library,r=y.refresh;ApiClient.addMediaPath(i.Name,t,r).then(function(){f=!0,a(e)},function(){require(["toast"],function(e){e(Globalize.translate("ErrorAddingMediaPathToVirtualFolder"))})})}function n(){var e=this,i=parseInt(e.getAttribute("data-index")),r=y.library,n=r.Locations[i];require(["confirm"],function(i){i(Globalize.translate("MessageConfirmRemoveMediaLocation"),Globalize.translate("HeaderRemoveMediaLocation")).then(function(){var i=y.refresh;ApiClient.removeMediaPath(r.Name,n,i).then(function(){f=!0,a(t.parentWithClass(e,"dlg-libraryeditor"))},function(){require(["toast"],function(e){e(Globalize.translate("DefaultErrorMessage"))})})})})}function o(e,t){var i="";return i+='<div class="listItem lnkPath">',i+='<i class="listItemIcon md-icon">folder</i>',i+='<div class="listItemBody">',i+='<h3 class="listItemBodyText">',i+=e,i+="</h3>",i+="</div>",i+='<button is="paper-icon-button-light" class="listItemButton btnRemovePath" data-index="'+t+'"><i class="md-icon">remove_circle</i></button>',i+="</div>"}function a(e){ApiClient.getVirtualFolders().then(function(t){var i=t.filter(function(e){return e.Name==y.library.Name})[0];i&&(y.library=i,l(e,y))})}function l(e,t){var i=t.library.Locations.map(o).join("");e.querySelector(".folderList").innerHTML=i;for(var r=e.querySelectorAll(".btnRemovePath"),a=0,l=r.length;l>a;a++)r[a].addEventListener("click",n)}function s(){var e=t.parentWithClass(this,"dlg-libraryeditor");require(["directorybrowser"],function(t){var i=new t;i.show({callback:function(t){t&&r(e,t),i.close()}})})}function d(e,t){l(e,t),e.querySelector(".btnAddFolder").addEventListener("click",s),i.embed(e.querySelector(".libraryOptions"),t.library.CollectionType,t.library.LibraryOptions)}function c(){var e=this,t=i.getLibraryOptions(e.querySelector(".libraryOptions"));ApiClient.updateVirtualFolderOptions(y.library.ItemId,t)}function u(){Dashboard.hideLoadingMsg(),f=!0,m.resolveWith(null,[f])}function b(){var t=this;t.show=function(t){var i=jQuery.Deferred();y=t,m=i,f=!1;var r=new XMLHttpRequest;return r.open("GET","components/medialibraryeditor/medialibraryeditor.template.html",!0),r.onload=function(){var i=this.response,r=e.createDialog({size:"small",modal:!1,removeOnClose:!0});r.classList.add("dlg-libraryeditor"),r.classList.add("ui-body-a"),r.classList.add("background-theme-a"),r.innerHTML=Globalize.translateDocument(i),r.querySelector(".formDialogHeaderTitle").innerHTML=t.library.Name,document.body.appendChild(r),d(r,t),r.addEventListener("closing",c),r.addEventListener("close",u),e.open(r),r.querySelector(".btnCancel").addEventListener("click",function(){e.close(r)}),a(r)},r.send(),i.promise()}}var m,f,y;return b});