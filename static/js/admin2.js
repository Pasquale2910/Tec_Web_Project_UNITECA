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

function dispres()
{

	let wow=[];
	let time=[];
	let time_f=[];
	
	for (let i=0;i<tot.length;i++)
	{
	wow[i]=tot[i].s_date;
	wow[i] = new Date(wow[i]).toUTCString();
	wow[i] = wow[i].split(' ').slice(0, 4).join(' ');

	}

	for (let j=0;j<tot.length;j++)
	{
	time[j]=tot[j].s_time;
	time[j] = new Date(time[j]).toUTCString();
	time[j] = time[j].split(' ').slice(4, 7).join(' ');

	}
	
	for (let k=0;k<tot.length;k++)
	{
	time_f[k]=tot[k].e_time;
	time_f[k] = new Date(time_f[k]).toUTCString();
	time_f[k] = time_f[k].split(' ').slice(4, 7).join(' ');

	}
	
	
	
	header = document.getElementById("0");
	header.innerHTML = "ID User: "+tot[0].id_user +"<br>Email: "+tot[0].Email+"<br>in data: "+wow[0]+"<br>Orario prenotazione: "+ time[0]+"<br>Fino alle: "+time_f[0]+"<br>Commento : "+tot[0].comm;
		header = document.getElementById("1");
	header.innerHTML = "ID User: "+tot[1].id_user +"<br>Email: "+tot[1].Email+"<br>in data: "+wow[1]+"<br>Orario prenotazione: "+ time[1]+"<br>Fino alle: "+time_f[1]+"<br>Commento : "+tot[1].comm;
		header = document.getElementById("2");
	header.innerHTML = "ID User: "+tot[2].id_user +"<br>Email: "+tot[2].Email+"<br>in data: "+wow[2]+"<br>Orario prenotazione: "+ time[2]+"<br>Fino alle: "+time_f[2]+"<br>Commento : "+tot[2].comm;
		header = document.getElementById("3");
	header.innerHTML = "ID User: "+tot[3].id_user +"<br>Email: "+tot[3].Email+"<br>in data: "+wow[3]+"<br>Orario prenotazione: "+ time[3]+"<br>Fino alle: "+time_f[3]+"<br>Commento : "+tot[3].comm;
		header = document.getElementById("4");
	header.innerHTML = "ID User: "+tot[4].id_user +"<br>Email: "+tot[4].Email+"<br>in data: "+wow[4]+"<br>Orario prenotazione: "+ time[4]+"<br>Fino alle: "+time_f[4]+"<br>Commento : "+tot[4].comm;
		header = document.getElementById("5");
	header.innerHTML = "ID User: "+tot[5].id_user +"<br>Email: "+tot[5].Email+"<br>in data: "+wow[5]+"<br>Orario prenotazione: "+ time[5]+"<br>Fino alle: "+time_f[5]+"<br>Commento : "+tot[5].comm;
		header = document.getElementById("6");
	header.innerHTML = "ID User: "+tot[6].id_user +"<br>Email: "+tot[6].Email+"<br>in data: "+wow[6]+"<br>Orario prenotazione: "+ time[6]+"<br>Fino alle: "+time_f[6]+"<br>Commento : "+tot[6].comm;
		header = document.getElementById("7");
	header.innerHTML = "ID User: "+tot[7].id_user +"<br>Email: "+tot[7].Email+"<br>in data: "+wow[7]+"<br>Orario prenotazione: "+ time[7]+"<br>Fino alle: "+time_f[7]+"<br>Commento : "+tot[7].comm;
		header = document.getElementById("8");
	header.innerHTML = "ID User: "+tot[8].id_user +"<br>Email: "+tot[8].Email+"<br>in data: "+wow[8]+"<br>Orario prenotazione: "+ time[8]+"<br>Fino alle: "+time_f[8]+"<br>Commento : "+tot[8].comm;
		header = document.getElementById("9");
	header.innerHTML = "ID User: "+tot[9].id_user +"<br>Email: "+tot[9].Email+"<br>in data: "+wow[9]+"<br>Orario prenotazione: "+ time[9]+"<br>Fino alle: "+time_f[9]+"<br>Commento : "+tot[9].comm;
		header = document.getElementById("10");
	header.innerHTML = "ID User: "+tot[10].id_user +"<br>Email: "+tot[10].Email+"<br>in data: "+wow[10]+"<br>Orario prenotazione: "+ time[10]+"<br>Fino alle: "+time_f[10]+"<br>Commento : "+tot[10].comm;
		header = document.getElementById("11");
	header.innerHTML = "ID User: "+tot[11].id_user +"<br>Email: "+tot[11].Email+"<br>in data: "+wow[11]+"<br>Orario prenotazione: "+ time[11]+"<br>Fino alle: "+time_f[11]+"<br>Commento : "+tot[11].comm;
		header = document.getElementById("12");
	header.innerHTML = "ID User: "+tot[12].id_user +"<br>Email: "+tot[12].Email+"<br>in data: "+wow[12]+"<br>Orario prenotazione: "+ time[12]+"<br>Fino alle: "+time_f[12]+"<br>Commento : "+tot[12].comm;
		header = document.getElementById("13");
	header.innerHTML = "ID User: "+tot[13].id_user +"<br>Email: "+tot[13].Email+"<br>in data: "+wow[13]+"<br>Orario prenotazione: "+ time[13]+"<br>Fino alle: "+time_f[13]+"<br>Commento : "+tot[13].comm;
		header = document.getElementById("14");
	header.innerHTML = "ID User: "+tot[14].id_user +"<br>Email: "+tot[14].Email+"<br>in data: "+wow[14]+"<br>Orario prenotazione: "+ time[14]+"<br>Fino alle: "+time_f[14]+"<br>Commento : "+tot[14].comm;
		header = document.getElementById("15");
	header.innerHTML = "ID User: "+tot[15].id_user +"<br>Email: "+tot[15].Email+"<br>in data: "+wow[15]+"<br>Orario prenotazione: "+ time[15]+"<br>Fino alle: "+time_f[15]+"<br>Commento : "+tot[15].comm;
		header = document.getElementById("16");
	header.innerHTML = "ID User: "+tot[16].id_user +"<br>Email: "+tot[16].Email+"<br>in data: "+wow[16]+"<br>Orario prenotazione: "+ time[16]+"<br>Fino alle: "+time_f[16]+"<br>Commento : "+tot[16].comm;
		header = document.getElementById("17");
	header.innerHTML = "ID User: "+tot[17].id_user +"<br>Email: "+tot[17].Email+"<br>in data: "+wow[17]+"<br>Orario prenotazione: "+ time[17]+"<br>Fino alle: "+time_f[17]+"<br>Commento : "+tot[17].comm;
		header = document.getElementById("18");
	header.innerHTML = "ID User: "+tot[18].id_user +"<br>Email: "+tot[18].Email+"<br>in data: "+wow[18]+"<br>Orario prenotazione: "+ time[18]+"<br>Fino alle: "+time_f[18]+"<br>Commento : "+tot[18].comm;
		header = document.getElementById("19");
	header.innerHTML = "ID User: "+tot[19].id_user +"<br>Email: "+tot[19].Email+"<br>in data: "+wow[19]+"<br>Orario prenotazione: "+ time[19]+"<br>Fino alle: "+time_f[19]+"<br>Commento : "+tot[19].comm;
		header = document.getElementById("20");
	header.innerHTML = "ID User: "+tot[20].id_user +"<br>Email: "+tot[20].Email+"<br>in data: "+wow[20]+"<br>Orario prenotazione: "+ time[20]+"<br>Fino alle: "+time_f[20]+"<br>Commento : "+tot[20].comm;


}


function nxtpage() 
{
	let wow=[];
	let time=[];
	let time_f=[];
	
	for (let i=0;i<tot.length;i++)
	{
		wow[i]=tot[i].s_date;
		wow[i] = new Date(wow[i]).toUTCString();
		wow[i] = wow[i].split(' ').slice(0, 4).join(' ');

	}

	for (let j=0;j<tot.length;j++)
	{
		time[j]=tot[j].s_time;
		time[j] = new Date(time[j]).toUTCString();
		time[j] = time[j].split(' ').slice(4, 7).join(' ');

	}
	
	for (let k=0;k<tot.length;k++)
	{
		time_f[k]=tot[k].e_time;
		time_f[k] = new Date(time_f[k]).toUTCString();
		time_f[k] = time_f[k].split(' ').slice(4, 7).join(' ');

	}
	
	let j=0;
	for (let i=20; i < 41; i++)
	{
		if (tot[i]==null)
		{
			header = document.getElementById(j);
			header.innerHTML = "Empty";
			j++;
		}
		else
		{
			header = document.getElementById(j);
			header.innerHTML = "ID User: "+tot[i].id_user +"<br>Email: "+tot[i].Email+"<br>in data: "+wow[i]+"<br>Orario prenotazione: "+ time[i]+"<br>Fino alle: "+time_f[i]+"<br>Commento : "+tot[i].comm;
			j++;
		}
	}
};