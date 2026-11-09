import data from "./test.json" with { type: "json" };

function showObject(word) {
    console.log(word);
}
for (let i = 0; i < data.objectX.length; i++) {
    showObject(data.objectX[i]);
}