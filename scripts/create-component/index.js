#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const prompt = require('prompt-sync')();
const fs = require('fs');
const path = require('path');
const { exit } = require('process');

// import templates for 'modern' preset
const getTsx = require('./templates/tsx-template');
const getCss = require('./templates/css-template');
const getInterfaces = require('./templates/interfaces-template');
const getTsResources = require('./templates/ts-resources-template');

// import templates for 'pure' preset
const getJsx = require('./templates/jsx-template');
const getJsResources = require('./templates/js-resources-template');

// utilities
const { toCssClassName, yesOrNoFromString } = require('./util');

//----------------------------------
//  Parsing Command Options
//----------------------------------

let names = [], dir = process.cwd(), preset = 'modern';

program
    .version('1.0.0')
    .argument('names', 'Component name(s)', (val) => { if (val) names.push(val); })
    .option(
        '-p --preset [modern | pure]',
        `Choose a component template set.
'modern'(default): Typescript/Sass
'pure': JavaScript/CSS`, (val) => { if (val) preset = val; })
    .option('-d --directory [dir]', 'Directory to store your component', (val) => { if (val) dir = val; })
    .parse(process.argv);

//----------------------------------
//  Validating Command Options
//----------------------------------

// The argument is mandatory
if (!names || names.length === 0) {
    console.error('You have to specify name(s) for the component(s)');
    exit(-1);
}

// Use specified directory or current working directory
if (!fs.existsSync(dir)) {
    console.warn(chalk.yellow(`Directory "${dir}" does not exist.`));
    const inputStr = prompt(chalk.yellow(`Do you wish to create one [y/n]: `));
    if (yesOrNoFromString(inputStr)) {
        process.stdin.write(chalk.green(`Creating directory ${dir}...`));
        fs.mkdirSync(dir);
        process.stdin.write(chalk.green(` Successful\n`));
    } else {
        console.log(chalk.green("Program terminating with no modifications..."));
        exit(0);
    }

}

//----------------------------------
//  Convenient Functions
//----------------------------------

function writeFileWarnOverwrite(filePath, fileContent) {
    if (fs.existsSync(filePath)) {
        if (yesOrNoFromString(prompt(chalk.yellow.bold(filePath) + chalk.yellow(' already exists. Do you wish to overwrite it [y/n]: ')))) {
            fs.writeFileSync(filePath, fileContent);
        } else {
            console.log(chalk.green(`Ignoring file ${filePath} ...`));
        }
    } else {
        fs.writeFileSync(filePath, fileContent);
    }
}

/**
 * Create components files under comDir with file path and content pairs
 * Expect files to be like
 * [
 *      {
 *          path: string
 *          content: string
 *      }
 * ]
 * @param {*} comDir    component directory.
 * @param {*} files     file path and file content pairs array
 */
function createComponent(comDir, files) {
    // Create directory using class name of the component
    if (!fs.existsSync(comDir)) {
        fs.mkdirSync(comDir);
    }
    files.forEach((file) => {
        writeFileWarnOverwrite(file.path, file.content);
    })
}

//----------------------------------
//  Executing Commands
//----------------------------------

/**
 * Three types of component name is generated
 * Example name - 'HelloWorld' (or 'helloWorld')
 * 1. Class Name                - 'HelloWorld'
 * 2. CSS Class Name            - 'hello-world'
 * 3. Class Name in Camel Case  - 'helloWorld'
 */
let validCount = 0;
names.forEach((name, index) => {
    // Getting component's class name
    const className = name.charAt(0).toUpperCase() + name.substring(1, name.length);
    // Report activities
    process.stdout.write(chalk.green("Creating component ") + chalk.green.bold(className) + "...\n");
    /** 
     * Constraint on the component name
     */
    // Must be valid class identifier
    if (!(/^[A-z]+$/.test(name))) {
        process.stderr.write(chalk.red(` Failed. Component name "${name}" is not a valid javascript class identifier.\n`));
        return;
    }
    // Must not have adjacent uppercase letters
    if ((/[A-Z][A-Z]/.test(name))) {
        process.stderr.write(chalk.red(` Failed. Component name "${name}" has adjacent uppercase letters, which is not allowed\n`));
        return;
    }

    // Getting component's CSS class name
    const cssName = toCssClassName(name);
    // Getting component's class name in camel case
    const camelName = name.charAt(0).toLowerCase() + name.substring(1, name.length);
    // Getting component's own directory
    const comDir = path.join(dir, className);

    if (preset === 'modern') {
        createComponent(comDir, [{
            path: path.join(comDir, className + '.tsx'),
            content: getTsx(className)
        }, {
            path: path.join(comDir, className + '.scss'),
            content: getCss(cssName)
        }, {
            path: path.join(comDir, 'interfaces.d.ts'),
            content: getInterfaces(className)
        }, {
            path: path.join(comDir, 'resources.ts'),
            content: getTsResources(className, cssName, camelName)
        }]);
    } else if (preset === 'pure') {
        createComponent(comDir, [{
            path: path.join(comDir, className + '.jsx'),
            content: getJsx(className)
        }, {
            path: path.join(comDir, className + '.css'),
            content: getCss(cssName)
        }, {
            path: path.join(comDir, 'resources.js'),
            content: getJsResources(className, cssName, camelName)
        }]);
    }

    // Report success
    process.stdout.write(chalk.green("Creating component ") + chalk.green.bold(className) + " Successful\n");
    validCount++;
});

//----------------------------------
//  Finalize
//----------------------------------

console.log(chalk.green(`^_^ Totally ${validCount} component(s) created for you.`));
console.log(chalk.yellow("<<< Happy coding! >>>"));
exit(0);