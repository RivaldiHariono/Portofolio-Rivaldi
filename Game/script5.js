function pilihankomp() {
	// body...
	const comp = Math.random();

	if(comp < 0.34) return  'semut';
	if(comp >= 0.34 && comp < 0.67)	return 'orang';
	return 'gajah';
}

function hasil(comp,player) {
	// body...
	if(player == comp)	return  'seri';
	if(player == 'gajah')return (comp == 'orang') ? 'menang' : 'kalah';
	if (player == 'semut') return (comp == 'orang') ? 'kalah' : 'menang';
	if (player == 'orang') return (comp == 'gajah') ? 'kalah' : 'menang';
}


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
	pil.addEventListener('click',function(){
			const pilihankomputer = pilihankomp();
		 	const pilihanuser = pil.className;
		 	const result = hasil(pilihankomputer, pilihanuser);

		 	const imgkomp = document.querySelector('.img-komputer');
		 	imgkomp.setAttribute('src','img/' + pilihankomputer + '.png');

		 	const info = document.querySelector('.info');
		 	info.innerHTML = result;
	});
});


// const pilihgajah = document.querySelector('.gajah');
// pilihgajah.addEventListener('click',function(){
// 	const pilihankomputer = pilihankomp();
// 	const pilihanuser = pilihgajah.className;
// 	const hasil = hasil(pilihankomputer, pilihanuser);

// 	const imgkomp = document.querySelector('.img-komputer');
// 	imgkomp.setAttribute('src','img/' + pilihankomputer + '.png');
// });

// const pilihsemut = document.querySelector('.semut');
// pilihsemut.addEventListener('click',function(){
// 	const pilihankomputer = pilihankomp();
// 	const pilihanuser = pilihsemut.className;
// 	const hasil = hasil(pilihankomputer, pilihanuser);

// 	const imgkomp = document.querySelector('.img-komputer');
// 	imgkomp.setAttribute('src','img/' + pilihankomputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const pilihorang = document.querySelector('.orang');
// pilihorang.addEventListener('click',function(){
// 	const pilihankomputer = pilihankomp();
// 	const pilihanuser = pilihorang.className;
// 	const hasil = hasil(pilihankomputer, pilihanuser);

// 	const imgkomp = document.querySelector('.img-komputer');
// 	imgkomp.setAttribute('src','img/' + pilihankomputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });