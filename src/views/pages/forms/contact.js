import { h } from 'preact'
import TextField from 'preact-material-components/TextField'
import Button from 'preact-material-components/Button'
import LinearProgress from 'preact-material-components/LinearProgress'

import 'preact-material-components/LinearProgress/style.css'
import 'preact-material-components/Button/style.css'
import 'preact-material-components/TextField/style.css'

const color = 'rgb(7, 79, 128)'

export default function ({ requestId }) {
  const { uploading } = this.state
  const clickUpload = () => {
    const elem = document.getElementById('fileupload')
    elem.click()
    this.setState({ uploading : !uploading })
    // elem.addEventListenner('change', )
  }

  const postForm = async () => {
    const result = await fetch(`http://localhost:3051/contact/${requestId}`, {
      method: 'POST',
      mode: 'cors'
    })
    console.log(result)
  }


  const uploadFile = async (e) => {
    e.preventDefault()
    const body = this.fileInput.files[0]
    const result = await fetch(`http://localhost:3051/contact/${requestId}/upload`, {
      method: 'POST',
      body
    })
    console.log(result)
  }

  const color = '#6592a7'

  return (
    <div className="contact">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        maxWidth: '800px'
      }}>
        <TextField type="text" name="name" label="Nom" />
        <TextField type="email" name="email" label="Email" />
        <Button ripple raised primary onClick={clickUpload} disabled={uploading}>
          Upload
          <input type="file" id="fileupload" name="attachment" style={{
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          ref={input => { this.fileInput = input }}
          onChange={uploadFile}
          />
        </Button>
        <LinearProgress progress={0} indeterminate={uploading} />
        <div style={{
          minHeight: '50px'
        }}></div>
        <TextField textarea fullwidth name="message" label="Votre message" />
        <Button raised ripple onClick={postForm}>
          Envoyer
        </Button>
      </div>
    </div>
  )
}


