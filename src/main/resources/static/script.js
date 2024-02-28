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
    let innFilm = document.getElementById("film").value;
    let innAntall = document.getElementById("antall").value;
    let innFornavn = document.getElementById("forNavn").value;
    let innEtternavn = document.getElementById("etterNavn").value;
    let innTelefonnr = document.getElementById("telefonNr").value;
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
        document.getElementById("feilmeldingantall").innerHTML = "<span style='color: red'>" + 'Velg antall biletter' + "</span>";
        innAntall = "";
        document.getElementById("antall").value = "";
    } else {
        innAntall = document.getElementById("antall").value;
        biletterkjopt = "";
        document.getElementById("feilmeldingantall").innerHTML = "";
    }

    if (innFornavn === '' || !isNaN(innFornavn)) {
        document.getElementById("feilmeldingfornavn").innerHTML = "<span style='color: red'>" + 'Skriv inn fornavn' + "</span>";
        innFornavn = "";
        document.getElementById("feilmeldingfornavn").value = "";
    } else {
        innFornavn = document.getElementById("feilmeldingfornavn").value;
        fornavnfylt = true;
        document.getElementById("feilmeldingfornavn").innerHTML = "";
    }

    if (innEtternavn === '' || !isNaN(innEtternavn)) {
        document.getElementById("feilmeldingetternavn").innerHTML = "<span style='color: red'>" + 'Skriv inn etternavn' + "</span>";
        innEtternavn = "";
        document.getElementById("feilmeldingetternavn").value = "";
    } else {
        innEtternavn = document.getElementById("etterNavn").value;
        etternavnfylt = true;
        document.getElementById("feilmeldingetternavn").innerHTML = "";
    }

    if (innTelefonnr === '' || !document.getElementById("telefonNr").value.match(/^[0-9]{4,13}$/)) {
        document.getElementById("feilmeldingtelefonnr").innerHTML = "<span style='color: red'>" + 'Skriv inn telefon nummer' + "</span>";
        innTelefonnr = "";
        document.getElementById("telefonNr").value = "";
    } else {
        innTelefonnr = document.getElementById("telefonNr").value;
        telefonfylt = true;
        document.getElementById("feilmeldingtelefonnr").innerHTML = "";
    }

    if (innepost === '' || !document.getElementById("email").value.match(/^[A-Za-z._\-0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/)) {
        document.getElementById("feilmeldingemail").innerHTML = "<span style='color: red'>" + 'Skriv inn email' + "</span>";
        innepost = "";
        document.getElementById("email").value = "";

    } else {
        innepost = document.getElementById("email").value;
        epostfylt = true;
        document.getElementById("feilmeldingemail").innerHTML = "";
    }
    if (filmvalgt && biletterkjopt && fornavnfylt && etternavnfylt && telefonfylt && epostfylt) {
        altfylt = true;
    }
    if (altfylt) {
        const kjoptBiletter = {
            film: innFilm,
            antall: innAntall,
            forNavn: innFornavn,
            etterNavn: innEtternavn,
            telefonNr: innTelefonnr,
            email: innepost
        }
        orderKjop.push(kjoptBiletter);
        document.getElementById("film").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("forNavn").value = "";
        document.getElementById("etterNavn").value = "";
        document.getElementById("telefonNr").value = "";
        document.getElementById("email").value = "";

        let ut = "<table><tr>" +
            "<th>Film</th><th>Antall Biletter</th><th>Fornavn</th><th>Etternavn</th><th>Telefon nummer</th><th>Email</th>" +
            "</tr>";
        for (let i=0; i<orderKjop.length; i++) {
            ut += "<tr>";
            ut += "<td>"+orderKjop[i].film+"</td><td>"+orderKjop[i].antall+"</td><td>"+orderKjop[i].forNavn+"</td><td>"+orderKjop[i].etterNavn+"</td><td>"+orderKjop[i].telefonNr+"</td><td>"+orderKjop[i].email+"</td>";
            ut += "</tr>";
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
altfylt = false;

function slettBilettene() {
    orderKjop = [];
    document.getElementById("ordreListe").innerHTML = "";
}