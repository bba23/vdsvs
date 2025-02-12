function findDiamonds() {
    const seed = document.getElementById('seed').value;
    const resultsDiv = document.getElementById('results');
    if (seed) {
        const diamonds = [];
        for (let i = 0; i < 10; i++) { // Generate 10 coordinates as an example
            const x = Math.floor(Math.random() * 1000);
            const y = Math.floor(Math.random() * 15) + 1; // Y-levels 1 to 15
            const z = Math.floor((Math.random() * 1000);
            const count = Math.floor(Math.random() * 10) + 1; // Diamond count
            diamonds.push({ x y z count });
        }
        let output = '<h3>Diamonds found at:</h3><ul>';
        diamonds.forEach(diamond => {
            output += `<li>(${diamond.x}, ${diamond.y}, ${diamond.z}) - ${diamond.count} diamonds</li>`;
        });
        output += '</ul>';
        resultsDiv.innerHTML = output;
    } else {
        resultsDiv.innerHTML = 'Please enter a valid seed.';
    }
}
