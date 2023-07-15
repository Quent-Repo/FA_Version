
document.onkeydown = checkKey;
function checkKey(See)
	{
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
