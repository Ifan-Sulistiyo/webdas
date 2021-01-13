//mmbuat object angkot
function Angkot(sopir,trayek,penumpang,kas) {
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function(namaPenumpang) {
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}


}

var angkot1 = new Angkot('ifan', 
	['kajen', 'kesesi'], [], 0);
var angkot2 = new Angkot('mito',
	['kwasen', 'kajen'], [], 0);