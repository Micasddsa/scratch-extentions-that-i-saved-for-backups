class RixxyX {
  getInfo() {
    return {
      color1: "#773c00",
      id: "RixxyX",
      name: "RixxyX",
      description: '[deleted]',
      blocks: [
        {
          opcode: 'notEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[TEXT_1] != [TEXT_2]',
          arguments: {
            TEXT_1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'RixxyX'
            },
            TEXT_2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'TyruntX'
            }
          }
        },
        {
          opcode: 'color',
          blockType: Scratch.BlockType.REPORTER,
          text: 'color [COLOR] in hex',
          arguments: {
            COLOR: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#ff0000'
            }
          }
        },
        {
          opcode: 'returnTrue',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true',
          arguments: {}
        },
        {
          opcode: 'returnFalse',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false',
          arguments: {}
        },
        {
          opcode: 'ifElseString',
          blockType: Scratch.BlockType.REPORTER,
          text: 'if [BOOL] then [TEXT_1] else [TEXT_2]',
          arguments: {
            BOOL: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: ''
            },
            TEXT_1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'RixxyX'
            },
            TEXT_2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'TyruntX'
            }
          }
        },
        {
          opcode: 'ifString',
          blockType: Scratch.BlockType.REPORTER,
          text: 'if [BOOL] then [TEXT]',
          arguments: {
            BOOL: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: ''
            },
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'RixxyX'
            }
          }
        },
        {
          opcode: 'extractTextBetweenToCharacters',
          blockType: Scratch.BlockType.REPORTER,
          text: 'extract text [TEXT] between [NUM_1] to [NUM_2] characters',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'RixxyX is cool, right?'
            },
            NUM_1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            NUM_2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 6
            }
          }
        },
        {
          opcode: 'returnString',
          blockType: Scratch.BlockType.REPORTER,
          text: '[TEXT] as text',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'RixxyX is cool, right?'
            }
          }
        },
        {
          opcode: 'returnObject',
          blockType: Scratch.BlockType.REPORTER,
          text: 'JavaScript object [OBJ_NAME] with value [OBJ_VAL]',
          arguments: {
            OBJ_NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'String'
            },
            OBJ_VAL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'RixxyX is cool, right?'
            }
          }
        },
        {
          opcode: 'isTheSameTypeAs',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[TEXT_1] is the same type as [TEXT_2]?',
          arguments: {
            TEXT_1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'RixxyX is cool, right?'
            },
            TEXT_2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'RixxyX is cool, right?'
            }
          }
        }/* ,
        {
          opcode: 'reverseTxt',
          blockType: Scartch.BlockType.REPORTER,
          text: 'reverse text [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'XyxxiR'
            }
          }
        } */
      ]
    }
  }
  notEquals(args) {
    var isEquals = args.TEXT_1 != args.TEXT_2
    return isEquals
  }
  color(args) {
    return args.COLOR
  }
  returnTrue(args) {
    return true
  }
  returnFalse(args) {
    return false
  }
  ifElseString(args) {
    if (args.BOOL) {
      return args.TEXT_1
    } else {
      return args.TEXT_2
    }
  }
  ifString(args) {
    if (args.BOOL) {
      return args.TEXT
    } else {
      return ""
    }
  }
  extractTextBetweenToCharacters(args) {
    var txt = args.TEXT.toString()
    var char1 = args.NUM_1 - 1
    var char2 = args.NUM_2
    return txt.slice(char1, char2)
  }
  returnString(args) {
    return args.TEXT.toString();
  }
  returnObject(args) {
    try {
      return eval("new " + args.OBJ_NAME + "(\"" + args.OBJ_VAL + "\");");
    } catch(err) {
      return err
    }
  }
  isTheSameTypeAs(args) {
    return (typeof args.TEXT_1 == typeof args.TEXT_2)
  }
  /* reverseTxt(args) {
    var emptyStr = ""
    var txt = args.TEXT.toString()
    var localCount = args.TEXT.length - 1

    while (localCount != -1) {
      emptyStr = emptyStr + txt.charAt(localCount)
      localCount -= 1
    }

    return emptyStr
  } */
}
Scratch.extensions.register(new RixxyX());
