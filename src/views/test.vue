<div class="mainarea container-fluid m-0">
<div class="row">
<div class="col-lg-8 content p-0 smartad-no-popunder">
<div class="calculator">
<div class="calc-containter">
<script>
function round(n,dec)
{
	X = n * Math.pow(10,dec);
	X= Math.round(X);
	return (X / Math.pow(10,dec)).toFixed(dec);
}

function getFieldFloatValue(fieldId) {
  return parseFloat(document.getElementById(fieldId).value.replace("\,","."));
}

function bodymass(){
var W		= getFieldFloatValue("W");
var unit_W	= getFieldFloatValue("unit_W");
var H		= getFieldFloatValue("H");
var unit_H	= getFieldFloatValue("unit_H");
var BMI		= document.getElementById("BMI");
var newBMI	= document.getElementById("newBMI");
var result	= document.getElementById("result");

  BMI.value = round((W * unit_W) / Math.pow(H * unit_H, 2), 2);
  newBMI.value = round((1.3 * W * unit_W) / Math.pow(H * unit_H, 2.5), 2);
	if(BMI.value < 16){
	 result.innerHTML="Olete ohtlikult alakaaluline!";
	}else if(BMI.value <= 18.5){
	 result.innerHTML="Olete alakaaluline!";
	}else if(BMI.value <= 25){
	 result.innerHTML="Olete normaalkaalus!";
	}else if(BMI.value <= 30){
	 result.innerHTML="Olete ülekaaluline!";
	}else if(BMI.value <= 35){
	 result.innerHTML="Olete rasvunud!";
	}else if(BMI.value <= 40){
	 result.innerHTML="Olete tugevalt rasvunud!";
	}else{result.innerHTML="Olete eluohtlikult rasvunud!";}
	if(newBMI.value < 16){
	 new_result.innerHTML="Olete ohtlikult alakaaluline!";
	}else if(newBMI.value <= 18.5){
	 new_result.innerHTML="Olete alakaaluline!";
	}else if(newBMI.value <= 25){
	 new_result.innerHTML="Olete normaalkaalus!";
	}else if(newBMI.value <= 30){
	 new_result.innerHTML="Olete ülekaaluline!";
	}else if(newBMI.value <= 35){
	 new_result.innerHTML="Olete rasvunud!";
	}else if(newBMI.value <= 40){
	 new_result.innerHTML="Olete tugevalt rasvunud!";
	}else{new_result.innerHTML="Olete eluohtlikult rasvunud!";}
}
function resetValues(form)
{
 for(var i = 0; i < form.elements.length; i++) {
 if(form.elements[i].type == "text") { form.elements[i].value = "";}
 result.innerHTML=""; 
 new_result.innerHTML=""; 
 }
}
</script>
<form id="bmicalc" name="bmicalc">
<script>document.write('');</script>
<noscript>
<p class="error"><img src="./images/alert.gif" alt="Alert!">&nbsp;<b>VIGA!</b> Veebisirvijas peab olema lubatud JavaScript!</p><br>
</noscript><div class="col-sm-12 col-12 no-padding"><h2 class="toc1 toc-input">Lähteandmed</h2></div>
<div><br/></div>
<div class="row">
<div class="col-sm-4 col-12 pt-2">Pikkus</div>
<div class="col-sm-6 col-12 no-padding"><input class="vis biginput R W90" type="text" value="" id="H" name="H" onchange="bodymass();" onkeyup="bodymass();" />
<select class="select150" id="unit_H" name="unit_H" onchange="bodymass();" onkeyup="bodymass();">
  <option value="0.3048">jalg (ft)</option>
  <option value="1">meeter (m)</option>
  <option value="0.01" selected="selected">sentimeeter (cm)</option>
  <option value="0.0254">toll (in)</option>
</select>
</div>
</div>
<div class="row">
<div class="col-sm-4 col-12 pt-2">Kehakaal</div>
<div class="col-sm-6 col-12 no-padding"><input class="vis biginput R W90" type="text" value="" id="W" name="W" onchange="bodymass();" onkeyup="bodymass();" />
<select class="select150" id="unit_W" name="unit_W" onchange="bodymass();" onkeyup="bodymass();">
  <option value="1" selected="selected">kilogramm (kg)</option>
  <option value="0.45359237">nael (lb)</option>
</select>
</div>
</div>
<div><br/></div>
<div class="col-sm-12 col-12 no-padding"><h2 class="toc1 toc-result">Tulemus</h2></div>
<div><br/></div>
<div class="row">
<div class="col-sm-4 col-12 pt-2">Kehamassiindeks (BMI)</div>
<div class="col-sm-2 col-12 no-padding"><input disabled="disabled" class="disabled vis biginput R W90" type="text" value="" id="BMI" name="BMI" /></div>
<div class="col-sm-6 col-12 pt-1"><span class="label-lg" id="result"></span></div>
</div><div class="row">
<div class="col-sm-4 col-12 pt-2">Uus kehamassiindeks (new BMI)</div>
<div class="col-sm-2 col-12 no-padding"><input disabled="disabled" class="disabled vis biginput R W90" type="text" value="" id="newBMI" name="newBMI" /></div>
<div class="col-sm-6 col-12 pt-1"><span class="label-lg" id="new_result"></span></div>
</div><div><hr/></div>
<div class="row no-padding">
	<div class="col-sm-6 col-12 no-padding">
		<div class="row no-padding">
		<div class="reference col-12"><h3><b><i class="fa fa-info-circle"></i>  Vaata ka:</b></h3>
		<ul>
		<li>
		<a href="https://www.kalkulaator.ee/et/pikkus-ja-kehakaal" onclick="ga('send', 'event', 'Link', 'Click', 'bodyHeightWeight');">Pikkus ja kehakaal</a>
		</li>
		</ul>
		</div>
		</div>
	</div>
	<div class="d-sm-none">&nbsp;</div>
	<div class="col-sm-6 col-12 no-padding R-sm-L"><input class="btn btn-sm btn-outline-danger" type="button" name="reset" onclick="resetValues(this.form)" value="Tühjenda väljad">&ensp;</div>
</div>
</form>
</div>
<