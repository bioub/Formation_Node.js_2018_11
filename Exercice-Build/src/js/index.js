'use strict';

import Horloge from './horloge';
import { getRandomIntInclusive } from './random';

const divElt = document.querySelector('.horloge');
const clock = new Horloge(divElt);
clock.start();


console.log(getRandomIntInclusive(0, 100));
