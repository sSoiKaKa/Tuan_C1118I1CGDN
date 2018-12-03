function showMessage(){
    var amount = parseInt(document.getElementById("amount").value);
    var fromCurrency = document.getElementById("fromCurrency");
    var toCurrency = document.getElementById("toCurrency");
    var result;
    if (fromCurrency.value == "VND" && toCurrency.value == "USD") {
        result = amount / 23000;
    }
    document.write("result: " + result);}