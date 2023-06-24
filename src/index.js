
var d = new Date();
var tahun = d.getFullYear();
var bulan = d.getMonth()+1;

if(bulan<10) {
    bulan = '0' + bulan
};

var tanggal = d.getDate() +20;
if(tanggal < 30 || 31) {
    tanggal = '01'
}

var calender = tahun + '-' + bulan + '-' + tanggal;

document.getElementById('kalender').value = calender;


var tanggalTerakhir = d.getDate()+16;
if(tanggalTerakhir > 30||31) {
    tanggalTerakhir = '30'||'31'
}

var calender = tahun + '-' + bulan + '-' + tanggalTerakhir;

document.getElementById('lastDate').value = calender;
