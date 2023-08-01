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
            if(((document.getElementsByClassName("button standard mobile-fix")[4].text) == "Next") || ((document.getElementsByClassName("button standard mobile-fix")[5].text) == "Next"))
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
        else if(See.code == "KeyF"){
            //needs to be edited
            if(((document.getElementsByClassName("button standard mobile-fix")[0].text) == "+Fav") || ((document.getElementsByClassName("button standard mobile-fix")[0].text) == "-Fav")){
                document.getElementsByClassName("button standard mobile-fix")[0].click()
            }
            else if(((document.getElementsByClassName("button standard mobile-fix")[1].text) == "+Fav") || ((document.getElementsByClassName("button standard mobile-fix")[1].text) == "-Fav")){
                document.getElementsByClassName("button standard mobile-fix")[1].click()

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
        else if(See.code == "KeyF"){
            if((document.getElementsByClassName("alt1 actions aligncenter")[0].childNodes[1].textContent == "+Add to Favorites") || (document.getElementsByClassName("alt1 actions aligncenter")[0].childNodes[1].textContent == "-Remove from Favorites")){
            document.querySelector("#page-submission > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > div.alt1.actions.aligncenter > b:nth-child(1) > a").click()}
            else if((document.getElementsByClassName("alt1 actions aligncenter")[0].childNodes[3].textContent == "+Add to Favorites") || (document.getElementsByClassName("alt1 actions aligncenter")[0].childNodes[3].textContent == "-Remove from Favorites")){
            document.querySelector("#page-submission > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > div.alt1.actions.aligncenter > b:nth-child(2) > a").click()}

        }
        else{
        	if(window.location.host == 'd.furaffinity.net'){
            const link = document.createElement("a");
            r=document.getElementById("submissionImg")
            link.href =document.getElementsByTagName("img")[0].baseURI;
            link.download = link.href;
            link.click();
            close();
        }
            null; }
            
        }
    }
