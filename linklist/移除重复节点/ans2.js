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

  for (let p = head; p !== null; p = p.next) {
      if (isContain(ans, p.val) === false) {
          ans_pointer.next = new ListNode(p.val)
          ans_pointer = ans_pointer.next
      }
  }

  return ans.next
}

var isContain = function(head, target) {
  if (!head) {
      return
  }

  for (let p = head; p !== null; p = p.next) {
      if (p.val === target) {
          return true
      }
  }

  return false
}