textNavigation = `
<a href="./2023-2024.html">2023/24</a><span style="float:right;"><a href="./2023-2024.html">2023/24</a></span>
`;

document.getElementById("seasonNavigation").innerHTML = textNavigation;

// get file name {file}
// year1 = int(file{start:3})
// year2 = year1
// year1--
// seasonPrev = "./" + year1 + "-" + year2 + ".html"
//
// year2 = int(file{5:8})
// year1 = year2
// year2++
// seasonNext = "./" + year1 + "-" + year2 + ".html"
//<a href="${seasonNext}">2023/24</a><span style="float:right;"><a href="${seasonPrev}">2023/24</a></span>