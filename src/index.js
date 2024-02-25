import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IndexRouter from './router/IndexRouter';
import { ConfigProvider } from 'antd';

const projects = [
  {
    id: '1',
    title: 'Task Manager',
    description: 'A simple task manager for managing your daily tasks',
    skills: ['HTML', 'CSS/SASS', 'Javascript', 'ReactJS', 'Redux', 'NodeJS', 'Express', 'MongoDB'],
    url: 'https://task-manager-v7rkkpbhkq-uw.a.run.app/'
  },
  {
    id: '2',
    title: 'Random Quote Machine',
    description: 'A simple machine that generates famous quotes at random at the touch of a button',
    skills: ['HTML', 'CSS/SASS', 'Javascript', 'JQuery', 'ReactJS', 'Redux', 'NodeJS'],
    url: 'https://efe-onoh.github.io/random-quote-machine/'
  },
  {
    id: '3',
    title: 'Online storefront',
    description: 'A simple grocery storefront using material ui',
    skills: ['HTML', 'CSS/SASS', 'Javascript', 'ReactJS', 'Material Ui', 'NodeJS'],
    url: 'https://efe-onoh.github.io/storefront/'
  },
  {
    id: '4',
    title: 'Pokemon search app',
    description: 'A simple pokemon searcher to make finding your favorite pokemon easier using vanilla html,css,js',
    skills: ['HTML', 'CSS', 'Javascript'],
    url: 'https://efe-onoh.github.io/gotta-catch-em-all/'
  },
  {
    id: '5',
    title: 'Markdown Previewer',
    description: 'An app to preview markdown content',
    skills: ['HTML', 'CSS/SASS', 'Javascript', 'JQuery', 'ReactJS', 'Redux', 'NodeJS'],
    url: 'https://efe-onoh.github.io/markdown-previewer/'
  },
  {
    id: '6',
    title: 'Javascript Calculator',
    description: 'This is a simple js calculator',
    skills: ['HTML', 'CSS/SASS', 'Javascript', 'JQuery', 'ReactJS', 'Redux', 'NodeJS'],
    url: 'https://efe-onoh.github.io/javascript-calculator/'
  },
  {
    id: '7',
    title: 'Drum Machine',
    description: 'A simple drum machine',
    skills: ['HTML', 'CSS/SASS', 'Javascript', 'JQuery', 'ReactJS', 'Redux', 'NodeJS'],
    url: 'https://efe-onoh.github.io/drum-machine/'
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
  