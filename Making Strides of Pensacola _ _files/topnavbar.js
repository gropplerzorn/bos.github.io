/* Compressed by the perl version of jsmin. */
/* JavaScript::Minifier 0.02 */

function TopNavbar()
{}
var NAV_OBJ_SELECT='_sel';var NAV_OBJ_HIGHLIGHT='_high';var NAV_OBJ_DISABLED='_dis';var NAV_OBJ_ERROR='_err';var TOPNAV_DROPDOWN_LAYER='topnavDropdownLayer';var topnav={'topnavTimer':false,'menuId':false};function highlightMenuItem(menu)
{var link=getObj(menu+'Link');var cell=getObj(menu+'Cell');addClassName(link,NAV_OBJ_SELECT);addClassName(cell,NAV_OBJ_SELECT);}
function removeHighlights(menu)
{var link=getObj(menu+'Link');var cell=getObj(menu+'Cell');stripClassName(link,true);stripClassName(cell,true);}
function showSubNav(menu)
{var link=getObj(menu+'Link');var obj=getObj(menu+'Cell');clearTimeout(topnav.topnavTimer);var menuId=obj.id.substring(0,obj.id.indexOf('Cell'));if(topnav.menuId&&topnav.menuId==menuId)
return;else if(topnav.menuId){stripClassName(getObj(topnav.menuId+'Cell'),true);stripClassName(getObj(topnav.menuId+'Link'),true);}
addClassName(link,NAV_OBJ_SELECT);addClassName(obj,NAV_OBJ_SELECT);var dropdownObj=getObj(TOPNAV_DROPDOWN_LAYER);var displayObj=getObj(menuId+'Navigation');if(displayObj)
dropdownObj.innerHTML=displayObj.innerHTML;else
dropdownObj.innerHTML='';show_element(dropdownObj);var pos=returnPosition(obj);dropdownObj.style.left=(pos.x)+'px';dropdownObj.style.top=(pos.y+obj.offsetHeight)+'px';obj.style.zIndex=10;dropdownObj.style.zIndex=5;if(dropdownObj.clientWidth<obj.clientWidth){var firstChild=getChildByTagType(dropdownObj,'TABLE');if(firstChild!=null){dropdownObj.style.width=(obj.clientWidth+10)+'px';firstChild.style.width=(obj.clientWidth+10)+'px';}}
else{dropdownObj.style.width=null;}
topnav.menuId=menuId;}
function hideSubNav(){topnav.topnavTimer=setTimeout('closeSubNav()',500);}
function closeSubNav()
{var dropdownObj=getObj(TOPNAV_DROPDOWN_LAYER);var obj=getObj(topnav.menuId+'Cell');stripClassName(obj,true);obj=getObj(topnav.menuId+'Link');stripClassName(obj,true);hide_element(dropdownObj);topnav.menuId=false;topnav.closeId=false;}
function dropdownOver()
{clearTimeout(topnav.topnavTimer);}
function mouseoverNavLineItem(obj){addClassName(obj,NAV_OBJ_HIGHLIGHT);addClassName(getChildByTagType(obj,'A'),NAV_OBJ_HIGHLIGHT);}
function mouseoutNavLineItem(obj){stripClassName(obj);stripClassName(getChildByTagType(obj,'A'),NAV_OBJ_HIGHLIGHT);}
function focusNavLineItem(obj){dropdownOver();addClassName(obj,NAV_OBJ_HIGHLIGHT);addClassName(obj.parentNode,NAV_OBJ_HIGHLIGHT);}
function blurNavLineItem(obj){hideSubNav();stripClassName(obj);stripClassName(obj.parentNode);}
function clickLinkInTableCell(cell)
{var link=getChildByTagType(cell,'A');if(link){if(link.target==null||link.target==''||link.target=='_self'){if(link.href){window.location=link.href;return false;}}
else{if(link.href){newwin=window.open(link.href,link.target);return false;}}}}
function getChildByTagType(obj,tag){var found;var elements=obj.childNodes;if(!elements)
return found;var len=elements.length;var i=0;while(i<len&&!found){var child=elements[i++];if(child.tagName&&child.tagName==tag){found=child;}
else if(child.tagName!=undefined){var grandChild=getChildByTagType(child,tag);if(grandChild){found=grandChild;}}}
return found;}
var process_start_dropdown_timer;function showStartLinks(menu)
{var link=getObj(menu+'Link');var obj=getObj(menu+'Cell');var rightEdge=getObj(menu+'Right');addClassName(obj,NAV_OBJ_SELECT);var dropdownObj=getObj('processStartDropdownLayer');var displayObj=getObj(menu+'Navigation');dropdownObj.innerHTML=displayObj.innerHTML;dropdownObj.style.display="";var pos=returnPosition(obj);dropdownObj.style.top=(pos.y+20)+'px';dropdownObj.style.right='0px';obj.style.zIndex=10;dropdownObj.style.zIndex=5;if(dropdownObj.clientWidth<obj.clientWidth){var firstChild=getChildByTagType(dropdownObj,'TABLE');if(firstChild!=null){dropdownObj.style.width=(obj.clientWidth+10)+'px';firstChild.style.width=(obj.clientWidth+10)+'px';}}
else{dropdownObj.style.width=null;}}
function hideStartLinks()
{process_start_dropdown_timer=setTimeout('closeStartLinks()',500);}
function closeStartLinks(){var dropdownObj=getObj('processStartDropdownLayer');var menu='ProcessAdditionalActions';var obj=getObj(menu+'Cell');stripClassName(obj,true);obj=getObj(menu+'Link');stripClassName(obj,true);dropdownObj.style.display='none';}
function processStartDropdownOver()
{clearTimeout(process_start_dropdown_timer);}
function toggleLayer(show,hide)
{show_element(show);hide_element(hide);}
function returnPosition(posObj)
{var retVal=new Object();retVal.x=0;retVal.y=0;while(posObj){retVal.x+=posObj.offsetLeft;retVal.y+=posObj.offsetTop;posObj=posObj.offsetParent;}
return retVal;}
function addImgTag(imgObj,tag)
{if(imgObj.src.indexOf(NAV_OBJ_SELECT)!=-1)
return;stripImgTag(imgObj);imgObj.src=imgObj.src.substring(0,imgObj.src.indexOf('.gif'))+tag+'.gif';}
function stripImgTag(imgObj,clearSelect)
{var notSelected=(imgObj.src.indexOf(NAV_OBJ_SELECT)==-1||clearSelect);if(imgObj.src.indexOf('_')!=-1&&notSelected)
imgObj.src=imgObj.src.substring(0,imgObj.src.indexOf('_'))+'.gif';}
function addClassName(obj,tag)
{if(obj==null||obj.className==null||obj.className.indexOf(NAV_OBJ_SELECT)!=-1)
return;stripClassName(obj);obj.className=obj.className+tag;}
function stripClassName(obj,clearSelect)
{if(!obj||obj==null||obj==undefined)
return;var notSelected=(obj.className.indexOf(NAV_OBJ_SELECT)==-1||clearSelect);if(obj.className.indexOf('_')!=-1&&notSelected)
obj.className=obj.className.substring(0,obj.className.indexOf('_'));}