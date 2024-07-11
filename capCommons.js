function addText(idMain, idText){
	let ori = $(`#${idMain}`).val();
	const add = $(`#${idText}`).val();
	const tem = ori.split(':');
	if (add){
		return tem[0] + ": " + add;
	}else{
		return tem[0];
	}
}
function addSecondText(idMain, idText){
	const ori = $(`#${idMain}`).val();
	const title = $(`#${idText}`).prop('title');
	const text = $(`#${idText}`).val();
	const tem = ori.split(':');
	if (text){
		return tem[0] + ': ' + tem[1] + '   ' + title + ': ' + text;
	}else{
		return tem[0] + ':' + tem[1];
	}
}
function addCheckBox(idMain){
	const ori = $(`#${idMain}`).val();
	let adds = [];
	$(`input:checkbox[name=${idMain}]:checked`).each(function(){
		adds.push($(this).val());
	});
	const tem = ori.split(':');
	if (adds.length > 0){
		return tem[0] + ": " + adds.join('; ');
	}else{
		return tem[0];
	}
}
function addRadio(idMain){
	const ori = $(`#${idMain}`).val();
	const add = $(`input:radio[name=${idMain}]:checked`).val();
	const tem = ori.split(':');
	if (add){
		return tem[0] + ": " + add;
	}else{
		return tem[0];
	}
}
function checkBox(choiceName){
	let values = [];
	$(`input:checkbox[name=${choiceName}]:checked`).each(function(){
		values.push($(this).val());
	});
	let value = values.join('; ');
	return value;
}
function addCheckboxOrText(idMain, idText){
	if ($(`input:checkbox[name=${idMain}]:checked`).val() === undefined){
		return addText(idMain, idText);
	}else{
		return addCheckBox(idMain);
	}
}
function genReport(report, idMain, itemType, code='none'){
	const key = $(`#${idMain}`).prop('title');
	let value;
	switch(itemType){
		case 'checkbox':
			if (code != 'none'){
				eval(code);
			}
			value = checkBox(idMain);
			report += '\n\t' + key + ':___' + value;
			return report;
		case 'radio':
			if (code != 'none'){
				eval(code);
			}
			value = $(`input:radio[name=${idMain}]:checked`).val();
			report += '\n\t' + key + ':___' + value;
			return report;
		case 'sectionHeading':
			report += '\n' + key;
			return report;
		default:
			return report;
	}
}