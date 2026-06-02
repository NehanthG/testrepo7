const core= require('@actions/core');
const github = require('@actions/github');

try {
    const jsNum1 = core.getInput('num1');
    const jsNum2 = core.getInput('num2');
    const sum = parseInt(jsNum1) + parseInt(jsNum2);
    console.log(`The sum of ${jsNum1} and ${jsNum2} is: ${sum}`);
    core.setOutput('result', sum);
} catch (error) {
    core.setFailed(error.message);
}