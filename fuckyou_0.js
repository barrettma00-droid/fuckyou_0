
let lobotoCounter = 0;


async function lobotomy() {

    const futureSelf =  lobotoCounter + 1;

    const currentScriptUrl = document.currentScript ? document.currentScript.src : window.location.href;

    let source;
    try {
        const fetched = await fetch(currentScriptUrl);
        source = await fetched.text();
    } catch (e) {
        // Fallback to GitHub only if the local blob/file path fails to fetch
        const fetched = await fetch(`https://raw.githubusercontent.com/barrettma00-droid/fuckyou_0/main/fuckyou_0.js`);
        source = await fetched.text();
    }

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
    theFinalLobotomy(capturedContent);
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

async function theFinalLobotomy(string) {

    const blob = new Blob([string], { type: 'text/javascript'});
    const blobsPlace = URL.createObjectURL(blob);

    const theNeedle = document.createElement('script');
    theNeedle.src = blobsPlace;

    theNeedle.onload = () => {

        //Comment this if you want to suffer
        URL.revokeObjectURL(blobsPlace);

    };

    document.head.appendChild(theNeedle);

}


const result =  lobotomy();

console.log(result);

