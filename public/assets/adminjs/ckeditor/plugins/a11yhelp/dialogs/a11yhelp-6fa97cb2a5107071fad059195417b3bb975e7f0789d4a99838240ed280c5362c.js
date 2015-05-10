/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("a11yHelp",function(e){var t=e.lang.a11yhelp,i=CKEDITOR.tools.getNextId(),a={8:t.backspace,9:t.tab,13:t.enter,16:t.shift,17:t.ctrl,18:t.alt,19:t.pause,20:t.capslock,27:t.escape,33:t.pageUp,34:t.pageDown,35:t.end,36:t.home,37:t.leftArrow,38:t.upArrow,39:t.rightArrow,40:t.downArrow,45:t.insert,46:t["delete"],91:t.leftWindowKey,92:t.rightWindowKey,93:t.selectKey,96:t.numpad0,97:t.numpad1,98:t.numpad2,99:t.numpad3,100:t.numpad4,101:t.numpad5,102:t.numpad6,103:t.numpad7,104:t.numpad8,105:t.numpad9,106:t.multiply,107:t.add,109:t.subtract,110:t.decimalPoint,111:t.divide,112:t.f1,113:t.f2,114:t.f3,115:t.f4,116:t.f5,117:t.f6,118:t.f7,119:t.f8,120:t.f9,121:t.f10,122:t.f11,123:t.f12,144:t.numLock,145:t.scrollLock,186:t.semiColon,187:t.equalSign,188:t.comma,189:t.dash,190:t.period,191:t.forwardSlash,192:t.graveAccent,219:t.openBracket,220:t.backSlash,221:t.closeBracket,222:t.singleQuote};a[CKEDITOR.ALT]=t.alt,a[CKEDITOR.SHIFT]=t.shift,a[CKEDITOR.CTRL]=t.ctrl;var n=[CKEDITOR.ALT,CKEDITOR.SHIFT,CKEDITOR.CTRL],o=/\$\{(.*?)\}/g,r=function(){var t,i=e.keystrokeHandler.keystrokes,o={};for(t in i)o[i[t]]=t;return function(e,t){var i;if(o[t]){i=o[t];for(var r,l,s=[],d=0;d<n.length;d++)l=n[d],r=i/n[d],r>1&&2>=r&&(i-=l,s.push(a[l]));s.push(a[i]||String.fromCharCode(i)),i=s.join("+")}else i=e;return i}}();return{title:t.title,minWidth:600,minHeight:400,contents:[{id:"info",label:e.lang.common.generalTab,expand:!0,elements:[{type:"html",id:"legends",style:"white-space:normal;",focus:function(){this.getElement().focus()},html:function(){for(var e='<div class="cke_accessibility_legend" role="document" aria-labelledby="'+i+'_arialbl" tabIndex="-1">%1</div><span id="'+i+'_arialbl" class="cke_voice_label">'+t.contents+" </span>",a=[],n=t.legend,l=n.length,s=0;l>s;s++){for(var d=n[s],c=[],u=d.items,p=u.length,h=0;p>h;h++){var m=u[h],g=m.legend.replace(o,r);g.match(o)||c.push("<dt>%1</dt><dd>%2</dd>".replace("%1",m.name).replace("%2",g))}a.push("<h1>%1</h1><dl>%2</dl>".replace("%1",d.name).replace("%2",c.join("")))}return e.replace("%1",a.join(""))}()+'<style type="text/css">.cke_accessibility_legend{width:600px;height:400px;padding-right:5px;overflow-y:auto;overflow-x:hidden;}.cke_browser_quirks .cke_accessibility_legend,.cke_browser_ie6 .cke_accessibility_legend{height:390px}.cke_accessibility_legend *{white-space:normal;}.cke_accessibility_legend h1{font-size: 20px;border-bottom: 1px solid #AAA;margin: 5px 0px 15px;}.cke_accessibility_legend dl{margin-left: 5px;}.cke_accessibility_legend dt{font-size: 13px;font-weight: bold;}.cke_accessibility_legend dd{margin:10px}</style>'}]}],buttons:[CKEDITOR.dialog.cancelButton]}});