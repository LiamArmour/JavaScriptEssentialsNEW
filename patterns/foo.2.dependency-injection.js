var AudioService  = function (){
    this.playClickNoise = function(){
        console.log('click');
    }
};
var DrWhoAudioService  = function (){
    this.playClickNoise = function(){
        console.log('whoosh');
    }
};

var Controller = function(audioService){
    this.click = function(){
        audioService.playClickNoise();
    }
};


var DIFramework = (function(){
    var dependencies = {};

    var register = function(name, constructorFunction){
        var subDependencyNames = [];
        for(var i =2; i< arguments.length; i++) {
            subDependencyNames.push(arguments[i]);
        }
        dependencies[name] = {
            constructorFunction: constructorFunction,
            subDependencyNames: subDependencyNames
        };
    };

    var getSubDependencies = function (dependency) {
        var subDependencyNames = dependency.subDependencyNames;
        var argsToInject = [];
        for(var i =0; i< subDependencyNames.length; i++) {
            var subDependencyName = subDependencyNames[i];
            var instanceToInject =inject(subDependencyName);
            argsToInject.push(instanceToInject);
        }
        return argsToInject;
    }

    var inject = function(name){

        var dependency = dependencies[name];
        var argsToInject = getSubDependencies(dependency);

        var instance = Object.create(dependency.constructorFunction.prototype);
        //Call the constructor function to set the object up fully:
        dependency.constructorFunction.apply(instance, argsToInject);
        return instance;
    };


    return {
        inject: inject,
        register: register
    };

}());

DIFramework.register('audioService', AudioService);
DIFramework.register('drWhoAudioService', DrWhoAudioService);
DIFramework.register('controller', Controller, 'audioService');
DIFramework.register('controller2', Controller, 'drWhoAudioService');
var controller = DIFramework.inject('controller');
var controller2 = DIFramework.inject('controller2');
controller.click();
controller2.click();