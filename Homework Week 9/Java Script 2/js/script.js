function test() {
  alert("text");
}

function functiaLuiAndrei(nume, prenume) {
  alert("Salut " + nume);
}

function arrayExample() {
  var fructe = ["mere", "pere", "nuci", "struguri", "gutui"];
  // alert(fructe[0]); //mere
  // alert(fructe[1]); //pere
  // alert(fructe[2]); //nuci
  // alert(fructe[3]); //struguri
  // alert(fructe[4]);

  for (var index = 0; index < fructe.length; index = index + 2) {
    alert("Valoarea lui index este " + index);
    alert(fructe[index]);
  }

  // for (var fruct of fructe) {
  //   alert(fruct);
  // }

  //length este o proprietate a array-urilor
  //ne specifica lungimea array-ului
  var textulMeu = "ana are mere";
  alert("Lungimea textului meu este: " + textulMeu.length);
}

//Create a function named sum
//Declare 2 variables a and b and read them from the html page
//Show the sum of the 2 numbers in an alert

function sum() {
  var a = parseInt(document.getElement("valoareaLuiA").value);
  var b = parseInt(document.getElementById("valoareaLuiB").value);
  var sum = a + b;

  alert("Suma este: " + sum);
}

//read a text from the user
//count how many times is the letter 'a' present in the text
//show it in an alert

function letterCounter() {
  var text = document.getElementsByClassName("userInput")[0].value;
  var letterAOccurence = 0;

  for (var i = 0; i < text.length; i++) {
    if (text[i] == "a") {
      letterAOccurence = letterAOccurence + 1;
    }
  }

  alert("Your text: " + text + " has " + letterAOccurence + " letter(s) a");
  console.log("Number of a occurrence: " + letterAOccurence);
}
