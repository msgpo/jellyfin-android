define(["paperdialoghelper"],function(e){return{show:function(n){return new Promise(function(t,o){var a=new XMLHttpRequest;a.open("GET","components/metadataeditor/personeditor.template.html",!0),a.onload=function(){var a=this.response,l=e.createDialog({removeOnClose:!0,size:"small"});l.classList.add("ui-body-b"),l.classList.add("background-theme-b"),l.classList.add("formDialog");var r="",s=!1;r+=Globalize.translateDocument(a),l.innerHTML=r,document.body.appendChild(l),$("#txtPersonName",l).val(n.Name||""),$("#selectPersonType",l).val(n.Type||""),$("#txtPersonRole",l).val(n.Role||""),e.open(l),l.addEventListener("iron-overlay-closed",function(){s?t(n):o()}),l.querySelector(".btnCancel").addEventListener("click",function(){e.close(l)}),l.querySelector("form").addEventListener("submit",function(t){return s=!0,n.Name=$("#txtPersonName",l).val(),n.Type=$("#selectPersonType",l).val(),n.Role=$("#txtPersonRole",l).val()||null,e.close(l),t.preventDefault(),!1})},a.send()})}}});