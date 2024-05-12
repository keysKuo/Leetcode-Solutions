
function NodeList(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}


function sumTwo(l1, l2) {
    let current = new NodeList();
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

        current.next = new NodeList(sum % 10);
        current = current.next;
        sum = sum >= 10 ? 1 : 0;
    }

    if(sum) {
        current.next = new NodeList(sum);
    }

    console.log(result.next);
}

let head = new NodeList();
let result = head;
let carry = 0;

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

let l1 = new NodeList(2, new NodeList(4, new NodeList(3)));
let l2 = new NodeList(5, new NodeList(6, new NodeList(4)));

// sumTwo(l1, l2);

console.log(sumTwo_Recur(l1, l2))