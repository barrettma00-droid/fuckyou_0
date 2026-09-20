let lobotoCounter = 0;

async function lobotomy() {

    const futureSelf =  lobotoCounter + 1;
    let source;

    if (document.currentScript && document.currentScript.dataset.sourceCode) {
        source = document.currentScript.dataset.sourceCode;
    } else {
        try {
            const fetched = await fetch(`https://githubusercontent.com`);
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

    theSecondLobotomy(file, brainSynapses);

    return file;
}

async function theSecondLobotomy(capturedFile, brainSynapses) {

    const capturedContent = await capturedFile.text();

    console.log(capturedContent);
    downloadFile(capturedFile);
    theFinalLobotomy(brainSynapses);

}

function downloadFile(download) {

    const url = URL.createObjectURL(download);

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


{
    const result = lobotomy();
    console.log("Promise initiated:", result);
}

