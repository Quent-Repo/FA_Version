document.onkeydown = checkKey;
//This is the beta theme


function checkKey(See)
    {
        x = window.location.host
    if(document.getElementsByTagName("body")[0].dataset.staticPath == '/themes/beta')
    {    
        if(See.code === 'ArrowLeft')
        {
            if((document.getElementsByClassName("button standard mobile-fix")[0].text) == "Prev")
            {
                    document.getElementsByClassName("button standard mobile-fix")[0].click() //Older
            }
        }
        else if(See.code == 'ArrowRight')
        {
            if(((document.getElementsByClassName("button standard mobile-fix")[2].text) == "Next") || ((document.getElementsByClassName("button standard mobile-fix")[3].text) == "Next"))
            {
                    document.getElementsByClassName("button standard mobile-fix")[(document.getElementsByClassName("button standard mobile-fix").length)-1].click() //Older
            }
        }
        else if(See.code == 'KeyD')
        {
            if(((document.getElementsByClassName("button standard mobile-fix")[2].text) == "Download") || ((document.getElementsByClassName("button standard mobile-fix")[3].text) == "Download"))
            {
                const link = document.createElement("a");
                r=document.getElementById("submissionImg")
                link.href = r.attributes[5].nodeValue;
                link.download = link.href;
                //link.click()
                window.open(link.download, '_blank');
                ;
                
                
            }
        }
                else{
                    null; 
                }
    }
        else{
            if(See.code === 'ArrowLeft')
        {
            
            document.getElementsByClassName("next button-link")[0].click() //Older
            
        }
        else if(See.code == 'ArrowRight'){
            
            document.getElementsByClassName("prev button-link")[0].click()//Older
            
            }
        else if(See.code == 'KeyD'){
        	const link = document.createElement("a");
        	link.href = document.getElementById("submissionImg").dataset.fullviewSrc;
        	link.download = link.href;
        	window.open(link.download, '_blank');

        }
        else{
        	if(window.location.host == 'd.furaffinity.net'){
            console.log("something")
            const link = document.createElement("a");
            r=document.getElementById("submissionImg")
            link.href =document.getElementsByTagName("img")[0].baseURI;
            link.download = link.href;
            link.click();
            //close();
            console.log("xd")
        }
            null; }
            
        }
    }
