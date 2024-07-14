function Anmelden(){
    let FirstName = document.getElementById("FirstName").value
    let LastName = document.getElementById("LastName").value

    if(FirstName != "" && LastName != "")
    {
        window.open("chatroom.html")


        //Neue nutzer in der Datenbank Einbinden


    }
    else{
        window.alert("Please Enter you First and Last name")
    }
}
