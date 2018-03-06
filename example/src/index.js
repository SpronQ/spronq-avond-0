import React from 'react';

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text, GoToAction
} from '../../src';

import preloader from '../../src/utils/preloader';

import createTheme from '../../src/themes/default';

import Interactive from '../assets/interactive';

require('normalize.css');

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png')
};

preloader(images);

const theme = createTheme({
  primary: '#ff4081'
});

export default class Presentation extends React.Component {
  state = {
    steps: 0
  }

  updateSteps = steps => {
    if (this.state.steps !== steps) { // eslint-disable-line no-invalid-this
      this.setState({ steps }); // eslint-disable-line no-invalid-this
    }
  }

  render() {
    return (
      <Deck transition={['zoom', 'slide']} theme={theme} transitionDuration={500}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
          SpronQ
          </Heading>
          <Heading size={1} fit caps>
             avond #0 
          </Heading>
          <Heading size={1} fit caps textColor="black">
          😇😘🤪💩👏💅🐬🌸
          </Heading>
          
        </Slide>
       
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="secondary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={1} fit  lineHeight={1} >
          1730 INLOOP x 🍕
          </Heading>
          <Heading size={1} fit  lineHeight={1}  >
          1900 OLAF x <img style={{height: '14px'}} src="https://vamp.io/img/005-vamp/Logo/logo-long-colour.svg"/>
          </Heading>
          <Heading size={1} fit  lineHeight={1}  >
          2000 DAVID x 🧠⛈
          </Heading>
          <Heading size={1} fit  lineHeight={1}  >
          2030 🗣👨‍❤️‍💋‍👨🥤☕️🍸
          </Heading>
          <Heading size={1} fit  lineHeight={1}  >
          2130 🚘🚝🚶‍♂️🏚🚀
          </Heading>
        </Slide>
        <Slide   bgColor="secondary">
          <Heading size={1} fit  lineHeight={1}  >
          OLAF MOLENVELD
          </Heading>
          <Heading size={1} fit  lineHeight={1}  >
          <img   style={{ marginTop: 100, height: '200px'}} src="https://vamp.io/img/005-vamp/Logo/logo-long-colour.svg"/>
          </Heading>
        </Slide>
        
        <Slide  >
          <Heading size={1} fit lineHeight={1}  >
          DAVID ZEMAN
          </Heading>
          <Heading size={1} fit lineHeight={1} style={{ lineHeight: '40px'}} >
          &nbsp; 🧠⛈⚡️🌪☔️ &nbsp;
          </Heading>
         
        </Slide>
        <Slide bgColor="secondary">
         
          <Heading size={1} fit lineHeight={1} style={{ lineHeight: '40px'}} >
          &nbsp; 🗣👨‍❤️‍💋‍👨🥤☕️🍸 &nbsp;
          </Heading>
         
        </Slide>
        
        <Slide >
         
          <Heading size={1} fit lineHeight={1} style={{ lineHeight: '40px'}} >
          &nbsp; 🚘🚝🚶‍♂️🏚🚀 &nbsp;
          </Heading>
         
        </Slide>
        
      </Deck>
    );
  }
}
