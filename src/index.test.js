import { add } from './index.js';
if (add(2, 2) !== 4) { console.error('add(2, 2) devrait valoir 4'); process.exit(1); }
console.log('Tests OK');
import { subtract } from './index.js';
if (subtract(5, 3) !== 2) { console.error('subtract(5, 3) devrait valoir 2'); process.exit(1); }
