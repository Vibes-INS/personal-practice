/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2
  }

  if (!l2) {
    return l1
  }

  const ans = new ListNode()
  let ans_pointer = ans
  while (l1 && l2) {
    if (l1.val > l2.val) {
      ans_pointer.next = new ListNode(l2.val)
      l2 = l2.next
    } else {
      ans_pointer.next = new ListNode(l1.val)
      l1 = l1.next
    }
    ans_pointer = ans_pointer.next
  }

  while (l1) {
    ans_pointer.next = new ListNode(l1.val)
    ans_pointer = ans_pointer.next
    l1 = l1.next
  }

  while (l2) {
    ans_pointer.next = new ListNode(l2.val)
    ans_pointer = ans_pointer.next
    l2 = l2.next
  }

  return ans.next
}