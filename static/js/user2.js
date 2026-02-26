function SetVisibleMenu(visible)
{
 if (visible) 
 {
    $("#bodycontainer").css("display", "none");
	$("#footercontainer").css("display", "none");
 }
 else 
 {
    $("#bodycontainer").removeAttr("style");
	$("#footercontainer").removeAttr("style");
 }
}




function view()
{
	if (pls==0)
	{
		console.log("wow"+pls);
		return
	}
	console.log(pls[0]);
	header = document.getElementById("0");
	header.innerHTML = " |Place booked succesfully| ";

}