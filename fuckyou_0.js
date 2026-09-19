
let lobotoCounter = 0;


async function lobotomy() {

    const futureSelf =  lobotoCounter + 1;

    const fetched = await fetch(`https://raw.githubusercontent.com/barrettma00-droid/fuckyou_0/refs/heads/main/fuckyou_0.js`);
    const source = await fetched.text();

    const brainSynapses = source.replace(
        `let lobotoCounter = ${lobotoCounter};` ,
        `let lobotoCounter = ${futureSelf};`
    );

    const file = new File([brainSynapses], `fuckyou_${lobotoCounter}.js`, {
        type: "text/javascript",
    });


    theSecondLobotomy(file);

    return file;

}

async function theSecondLobotomy(capturedFile) {

    const capturedContent = await capturedFile.text();

    console.log(capturedContent)
    const dowloadedFile = downloadFile(capturedFile);
    console.log(downloadFile)

}

function downloadFile(download) {

    const url = URL.createObjectURL(download)

    const link = document.createElement("a");
    link.href = url;
    link.download = download.name;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);



}


const result =  lobotomy();

console.log(result);

