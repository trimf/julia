/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

(function(a,l){function k(e,b){q=!1;var k=a.Deferred(),f=[],d=0;a.each(e.styles,function(d,b){a.each(e.less,function(a,e){f.push({target:("default"!=d?"/styles/"+d:"")+e.target,less:e.source+"\n"+b,css:"",error:""})})});if(!f.length)return k.resolve(f);a.less.getCSS(f[d].less,b).always(function g(h){"string"==a.type(h)?f[d].css=h:f[d].error=h;f[d].css=a.less.rewriteUrls(f[d].css,e.baseurl+f[d].target);a.isFunction(b.progress)&&b.progress.call(this,f[d],d,100*(d/f.length));if(f[++d]&&!q)setTimeout(function(){a.less.getCSS(f[d].less,
b).always(g)},150);else k[q?"reject":"resolve"](f)});return k.promise()}function h(){try{return!!new Blob&&void 0!==typeof FormData}catch(a){return!1}}var q;a(function(){function e(c,m){d.css("width","100%");var b={};a.each(m.styles,function(a,c){b[("default"!=a?"/styles/"+a:"/less")+"/style.less"]=c});a.each(c,function(a,c){c.error||(b[c.target]=c.css)});v.text("Saving files...");System.saveFiles(b).fail(function(a){g.append('<div class="uk-alert uk-alert-danger">'+a+"</div>")}).done(function(){g.children().length||
f.hide()})}function b(c,m,b){m=c.target.replace(/^.*[\/\\]/g,"").replace(/css$/g,"less");v.text(c.target);d.css("width",Math.ceil(b)+"%");c.error&&0===a("[data-file='"+m+"']").length&&g.append('<div class="uk-alert uk-alert-danger" data-file="'+m+'"><strong>'+m+"</strong><br>"+c.error.message+"</div>")}var s=a("#config"),f=new a.UIkit.modal.Modal("#compilemodal",{bgclose:!1}),d=f.element.find(".uk-progress-bar"),v=f.element.find(".file-name"),g=f.element.find(".error-list"),z=a("[data-customizer]"),
F=a("[data-style-selector]",s),n=function(c){a('[value="'+c.prop("value")+'"]',t).not(c).attr("disabled",c.is(":checked")?"disabled":!1)},A=function(a,m){var d=a.data("layout");a.attr("data-layout",m).find('[name^="'+w+"["+d+']"]').attr("name",function(a,c){return c.replace(w+"["+d+"]",w+"["+m+"]")})},p=a("#layout"),r=a("[data-layout-selector]",p),w=p.data("field-name"),D=a("[data-action=rename], [data-action=remove]",p),t=a("[data-assignment]",p);t.filter('[data-layout="default"] [data-assignment]').hide();
a("input:checked",t).each(function(){n(a(this))});r.on("change",function(){var c=r.val();D.toggle("default"!==c);a("[data-layout]").not(a('[data-layout="'+c+'"]').show()).hide()}).trigger("change");p.on("change","[data-assignment] input",function(c){n(a(c.target))}).on("click",'[data-action="add"]',function(c){c.preventDefault();if((c=prompt("Please enter a layout name",""))&&!a('option[value="'+c+'"]',r).length){var m=a('[data-layout="default"]').clone(!0);A(m,c);a('[data-layout="default"]').parent().children("[data-layout]:last").after(m);
r.append('<option value="'+c+'">'+c+"</option>").val(c).trigger("change");a("[data-assignment]",m).show()}}).on("click",'[data-action="rename"]',function(c){c.preventDefault();c=r.val();var m=prompt("Please enter a layout name",c);m&&(c!==m&&!a('option[value="'+m+'"]',r).length)&&(A(a('[data-layout="'+c+'"]'),m),r.find('option[value="'+c+'"]').attr("value",m).html(m))}).on("click",'[data-action="remove"]',function(c){c.preventDefault();c=r.val();a('[data-layout="'+c+'"]').remove();r.find('option[value="'+
c+'"]').remove().end().trigger("change")});a("[data-layout]",p).each(function(){a('select[name$="[width]"]:first',this).on("change",function(){var c=a(this),m=c.find('option[value="'+c.val()+'"]').data("gcf");c.closest("[data-layout]").find('select[name$="[width]"]:gt(0)').each(function(){var d=a(this),b=d.val();d.empty().append(c.find("option").clone().filter(function(){return 0===a(this).val()%m})).val(d.find('option[value="'+b+'"]').length?b:d.val())})}).trigger("change")});var x=a("#menus",s);
a("tr[data-level='1'] + tr[data-level='2']",x).each(function(){a(this).prev().find("td:first").prepend('<i class="uk-icon-angle-right"></i> ').wrapInner("<span data-toggler />")});a("tbody tr[data-level!='1']",x).hide();a(x).on("click","[data-toggler]",function(){a(this).closest("tr").nextUntil("tr[data-level='1']",x).toggle();a("i",this).toggleClass("uk-icon-angle-down")});a("[data-menu-filter]",x).on("change",function(){a("[data-menu]").not(a('[data-menu="'+a(this).val()+'"]').show()).hide()}).trigger("change");
var u=s.find(".tm-sidebar ul"),G=s.find(".tm-main");u.on("click","a",function(c){c.preventDefault();G.children().not("p").hide().filter(":eq("+(l._index=u.children("li").removeClass("uk-active").index(a(this).parent().addClass("uk-active")))+")").show()}).find("li:eq("+(l._index<G.children().length?l._index:0)+") a").trigger("click");var p=function(){var c=B.val(),d=C.val();a("[data-position]","#widgets").each(function(){var b=a(this),e=b.data("position"),e=""===d||d===e;b[e?"show":"hide"]();e&&(b.find("tr[data-widget-name]").each(function(){var d=
a(this),b=d.data("widget-name"),b=""===c||-1!==b.toLowerCase().indexOf(c.toLowerCase());d.toggle(b)}),b.find("tbody>tr:visible").length||b.hide())})},C=a("[data-position-filter]","#widgets").on("change",p),B=a("[data-widget-filter]","#widgets").on("keyup",a.UIkit.Utils.debounce(p,300)),j=a('<div class="tm-icon-picker"></div>').css({position:"absolute",display:"none"}).appendTo("body"),y=[];y.push('<ul class="uk-list uk-list-space">');a.each({"Web Application Icons":"uk-icon-adjust uk-icon-anchor uk-icon-archive uk-icon-arrows uk-icon-arrows-h uk-icon-arrows-v uk-icon-asterisk uk-icon-ban uk-icon-bar-chart-o uk-icon-barcode uk-icon-bars uk-icon-beer uk-icon-bell uk-icon-bell-o uk-icon-bolt uk-icon-book uk-icon-bookmark uk-icon-bookmark-o uk-icon-briefcase uk-icon-bug uk-icon-building-o uk-icon-bullhorn uk-icon-bullseye uk-icon-calendar uk-icon-calendar-o uk-icon-camera uk-icon-camera-retro uk-icon-caret-square-o-down uk-icon-caret-square-o-left uk-icon-caret-square-o-right uk-icon-caret-square-o-up uk-icon-certificate uk-icon-check uk-icon-check-circle uk-icon-check-circle-o uk-icon-check-square uk-icon-check-square-o uk-icon-circle uk-icon-circle-o uk-icon-clock-o uk-icon-cloud uk-icon-cloud-download uk-icon-cloud-upload uk-icon-code uk-icon-code-fork uk-icon-coffee uk-icon-cog uk-icon-cogs uk-icon-comment uk-icon-comment-o uk-icon-comments uk-icon-comments-o uk-icon-compass uk-icon-credit-card uk-icon-crop uk-icon-crosshairs uk-icon-cutlery uk-icon-dashboard uk-icon-desktop uk-icon-dot-circle-o uk-icon-download uk-icon-edit uk-icon-ellipsis-h uk-icon-ellipsis-v uk-icon-envelope uk-icon-envelope-o uk-icon-eraser uk-icon-exchange uk-icon-exclamation uk-icon-exclamation-circle uk-icon-exclamation-triangle uk-icon-external-link uk-icon-external-link-square uk-icon-eye uk-icon-eye-slash uk-icon-female uk-icon-fighter-jet uk-icon-film uk-icon-filter uk-icon-fire uk-icon-fire-extinguisher uk-icon-flag uk-icon-flag-checkered uk-icon-flag-o uk-icon-flash uk-icon-flask uk-icon-folder uk-icon-folder-o uk-icon-folder-open uk-icon-folder-open-o uk-icon-frown-o uk-icon-gamepad uk-icon-gavel uk-icon-gear uk-icon-gears uk-icon-gift uk-icon-glass uk-icon-globe uk-icon-group uk-icon-hdd-o uk-icon-headphones uk-icon-heart uk-icon-heart-o uk-icon-home uk-icon-inbox uk-icon-info uk-icon-info-circle uk-icon-key uk-icon-keyboard-o uk-icon-laptop uk-icon-leaf uk-icon-legal uk-icon-lemon-o uk-icon-level-down uk-icon-level-up uk-icon-lightbulb-o uk-icon-location-arrow uk-icon-lock uk-icon-magic uk-icon-magnet uk-icon-mail-forward uk-icon-mail-reply uk-icon-mail-reply-all uk-icon-male uk-icon-map-marker uk-icon-meh-o uk-icon-microphone uk-icon-microphone-slash uk-icon-minus uk-icon-minus-circle uk-icon-minus-square uk-icon-minus-square-o uk-icon-mobile uk-icon-mobile-phone uk-icon-money uk-icon-moon-o uk-icon-music uk-icon-pencil uk-icon-pencil-square uk-icon-pencil-square-o uk-icon-phone uk-icon-phone-square uk-icon-picture-o uk-icon-plane uk-icon-plus uk-icon-plus-circle uk-icon-plus-square uk-icon-plus-square-o uk-icon-power-off uk-icon-print uk-icon-puzzle-piece uk-icon-qrcode uk-icon-question uk-icon-question-circle uk-icon-quote-left uk-icon-quote-right uk-icon-random uk-icon-refresh uk-icon-reply uk-icon-reply-all uk-icon-retweet uk-icon-road uk-icon-rocket uk-icon-rss uk-icon-rss-square uk-icon-search uk-icon-search-minus uk-icon-search-plus uk-icon-share uk-icon-share-square uk-icon-share-square-o uk-icon-shield uk-icon-shopping-cart uk-icon-sign-in uk-icon-sign-out uk-icon-signal uk-icon-sitemap uk-icon-smile-o uk-icon-sort uk-icon-sort-alpha-asc uk-icon-sort-alpha-desc uk-icon-sort-amount-asc uk-icon-sort-amount-desc uk-icon-sort-asc uk-icon-sort-desc uk-icon-sort-down uk-icon-sort-numeric-asc uk-icon-sort-numeric-desc uk-icon-sort-up uk-icon-spinner uk-icon-square uk-icon-square-o uk-icon-star uk-icon-star-half uk-icon-star-half-empty uk-icon-star-half-full uk-icon-star-half-o uk-icon-star-o uk-icon-subscript uk-icon-suitcase uk-icon-sun-o uk-icon-superscript uk-icon-tablet uk-icon-tachometer uk-icon-tag uk-icon-tags uk-icon-tasks uk-icon-terminal uk-icon-thumb-tack uk-icon-thumbs-down uk-icon-thumbs-o-down uk-icon-thumbs-o-up uk-icon-thumbs-up uk-icon-ticket uk-icon-times uk-icon-times-circle uk-icon-times-circle-o uk-icon-tint uk-icon-toggle-down uk-icon-toggle-left uk-icon-toggle-right uk-icon-toggle-up uk-icon-trash-o uk-icon-trophy uk-icon-truck uk-icon-umbrella uk-icon-unlock uk-icon-unlock-alt uk-icon-unsorted uk-icon-upload uk-icon-user uk-icon-users uk-icon-video-camera uk-icon-volume-down uk-icon-volume-off uk-icon-volume-up uk-icon-warning uk-icon-wheelchair uk-icon-wrench".split(" "),
"Currency Icons":"uk-icon-bitcoin uk-icon-btc uk-icon-cny uk-icon-dollar uk-icon-eur uk-icon-euro uk-icon-gbp uk-icon-inr uk-icon-jpy uk-icon-krw uk-icon-money uk-icon-rmb uk-icon-rouble uk-icon-rub uk-icon-ruble uk-icon-rupee uk-icon-try uk-icon-turkish-lira uk-icon-usd uk-icon-won uk-icon-yen".split(" "),"Text Editor Icons":"uk-icon-align-center uk-icon-align-justify uk-icon-align-left uk-icon-align-right uk-icon-bold uk-icon-chain uk-icon-chain-broken uk-icon-clipboard uk-icon-columns uk-icon-copy uk-icon-cut uk-icon-dedent uk-icon-eraser uk-icon-file uk-icon-file-o uk-icon-file-text uk-icon-file-text-o uk-icon-files-o uk-icon-floppy-o uk-icon-font uk-icon-indent uk-icon-italic uk-icon-link uk-icon-list uk-icon-list-alt uk-icon-list-ol uk-icon-list-ul uk-icon-outdent uk-icon-paperclip uk-icon-paste uk-icon-repeat uk-icon-rotate-left uk-icon-rotate-right uk-icon-save uk-icon-scissors uk-icon-strikethrough uk-icon-table uk-icon-text-height uk-icon-text-width uk-icon-th uk-icon-th-large uk-icon-th-list uk-icon-underline uk-icon-undo uk-icon-unlink".split(" "),
"Directional Icons":"uk-icon-angle-double-down uk-icon-angle-double-left uk-icon-angle-double-right uk-icon-angle-double-up uk-icon-angle-down uk-icon-angle-left uk-icon-angle-right uk-icon-angle-up uk-icon-arrow-circle-down uk-icon-arrow-circle-left uk-icon-arrow-circle-o-down uk-icon-arrow-circle-o-left uk-icon-arrow-circle-o-right uk-icon-arrow-circle-o-up uk-icon-arrow-circle-right uk-icon-arrow-circle-up uk-icon-arrow-down uk-icon-arrow-left uk-icon-arrow-right uk-icon-arrow-up uk-icon-arrows uk-icon-arrows-alt uk-icon-arrows-h uk-icon-arrows-v uk-icon-caret-down uk-icon-caret-left uk-icon-caret-right uk-icon-caret-square-o-down uk-icon-caret-square-o-left uk-icon-caret-square-o-right uk-icon-caret-square-o-up uk-icon-caret-up uk-icon-chevron-circle-down uk-icon-chevron-circle-left uk-icon-chevron-circle-right uk-icon-chevron-circle-up uk-icon-chevron-down uk-icon-chevron-left uk-icon-chevron-right uk-icon-chevron-up uk-icon-hand-o-down uk-icon-hand-o-left uk-icon-hand-o-right uk-icon-hand-o-up uk-icon-long-arrow-down uk-icon-long-arrow-left uk-icon-long-arrow-right uk-icon-long-arrow-up uk-icon-toggle-down uk-icon-toggle-left uk-icon-toggle-right uk-icon-toggle-up".split(" "),
"Video Player Icons":"uk-icon-arrows-alt uk-icon-backward uk-icon-compress uk-icon-eject uk-icon-expand uk-icon-fast-backward uk-icon-fast-forward uk-icon-forward uk-icon-pause uk-icon-play uk-icon-play-circle uk-icon-play-circle-o uk-icon-step-backward uk-icon-step-forward uk-icon-stop uk-icon-youtube-play".split(" "),"Brand Icons":"uk-icon-adn uk-icon-android uk-icon-apple uk-icon-bitbucket uk-icon-bitbucket-square uk-icon-bitcoin uk-icon-btc uk-icon-css3 uk-icon-dribbble uk-icon-dropbox uk-icon-facebook uk-icon-facebook-square uk-icon-flickr uk-icon-foursquare uk-icon-github uk-icon-github-alt uk-icon-github-square uk-icon-gittip uk-icon-google-plus uk-icon-google-plus-square uk-icon-html5 uk-icon-instagram uk-icon-linkedin uk-icon-linkedin-square uk-icon-linux uk-icon-maxcdn uk-icon-pagelines uk-icon-pinterest uk-icon-pinterest-square uk-icon-renren uk-icon-skype uk-icon-stack-exchange uk-icon-stack-overflow uk-icon-trello uk-icon-tumblr uk-icon-tumblr-square uk-icon-twitter uk-icon-twitter-square uk-icon-vimeo-square uk-icon-vk uk-icon-weibo uk-icon-windows uk-icon-xing uk-icon-xing-square uk-icon-youtube uk-icon-youtube-play uk-icon-youtube-square".split(" "),
"Medical Icons":"uk-icon-ambulance uk-icon-h-square uk-icon-hospital-o uk-icon-medkit uk-icon-plus-square uk-icon-stethoscope uk-icon-user-md uk-icon-wheelchair".split(" ")},function(c,d){y.push("<li><strong>"+c+"</strong></li>");a.each(d,function(){y.push('<li><a href="" class="'+this+' uk-icon-small" data-icon="'+this+'"> '+this+"</a></li>")})});y.push("</ul>");j.append(y.join("\n"));a(".tm-main").on("focus","input[name$='[icon]']",function(c){c.preventDefault();c=a(this);var d=c.offset(),b=d.top+
c.height()+15;left=d.left;j.data("input",c).css({top:b,left:left}).show();j[0].scrollTop=0});j.on("click","[class*='uk-icon']",function(c){c.preventDefault();j.data("input").val(a(this).data("icon"));j.hide()});a(document).on("click",function(c){j.is(":visible")&&!a(c.target).is("input[name$='[icon]']")&&j.hide()});a("[data-list-devices]").on("click","li",function(c){c.preventDefault();a(this).toggleClass("active").find("input").val(a(this).hasClass("active")?"1":"0")}).find("li").each(function(){a(this).toggleClass("active",
"0"!==a(this).find("input").val())});f.element.find("button").on("click",function(){q=!0;f.hide()});if(h())a("[href=#compile]").on("click",function(a){a.preventDefault();d.css("width","0%");g.html("");v.html("");f.show();setTimeout(function(){System.data().done(function(a){k(a,{progress:b}).done(function(c){e(c,a)}).fail(function(){f.hide()})}).fail(function(){f.hide()})},300)});else a("[href=#compile]").attr("disabled","disabled").on("click",function(a){a.preventDefault()});if(h()){var E=!1;a("a",
z).on("click",function(c){c.preventDefault();E||(E=!0,System.data().done(function(c){var r=a("body").addClass("cm-open");a.cookie(c.cookie,"1",{expires:1,path:"/"});s.append(a("[type*=template]",z).mustache());var h=function(d){var b=t.contents(),e=!0,r=!1,j=!1;a.each(c.less,function(c,f){if(!r){var g=b.find("head [data-file='"+f.target+"']");g.length&&(a.less.getCSS(f.source,{id:f.target,variables:d.variables,compress:!0}).done(function(c){e&&d.fonts&&(c=d.fonts+"\n"+c);"rtl"==b.find("html").attr("dir")&&
(c=a.rtl.convert2RTL(c));g.attr("href")?g.replaceWith(a("<style>").attr("data-file",g.data("file")).text(c)):g.text(c)}).fail(function(a){w.trigger("show",a);r=!0}),e=!1,j=!0)}});r||(l.show(),t.css("visibility","visible"),y.hide(),w.trigger("hide"),setTimeout(function(){t[0].contentWindow.postMessage("customizer-update",location.origin)},150));B.trigger(!j?"show":"hide","The current theme is not customizable.")},j=a("#customizer"),p=a("select[name=style]",j),n=a("[href='#copy']",j),q=a("[href='#remove']",
j).hide(),t=a("#cm-theme-preview",j).css("visibility","hidden"),y=a("i.cm-spinner",j),w=a(".cm-error",j),x=function(){r.removeClass("cm-open")},D=function(j,h){r.removeClass("cm-open");var p=c.styles,t={};c.styles={};a.each(h,function(d,b){if(j!=b.name&&p[b.name])c.styles[b.name]=p[b.name];else{var e=[];b.fonts&&e.push(b.fonts);a.each(b.variables,function(a,c){e.push(a+": "+c+";")});c.styles[b.name]=t[b.name]=e.join("\n")}});F.each(function(){var b=a(this),d=b.val(),e=[];a.each(c.styles,function(a){"default"!=
a&&e.push(a)});e=a.merge(["default"],a.merge(e,b.data("style-css")).sort());b.html(a.mustache('{{#styles}}<option value="{{.}}">{{.}}</option>{{/styles}}',{styles:e}));b.trigger("update",d)});d.css("width","0%");g.html("");v.html("");f.show();k(a.extend({},c,{styles:t}),{progress:b}).done(function(a){e(a,c)}).fail(function(){f.hide()})},u=[],C,l=a(".cm-sidebar-content",j),B=a(".cm-sidebar-message",j).hide();a.each(c.styles,function(b,d){u.push({name:b,config:c.config,config_vars:c.config_vars,variables:a.less.getVars(d)})});
j.customizer({styles:u,updating:function(a,c){q.toggle("default"!=c.name);l.hide();t.css("visibility","hidden");y.show()},updated:function(c,b){var d;b.fonts="";a("option[data-url]:selected",j).each(function(){if((d=a(this).data("url"))&&-1===b.fonts.indexOf("'"+d+"'"))b.fonts+="@import '"+d+"';\n"});h(C=b)}});t.on("load",function(){C?h(C):j.trigger("update")});w.on({show:function(c,b){w.html(a.mustache('<h1 class="uk-h3">LESS {{type}} Error</h1><p>{{message}}</p>',b)).show();t.css("visibility","hidden")},
hide:function(){w.hide();t.css("visibility","visible")}});B.on({show:function(a,c){B.html(c).show();l.css("visibility","hidden")},hide:function(){B.hide();l.css("visibility","visible")}});n.on("click",function(b){b.preventDefault();(b=prompt("Please enter a style name",""))&&!a('option[value="'+b+'"]',p).length&&u.push({name:b,config:c.config,config_vars:c.config_vars,variables:a.extend({},C.variables)});j.trigger("update",b)});q.on("click",function(c){c.preventDefault();var b;a.each(u,function(a,
c){p.val()==c.name&&(b=a)});null!==b&&u.splice(b,1);j.trigger("update")});a("[href='#save']",j).on("click",function(b){b.preventDefault();j.remove();a.removeCookie(c.cookie,{path:"/"});a.isFunction(D)&&D.call(this,p.val(),u)});a("[href='#reset']",j).on("click",function(b){b.preventDefault();b=p.val();var d;a.each(u,function(a,c){p.val()==c.name&&(d=a)});c.styles[b]&&null!==d&&(a.extend(u[d],{config:c.config,variables:a.less.getVars(c.styles[b]),groups:""}),j.trigger("update",[b,!0]))});a("[href='#cancel']",
j).on("click",function(b){b.preventDefault();j.remove();a.removeCookie(c.cookie,{path:"/"});a.isFunction(x)&&x.call(this)})}).fail(function(c){a("a",z).after(a('<div class="uk-alert uk-alert-danger" />').text(c))}).always(function(){E=!1}))})}else a("a",z).attr("disabled","disabled").on("click",function(a){a.preventDefault()}),s.prepend('<div class="uk-alert uk-alert-danger">Your browser does not support the customizing and LESS compiling features. Please update your browser.</div>');F.on("update",
function(c,b){var d=a(this);b||(b=d.data("selected"));d.val(d.find('option[value="'+b+'"]').length?b:d.val())}).trigger("update")})})(jQuery,window.sessionStorage||{});
(function(a){var l=function(k,h){function q(a,b){var d="^"+a.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")+"$";return null!==b.match(RegExp("^"+d+"$"))}var e=a(h.select,k),b=a(h.sidebar,k),l=a(h.advanced,k),f=a(h.error,k),d;k.on({update:function(v,g,l){a("option",e).length!=h.styles.length&&e.html(a.mustache(h.template.select,h));g&&e.val(g);var s=e.val();v=d;a.each(h.styles,function(a,b){s==b.name&&(d=b)});if(d!==v||l){k.trigger("updating",
d);var n=d,A=a.Deferred();n.groups?l=A.resolve():(a.ajax({url:n.config,cache:!1,dataType:"json"}).done(function(b){var d=a.extend({},n.config_vars);n.config=b;n.groups=[];n.variables=n.variables||{};n.matchName=q;a.each(n.config.groups,function(b,e){var f,g={label:e.label,variables:[],advanced:e.advanced||!1,more:!1};a.each(e.vars,function(b,e){a.each(d,function(a,b){q(e,a)&&(delete d[a],f={name:a,"default":b,placeholder:b,label:a.replace(/^@/,"").replace(/^\w+\-/,"").replace(/\-/g," "),more:-1!==
b.indexOf("@"),value:function(){return n.variables[a]?n.variables[a]:""}},f.more&&(g.more=!0,f.placeholder="@"),g.variables.push(f))})});g.variables.length&&n.groups.push(g)});A.resolve()}).fail(function(a,b,d){A.reject("Unable to retrieve "+n.config+" ("+d+")")}),l=A.promise());l.done(function(){var e=d;b.html(a.mustache(h.template.sidebar,e));b.find("input[data-name]").each(function(){var b=a(this),d=b.val()||b.data("default"),f,g;-1===b.attr("data-default").indexOf("@")&&a.each(e.config.controls,
function(e,h){a.each(h.vars,function(e,k){if(q(k,b.attr("data-name")))switch(h.type){case "color":var l=a('<div class="sp-placeholder"><div class="sp-placeholder-color"></div></div>').find("div").css("background-color",d).end().on("click",function(){var e;b.spectrum({showInput:!0,showAlpha:!0,color:d,change:function(a){1>a.toRgb().a&&b.val(a.toRgbString()).trigger("change")},show:function(){e||(e=a.fn.spectrum.get(b.data("spectrum.id")),e.container.find(".sp-cancel").after(a('<a href="#" class="sp-reset">reset</a>').on("click",
function(a){a.preventDefault();e.set(b.data("default"));e.hide();b.val("")})))}}).on("show-spectrum",function(){parseInt(e.container.find(".sp-slider").css("top"))>e.container.find(".sp-hue").height()&&e.container.find(".sp-slider").css("top",0)});l.remove();setTimeout(function(){b.spectrum("show")},50)});b.hide().after(l);break;case "font":g=[];a.isArray(h.options)?g.push({group:"",options:h.options}):a.each(h.options,function(a,b){g.push({group:a,options:b})});f=a(a.mustache('<select>{{#groups}}{{#group}}<optgroup label="{{group}}">{{/group}}{{#options}}<option value="{{value}}"{{#url}} data-url="{{url}}"{{/url}}>{{name}}</option>{{/options}}{{#group}}</optgroup>{{/group}}{{/groups}}</select>',
{groups:g}));b.replaceWith(f.val(d).attr("class",b.attr("class")).attr("name",b.attr("name")).attr("data-name",b.attr("data-name")));break;case "select":f=a(a.mustache('<select>{{#options}}<option value="{{value}}">{{name}}</option>{{/options}}</select>',{options:h.options})),b.replaceWith(f.val(d).attr("class",b.attr("class")).attr("name",b.attr("name")).attr("data-name",b.attr("data-name")))}})})});k.trigger("updated",d)}).fail(function(b){f.html(a.mustache('<h1 class="uk-h3">Error</h1><p>{{message}}</p>',
{message:b})).show()})}},updating:h.updating,updated:h.updated});e.on("change",function(){setTimeout(function(){k.trigger("update")},1)});l.on("change",function(){b[a(this).prop("checked")?"addClass":"removeClass"]("cm-show-advanced")}).trigger("change");k.on("click","a.cm-more-link",function(b){b.preventDefault();a(this).parents("fieldset:first").toggleClass("cm-show-more")});k.on("change","input[name=vars], select[name=vars]",function(b){b.preventDefault();b=a(this).attr("data-name");var e=a(this).val();
""===e?delete d.variables[b]:d.variables[b]=e;k.trigger("updated",d)})};a.fn.customizer=function(k){return this.each(function(){var h={updating:a.noop(),updated:a.noop(),select:"select[name=style]",advanced:"input[name=advanced]",sidebar:"section.cm-sidebar-content",error:".cm-error",template:{select:'{{#styles}}<option value="{{name}}">{{name}}</option>{{/styles}}',sidebar:'<div class="cm-vars cm-form uk-form">                             {{#groups}}                             <fieldset{{#advanced}} class="cm-advanced"{{/advanced}}>                                 <h2 class="cm-form-title">{{label}}{{#more}} <a href="#" class="cm-more-link"></a>{{/more}}</h2>                                 {{#variables}}                                 <div class="uk-form-row{{#more}} cm-more{{/more}}">                                     <label class="uk-form-label" title="{{name}}">{{label}}</label>                                     <div class="uk-form-controls">                                         <input class="uk-form-small" name="vars" type="text"{{#value}} value="{{value}}"{{/value}} placeholder="{{placeholder}}" data-name="{{name}}" data-default="{{default}}">                                     </div>                                 </div>                                 {{/variables}}                             </fieldset>                             {{/groups}}                         </div>'}};
new l(a(this),a.extend({},h,k))})}})(jQuery);
if("function"!=typeof window.parse_str)var parse_str=function(a,l){var k=String(a).replace(/^&/,"").replace(/&$/,"").split("&"),h=k.length,q,e,b,s,f,d,v,g,z;l||(l=this.window);for(q=0;q<h;q++){e=k[q].split("=");b=decodeURIComponent(e[0].replace(/\+/g,"%20"));for(v=2>e.length?"":decodeURIComponent(e[1].replace(/\+/g,"%20"));" "===b.charAt(0);)b=b.slice(1);-1<b.indexOf("\x00")&&(b=b.slice(0,b.indexOf("\x00")));if(b&&"["!==b.charAt(0)){g=[];for(e=d=0;e<b.length;e++)if("["===b.charAt(e)&&!d)d=e+1;else if("]"===
b.charAt(e)&&d&&(g.length||g.push(b.slice(0,d-1)),g.push(b.substr(d,e-d)),d=0,"["!==b.charAt(e+1)))break;g.length||(g=[b]);for(e=0;e<g[0].length;e++){d=g[0].charAt(e);if(" "===d||"."===d||"["===d)g[0]=g[0].substr(0,e)+"_"+g[0].substr(e+1);if("["===d)break}d=l;e=0;for(z=g.length;e<z;e++)if(b=g[e].replace(/^['"]/,"").replace(/['"]$/,""),f=d,""!==b&&" "!==b||0===e)void 0===d[b]&&(d[b]={}),d=d[b];else{b=-1;for(s in d)d.hasOwnProperty(s)&&+s>b&&s.match(/^\d+$/g)&&(b=+s);b+=1}f[b]=v}}};
