
function toggleDarkMode() {
    var element1 = document.body;
    var element2 = document.header;
    var element3 = document.querySelector('form');
    var element4 = document.querySelector('p');
    var element5 = document.querySelector('section');
    element1.classList.toggle("dark-mode");
    element2.classList.toggle("dark-mode");
    element3.classList.toggle("dark-mode");
    element4.classList.toggle("dark-mode");
    element5.classList.toggle("dark-mode");


}


function changeRootStyles() {
    var styleSheet = document.styleSheets[0]; // Assuming the styles.css file is the first stylesheet
    console.log(document.styleSheets)

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
    console.log(rule);
    var globalColor3 = rule.style.getPropertyValue('--global-color-3');
    console.log(globalColor3);
    if (globalColor3 === '#c5c5c5') {
        rule.style.setProperty('--global-color-3', '#273657');
        rule.style.setProperty('--global-color-2', '#111827');
        rule.style.setProperty('--global-color-1', '#1e3668');
        }
    else {
        rule.style.setProperty('--global-color-3', '#c5c5c5');
        rule.style.setProperty('--global-color-2', '#bbbfc5');
        rule.style.setProperty('--global-color-1', '#909399');
        }
    }
}