import { add } from './index.js';
if (add(2, 2) !== 4) { console.error('add(2, 2) devrait valoir 4'); process.exit(1); }
console.log('Tests OK');
