function getStack(stack){
  this.stack = stack;
  this.push = function push(arg){stack.push(arg)};
  this.pop = function pop(){ return this.stack.pop()};
  this.isEmpty = function isEmpty(){return this.stack.length === 0};
}
export default () => new getStack([]);