## 回文链表

[LeetCode](https://leetcode-cn.com/problems/palindrome-linked-list-lcci/)

编写一个函数，检查输入的链表是否是回文的。

示例 1：

输入： 1->2
输出： false 
示例 2：

输入： 1->2->2->1
输出： true 

进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

### 解析
快慢指针 快指针是慢指针的二倍速

慢指针走到中间，然后反转链表，然后比较前半部分和后半部分