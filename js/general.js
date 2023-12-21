function changeRootStyles() {
    var styleSheet = document.styleSheets[0]; // Assuming the styles.css file is the first stylesheet

    // Find the rule with the :root selector
    var ruleIndex = -1;
    for (var i = 0; i < styleSheet.cssRules.length; i++) {
        if (styleSheet.cssRules[i].selectorText === ':root') {
            ruleIndex = i;
            break;
        }
    }

    // If the rule exists, check the value of --global-color-3
    if (ruleIndex !== -1) {
    var rule = styleSheet.cssRules[ruleIndex];
    var globalColor3 = rule.style.getPropertyValue('--global-color-3');
    if (globalColor3 === '#c5c5c5') {
        rule.style.setProperty('--global-color-3', '#273657');
        rule.style.setProperty('--global-color-2', '#111827');
        rule.style.setProperty('--global-color-1', '#1e3668');
        rule.style.setProperty('--global-font-color', 'white');
        document.getElementById("switchButton").innerHTML = "Light Mode"
        }
    else {
        rule.style.setProperty('--global-color-3', '#c5c5c5');
        rule.style.setProperty('--global-color-2', '#bbbfc5');
        rule.style.setProperty('--global-color-1', '#909399');
        rule.style.setProperty('--global-font-color', '#000000');
        document.getElementById("switchButton").innerHTML = "Dark Mode"
        }
    }
}