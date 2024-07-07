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
            <div class="card EmpfängerNachricht">
                <div class="card-body">
                    Habe ich Empfangen
                </div>
            </div>
            <!-- Nachricht die man selbst schreibt -->
            <div class="card SenderNachricht">
                <div class="card-body">
                    Habe ich gesendet
                </div>
            </div>
        </div>
    </div>
    <div class="TextBarEinteilung">
        <div class="mb-3 Textbar">
            <input type="text" id="fname" name="fname"><br><br>
        </div>
    </div>
    
    `;

    chat.appendChild(neuerChat);
}
