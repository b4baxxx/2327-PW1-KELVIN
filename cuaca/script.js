fetch('https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=16.71.18.1001')
.then(response => response.json())
.then( data => {
    console.log(data);
    data.forEach( (item) => {
        document.getElementById("list-desa").innerHTML +=  
     
    });

})

fuction detail (kode){
    console.log(kode);





}

