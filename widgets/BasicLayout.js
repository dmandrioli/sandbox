define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/_WidgetBase", "dojo/dom-geometry", "dojo/dom-class", "dojo/dom-construct", "dojo/has"],
	function(declare, lang, WidgetBase, domGeom, domClass, domConstruct, has){
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