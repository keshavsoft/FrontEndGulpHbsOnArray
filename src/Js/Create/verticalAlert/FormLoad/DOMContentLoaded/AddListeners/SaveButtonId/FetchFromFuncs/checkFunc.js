let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");

    // Select all inputs with "required" attribute
    let requiredInputs = jVarLocalForm.querySelectorAll("input[required], select[required], textarea[required]");

    for (let input of requiredInputs) {
        if (!input.value.trim()) {
            // Highlight the input (optional)
            input.style.border = "1px solid red";

            return false; // stop here → form validation failed
        }
    }

    return true; // all required fields are filled
};

export { StartFunc };
