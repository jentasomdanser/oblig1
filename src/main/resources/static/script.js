// lager en array som å putte informasjonen inni
let orderKjop = [];
let altfylt = false;
let filmvalgt = false;
let biletterkjopt = false;
let fornavnfylt = false;
let etternavnfylt = false;
let telefonfylt = false;
let epostfylt = false;


//henter verdien fra innputt feltet i html
function kjopBiletter() {
    let innFilm = document.getElementById("Film").value;
    let innAntall = document.getElementById("antall").value;
    let innFornavn = document.getElementById("forNavn").value;
    let innEtteravn = document.getElementById("etteNavn").value;
    let innTelefonnr = document.getElementById("phoneNumber").value;
    let innepost = document.getElementById("email").value;


    // lager en varslings melding at et eller flere av feltene er tomme
    if (innFilm === "") {
        document.getElementById("feilmeldingfilm").innerHTML = "<span style='color: red'>" + 'Ingen film valgt' + "</span>";
        innFilm = "";
        document.getElementById("film").value = "";
    } else {
        filmvalgt = true;
        document.getElementById("feilmeldingfilm").innerHTML = "";
    }

    if (isNaN(innAntall) || innAntall === '') {
        document.getElementById("feilmedlingantall").innerHTML = "<span style='color: red'>" + 'Velg antall biletter' + "</span>";
        innAntall = "";
        document.getElementById("antall").value = "";
    } else {
        innAntall = document.getElementById("antall").value;
        biletterkjopt = "";
        document.getElementById("feilmedlingantall").innerHTML = "";
    }

    if (innFornavn === '' || !isNaN(innFornavn)) {
        document.getElementById("feilmedlingfornavn").innerHTML = "<span style='color: red'>" + 'Skriv inn fornavn' + "</span>";
        innFornavn = "";
        document.getElementById("feilmedlingforavn").value = "";
    } else {
        innFornavn = document.getElementById("feilmedlingfornavn").value;
        fornavnfylt = true;
        document.getElementById("feilmedlingforavn").innerHTML = "";
    }

    if (innEtteravn === '' || !isNaN(innEtteravn)) {
        document.getElementById("feilmedlingettenavn").innerHTML = "<span style='color: red'>" + 'Skriv inn etternavn' + "</span>";
        innEtteravn = "";
        document.getElementById("feilmedlingetternavn").value = "";
    } else {
        innEtteravn = document.getElementById("etteNavn").value;
        etternavnfylt = true;
        document.getElementById("feilmedlingettenavn").innerHTML = "";
    }

    if (innTelefonnr === '' || !document.getElementById("telefonNr").value.match(/^[0-9]{4,13}$/)) {
        document.getElementById("feilmedlingtelefonnr").innerHTML = "<span style='color: red'>" + 'Skriv inn telefon nummer' + "</span>";
        innTelefonnr = "";
        document.getElementById("telefonNr").value = "";
    } else {
        innTelefonnr = document.getElementById("telefonNr").value;
        telefonfylt = true;
        document.getElementById("feilmedlingtelefonnr").innerHTML = "";
    }

    if (innepost === '' || !document.getElementById("email").value.match(/^[A-Za-z._\-0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/)) {
        document.getElementById("feilmedlingemail").innerHTML = "<span style='color: red'>" + 'Skriv inn email' + "</span>";
        innepost = "";
        document.getElementById("email").value = "";

    } else {
        innepost = document.getElementById("email").value;
        epostfylt = true;
        document.getElementById("feilmedlingemail").innerHTML = "";
    }
    if (filmvalgt && biletterkjopt && fornavnfylt && etternavnfylt && telefonfylt && epostfylt) {
        altfylt = true;
    }
    if (altfylt) {
        const kjoptBiletter = {
            film: innFilm,
            antall: innAntall,
            forNavn: innFornavn,
            etterNavn: innEtteravn,
            telefonNr: innTelefonnr,
            epost: innepost
        }
        orderKjop.push(kjoptBiletter);
        document.getElementById("film").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("forNavn").value = "";
        document.getElementById("etteNavn").value = "";
        document.getElementById("telefonNr").value = "";
        document.getElementById("email").value = "";

        let ut = "<table><tr>" +
            "<th>Film</th><th>Antall Biletter</th><th>Fornavn</th><th>Etternavn</th><th>Telefon nummer</th><th>Email</th>" +
            "</tr>";
        for (let i=0; i<tickets.length; i++) {
            out += "<tr>";
            out += "<td>"+tickets[i].choose+"</td><td>"+tickets[i].amount+"</td><td>"+tickets[i].fname+"</td><td>"+tickets[i].lname+"</td><td>"+tickets[i].tel+"</td><td>"+tickets[i].email+"</td>";
            out += "</tr>";
        }
        document.getElementById("ordreListe").innerHTML = ut;
        filmvalgt = false;
        biletterkjopt = false;
        fornavnfylt = false;
        etternavnfylt = false;
        telefonfylt = false;
        epostfylt = false;
        altfylt = false;
    }
}
allfilled = false;
// her slettes bilettene
function slettBilettene() {
    orderKjop = [];
    document.getElementById("ordreListe").innerHTML = "";
}
