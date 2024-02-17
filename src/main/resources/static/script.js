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
    if (!film){
        document.getElementById("feilmeldingfilm").innerHTML = "Ingen film valgt";
    }
    else if (film){
        document.getElementById("feilmeldingfilm").innerHTML = "";
    }

    if (!antallBiletter){
        document.getElementById("feilmedlingantall").innerHTML = "Velg et antall biletter";
    }
    else if (antallBiletter){
        document.getElementById("feilmedlingantall").innerHTML ="";
    }

    if (!forNavn){
        document.getElementById("feilmedlingfornavn").innerHTML =
    }



}

function slettBilettene() {
    const order = {
        film,


    }
}