function carregar() {
	var img = window.document.getElementById("image");
	var msg = window.document.getElementById("msg");
	var agora = new Date();

	var hora = agora.getHours();
	var minutos = agora.getMinutes();

	console.log(hora);

	msg.innerHTML = "agora são " + hora + ":" + minutos + ".";

	if (hora > 0 && hora < 12) {
		//manhã
		img.src = "/aulaDom//imagens/manha.jpg";
        msg.innerHTML = "agora são " + hora + ":" + minutos + " da manhã.";
	} else if (hora >= 12 && hora < 18) {
		//tarde
		img.src = "/aulaDom//imagens/tarde.jpg";
		document.body.style.background = "#e2cd9f";
        msg.innerHTML = "agora são " + hora + ":" + minutos + " da tarde.";
	} else {
		//noite
		img.src = "/aulaDom//imagens/noite.jpg";
		window.document.body.style.background = "red";
        msg.innerHTML = "agora são " + hora + ":" + minutos + " da noite.";
	}
}
