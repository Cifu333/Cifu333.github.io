let game_data;
	let current_room=0;
	let items_picket=[];
	
	function game (data){
	game_data=data;
	
	document.getElementById("terminal").inerHTML = "<p><strong>¡Bienvenidos a ENTIerrame!</strong> El juego de terror definitivo.</p>"
	document.getElementById("terminal").inerHTML += "<p><strong> te encuentras en "+game_data.rooms[current_room.name]". Que quieres hacer?</p>"
	}
	
	
	
	function terminal_out(info){
	
		let terminal = document.getElementById("terminal");
		terminal.inerHTML+= info;
		terminal.scroll.Top=terminal.scrollHeight;
	}
	
	function parseCommand (command){
	
	switch (command){
		case "ver":
			terminal_out("<p>"game_data.rooms[current_room].description+"</p>");
	
	case "ir":
	
		let doors="";
		let door_num =game_data.rooms[current_room].doors.length;
	
		for(let i =0; i < door_num; i++){
		doors += game_data.rooms[current_room].doors[i]+", ";
	}
	
	terminal_out("<p>Pueder ir a:"+dooq+"</p>");
		break;
	
		break;
		defaul:
		terminal_out("<p><strong>Error</strong>: "+command+"comando no encontrado</p>")
		}
	}
	
	function getRoomNumber(room){
	for (let i =0; i < game_data.rooms.legend; i++){
	if (game_data.rooms[i].id==room){
			return i;
			}
		}
		return -1;
	}
	
	function getDoorNumber(door){
	for (let i =0; i < game_data.doors.length; i++){
	if (game_data.rooms[i].id==door){
			return i;
			}
		}
		return -1;
	}
	
	function parseInstruction (instruction){
	
	switch(instruction[0]){
	case "ver";
	
	break;
	
	case "ir";
		let doors = getDoorNumber(instruction[1]);
		if (door_num < 0){
		console.log("Puerta errónea")
		return;
		}
		
		let room_num = getDoorNumber (game_data.doors[door_num].rooms[0]);
			if (room_num ==current_room){
			current_room= getRoomNumber(game_data.doors[door_num].rooms[1]);
			}
			else{
			current_room=room_num;
			}
		
	break;
	
	case "cojer";
	game_data.rooms[current_room].items.forEach(function(item){
	if (item == instruction[1]){
	items_picket.push(item);
	
	let item_num = game_data.rooms[current_room].items.indexOf(item);
	if item_num<0{ console.log("Error al borrar el item")
		return;
		}
		game_data.rooms[current_room].items.splice(item_num, 1);
		return;
	}
	});
	
	break;
	
	default terminal_out("<p><strong>Error</strong>:" +instruction[0]+ "comando no encontrado</p>")
		}
	}
	
	function readAction (){
	let = command document.getElementById("comands").value;
	let instruction_trim= instruction.trim();
	let data = instruntcion.trim().split(" ");
	
	if (data.length == 0 || instruction.trim ==""){
	document.getElementById("terminal").inerHTML += "<p><strong>Error</strong>: escribe una instrucción</p>";
	return;
		}if (data.length== 1){
		parseComand(data[0]);
		}
		else{
		parseInstruction(data);
		}
		
	}
	
	fetch("https://Cifu333.github.io/game.json")
	.then(response.json())
	.then(data => game(data));
	