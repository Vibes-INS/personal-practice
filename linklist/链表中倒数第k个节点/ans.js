/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  if (!head) {
      return
  }

  let pointer = head
  let pointer2 = head
  let count = 0
  while (pointer !== null) {
      pointer = pointer.next
      count++

      if (count > k) {
          pointer2 = pointer2.next
      }
  }

  return pointer2
}