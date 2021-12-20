function send() {
    var text = document.getElementById("pole").value;
    text = text.split(/ +/g)
    console.log(text)
    if (!text[0] && !text[1]) return
    document.getElementById("controls").innerHTML = `<input type="text" id="pole" name="text" placeholder="Aa" required /> <input type="submit" value=" > " name="text" onclick="send()" />`
    document.getElementById("TEXT").innerText = text.join(" ")
}