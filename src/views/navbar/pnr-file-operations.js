import jsontoxml from 'jsontoxml'

export function saveJsonToBrowser(pnr) {
    const jsonData = pnr;
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'pnr.json';
    link.href = url;
    link.click();
}

export function saveXmlToBrowser(pnr) {
    const xmlData = jsontoxml(pnr);
    const blob = new Blob([xmlData], { type: "text/xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'pnr.xml';
    link.href = url;
    link.click();
}
