// Predefined scenarios and their probabilities
const options = [
    { scenario: 'rain', probability: 'High Probability (70-80%)' },
    { scenario: 'storm', probability: 'High Probability (70-80%)' },
    { scenario: 'sun', probability: 'Moderate Probability (50-60%)' },
    { scenario: 'clear skies', probability: 'Moderate Probability (50-60%)' },
    { scenario: 'snow', probability: 'Low Probability (30-40%)' },
    { scenario: 'hail', probability: 'Low Probability (30-40%)' },
    { scenario: 'win', probability: '50-50 Chance' },
    { scenario: 'victory', probability: '50-50 Chance' },
    { scenario: 'lose', probability: 'Unlikely (20-30%)' },
    { scenario: 'defeat', probability: 'Unlikely (20-30%)' },
    { scenario: 'party', probability: 'Event-related Probability (50%)' },
    { scenario: 'meeting', probability: 'Event-related Probability (50%)' },
    { scenario: 'trip', probability: 'Event-related Probability (50%)' },
];

// Default response for unrecognized scenarios
const defaultResponse = 'This scenario is too specific to calculate, please try a different one.';

// Fuzzy matching setup
const fuse = new Fuse(options, { keys: ['scenario'] });

// Event listener for the Calculate Probability button
document.getElementById('calculateBtn').addEventListener('click', function() {
    const scenario = document.getElementById('scenario').value.toLowerCase();
    const result = fuse.search(scenario);

    let probability;

    if (result.length > 0) {
        probability = result[0].item.probability;
    } else {
        probability = defaultResponse;
    }

    document.getElementById('result').innerText = `The probability of "${scenario}" is: ${probability}`;
});
