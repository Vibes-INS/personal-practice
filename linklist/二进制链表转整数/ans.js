/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  if (!head) {
      return 0
  }

  let ans = 0
  for (let p = head; p !== null; p = p.next) {
      ans = ans * 2 + p.val
  }

  return ans
}