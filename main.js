var mainText = ""
var username
const colors = [
    "purple",
    "green",
    "yellow",
    "coral",
    "cornflowerblue",
]

// ---------------------------------------------------------------------------

function start() {
    username = document.getElementById("nick").value
    if (!username) return document.getElementById("blad").innerText = "❌ Podaj nick!"
    if (~username.indexOf(" ")) return document.getElementById("blad").innerText = "❌ Nick nie może zawierać spacji!"
    if (username.length < 3 || username.length > 15) return document.getElementById("blad").innerText = "❌ Sprawdź poprawność nicku - nick musi mieć od 3 do 15 znaków!"
    document.getElementById("boxy").innerHTML = `
    <input type="submit" value=">" name="text" onclick="send()" style="width: calc(5% - 10px); font-weight: bold;" /> <input type="text" id="pole" placeholder="Aa" name="text" />
    <div id="TEXT"></div>
    `
}

function send() {
    var text = document.getElementById("pole").value;
    text = text.replace("<", "&lt;")
    text = text.split(/ +/g)
    if (!text[0] && !text[1]) return
    document.getElementById("pole").value = "";
    mainText += `
    <div class="boxA" style="border-left-color: ${colors[Math.floor(Math.random() * colors.length)]};">
    <div class="user">${username}</div>
    <div class="text">${text.join(" ")}</div>
    </div>
    `
    document.getElementById("TEXT").innerHTML = mainText
}