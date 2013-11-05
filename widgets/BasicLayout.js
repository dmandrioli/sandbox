define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/_WidgetBase", "dojo/dom-geometry", "dojo/dom-class", "dojo/dom-construct", "dojo/has"],
	function(declare, lang, WidgetBase, domGeom, domClass, domConstruct, has){
		return declare(WidgetBase, {
			baseClass: "mblBasicLayout",
			direction: "horizontal",
			_surround:function(node, cl){

				if(!node){
					debugger;
					return;
				}

				var nn = domConstruct.create("div", cl?{class:cl}:null, node, "replace");

				domConstruct.place(node, nn, "last");
				return nn;
			},
			_surroundAllChildren:function(node, cl){

				if(!node){
					debugger;
					return;
				}
				var clds = this._copyChildren(node);
				var nn = domConstruct.create("div", cl?{class:cl}:null, node, "first");
				for(var i = 0; i < clds.length; i++){
					domConstruct.place(clds[i], nn, "last");
				}
				return nn;
			},
			_surroundEachChild:function(node, cl){

				if(!node){
					debugger;
					return;
				}
				var clds = this._copyChildren(this.domNode);
				for(var i = 0; i < clds.length; i++){

					this._surround(clds[i], cl);
				}
				return node;
			},
			_copyChildren: function(node){
				var cnodes = [];
				for(var i = 0; i < node.children.length; i++){
					cnodes.push(node.children.item(i));
				}
				return cnodes;
			},
			buildRendering: function(){
				this.inherited(arguments);
				if(this.direction == "horizontal"){
					domClass.add(this.domNode, "mblHBasicLayout");
				}else{
					domClass.add(this.domNode, "mblVBasicLayout");
				}
				if(true || has.ie < 10){
					var cnodes = [];
					for(var i = 0; i < this.domNode.children.length; i++){
						cnodes.push(this.domNode.children.item(i));
					}
					if(this.direction == "horizontal"){
						this._surroundEachChild(this.domNode, "td");
						this._surroundAllChildren(this.domNode, "tr");
						this._surroundAllChildren(this.domNode, "table hfill vfill");

						//var nn = domConstruct.create("div", {class:"width100"}, this.domNode, "first");
						//nn = domConstruct.create("div", {class:"width100"}, nn, "first");
						//for(var i = 0; i < cnodes.length; i++){
						//	domConstruct.place(cnodes[i], nn, "last");
						//}
					}else{
						this._surroundAllChildren(this._surroundEachChild(this._surroundEachChild(this.domNode, "td"), "tr"), "table hfill vfill");

//						for(var i = 0; i < cnodes.length; i++){
//
//							tr = domConstruct.create("div", {class:"width100"}, tb, "first");
//							td = domConstruct.create("div", {class:"width100"}, tr, "first");
//							domConstruct.place(cnodes.pop(), td, "first");
//						}
					}
				}

			}
		});
	}
)