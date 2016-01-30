import compression from 'compression';
import helmet from 'helmet';

const compressionFilter = () => /json|text|javascript|css/;

export default [
  compression({ filter: compressionFilter, level: 3 }),
  helmet.hidePoweredBy({ setTo: 'human brains' }),
  helmet.frameguard('sameorigin'),
  helmet.xssFilter(),
  helmet.noSniff(),
  helmet.ieNoOpen()
];
