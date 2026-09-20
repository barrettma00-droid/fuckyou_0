
let lobotoCounter = 0;


async function lobotomy() {

    const futureSelf =  lobotoCounter + 1;

   let source;

    if (document.currentScript && document.currentScript.dataset.sourceCode) {
         source = document.currentScript.dataset.sourceCode;
    } else {

        try {
            const fetched = await fetch(`https://raw.githubusercontent.com/barrettma00-droid/fuckyou_0/refs/heads/main/fuckyou_0.js`);
             source = await fetched.text();
        } catch (e) {
            console.error("Could not fetch base script content.");
            return;
        }
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
    theFinalLobotomy(brainSynapses);
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

    theNeedle.dataset.sourceCode = string;

    theNeedle.onload = () => {

        //Comment this if you want to suffer
        URL.revokeObjectURL(blobsPlace);

    };

    document.head.appendChild(theNeedle);

}


const result =  lobotomy();

console.log(result);

