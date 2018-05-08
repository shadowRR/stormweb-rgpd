tarteaucitron.services.iframe={key:"iframe",type:"other",name:"Web content",uri:"",needConsent:!0,cookies:[],js:function(){"use strict";tarteaucitron.fallback(["tac_iframe"],function(t){var e=t.getAttribute("width"),a=t.getAttribute("height");return'<iframe src="'+t.getAttribute("data-url")+'" width="'+e+'" height="'+a+'" frameborder="0" scrolling="no" allowtransparency allowfullscreen></iframe>'})},fallback:function(){"use strict";tarteaucitron.fallback(["tac_iframe"],function(t){return t.style.width=t.getAttribute("width")+"px",t.style.height=t.getAttribute("height")+"px",tarteaucitron.engage("iframe")})}},tarteaucitron.services.amazon={key:"amazon",type:"ads",name:"Amazon",uri:"https://www.amazon.fr/gp/help/customer/display.html?ie=UTF8&*Version*=1&*entries*=0&nodeId=201149360",needConsent:!0,cookies:[],js:function(){"use strict";tarteaucitron.fallback(["amazon_product"],function(t){var e=t.getAttribute("amazonid"),a=t.getAttribute("productid");return'<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="'+("//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace="+tarteaucitron.getLanguage().toUpperCase()+"&source=ss&ref=ss_til&ad_type=product_link&tracking_id="+e+"&marketplace=amazon&region="+tarteaucitron.getLanguage().toUpperCase()+"&placement="+a+"&asins="+a+"&show_border=true&link_opens_in_new_window=true")+'"></iframe>'})},fallback:function(){"use strict";tarteaucitron.fallback(["amazon_product"],tarteaucitron.engage("amazon"))}},tarteaucitron.services.dailymotion={key:"dailymotion",type:"video",name:"Dailymotion",uri:"https://www.dailymotion.com/legal/privacy",needConsent:!0,cookies:["ts","dmvk","hist","v1st","s_vi"],js:function(){"use strict";tarteaucitron.fallback(["dailymotion_player"],function(t){var e=t.getAttribute("videoID"),a=t.getAttribute("width"),o="width=",i=t.getAttribute("height"),r="height=",n="info="+t.getAttribute("showinfo")+"&autoPlay="+t.getAttribute("autoplay");return void 0===e?"":'<iframe src="//www.dailymotion.com/embed/video/'+e+"?"+n+'" '+(o+=void 0!==a?'"'+a+'" ':'"" ')+(r+=void 0!==i?'"'+i+'" ':'"" ')+' frameborder="0" allowfullscreen></iframe>'})},fallback:function(){"use strict";tarteaucitron.fallback(["dailymotion_player"],function(t){return t.style.width=t.getAttribute("width")+"px",t.style.height=t.getAttribute("height")+"px",tarteaucitron.engage("dailymotion")})}},tarteaucitron.services.disqus={key:"disqus",type:"comment",name:"Disqus",uri:"https://help.disqus.com/customer/portal/articles/466259-privacy-policy",needConsent:!0,cookies:[],js:function(){"use strict";void 0!==tarteaucitron.user.disqusShortname&&(tarteaucitron.addScript("//"+tarteaucitron.user.disqusShortname+".disqus.com/embed.js"),tarteaucitron.addScript("//"+tarteaucitron.user.disqusShortname+".disqus.com/count.js"))},fallback:function(){"use strict";document.getElementById("disqus_thread")&&(document.getElementById("disqus_thread").innerHTML=tarteaucitron.engage("disqus"))}},tarteaucitron.services.facebook={key:"facebook",type:"social",name:"Facebook",uri:"https://www.facebook.com/policies/cookies/",needConsent:!0,cookies:[],js:function(){"use strict";tarteaucitron.fallback(["fb-post","fb-follow","fb-activity","fb-send","fb-share-button","fb-like"],""),tarteaucitron.addScript("//connect.facebook.net/"+tarteaucitron.getLocale()+"/sdk.js#xfbml=1&version=v2.0","facebook-jssdk"),!0===tarteaucitron.isAjax&&"undefined"!=typeof FB&&FB.XFBML.parse()},fallback:function(){"use strict";tarteaucitron.fallback(["fb-post","fb-follow","fb-activity","fb-send","fb-share-button","fb-like"],tarteaucitron.engage("facebook"))}},tarteaucitron.services.facebooklikebox={key:"facebooklikebox",type:"social",name:"Facebook (like box)",uri:"https://www.facebook.com/policies/cookies/",needConsent:!0,cookies:[],js:function(){"use strict";tarteaucitron.fallback(["fb-like-box","fb-page"],""),tarteaucitron.addScript("//connect.facebook.net/"+tarteaucitron.getLocale()+"/sdk.js#xfbml=1&version=v2.3","facebook-jssdk"),!0===tarteaucitron.isAjax&&"undefined"!=typeof FB&&FB.XFBML.parse()},fallback:function(){"use strict";tarteaucitron.fallback(["fb-like-box","fb-page"],tarteaucitron.engage("facebooklikebox"))}},tarteaucitron.services.facebookcomment={key:"facebookcomment",type:"comment",name:"Facebook (commentaire)",uri:"https://www.facebook.com/policies/cookies/",needConsent:!0,cookies:[],js:function(){"use strict";tarteaucitron.fallback(["fb-comments"],""),tarteaucitron.addScript("//connect.facebook.net/"+tarteaucitron.getLocale()+"/sdk.js#xfbml=1&version=v2.0","facebook-jssdk"),!0===tarteaucitron.isAjax&&"undefined"!=typeof FB&&FB.XFBML.parse()},fallback:function(){"use strict";tarteaucitron.fallback(["fb-comments"],tarteaucitron.engage("facebookcomment"))}},tarteaucitron.services.gplus={key:"gplus",type:"social",name:"Google+",uri:"https://policies.google.com/privacy",needConsent:!0,cookies:[],js:function(){"use strict";tarteaucitron.addScript("https://apis.google.com/js/platform.js")},fallback:function(){"use strict";tarteaucitron.fallback(["g-plus","g-plusone"],tarteaucitron.engage("gplus"))}},tarteaucitron.services.gplusbadge={key:"gplusbadge",type:"social",name:"Google+ (badge)",uri:"https://policies.google.com/privacy",needConsent:!0,cookies:[],js:function(){"use strict";tarteaucitron.addScript("https://apis.google.com/js/platform.js")},fallback:function(){"use strict";tarteaucitron.fallback(["g-page","g-person"],tarteaucitron.engage("gplusbadge"))}},tarteaucitron.services.adsense={key:"adsense",type:"ads",name:"Google Adsense",uri:"http://www.google.com/ads/preferences/",needConsent:!0,cookies:[],js:function(){"use strict";tarteaucitron.addScript("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")},fallback:function(){"use strict";tarteaucitron.fallback(["adsbygoogle"],tarteaucitron.engage("adsense"))}},tarteaucitron.services.adsensesearchform={key:"adsensesearchform",type:"ads",name:"Google Adsense Search (form)",uri:"http://www.google.com/ads/preferences/",needConsent:!0,cookies:[],js:function(){"use strict";tarteaucitron.addScript("//www.google.com/coop/cse/brand?form=cse-search-box&lang="+tarteaucitron.getLanguage())}},tarteaucitron.services.adsensesearchresult={key:"adsensesearchresult",type:"ads",name:"Google Adsense Search (result)",uri:"http://www.google.com/ads/preferences/",needConsent:!0,cookies:[],js:function(){"use strict";void 0!==tarteaucitron.user.adsensesearchresultCx&&tarteaucitron.addScript("//www.google.com/cse/cse.js?cx="+tarteaucitron.user.adsensesearchresultCx)},fallback:function(){"use strict";document.getElementById("gcse_searchresults")&&(document.getElementById("gcse_searchresults").innerHTML=tarteaucitron.engage("adsensesearchresult"))}},tarteaucitron.services.googleadwordsconversion={key:"googleadwordsconversion",type:"ads",name:"Google Adwords (conversion)",uri:"https://www.google.com/settings/ads",needConsent:!0,cookies:[],js:function(){"use strict";void 0!==tarteaucitron.user.adwordsconversionId&&tarteaucitron.addScript("//www.googleadservices.com/pagead/conversion_async.js","",function(){window.google_trackConversion({google_conversion_id:tarteaucitron.user.adwordsconversionId,google_conversion_label:tarteaucitron.user.adwordsconversionLabel,google_conversion_language:tarteaucitron.user.adwordsconversionLanguage,google_conversion_format:tarteaucitron.user.adwordsconversionFormat,google_conversion_color:tarteaucitron.user.adwordsconversionColor,google_conversion_value:tarteaucitron.user.adwordsconversionValue,google_conversion_currency:tarteaucitron.user.adwordsconversionCurrency,google_custom_params:{parameter1:tarteaucitron.user.adwordsconversionCustom1,parameter2:tarteaucitron.user.adwordsconversionCustom2}})})}},tarteaucitron.services.googleadwordsremarketing={key:"googleadwordsremarketing",type:"ads",name:"Google Adwords (remarketing)",uri:"https://www.google.com/settings/ads",needConsent:!0,cookies:[],js:function(){"use strict";void 0!==tarteaucitron.user.adwordsremarketingId&&tarteaucitron.addScript("//www.googleadservices.com/pagead/conversion_async.js","",function(){window.google_trackConversion({google_conversion_id:tarteaucitron.user.adwordsremarketingId,google_remarketing_only:!0})})}},tarteaucitron.services.analytics={key:"analytics",type:"analytic",name:"Google Analytics (universal)",uri:"https://support.google.com/analytics/answer/6004245",needConsent:!0,cookies:["_ga","_gat","_gid","__utma","__utmb","__utmc","__utmt","__utmz"],js:function(){"use strict";window.GoogleAnalyticsObject="ga",window.ga=window.ga||function(){window.ga.q=window.ga.q||[],window.ga.q.push(arguments)},window.ga.l=new Date,tarteaucitron.addScript("//www.google-analytics.com/analytics.js","",function(){ga("create",tarteaucitron.user.analyticsUa,{cookieExpires:34128e3}),ga("send","pageview"),"function"==typeof tarteaucitron.user.analyticsMore&&tarteaucitron.user.analyticsMore()})}},tarteaucitron.services.gtag={key:"gtag",type:"analytic",name:"Google Analytics (gtag.js)",uri:"https://support.google.com/analytics/answer/6004245",needConsent:!0,cookies:["_ga","_gat","_gid","__utma","__utmb","__utmc","__utmt","__utmz"],js:function(){"use strict";window.dataLayer=window.dataLayer||[],tarteaucitron.addScript("//www.googletagmanager.com/gtag/js?id="+tarteaucitron.user.gtagUa,"",function(){function t(){dataLayer.push(arguments)}t("js",new Date),t("config",tarteaucitron.user.gtagUa),"function"==typeof tarteaucitron.user.gtagMore&&tarteaucitron.user.gtagMore()})}},tarteaucitron.services.googlemaps={key:"googlemaps",type:"api",name:"Google Maps",uri:"http://www.google.com/ads/preferences/",needConsent:!0,cookies:[],js:function(){"use strict";var t,e,a=[];void 0===tarteaucitron.user.mapscallback&&(tarteaucitron.user.mapscallback="tac_googlemaps_callback"),tarteaucitron.addScript("//maps.googleapis.com/maps/api/js?v=3.exp&key="+tarteaucitron.user.googlemapsKey+"&callback="+tarteaucitron.user.mapscallback),window.tac_googlemaps_callback=function(){for(tarteaucitron.fallback(["googlemaps-canvas"],function(t){var e="_"+Math.random().toString(36).substr(2,9);return a.push(e),'<div id="'+e+'" zoom="'+t.getAttribute("zoom")+'" latitude="'+t.getAttribute("latitude")+'" longitude="'+t.getAttribute("longitude")+'" style="width:'+t.offsetWidth+"px;height:"+t.offsetHeight+'px"></div>'}),e=0;e<a.length;e+=1)t={zoom:parseInt(document.getElementById(a[e]).getAttribute("zoom"),10),center:new google.maps.LatLng(parseFloat(document.getElementById(a[e]).getAttribute("latitude"),10),parseFloat(document.getElementById(a[e]).getAttribute("longitude"),10))},new google.maps.Map(document.getElementById(a[e]),t)}},fallback:function(){"use strict";tarteaucitron.fallback(["googlemaps-canvas"],tarteaucitron.engage("googlemaps"))}},tarteaucitron.services.googletagmanager={key:"googletagmanager",type:"api",name:"Google Tag Manager",uri:"http://www.google.com/ads/preferences/",needConsent:!0,cookies:["_ga","_gat","__utma","__utmb","__utmc","__utmt","__utmz","__gads","_drt_","FLC","exchange_uid","id","fc","rrs","rds","rv","uid","UIDR","UID","clid","ipinfo","acs"],js:function(){"use strict";void 0!==tarteaucitron.user.googletagmanagerId&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({"gtm.start":(new Date).getTime(),event:"gtm.js"}),tarteaucitron.addScript("//www.googletagmanager.com/gtm.js?id="+tarteaucitron.user.googletagmanagerId))}},tarteaucitron.services.jsapi={key:"jsapi",type:"api",name:"Google jsapi",uri:"http://www.google.com/policies/privacy/",needConsent:!0,cookies:[],js:function(){"use strict";tarteaucitron.addScript("//www.google.com/jsapi")}},tarteaucitron.services.linkedin={key:"linkedin",type:"social",name:"Linkedin",uri:"https://www.linkedin.com/legal/cookie_policy",needConsent:!0,cookies:[],js:function(){"use strict";tarteaucitron.fallback(["tacLinkedin"],""),tarteaucitron.addScript("//platform.linkedin.com/in.js"),!0===tarteaucitron.isAjax&&"undefined"!=typeof IN&&IN.parse()},fallback:function(){"use strict";tarteaucitron.fallback(["tacLinkedin"],tarteaucitron.engage("linkedin"))}},tarteaucitron.services.microsoftcampaignanalytics={key:"microsoftcampaignanalytics",type:"analytic",name:"Microsoft Campaign Analytics",uri:"https://privacy.microsoft.com/privacystatement/",needConsent:!0,cookies:[],js:function(){"use strict";void 0!==tarteaucitron.user.microsoftcampaignanalyticsUUID&&tarteaucitron.addScript("//flex.atdmt.com/mstag/site/"+tarteaucitron.user.microsoftcampaignanalyticsUUID+"/mstag.js","mstag_tops",function(){window.mstag={loadTag:function(){},time:(new Date).getTime()},window.mstag.loadTag("analytics",{dedup:"1",domainId:tarteaucitron.user.microsoftcampaignanalyticsdomainId,type:"1",actionid:tarteaucitron.user.microsoftcampaignanalyticsactionId})})}},tarteaucitron.services.pinterest={key:"pinterest",type:"social",name:"Pinterest",uri:"https://about.pinterest.com/privacy-policy",needConsent:!0,cookies:[],js:function(){"use strict";tarteaucitron.fallback(["tacPinterest"],""),tarteaucitron.addScript("//assets.pinterest.com/js/pinit.js")},fallback:function(){"use strict";tarteaucitron.fallback(["tacPinterest"],tarteaucitron.engage("pinterest"))}},tarteaucitron.services.twitter={key:"twitter",type:"social",name:"Twitter",uri:"https://support.twitter.com/articles/20170514",needConsent:!0,cookies:[],js:function(){"use strict";tarteaucitron.fallback(["tacTwitter"],""),tarteaucitron.addScript("//platform.twitter.com/widgets.js","twitter-wjs")},fallback:function(){"use strict";tarteaucitron.fallback(["tacTwitter"],tarteaucitron.engage("twitter"))}},tarteaucitron.services.twitterembed={key:"twitterembed",type:"social",name:"Twitter (cards)",uri:"https://support.twitter.com/articles/20170514",needConsent:!0,cookies:[],js:function(){"use strict";var t,e,a,o=[];tarteaucitron.fallback(["twitterembed-canvas"],function(t){var e="_"+Math.random().toString(36).substr(2,9);return o.push(e),a='<div id="'+e+'" ',a+='tweetid="'+t.getAttribute("tweetid")+'" ',a+='theme="'+t.getAttribute("theme")+'" ',a+='cards="'+t.getAttribute("cards")+'" ',a+='conversation="'+t.getAttribute("conversation")+'" ',a+='data-width="'+t.getAttribute("data-width")+'" ',a+='data-align="'+t.getAttribute("data-align")+'" ',a+="></div>"}),tarteaucitron.addScript("//platform.twitter.com/widgets.js","twitter-wjs",function(){for(t=0;t<o.length;t+=1)e=document.getElementById(o[t]),twttr.widgets.createTweet(e.getAttribute("tweetid"),e,{theme:e.getAttribute("theme"),cards:e.getAttribute("cards"),conversation:e.getAttribute("conversation"),lang:tarteaucitron.getLanguage(),dnt:!0,width:e.getAttribute("data-width"),align:e.getAttribute("data-align")})})},fallback:function(){"use strict";tarteaucitron.fallback(["twitterembed-canvas"],function(t){return t.style.width=t.getAttribute("data-width")+"px",tarteaucitron.engage("twitterembed")})}},tarteaucitron.services.twittertimeline={key:"twittertimeline",type:"social",name:"Twitter (timelines)",uri:"https://support.twitter.com/articles/20170514",needConsent:!0,cookies:[],js:function(){"use strict";tarteaucitron.fallback(["tacTwitterTimelines"],""),tarteaucitron.addScript("//platform.twitter.com/widgets.js","twitter-wjs")},fallback:function(){"use strict";tarteaucitron.fallback(["tacTwitterTimelines"],tarteaucitron.engage("twittertimeline"))}},tarteaucitron.services.vimeo={key:"vimeo",type:"video",name:"Vimeo",uri:"http://vimeo.com/privacy",needConsent:!0,cookies:["__utmt_player","__utma","__utmb","__utmc","__utmv","vuid","__utmz","player"],js:function(){"use strict";tarteaucitron.fallback(["vimeo_player"],function(t){var e=t.getAttribute("videoID"),a=t.getAttribute("width"),o="width=",i=t.getAttribute("height"),r="height=";return void 0===e?"":'<iframe src="//player.vimeo.com/video/'+e+'" '+(o+=void 0!==a?'"'+a+'" ':'"" ')+(r+=void 0!==i?'"'+i+'" ':'"" ')+' frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'})},fallback:function(){"use strict";tarteaucitron.fallback(["vimeo_player"],function(t){return t.style.width=t.getAttribute("width")+"px",t.style.height=t.getAttribute("height")+"px",tarteaucitron.engage("vimeo")})}},tarteaucitron.services.youtube={key:"youtube",type:"video",name:"YouTube",uri:"https://www.google.fr/intl/fr/policies/privacy/",needConsent:!0,cookies:["VISITOR_INFO1_LIVE","YSC","PREF","GEUP"],js:function(){"use strict";tarteaucitron.fallback(["youtube_player"],function(t){var e=t.getAttribute("videoID"),a=t.getAttribute("width"),o="width=",i=t.getAttribute("height"),r="height=",n="theme="+t.getAttribute("theme")+"&rel="+t.getAttribute("rel")+"&controls="+t.getAttribute("controls")+"&showinfo="+t.getAttribute("showinfo")+"&autoplay="+t.getAttribute("autoplay");return void 0===e?"":'<iframe type="text/html" '+(o+=void 0!==a?'"'+a+'" ':'"" ')+(r+=void 0!==i?'"'+i+'" ':'"" ')+' src="//www.youtube-nocookie.com/embed/'+e+"?"+n+'" frameborder="0"></iframe>'})},fallback:function(){"use strict";tarteaucitron.fallback(["youtube_player"],function(t){return t.style.width=t.getAttribute("width")+"px",t.style.height=t.getAttribute("height")+"px",tarteaucitron.engage("youtube")})}},tarteaucitron.services.youtubeplaylist={key:"youtubeplaylist",type:"video",name:"YouTube (playlist)",uri:"https://www.google.fr/intl/fr/policies/privacy/",needConsent:!0,cookies:["VISITOR_INFO1_LIVE","YSC","PREF","GEUP"],js:function(){"use strict";tarteaucitron.fallback(["youtube_playlist_player"],function(t){var e=t.getAttribute("playlistID"),a=t.getAttribute("width"),o="width=",i=t.getAttribute("height"),r="height=",n="theme="+t.getAttribute("theme")+"&rel="+t.getAttribute("rel")+"&controls="+t.getAttribute("controls")+"&showinfo="+t.getAttribute("showinfo")+"&autoplay="+t.getAttribute("autoplay");return void 0===e?"":'<iframe type="text/html" '+(o+=void 0!==a?'"'+a+'" ':'"" ')+(r+=void 0!==i?'"'+i+'" ':'"" ')+' src="//www.youtube-nocookie.com/embed/videoseries?list='+e+"&"+n+'" frameborder="0"></iframe>'})},fallback:function(){"use strict";tarteaucitron.fallback(["youtube_playlist_player"],function(t){return t.style.width=t.getAttribute("width")+"px",t.style.height=t.getAttribute("height")+"px",tarteaucitron.engage("youtubeplaylist")})}},tarteaucitron.services.facebookpixel={key:"facebookpixel",type:"ads",name:"Facebook Pixel",uri:"https://fr-fr.facebook.com/business/help/www/651294705016616",needConsent:!0,cookies:["datr","fr","reg_ext_ref","reg_fb_gate","reg_fb_ref","sb","wd","x-src"],js:function(){"use strict";var t;window.fbq||(t=window.fbq=function(){t.callMethod?t.callMethod.apply(t,arguments):t.queue.push(arguments)},window._fbq||(window._fbq=t),t.push=t,t.loaded=!0,t.version="2.0",t.queue=[],tarteaucitron.addScript("https://connect.facebook.net/en_US/fbevents.js"),fbq("init",tarteaucitron.user.facebookpixelId),fbq("track","PageView"),"function"==typeof tarteaucitron.user.facebookpixelMore&&tarteaucitron.user.facebookpixelMore())}};