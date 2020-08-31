$(document).ready(function(e){
	e.preventDefault;
	e.stopPropagation;
	var arrayRadio = ['0', '1', '2', '3']

	var arrayTexto = ['<h1>Aprender HTML é muito bacana</h1>', '<html><head></head><body></body></html>', '<a href="www.google.com" target="_blank">Google</a>', '<ul><li></li><li></li><li></li><li></li><li></li></ul>', '<table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr></tbody></table>', '<form><label>Seu nome:</label><input type="text" id="nome" name="nome"><label>Sua idade:</label><input type="text"  id="idade" name="idade"><input type="radio" name="sexo" value="masc">Homem<input type="radio" name="sexo" value="fem">Mulher<input type="submit" val="Enviar"></form>', '<html><head><title>Minha página HTML</title></head><body><h1>Olá mundo, em HTML</h1><p>Essa é a minha primeira página em HTML</p><table><thead><tr><th>HTML</th><th>CSS</th><th>JS</th><th>PHP</th></tr></thead><tbody><tr><td>Construir a página</td><td>Formatar o documento</td><td>Criar animações e gerar dinamicidade</td><td>Ligações com servidores/banco de dados e gerar dinamicidade</td></tr></tbody></table><ul><li>HyperText Markup Language</li><li>Cascading Style Sheets</li><li>JavaScript</li><li>Hypertext Preprocessor</li></ul><img src="https://familysearch.org/learn/wiki/en/images/0/04/HTML.jpg" /></body></html>',
	'.teste{float:left;}', '.teste{display:block;}', '<link rel="stylesheet" href="estilo.css" />', '.titulo .textoTitulo{ margin:10px; border-left:1px solid #FF0000; font-size:15px; display:block; }',
	'<script src="scripts.js"></script>', '$(document).ready(function(){ });', '$("button").click(function(){$("div).hide();});', '$("p").html("jQuery é muito legal");', '$("span").after("Estou gostando de aprender jQuery");', '$("h2").before("Estou gostando de aprender jQuery");', '$("p").css("margin", "10px 20px");', '$(".teste").height("200px");',
	'<?php $teste = "Olá mundo em PHP"; echo $teste; ?>', 'mysql_connect("localhost:8080", "user", "user123");', '<?php $conexao = mysql_connect("localhost:8080", "user", "user123") or die("Não foi possível conectar"); ?>', '<?php $conexao = mysql_connect("localhost:8080", "user", "user123") or die("Não foi possível conectar"); mysql_select_db("banco_teste") or die ("Não foi possível selecionar o banco"); ?>', '<?php class cliente{ public $nome; private $rg; private $cpf; private $endereco; } ?>',
	'<p><u><b>Consulte nossos preços!</b></u></p>', '<meta charset="UTF-8" />', '<!DOCTYPE html>', '<figure><img src="imagem.jpg" alt="Minha imagem" /><figcaption>Esta é a legenda da minha foto</figcaption></figure>',
	'<?php function teste($testando = "Exercício 6 - variável em PHP"){ echo $testando; } ?>', '$("document").ready(function(){ $(".teste").append("Exercício 7 - função com jQuery"); });', '<!DOCTYPE html><html><head><meta charset="UTF-8" /><link rel="stylesheet" href="estilo.css" /><script src="scripts.js"></scripts></head><body></body></html>', 'span, .texto{ margin:10px 5px 15px; border-left:1px dotted #FFFF00; font-size:14px; display:inline; overflow:hidden;}', '<section><header><h1>Bem-vindo à página de avaliação</h1></header><p>Realize os exercícios abaixo e boa sorte!</p></section>',
	'<!DOCTYPE html><html><head></head><body><table><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></table></body></html>', '<!DOCTYPE html><html><head><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script></head><body><div class="blue"></div><script>$(document).ready(function(){$(".blue").after("<p>After Blue</p>");});</script></body></html>','<!DOCTYPE html><html><head></head><body><?php echo "<span>Olá mundo, agora em PHP!</span>"; ?></body></html>', '<!DOCTYPE html><html><head></head><body><form method="post" action="recebeDados.php"><label>Seu nome:</label><input type="text" id="nome" name="nome"><label>Sua idade:</label><input type="text" id="idade" name="idade"><input type="submit" value="Enviar"></form></body></html>'];

	$(".btn").on("click",function(){
		var div = $(this).closest("div");
		var idExercicio = div.attr("data-idExercicio");
		var attr = div.attr("data-nameRadios");
		var inputRadioVal = div.find("input[name="+attr+"]:checked").val();
		var resposta = arrayRadio[idExercicio];
		var result = div.find(".resultado");
		result.removeClass("certaRespostaBG");
		result.removeClass("respostaErradaBG");
		result.removeClass("semRespostaBG");
		if(inputRadioVal == null || inputRadioVal == ""){
			result.show().addClass("semRespostaBG").html("<p>Selecione uma opção</p>");
		}else{
			if(inputRadioVal == resposta){
				result.show().addClass("certaRespostaBG").html("<p>Resposta Correta!</p>");
			}else{
				result.show().addClass("respostaErradaBG").html("<p>Resposta Incorreta!</p>");
			}
		}
	});

	$(".btnText").on("click", function(){
		var div = $(this).closest("div");
		var idExercicioTexto = div.attr("data-idExercicioTexto");
		var attr = div.attr("data-nameText");
		var texto = "";
		texto = div.find(".form-control").val();
		texto = texto.replace(/\s/g, "");
		var resposta = "";
		resposta = arrayTexto[idExercicioTexto];
		resposta = resposta.replace(/\s/g, "");
		var result = div.find(".resultado");
		result.removeClass("certaRespostaBG");
		result.removeClass("respostaErradaBG");
		result.removeClass("semRespostaBG");
		if(texto == "" || texto == null){
			result.show().addClass("semRespostaBG").html("<p>Preencha sua resposta</p>");
		}else{
			if(texto == resposta){
				result.show().addClass("certaRespostaBG").html("<p>Resposta Correta!</p>");
			}else{
				result.show().addClass("respostaErradaBG").html("<p>Resposta Incorreta!</p>");
			}
		}
	});

});