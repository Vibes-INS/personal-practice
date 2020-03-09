/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true
  }

  let slow = head
  let fast = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  // Reversal
  let prev = null
  while (slow) {
    let tempNode = slow.next
    slow.next = prev
    prev = slow
    slow = tempNode
  }

  // Compare
  while (prev && head) {
    if (prev.val !== head.val) {
      return false
    }
    prev = prev.next
    head = head.next
  }

  return true
}