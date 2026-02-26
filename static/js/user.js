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



function show_loaned()
{	

	if (carr.length==0)
	{
		header = document.getElementById("0");
		header.innerHTML = "You haven't borrowed any books yet";
		return
	}
	header = document.getElementById("0");
	header.innerHTML = "| Name loaned book: "+carr[0].name;
	header = document.getElementById("1");
	header.innerHTML = "| Name loaned book: "+carr[1].name;
	header = document.getElementById("2");
	header.innerHTML = "| Name loaned book: "+carr[2].name;
	header = document.getElementById("3");
	header.innerHTML = "| Name loaned book: "+carr[3].name;
	header = document.getElementById("4");
	header.innerHTML = "| Name loaned book: "+carr[4].name;
	header = document.getElementById("5");
	header.innerHTML = "| Name loaned book: "+carr[5].name;

}



function show_booked()
{	

	if (lis.length==0)
	{
		header = document.getElementById("6");
		header.innerHTML = "You haven't booked up a place";
		return
	}
	
	let wow=[];
	let time=[];
	let time_f=[];
	
	for (let i=0;i<lis.length;i++)
	{
	wow[i]=lis[i].s_date;
	wow[i] = new Date(wow[i]).toUTCString();
	wow[i] = wow[i].split(' ').slice(0, 4).join(' ');
	console.log(wow[i]);
	}

	for (let j=0;j<lis.length;j++)
	{
	time[j]=lis[j].s_time;
	time[j] = new Date(time[j]).toUTCString();
	time[j] = time[j].split(' ').slice(4, 7).join(' ');
	console.log(time[j]);
	}
	
	for (let k=0;k<lis.length;k++)
	{
	time_f[k]=lis[k].e_time;
	time_f[k] = new Date(time_f[k]).toUTCString();
	time_f[k] = time_f[k].split(' ').slice(4, 7).join(' ');
	console.log(time_f[k]);
	}
	
	
	header = document.getElementById("6");
	header.innerHTML = "|Place booked up in date : "+wow[0]+"<br>| From : "+time[0]+"<br>| To : "+time_f[0]+"<br>| Comment : "+lis[0].comm;
	header = document.getElementById("7");
	header.innerHTML = "|Place booked up in date : "+wow[1]+"<br>| From : "+time[1]+"<br>| To : "+time_f[1]+"<br>| Comment : "+lis[1].comm;
	header = document.getElementById("8");
	header.innerHTML = "|Place booked up in date : "+wow[2]+"<br>| From : "+time[2]+"<br>| To : "+time_f[2]+"<br>| Comment : "+lis[2].comm;
	header = document.getElementById("9");
	header.innerHTML = "|Place booked up in date : "+wow[3]+"<br>| From : "+time[3]+"<br>| To : "+time_f[3]+"<br>| Comment : "+lis[3].comm;
	header = document.getElementById("10");
	header.innerHTML = "|Place booked up in date : "+wow[4]+"<br>| From : "+time[4]+"<br>| To : "+time_f[4]+"<br>| Comment : "+lis[4].comm;
	header = document.getElementById("11");
	header.innerHTML = "|Place booked up in date : "+wow[5]+"<br>| From : "+time[5]+"<br>| To : "+time_f[5]+"<br>| Comment : "+lis[5].comm;

}
