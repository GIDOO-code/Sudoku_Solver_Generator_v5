function writeNaviHeader( ){
	var html = "";
	html += '<nav ID="headerNav">';
		html += '<ul>';
			html += '<li><a href="index.html">Home(v4)</a></li>';
			html += '<li><a class="a" href="index_v5.html">Home(v5)</a></li>';

		//	html += '<li><a href="page2.html">Sudoku Algorithm</a></li>';
			html += '<li><a href="page2_v5.html">Sudoku Algorithm(v5)</a></li>';
		//	html += '<li><a href="page1.html">Element Tech</a></li>';
			html += '<li><a href="page17.html">Download</a></li>';
			html += '<li><a href="page19.html">about this</a></li>';
		html += '</ul>';
	html += '</nav>';
	document.write(html);
}