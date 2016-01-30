import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { addHash } from '../../utils';

export default [
  new ExtractTextPlugin(addHash('[name].css', 'contentHash')),
]
