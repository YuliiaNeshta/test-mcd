tippy('.dashboard-head__report.disabled-report', {
	content: 'choose a restaurant',
});

tippy('.store-list__more', {
	content: 'more',
});

let checkboxForStore = document.querySelectorAll('.checkbox__input');
let reportBtn = document.querySelector('.dashboard-head__report');


for(var i = 0; i < checkboxForStore.length; i++ )
checkboxForStore[i].addEventListener('change', function () {
	if ( this.checked ) {
			reportBtn.classList.remove('disabled-report')
	} else {
		reportBtn.classList.add('disabled-report')
	}
})