let osoba1 = {
  jmeno: 'Alena',
  uspory: 20000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

const mohouJet = (osoba1, osoba2) => {
  if (osoba1.uspory + osoba2.uspory >= 100000) {
    console.log("Mohou jet na dovolenou.")
    if (osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
      console.log("Obě mají naspořeno dost.")
    } else if (osoba1.uspory < 50000) {
      console.log(`Osobě ${osoba1.jmeno} chybí našetřit ${50000 - osoba1.uspory}.`)
    } else {
      console.log(`Osobě ${osoba2.jmeno} chybí našetřit ${50000 - osoba2.uspory}.`)
    }
  } else {
    console.log("Nemohou jet na dovolenou.")
    console.log(`Oběma dohromady chybí ${100000 - (osoba1.uspory + osoba2.uspory)}`)
    console.log(`Osobě ${osoba1.jmeno} chybí našetřit ${Math.max(50000 - osoba1.uspory, 0)}.`)
    console.log(`Osobě ${osoba2.jmeno} chybí našetřit ${Math.max(50000 - osoba2.uspory, 0)}.`)
  }
}

mohouJet(osoba1, osoba2)