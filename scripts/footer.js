const options = {
	year: "numeric",
	month: "short",
	day: "numeric",
}
let d = (new Date(document.lastModified)).toLocaleDateString("en-US", options);
let displayDate = "<p>Last Update: <time>" + d + "</time></p>";

let textFooter = `
\&\#9400; 2020-2025 Christos Milarokostas \&\#8226; 
<a href="mailto:xristos_mil@hotmail.com">
Get in touch!</a>
`;

document.getElementById("pageFooter").innerHTML = textFooter;


/* Last update string:
Last Update: <time>${d}</time> \&\#8226; 
*/