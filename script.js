document.getElementById("yes").addEventListener("click", function () {
    document.getElementById("message").innerText = "Yaay! ❤️ I lovee youuu!";
});

document.getElementById("no").addEventListener("mouseover", function () {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
