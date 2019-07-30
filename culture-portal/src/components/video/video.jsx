import React from 'react';
import ModalVideo from 'react-modal-video';
import { Button } from 'react-bootstrap';
import './video.css';


class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="video-block">
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => this.setState({ isOpen: false })}
        />
        <Button variant="light" size="lg" className="video-button" role="button" onClick={this.openModal}>Open Video</Button>
      </div>
    );
  }
}

export default Video;
