
const { tldoc } = require('../dist')

const text = `
//@class MaskPoint @description Part of the face, relative to which a mask should be placed

//asdfasdfads

// @description A mask should be placed relatively to the mouth
maskPointMouth = MaskPoint;

//@description A mask should be placed relatively to the chin
maskPointChin = MaskPoint;

//@description Position on a photo where a mask should be placed @point Part of the face, relative to which the mask should be placed
//@x_shift Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. (For example, -1.0 will place the mask just to the left of the default mask position)
//@y_shift Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. (For example, 1.0 will place the mask just below the default mask position)
//@scale Mask scaling coefficient. (For example, 2.0 means a doubled size)
maskPosition point:MaskPoint x_shift:double y_shift:double scale:double = MaskPosition;

//@description TDLib client is in its final state. All databases are closed and all resources are released. No other updates will be received after this. All queries will be responded to
//-with error code 500. To continue working, one should create a new instance of the TDLib client
authorizationStateClosed = AuthorizationState;

//@class Game @description A game

//@description A param named description should be parsed correctly
//@param_description A game description
game description:MaskPoint = Game;
---functions---

//@description Sets the parameters for TDLib initialization. Works only when the current authorization state is authorizationStateWaitTdlibParameters @parameters Parameters
setTdlibParameters parameters:tdlibParameters = Ok;
`

// console.dir(tldoc(text), { depth: null })

const output =
  { baseClasses:
    [ { name: 'MaskPoint',
        description: 'Part of the face, relative to which a mask should be placed' },
      { name: 'Game', description: 'A game' } ],
   classes:
    [ { line: 6,
        name: 'maskPointMouth',
        kind: 'constructor',
        description: 'A mask should be placed relatively to the mouth',
        parameters: [],
        result: 'MaskPoint' },
      { line: 9,
        name: 'maskPointChin',
        kind: 'constructor',
        description: 'A mask should be placed relatively to the chin',
        parameters: [],
        result: 'MaskPoint' },
      { line: 15,
        name: 'maskPosition',
        kind: 'constructor',
        description: 'Position on a photo where a mask should be placed',
        parameters:
         [ { name: 'point',
             type: 'MaskPoint',
             vector: 0,
             description: 'Part of the face, relative to which the mask should be placed' },
           { name: 'x_shift',
             type: 'double',
             vector: 0,
             description: 'Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. (For example, -1.0 will place the mask just to the left of the default mask position)' },
           { name: 'y_shift',
             type: 'double',
             vector: 0,
             description: 'Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. (For example, 1.0 will place the mask just below the default mask position)' },
           { name: 'scale',
             type: 'double',
             vector: 0,
             description: 'Mask scaling coefficient. (For example, 2.0 means a doubled size)' } ],
        result: 'MaskPosition' },
      { line: 19,
        name: 'authorizationStateClosed',
        kind: 'constructor',
        description: 'TDLib client is in its final state. All databases are closed and all resources are released. No other updates will be received after this. All queries will be responded to with error code 500. To continue working, one should create a new instance of the TDLib client',
        parameters: [],
        result: 'AuthorizationState' },
      { line: 25,
        name: 'game',
        kind: 'constructor',
        description: 'A param named description should be parsed correctly',
        parameters:
          [ { name: 'description',
              type: 'MaskPoint',
              vector: 0,
              description: 'A game description' } ],
        result: 'Game' },
      { line: 29,
        name: 'setTdlibParameters',
        kind: 'function',
        description: 'Sets the parameters for TDLib initialization. Works only when the current authorization state is authorizationStateWaitTdlibParameters',
        parameters:
         [ { name: 'parameters',
             type: 'tdlibParameters',
             vector: 0,
             description: 'Parameters' } ],
        result: 'Ok' } ] }

test('tldoc', () => {
  expect(tldoc(text)).toEqual(output)
})
