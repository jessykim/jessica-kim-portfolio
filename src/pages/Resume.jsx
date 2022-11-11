import { React, useState } from 'react'
import styles from '../styles/Resume.module.css'
import resume from '../utilities/resume.pdf'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Resume() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [leftDisabled, setLeftDisabled] = useState(true)
  const [rightDisabled, setRightDisabled] = useState(false)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  function changePage() {
    if (pageNumber === 1) {
      setPageNumber(2)
      setLeftDisabled(false)
      setRightDisabled(true)
    } else {
      setPageNumber(1)
      setRightDisabled(false)
      setLeftDisabled(true)
    }
  }

  return (
    <>
      <div className={styles.resume}>
        <h1>Resume</h1>
        <div className={styles.pageControls}>
          <button 
            disabled={leftDisabled}
            type='button' 
            onClick={changePage}
          >
            ‹
          </button>
          <p>{pageNumber} of {numPages}</p>
          <button 
            disabled={rightDisabled}
            type='button' 
            onClick={changePage}
          >
            ›
          </button>
        </div>
        <div className={styles.resumePdf}>
          <Document
            file={resume}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
            externalLinkTarget="_blank"
            className={styles.document}
          >
            <Page 
              pageNumber={pageNumber}
              className={styles.page}
            />
          </Document>
        </div>
        <div className={styles.download}>
          <a href={resume} download='Jessica_Kim_Resume'>
            <button>Download Resume</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Resume;