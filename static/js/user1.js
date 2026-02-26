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

function findbook()
{


	header = document.getElementById("0nome");
	header.innerHTML = myjson[0].name;
	header = document.getElementById("0n.writer");
	header.innerHTML = myjson[0].n_writer;
	header = document.getElementById("0tag");
	header.innerHTML = myjson[0].tag;
	header = document.getElementById("0a_d_s");
	header.innerHTML = myjson[0].ann_d_p;
	header = document.getElementById("0editore");
	header.innerHTML = myjson[0].editore;
	header = document.getElementById("0disponibile");
	header.innerHTML = myjson[0].disponibile;

	console.log(myjson[0])	
	
	header = document.getElementById("1nome");
	header.innerHTML = myjson[1].name;
	header = document.getElementById("1n.writer");
	header.innerHTML = myjson[1].n_writer;
	header = document.getElementById("1tag");
	header.innerHTML = myjson[1].tag;
	header = document.getElementById("1a_d_s");
	header.innerHTML = myjson[1].ann_d_p;
	header = document.getElementById("1editore");
	header.innerHTML = myjson[1].editore;
	header = document.getElementById("1disponibile");
	header.innerHTML = myjson[1].disponibile;
	
	console.log(myjson[1])

	
	header = document.getElementById("2nome");
	header.innerHTML = myjson[2].name;
	header = document.getElementById("2n.writer");
	header.innerHTML = myjson[2].n_writer;
	header = document.getElementById("2tag");
	header.innerHTML = myjson[2].tag;
	header = document.getElementById("2a_d_s");
	header.innerHTML = myjson[2].ann_d_p;
	header = document.getElementById("2editore");
	header.innerHTML = myjson[2].editore;
	header = document.getElementById("2disponibile");
	header.innerHTML = myjson[2].disponibile;
	
		console.log(myjson[2])
	
	header = document.getElementById("3nome");
	header.innerHTML = myjson[3].name;
	header = document.getElementById("3n.writer");
	header.innerHTML = myjson[3].n_writer;
	header = document.getElementById("3tag");
	header.innerHTML = myjson[3].tag;
	header = document.getElementById("3a_d_s");
	header.innerHTML = myjson[3].ann_d_p;
	header = document.getElementById("3editore");
	header.innerHTML = myjson[3].editore;
	header = document.getElementById("3disponibile");
	header.innerHTML = myjson[3].disponibile;

	console.log(myjson[3])
}




function show_books()
{
	
	header = document.getElementById("10");
	header.innerHTML = "| Name: "+all_b[0].name+"<br>| TAG: "+all_b[0].tag+"<br>| Publishing house: "+ all_b[0].editore+"<br>| Availability: "+all_b[0].disponibile+"<br>| Writer name: "+all_b[0].n_writer+"<br>| Year of publication: "+all_b[0].ann_d_p;
	header = document.getElementById("11");
	header.innerHTML = "| Name: "+all_b[1].name+"<br>| TAG: "+all_b[1].tag+"<br>| Publishing house: "+ all_b[1].editore+"<br>| Availability: "+all_b[1].disponibile+"<br>| Writer name: "+all_b[1].n_writer+"<br>| Year of publication: "+all_b[1].ann_d_p;
	header = document.getElementById("12");
	header.innerHTML = "| Name: "+all_b[2].name+"<br>| TAG: "+all_b[2].tag+"<br>| Publishing house: "+ all_b[2].editore+"<br>| Availability: "+all_b[2].disponibile+"<br>| Writer name: "+all_b[2].n_writer+"<br>| Year of publication: "+all_b[2].ann_d_p;
	header = document.getElementById("13");
	header.innerHTML = "| Name: "+all_b[3].name+"<br>| TAG: "+all_b[3].tag+"<br>| Publishing house: "+ all_b[3].editore+"<br>| Availability: "+all_b[3].disponibile+"<br>| Writer name: "+all_b[3].n_writer+"<br>| Year of publication: "+all_b[3].ann_d_p;
	header = document.getElementById("14");
	header.innerHTML = "| Name: "+all_b[4].name+"<br>| TAG: "+all_b[4].tag+"<br>| Publishing house: "+ all_b[4].editore+"<br>| Availability: "+all_b[4].disponibile+"<br>| Writer name: "+all_b[4].n_writer+"<br>| Year of publication: "+all_b[4].ann_d_p;
	header = document.getElementById("15");
	header.innerHTML = "| Name: "+all_b[5].name+"<br>| TAG: "+all_b[5].tag+"<br>| Publishing house: "+ all_b[5].editore+"<br>| Availability: "+all_b[5].disponibile+"<br>| Writer name: "+all_b[5].n_writer+"<br>| Year of publication: "+all_b[5].ann_d_p;
	header = document.getElementById("16");
	header.innerHTML = "| Name: "+all_b[6].name+"<br>| TAG: "+all_b[6].tag+"<br>| Publishing house: "+ all_b[6].editore+"<br>| Availability: "+all_b[6].disponibile+"<br>| Writer name: "+all_b[6].n_writer+"<br>| Year of publication: "+all_b[6].ann_d_p;
	header = document.getElementById("17");
	header.innerHTML = "| Name: "+all_b[7].name+"<br>| TAG: "+all_b[7].tag+"<br>| Publishing house: "+ all_b[7].editore+"<br>| Availability: "+all_b[7].disponibile+"<br>| Writer name: "+all_b[7].n_writer+"<br>| Year of publication: "+all_b[7].ann_d_p;
	header = document.getElementById("18");
	header.innerHTML = "| Name: "+all_b[8].name+"<br>| TAG: "+all_b[8].tag+"<br>| Publishing house: "+ all_b[8].editore+"<br>| Availability: "+all_b[8].disponibile+"<br>| Writer name: "+all_b[8].n_writer+"<br>| Year of publication: "+all_b[8].ann_d_p;
	header = document.getElementById("19");
	header.innerHTML = "| Name: "+all_b[9].name+"<br>| TAG: "+all_b[9].tag+"<br>| Publishing house: "+ all_b[9].editore+"<br>| Availability: "+all_b[9].disponibile+"<br>| Writer name: "+all_b[9].n_writer+"<br>| Year of publication: "+all_b[9].ann_d_p;
	header = document.getElementById("20");
	header.innerHTML = "| Name: "+all_b[10].name+"<br>| TAG: "+all_b[10].tag+"<br>| Publishing house: "+ all_b[10].editore+"<br>| Availability: "+all_b[10].disponibile+"<br>| Writer name: "+all_b[10].n_writer+"<br>| Year of publication: "+all_b[10].ann_d_p;
	header = document.getElementById("21");
	header.innerHTML = "| Name: "+all_b[11].name+"<br>| TAG: "+all_b[11].tag+"<br>| Publishing house: "+ all_b[11].editore+"<br>| Availability: "+all_b[11].disponibile+"<br>| Writer name: "+all_b[11].n_writer+"<br>| Year of publication: "+all_b[11].ann_d_p;
	header = document.getElementById("22");
	header.innerHTML = "| Name: "+all_b[12].name+"<br>| TAG: "+all_b[12].tag+"<br>| Publishing house: "+ all_b[12].editore+"<br>| Availability: "+all_b[12].disponibile+"<br>| Writer name: "+all_b[12].n_writer+"<br>| Year of publication: "+all_b[12].ann_d_p;
	header = document.getElementById("23");
	header.innerHTML = "| Name: "+all_b[13].name+"<br>| TAG: "+all_b[13].tag+"<br>| Publishing house: "+ all_b[13].editore+"<br>| Availability: "+all_b[13].disponibile+"<br>| Writer name: "+all_b[13].n_writer+"<br>| Year of publication: "+all_b[13].ann_d_p;
	header = document.getElementById("24");
	header.innerHTML = "| Name: "+all_b[14].name+"<br>| TAG: "+all_b[14].tag+"<br>| Publishing house: "+ all_b[14].editore+"<br>| Availability: "+all_b[14].disponibile+"<br>| Writer name: "+all_b[14].n_writer+"<br>| Year of publication: "+all_b[14].ann_d_p;
	header = document.getElementById("25");
	header.innerHTML = "| Name: "+all_b[15].name+"<br>| TAG: "+all_b[15].tag+"<br>| Publishing house: "+ all_b[15].editore+"<br>| Availability: "+all_b[15].disponibile+"<br>| Writer name: "+all_b[15].n_writer+"<br>| Year of publication: "+all_b[15].ann_d_p;
	header = document.getElementById("26");
	header.innerHTML = "| Name: "+all_b[16].name+"<br>| TAG: "+all_b[16].tag+"<br>| Publishing house: "+ all_b[16].editore+"<br>| Availability: "+all_b[16].disponibile+"<br>| Writer name: "+all_b[16].n_writer+"<br>| Year of publication: "+all_b[16].ann_d_p;
	header = document.getElementById("27");
	header.innerHTML = "| Name: "+all_b[17].name+"<br>| TAG: "+all_b[17].tag+"<br>| Publishing house: "+ all_b[17].editore+"<br>| Availability: "+all_b[17].disponibile+"<br>| Writer name: "+all_b[17].n_writer+"<br>| Year of publication: "+all_b[17].ann_d_p;
	header = document.getElementById("28");
	header.innerHTML = "| Name: "+all_b[18].name+"<br>| TAG: "+all_b[18].tag+"<br>| Publishing house: "+ all_b[18].editore+"<br>| Availability: "+all_b[18].disponibile+"<br>| Writer name: "+all_b[18].n_writer+"<br>| Year of publication: "+all_b[18].ann_d_p;
	header = document.getElementById("29");
	header.innerHTML = "| Name: "+all_b[19].name+"<br>| TAG: "+all_b[19].tag+"<br>| Publishing house: "+ all_b[19].editore+"<br>| Availability: "+all_b[19].disponibile+"<br>| Writer name: "+all_b[19].n_writer+"<br>| Year of publication: "+all_b[19].ann_d_p;
	header = document.getElementById("30");
	header.innerHTML = "| Name: "+all_b[20].name+"<br>| TAG: "+all_b[10].tag+"<br>| Publishing house: "+ all_b[20].editore+"<br>| Availability: "+all_b[20].disponibile+"<br>| Writer name: "+all_b[20].n_writer+"<br>| Year of publication: "+all_b[20].ann_d_p;	
	console.log(all_b)
	
	
}


function nxtpage() 
	{
		let j=10;
		for (let i=20; i < 41; i++)
		{
			if (all_b[i]==null)
			{
				header = document.getElementById(j);
				header.innerHTML = "Empty";
				j++;
			}
			else
			{
				header = document.getElementById(j);
				header.innerHTML = "| Name: "+all_b[i].name+"<br>| TAG: "+all_b[i].tag+"<br>| Publishing house: "+ all_b[i].editore+"<br>| Availability: "+all_b[i].disponibile+"<br>| Writer name: "+all_b[i].n_writer+"<br>| Year of publication: "+all_b[i].ann_d_p;
				j++;
			}
		}
	};
