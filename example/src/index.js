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
  fluqel: require('../assets/fluqel@3x.png'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  shirt1: require('../assets/shirt1.png'),
  shirt2: require('../assets/shirt2.png'),
  shirt3: require('../assets/shirt3.png'),
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
             avond #1 
          </Heading>
          <Heading size={1} fit caps textColor="black">
          👕🍕🍺☕️🥤🔥🦅🚴‍♀️👕🚴‍♀️🍕
          </Heading>
          
        </Slide>
       
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="secondary"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={1} fit  lineHeight={1} >
          1730 INLOOP x 🍕🍕
          </Heading>
          <Heading size={1} fit  lineHeight={1}  >
          1900 Leen x <img style={{height: '14px'  }} src="https://fluqel.com/static/1x/fluqel.png"/>
          </Heading>
          <Heading size={1} fit  lineHeight={1}  >
          2000 Matthijs x 🚴‍♀️👕
          </Heading>
          <Heading size={1} fit  lineHeight={1}  >
          2030 🗣👨‍❤️‍💋‍👨☕🍵☕️🍸
          </Heading>
          <Heading size={1} fit  lineHeight={1}  >
          2130 🚘🚝🚶‍♂️🏚🚀
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} fit  lineHeight={1}  >
          LEEN BREEVOORT
          </Heading>
          <Heading size={1} fit  lineHeight={1}  >
          <Image src={images.fluqel.replace('/', '')}/>
          </Heading>
        </Slide>
        
        <Slide  >
          <Heading size={1} fit lineHeight={1}  >
          MATTHIJS LIGT
          </Heading>
          <Heading size={1} fit lineHeight={1} style={{ lineHeight: '40px'}} >
          &nbsp;  🚴‍👕 🚴‍👕
          </Heading>
         
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.shirt1.replace('/', '')}/>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.shirt2.replace('/', '')}/>
        </Slide>
        <Slide bgColor="tertiary">
          <Image src={images.shirt3.replace('/', '')}/>
        </Slide>
        <Slide bgColor="secondary">
         
          <Heading size={1} fit lineHeight={1} style={{ lineHeight: '40px'}} >
          &nbsp; 🗣👨‍❤️‍💋‍👨🍵☕️🍸 &nbsp;
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
