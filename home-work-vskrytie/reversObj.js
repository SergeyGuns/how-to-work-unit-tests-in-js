var reversObj = function(node, parent) {
  console.log(node, parent)
  var result = parent || {};
  
  if (node) {
    var child = node.next;
    node.next = parent;

    result = reversObj(child, node);
  }

  return result;
}

// var reversObj = function(head) {
//   var result = null;
//   var stack = [];
  
//   var current = head;
//   while (current) {
//       stack.push(current);
//       current = current.next;
//   }
  
//   // Set head to end of list.
//   result = stack.pop() || [];
//   current = result;
  
//   while (current) {
//       current.next = stack.pop();
//       current = current.next;
//   }

//   return result;
// };


module.exports = {
  reversObj: reversObj
}