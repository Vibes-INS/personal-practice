/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let p = head
  if (p.val === val) {
    head = head.next
  }

  while (p && p.next) {
    if (p.next.val === val) {
      p.next = p.next.next
    }
    p = p.next
  }

  return head
}