document.getElementById('mindscale-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const indoors = document.getElementById('days-indoors').value;
    const treatment = document.querySelector('input[name="treatment"]:checked').value;
    const resultsBox = document.getElementById('results-display');
    const recText = document.getElementById('recommendation-text');

    let advice = "";

    if (indoors === "high" && treatment === "No") {
        advice = "Alert: Prolonged indoor stays without recent clinical support detected. We recommend a consultation with DeKUT health services.";
    } else if (indoors === "medium") {
        advice = "Observation: Your indoor habits are moderate. Ensure you balance academic study with outdoor social activity.";
    } else {
        advice = "Status: Your wellness metrics appear stable. Continue your current routine.";
    }

    recText.textContent = advice;
    resultsBox.style.display = "block";
});