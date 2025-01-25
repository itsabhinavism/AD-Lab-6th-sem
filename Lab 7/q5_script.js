function highlightKeyword() {
    const keyword = document.getElementById('keywordInput').value.toLowerCase();
    const paragraphs = document.querySelectorAll('#content p');

    paragraphs.forEach(paragraph => {
        if (paragraph.textContent.toLowerCase().includes(keyword)) {
            paragraph.classList.add('highlight');
        } else {
            paragraph.classList.remove('highlight');
        }
    });
}
