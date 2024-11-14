sap.ui.define([
	"sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
	"use strict";

	new ComponentContainer({
		name: "ui5.Chester",
		settings : {
			id : "Chester"
		},
		async: true
	}).placeAt("content");
});