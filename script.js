var  http =  new XMLHttpRequest();

var url =  "https://jsonplaceholder.typicode.com/posts";

var method ="GET";

var write = document.getElementById('write');

//go specificitame tipot na baranje(request) od serverot i ja otvarame konekcijata kon serverot
http.open(method,url);


//so XMLHttpRequest object definirame funkcija koja ke bide egzekutirana koga ke dobieme odgovor od serverot
//funkcijata e definirana vo onreadystatechange svojstvoto
http.onreadystatechange = function(){

    //prasuvame dali operacijata e kompletirana i baranjeto e ispolneto
    if(http.readyState===XMLHttpRequest.DONE && http.status === 200){
        //pecatime vo div-ot vo html dokumentot
      write.textContent = JSON.parse(http.responseText)[0].id;//go vracame id-to od prviot objekt od post-ot
        //prasuvame dali operacijata e kompletirana i baranjeto ne e ispolneto  
    }else if(http.readyState===XMLHttpRequest.DONE && http.status !==200) {
//vracame greska
        write.textContent ="ERROR!"
    }


};

http.send();//pracame barnje do serverot


