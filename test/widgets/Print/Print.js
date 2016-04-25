// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({
    cache: {
        "url:widgets/Print/templates/Print.html": '\x3cdiv class\x3d"gis_PrintDijit"\x3e\r\n    \x3cdiv class\x3d"formContainer"\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"printSettingsFormDijit"\x3e\r\n            \x3ctable cellspacing\x3d"5" style\x3d"width:100%;"\x3e\r\n                \x3ctr data-dojo-attach-point\x3d"titleTr"\x3e\r\n                    \x3ctd style\x3d"width:65px;"\x3e\r\n                        ${nls.title}:\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cinput type\x3d"text" data-dojo-attach-point\x3d"titleNode" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"name:\'title\',trim:true,required:true,style:\'width:100%;\'" /\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr style\x3d"display: none"\x3e\r\n                    \x3ctd\x3e\r\n                        ${nls.layout}:\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cinput type\x3d"select" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"name:\'layout\',style:\'width:100%;\'"\r\n                        data-dojo-attach-point\x3d"layoutDijit" data-dojo-attach-event\x3d"Change:onLayoutChange"/\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr style\x3d"display: none"\x3e\r\n                    \x3ctd\x3e\r\n                        ${nls.format}:\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cinput type\x3d"select" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"name:\'format\',style:\'width:100%;\'"\r\n                        data-dojo-attach-point\x3d"formatDijit" /\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n            \x3c/table\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"buttonActionBar jimu-align-trailing"\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/DropDownButton" data-dojo-attach-point\x3d"advancedButtonDijit" data-dojo-props\x3d"iconClass:\'settingsIcon\',showLabel:true" style\x3d"display: none"\x3e\r\n            \x3cspan\x3e\r\n                ${nls.settings}\r\n            \x3c/span\x3e\r\n            \x3cdiv data-dojo-type\x3d"dijit/TooltipDialog" class\x3d"gis_PrintDijit"\x3e\r\n                \x3cdiv style\x3d"width:250px;"\x3e\r\n                    \x3cdiv style\x3d"font-weight:bold;"\x3e\r\n                        ${nls.mapScaleExtent}:\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"preserveFormDijit"\x3e\r\n                        \x3ctable cellspacing\x3d"5"\x3e\r\n                            \x3ctr\x3e\r\n                                \x3ctd style\x3d"vertical-align:middle;"\x3e\r\n                                    ${nls.preserve}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"printWidgetMapScale" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-props\x3d"name:\'preserveScale\',checked:true,value:\'true\'"\r\n                                    /\x3e\x3clabel data-dojo-attach-point\x3d"printWidgetMapScaleLabel"\x3e${nls.mapScale}\x3c/label\x3e\r\n                                    \x3cbr /\x3e\r\n                                    \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"printWidgetMapExtent" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-props\x3d"name:\'preserveScale\',value:\'false\'"\r\n                                    /\x3e\x3clabel data-dojo-attach-point\x3d"printWidgetMapExtentLabel"\x3e${nls.mapExtent}\x3c/label\x3e\r\n                                \x3c/td\x3e\r\n                                \x3ctr\x3e\r\n                                    \x3ctd\x3e\r\n                                        ${nls.forceScale}:\r\n                                    \x3c/td\x3e\r\n                                    \x3ctd\x3e\r\n                                        \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-props\x3d"name:\'preserveScale\',value:\'force\',checked:false"/\x3e \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"name:\'forcedScale\',required:false,style:\'width:100px;\'" data-dojo-attach-point\x3d"forceScaleNTB"/\x3e \x3ca href\x3d"#" data-dojo-attach-event\x3d"click:getCurrentMapScale"\x3e${nls.getCurrentScale}\x3c/a\x3e\r\n                                    \x3c/td\x3e\r\n                                \x3c/tr\x3e\r\n                            \x3c/tr\x3e\r\n                        \x3c/table\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv style\x3d"font-weight:bold;"\x3e\r\n                        ${nls.mapMetadata}:\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"layoutMetadataDijit"\x3e\r\n                        \x3ctable cellspacing\x3d"5" style\x3d"width:100%;"\x3e\r\n                            \x3ctr data-dojo-attach-point\x3d"authorTr"\x3e\r\n                                \x3ctd\x3e\r\n                                    ${nls.author}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"text" data-dojo-attach-point\x3d"authorNode" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"name:\'author\',trim:true,required:false,style:\'width:100%;\'" data-dojo-attach-point\x3d"authorTB"\r\n                                    /\x3e\r\n                                \x3c/td\x3e\r\n                            \x3c/tr\x3e\r\n                            \x3ctr data-dojo-attach-point\x3d"copyrightTr"\x3e\r\n                                \x3ctd\x3e\r\n                                    ${nls.copyright}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"text" data-dojo-attach-point\x3d"copyrightNode" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"name:\'copyright\',trim:true,required:false,style:\'width:100%;\'" /\x3e\r\n                                \x3c/td\x3e\r\n                            \x3c/tr\x3e\r\n                        \x3c/table\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"customTextElementsDijit"\x3e\r\n                        \x3ctable cellspacing\x3d"5" style\x3d"width:100%;" data-dojo-attach-point\x3d"customTextElementsTable"\x3e\r\n\r\n                        \x3c/table\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"layoutFormDijit"\x3e\r\n                        \x3ctable cellspacing\x3d"5"\x3e\r\n                            \x3ctr data-dojo-attach-point\x3d"legendTr"\x3e\r\n                                \x3ctd\x3e\r\n                                    ${nls.lncludeLegend}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"checkbox" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"name:\'legend\',value:true,checked:true"\r\n                                    /\x3e\r\n                                \x3c/td\x3e\r\n                            \x3c/tr\x3e\r\n                        \x3c/table\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv style\x3d"font-weight:bold;"\x3e\r\n                        ${nls.mapOnlyOptions}:\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"mapOnlyFormDijit"\x3e\r\n                        \x3ctable cellspacing\x3d"5"\x3e\r\n                            \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                    ${nls.width}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"name:\'width\',required:true,value:670,style:\'width:100px;\'"\r\n                                    /\x3e\r\n                                \x3c/td\x3e\r\n                            \x3c/tr\x3e\r\n                            \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                    ${nls.height}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"name:\'height\',required:true,value:500,style:\'width:100px;\'"\r\n                                    /\x3e\r\n                                \x3c/td\x3e\r\n                            \x3c/tr\x3e\r\n                        \x3c/table\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv style\x3d"font-weight:bold;"\x3e\r\n                        ${nls.printQualityOptions}:\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"mapQualityFormDijit"\x3e\r\n                        \x3ctable cellspacing\x3d"5"\x3e\r\n                            \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                    ${nls.dpi}:\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                    \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"name:\'dpi\',required:true,value:96,style:\'width:100px;\'"\r\n                                    /\x3e\r\n                                \x3c/td\x3e\r\n                            \x3c/tr\x3e\r\n                        \x3c/table\x3e\r\n                    \x3c/div\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/Button" data-dojo-props\x3d"busyLabel:\'printing\',iconClass:\'printIcon\'"\r\n        data-dojo-attach-event\x3d"onClick:print" data-dojo-attach-point\x3d"printButtonDijit"\x3e\r\n            ${nls.print}\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- \x3chr calss\x3d"spacer"\x3e --\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"printResultsNode" class\x3d"resultsContainer"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"clearActionBarNode" class\x3d"buttonActionBar"\r\n    style\x3d"display:none;padding:0;"\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/Button" data-dojo-props\x3d"iconClass:\'clearIcon\'"\r\n        data-dojo-attach-event\x3d"onClick:clearResults"\x3e\r\n            ${nls.clearList}\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
        "url:widgets/Print/templates/PrintResult.html": '\x3cdiv class\x3d"printResult" data-dojo-attach-point\x3d"resultNode" data-dojo-attach-event\x3d"onclick:_openPrint"\x3e\r\n  \x3ctable class\x3d"printResultTable"\x3e\r\n    \x3ctr\x3e\r\n      \x3ctd width\x3d"25px"\x3e\r\n        \x3cspan class\x3d"bold"\x3e${count}.\x3c/span\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd width\x3d"30px"\x3e\r\n        \x3cimg src\x3d"${icon}"\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd data-dojo-attach-point\x3d"nameNode"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"progressBar" data-dojo-type\x3d"dijit/ProgressBar" data-dojo-props\x3d\'value:Infinity\'\x3e\x3c/div\x3e\r\n        \x3cspan data-dojo-attach-point\x3d"successNode" class\x3d"bold" style\x3d"display:none;"\x3e${docName}\x3c/span\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"errNode" style\x3d"display:none;"\x3e\r\n          \x3cspan class\x3d"bold"\x3e${nls.printError}\x3c/span\x3e\r\n          \x3cdiv class\x3d"jimu-icon jimu-icon-error jimu-float-trailing"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e\r\n'
    }
});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin esri/tasks/PrintTask esri/tasks/PrintParameters esri/tasks/PrintTemplate esri/request esri/lang dojo/_base/lang dojo/_base/array dojo/_base/html dojo/dom-style dojo/dom-construct dojo/dom-class dojo/promise/all dojo/Deferred jimu/portalUrlUtils dojo/text!./templates/Print.html dojo/text!./templates/PrintResult.html dojo/aspect dojo/query jimu/LayerInfos/LayerInfos jimu/dijit/LoadingShelter jimu/dijit/Message jimu/utils dijit/form/ValidationTextBox dijit/form/Form dijit/form/Select dijit/form/NumberTextBox dijit/form/Button dijit/form/CheckBox dijit/ProgressBar dijit/form/DropDownButton dijit/TooltipDialog dijit/form/RadioButton esri/IdentityManager dojo/store/Memory".split(" "),
    function(q, r, s, t, A, B, C, u, D, d, m, c, h, E, v, F, w, x, p, G, y, z, H, I, J, n, K) {
        p = q([r, s, t], {
            widgetsInTemplate: !0,
            templateString: p,
            map: null,
            count: 1,
            results: [],
            authorText: null,
            copyrightText: null,
            defaultTitle: null,
            defaultFormat: null,
            defaultLayout: null,
            baseClass: "gis_PrintDijit",
            pdfIcon: require.toUrl("./widgets/Print/images/pdf.png"),
            imageIcon: require.toUrl("./widgets/Print/images/image.png"),
            printTaskURL: null,
            printTask: null,
            async: !1,
            _currentTemplateInfo: null,
            postCreate: function() {
                this.inherited(arguments);
                this.printTask =
                    new A(this.printTaskURL, {
                        async: this.async
                    });
                this.printparams = new B;
                this.printparams.map = this.map;
                this.printparams.outSpatialReference = this.map.spatialReference;
                this.shelter = new I({
                    hidden: !0
                });
                this.shelter.placeAt(this.domNode);
                this.shelter.startup();
                this.shelter.show();
                this.titleNode.set("value", n.sanitizeHTML(this.defaultTitle));
                this.authorNode.set("value", n.sanitizeHTML(this.defaultAuthor));
                this.copyrightNode.set("value", n.sanitizeHTML(this.defaultCopyright));
                var a = x.setHttpProtocol(this.printTaskURL),
                    b = x.getNewPrintUrl(this.appConfig.portalUrl);
                this._isNewPrintUrl = a === b || /sharing\/tools\/newPrint$/.test(a);
                a = z("input", this.printWidgetMapScale.domNode)[0];
                b = z("input", this.printWidgetMapExtent.domNode)[0];
                n.combineRadioCheckBoxWithLabel(a, this.printWidgetMapScaleLabel);
                n.combineRadioCheckBoxWithLabel(b, this.printWidgetMapExtentLabel);
                H.getInstance(this.map, this.map.itemInfo).then(d.hitch(this, function(a) {
                    this.layerInfosObj = a;
                    return F([this._getPrintTaskInfo(), this._getLayerTemplatesInfo()]).then(d.hitch(this,
                        function(a) {
                            var b = a[0];
                            if ((a = a[1]) && !a.error) {
                                if ((a = a && a.results) && 0 < a.length) m.some(a, d.hitch(this, function(a) {
                                    return a && "Output_JSON" === a.paramName ? this.templateInfos = a.value : !1
                                })), this.templateInfos && 0 < this.templateInfos.length && (this.templateNames = m.map(this.templateInfos, function(a) {
                                    return a.layoutTemplate
                                }))
                            } else console.warn("Get Layout Templates Info Error", a && a.error);
                            !D.isDefined(b) || b && b.error ? this._handleError(b.error) : this._handlePrintInfo(b)
                        }))
                })).always(d.hitch(this, function() {
                    this.shelter.hide()
                }));
                this.printTask._getPrintDefinition && y.after(this.printTask, "_getPrintDefinition", d.hitch(this, "printDefInspector"), !1);
                this.printTask._createOperationalLayers && y.after(this.printTask, "_createOperationalLayers", d.hitch(this, "_excludeInvalidLegend"))
            },
            _getPrintTaskInfo: function() {
                var a = new w;
                this._isNewPrintUrl ? a.resolve({
                    isGPPrint: !1
                }) : u({
                    url: this.printTaskURL,
                    content: {
                        f: "json"
                    },
                    callbackParamName: "callback",
                    handleAs: "json",
                    timeout: 6E4
                }).then(d.hitch(this, function(b) {
                        a.resolve({
                            isGPPrint: !0,
                            data: b
                        })
                    }),
                    d.hitch(this, function(b) {
                        a.resolve({
                            error: b
                        })
                    }));
                return a
            },
            _getLayerTemplatesInfo: function() {
                var a = new w,
                    b = this.printTaskURL.split("/"),
                    c = b.indexOf("GPServer");
                if (-1 < c) {
                    var k = null,
                        k = /Utilities\/PrintingTools\/GPServer/.test(this.printTaskURL) ? b.slice(0, c + 1).join("/") + "/" + encodeURIComponent("Get Layout Templates Info Task") + "/execute" : b.slice(0, c + 1).join("/") + "/" + encodeURIComponent("Get Layout Templates Info") + "/execute";
                    u({
                        url: k,
                        content: {
                            f: "json"
                        },
                        callbackParamName: "callback",
                        handleAs: "json",
                        timeout: 6E4
                    }).then(d.hitch(this,
                        function(b) {
                            a.resolve(b)
                        }), d.hitch(this, function(b) {
                        a.resolve({
                            error: b
                        })
                    }))
                } else a.resolve(null);
                return a
            },
            _excludeInvalidLegend: function(a) {
                function b(a) {
                    return m.filter(a.subLayerIds, d.hitch(this, function(b) {
                        return (b = this.layerInfosObj.getLayerInfoById(a.id + "_" + b)) && b.getShowLegendOfWebmap()
                    }))
                }
                if (this.printTask.allLayerslegend) {
                    for (var c = this.printTask.allLayerslegend, k = [], l = 0; l < c.length; l++) {
                        var g = c[l],
                            e = this.map.getLayer(g.id),
                            f = this.layerInfosObj.getLayerInfoById(g.id),
                            h = e && e.declaredClass &&
                            "esri.layers.GraphicsLayer" !== e.declaredClass,
                            e = !e.renderer || e.renderer && !e.renderer.hasVisualVariables(),
                            f = f && f.getShowLegendOfWebmap();
                        h && (e && f) && (g.subLayerIds && (g.subLayerIds = d.hitch(this, b, g)()), k.push(g))
                    }
                    this.printTask.allLayerslegend = k
                }
                return a
            },
            printDefInspector: function(a) {
                "force" === this.preserve.preserveScale && (a.mapOptions.scale = this.preserve.forcedScale);
                return a
            },
            _handleError: function(a) {
                console.log("print widget load error: ", a);
                new J({
                    message: a.message || a
                })
            },
            onLayoutChange: function(a) {
                var b =
                    this.templateNames && this.templateNames.indexOf(a); - 1 < b ? (c.empty(this.customTextElementsTable), a = this._currentTemplateInfo = this.templateInfos[b], (b = d.getObject("layoutOptions.customTextElements", !1, a)) && 0 < b.length && m.forEach(b, d.hitch(this, function(a) {
                    for (var b in a) {
                        var d = this.customTextElementsTable.insertRow(-1);
                        d.insertCell(-1).appendChild(c.toDom(b + ": "));
                        d.insertCell(-1).appendChild((new K({
                            name: b,
                            trim: !0,
                            required: !1,
                            value: a[b],
                            style: "width:100%"
                        })).domNode)
                    }
                })), d.getObject("layoutOptions.hasAuthorText", !1, a) ? c.setStyle(this.authorTr, "display", "") : c.setStyle(this.authorTr, "display", "none"), d.getObject("layoutOptions.hasCopyrightText", !1, a) ? c.setStyle(this.copyrightTr, "display", "") : c.setStyle(this.copyrightTr, "display", "none"), d.getObject("layoutOptions.hasTitleText", !1, a) ? c.setStyle(this.titleTr, "display", "") : c.setStyle(this.titleTr, "display", "none"), d.getObject("layoutOptions.hasLegend", !1, a) ? c.setStyle(this.legendTr, "display", "") : c.setStyle(this.legendTr, "display", "none")) : "MAP_ONLY" === a ? (c.setStyle(this.authorTr,
                    "display", "none"), c.setStyle(this.copyrightTr, "display", "none"), c.setStyle(this.titleTr, "display", "none"), c.setStyle(this.legendTr, "display", "none"), this._currentTemplateInfo = {
                    layoutOptions: {
                        hasTitleText: !1,
                        hasCopyrightText: !1,
                        hasAuthorText: !1,
                        hasLegend: !1
                    }
                }) : (c.setStyle(this.authorTr, "display", ""), c.setStyle(this.copyrightTr, "display", ""), c.setStyle(this.titleTr, "display", ""), c.setStyle(this.legendTr, "display", ""), this._currentTemplateInfo = {
                    layoutOptions: {
                        hasTitleText: !0,
                        hasCopyrightText: !0,
                        hasAuthorText: !0,
                        hasLegend: !0
                    }
                })
            },
            _getMapAttribution: function() {
                var a = this.map.attribution;
                return a && a.domNode ? c.getProp(a.domNode, "textContent") : ""
            },
            _handlePrintInfo: function(a) {
                if (a.isGPPrint) {
                    a = a.data;
                    h.set(this.layoutDijit.domNode.parentNode.parentNode, "display", "");
                    h.set(this.formatDijit.domNode.parentNode.parentNode, "display", "");
                    h.set(this.advancedButtonDijit.domNode, "display", "");
                    var b = m.filter(a.parameters, function(a) {
                        return "Layout_Template" === a.name
                    });
                    if (0 === b.length) console.log('print service parameters name for templates must be "Layout_Template"');
                    else {
                        var c = m.map(b[0].choiceList, function(a) {
                            return {
                                label: a,
                                value: a
                            }
                        });
                        c.sort(function(a, b) {
                            return a.label > b.label ? 1 : b.label > a.label ? -1 : 0
                        });
                        this.layoutDijit.addOption(c);
                        this.defaultLayout ? this.layoutDijit.set("value", this.defaultLayout) : this.layoutDijit.set("value", b[0].defaultValue);
                        a = m.filter(a.parameters, function(a) {
                            return "Format" === a.name
                        });
                        0 === a.length ? console.log('print service parameters name for format must be "Format"') : (b = m.map(a[0].choiceList, function(a) {
                            return {
                                label: a,
                                value: a
                            }
                        }), b.sort(function(a,
                            b) {
                            return a.label > b.label ? 1 : b.label > a.label ? -1 : 0
                        }), this.formatDijit.addOption(b), this.defaultFormat ? this.formatDijit.set("value", this.defaultFormat) : this.formatDijit.set("value", a[0].defaultValue))
                    }
                } else h.set(this.layoutDijit.domNode.parentNode.parentNode, "display", "none"), h.set(this.formatDijit.domNode.parentNode.parentNode, "display", "none"), h.set(this.advancedButtonDijit.domNode, "display", "none")
            },
            print: function() {
                if (this.printSettingsFormDijit.isValid()) {
                    var a = this.printSettingsFormDijit.get("value");
                    d.mixin(a, this.layoutMetadataDijit.get("value"));
                    this.preserve = this.preserveFormDijit.get("value");
                    d.mixin(a, this.preserve);
                    this.layoutForm = this.layoutFormDijit.get("value");
                    var b = this.mapQualityFormDijit.get("value"),
                        c = this.mapOnlyFormDijit.get("value");
                    d.mixin(c, b);
                    var k = this.customTextElementsDijit.get("value"),
                        b = [],
                        l;
                    for (l in k) {
                        var g = {};
                        g[l] = k[l];
                        b.push(g)
                    }
                    var e = this._currentTemplateInfo;
                    l = d.getObject("layoutOptions.hasAuthorText", !1, e);
                    var k = d.getObject("layoutOptions.hasCopyrightText", !1, e),
                        g = d.getObject("layoutOptions.hasLegend", !1, e),
                        e = d.getObject("layoutOptions.hasTitleText", !1, e),
                        f = new C;
                    f.format = a.format;
                    f.layout = a.layout;
                    f.preserveScale = "true" === a.preserveScale || "force" === a.preserveScale;
                    f.label = a.title;
                    f.exportOptions = c;
                    f.layoutOptions = {
                        authorText: l ? a.author : "",
                        copyrightText: "",
                        legendLayers: g && 0 < this.layoutForm.legend.length && this.layoutForm.legend[0] ? null : [],
                        titleText: e ? a.title : "",
                        customTextElements: b
                    };
                    this.printparams.template = f;
                    this.printparams.extraParameters = {
                        printFlag: !0
                    };
                    c = this.printTask.execute(this.printparams);
                    (new L({
                        count: this.count.toString(),
                        icon: "PDF" === a.format ? this.pdfIcon : this.imageIcon,
                        docName: a.title,
                        title: a.format + ", " + a.layout,
                        fileHandle: c,
                        nls: this.nls
                    })).placeAt(this.printResultsNode, "last").startup();
                    h.set(this.clearActionBarNode, "display", "block");
                    this.count++
                } else this.printSettingsFormDijit.validate()
            },
            clearResults: function() {
                E.empty(this.printResultsNode);
                h.set(this.clearActionBarNode, "display", "none");
                this.count = 1
            },
            updateAuthor: function(a) {
                (a =
                    a || "") && this.authorTB && this.authorTB.set("value", a)
            },
            getCurrentMapScale: function() {
                this.forceScaleNTB.set("value", this.map.getScale())
            }
        });
        var L = q([r, s, t], {
            widgetsInTemplate: !0,
            templateString: G,
            url: null,
            postCreate: function() {
                this.inherited(arguments);
                this.progressBar.set("label", this.nls.creatingPrint);
                this.fileHandle.then(d.hitch(this, "_onPrintComplete"), d.hitch(this, "_onPrintError"))
            },
            _onPrintComplete: function(a) {
                a.url ? (this.url = a.url, c.setStyle(this.progressBar.domNode, "display", "none"), c.setStyle(this.successNode,
                    "display", "inline-block"), v.add(this.resultNode, "printResultHover")) : this._onPrintError(this.nls.printError)
            },
            _onPrintError: function(a) {
                console.log(a);
                c.setStyle(this.progressBar.domNode, "display", "none");
                c.setStyle(this.errNode, "display", "block");
                v.add(this.resultNode, "printResultError");
                c.setAttr(this.domNode, "title", a.details || a.message || "")
            },
            _openPrint: function() {
                null !== this.url && window.open(this.url)
            }
        });
        return p
    });