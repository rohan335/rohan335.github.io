
async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}


async function check(value) {
    value = value.toLocaleLowerCase()
    let hashValue = await sha256(value);
    switch (hashValue) {
      case "4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5":
        return("WW91IGRpZCBpdCEgQ29udGludWUgeW91ciBqb3VybmV5IGF0IHRoZSBtaWRkbGUgc2Nob29sIGNhZmV0ZXJpYS4uLg")
        break;
    
      case "177f85df57ad121d5aaac8076a4a0554a673182fe06cf65ee7d9f7d0961f947d":
        return("RGluZyBkaW5nIGRpbmchIFlvdSBjYW4gZmluZCB0aGUgbmV4dCBjbHVlIGF0IGEgU3BhbmlzaCB0ZWFjaGVyJ3MgZG9vci4")
        break;

      case "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3":
        return("V29vaG9vISBPbmUgbW9yZSBwdXp6bGUgcmVtYWluczogeW91IGNhbiBmaW5kIGl0IGF0IHRoZSB2ZW5kaW5nIG1hY2hpbmU")
        break;
      default:
        return("V1JPTkchIFRyeSBhZ2Fpbi4uLg");
        break;
    }
  }
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("beginAdventure").addEventListener("click", () => {
        document.getElementById("backgroundImage").style.bottom = "100%"
        document.getElementById("startingDiv").style.bottom = "150%"
        document.getElementById("scavengerHuntContainer").style.bottom = "0%"
    })
    document.getElementById("magicballInput").addEventListener("keypress", (e) => {
        if(e.key == "Enter") {
            let givenValue = document.getElementById("magicballInput").value;
            check(givenValue).then((resp) => {
                document.getElementById("result").innerText = atob(resp);
            })
            document.getElementById("magicballInput").value = ""
        }
    })
})