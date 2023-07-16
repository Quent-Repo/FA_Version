// document.getElementsByTagName("body")[0].dataset.staticPath // this can be used to tell which verson of the site you are using since both have different "ClassName" or buttons
// There are two options '/themes/beta' or '/themes/classic'


document.onkeydown = checkKey;
//This is the beta theme
function checkKey(See)
	{
	if(document.getElementsByTagName("body")[0].dataset.staticPath == '/themes/beta'){	
		if(See.code === 'ArrowLeft')
		{
			if((document.getElementsByClassName("button standard mobile-fix")[0].text) == "Prev"){
			document.getElementsByClassName("button standard mobile-fix")[0].click() //Older
			}
		}
		else if(See.code == 'ArrowRight'){
			if(((document.getElementsByClassName("button standard mobile-fix")[2].text) == "Next") || ((document.getElementsByClassName("button standard mobile-fix")[3].text) == "Next")){
			document.getElementsByClassName("button standard mobile-fix")[(document.getElementsByClassName("button standard mobile-fix").length)-1].click() //Older
			}
			}
		else{
			null; }
	}
		else{
			if(See.code === 'ArrowLeft')
		{
			
			document.getElementsByClassName("next button-link")[0].click() //Older
			
		}
		else if(See.code == 'ArrowRight'){
			
			document.getElementsByClassName("prev button-link")[0].click()//Older
			
			}
		else{
			null; }
			
		}
	}

document.getElementsByClassName("next button-link")[0].click()
document.getElementsByClassName("prev button-link")[0].click()
