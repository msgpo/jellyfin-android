define(["jQuery"],function(i){function e(e){Dashboard.showLoadingMsg(),ApiClient.getJSON(ApiClient.getUrl("Notifications/Types")).then(function(t){var n="",o="";n+=t.map(function(i){var e="";return i.Category!=o&&(o=i.Category,o&&(e+="</div>"),e+="<h1>",e+=i.Category,e+="</h1>",e+='<div class="paperList" style="margin-bottom:2em;">'),e+='<a class="clearLink" href="notificationsetting.html?type='+i.Type+'">',e+="<paper-icon-item>",e+=i.Enabled?'<paper-fab mini class="blue" icon="notifications-active" item-icon></paper-fab>':'<paper-fab mini style="background-color:#999;" icon="notifications-off" item-icon></paper-fab>',e+="<paper-item-body two-line>",e+="<div>"+i.Name+"</div>",e+="</paper-item-body>",e+='<paper-icon-button icon="mode-edit"></paper-icon-button>',e+="</paper-icon-item>",e+="</a>"}).join(""),t.length&&(n+="</div>"),i(".notificationList",e).html(n).trigger("create"),Dashboard.hideLoadingMsg()})}i(document).on("pageshow","#notificationSettingsPage",function(){var i=this;require(["paper-fab","paper-item-body","paper-icon-item"],function(){e(i)})})});