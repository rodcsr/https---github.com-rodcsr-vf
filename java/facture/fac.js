function calculer() {
    var r1 = price1.value * quantity1.value,
        r2 = price2.value * quantity2.value,
        r3 = price3.value * quantity3.value,
        r4 = price4.value * quantity4.value,
        total = r1 + r2 + r3 + r4;

    result1Elem.value = r1;
    result2Elem.value = r2;
    result3Elem.value = r3;
    result4Elem.value = r4;
    totalElem.value = total;
}

function reinitialiser() {
    price1.value = ""; quantity1.value = "";
    price2.value = ""; quantity2.value = "";
    price3.value = ""; quantity3.value = "";
    price4.value = ""; quantity4.value = "";

    result1Elem.value = "";
    result2Elem.value = "";
    result3Elem.value = "";
    result4Elem.value ="";
    totalElem.value = "";
}

calculate.addEventListener("click", calculer);
reset.addEventListener("click", reinitialiser);
