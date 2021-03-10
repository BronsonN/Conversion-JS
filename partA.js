var rate_value;
var euroCurrency;
var canadianCurrency;
var americanCurrency;
var bitcoinCurrency;
var ethereumCurrency;
var userValue;
var convertedCurrency;
var checkedRadioEuro = false;
var checkedRadioUsDollar = false;
var checkedRadioCanadian = false;
var checkedRadioBitcoin = false;
var checkedRadioEthereum = false;


function getCurrency() {


    if (document.getElementById('euro').checked) {
        checkedRadioEuro = true;
    }

    if (document.getElementById('usDollar').checked) {
        checkedRadioUsDollar = true;
    }

    if (document.getElementById('canadian').checked) {
        checkedRadioCanadian = true;

    }

    if (document.getElementById('bitcoin').checked) {
        checkedRadioBitcoin = true;
    }

    if (document.getElementById('ethereum').checked) {
        checkedRadioEthereum = true;
    }

}

function getValue() {

    var convertedValue;

    userValue = document.getElementById('originalValue').value;

    if (checkedRadioEuro && convertedCurrency.includes("canadian")) {
        canadianCurrency = 1.50401;
        convertedValue = userValue * canadianCurrency;
    } else if (checkedRadioEuro && convertedCurrency.includes("usDollar")) {
        americanCurrency = 1.18781;
        convertedValue = userValue * americanCurrency;
    } else if (checkedRadioEuro && convertedCurrency.includes("bitcoin")) {
        bitcoinCurrency = 0.00002;
        convertedValue = userValue * bitcoinCurrency;
    } else if (checkedRadioEuro && convertedCurrency.includes("ethereum")) {
        ethereumCurrency = 0.00069;
        convertedValue = userValue * ethereumCurrency;
    }


    if (checkedRadioUsDollar && convertedCurrency.includes("ethereum")) {
        ethereumCurrency = 0.00055;
        convertedValue = userValue * ethereumCurrency;
    }
      else if (checkedRadioUsDollar && convertedCurrency.includes("euro")) {
        euroCurrency = 0.84151;
        convertedValue = userValue * euroCurrency;
    } else if (checkedRadioUsDollar && convertedCurrency.includes("canadian")) {
        canadianCurrency = 1.26382;
        convertedValue = userValue * canadianCurrency;
    } else if (checkedRadioUsDollar && convertedCurrency.includes("bitcoin")) {
        bitcoinCurrency = 0.00002;
        convertedValue = userValue * bitcoinCurrency;
    } 


    if (checkedRadioCanadian && convertedCurrency.includes("usDollar")) {
        americanCurrency = 0.79114;
        convertedValue = userValue * americanCurrency;
    } else if (checkedRadioCanadian && convertedCurrency.includes("euro")) {
        euroCurrency = 0.66575;
        convertedValue = userValue * euroCurrency;
    } else if (checkedRadioCanadian && convertedCurrency.includes("bitcoin")) {
        bitcoinCurrency = 0.00001;
        convertedValue = userValue * bitcoinCurrency;
    } else if (checkedRadioCanadian && convertedCurrency.includes("ethereum")) {
        ethereumCurrency = 0.00043
        convertedValue = userValue * ethereumCurrency;
    }

    if (checkedRadioBitcoin && convertedCurrency.includes("usDollar")) {
        americanCurrency = 53961.0;
        convertedValue = userValue * americanCurrency;
    }
      else if (checkedRadioBitcoin && convertedCurrency.includes("euro")) {
        euroCurrency = 45408.9;
        convertedValue = userValue * euroCurrency;
    } else if (checkedRadioBitcoin && convertedCurrency.includes("canadian")) {
        canadianCurrency = 68196.8;
        convertedValue = userValue * canadianCurrency;
    } else if (checkedRadioBitcoin && convertedCurrency.includes("ethereum")) {
        ethereumCurrency = 295239;
        convertedValue = userValue * ethereumCurrency;
    }
    
    
    if (checkedRadioEthereum && convertedCurrency.includes("usDollar")) {
        americanCurrency = 1818.90;
        convertedValue = userValue * americanCurrency;
    }
      else if (checkedRadioEthereum && convertedCurrency.includes("euro")) {
        euroCurrency = 1530.63;
        convertedValue = userValue * euroCurrency;
    } else if (checkedRadioEthereum && convertedCurrency.includes("canadian")) {
        canadianCurrency = 2298.75;
        convertedValue = userValue * canadianCurrency;
    } else if (checkedRadioEthereum && convertedCurrency.includes("bitcoin")) {
        bitcoinCurrency = 0.03369;
        convertedValue = userValue * bitcoinCurrency;
    } 




    displayProperCurrency(convertedValue);
}




function currencyConverter(groupName) {

    if (document.getElementById('americanConversion').checked) {
        if (checkedRadioEthereum || checkedRadioBitcoin || checkedRadioCanadian || checkedRadioEuro) {
            convertedCurrency = "usDollar";
        }

    } else if (document.getElementById('canadianConversion').checked) {
        if (checkedRadioEuro || checkedRadioBitcoin || checkedRadioEthereum || checkedRadioUsDollar) {
            convertedCurrency = "canadian";
        }

    } else if (document.getElementById('bitcoinConversion').checked) {
        if (checkedRadioEuro || checkedRadioCanadian || checkedRadioEthereum || checkedRadioUsDollar) {
            convertedCurrency = "bitcoin";
        }

    } else if (document.getElementById('ethereumConversion').checked) {
        if (checkedRadioEuro || checkedRadioCanadian || checkedRadioEthereum|| checkedRadioUsDollar) {
            convertedCurrency = "ethereum";
        }
    } else if (document.getElementById('euroConversion').checked) {
        if (checkedRadioCanadian || checkedRadioBitcoin || checkedRadioEthereum || checkedRadioUsDollar) {
            convertedCurrency = "euro";
        }

    }


    console.log(convertedCurrency);
}

function displayProperCurrency(value) {
var x;


if(convertedCurrency == "euro") {
var myObj = {
  style: "currency",
  currency: "EUR"
}

x = value.toLocaleString("en-GB", myObj);
alert("You have converted to " +x+ " Euros");
} else if(convertedCurrency == "usDollar") {
    var myObj = {
      style: "currency",
      currency: "USD"
    }
    
    x = value.toLocaleString("en-US", myObj);
    alert("You have converted to " +x+ " American");
    } else if(convertedCurrency == "canadian") {
        var myObj = {
          style: "currency",
          currency: "CAD"
        }
        
        x = value.toLocaleString("en-US", myObj);
        alert("You have converted to " +x+ " Canadian");
        } else if(convertedCurrency == "bitcoin") {
            var myObj = {
              style: "currency",
              currency: "BIT"
            }
            
            x = value.toLocaleString("en-US", myObj);
            alert("You have converted to " +x+ " Bitcoin");
            } else if(convertedCurrency == "ethereum") {
                var myObj = {
                  style: "currency",
                  currency: "ETH"
                }
                
                x = value.toLocaleString("en-US", myObj);
                alert("You have converted to " +x+ " Ethereum");
                } 
            


}