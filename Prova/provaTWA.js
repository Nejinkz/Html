function start(){
	var mainElement = document.body;

	var section = document.createElement('section');
	section.setAttribute('id', 'secaoPrincipal');
	section.setAttribute('class', 'principal');
	mainElement.appendChild(section);

	var header = document.createElement('section');
	header.setAttribute('id', 'secaoCabecalho');
	header.setAttribute('class', 'cabecalho');
	section.appendChild(header);

	var logo = document.createElement('img');
	logo.setAttribute('id', 'imgINSS');
	logo.setAttribute('src', 'imagens/logo_inss.png');
	header.appendChild(logo);

	var title = document.createElement('p');
	title.setAttribute('id', 'pCabecalho');
	title.setAttribute('class', 'paragrafo');
	var text = document.createTextNode('Calcular INSS');
	title.appendChild(text);
	header.appendChild(title);	

	var menu = document.createElement('section');
	menu.setAttribute('id', 'secaoMenu');
	menu.setAttribute('class', 'menu');
	section.appendChild(menu);

	var button = document.createElement('button');
	button.setAttribute('id', 'botaoInfo');
	button.setAttribute('class', 'botao');
	button.setAttribute('onClick', 'informacoes()');
	var text = document.createTextNode('Informações');
	button.appendChild(text);	
	menu.appendChild(button);

	var button = document.createElement('button');
	button.setAttribute('id', 'botaoCalcular');
	button.setAttribute('class', 'botao');
	button.setAttribute('onClick', 'calcular()');
	var text = document.createTextNode('Calcular');
	button.appendChild(text);	
	menu.appendChild(button);	

	var button = document.createElement('button');
	button.setAttribute('id', 'botaoTabela');
	button.setAttribute('class', 'botao');
	button.setAttribute('onClick', 'tabela()');
	var text = document.createTextNode('Tabela');
	button.appendChild(text);	
	menu.appendChild(button);	

	var button = document.createElement('button');
	button.setAttribute('id', 'botaoPrevidencia');
	button.setAttribute('class', 'botao');
	button.setAttribute('onClick', 'previdenciaSocial()');
	var text = document.createTextNode('Previdência Social');
	button.appendChild(text);	
	menu.appendChild(button);
}

function calcular(){
	var sections = document.getElementsByClassName('sesao');
	for(var i = 0; i < sections.length; i++){
		sections[0].remove();
	}

	var elements = document.getElementsByClassName('botao');
	for(var i = 0; i < elements.length; i++){
		elements[i].classList.remove('fundoLaranja');
	}
	var button = document.getElementById('botaoCalcular');
	button.classList.add('fundoLaranja');

	var main = document.getElementById('secaoPrincipal');
	
	var calc = document.createElement('section');
	calc.setAttribute('id', 'secaoCalcular');
	calc.setAttribute('class', 'sesao calcular');
	main.appendChild(calc);

	var title = document.createElement('p');
	title.setAttribute('id', 'tituloSecao');
	var text = document.createTextNode('Calcular INSS - Empregado, Empregado Doméstico e Trabalhador Avulso');
	title.appendChild(text);
	calc.appendChild(title);	

	var label = document.createElement('label');
	label.setAttribute('id', 'labelSalario');
	var text = document.createTextNode('Salário Bruto');
	label.appendChild(text);
	calc.appendChild(label);

	var input = document.createElement('input');
	input.setAttribute('id', 'inputSalario');
	input.setAttribute('type', 'number');	
	input.setAttribute('placeholder', 'Digite seu salário bruto');	
	input.setAttribute('onChange', 'calculaINSS()');	
	calc.appendChild(input);			
}

function calculaINSS(){
	var sections = document.getElementsByClassName('resultado');
	for(var i = 0; i < sections.length; i++){
		sections[0].remove();
	}

	var main = document.getElementById('secaoCalcular');
	var value = document.getElementById('inputSalario').value;

	if(value <= 1556.94){
		var inss = (value*8)/100;
		var aliquota = 8;
	}else if(value >= 1556.95 && value <= 2594.92){
		var inss = (value*9)/100;
		var aliquota = 9;
	}else{
		var inss = (value*11)/100;
		var aliquota = 11;
	}

	var result = document.createElement('section');
	result.setAttribute('id', 'secaoResultado');
	result.setAttribute('class', 'resultado');
	main.appendChild(result);	

	var title = document.createElement('p');
	title.setAttribute('id', 'tituloSecao');
	var text = document.createTextNode('Resultado');
	title.appendChild(text);
	result.appendChild(title);		

	var title = document.createElement('p');
	title.setAttribute('id', 'pResultado');
	var text = document.createTextNode('O valor a ser pago é R$'+inss+' (alíquota de '+aliquota+')');
	title.setAttribute('class', 'texto');
	title.appendChild(text);
	result.appendChild(title);		
}

function informacoes(){
	var sections = document.getElementsByClassName('sesao');
	for(var i = 0; i < sections.length; i++){
		sections[0].remove();
	}

	var elements = document.getElementsByClassName('botao');
	for(var i = 0; i < elements.length; i++){
		elements[i].classList.remove('fundoLaranja');
	}	
	var button = document.getElementById('botaoInfo');
	button.classList.add('fundoLaranja');

	var main = document.getElementById('secaoPrincipal');
	
	var info = document.createElement('section');
	info.setAttribute('id', 'secaoInfo');
	info.setAttribute('class', 'sesao');
	main.appendChild(info);	

	var title = document.createElement('p');
	title.setAttribute('id', 'tituloSecao');
	var text = document.createTextNode('O que é INSS e para que serve?');
	title.appendChild(text);
	info.appendChild(title);

	var alltext = document.createElement('p');
	alltext.setAttribute('id', 'p1SecaoPrincipal');
	alltext.setAttribute('class', 'texto');
	var text = document.createTextNode('A sigla INSS significa Instituto Nacional do Seguro Social (órgão do Ministério da Previdência Social, ligado diretamente ao Governo) e é responsável pelos pagamentos das aposentadorias e demais benefícios dos trabalhadores brasileiros que contribuem com a Previdência Social (seguro que garante uma aposentadoria ao contribuinte quando ele pára de trabalhar), com exceção dos servidores públicos.');
	alltext.appendChild(text);
	info.appendChild(alltext);

	var alltext = document.createElement('p');
	alltext.setAttribute('id', 'p1SecaoPrincipal');
	alltext.setAttribute('class', 'texto');
	var text = document.createTextNode('A principal vantagem da contribuição para o INSS é garantir o recebimento de um benefício mensal durante a aposentadoria. Outra vantagem é que o trabalhador que contribui para a Previdência tem direito de receber auxílio-doença em caso de afastamento do serviço por motivo de saúde.');
	alltext.appendChild(text);
	info.appendChild(alltext);		
}

function tabela(){
	var sections = document.getElementsByClassName('sesao');
	for(var i = 0; i < sections.length; i++){
		sections[0].remove();
	}

	var elements = document.getElementsByClassName('botao');
	for(var i = 0; i < elements.length; i++){
		elements[i].classList.remove('fundoLaranja');
	}	
	var button = document.getElementById('botaoTabela');
	button.classList.add('fundoLaranja');

	var main = document.getElementById('secaoPrincipal');
	
	var table = document.createElement('section');
	table.setAttribute('id', 'secaoTabela');
	table.setAttribute('class', 'sesao');
	main.appendChild(table);	

	var title = document.createElement('p');
	title.setAttribute('id', 'tituloSecao');
	var text = document.createTextNode('Tabelas INSS 2017');
	title.appendChild(text);
	table.appendChild(title);	

	var img = document.createElement('img');
	img.setAttribute('id', 'imgTabela1');
	img.setAttribute('src', 'imagens/tabela1.png');
	table.appendChild(img);		

	var img = document.createElement('img');
	img.setAttribute('id', 'imgTabela2');
	img.setAttribute('src', 'imagens/tabela2.png');
	table.appendChild(img);		
}

function previdenciaSocial(){
	var sections = document.getElementsByClassName('sesao');
	for(var i = 0; i < sections.length; i++){
		sections[0].remove();
	}

	var elements = document.getElementsByClassName('botao');
	for(var i = 0; i < elements.length; i++){
		elements[i].classList.remove('fundoLaranja');
	}	
	var button = document.getElementById('botaoPrevidencia');
	button.classList.add('fundoLaranja');

	var main = document.getElementById('secaoPrincipal');
	
	var prev = document.createElement('section');
	prev.setAttribute('id', 'secaoPrevidencia');
	prev.setAttribute('class', 'sesao');
	main.appendChild(prev);	

	var frame = document.createElement('iframe');
	frame.setAttribute('id', 'frame');
	frame.setAttribute('width', '100%');
	frame.setAttribute('height', '480px');
	frame.setAttribute('src', 'http://www.previdencia.gov.br/');
	prev.appendChild(frame);		
}