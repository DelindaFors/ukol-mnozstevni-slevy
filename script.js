const pocetKs = prompt ("Zadejte daný počet ks k objednání:")

if (pocetKs < 50) {
    document.body.innerHTML = pocetKs * 300 + " Kč"
} else if (pocetKs <= 200) {
    document.body.innerHTML = pocetKs * 250 + " Kč"
} else if (pocetKs <= 500) {
    document.body.innerHTML = pocetKs * 200 + " Kč"
} else if (pocetKs <= 1000){
    document.body.innerHTML = pocetKs * 150 + " Kč"
} else if (pocetKs > 1001){
    document.body.innerHTML = pocetKs * 120 + " Kč"
}