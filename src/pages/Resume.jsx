import { React, useState }from 'react'
import resume from '../utilities/resume.pdf'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Resume() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [leftDisabled, setLeftDisabled] = useState(true);
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
    <div>
      <h1>Resume</h1>
      <div className='resume-pdf'>
        <Document
          file={resume}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
          style={{ width: '100vw', height: 'auto' }}
          className='react-pdf__Page'
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <div className='page-controls'>
        <button 
          disabled={leftDisabled}
          type='button' 
          onClick={changePage}
        >
          ‹
        </button>
        <span>{pageNumber} of {numPages}</span>
        <button 
          disabled={rightDisabled}
          type='button' 
          onClick={changePage}
        >
          ›
        </button>
      </div>
      <div className='download-btn'>
        <a href={resume} download='Jessica_Kim_Resume'>
          <button>Download Resume</button>
        </a>
      </div>
    </div>
  )
}

export default Resume;