function SetVisibleMenu(visible) 
{
 if (visible) 
 {
    $("#div1").css("display", "none");
	$("#footercontainer").css("display", "none");
 }
 else 
 {
    $("#div1").removeAttr("style");
    $("#footercontainer").removeAttr("style");
 }
}