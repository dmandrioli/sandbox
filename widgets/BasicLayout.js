define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase", "dojo/dom-geometry", "dojo/dom-class", "dojo/dom-construct", "dijit/registry"],
    function(declare, lang, WidgetBase, domGeom, domClass, domConstruct, registry){
        return declare(WidgetBase, {
            baseClass: "mblBasicLayout",
            direction: "horizontal",
            buildRendering: function(){
                this.inherited(arguments);
                if(this.direction == "horizontal"){
                    domClass.add(this.domNode, "mblHBasicLayout");
                }else{
                    domClass.add(this.domNode, "mblVBasicLayout");
                }
            }
        });
    }
)
