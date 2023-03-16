function validar()
		{
			var usuario = document.getElementById("usuario").value;
      		var pass = document.getElementById("pass").value;		

			if(usuario == "ivan" && pass == "1234")
			{
				window.location.replace('https://example.com');
				return false;

			}
			else
			{
				alert("Verifique sus credenciales");
				return false;
			}
			
		}