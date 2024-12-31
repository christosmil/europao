const decades = [1960, 1970, 1980, 1990, 2000, 2010, 2020];
let seasonsOfLastDecade = 4;

let menuText = '' +
'<nav class="navbar navbar-expand-lg navbar-light static-top mytopnavbar">' +
'<a class="navbar-brand" href="./index.html"><img src="../images/Panathinaikos FC.png" height="31.3" alt="Panathinaikos FC"></a>' +
'<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="\#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>' +
'<div class="collapse navbar-collapse" id="navbarResponsive">' +
'<ul class="navbar-nav mr-auto">' + //from this point on, loop
'								<li class="nav-item dropdown">' +
'									<a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">2020-2029</a>' +
'									<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
'										<a class="dropdown-item" href="./2023-24.html">2023/24</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2022-23.html">2022/23</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2021-22.html">2021/22</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2020-21.html">2020/21</a>' +
'									</div>' +
'								</li>' +
'								<li class="nav-item dropdown">' +
'									<a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">2010-2019</a>' +
'									<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
'										<a class="dropdown-item" href="./2019-20.html">2019/20</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2018-19.html">2018/19</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2017-18.html">2017/18</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2016-17.html">2016/17</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2015_16.html">2015/16</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2014_15.html">2014/15</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2013_14.html">2013/14</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2012_13.html">2012/13</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2011_12.html">2011/12</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2010_11.html">2010/11</a>' +
'									</div>' +
'								</li>' +
'								<li class="nav-item dropdown">' +
'									<a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">2000-2009</a>' +
'									<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
'										<a class="dropdown-item" href="./2009_10.html">2009/10</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2008_09.html">2008/09</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2007_08.html">2007/08</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2006_07.html">2006/07</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2005_06.html">2005/06</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2004_05.html">2004/05</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2003_04.html">2003/04</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2002_03.html">2002/03</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2001_02.html">2001/02</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./2000_01.html">2000/01</a>' +
'									</div>' +
'								</li>' +
'								<li class="nav-item dropdown">' +
'									<a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">1990-1999</a>' +
'									<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
'										<a class="dropdown-item" href="./1999_00.html">1999/00</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1998_99.html">1998/99</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1997_98.html">1997/98</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1996_97.html">1996/97</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1995_96.html">1995/96</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1994_95.html">1994/95</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1993_94.html">1993/94</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1992_93.html">1992/93</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1991_92.html">1991/92</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1990_91.html">1990/91</a>' +
'									</div>' +
'								</li>' +
'								<li class="nav-item dropdown">' +
'									<a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">1980-1989</a>' +
'									<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
'										<a class="dropdown-item" href="./1989_90.html">1989/90</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1988_89.html">1988/89</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1987_88.html">1987/88</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1986_87.html">1986/87</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1985_86.html">1985/86</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1984_85.html">1984/85</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1983_84.html">1983/84</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1982_83.html">1982/83</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1981_82.html">1981/82</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1980_81.html">1980/81</a>' +
'									</div>' +
'								</li>' +
'								<li class="nav-item dropdown">' +
'									<a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">1970-1979</a>' +
'									<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
'										<a class="dropdown-item" href="./1979_80.html">1979/80</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1978_79.html">1978/79</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1977_78.html">1977/78</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1976_77.html">1976/77</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1975_76.html">1975/76</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1974_75.html">1974/75</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1973_74.html">1973/74</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1972_73.html">1972/73</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1971_72.html">1971/72</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1970_71.html">1970/71</a>' +
'									</div>' +
'								</li>' +
'								<li class="nav-item dropdown">' +
'									<a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">1960-1969</a>' +
'									<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
'										<a class="dropdown-item" href="./1969_70.html">1969/70</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1968_69.html">1968/69</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1967_68.html">1967/68</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1966_67.html">1966/67</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1965_66.html">1965/66</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1964_65.html">1964/65</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1963_64.html">1963/64</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1962_63.html">1962/63</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1961_62.html">1961/62</a>' +
'										<div class="dropdown-divider"></div>' +
'										<a class="dropdown-item" href="./1960_61.html">1960/61</a>' +
'									</div>' +
'								</li>' +
'							</ul>' +
'						</div>' +
'					</nav>';
document.getElementById("menu").innerHTML = menuText;
