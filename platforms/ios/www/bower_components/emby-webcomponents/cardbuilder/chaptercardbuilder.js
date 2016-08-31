define(["datetime","imageLoader","connectionManager","itemShortcuts","layoutManager"],function(a,e,r,t,i){function d(a,e,t){var i="card scalableCard itemAction chapterCard",d=((a.MediaSources||[])[0]||{}).MediaStreams||[],n=d.filter(function(a){return"Video"==a.Type})[0]||{},s=t.backdropShape||"backdrop";n.Width&&n.Height&&n.Width/n.Height<=1.34&&(s=t.squareShape||"square"),i+=" "+s+"Card",i+=" "+s+"Card-scalable",(t.block||t.rows)&&(i+=" block");for(var c="",l=0,v=r.getApiClient(a.ServerId),m=0,u=e.length;u>m;m++){t.rows&&0==l&&(c+='<div class="cardColumn">');var p=e[m];c+=o(a,v,p,m,t,i,s),l++,t.rows&&l>=t.rows&&(l=0,c+="</div>")}return c}function n(a,e,r,t,i){return e.ImageTag?i.getScaledImageUrl(a.Id,{maxWidth:t,tag:e.ImageTag,type:"Chapter",index:r}):null}function o(e,r,t,d,o,s,c){var l=n(e,t,d,o.width||400,r),v="cardImageContainer chapterCardImageContainer";o.coverImage&&(v+=" coveredImage");var m=' data-action="play" data-isfolder="'+e.IsFolder+'" data-id="'+e.Id+'" data-serverid="'+e.ServerId+'" data-type="'+e.Type+'" data-mediatype="'+e.MediaType+'" data-positionticks="'+t.StartPositionTicks+'"',u=l?'<div class="'+v+' lazy" data-src="'+l+'">':'<div class="'+v+'">';l||(u+='<i class="md-icon cardImageIcon">local_movies</i>');var p="";p+='<div class="cardText">'+t.Name+"</div>",p+='<div class="cardText">'+a.getDisplayRunningTime(t.StartPositionTicks)+"</div>";var C="cardBox";i.tv&&(C+=" cardBox-focustransform");var g='<button type="button" class="'+s+'"'+m+'> <div class="'+C+'"><div class="cardScalable"><div class="cardPadder-'+c+'"></div><div class="cardContent">'+u+'</div><div class="innerCardFooter">'+p+"</div></div></div></div></button>";return g}function s(a,r,i){if(i.parentContainer){if(!document.body.contains(i.parentContainer))return;if(!r.length)return void i.parentContainer.classList.add("hide");i.parentContainer.classList.remove("hide")}var n=d(a,r,i);i.itemsContainer.innerHTML=n,e.lazyChildren(i.itemsContainer),t.off(i.itemsContainer),t.on(i.itemsContainer)}return{buildChapterCards:s}});