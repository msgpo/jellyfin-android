define(["paperdialoghelper","paper-checkbox","paper-input","paper-button"],function(e){function r(e){Dashboard.hideLoadingMsg(),Dashboard.alert({title:Globalize.translate("AutoOrganizeError"),message:Globalize.translate("ErrorOrganizingFileWithErrorCode",e.getResponseHeader("X-Application-Error-Code"))})}function t(e,t){!t.ExtractedName||t.ExtractedName.length<4?e.querySelector(".fldRemember").classList.add("hide"):e.querySelector(".fldRemember").classList.remove("hide"),e.querySelector(".inputFile").innerHTML=t.OriginalFileName,e.querySelector("#txtSeason").value=t.ExtractedSeasonNumber,e.querySelector("#txtEpisode").value=t.ExtractedEpisodeNumber,e.querySelector("#txtEndingEpisode").value=t.ExtractedEndingEpisodeNumber,l=t.ExtractedName,a=t.ExtractedYear,e.querySelector("#chkRememberCorrection").checked=!1,e.querySelector("#hfResultId").value=t.Id,ApiClient.getItems(null,{recursive:!0,includeItemTypes:"Series",sortBy:"SortName"}).then(function(t){u=t.Items.map(function(e){return'<option value="'+e.Id+'">'+e.Name+"</option>"}).join(""),u='<option value=""></option>'+u,e.querySelector("#selectSeries").innerHTML=u,ApiClient.getVirtualFolders().then(function(r){for(var t=[],o=0;o<r.length;o++)for(var i=r[o],n=0,l=i.Locations.length;l>n;n++){var a={value:i.Locations[n],display:i.Name+": "+i.Locations[n]};"tvshows"==i.CollectionType&&t.push(a)}var s=t.map(function(e){return'<option value="'+e.value+'">'+e.display+"</option>"}).join("");t.length>1&&(s='<option value=""></option>'+s),e.querySelector("#selectSeriesFolder").innerHTML=s},r)},r)}function o(t){Dashboard.showLoadingMsg();var o,i,n,l,a=t.querySelector("#hfResultId").value,u=t.querySelector("#selectSeries").value;"##NEW##"==u&&null!=s&&(u=null,i=JSON.stringify(s.ProviderIds),n=s.Name,l=s.ProductionYear,o=t.querySelector("#selectSeriesFolder").value);var c={SeriesId:u,SeasonNumber:t.querySelector("#txtSeason").value,EpisodeNumber:t.querySelector("#txtEpisode").value,EndingEpisodeNumber:t.querySelector("#txtEndingEpisode").value,RememberCorrection:t.querySelector("#chkRememberCorrection").checked,NewSeriesProviderIds:i,NewSeriesName:n,NewSeriesYear:l,TargetFolder:o};ApiClient.performEpisodeOrganization(a,c).then(function(){Dashboard.hideLoadingMsg(),t.submitted=!0,e.close(t)},r)}function i(e){require(["components/itemidentifier/itemidentifier"],function(r){r.showFindNew(l,a,"Series").then(function(r){if(null!=r){s=r;var t=u;t=t+'<option selected value="##NEW##">'+s.Name+"</option>",e.querySelector("#selectSeries").innerHTML=t,n(e)}})})}function n(e){var r=e.querySelector("#selectSeries").value;"##NEW##"==r?(e.querySelector(".fldSelectSeriesFolder").classList.remove("hide"),e.querySelector("#selectSeriesFolder").setAttribute("required","required")):(e.querySelector(".fldSelectSeriesFolder").classList.add("hide"),e.querySelector("#selectSeriesFolder").removeAttribute("required"))}var l,a,s,u;return{show:function(r){return new Promise(function(c,d){l=null,a=null,s=null,u=null;var p=new XMLHttpRequest;p.open("GET","components/fileorganizer/fileorganizer.template.html",!0),p.onload=function(){var l=this.response,a=e.createDialog({removeOnClose:!0,size:"small"});a.classList.add("ui-body-a"),a.classList.add("background-theme-a"),a.classList.add("formDialog");var s="";s+=Globalize.translateDocument(l),a.innerHTML=s,document.body.appendChild(a),a.querySelector(".dialogHeaderTitle").innerHTML=Globalize.translate("FileOrganizeManually"),e.open(a),a.addEventListener("close",function(){a.submitted?c():d()}),a.querySelector(".btnCancel").addEventListener("click",function(){e.close(a)}),a.querySelector("form").addEventListener("submit",function(e){return o(a),e.preventDefault(),!1}),a.querySelector("#btnNewSeries").addEventListener("click",function(){i(a)}),a.querySelector("#selectSeries").addEventListener("change",function(){n(a)}),t(a,r)},p.send()})}}});