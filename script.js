function findDiamonds() {
    const seed = document.getElementById('seed').value;
    const resultsDiv = document.getElementById('results');
    if (seed) {
        // Mock logic for finding diamond coordinates (replace with actual logic)
        const diamonds = [
            { x: Math.floor(Math.random() * 1000), y: Math.floor(Math.random() * 100), z: Math.floor(Math.random() * 1000) },
            { x: Math.floor(Math.random() * 1000), y: Math.floor(Math.random() * 100), z: Math.floor(Math.random() * 1000) }
        ];
        let output = '<h3>Diamonds found at:</h3><ul>';
        diamonds.forEach(diamond => {
            output += `<li>(${diamond.x}, ${diamond.y}, ${diamond.z})</li>`;
        });
        output += '</ul>';
        resultsDiv.innerHTML = output;
    } else {
        resultsDiv.innerHTML = 'Please enter a valid seed.';
    }
}
