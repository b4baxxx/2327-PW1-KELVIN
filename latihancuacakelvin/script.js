fetch('https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=16.71.18.1001')
.then(response => response.json())
.then(data => {
    const tableBody = document.getElementById('weather-data');
    data.forEach(item => {
        const row = document.createElement('LIST-DESA').
        innerHTML += <li> ${item.kode } ${item.nama}

        </li>
        
        
           
         
        
    });
})
