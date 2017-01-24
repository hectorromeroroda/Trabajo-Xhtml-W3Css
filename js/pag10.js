	var contador=0;
	
	function siguiente() {
			contador++;
			switch (contador){
				
				case 1:
					document.getElementById('imagen').src = "imagenes/hielo1.jpg";
					document.getElementById('atras').disabled= false;
					breack;
				case 2:
					document.getElementById('imagen').src = "imagenes/hielo2.jpg";
					breack;
				case 3:
					document.getElementById('imagen').src = "imagenes/hielo3.jpg";
					document.getElementById('alante').disabled= true;
					breack;
				
				
			}				
	}
	function atras() {
		contador--;
			switch (contador){
				case 0:
					document.getElementById('imagen').src = "imagenes/hielo.jpg";
					document.getElementById('atras').disabled= true;
					breack;
				case 1:
					document.getElementById('imagen').src = "imagenes/hielo1.jpg";
					breack;
				case 2:
					document.getElementById('imagen').src = "imagenes/hielo2.jpg";
					document.getElementById('alante').disabled= false;
					breack;
				
				
				
			}				
	}

