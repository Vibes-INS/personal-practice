/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  const arr = []
  for(let p = head; p !== null; p = p.next) {
      arr.push(p)
  }

  return arr[Math.floor(arr.length / 2)]
};