/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const answer=(node1,node2,carry)=>{
       if(!node1&&!node2&&!carry) return null
       let sum=(node1?.val || 0)+(node2?.val || 0)+carry;
       let nextNode=answer(node1?.next, node2?.next, Math.floor(sum/10));
       return new ListNode(sum%10,nextNode);
    }
    return  answer(l1,l2,0);
};