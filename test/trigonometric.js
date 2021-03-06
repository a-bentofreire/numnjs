// uuid: 3959b1f0-491a-48e4-958f-31c633f87e20

// ------------------------------------------------------------------------
// Copyright (c) 2019 Alexandre Bento Freire. All rights reserved.
// Licensed under the MIT License+uuid License. See License.txt for details
// ------------------------------------------------------------------------

/**
 * Mocha tests for numnjs trigonometric functions.
 */

// ------------------------------------------------------------------------
//                               Requires
// ------------------------------------------------------------------------

const numnjs = require('../main.js');
const shared = require('./shared.js');

// ------------------------------------------------------------------------
//                               Test Cases
// ------------------------------------------------------------------------

describe('Trigonometric', function () {

  shared.addTransformCase('sin', Math.sin, numnjs.sin, true);
  shared.addTransformCase('cos', Math.cos, numnjs.cos, true);
  shared.addTransformCase('tan', Math.tan, numnjs.tan, true);

  shared.addTransformCase('arcsin', Math.asin, numnjs.arcsin, true);
  shared.addTransformCase('arccos', Math.acos, numnjs.arccos, true);
  shared.addTransformCase('arctan', Math.atan, numnjs.arctan, true);

  shared.addTransformCase('degrees', (v) => v * (180 / Math.PI), numnjs.degrees, true);
  shared.addTransformCase('radians', (v) => v / (180 / Math.PI), numnjs.radians, true);
});