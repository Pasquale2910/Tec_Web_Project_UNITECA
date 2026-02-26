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



function add_book()
{
	
	var nome,n_writer,tag,ann_d_p,editore,disponibile;
	nome=document.getElementById("0").value;
	n_writer=document.getElementById("1").value;
	tag=document.getElementById("2").value;
	ann_d_p=document.getElementById("3").value;
	editore=document.getElementById("4").value;
	disponibile=document.getElementById("5").value;
	if(nome=="")
		alert("manca il nome");
	else
		if(n_writer=="")
			alert("manca il nome dello scrittore");
		else
			if(tag=="")
				alert("manca il tag");
			else
				if(ann_d_p==0)
					alert("manca l'anno di produzione");
				else
					if(editore=="")
						alert("manca il nome dell'editore");
					else
						if(disponibile==0)
							alert("manca la disponbilità");
						else
						{
							console.log(nome,n_writer,tag,ann_d_p,editore,disponibile)
							alert("Libro aggiunto correttamente");
						}
}


function show_books()
{
	
	header = document.getElementById("10");
	header.innerHTML = "|ID book: "+all_b[0]._id+"<br>| Name: "+all_b[0].name+"<br>| TAG: "+all_b[0].tag+"<br>| Publishing house: "+ all_b[0].editore+"<br>| Availability: "+all_b[0].disponibile+"<br>| Writer name: "+all_b[0].n_writer+"<br>| Year of publication: "+all_b[0].ann_d_p;
	header = document.getElementById("11");
	header.innerHTML = "|ID book: "+all_b[1]._id+"<br>| Name: "+all_b[1].name+"<br>| TAG: "+all_b[1].tag+"<br>| Publishing house: "+ all_b[1].editore+"<br>| Availability: "+all_b[1].disponibile+"<br>| Writer name: "+all_b[1].n_writer+"<br>| Year of publication: "+all_b[1].ann_d_p;
	header = document.getElementById("12");
	header.innerHTML = "|ID book: "+all_b[2]._id+"<br>| Name: "+all_b[2].name+"<br>| TAG: "+all_b[2].tag+"<br>| Publishing house: "+ all_b[2].editore+"<br>| Availability: "+all_b[2].disponibile+"<br>| Writer name: "+all_b[2].n_writer+"<br>| Year of publication: "+all_b[2].ann_d_p;
	header = document.getElementById("13");
	header.innerHTML = "|ID book: "+all_b[3]._id+"<br>| Name: "+all_b[3].name+"<br>| TAG: "+all_b[3].tag+"<br>| Publishing house: "+ all_b[3].editore+"<br>| Availability: "+all_b[3].disponibile+"<br>| Writer name: "+all_b[3].n_writer+"<br>| Year of publication: "+all_b[3].ann_d_p;
	header = document.getElementById("14");
	header.innerHTML = "|ID book: "+all_b[4]._id+"<br>| Name: "+all_b[4].name+"<br>| TAG: "+all_b[4].tag+"<br>| Publishing house: "+ all_b[4].editore+"<br>| Availability: "+all_b[4].disponibile+"<br>| Writer name: "+all_b[4].n_writer+"<br>| Year of publication: "+all_b[4].ann_d_p;
	header = document.getElementById("15");
	header.innerHTML = "|ID book: "+all_b[5]._id+"<br>| Name: "+all_b[5].name+"<br>| TAG: "+all_b[5].tag+"<br>| Publishing house: "+ all_b[5].editore+"<br>| Availability: "+all_b[5].disponibile+"<br>| Writer name: "+all_b[5].n_writer+"<br>| Year of publication: "+all_b[5].ann_d_p;
	header = document.getElementById("16");
	header.innerHTML = "|ID book: "+all_b[6]._id+"<br>| Name: "+all_b[6].name+"<br>| TAG: "+all_b[6].tag+"<br>| Publishing house: "+ all_b[6].editore+"<br>| Availability: "+all_b[6].disponibile+"<br>| Writer name: "+all_b[6].n_writer+"<br>| Year of publication: "+all_b[6].ann_d_p;
	header = document.getElementById("17");
	header.innerHTML = "|ID book: "+all_b[7]._id+"<br>| Name: "+all_b[7].name+"<br>| TAG: "+all_b[7].tag+"<br>| Publishing house: "+ all_b[7].editore+"<br>| Availability: "+all_b[7].disponibile+"<br>| Writer name: "+all_b[7].n_writer+"<br>| Year of publication: "+all_b[7].ann_d_p;
	header = document.getElementById("18");
	header.innerHTML = "|ID book: "+all_b[8]._id+"<br>| Name: "+all_b[8].name+"<br>| TAG: "+all_b[8].tag+"<br>| Publishing house: "+ all_b[8].editore+"<br>| Availability: "+all_b[8].disponibile+"<br>| Writer name: "+all_b[8].n_writer+"<br>| Year of publication: "+all_b[8].ann_d_p;
	header = document.getElementById("19");
	header.innerHTML = "|ID book: "+all_b[9]._id+"<br>| Name: "+all_b[9].name+"<br>| TAG: "+all_b[9].tag+"<br>| Publishing house: "+ all_b[9].editore+"<br>| Availability: "+all_b[9].disponibile+"<br>| Writer name: "+all_b[9].n_writer+"<br>| Year of publication: "+all_b[9].ann_d_p;
	header = document.getElementById("20");
	header.innerHTML = "|ID book: "+all_b[10]._id+"<br>| Name: "+all_b[10].name+"<br>| TAG: "+all_b[10].tag+"<br>| Publishing house: "+ all_b[10].editore+"<br>| Availability: "+all_b[10].disponibile+"<br>| Writer name: "+all_b[10].n_writer+"<br>| Year of publication: "+all_b[10].ann_d_p;
	header = document.getElementById("21");
	header.innerHTML = "|ID book: "+all_b[11]._id+"<br>| Name: "+all_b[11].name+"<br>| TAG: "+all_b[11].tag+"<br>| Publishing house: "+ all_b[11].editore+"<br>| Availability: "+all_b[11].disponibile+"<br>| Writer name: "+all_b[11].n_writer+"<br>| Year of publication: "+all_b[11].ann_d_p;
	header = document.getElementById("22");
	header.innerHTML = "|ID book: "+all_b[12]._id+"<br>| Name: "+all_b[12].name+"<br>| TAG: "+all_b[12].tag+"<br>| Publishing house: "+ all_b[12].editore+"<br>| Availability: "+all_b[12].disponibile+"<br>| Writer name: "+all_b[12].n_writer+"<br>| Year of publication: "+all_b[12].ann_d_p;
	header = document.getElementById("23");
	header.innerHTML = "|ID book: "+all_b[13]._id+"<br>| Name: "+all_b[13].name+"<br>| TAG: "+all_b[13].tag+"<br>| Publishing house: "+ all_b[13].editore+"<br>| Availability: "+all_b[13].disponibile+"<br>| Writer name: "+all_b[13].n_writer+"<br>| Year of publication: "+all_b[13].ann_d_p;
	header = document.getElementById("24");
	header.innerHTML = "|ID book: "+all_b[14]._id+"<br>| Name: "+all_b[14].name+"<br>| TAG: "+all_b[14].tag+"<br>| Publishing house: "+ all_b[14].editore+"<br>| Availability: "+all_b[14].disponibile+"<br>| Writer name: "+all_b[14].n_writer+"<br>| Year of publication: "+all_b[14].ann_d_p;
	header = document.getElementById("25");
	header.innerHTML = "|ID book: "+all_b[15]._id+"<br>| Name: "+all_b[15].name+"<br>| TAG: "+all_b[15].tag+"<br>| Publishing house: "+ all_b[15].editore+"<br>| Availability: "+all_b[15].disponibile+"<br>| Writer name: "+all_b[15].n_writer+"<br>| Year of publication: "+all_b[15].ann_d_p;
	header = document.getElementById("26");
	header.innerHTML = "|ID book: "+all_b[16]._id+"<br>| Name: "+all_b[16].name+"<br>| TAG: "+all_b[16].tag+"<br>| Publishing house: "+ all_b[16].editore+"<br>| Availability: "+all_b[16].disponibile+"<br>| Writer name: "+all_b[16].n_writer+"<br>| Year of publication: "+all_b[16].ann_d_p;
	header = document.getElementById("27");
	header.innerHTML = "|ID book: "+all_b[17]._id+"<br>| Name: "+all_b[17].name+"<br>| TAG: "+all_b[17].tag+"<br>| Publishing house: "+ all_b[17].editore+"<br>| Availability: "+all_b[17].disponibile+"<br>| Writer name: "+all_b[17].n_writer+"<br>| Year of publication: "+all_b[17].ann_d_p;
	header = document.getElementById("28");
	header.innerHTML = "|ID book: "+all_b[18]._id+"<br>| Name: "+all_b[18].name+"<br>| TAG: "+all_b[18].tag+"<br>| Publishing house: "+ all_b[18].editore+"<br>| Availability: "+all_b[18].disponibile+"<br>| Writer name: "+all_b[18].n_writer+"<br>| Year of publication: "+all_b[18].ann_d_p;
	header = document.getElementById("29");
	header.innerHTML = "|ID book: "+all_b[19]._id+"<br>| Name: "+all_b[19].name+"<br>| TAG: "+all_b[19].tag+"<br>| Publishing house: "+ all_b[19].editore+"<br>| Availability: "+all_b[19].disponibile+"<br>| Writer name: "+all_b[19].n_writer+"<br>| Year of publication: "+all_b[19].ann_d_p;
	header = document.getElementById("30");
	header.innerHTML = "|ID book: "+all_b[20]._id+"<br>| Name: "+all_b[20].name+"<br>| TAG: "+all_b[10].tag+"<br>| Publishing house: "+ all_b[20].editore+"<br>| Availability: "+all_b[20].disponibile+"<br>| Writer name: "+all_b[20].n_writer+"<br>| Year of publication: "+all_b[20].ann_d_p;	
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
				header.innerHTML = "|ID book: "+all_b[i]._id+"<br>| Name: "+all_b[i].name+"<br>| TAG: "+all_b[i].tag+"<br>| Publishing house: "+ all_b[i].editore+"<br>| Availability: "+all_b[i].disponibile+"<br>| Writer name: "+all_b[i].n_writer+"<br>| Year of publication: "+all_b[i].ann_d_p;
				j++;
			}
		}
	};