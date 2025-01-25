function changeFont() {
    const selectedFont = document.getElementById('fontSelect').value;
    const dynamicText = document.getElementById('dynamicText');
    dynamicText.style.fontFamily = selectedFont;
}
