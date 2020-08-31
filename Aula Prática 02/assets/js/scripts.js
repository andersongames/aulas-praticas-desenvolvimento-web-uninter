$(document).ready(function(e){
	e.preventDefault;
	e.stopPropagation;
	var arrayRadio = ['0', '1', '2', '3']

	var arrayTexto = ['<h1>Aprender HTML é muito bacana</h1>', '<html><head></head><body></body></html>', '<a href="www.google.com" target="_blank">Google</a>', '<ul><li></li><li></li><li></li><li></li><li></li></ul>', '<table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr></tbody></table>', '<form><label>Seu nome:</label><input type="text" id="nome" name="nome"><label>Sua idade:</label><input type="text"  id="idade" name="idade"><input type="radio" name="sexo" value="masc">Homem<input type="radio" name="sexo" value="fem">Mulher<input type="submit" val="Enviar"></form>', '<html><head><title>Minha página HTML</title></head><body><h1>Olá mundo, em HTML</h1><p>Essa é a minha primeira página em HTML</p><table><thead><tr><th>HTML</th><th>CSS</th><th>JS</th><th>PHP</th></tr></thead><tbody><tr><td>Construir a página</td><td>Formatar o documento</td><td>Criar animações e gerar dinamicidade</td><td>Ligações com servidores/banco de dados e gerar dinamicidade</td></tr></tbody></table><ul><li>HyperText Markup Language</li><li>Cascading Style Sheets</li><li>JavaScript</li><li>Hypertext Preprocessor</li></ul><img src="https://familysearch.org/learn/wiki/en/images/0/04/HTML.jpg" /></body></html>',
	'.teste{float:left;}', '.teste{display:block;}', '<link rel="stylesheet" href="estilo.css" />', '.titulo, .textoTitulo{ margin:10px; border-left:1px solid #FF0000; display:block; font-size:15px;}',
	'<script src="scripts.js"></script>', '$(document).ready(function(){ });', '$("button").click(function(){$("div).hide();});', '$("p").html("jQuery é muito legal");', '$("span").after("Estou gostando de aprender jQuery");', '$("h2").before("Estou gostando de aprender jQuery");', '$("p").css("margin", "10px 20px");', '$(".teste").height("200px");',
	'<?php $teste = "Olá mundo em PHP"; echo $teste; ?>', 'mysql_connect("localhost:8080", "user", "user123");', '<?php $conexao = mysql_connect("localhost:8080", "user", "user123") or die("Não foi possível conectar"); ?>', '<?php $conexao = mysql_connect("localhost:8080", "user", "user123") or die("Não foi possível conectar"); mysql_select_db("banco_teste") or die ("Não foi possível selecionar o banco"); ?>', '<?php class cliente{ public $nome; private $rg; private $cpf; private $endereco; } ?>',
	'<p><u><b>Consulte nossos preços!</b></u></p>', '<meta charset="UTF-8" />', '<!DOCTYPE html>', '<figure><img src="imagem.jpg" alt="Minha imagem" /><figcaption>Esta é a legenda da minha foto</figcaption></figure>',
	'<?php function teste($testando = "Exercício 1 - variável em PHP"){ echo $testando; } ?>', '$(document).ready(function(){ $(".teste").append("Exercício 7 - função com jQuery"); });', '<!DOCTYPE html><html><head><meta charset="UTF-8" /><link rel="stylesheet" href="estilo.css" /><script src="scripts.js"></script></head><body></body></html>', 'span, .texto{ margin:10px 5px 15px; border-left:1px dotted #FFFF00; font-size:14px; display:inline; overflow:hidden;}', '<section><header><h1>Bem-vindo à página de avaliação</h1></header><p>Realize os exercícios abaixo e boa sorte!</p></section>',
	'<html><head></head><body><table><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></table></body></html>', '<!DOCTYPE html><html><head><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script></head><body><div class="blue"></div><script>$(document).ready(function(){$(".blue").after("<p>After Blue</p>");});</script></body></html>','<!DOCTYPE html><html><head></head><body><?php echo "<span>Olá mundo, agora em PHP!</span>"; ?></body></html>', '<!DOCTYPE html><html><head></head><body><form method="post" action="recebeDados.php"><label>Seu nome:</label><input type="text" id="nome" name="nome"><label>Sua idade:</label><input type="text" id="idade" name="idade"><input type="submit" value="Enviar"></form></body></html>', '<!DOCTYPE html><html><head><meta charset="UTF-8" /><link rel="stylesheet" href="estilo.css" /></head><body></body></html>','<!DOCTYPE html><html><head><style>.italic{font-size:14px;font-style:italic;font-weight:600;}</style></head><body></body></html>','#content .dashboard{font-size:16px;color:#3c3c3c;overflow:hidden;display:block;float:left;}','ul.lista li{display:inline;text-decoration:underline;font-size:12px;}','var cidade = "Curitiba, PR";var split = cidade.split(",");var estado = split[1];','$(window).resize(function(){var largura = $(window).width();console.log(largura);)};','$meses = array(1 => "Janeiro", 2 => "Fevereiro", 3 => "Março", 4 => "Abril", 5 => "Maio", 6 => "Junho", 7 => "Julho", 8 => "Agosto", 9 => "Setembro", 10 => "Outubro", 11 => "Novembro", 12 => "Dezembro");',
	'<html><head><title>Doce e Dança</title></head><body></body></html>', '<ul><li><a href="home.html">Home</a></li><li><a href="receitas.html">Receitas</a></li><li><a href="contato.html">Contato</a></li></ul>', '<table><thead><tr><th>Dia da semana</th><th>Bolo ofertado</th><th>Preço</th></tr></thead><tbody><tr><td>Segunda-feira</td><td>Bolo de morango</td><td>R$ 5/kg</td></tr><tr><td>Terça-feira</td><td>Bolo de milho</td><td>R$ 3/kg</td></tr><tr><td>Quarta-feira</td><td>Bolo de chocolate</td><td>R$ 4/kg</td></tr><tr><td>Quinta-feira</td><td>Bolo de cenoura</td><td>R$ 2,50/kg</td></tr><tr><td>Sexta-feira</td><td>Bolo de abacaxi</td><td>R$ 3/kg</td></tr></tbody></table>', '<h2>Sobre a Doce e Dança</h2><p>A Doce e Dança está no mercado há mais de uma década, trazendo inovações e qualidade em seus produtos. Em cada etapa do processo de criação, preparo e venda de nossos doces, pensamos sempre na satisfação e prazer do cliente trazendo a última palavra do mundo dos doces.</p>', '<form method="post" action="script.php"><input type="text" placeholder="Nome"><br /><input type="text" placeholder="Telefone"><br /><input type="text" placeholder="E-mail"><br /><textarea type="text" placeholder="Mensagem"></textarea><br /><input type="submit" value="Enviar"></form>',
	'body{font-family:Verdana;font-size:16px;color:#000;}', '.menu{display: block;}.menu li{display:inline;float:left;}', '.destaque, .titulo{color:#337ab7;font-weight:bold;}', '.tabela{width:100%;}.borda-tabela{border: 1px solid #ccc;}','#conteudo{padding:10px;margin-bottom:20px;border-bottom:1px solid #ccc;min-height:30%;}','<html><head><title>Doce e Dança</title><link rel="stylesheet" href="estilo.css" /></head><body></body></html>', '#conteudo p{font-size:14px;color:#4c4c4c;}', '#conteudo img{min-width:40%;max-width:80%;}', '1420px',
	'<script src="jquery.js"></script>', '<html><head><title>Doce e Dança</title><link rel="stylesheet" href="estilo.css" /><script src="jquery.js"></script><script src="scripts.js"></script></head><body></body></html>', '<html><head><title>Doce e Dança</title><link rel="stylesheet" href="css/estilo.css" /><script src="js/jquery.js"></script><script src="js/scripts.js"></script></head><body><script>$(document).ready(function(){});</script></body></html>', 'var teste = "Olá mundo, no console do navegador";$(document).ready(function(){console.log(teste);});', '$(document).ready(function(){$("#header).append("Seja bem vindo");});', '$("#enviaForm").click(function(){alert("Sua mensagem foi enviada com sucesso, obrigado!");});', '$(".imgReceita").click(function(){$(".descricaoReceita").slideToggle();});','$(".imgReceita").click(function(){$(".descricaoReceita").slideToggle();$(this).css("border","1px solid #ffff00");});',
	'<p>O <em>Bolo de Cenoura</em> está em promoção apenas nas <strong>quintas-feiras</strong></p>', '<!DOCTYPE html><html><head><title>Doce e Dança</title><link rel="stylesheet" href="estilo.css" /><script src="jquery.js"></script><script src="scripts.js"></script></head><body></body></html>', '<figure><img src="boloMorango.jpg" /><figcaption>Bolo de Morango</figcaption></figure>', '<p>A Doce e Dança está no mercado há mais de uma década, trazendo inovações e qualidade em seus produtos.</p>', '<ul><li>1/2 xícara (chá) de óleo</li><li>3 cenouras médias raladas</li><li>4 ovos</li><li>2 xícaras (chá) de açúcar</li><li>2 e 1/2 xícaras (chá) de farinha de trigo</li><li>1 colher (sopa) de fermento em pó Dr. Oetker</li></ul>', '<!DOCTYPE html><html><head><title>Doce e Dança</title><link rel="stylesheet" href="estilo.css" /><script src="jquery.js"></script><script src="scripts.js"></script></head><body><main></main></body></html>', '<p>A Doce e Dança está no mercado de doces e confeitos há mais de uma década, criando e inovando na criação e composição de doces.</p><p>Em cada etapa de nossos processos, desde a fabricação à venda, pensamos sempre na satisfação e no prazer de nossos clientes, trazendo a última palavra do mundo dos doces!</p>', '<main><figure><img class="imgReceita" src="boloMorango.jpg" /><figcaption>Bolo de Morango</figcaption></figure><p class="descricaoReceita">O Bolo de Morango da Doce e Dança é feito com morangos cultivados no Ceará, no município de São Benedito. Não deixe de aproveitar essa delícia na promoção de <em>segunda-feira</em>!</p></main>',
	'<html><head><title>Doce e Dança</title><link rel="stylesheet" href="estilo.css" /><script src="jquery.js"></script><script src="scripts.js"></script></head><body><? php ?></body></html>', '<html><head><title>Doce e Dança</title><link rel="stylesheet" href="estilo.css" /><script src="jquery.js"></script><script src="scripts.js"></script></head><body><? php echo "<h1>Olá mundo, em PHP com echo</h1>"; ?></body></html>', '<html><head><title>Doce e Dança</title><link rel="stylesheet" href="estilo.css" /><script src="jquery.js"></script><script src="scripts.js"></script></head><body><? php print "<h6>Olá mundo, em PHP com print</h6>"; ?></body></html>', '$bolos = array(1 => "Bolo de morango", 2 => "Bolo de milho", 3 => "Bolo de chocolate", 4 => "Bolo de cenoura", 5 => "Bolo de abacaxi");', '<?php public class bolo{public $nome;public $sabor;private $ingredientes;public $dia_promocao;} ?>', '<?php require_once "script.php";    $bolo = new Bolo();  echo $bolo->nome;  echo $bolo->sabor;  echo $bolo->dia_promocao;?>', '<?php function teste($bolo = "Bolo de chocolate"){ echo $bolo; } ?>', 'mysql_connect("localhost:8080", "admin", "admin123");', '<?php $conexao = mysql_connect("localhost:8080", "admin", "admin123"); or die("Não foi possível conectar"); ?>', '<?php $conexao = mysql_connect("localhost:8080", "admin", "admin123"); or die("Não foi possível conectar"); mysql_select_db("banco_bolo") or die ("Não foi possível selecionar o banco"); ?>'];

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