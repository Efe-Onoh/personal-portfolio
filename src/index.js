import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IndexRouter from './router/IndexRouter';
import { ConfigProvider } from 'antd';

const projects = [
  {
    id: '1',
    title: 'Random Quote Machine',
    description: 'A simple machine that generates famous quotes at random at the touch of a button',
    skills: ['HTML', 'CSS/SASS', 'Javascript', 'JQuery', 'ReactJS', 'Redux', 'NodeJS'],
    url: 'https://efe-onoh.github.io/random-quote-machine/'
  },
  {
    id: '2',
    title: 'Markdown Previewer',
    description: 'An app to preview markdown content',
    skills: ['HTML', 'CSS/SASS', 'Javascript', 'JQuery', 'ReactJS', 'Redux', 'NodeJS'],
    url: 'https://efe-onoh.github.io/markdown-previewer/'
  },
  {
    id: '3',
    title: 'Javascript Calculator',
    description: 'This is a simple js calculator',
    skills: ['HTML', 'CSS/SASS', 'Javascript', 'JQuery', 'ReactJS', 'Redux', 'NodeJS'],
    url: 'https://efe-onoh.github.io/javascript-calculator/'
  },
  {
    id: '4',
    title: 'Drum Machine',
    description: 'A simple drum machine',
    skills: ['HTML', 'CSS/SASS', 'Javascript', 'JQuery', 'ReactJS', 'Redux', 'NodeJS'],
    url: 'https://efe-onoh.github.io/drum-machine/'
  },
  {
    id: '5',
    title: 'Personal Portfolio',
    description: 'My Personal Portfolio Page',
    skills: ['HTML', 'CSS/SASS', 'Javascript','ReactJS', 'NodeJS', 'React-Router', 'AntD'],
    url: 'https://efe-onoh.github.io/personal-portfolio/'
  },
];

class App extends React.Component {
    render() {
      return (
        <ConfigProvider
          // theme={theme}
        >
          <div className="App">
              <IndexRouter projects={projects} />
          </div>

        </ConfigProvider>
        
      );
    }
}

        
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  