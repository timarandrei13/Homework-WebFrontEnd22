function Multiply() {
   
    var a = document.getElementById("Nr1");
    var b = document.getElementById("Nr2");
    var c = document.getElementById("Nr3");
    
    var product = document.getElementById("calc-result");
    
    product.innerHTML = parseInt(a.value) * parseInt(b.value);
    product.innerHTML = parseInt(b.value) * parseInt(c.value);
    product.value = ((a * b) + (b * c)) / (a + b);
}

function max(){
    var a = parseInt(document.getElementById("num1").value) || 0;
    var b = parseInt(document.getElementById("num2").value) || 0;
    var c = parseInt(document.getElementById("num3").value) || 0;

    var end = Math.max(a, b, c);

    if (a === 0 && b === 0 && c === 0) {
    alert("Input at least one number");
  } else {
    alert(end);
  }
}

var submit = document.getElementById("submit");

submit.addEventListener('click', () => max());

function Sum() {
    var n = parseInt(document.getElementById("n").value);
    var m = parseInt(document.getElementById("m").value);
    var s = 0;
    var i;
    if (n < m) {
      i = n;
      while (i <= m) {
        if (i % 2 === 0) s = s + i;
        i++;
        alert(s);
      }
    } else if (n > m) {
      i = m;
      while (i <= n) {
        if (i % 2 === 0) s = s + i;
        i++;
        alert(s);
      }
    }
  }