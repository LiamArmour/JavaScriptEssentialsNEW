'use strict';

(function(){
    var list = function(){

        var instanceOfLinkedList = Object.create(methodsOfLinkedList);
        instanceOfLinkedList.head = null;
        instanceOfLinkedList.tail = null;
        return instanceOfLinkedList;
    };

    var methodsOfLinkedList = {
        add: function(){
            var i, j;
            for (i=0, j=arguments.length; i<j; i++){
                var newNode = makeNode(arguments[i]);
                if(!this.head){
                    this.head = newNode;
                }
                if (this.tail){
                    this.tail.next = newNode;
                }

                this.tail = newNode;
            }
        },
        remove: function(){
            var currentNode = this.head;
            this.head = currentNode.next;
            currentNode = null;
        },
        contains: function(node){
            var currentNodePosition = this.head;
            while(currentNodePosition){
                if (currentNodePosition.data === node){
                    return true;
                }
                currentNodePosition = currentNodePosition.next;
            }
            return false;
        }
    };

    var makeNode = function(value){
        var position = {
            data: value,
            next: null
        };
        return position;
    };

    var createNewList = list();
    createNewList.add(1, 2, 3, 4, 5);
    console.log("Does 1 exist? " + createNewList.contains(1));
    console.log("Does 2 exist? " + createNewList.contains(2));
    console.log("-- Now lets remove the first list item");
    createNewList.remove();
    console.log("Does 1 exist? " + createNewList.contains(1));
    createNewList.remove();
    console.log("-- Now lets remove the next first list item, this should remove 2");
    console.log("Does 2 exist? " + createNewList.contains(2));

})();