#!/usr/bin/env node

const [, , inputFile] = process.argv;
const data = require('fs').readFileSync(inputFile, { encoding: 'utf-8' });

const matchers = {
  emails: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gi,
  urls: /https?:\/\/(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?/gi,
  phones: /(\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{4}/g,
  cards: /(\d{4}[-\s]?){3}\d{4}/g,
  time: /((1[0-2]|0?[1-9]):([0-5][0-9])\s?(AM|PM)|([01]?[0-9]|2[0-3]):[0-5][0-9])/gi,
};

let results = {
  emails: [],
  urls: [],
  phones: [],
  cards: [],
  time: [],
};

for (const key in matchers) {
  results[key] = [...data.match(matchers[key]) || []];
}

console.log(JSON.stringify(results, null, 2));
