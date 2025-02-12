function findDiamonds() {
    const seed = document.getElementById('seed').value;
    const resultsDiv = document.getElementById('results');
    if (seed) {
        // Here you would add the logic to fetch and display the diamond coordinates
        resultsDiv.innerHTML = `Finding diamonds for seed: ${seed}`;
    } else {
        resultsDiv.innerHTML = 'Please enter a valid seed.';
    }
}
