function calculateScore() {
    const answers = {
        q1: 'a',
        q2: 'b',
        q3: 'c'
    };

    let score = 0;

    for (const question in answers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === answers[question]) {
            score++;
        }
    }

    const totalQuestions = Object.keys(answers).length;
    const scoreMessage = `You scored ${score} out of ${totalQuestions}.`;
    document.getElementById('score').textContent = scoreMessage;

    return false;
}
