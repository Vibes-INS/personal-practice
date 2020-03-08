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
var reverseList = function (head) {
  let curr = null,
    prev = head

  while (prev) {
    let t = prev.next

    prev.next = curr
    curr = prev
    prev = t
  }

  return curr
};