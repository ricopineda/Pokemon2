

$(document).ready(function(){
	for (var i = 1; i < 152; i++){
		$('.left').append('<img src="http://pokeapi.co/media/img/' + i + '.png" class="poke_border" id=' + i + '>')
	}
	


		// $.get('http://pokeapi.co/api/v2/pokemon/' + i + '/', function(res){
		// 	console.log(res);
		// 	var x = (res.types[0].type.name);
		// 	var y = (res.height);
		// 	var z = (res.weight);

			// $('#' + i + '').click(function(){
			// 	$('.right').html('<h2>' + x + '</h2> <h2>' + y + '</h2> <h2>' + z + '</h2>');
			// })

			

});

$(document).on('click', '.poke_border', function(){
	var poke_num = $(this).attr("id");
	$.get('http://pokeapi.co/api/v2/pokemon/' + poke_num + '/', function(res){
		console.log(res);
		// console.log(res.types[0].type.name);

		var a = "";
        a += "<h4>Types</h4>";
        a += "<ul>"; 
        for(var i = 0; i < res.types.length; i++) {
        a += "<li>" + res.types[i].type.name + "</li>";
    }
    	a += "</ul>";

		// var x = (res.types[0].type.name);
		var y = (res.height);
		var z = (res.weight);
		var img = ('<img src="http://pokeapi.co/media/img/' + poke_num + '.png" class="poke_border">')
		// console.log(x);

		$('.right').html(img + '<h4>' + a + '</h4> <h2>' + y + '</h2> <h2>' + z + '</h2>');

	});
});


			// $(document).on('click', '.info', function(){
			// 	$(this).children().toggle();

			// (res.abilities[0].ability.name)
			// $('.right').html('<h2>' + x + '</h2>');
			// '<h2>' + x + '</h2> <h2>' + y + '</h2> <h2>' + z + '</h2>');