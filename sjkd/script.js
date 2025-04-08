// Public API data gempa BMKG
fetch('https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json')
.then( response => response.json()) // ubah jadi format JSON
.then( data => {
    // console.log(data);
    console.log(data.Infogempa.gempa);
    data.Infogempa.gempa.forEach( (data) => {
        document.getElementById('gempa').innerHTML += `<li>
            ${data.Wilayah} ${data.Tanggal} ${data.Jam} ${data.Potensi}      
        </li>`
    } )
})