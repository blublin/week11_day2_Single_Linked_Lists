class Node {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SingleLinkedList {
    constructor () {
        this.head = null;
    }

    addToFront( value ) {
        if (this.head === null) {
            this.head = new Node(value);
        }
        else {
            this.head = new Node(value, this.head);
        }
    }
}