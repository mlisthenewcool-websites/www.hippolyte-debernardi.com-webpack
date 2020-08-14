import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

// import data file
// eslint-disable-next-line @typescript-eslint/no-var-requires
const markdownFile = require('./memorial.md');

export const Memorial = () => (
  <ReactMarkdown source={markdownFile} escapeHtml={false} />
);
