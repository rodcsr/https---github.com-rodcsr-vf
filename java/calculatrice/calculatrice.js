function addition() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    t3.value = c;
}

function soustraction() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    t3.value = c;
}

function division() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);
    t3.value = c;
}

function multiplication() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    t3.value = c;
}

function parite() {
    var a = document.getElementById("t1").value;
    var result = (Number(a) % 2 === 0) ? "Pair" : "Impair";
    t4.value = result;
}

function permute() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    document.getElementById("t1").value = b;
    document.getElementById("t2").value = a;
}
