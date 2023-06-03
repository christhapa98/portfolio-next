import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
// import pdf from "../../public/cv.pdf";

const pdfUrl: string = "./cv.pdf";

import workerSrc from "../../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
    const [file, setFile] = useState(pdfUrl);
    return (
        <div>
            <Document file={file}>
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}
