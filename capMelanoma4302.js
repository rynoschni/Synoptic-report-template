$(document).ready(function(){
	$("button").click(function(){
		let report = $("h3").html();
		report = genReport(report, 's0', 'sectionHeading');
		report = genReport(report, 's1', 'checkbox', `
			$('#s1_4').val(addText('s1_4', 's1_4_1'));
			$('#s1_5').val(addText('s1_5', 's1_5_1'));
			`);
		report = genReport(report, 's2', 'radio');
		report = genReport(report, 't0', 'sectionHeading');
		report = genReport(report, 't1', 'radio', `
			$('#t1_1').val(addText('t1_1', 't1_1_1'));
			$('#t1_2').val(addText('t1_2', 't1_2_1'));
			$('#t1_3').val(addText('t1_3', 't1_3_1'));
			$('#t1_4').val(addText('t1_4', 't1_4_1'));
			$('#t1_5').val(addText('t1_5', 't1_5_1'));
			$('#t1_6').val(addText('t1_6', 't1_6_1'));
			$('#t1_7').val(addText('t1_7', 't1_7_1'));
			$('#t1_8').val(addText('t1_8', 't1_8_1'));
			$('#t1_9').val(addText('t1_9', 't1_9_1'));
			$('#t1_10').val(addCheckboxOrText('t1_10', 't1_10_1'));
			$('#t1_11').val(addText('t1_11', 't1_11_1'));
			$('#t1_12').val(addCheckboxOrText('t1_12', 't1_12_1'));
			`);
		report = genReport(report, 't2', 'radio', `
			$('#t2_2').val(addText('t2_2', 't2_2_1'));
			`);
		report = genReport(report, 't3', 'radio')
		report = genReport(report, 't4', 'radio', `
			$('#t4_4').val(addRadio('t4_4'));
			$('#t4_12').val(addText('t4_12', 't4_12_1'));
			`);
		report = genReport(report, 't5', 'radio', `
			$('#t5_1').val(addText('t5_1', 't5_1_1'));
			$('#t5_2').val(addText('t5_2', 't5_2_1'));
			$('#t5_2').val(addSecondText('t5_2', 't5_2_2'));
			$('#t5_3').val(addText('t5_3', 't5_3_1'));
			`);
		report = genReport(report, 't6', 'radio', `
			$('#t6_3').val(addText('t6_3', 't6_3_1'));
			`);
		report = genReport(report, 't7', 'radio', `
			`);
		report = genReport(report, 't8', 'radio', `
			$('#t8_2').val(addText('t8_2', 't8_2_1'));
			`);
		report = genReport(report, 't9', 'radio', `
			$('#t9_3').val(addText('t9_3', 't9_3_1'));
			`);
		report = genReport(report, 't10', 'radio', `
			$('#t10_3').val(addText('t10_3', 't10_3_1'));
			`);
		report = genReport(report, 't11', 'radio', `
			$('#t11_3').val(addText('t11_3', 't11_3_1'));
			`);
		report = genReport(report, 'm0', 'sectionHeading');
		report = genReport(report, 'm1', 'radio', `
			$('#m1_3').val(addText('m1_3', 'm1_3_1'));
			$('#m1_4').val(addText('m1_4', 'm1_4_1'));
			`);
		report = genReport(report, 'm2', 'radio', `
			$('#m2_4').val(addText('m2_4', 'm2_4_1'));
			$('#m2_5').val(addText('m2_5', 'm2_5_1'));
			`);
		report = genReport(report, 'n0', 'sectionHeading');
		report = genReport(report, 'n1', 'radio', `
			$('#n1_2_3').val(addText('n1_2_3', 'n1_2_3_1'));
			$('#n1_2_4').val(addText('n1_2_4', 'n1_2_4_1'));
			$('#n1_2').val(addRadio('n1_2'));
			`);
		if ($('#n1_2_2').prop('checked')){
			report = genReport(report, 'n2', 'radio', `
				$('#n2_1').val(addText('n2_1', 'n2_1_1'));
				$('#n2_2').val(addText('n2_2', 'n2_2_1'));
				$('#n2_3').val(addText('n2_3', 'n2_3_1'));
				$('#n2_4').val(addText('n2_4', 'n2_4_1'));
				`);			
			report = genReport(report, 'n3', 'radio', `
				$('#n3_2').val(addText('n3_2', 'n3_2_1'));
				$('#n3_3').val(addText('n3_3', 'n3_3_1'));
				$('#n3_4').val(addText('n3_4', 'n3_4_1'));
				$('#n3_5').val(addText('n3_5', 'n3_5_1'));
				`);			
			report = genReport(report, 'n4', 'radio', `
				$('#n4_1').val(addText('n4_1', 'n4_1_1'));
				$('#n4_2').val(addText('n4_2', 'n4_2_1'));
				$('#n4_3').val(addText('n4_3', 'n4_3_1'));
				$('#n4_4').val(addText('n4_4', 'n4_4_1'));
				$('#n4_5').val(addText('n4_5', 'n4_5_1'));
				$('#n4_6').val(addText('n4_6', 'n4_6_1'));
				`);			
			report = genReport(report, 'n5', 'radio', `
				$('#n5_3').val(addText('n5_3', 'n5_3_1'));
				`);			
			report = genReport(report, 'n6', 'radio', `
				$('#n6_3').val(addText('n6_3', 'n6_3_1'));
				$('#n6_4').val(addText('n6_4', 'n6_4_1'));
				`);			
		}
		if ($('#n1_2').prop('checked')){
			report = genReport(report, 'n7', 'radio', `
			$('#n7_1').val(addText('n7_1', 'n7_1_1'));
			$('#n7_2').val(addText('n7_2', 'n7_2_1'));
			$('#n7_3').val(addText('n7_3', 'n7_3_1'));
			$('#n7_4').val(addText('n7_4', 'n7_4_1'));
			`);			
			report = genReport(report, 'n8', 'radio', `
			$('#n8_1').val(addText('n8_1', 'n8_1_1'));
			$('#n8_2').val(addText('n8_2', 'n8_2_1'));
			$('#n8_3').val(addText('n8_3', 'n8_3_1'));
			$('#n8_4').val(addText('n8_4', 'n8_4_1'));
			`);			
		}
		report = genReport(report, 'dm0', 'sectionHeading');
		report = genReport(report, 'dm1', 'checkbox', `
			$('#dm1_2').val(addText('dm1_2','dm1_2_1'));
			$('#dm1_3').val(addText('dm1_3','dm1_3_1'));
			$('#dm1_4').val(addText('dm1_4','dm1_4_1'));
			$('#dm1_5').val(addText('dm1_5','dm1_5_1'));
			$('#dm1_6').val(addText('dm1_6','dm1_6_1'));
			$('#dm1_7').val(addText('dm1_7','dm1_7_1'));
			$('#dm1_8').val(addText('dm1_8','dm1_8_1'));
			`);
		report = genReport(report, 'p0', 'sectionHeading');
		if ($('#p0_1').prop('checked')) {
			report = genReport(report, 'p0_1', 'checkbox', `
				$('#p0_1').val(addText('p0_1','p0_1_1'));
				`);		
		}
		report = genReport(report, 'p1', 'checkbox', `
			$('#p1_1').val(addText('p1_1','p1_1_1'));
			`);
		report = genReport(report, 'p2', 'radio');
		report = genReport(report, 'p3', 'radio');
		report = genReport(report, 'p4', 'radio');


		$('#report').html(report);
	});
});