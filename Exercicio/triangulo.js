//create function on load page
function inicio(){
	//Get body
	var mainElement = document.body;

	//create div
	var element = document.createElement('div');
	//insert div in body
	mainElement.appendChild(element);

	//create input Lado A
	var inputA = document.createElement('input');
	//set attribute type in input
	inputA.setAttribute('type', 'number');
	//set attribute ID in input
	inputA.setAttribute('id', 'inputA');

	//create label Lado A
	var labelA = document.createElement('label');
	//set text label
	var text = document.createTextNode('Lado A');

	//insert label in div
	element.appendChild(labelA);
	//insert text in label
	labelA.appendChild(text);
	//insert input in div
	element.appendChild(inputA);

	//create input Lado B
	var inputB = document.createElement('input');
	//set attribute type in input
	inputB.setAttribute('type', 'number');
	//set attribute ID in input
	inputB.setAttribute('id', 'inputB');

	//create label Lado B
	var labelB = document.createElement('label');
	//set text label
	var text = document.createTextNode('Lado B');

	//insert label in div
	element.appendChild(labelB);
	//insert text in label
	labelB.appendChild(text);
	//insert input in div
	element.appendChild(inputB);	

	//create input Lado C
	var inputC = document.createElement('input');
	//set attribute type in input
	inputC.setAttribute('type', 'number');
	//set attribute ID in input
	inputC.setAttribute('id', 'inputC');

	//create label Lado C
	var labelC = document.createElement('label');
	//set text label
	var text = document.createTextNode('Lado C');

	//insert label in div
	element.appendChild(labelC);
	//insert text in label
	labelC.appendChild(text);
	//insert input in div
	element.appendChild(inputC);

	//create button
	var button = document.createElement('button');
	button.setAttribute('onClick', 'triangleType()');
	//set text button
	var text = document.createTextNode('Calcular');
	//insert button in div
	element.appendChild(button);
	//insert text in button
	button.appendChild(text);
}

//create function to triangle type
function triangleType(){
	//get value input by ID equal inputA
	var inputA = document.getElementById('inputA').value;
	//get value input by ID equal inputB
	var inputB = document.getElementById('inputB').value;
	//get value input by ID equal inputC
	var inputC = document.getElementById('inputC').value;
	//check values in input
	if(inputA != '' && inputB != '' && inputC != ''){
		//check all values are equal
		if(inputA === inputB && inputA === inputC){
			//return triangle type
			alert('Triângulo escaleno');
		//check all values are different
		}else if(inputA != inputB && inputA != inputC){
			//return triangle type
			alert('Triângulo equilátero');
		//if two values equal
		}else{
			//return triangle type
			alert('Triângulo isósceles');
		}
	}else{
		//return if not value exist in input
		alert('Preencha todos os campos');
	}
}