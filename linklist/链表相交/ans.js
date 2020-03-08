/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
      return null
  }

  let pointerA = headA
  let pointerB = headB
  while (pointerA !== pointerB) {
      pointerA = pointerA === null ? headB : pointerA.next
      pointerB = pointerB === null ? headA : pointerB.next
  }

  return pointerA
}