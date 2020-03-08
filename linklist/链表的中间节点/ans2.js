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
  let show = head
  let fast = head
  while (fast !== null && fast.next !== null) {
      show = show.next
      fast = fast.next.next
  }

  return show
};