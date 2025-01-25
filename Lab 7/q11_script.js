function updateWordCount() {
    const sentence = document.getElementById('sentenceInput').value;
    const words = sentence.trim().split(/\s+/);
    const wordCount = words.length;
    document.getElementById('wordCount').textContent = wordCount;
}
