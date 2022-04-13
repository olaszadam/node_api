
function sendPost(){
    const data = document.getElementById("nev").value+";"+document.getElementById("email").value+";"+document.getElementById("konyvcim").value;
    console.log(data);
      navigator.sendBeacon('http:localhost:3000/savedetails/'+ data);
      console.log(data);
    }
