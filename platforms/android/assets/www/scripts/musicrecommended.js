define(["jQuery"],function(e){function t(){var t=e(window).width();return t>=1920?9:t>=1200?12:t>=1e3?10:8}function r(){return browserInfo.mobile&&AppInfo.enableAppLayouts}function a(){return r()?"overflowSquare":"square"}function i(e,r){Dashboard.showLoadingMsg();var i=Dashboard.getCurrentUserId(),n={IncludeItemTypes:"Audio",Limit:t(),Fields:"PrimaryImageAspectRatio,SyncInfo",ParentId:r,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb"};ApiClient.getJSON(ApiClient.getUrl("Users/"+i+"/Items/Latest",n)).then(function(t){var r=e.querySelector("#recentlyAddedSongs");r.innerHTML=LibraryBrowser.getPosterViewHtml({items:t,showUnplayedIndicator:!1,showLatestItemsPopup:!1,shape:a(),showTitle:!0,showParentTitle:!0,lazy:!0,centerText:!0,overlayPlayButton:!0}),ImageLoader.lazyChildren(r),Dashboard.hideLoadingMsg(),LibraryBrowser.setLastRefreshed(e)})}function n(r,i){var n={SortBy:"DatePlayed",SortOrder:"Descending",IncludeItemTypes:"Audio",Limit:t(),Recursive:!0,Fields:"PrimaryImageAspectRatio,AudioInfo,SyncInfo",Filters:"IsPlayed",ParentId:i,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb"};ApiClient.getItems(Dashboard.getCurrentUserId(),n).then(function(t){var i;i=t.Items.length?e("#recentlyPlayed",r).show()[0]:e("#recentlyPlayed",r).hide()[0];var n=i.querySelector(".itemsContainer");n.innerHTML=LibraryBrowser.getPosterViewHtml({items:t.Items,showUnplayedIndicator:!1,shape:a(),showTitle:!0,showParentTitle:!0,defaultAction:"instantmix",lazy:!0,centerText:!0,overlayMoreButton:!0}),ImageLoader.lazyChildren(n)})}function s(r,i){var n={SortBy:"PlayCount",SortOrder:"Descending",IncludeItemTypes:"Audio",Limit:t(),Recursive:!0,Fields:"PrimaryImageAspectRatio,AudioInfo,SyncInfo",Filters:"IsPlayed",ParentId:i,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb"};ApiClient.getItems(Dashboard.getCurrentUserId(),n).then(function(t){var i;i=t.Items.length?e("#topPlayed",r).show()[0]:e("#topPlayed",r).hide()[0];var n=i.querySelector(".itemsContainer");n.innerHTML=LibraryBrowser.getPosterViewHtml({items:t.Items,showUnplayedIndicator:!1,shape:a(),showTitle:!0,showParentTitle:!0,defaultAction:"instantmix",lazy:!0,centerText:!0,overlayMoreButton:!0}),ImageLoader.lazyChildren(n)})}function o(r,i){var n={SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Playlist",Recursive:!0,ParentId:i,Fields:"PrimaryImageAspectRatio,SortName,CumulativeRunTimeTicks,CanDelete,SyncInfo",StartIndex:0,Limit:t()};ApiClient.getItems(Dashboard.getCurrentUserId(),n).then(function(t){var i;i=t.Items.length?e("#playlists",r).show()[0]:e("#playlists",r).hide()[0];var n=i.querySelector(".itemsContainer");n.innerHTML=LibraryBrowser.getPosterViewHtml({items:t.Items,shape:a(),showTitle:!0,lazy:!0,coverImage:!0,showItemCounts:!0,centerText:!0,overlayPlayButton:!0}),ImageLoader.lazyChildren(n)})}function d(t,a){var i=a.querySelectorAll(".itemsContainer");r()?e(i).addClass("hiddenScrollX"):e(i).removeClass("hiddenScrollX"),e(i).createCardMenus()}function l(e,t){var r=LibraryMenu.getTopParentId();LibraryBrowser.needsRefresh(t)&&(i(t,r),o(t,r),n(t,r),s(t,r),require(["scripts/favorites"],function(){FavoriteItems.render(t,Dashboard.getCurrentUserId(),r,["favoriteArtists","favoriteAlbums","favoriteSongs"])}))}function u(e,t){var r=e.querySelector(".pageTabContent[data-index='"+t+"']"),a=[],i="MusicPage",n="",s="";switch(t){case 0:s="initSuggestedTab",n="renderSuggestedTab";break;case 1:a.push("scripts/musicalbums"),n="renderAlbumsTab",s="initAlbumsTab";break;case 2:a.push("scripts/musicalbumartists"),n="renderAlbumArtistsTab",s="initAlbumArtistsTab";break;case 3:a.push("scripts/musicartists"),n="renderArtistsTab",s="initArtistsTab";break;case 4:a.push("scripts/songs"),n="renderSongsTab",a.push("paper-icon-item"),a.push("paper-item-body");break;case 5:a.push("scripts/musicgenres"),n="renderGenresTab";break;case 6:a.push("scripts/musicfolders"),n="renderFoldersTab",s="initFoldersTab"}require(a,function(){s&&!r.initComplete&&(window[i][s](e,r),r.initComplete=!0),window[i][n](e,r)})}window.MusicPage=window.MusicPage||{},window.MusicPage.renderSuggestedTab=l,window.MusicPage.initSuggestedTab=d,pageIdOn("pageinit","musicRecommendedPage",function(){var t=this;e(".recommendations",t).createCardMenus();var r=t.querySelector("paper-tabs"),a=t.querySelector("neon-animated-pages"),i="music.html",n=LibraryMenu.getTopParentId();n&&(i+="?topParentId="+n),LibraryBrowser.configurePaperLibraryTabs(t,r,a,i),a.addEventListener("tabchange",function(e){u(t,parseInt(e.target.selected))})}),pageIdOn("pagebeforeshow","musicRecommendedPage",function(){var e=this;if(!e.getAttribute("data-title")){var t=LibraryMenu.getTopParentId();t?ApiClient.getItem(Dashboard.getCurrentUserId(),t).then(function(t){e.setAttribute("data-title",t.Name),LibraryMenu.setTitle(t.Name)}):(e.setAttribute("data-title",Globalize.translate("TabMusic")),LibraryMenu.setTitle(Globalize.translate("TabMusic")))}})});