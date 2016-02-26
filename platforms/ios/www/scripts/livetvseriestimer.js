!function(e,n,i){function t(e,n){require(["confirm"],function(i){i(Globalize.translate("MessageConfirmRecordingCancellation"),Globalize.translate("HeaderConfirmRecordingCancellation")).then(function(){Dashboard.showLoadingMsg(),ApiClient.cancelLiveTvTimer(n).then(function(){Dashboard.hideLoadingMsg(),require(["toast"],function(e){e(Globalize.translate("MessageRecordingCancelled"))}),h(e)})})})}function a(e,i){g=i,n(".itemName",e).html(i.Name),n("#txtPrePaddingMinutes",e).val(i.PrePaddingSeconds/60),n("#txtPostPaddingMinutes",e).val(i.PostPaddingSeconds/60),n("#chkNewOnly",e).checked(i.RecordNewOnly),n("#chkAllChannels",e).checked(i.RecordAnyChannel),n("#chkAnyTime",e).checked(i.RecordAnyTime);var t="";i.RecordAnyChannel?t+=Globalize.translate("LabelAllChannels"):i.ChannelId&&(t+='<a href="itemdetails.html?id='+i.ChannelId+'">'+i.ChannelName+"</a>"),n(".channel",e).html(t).trigger("create"),o(e,i.Days),i.RecordAnyTime?n(".time",e).html(Globalize.translate("LabelAnytime")).trigger("create"):i.ChannelId&&n(".time",e).html(LibraryBrowser.getDisplayTime(i.StartDate)).trigger("create"),Dashboard.hideLoadingMsg()}function r(){return LiveTvHelpers.getDaysOfWeek().map(function(e){return e.value})}function o(e,i){for(var t=r(),a=0,o=t.length;o>a;a++){var c=t[a];n("#chk"+c,e).checked(-1!=i.indexOf(c))}}function c(e){for(var i=r(),t=[],a=0,o=i.length;o>a;a++){var c=i[a];n("#chk"+c,e).checked()&&t.push(c)}return t}function s(){Dashboard.showLoadingMsg();var e=this;return ApiClient.getLiveTvSeriesTimer(g.Id).then(function(i){i.PrePaddingSeconds=60*n("#txtPrePaddingMinutes",e).val(),i.PostPaddingSeconds=60*n("#txtPostPaddingMinutes",e).val(),i.RecordNewOnly=n("#chkNewOnly",e).checked(),i.RecordAnyChannel=n("#chkAllChannels",e).checked(),i.RecordAnyTime=n("#chkAnyTime",e).checked(),i.Days=c(e),ApiClient.updateLiveTvSeriesTimer(i).then(function(){Dashboard.hideLoadingMsg(),require(["toast"],function(e){e(Globalize.translate("MessageRecordingSaved"))})})}),!1}function d(e,i){n(".recordingsTab",e).html(LibraryBrowser.getPosterViewHtml({items:i.Items,shape:"detailPageSquare",showTitle:!0,centerText:!0,coverImage:!0}))}function l(e,i){var a=i.Items;LiveTvHelpers.getTimersHtml(a).then(function(i){var a=n(".scheduleTab",e).html(i)[0];ImageLoader.lazyChildren(a),n(".btnDeleteTimer",a).on("click",function(){var n=this.getAttribute("data-timerid");t(e,n)})})}function h(e){Dashboard.showLoadingMsg();var n=getParameterByName("id");ApiClient.getLiveTvSeriesTimer(n).then(function(n){a(e,n)}),ApiClient.getLiveTvRecordings({userId:Dashboard.getCurrentUserId(),seriesTimerId:n}).then(function(n){d(e,n)}),ApiClient.getLiveTvTimers({seriesTimerId:n}).then(function(n){l(e,n)})}var g;n(i).on("pageinit","#liveTvSeriesTimerPage",function(){var e=this;n(".radioSeriesTimerTab",e).on("change",function(){n(".tab",e).hide(),n("."+this.value+"Tab",e).show()}),n(".liveTvSeriesTimerForm").off("submit",s).on("submit",s)}).on("pagebeforeshow","#liveTvSeriesTimerPage",function(){var e=this;n(".radioProfileTab",e).checked(!1).checkboxradio("refresh"),n("#radioSettings",e).checked(!0).checkboxradio("refresh").trigger("change"),h(e)}).on("pagebeforehide","#liveTvSeriesTimerPage",function(){g=null})}(window,jQuery,document);