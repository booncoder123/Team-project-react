import React, { Component } from 'react';
export default class MultipleImageUploadComponent extends Component {
  fileObj = [];
  fileArray = [];
  resultArray = [];
  constructor(props) {
      super(props)
      this.state = {
          file: [null]
      }
      this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
      this.uploadFiles = this.uploadFiles.bind(this)
  }
  uploadMultipleFiles(e) {
      this.fileObj.push(e.target.files)
      for (let i = 0; i < this.fileObj[0].length; i++) {
          this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
      }
      this.setState({ file: this.fileArray })
  }
  uploadFiles(e) {
      e.preventDefault()
      console.log(this.state.file)
  }
  render() {
    let imgPreview;
    return (
      <form>
        <div className="form-group">
          <input type="file" 
          className="form-control" 
          onChange={(e) => {
            this.fileObj.push(e.target.files)
            for (let i = 0; i < this.fileObj[0].length; i++) {
              this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
              const object = Object.assign(this.fileObj[0][i], {
                preview: URL.createObjectURL(this.fileObj[0][i]),
              })
              this.resultArray.push(object)
            }
            this.setState({ file: this.fileArray })
            this.props.setImage({ file: this.resultArray })
          }} 
          multiple 
        />
        </div>
      </form >
    )
  }
}