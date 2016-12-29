	function ejemplo1(id) {
		var x = document.getElementById(id);
		if (x.className.indexOf("w3-show") == -1) {// busca el numero de veces que aparece w3-show en class. Si no lo encuentra "-1",
			x.className += " w3-show";// lo añade. Si lo encuentra, lo borra.
		} else { 
			x.classList.remove('w3-show');
		}
}
