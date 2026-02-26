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

function dispbook()
{
	header = document.getElementById("0");
	header.innerHTML = "ID User: "+cart[0].id_user +"<br>Email: "+cart[0].Email+"<br>loaned book: "+cart[0].loaned_book+"<br>Name: "+cart[0].name+"<br>Disponibile: "+cart[0].Disponibile;
	header = document.getElementById("1");
	header.innerHTML = "ID User: "+cart[1].id_user +"<br>Email: "+cart[1].Email+"<br>loaned book: "+cart[1].loaned_book+"<br>Name: "+cart[1].name+"<br>Disponibile: "+cart[1].Disponibile;
	header = document.getElementById("2");
	header.innerHTML = "ID User: "+cart[2].id_user +"<br>Email: "+cart[2].Email+"<br>loaned book: "+cart[2].loaned_book+"<br>Name: "+cart[2].name+"<br>Disponibile: "+cart[2].Disponibile;
	header = document.getElementById("3");
	header.innerHTML = "ID User: "+cart[3].id_user +"<br>Email: "+cart[3].Email+"<br>loaned book: "+cart[3].loaned_book+"<br>Name: "+cart[3].name+"<br>Disponibile: "+cart[3].Disponibile;
	header = document.getElementById("4");
	header.innerHTML = "ID User: "+cart[4].id_user +"<br>Email: "+cart[4].Email+"<br>loaned book: "+cart[4].loaned_book+"<br>Name: "+cart[4].name+"<br>Disponibile: "+cart[4].Disponibile;
	header = document.getElementById("5");
	header.innerHTML = "ID User: "+cart[5].id_user +"<br>Email: "+cart[5].Email+"<br>loaned book: "+cart[5].loaned_book+"<br>Name: "+cart[5].name+"<br>Disponibile: "+cart[5].Disponibile;
	header = document.getElementById("6");
	header.innerHTML = "ID User: "+cart[6].id_user +"<br>Email: "+cart[6].Email+"<br>loaned book: "+cart[6].loaned_book+"<br>Name: "+cart[6].name+"<br>Disponibile: "+cart[6].Disponibile;
	header = document.getElementById("7");
	header.innerHTML = "ID User: "+cart[7].id_user +"<br>Email: "+cart[7].Email+"<br>loaned book: "+cart[7].loaned_book+"<br>Name: "+cart[7].name+"<br>Disponibile: "+cart[7].Disponibile;
	header = document.getElementById("8");
	header.innerHTML = "ID User: "+cart[8].id_user +"<br>Email: "+cart[8].Email+"<br>loaned book: "+cart[8].loaned_book+"<br>Name: "+cart[8].name+"<br>Disponibile: "+cart[8].Disponibile;
	header = document.getElementById("9");
	header.innerHTML = "ID User: "+cart[9].id_user +"<br>Email: "+cart[9].Email+"<br>loaned book: "+cart[9].loaned_book+"<br>Name: "+cart[9].name+"<br>Disponibile: "+cart[9].Disponibile;

}


function nxtpage() 
	{
		let j=0;
		for (let i=10; i < 20; i++)
		{
			if (cart[i]==null)
			{
				header = document.getElementById(j);
				header.innerHTML = "Empty";
				j++;
			}
			else
			{
				header = document.getElementById(j);
				header.innerHTML = "ID User: "+cart[i].id_user +"<br>Email: "+cart[i].Email+"<br>loaned book: "+cart[i].loaned_book+"<br>Name: "+cart[i].name+"<br>Disponibile: "+cart[i].Disponibile;
				j++;
			}
		}
	};