
let lobotoCounter = 0;


async function lobotomy() {

    const futureSelf =  lobotoCounter + 1;

    const fetched = await fetch(`https://raw.githubusercontent.com/barrettma00-droid/fuckyou_0/main/fuckyou_0.js`);
    const source = await fetched.text();

    const brainSynapses = source.replace(
        `let lobotoCounter = ${lobotoCounter};` ,
        `let lobotoCounter = ${futureSelf};`
    );

    const file = new File([brainSynapses], `fuckyou_${futureSelf}.js`, {
        type: "text/javascript",
    });


    theSecondLobotomy(file);

    return file;

}

async function theSecondLobotomy(capturedFile) {

    const capturedContent = await capturedFile.text();

    console.log(capturedContent)
    const dowloadedFile = downloadFile(capturedFile);
    theFinalLobotomy();
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

function theFinalLobotomy(string) {

    const blob = new Blob([string], { type: 'text/javascript'});
    const blobsPlace = URL.createObjectURL(blob);

    const theNeedle = document.createElement('script');
    theNeedle.src = blobsPlace;

    script.onload = () => {

        //Comment this if you want to suffer
        URL.revokeObjectURL(blobsPlace);

    }

}


const result =  lobotomy();

console.log(result);

