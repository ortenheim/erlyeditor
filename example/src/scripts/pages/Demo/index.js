import { autobind } from 'core-decorators';
import React, { Component } from 'react';
import css from 'react-css-modules';
import { tooltip, Button, Player, Html5Video, Editor, Slider } from 'erlyeditor';

import styles from './styles';

const videos = [
  'http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov',
  'http://users.wfu.edu/yipcw/atg/vid/katamari-star8-10s-h264.mov',
  'http://media.w3.org/2010/05/sintel/trailer.mp4',
  'http://media.w3.org/2010/05/video/movie_300.mp4',
  'https://google.com'
];

const TooltipButton = tooltip(Button);

export class Demo extends Component {
  state = { value: 50 };

  @autobind
  handleChange(value) {
    this.setState({ value: Number(value) });
  }

  renderPlayer() {
    const video = (
      <Html5Video autoPlay
        width={427}
        height={240}
        src={videos[0]}
      />
    );

    return (
      <Player width={427}>{video}</Player>
    );
  }

  renderSlider() {
    return (
      <div styleName='pad'>
        <Slider vertical
          value={this.state.value}
          size={'200px'}
          thickness={'10px'}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  renderTooltipButton = () => <TooltipButton icon='play_arrow' tooltipText='my awesome tooltip' />;

  renderButton() {
    return (
      <Button icon='fullscreen' />
    );
  }

  renderHtml5Video() {
    return (
      <Html5Video
        autoPlay
        muted
        width={640}
        height={480}
        src={videos[0]}
      />
    );
  }

  renderEditor() {
    return (
      <Editor player={{ width: 640, height: 480 }} />
    );
  }

  render() {
    return (
      <div styleName='root'>
        {this.renderEditor()}
      </div>
    );
  }
}

export default css(Demo, styles);
