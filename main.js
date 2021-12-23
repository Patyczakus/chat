var mainText = ""

var username, colorUserID, text

const colors = [
    "purple",
    "green",
    "yellow",
    "coral",
    "cornflowerblue",
]

const images = [
    "av1.jpg",
    "av2.jpg",
    "specjalAvatar.png",
    "avByAntek1.jpg",
    "avByAntek2.jpg",
]

var avatarID = 0
// ---------------------------------------------------------------------------

function changeAvatar(number) {
    document.getElementById("img").innerHTML = `<img src="img/avatars/${images[number]}" width="45px" height="45px" class="image">`
    avatarID = number
}

function start() {
    username = document.getElementById("nick").value
    if (!username) return document.getElementById("blad").innerText = "❌ Podaj nick!"
    if (~username.indexOf(" ")) return document.getElementById("blad").innerText = "❌ Nick nie może zawierać spacji!"
    if (username.length < 3 || username.length > 15) return document.getElementById("blad").innerText = "❌ Sprawdź poprawność nicku - nick musi mieć od 3 do 15 znaków!"
    document.getElementById("boxy").innerHTML = `
    <input type="submit" value=">" name="text" onclick="send()" class="pointer" style="width: calc(5% - 10px); font-weight: bold;" /> <input type="text" id="pole" placeholder="Aa" name="text" />
    <div id="TEXT"></div>
    `
}

function send() {
    text = document.getElementById("pole").value;
    text = text.replace("<", "&lt;")
    text = text.split(/ +/g)
    if (!text[0] && !text[1]) return
    if (text.join(" ").length > 200) return document.getElementById("pole").value = "";
    document.getElementById("pole").value = "";
    colorUserID = Math.floor(Math.random() * colors.length)
    mainText += `
    <div class="boxA" style="border-left-color: ${colors[colorUserID]};">
    <div class="image"><img src="img/avatars/${images[avatarID]}" width="45px" height="45px" class="image" /></div>
    <div class="boxB">
        <div class="user">${username}</div>
        <div class="text">${text.join(" ")}</div>
    </div>
    </div>
    `
    sendFirebase(username, text.join(" "), colorUserID, avatarID)
    document.getElementById("TEXT").innerHTML = mainText
}

function sendFirebase(username, text, colorID, imageID) {
    var postData = {
        author: username,
        text: text,
        colorID: colorID,
        imageID: imageID,
    };
  
    // Write the new message
    var updates = {};
    updates['/message'] = postData;

    return firebase.database().ref().update(updates);
}