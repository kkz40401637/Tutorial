$(function(){
		var fr=$('<div/>');
		fr.append($('<div/>',{text:'Brazil'}));
		fr.append($('<img/>',{src:'br.gif'}));
		$('body').append(fr);

		var fr=$('<div/>');
		fr.append($('<div/>',{text:'France'}));
		fr.append($('<img/>',{src:'fr.gif'}));
		$('body').append(fr);


		var fr=$('<div/>');
		fr.append($('<div/>',{text:'Greece'}));
		fr.append($('<img/>',{src:'gr.gif'}));
		$('body').append(fr);


		$('img').css('border','solid 3px gray');
		$('img').css('width',200);
		$('div div').css('text-align','center');
		$('body').css('font-family','arial');
		$('body').css('font-size','x-large');

var clist=[
	["br","Brazil"],
	["fr","France"],
	["gr","Greece"],
	["za","South Africe"]
 ];
 $(function(){
 	createOne();
 })
 function createOne(){
 	var i=Math.floor(clist.length*Math.random());
 	var code = clist[i][0];
 	var name = clist[i][1];
 	var qu=$('<div id="qu"/>');
 	qu.append($('<div/>',{text:name,id:'ans'}));
 	qu.append($('<img/>',{src:code+'.gif'}));
 	$('body').append(qu);


 	qu.append($('<div/>',{text:name,id:'ans'}).hide());
 	qu.append($('<input/>',{id:'response'}));
 	$('img').css('border','solid 3px gray');
	$('img').css('width',200);

 	$('#response').keyup(function(){
 		if($('#response').val()==$('#ans').text()){
 			alert("Well Done");
 		}
 	})
 }
	});


