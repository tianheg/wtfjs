#!/usr/bin/env node

import pc from "picocolors";

const expressions = [
  "[] == ![]",
  "true == []",
  "true == ![]",
  "false == []",
  "false == ![]",
  "!!'false' == !!'true'",
  "!!'false' === !!'true'",
  "'b' + 'a' + +'a' + 'a'",
  "NaN === NaN",
  "Object.is(NaN, NaN)",
  "-0 === 0",
  "Object.is(-0, 0)",
  "NaN === 0 / 0",
  "Object.is(NaN, 0 / 0)",
  "(![] + [])[+[]] +\n(![] + [])[+!+[]] +\n([![]] + [][[]])[+!+[] + [+[]]] +\n(![] + [])[!+[] + !+[]]",
  "!![]",
  "!!null",
  "null == false",
  "Number.MIN_VALUE > 0",
  "[1, 2, 3] + [4, 5, 6]",
  "let a = [, , ,];\na.length;\na.toString()",
  "[] == ''",
  "[] == 0",
  "[''] == ''",
  "[0] == 0",
  "[0] == ''",
  "[''] == 0",
  "[null] == ''",
  "[null] == 0",
  "[undefined] == ''",
  "[undefined] == 0",
  "[[]] == 0",
  "[[]] == ''",
  "[[[[[[]]]]]] == ''",
  "[[[[[[]]]]]] == 0",
  "[[[[[[ null ]]]]]] == 0",
  "[[[[[[ null ]]]]]] == ''",
  "[[[[[[ undefined ]]]]]] == 0",
  "[[[[[[ undefined ]]]]]] == ''",
  "Number()",
  "Number(undefined)",
  "parseInt('f*ck')",
  "parseInt('f*ck', 16)",
  "true + true",
  "(true + true) * (true + true) - true",
  "// valid comment\n<!-- valid comment too",
  "typeof NaN",
  "typeof []",
  "typeof null",
  "null instanceof Object",
  "999999999999999",
  "9999999999999999",
  "10000000000000000",
  "10000000000000000 + 1",
  "10000000000000000 + 1.1",
  "0.1 + 0.2",
  "0.1 + 0.2 === 0.3",
  "Number.prototype.isOne = function() {\n  return Number(this) === 1\n};\nconsole.log((1.0).isOne());\nconsole.log((1).isOne());\nconsole.log((2.0).isOne());\n(7).isOne()",
  "1 < 2 < 3",
  "3 > 2 > 1",
  "3 - 1",
  "3 + 1",
  "'3' - 1",
  "'' + ''",
  "[] + []",
  "[] + {}",
  "{} + []",
  "{} + {}",
  "'222' - -'111'",
  "[4] * [4]",
  "[] * []",
  "[4, 4] * [4, 4]",
  "'str'",
  "typeof 'str'",
  "'str' instanceof String",
  "function f(...args) {\n  return args;\n};\nconsole.log(f(1, 2, 3));\nf`true is ${true}, false is ${false}, array is ${[1, 2, 3]}`;",
  "console.log.call.call.call.call.call.apply(a => a, [1, 2])",
  "const c = 'constructor';\nc[c][c]('console.log(`WTF?`)')();",
  "console.log({ [{}]: {} })",
  "console.log(({ [{}]: { [{}]: {} } }[{}][{}]))",
  "(1).__proto__.__proto__.__proto__",
  "`${{ Object }}`",
  "let x, { x: y = 1 } = { x };y",
  "[...[...'...']].length",
  "foo: {\n  console.log('first')\n  break foo;\n  console.log('second');\n}",
  "a: b: c: d: e: f: g: 1, 2, 3, 4, 5",
  "(() => {\n  try {\n    return 2;\n  } finally {\n    return 3;\n  }\n})()",
  "(function* f() {\n  yield f;\n})().next()",
  "typeof new class {\n  class() {}\n}()",
  "let f = () => 10;f()",
  "let f = () => {};f()"
];

const randomExpression =
  expressions[Math.floor(Math.random() * expressions.length)];

console.log(`\nRunning expression:\n\n${pc.blue(randomExpression)}\n`);

const result = eval(randomExpression);
console.log(result);
