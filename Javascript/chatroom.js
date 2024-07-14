
function KontaktHinzufuegen() {
    let input = document.getElementById("Kontaktname").value;
    if (input.trim() !== "") {
        // Aktion ausführen, wenn die Input-Box nicht leer ist
        console.log('Neuer Kontaktname:', input);
        
        // Neue KontaktBox erstellen und zur KontaktListe hinzufügen
        let kontaktListe = document.getElementById("KontaktBox");
        let neueKontaktBox = document.createElement("div");
        neueKontaktBox.id = "Kontaktname" + input;
        neueKontaktBox.className = "card KontaktBox";
        neueKontaktBox.onclick = function() { ChatAufruf(input); };
        neueKontaktBox.innerHTML = `
            <img src="/Image/DefaultProfilPicture.jpg" alt="Profilbild">
            <span class="name">${input}</span>
        `;
        kontaktListe.appendChild(neueKontaktBox);
        
        // Input-Feld nach dem Hinzufügen leeren
        document.getElementById("Kontaktname").value = "";
    } else {
        console.log('Die Input-Box ist leer.');
        // Optionale Aktion, wenn die Input-Box leer ist
        alert('Bitte geben Sie einen Kontaktname ein.');
    }
}

function ChatAufruf(Name) {
    let chat = document.getElementById("Chat");
    chat.innerHTML = ""; // Vorherigen Inhalt entfernen

    let neuerChat = document.createElement("div");
    neuerChat.className = "chat-content"; // Neue Klasse, um Styling zu vereinfachen
    neuerChat.innerHTML = `
    <div class="NavbarKontakt">
        <img src="/Image/DefaultProfilPicture.jpg" alt="Profilbild" class="NavbarProfilbild" id="ProfilbildChat">
        <span class="NavbarName" id="NameChat">${Name}</span>
      </div>
      <div class="Chatgröße">
          <div class="Nachrichtunten">
              <!-- Nachricht die man gesendet bekommt -->
              <div class="card EmpfängerNachricht" id="Empfangen">
                  <div class="card-body Nachricht">
                      Habe ich Empfangen
                  </div>
              </div>
              <!-- Nachricht die man selbst schreibt -->
              <div id="Geschrieben">
            </div>
          </div>
      </div>
      <div class="TextBarEinteilung">
          <div class="mb-3 Textbar">
              <input type="text" id="fname" name="fname"><br><br>
          </div>
          <div>
            <button type="button" class="btn btn-primary abschicken" id="absenden" onclick="senden()">Absenden</button>
          </div>
      </div>
    
    `

    chat.appendChild(neuerChat);
    ChatAufrufen()
    let input = document.getElementById("fname")
        input.addEventListener("keypress",function(event){
        if(event.key ==="Enter")
        {
            senden();
        }
        })
}
function senden()
{
    let text = document.getElementById("fname").value

    let Nachricht = document.createElement("div");
    Nachricht.className = "card SenderNachricht"
    Nachricht.innerHTML = `
        <div class="card-body ">
            ${text}
        </div>
    `
    document.getElementById("Geschrieben").appendChild(Nachricht) 

    document.getElementById("fname").value = ``
}

function ChatAufrufen() 
{
    fetch("../datenbank/messages/CarstensChat.json")
    .then(response => response.text())
    .then(data =>{
        console.log(data)
    }) 
}
