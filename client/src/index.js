import React from 'react';
import { render } from 'react-dom';
import SimilarApp from './components/SimilarApp';
import LikeApp from './components/LikeApp';

let id = 1;

render(<SimilarApp id={ id } />, document.getElementById('similar'));
render(<LikeApp id={ id } />, document.getElementById('youMayLike'));