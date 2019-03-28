function Node(data, next) {
    this.data = data;
    this.next = next;
}

function addAtend(value,L) {
    if (L == null) {
        L = new Node(value, null);
        return L;
    }
    let head = L;
    while (head.next != null) {
        // console.log(L.data);
        head = head.next;
    }
    let newNode =new Node(value, null);
    head.next = newNode;
    //return head;
    return L;
}
function merge(L1, L2, merged_list) {

   //merge list compare the head.data of L1 with L2 and move a/c to comparison
   //generic merge sort logic
    while (L1!= null && L2!= null) {
        if (L1.data < L2.data) {
            //console.log(L1.data);
            merged_list = addAtend(L1.data,merged_list);
            L1 = L1.next;

        }
        else  {
           // console.log(L2.data);
            merged_list = addAtend(L2.data,merged_list);
            L2 = L2.next;
        }

    }
    //copy over remaining items is List1 & List2
    while (L1 != null) {
       // console.log(L1.data);
        merged_list = addAtend(L1.data,merged_list);
        L1 = L1.next;
    }
    while (L2 != null) {
        // console.log(L2.data);
         merged_list = addAtend(L2.data,merged_list);
        L2 = L2.next;
    }
    //return head 
    return merged_list;
}

function traverse(L) {
    if (L != null) {
        console.log(L.data);
        traverse(L.next);
    }
}

// // create first linked list: 4 -> 9 -> 18
// let n3 = new Node(23, null);
// let n2 = new Node(5, n3);
// let n1 = new Node(4, n2);
// let L1 = n1;    
// // create second linked list: 3 -> 6 -> 23
// let n6 = new Node(18, null);
// let n5 = new Node(6, n6);
// let n4 = new Node(3, n5);
// let L2 = n4;

let n1 = addAtend(-9,null);
    n1 = addAtend(-5,n1);
    n1 = addAtend(1,n1);
    n1 = addAtend(5,n1);
    n1 = addAtend(115,n1);
    n1 = addAtend(5000,n1);
    n1 = addAtend(77771,n1);
 
let n2 = addAtend(-119,null);
    n2 = addAtend(-5,n2);
    n2 = addAtend(0,n2);
    n2 = addAtend(25,n2);
    n2 = addAtend(150,n2);
    n2 = addAtend(750,n2);
    n2 = addAtend(1215,n2);
    n2 = addAtend(55500,n2);
    n2 = addAtend(773771,n2);

 console.log(" list1");
 traverse(n1);
 console.log(" list2");
 traverse(n2);
 let resultList = null;
 resultList = merge(n1, n2, null);
 console.log(" after merge");
 traverse(resultList);
