function getEdpi() {
    const dpi = document.getElementById("dpi").value;
    const sensitivity = document.getElementById("sensitivity").value;
    document.getElementById("result").innerHTML = (dpi <= 3000 && dpi > 0 && sensitivity > 0 && sensitivity <= 8) ? dpi * sensitivity : "Stupid?";
};