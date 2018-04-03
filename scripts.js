// Global Variable Declarations
let testEN = [
    "apple",
    "ball",
    "cat",
    "dog",
    "elephant",
    "frog",
    "apple",
    "ball",
    "cat",
    "dog",
    "elephant",
    "frog"
],

testCN = [
    "蘋果",
    "球",
    "貓",
    "狗",
    "大象",
    "青蛙",
    "蘋果",
    "球",
    "貓",
    "狗",
    "大象",
    "青蛙"
];

combineVocab(testEN, testCN);

// Takes 2 arrays English Words and Chinse Words and combines them into 1 object
// with the key being English and the value being Chinese
function combineVocab(en, cn) {
    let newTest = {};
    let toggle = true;

    // Object Builder
    for (i=0; i<en.length; i++) {
        newTest[en[i]] = cn[i];
    }

    buildPDF(newTest);  // Sends this new object to be constructed
}

function buildPDF(vocab) {
    let doc = new jsPDF('landscape');

    let keysArray = Object.keys(vocab),
        valuesArray = Object.values(vocab);

    let runTime = Math.ceil(keysArray.length / 6);

    for (i=0; i<runTime; i++) {
        for (j=i; j<i+6; j++) {
            setsOfSix(doc, keysArray, j);
        }
        for (h=i; h<i+6; h++) {
            setsOfSix(doc, valuesArray, h);
        }
    }

    doc.output('save', 'Flash-Cards.pdf'); // Comment this out to stop it from saving every single time #LessonsLearned
    
}

function setsOfSix(doc, wordList, i) {
    let x, y;  // mm for A4

    if (i < 3) {
        y = 50;
        x = 50 + (99*i) - wordList[i].length;
    } else {
        y = 155;
        x = 50 + (99*(i-3)) - wordList[i].length;
    }
    
    console.log(wordList[i]);  // Problem: Chinese words are logged correctly but aren't rendered properly on the pdf file.  English words are fine.

    doc.text(x, y, wordList[i]);
    
    if (i == 5) {
        doc.addPage();
    }

    return doc;
}