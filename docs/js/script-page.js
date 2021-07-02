document.getElementById("altoContraste").addEventListener("click", contrasteOn);
document.getElementById("baixoContraste").addEventListener("click", contrasteOff);

function contrasteOn()
{
    var x, i;
    x = document.querySelectorAll(".row,.col-2,.col-10,.col-12,a[target]");
    for (i = 0; i < x.length; i++) {
        x[i].style.background = 'black';
        x[i].style.color = 'white';}
}

function contrasteOff()
{
    var y, j;
    y = document.querySelectorAll(".row,.col-2,.col-10,.col-12,a[target]");
    for (j = 0; j < y.length; j++) {
        y[j].style.background = 'rgb(235, 235, 235)';
        y[j].style.color = 'rgb(70,70,70)';}
}

