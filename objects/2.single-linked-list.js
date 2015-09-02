'use strict';
function Node(valueOfNode){
    var me = this;
    me.value = valueOfNode;
    me.next = null;
    me.removeNext = function(){
        if(me.next === null){
            return;
        }
        else if( me.next.next === null){
            me.next = null;
        }
        else {
            me.next = me.next.next;
        }
    };

    me.insert = function(newNode){
        if(me.next !== null){
            var nextNext = me.next;
            me.next = newNode;
            newNode.next = nextNext;
        }
        else {
            me.next = newNode;
        }
    };
}
function createList(head){
    var position = head;
    if(position === null)
    {
        return;
    }
    while(position.next !== null){
        console.log(position.value);
        position = position.next;
    }
    console.log(position.value);
}

var myNode = new Node(1);

myNode.insert(new Node(2));
myNode.insert(new Node(3));
myNode.insert(new Node(4));
myNode.insert(new Node(5));
myNode.insert(new Node(6));
myNode.insert(new Node(7));

createList(myNode);

console.log("The New list - 5");

myNode.next.next.removeNext();

createList(myNode);