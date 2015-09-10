'use strict';
function Node(valueOfNode){
    var me = this;
    me.value = valueOfNode;
    me.next = null;
    me.previous = null;
    var nodeNumber = 0;

    this.deletePrevious = function(){
        if(me.previous === null){
            return;
        }
        else if( me.previous.previous === null){
            return me;
        }
        else {
            me.previous = me.previous.previous;
        }
    };

    this.removeNext = function(){
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

    this.insertItemAfter = function(newNode){
        if(me.next !== null){
            newNode.next = me.next;
            newNode.previous = me;
            newNode.next.previous = newNode;
            newNode.previous.next = newNode;
        }
        else {
            me.next = newNode;
            me.next.previous = me;
        }
    };

    this.insertBefore = function(newNode){
        if(this.previous !== null){
            newNode.previous = this.previous;
            newNode.next = this;
            newNode.previous.next = newNode;
            newNode.next.previous = newNode;
        }
        else {
            this.previous = newNode;
            newNode.next = this;
        }
    };
}

function createList(listStart){
    var position = listStart;
    if(position === null)
    {
        console.log("AHHHHH!!! ITS NULLL!");
        return;
    }
    while(position.next !== null){
        console.log(position.value);
        position = position.next;
    }
    console.log(position.value);
}

var myNode = new Node(1);

myNode.insertItemAfter(new Node(2));
myNode.insertItemAfter(new Node(3));
myNode.next.next.insertBefore(new Node(8));
createList(myNode);
console.log('CREATING LIST');
myNode.insertItemAfter(new Node(4));
myNode.insertItemAfter(new Node(5));
myNode.insertItemAfter(new Node(6));
myNode.insertItemAfter(new Node(7));
createList(myNode);
console.log("CREATING LIST - 5");
myNode.next.next.removeNext();
createList(myNode);