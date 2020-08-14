import React from 'react';
// import ReactMarkdown from 'react-markdown/with-html';

// import data file
// eslint-disable-next-line @typescript-eslint/no-var-requires
const markdownFile = require('./about.md');

export const About = () => (
  <div dangerouslySetInnerHTML={{ __html: markdownFile }} />
);
