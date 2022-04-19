import React, { Component } from "react";

export default class SingleImageUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.uploadSingleFile = this.uploadSingleFile.bind(this);
    this.upload = this.upload.bind(this);
  }

  uploadSingleFile(e) {
    this.setState({
      file: URL.createObjectURL(e.target.files[0]),
    });
  }

  upload(e) {
    e.preventDefault();
    console.log(this.state.file);
  }
  onClick = () => {
    console.log(this.state.file);
  };

  render() {
    let imgPreview;
    if (this.state.file) {
      this.props.setImage(this.state.file);
      
    }
  
    return (
      <div>
          <div className="form-group">
            <input
              type="file" 
               onChange={(e) => {
                this.props.setImage(
                  Object.assign(e.target.files[0], {
                    preview: URL.createObjectURL(e.target.files[0]),
                  })
                );
              }}
            />
          </div>
      </div>
    );
  }
}
