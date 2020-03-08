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
var removeDuplicateNodes = function(head) {
  let ans = new ListNode()
  let ans_pointer = ans
  const map = {}

  for (let p = head; p !== null; p = p.next) {
      if (map[p.val] === undefined) {
          map[p.val] = true
          ans_pointer.next = new ListNode(p.val)
          ans_pointer = ans_pointer.next
      }
  }

  return ans.next
};