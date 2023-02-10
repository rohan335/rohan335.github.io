
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
    value = value.toLocaleLowerCase().trim()
    let hashValue = await sha256(value);
    switch (hashValue) {
      case "5426d2ca50f244fb43fe9eafc82da08f33f3b4f8d9140802bd0102e780b629d6":
        return("QmluZ28hIFRoZSBuZXh0IHByb2JsZW0gaXMgaW4gTXIuIFRpY2tlbGwncyByb29tICgxMjApLiBGaW5kIGl0IGlmIHlvdSBkYXJlLi4u")
        break;
    
      case "177f85df57ad121d5aaac8076a4a0554a673182fe06cf65ee7d9f7d0961f947d":
        return("TG92ZWxhY2Ugd2FzIHRoZSBkYXVnaHRlciBvZiBhIG1hZCBwb2V0LiBIZXIgZmluYWwgd29yZHMgd2VyZTogImdvIHRvIHRoZSBhdWRpdG9yaXVtIGZvciB0aGUgbmV4dCBjbHVlIg")
        break;

      case "0bbf9f8f0ba1a1b72492028bd81c99e6d3410311e86001fc2d52dbee3bf85618":
        return("RXhjZWxsZW50ISBPbmx5IG9uZSBtb3JlIHByb2JsZW0gc3RhbmRzIGluIHlvdXIgcGF0aC4uLiBPZmYgdG8gMTY4ID0geC0xMDA")
        break;
      case "8fdc5818d10bd0958e1d4ce80a3abba1acc6fe4488d86808e82fce64bdbb42d3":
        return("WW91J3ZlIGNvbXBsZXRlZCBldmVyeSB0YXNrISBUaGUgdHJlYXN1cmUgaXMgYnVyaWVkIGF0IHRoZSBmcmVzaG1lbidzIGxlYXN0IGZhdm9yaXRlIHN0YWlyY2FzZSE")
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
    document.getElementById("confirmButton").addEventListener("click", () => {
      let givenValue = document.getElementById("magicballInput").value;
      check(givenValue).then((resp) => {
          document.getElementById("result").innerText = atob(resp);
      })
      document.getElementById("magicballInput").value = ""
  })
})