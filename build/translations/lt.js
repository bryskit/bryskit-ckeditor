(function(d){	const l = d['lt'] = d['lt'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"",Bold:"Paryškintas","Bulleted List":"Sąrašas",Cancel:"Atšaukti","Decrease indent":"Sumažinti atitraukimą",Downloadable:"","Dropdown toolbar":"","Edit link":"Keisti nuorodą","Editor toolbar":"","Increase indent":"Padidinti atitraukimą",Italic:"Kursyvas",Link:"Pridėti nuorodą","Link URL":"Nuorodos URL",Next:"","Numbered List":"Numeruotas rąrašas","Open in a new tab":"","Open link in new tab":"Atidaryti nuorodą naujame skirtuke",Previous:"",Redo:"Pirmyn","Rich Text Editor, %0":"Raiškiojo teksto redaktorius, %0",Save:"Išsaugoti","Show more items":"","This link has no URL":"Ši nuorda neturi URL",Undo:"Atgal",Unlink:"Pašalinti nuorodą"}	);l.getPluralForm=function(n){return (n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));