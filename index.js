'use strict';

import movieQuotes from './movie-quotes.js';
import uniqueRandomArray from 'unique-random-array';

export const all = movieQuotes;
export const random = uniqueRandomArray(movieQuotes);
