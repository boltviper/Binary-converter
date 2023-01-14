
// Definer convertIpAddress()-funktionen
function convertIpAddress() {
  
// Hent IP-adressen fra indtastningsfeltet
  var ipAddress = document.getElementById("ip-address").value;

  // Konverter IP-adressen til en binær streng
  var binaryString = "";
  var ipAddressNumbers = ipAddress.split(".");

  // Loop : Gå gennem hvert binært tal i arrayet
  for (var i = 0; i < ipAddressNumbers.length; i++) {
    // Konverter det aktuelle IP-adressenummer til en binær streng
    var binary = "";
    var ipNumber = parseInt(ipAddressNumbers[i], 10);

    if (ipNumber >= 128) {
      binary += "1";
      ipNumber -= 128;
    } else {
      binary += "0";
    }

    if (ipNumber >= 64) {
      binary += "1";
      ipNumber -= 64;
    } else {
      binary += "0";
    }

    if (ipNumber >= 32) {
      binary += "1";
      ipNumber -= 32;
    } else {
      binary += "0";
    }

    if (ipNumber >= 16) {
      binary += "1";
      ipNumber -= 16;
    } else {
      binary += "0";
    }

    if (ipNumber >= 8) {
      binary += "1";
      ipNumber -= 8;
    } else {
      binary += "0";
    }

    if (ipNumber >= 4) {
      binary += "1";
      ipNumber -= 4;
    } else {
      binary += "0";
    }

    if (ipNumber >= 2) {
      binary += "1";
      ipNumber -= 2;
    } else {
      binary += "0";
    }

    if (ipNumber >= 1) {
      binary += "1";
      ipNumber -= 1;
    } else {
      binary += "0";
    }

    // Tilføj den binære streng for det aktuelle tal til den overordnede binære streng
    binaryString += binary;

    // Tilføj et punktum (.) mellem hvert tal i den binære streng
    if (i < ipAddressNumbers.length - 1) {binaryString += ".";
  }
}

// Vis den binære streng i feltet "binær streng".
document.getElementById("binary-string").value = binaryString;
}



// Definer funktionen convertBinaryString()
function convertBinaryString() {
// Hent den binære streng fra inputfeltet
var binaryString = document.getElementById("binary-string").value;


// Konverter den binære streng til en IP-adresse
var ipAddress = "";
var binaryNumbers = binaryString.split(".");

// Loop : gennem hvert binært tal i arrayet
for (var i = 0; i < binaryNumbers.length; i++) {
  // Konverter det aktuelle binære tal til et decimaltal
  var decimal = 0;
  var binaryNumber = binaryNumbers[i];

  if (binaryNumber[0] === "1") {
    decimal += 128;
  }

  if (binaryNumber[1] === "1") {
    decimal += 64;
  }

  if (binaryNumber[2] === "1") {
    decimal += 32;
  }

  if (binaryNumber[3] === "1") {
    decimal += 16;
  }

  if (binaryNumber[4] === "1") {
    decimal += 8;
  }

  if (binaryNumber[5] === "1") {
    decimal += 4;
  }

  if (binaryNumber[6] === "1") {
    decimal += 2;
  }

  if (binaryNumber[7] === "1") {
    decimal += 1;
  }

  // Tilføj decimaltallet til den overordnede IP-adressestreng
  ipAddress += decimal;

  // Tilføj et punktum (.) mellem hvert tal i IP-adressen
  if (i < binaryNumbers.length - 1) {
    ipAddress += ".";
  }
}

// Vis IP-adressen i feltet "ip-adresse".
document.getElementById("ip-address").value = ipAddress;
}

