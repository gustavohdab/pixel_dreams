import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constant';

// Get a random prompt from the surpriseMePrompts array, ensuring that the same prompt is not returned twice in a row. 
export function getRandomPrompt(prompt) {
  let randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  let randomPrompt = surpriseMePrompts[randomIndex];

  while (randomPrompt === prompt) {
    randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    randomPrompt = surpriseMePrompts[randomIndex];
  }

  return randomPrompt;
}

// Download an image with the given _id and photo parameters. 
export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}