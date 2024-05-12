Description:
    Bài toán tính tổng 2 số được biểu diễn bằng 2 linked-list reverse order
    Kết quả trả về cũng là 1 linked list chứa tổng của 2 số đó
    Ví dụ: L1 = [2,3,5], L2 = [0,2,1] => Result = [2,5,6]
    Explain: 532 + 120 = 652

Solution:
    1. No_recur - Vì Thứ tự đã được reverse nên ta tính tổng từ những node đầu
    tức hàng đơn vị và lấy phần dư sau khi modulo 10 tức phần đơn vị làm node
    tiếp theo. Phần nguyên sau khi modulo 10 tức phần nhớ ta set trước vào sum
    1 nếu >= 10 và 0 nếu ngược lại. Sau đó tiếp tục các hàng tiếp theo. Đến cuối
    nếu phần nhớ vẫn là 1 ta tiếp tục tạo node tiếp theo để lưu hàng kế tiếp.
    Kết quả trả về ta lấy từ node thứ 2 của linkedlist vì node đầu khi tạo ra là 0
        Time: O(max(m,n)) - m,n là độ dài cùa 2 list (dài hơn thì lấy)
        Space: O(1)

        var addTwoNumbers = function(l1, l2) {
            let current = new ListNode();
            let result = current;
            let sum = 0;

            while (l1 || l2) {
                if(l1) {
                    sum += l1.val;
                    l1 = l1.next;
                }

                if(l2) {
                    sum += l2.val;
                    l2 = l2.next;
                }

                current.next = new ListNode(sum % 10);
                current = current.next;
                sum = sum >= 10 ? 1 : 0;
            }

            if(sum) {
                current.next = new ListNode(sum);
            }

            return result.next;
        };

    2. Recursion - Cách này cũng tương tự nhưng dùng các biến có sẵn và tiến hành
    đệ quy các phép tổng cho đến khi đạt điều kiện dừng.

        function sumTwo_Recur(l1, l2) {
            let sum = l1.val + l2.val + carry;
            carry = Math.floor(sum / 10);

            head.next = new NodeList(sum % 10);
            head = head.next;

            if(l1.next && l2.next) {
                sumTwo_Recur(l1.next, l2.next);
            }
            else if(l1.next) {
                sumTwo_Recur(l1.next, new NodeList(0));
            }
            else if(l2.next) {
                sumTwo_Recur(new NodeList(0), l2.next);
            }
            else if (carry > 0) {
                head.next = new NodeList(1);
                head = head.next;
            }

            return result.next;
        }
