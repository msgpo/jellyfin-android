define(["layoutManager","dialogText"],function(t,e){function n(t){return new Promise(function(n,i){require(["actionsheet"],function(o){var a=[];a.push({name:e.get("Ok"),id:"ok"}),a.push({name:e.get("Cancel"),id:"cancel"}),o.show({title:t.text,items:a}).then(function(t){switch(t){case"ok":n();break;default:i()}},i)})})}function i(n,i,o,a){var r={removeOnClose:!0},u=!1;t.tv?(r.size="fullscreen",u=!0,r.autoFocus=!0):(r.modal=!1,r.entryAnimationDuration=160,r.exitAnimationDuration=200,r.autoFocus=!1);var c=i.createDialog(r),s="";n.title&&(s+="<h2>"+n.title+"</h2>"),n.text&&(s+="<div>"+n.text+"</div>"),s+='<div class="buttons">',s+='<paper-button class="btnConfirm" dialog-confirm autofocus>'+e.get("Ok")+"</paper-button>",s+="<paper-button dialog-dismiss>"+e.get("Cancel")+"</paper-button>",s+="</div>",c.innerHTML=s,document.body.appendChild(c),i.open(c).then(function(){var t=c.closingReason.confirmed;t?o():a()})}function o(t){return new Promise(function(e,n){require(["paperdialoghelper","paper-button"],function(o){i(t,o,e,n)})})}return function(e,i){var a;return a="string"==typeof e?{title:i,text:e}:e,t.tv?n(a):o(a)}});