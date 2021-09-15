function watermark(inputId,text){
  var inputBox = document.getElementById(inputId);
    if (inputBox.value.length > 0){
      if (inputBox.value == text)
        inputBox.value = '';
    }
    else
      inputBox.value = text;
}

function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout(function(){startTime()},500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}

function validacija() {

	if (document.forms[0].ime.value=='') {
		alert("Niste uneli Vase ime!");
		document.forms[0].ime.focus();
		return false
	}
	if (document.forms[0].prezime.value=='') {
		alert("Niste uneli Vase prezime!");
		document.forms[0].prezime.focus();
		return false;
	}
	if (document.forms[0].email.value=='') {
		alert("Niste uneli e-mail adresu!");
		document.forms[0].email.focus();
		return false;
	}
	if(document.forms[0].email.value.indexOf('@') == -1)
	{
		alert("Niste uneli e-mail adresu u odgovarajucem formatu!");
		document.forms[0].email.focus();
		return false;
	}
	
	if (!proveriradio(document.forms[0].pol)) { 
		alert('Niste selektovali pol');
		return false;
	}

	return confirm("Uspesno ste se registrovali !");
}
	document.getElementById('forms');
function proveriradio(dugmici) 
{
	for(var i = 0; i < dugmici.length; i++) {
		if(dugmici[i].checked) return true;
	}
	return false;
}

function odstampaj()
  {
  window.print()
  }
  

function izracunajBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value
if(weight > 0 && height > 0){	
var finalBmi = weight/(height/100*height/100)
document.bmiForm.bmi.value = finalBmi
if(finalBmi < 18.5){
document.bmiForm.meaning.value = "Mrsavi Ste."
}
if(finalBmi > 18.5 && finalBmi < 25){
document.bmiForm.meaning.value = "Bas kako treba."
}
if(finalBmi > 25){
document.bmiForm.meaning.value = "Valjalo bi skinuti koji kilogram."
}
}
else{
alert("Niste dobro popunili polja!")
}
}

jQuery(document).ready(function() {
			jQuery('table').Scrollable(200, 800);
		});