(function(d){	const l = d['ar'] = d['ar'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"",Bold:"عريض","Bulleted List":"قائمة نقطية",Cancel:"إلغاء",Downloadable:"","Dropdown toolbar":"","Edit link":"تحرير الرابط","Editor toolbar":"",Italic:"مائل",Link:"رابط","Link URL":"رابط عنوان",Next:"","Numbered List":"قائمة رقمية","Open in a new tab":"","Open link in new tab":"فتح الرابط في تبويب جديد",Previous:"",Redo:"إعادة","Rich Text Editor, %0":"معالج نصوص، 0%",Save:"حفظ","Show more items":"","This link has no URL":"لا يحتوي هذا الرابط على عنوان",Undo:"تراجع",Unlink:"إلغاء الرابط"}	);l.getPluralForm=function(n){return n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));