class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    prepend(data) {
      const node = new Node(data);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        //list is not empty--
        node.next = this.head; 
        this.head = node;
      }
      this.size++;
    }
  
    printList() {
      if (this.isEmpty()) {
        console.log("List Is Empty");
      } else {
        let current = this.head;
        let Storage = " ";
        while (current != null) {
          Storage += ` ${current.data} `;
          current = current.next;
        }
        console.log(Storage);
      }
    }
    findElemntByIndex(index) {
      if (this.isEmpty()) {
        console.log("List Is empty");
      } else {
        let current = this.head;
        let counter = 0;
        if (index < 0 || index > this.getSize() - 1) {
          return "find Incorect Indexx";
        }
        while (index > 0) {
          current = current.next;
          index--;
        }
        console.log("hello");
      }
    }
    append(data) {
      const node = new Node(data);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let previous = this.head;
        while (previous.next) {
          previous = previous.next;
        }
        previous.next = node;
      }
      this.size++;
    }
  
    middleOfList() {
      let temp = this.head;
      let n = 0;
      while (temp != null) {
        n++;
        temp = temp.next;
      }
      let half = n / 2;
      temp = this.head;
      console.log(half);
      while (Math.floor(half--)) {
        temp = temp.next;
      }
      console.log(temp.data);
    }
    insertAtIndex(index, value) {
      if (index < 0 || index > this.size) {
        console.log("wrong Postion of inserting");
      } else if (index === 0) {
        this.prepend(value);
      } else {
        const node = new Node(value);
        let previous = this.head;
        for (let i = 0; i < index - 1; i++) {
          previous = previous.next;
        }
        node.next = previous.next;
        previous.next = node;
      }
      this.size++;
    }
    removeAtIndex(index) {
      let removevalue;
      let previous = this.head;
      if (index < 0 || index > this.size) return;
  
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      removevalue = previous.next;
      previous.next = removevalue.next;
      console.log("remove Value" + removevalue.data);
    }
    RemoveNodeByPassingVale(value) {
      if (this.isEmpty()) {
        return null;
      }
      if (this.head.data === value) {
        this.head = this.head.next;
        this.size--;
        return value;
      }
    
      else {
        let removevalue;
        let previous = this.head;
        while (previous.next && previous.next.data != value) {
          previous = previous.next;
        }
        if (previous.next) {
          console.log(previous.next);
          removevalue = previous.next;
          previous.next = removevalue.next;
          this.size--;
          return value;
        }
      }
    }
    reverseLinkdedList()
    {
        let previous=null;  
        let current=this.head;
      while(current!=null)
      {
        let n=current.next;
        current.next=previous;
        previous=current;
        current=n;
      }
      this.head=previous;
    }
      KthNodeFormLast(index){
        let counter=0;
        let temp=this.head;
        while(this.head!=null){
          counter=counter+1;
          this.head=this.head.next;
        }
       let m=counter-index+1;//ap formula for 
      //  let temp=this.head;
       for(let i=0;i<m-1;i++)
       {
        temp=temp.next;
       }
       console.log(temp.data);
      }
    isEmpty() {
      return this.size === 0;
    }
    getSize() {
      return this.size;
    }
  }
  
 module.exports= LinkedList;
//   const list = new LinkedList();
//   list.printList();
//   list.prepend(10);
//   list.prepend(20);
//   // console.log("Size of List " + list.getSize());
//   // console.log("list is empty " + list.isEmpty());
//   list.prepend(50);
//   // list.printList();
//   // list.findElemntByIndex(3);
//   list.append(100);
//   list.append(100);
//   list.append(101);
//   list.append(103);
//   list.printList();

//   list.KthNodeFormLast(2);
//   console.log(list.secondLogicForKthNode(2));
//   list.printList();
  