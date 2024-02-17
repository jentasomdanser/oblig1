// lager en array som å putte informasjonen inni
let orderKjop = []

//henter verdien fra innputt feltet i html
function kjopBiletter() {
    const film = document.getElementById("Film").value;
    const antallBiletter = document.getElementById("antall").value;
    const forNavn = document.getElementById("forNavn").value;
    const etterNavn = document.getElementById("etteNavn").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const epost = document.getElementById("email").value;

    // etter man har kjøpt en bilett blir det slettet i fra innputt boksene
    // slik at man kan legge til et nytt bilett kjøp
    document.getElementById("Film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("forNavn").value = "";
    document.getElementById("etteNavn").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";

    // lager en varslings melding at et eller flere av feltene er tomme
    if (!film) {
        document.getElementById("feilmeldingfilm").innerHTML = "Ingen film valgt";
    } else if (film) {
        document.getElementById("feilmeldingfilm").innerHTML = "";
    }

    if (!antallBiletter) {
        document.getElementById("feilmedlingantall").innerHTML = "Velg et antall biletter";
    } else if (antallBiletter) {
        document.getElementById("feilmedlingantall").innerHTML = "";
    }

    if (!forNavn) {
        document.getElementById("feilmedlingfornavn").innerHTML = "Skriv inn fornavn";
    } else if (forNavn) {
        document.getElementById("feilmedlingfornavn").innerHTML = "";
    }

    if (!etterNavn) {
        document.getElementById("feilmedlingettenavn").innerHTML = "Skriv inn etternavn";
    } else if (etterNavn) {
        document.getElementById("feilmedlingettenavn").innerHTML = "";
    }

    if (!phoneNumber) {
        document.getElementById("feilmedlingtelefonnr").innerHTML = "Skriv inn telefon nummer";
    } else if (phoneNumber) {
        document.getElementById("feilmedlingtelefonnr").innerHTML = "";
    }
    if (!epost) {
        document.getElementById("feilmedlingemail").innerHTML = "Skriv inn email";

    } else if (epost) {
        document.getElementById("feilmedlingemail").innerHTML = "";
    }
    if (film, antallBiletter, forNavn, etterNavn,phoneNumber, epost) {
        const order = {
            film,
            antallBiletter,
            forNavn,
            etterNavn,
            phoneNumber,
            epost
        }
        if (film && antallBiletter && forNavn && etterNavn && phoneNumber && epost) {
            orderKjop.push(order);
        }
        let ut ="<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th> <th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>"
        for (let order of orderKjop){
            ut+= "<tr><td>"+order.film +"</td><thd>" + order.antallBiletter+ "</thd><th>"+ order.forNavn+"</th><th>" + order.etterNavn+ "</th><th>" + order.phoneNumber +"</th><td>"+ order.epost + "</td></tr>"
        }
        ut+= </table>;
    document.getElementById("ordreListe").innerHTML = ut;
    console.log(ut);
    }
}

function slettBilettene() {
    const order = {
        film,
        antallBiletter,
        forNavn,
        etterNavn,
        phoneNumber,
        epost
    }
    i=0;
    while (i < orderKjop.length){
        orderKjop.pop(order);
    }
    i++;

    document.getElementById("ordreListe").innerHTML = orderKjop;
    console.log(orderKjop);
}