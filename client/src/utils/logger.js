
const debugMode = true;
const Log = console.log;
export function print(...args) {
  if(!debugMode){
    return
  }
  var t           = new Date().toLocaleTimeString();
  const styles    = s => `color: ${s}; font-weight: bold`;
  const headerCSS = ['color: gray; font-weight: lighter;'];
  console.group(`%c ${t}`, ...headerCSS);
  Log('%c', 'color:#9E9E9E; font-weight: bold',stack(3), ...args);
  console.groupEnd();
}

export function stack (index) {
  var e = new Error();
  var spl = e.stack.split('\n');
  return index>=0? spl[index]+'\n' : e.stack;
}

console.log = print;
console.err = stack;
//
// const defaults = {
//   level: 'log',
//   logger: console,
//   logErrors: true,
//   colors: {
//     title: 'inherit',
//     req: '#9E9E9E',
//     res: '#4CAF50',
//     error: '#F20404',
//   }
// }

// function printBuffer(args, options) {
//   const {
//           logger,
//           colors
//         } = options;
//
//   // Message
//   const headerCSS = ['color: gray; font-weight: lighter;'];
//   const styles    = s => `color: ${s}; font-weight: bold`;
//
//   // render
//   var t = new Date().toLocaleString();
//   logger.group(`%c【LOG】 @${t}`, ...headerCSS);
//   logger.log('%c req', styles(colors.req), args[0]);
//   logger.groupEnd();
// }
//
// function printInfo(...args) {
//   if(!showLog) {
//     return;
//   }
//
//   var t           = new Date().toLocaleString();
//   const styles    = s => `color: ${s}; font-weight: bold`;
//   const headerCSS = ['color: gray; font-weight: lighter;'];
//   console.group(`%c【LOG】 @${t}`, ...headerCSS);
//   console.log('%c req', styles('#9E9E9E'), args[0]);
//   console.groupEnd();
// }

// export default printInfo;
