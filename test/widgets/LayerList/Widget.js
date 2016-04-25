// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
var E = ""
require({
    cache: {
        "widgets/LayerList/LayerListView": function () {
            define("dijit/_WidgetBase dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on dojo/query jimu/dijit/CheckBox ./PopupMenu dijit/_TemplatedMixin dojo/text!./LayerListView.html dojo/dom-attr dojo/dom-class dojo/dom-style ./NlsStrings".split(" "), function (r, n, c, f, g, h, l, q, t, m, p, b, a, k, d) {
                return n([r, m], {
                    templateString: p,
                    _currentSelectedLayerRowNode: null,
                    postMixInProperties: function () {
                        this.inherited(arguments);
                        this.nls =
                                d.value
                    },
                    postCreate: function () {
                        f.forEach(this.operLayerInfos.getLayerInfoArray(), function (e) {
                            this.drawListNode(e, 0, this.layerListTable, !0)
                        }, this);
                        f.forEach(this.operLayerInfos.getTableInfoArray(), function (e) {
                            this.drawListNode(e, 0, this.tableListTable, !0)
                        }, this)
                    },
                    drawListNode: function (e, u, a) {
                        var b;
                        0 === e.newSubLayers.length ? (b = this.addLayerNode(e, u, a), this.config.showLegend ? this.addLegendNode(e, u, b.subNode) : k.set(l(".showLegend-image", b.currentNode)[0], "display", "none")) : (b = this.addLayerNode(e, u, a),
                                f.forEach(e.newSubLayers, c.hitch(this, function (e, a) {
                                    this.drawListNode(a, e + 1, b.subNode)
                                }, u)))
                    },
                    addLayerNode: function (e, a, b) {
                        var s = g.create("tr", {
                            "class": "jimu-widget-row layer-row ",
                            layerTrNodeId: e.id
                        }, b),
                                d, f, m, p, l, n;
                        d = g.create("td", {
                            "class": "col col1"
                        }, s);
                        for (m = 0; m < a; m++)
                            g.create("div", {
                                "class": "begin-blank-div jimu-float-leading",
                                innerHTML: ""
                            }, d);
                        n = g.create("div", {
                            "class": "showLegend-div jimu-float-leading"
                        }, d);
                        p = g.create("img", {
                            "class": "showLegend-image",
                            src: isRTL ? this.layerListWidget.folderUrl +
                                    "images/v_left.png" : this.layerListWidget.folderUrl + "images/v_right.png",
                            alt: "l"
                        }, n);
                        f = g.create("div", {
                            "class": "div-select jimu-float-leading"
                        }, d);
                        m = new q({
                            checked: e.isVisible(),
                            "class": "visible-checkbox-" + e.id
                        });
                        g.place(m.domNode, f);
                        l = g.create("div", {
                            "class": "noLegend-div jimu-float-leading"
                        }, d);
                        g.create("img", {
                            "class": "noLegend-image",
                            src: this.layerListWidget.folderUrl + (e.isTable ? "images/table.png" : "images/noLegend.png"),
                            alt: "l"
                        }, l);
                        if (e.noLegend || e.isTable)
                            k.set(n, "display", "none"), k.set(f, "display",
                                    "none"), k.set(l, "display", "block");
                        k.set(d, "width", 12 * a + 35 + "px");
                        a = g.create("td", {
                            "class": "col col2"
                        }, s);
                        g.create("div", {
                            innerHTML: e.title,
                            "class": "div-content jimu-float-leading"
                        }, a);
                        d = g.create("td", {
                            "class": "col col3"
                        }, s);
                        d = g.create("div", {
                            "class": "layers-list-popupMenu-div"
                        }, d);
                        f = (new t({
                            _layerInfo: e,
                            box: this.layerListWidget.domNode.parentNode,
                            popupMenuNode: d,
                            layerListWidget: this.layerListWidget,
                            _config: this.config
                        })).placeAt(d);
                        this.own(h(f, "onMenuClick", c.hitch(this, this._onPopupMenuItemClick,
                                e, f)));
                        b = g.create("tr", {
                            "class": "",
                            layerContentTrNodeId: e.id
                        }, b);
                        b = g.create("td", {
                            "class": "",
                            colspan: "3"
                        }, b);
                        b = g.create("table", {
                            "class": "layer-sub-node"
                        }, b);
                        this.own(h(a, "click", c.hitch(this, this._onRowTrClick, e, p, s, b)));
                        this.own(h(n, "click", c.hitch(this, this._onRowTrClick, e, p, s, b)));
                        this.own(h(s, "mouseover", c.hitch(this, this._onLayerNodeMouseover, s, f)));
                        this.own(h(s, "mouseout", c.hitch(this, this._onLayerNodeMouseout, s, f)));
                        this.own(h(m.domNode, "click", c.hitch(this, this._onCkSelectNodeClick, e, m)));
                        this.own(h(d, "click", c.hitch(this, this._onPopupMenuClick, e, f, s)));
                        return {
                            currentNode: s,
                            subNode: b
                        }
                    },
                    addLegendNode: function (e, a, b) {
                        b = g.create("tr", {
                            "class": "legend-node-tr"
                        }, b);
                        b = g.create("td", {
                            "class": "legend-node-td"
                        }, b);
                        try {
                            var d = e.createLegendsNode();
                            k.set(d, "font-size", 12 * (a + 1) + "px");
                            g.place(d, b)
                        } catch (c) {
                            console.error(c)
                        }
                    },
                    _fold: function (e, a, d) {
                        "none" === k.get(d, "display") ? (k.set(d, "display", "table"), b.set(a, "src", this.layerListWidget.folderUrl + "images/v.png"), e = !1) : (k.set(d, "display", "none"),
                                b.set(a, "src", isRTL ? this.layerListWidget.folderUrl + "images/v_left.png" : this.layerListWidget.folderUrl + "images/v_right.png"), e = !0);
                        return e
                    },
                    _onCkSelectNodeClick: function (e, a, b) {

                        a.checked ? e.setTopLayerVisible(!0) : e.setTopLayerVisible(!1);
                        b.stopPropagation()
                    },
                    _onPopupMenuClick: function (e, a, b, d) {
                        this._changeSelectedLayerRow(b);
                        a && "opened" === a.state ? a.closeDropMenu() : (this._hideCurrentPopupMenu(), a && (this.currentPopupMenu = a, a.openDropMenu()));
                        d.stopPropagation()
                    },
                    _hideCurrentPopupMenu: function () {
                        this.currentPopupMenu &&
                                "opened" === this.currentPopupMenu.state && this.currentPopupMenu.closeDropMenu()
                    },
                    _onLayerNodeMouseover: function (e, b) {
                        a.add(e, "layer-row-mouseover");
                        b && a.add(b.btnNode, "jimu-icon-btn-selected")
                    },
                    _onLayerNodeMouseout: function (e, b) {
                        a.remove(e, "layer-row-mouseover");
                        b && a.remove(b.btnNode, "jimu-icon-btn-selected")
                    },
                    _onLayerListWidgetPaneClick: function (e) {
                        e && e.closeDropMenu()
                    },
                    _onRowTrClick: function (e, a, b, d) {
                        this._changeSelectedLayerRow(b);
                        a = this._fold(e, a, d);
                        e.isLeaf() && !a && (d = l(".legends-div", d)[0], a = l(".legends-loading-img",
                                d)[0], d && a && e.drawLegends(d, this.layerListWidget.appConfig.portalUrl))
                    },
                    _changeSelectedLayerRow: function (e) {
                        this._currentSelectedLayerRowNode && this._currentSelectedLayerRowNode === e || (this._currentSelectedLayerRowNode && a.remove(this._currentSelectedLayerRowNode, "jimu-widget-row-selected"), a.add(e, "jimu-widget-row-selected"), this._currentSelectedLayerRowNode = e)
                    },
                    _onPopupMenuItemClick: function (a, b, d, c) {
                        c = {
                            itemKey: d.key,
                            extraData: c,
                            layerListWidget: this.layerListWidget,
                            layerListView: this
                        };
                        "transparency" ===
                                d.key ? "none" === k.get(b.transparencyDiv, "display") ? b.showTransNode(a.getOpacity()) : b.hideTransNode() : (a = b.popupMenuInfo.onPopupMenuClick(c), a.closeMenu && b.closeDropMenu())
                    },
                    _exchangeLayerTrNode: function (a, b) {
                        var d = l("tr[layerTrNodeId\x3d'" + a + "']", this.layerListTable)[0],
                                c = l("tr[layerTrNodeId\x3d'" + b + "']", this.layerListTable)[0],
                                k = l("tr[layerContentTrNodeId\x3d'" + b + "']", this.layerListTable)[0];
                        this.layerListTable.removeChild(c);
                        this.layerListTable.insertBefore(c, d);
                        this.layerListTable.removeChild(k);
                        this.layerListTable.insertBefore(k, d)
                    },
                    moveUpLayer: function (a) {
                        var b = this.operLayerInfos.moveUpLayer(a);
                        b && this._exchangeLayerTrNode(b, a)
                    },
                    moveDownLayer: function (a) {
                        var b = this.operLayerInfos.moveDownLayer(a);
                        b && this._exchangeLayerTrNode(a, b)
                    }
                })
            })
        },
        "widgets/LayerList/PopupMenu": function () {
            define("dojo/_base/declare dojo/_base/array dojo/_base/html dojo/_base/lang dojo/query dojo/Deferred jimu/dijit/DropMenu jimu/dijit/LoadingIndicator dijit/_TemplatedMixin dijit/form/HorizontalSlider dijit/form/HorizontalRuleLabels dojo/text!./PopupMenu.html dojo/dom-style ./NlsStrings ./PopupMenuInfo".split(" "),
                    function (r, n, c, f, g, h, l, q, t, m, p, b, a, k, d) {
                        return r([l, t], {
                            templateString: b,
                            popupMenuInfo: null,
                            loading: null,
                            _deniedItems: null,
                            _deniedItemsFromConfig: null,
                            _layerInfo: null,
                            constructor: function () {
                                this.nls = k.value
                            },
                            postCreate: function () {
                                this.inherited(arguments);
                                this._initDeniedItems();
                                this.loading = new q({
                                    hidden: !0
                                });
                                this.loading.placeAt(this.popupMenuNode);
                                this.hasContentMenu() || this.hide()
                            },
                            _initDeniedItems: function () {
                                var a = [],
                                        b = {
                                            ZoomTo: "zoomto",
                                            Transparency: "transparency",
                                            EnableOrDisablePopup: "controlPopup",
                                            MoveupOrMovedown: "moveup movedown",
                                            OpenAttributeTable: "table",
                                            DescriptionOrShowItemDetailsOrDownload: "url"
                                        };
                                this._deniedItems = [];
                                this._deniedItemsFromConfig = [];
                                for (var d in this._config.contextMenu)
                                    this._config.contextMenu.hasOwnProperty(d) && ("function" !== typeof this._config.contextMenu[d] && !1 === this._config.contextMenu[d]) && (a = a.concat(b[d].split(" ")));
                                n.forEach(a, f.hitch(this, function (a) {
                                    this._deniedItemsFromConfig.push({
                                        key: a,
                                        denyType: "hidden"
                                    })
                                }))
                            },
                            _getDropMenuPosition: function () {
                                return {
                                    top: "28px",
                                    right: "4px",
                                    zIndex: 1
                                }
                            },
                            _getTransNodePosition: function () {
                                return {
                                    top: "28px",
                                    right: "4px"
                                }
                            },
                            _onBtnClick: function () {},
                            _refresh: function () {
                                this._denyItems();
                                this._changeItemsUI()
                            },
                            _denyItems: function () {
                                var a = g("[class~\x3d'menu-item-identification']", this.dropMenuNode);
                                a.forEach(function (a) {
                                    c.removeClass(a, "menu-item-dissable");
                                    c.removeClass(a, "menu-item-hidden")
                                }, this);
                                c.removeClass(this.dropMenuNode, "no-border");
                                n.forEach(this._deniedItems, function (a) {
                                    var b = g("div[itemId\x3d'" + a.key + "']", this.dropMenuNode)[0];
                                    b && ("disable" === a.denyType ? (c.addClass(b, "menu-item-dissable"), "url" === a.key && g(".menu-item-description", b).forEach(function (a) {
                                        c.setAttr(a, "href", "#");
                                        c.removeAttr(a, "target")
                                    })) : c.addClass(b, "menu-item-hidden"))
                                }, this);
                                for (var b = -1, d = 0; d < a.length; d++)
                                    c.hasClass(a[d], "menu-item-line") && (-1 === b || c.hasClass(a[b], "menu-item-line")) && c.addClass(a[d], "menu-item-hidden"), c.hasClass(a[d], "menu-item-hidden") || (b = d);
                                a = n.filter(a, function (a) {
                                    return !c.hasClass(a, "menu-item-hidden")
                                });
                                0 === a.length ? c.addClass(this.dropMenuNode,
                                        "no-border") : c.hasClass(a[a.length - 1], "menu-item-line") && c.addClass(a[a.length - 1], "menu-item-hidden")
                            },
                            _changeItemsUI: function () {
                                var a = g("[itemid\x3dcontrolPopup]", this.dropMenuNode)[0];
                                a && this._layerInfo.controlPopupInfo && (this._layerInfo.controlPopupInfo.enablePopup ? c.setAttr(a, "innerHTML", this.nls.removePopup) : c.setAttr(a, "innerHTML", this.nls.enablePopup))
                            },
                            selectItem: function (a, b) {
                                for (var d = !1, c = 1; c < this._deniedItems.length; c++)
                                    if (this._deniedItems[c].key === a.key) {
                                        d = !0;
                                        break
                                    }
                                d || this.emit("onMenuClick",
                                        a);
                                b.stopPropagation(b)
                            },
                            openDropMenu: function () {
                                var a = f.hitch(this, this.inherited, arguments),
                                        b = new h;
                                this.loading.show();
                                this.dropMenuNode ? b.resolve(this.popupMenuInfo) : d.create(this._layerInfo, this.layerListWidget).then(f.hitch(this, function (a) {
                                    this.items = a.getDisplayItems();
                                    this.popupMenuInfo = a;
                                    this._createDropMenuNode();
                                    b.resolve(this.popupMenuInfo)
                                }));
                                b.then(f.hitch(this, function () {
                                    this.popupMenuInfo.getDeniedItems().then(f.hitch(this, function (b) {
                                        this._deniedItems = this._deniedItemsFromConfig.concat(b);
                                        this._refresh();
                                        a(arguments);
                                        this.loading.hide()
                                    }), f.hitch(this, function () {
                                        this.loading.hide()
                                    }))
                                }), f.hitch(this, function () {
                                    this.loading.hide()
                                }))
                            },
                            closeDropMenu: function () {
                                this.inherited(arguments);
                                this.hideTransNode()
                            },
                            _onTransparencyDivClick: function (a) {
                                a.stopPropagation()
                            },
                            showTransNode: function (b) {
                                this.transHorizSlider || (this._createTransparencyWidget(), this.transHorizSlider.set("value", 1 - b));
                                a.set(this.transparencyDiv, "top", this._getTransNodePosition().top);
                                isRTL ? a.set(this.transparencyDiv,
                                        "left", this._getTransNodePosition().right) : a.set(this.transparencyDiv, "right", this._getTransNodePosition().right);
                                a.set(this.transparencyDiv, "display", "block")
                            },
                            hideTransNode: function () {
                                a.set(this.transparencyDiv, "display", "none")
                            },
                            _createTransparencyWidget: function () {
                                this.transHorizSlider = new m({
                                    minimum: 0,
                                    maximum: 1,
                                    intermediateChanges: !0
                                }, this.transparencyBody);
                                this.own(this.transHorizSlider.on("change", f.hitch(this, function (a) {
                                    this.emit("onMenuClick", {
                                        key: "transparencyChanged"
                                    }, {
                                        newTransValue: a
                                    })
                                })));
                                new p({
                                    container: "bottomDecoration"
                                }, this.transparencyRule)
                            },
                            hide: function () {
                                a.set(this.domNode, "display", "none")
                            },
                            show: function () {
                                a.set(this.domNode, "display", "block")
                            },
                            hasContentMenu: function () {
                                var a = !1,
                                        b;
                                if (this._config.contextMenu)
                                    for (b in this._config.contextMenu)
                                        this._config.contextMenu.hasOwnProperty(b) && "function" !== typeof this._config.contextMenu[b] && (a = a || this._config.contextMenu[b]);
                                else
                                    a = !0;
                                return a
                            }
                        })
                    })
        },
        "jimu/dijit/DropMenu": function () {
            define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/Evented ../utils".split(" "),
                    function (r, n, c, f, g, h, l, q) {
                        return r([n, l], {
                            baseClass: "jimu-dropmenu",
                            declaredClass: "jimu.dijit.DropMenu",
                            constructor: function () {
                                this.state = "closed"
                            },
                            postCreate: function () {
                                this.btnNode = g.create("div", {
                                    "class": "jimu-icon-btn"
                                }, this.domNode);
                                this.own(h(this.btnNode, "click", c.hitch(this, this._onBtnClick)));
                                this.box || (this.box = this.domNode.parentNode);
                                this.own(h(this.box, "click", c.hitch(this, function () {
                                    this.dropMenuNode && this.closeDropMenu()
                                })))
                            },
                            _onBtnClick: function (c) {
                                c.stopPropagation();
                                this.dropMenuNode ||
                                        this._createDropMenuNode();
                                "closed" === this.state ? this.openDropMenu() : this.closeDropMenu()
                            },
                            _createDropMenuNode: function () {
                                this.dropMenuNode = g.create("div", {
                                    "class": "drop-menu",
                                    style: {
                                        display: "none"
                                    }
                                }, this.domNode);
                                this.items || (this.items = []);
                                f.forEach(this.items, function (f) {
                                    var m;
                                    f.key && "separator" === f.key ? g.create("hr", {
                                        "class": "menu-item-identification menu-item-line",
                                        itemId: f.key
                                    }, this.dropMenuNode) : f.key && (m = g.create("div", {
                                        "class": "menu-item-identification menu-item",
                                        itemId: f.key,
                                        innerHTML: f.label
                                    },
                                            this.dropMenuNode), this.own(h(m, "click", c.hitch(this, function (c) {
                                        this.selectItem(f, c)
                                    }))))
                                }, this)
                            },
                            _getDropMenuPosition: function () {
                                var c = g.getContentBox(this.box),
                                        f = g.getMarginBox(this.domNode),
                                        h = g.getMarginBox(this.btnNode),
                                        b = g.getMarginBox(this.dropMenuNode),
                                        a = {},
                                        k, d;
                                a.l = f.l;
                                a.t = f.t + h.h;
                                a.t + b.h > c.h && (d = f.t, k = c.h - f.t - h.h, k = Math.max(d, k), k === d && (a.t = 0 - b.h));
                                a.l + b.w > c.w && (b = f.l, c = c.w - f.l - h.w, k = Math.max(b, c), k === b && (a.l = "", a.r = 0));
                                a.left = a.l;
                                a.top = a.t;
                                a.right = a.r;
                                return a
                            },
                            selectItem: function (c) {
                                this.closeDropMenu();
                                this.emit("onMenuClick", c)
                            },
                            openDropMenu: function () {
                                this.state = "opened";
                                g.setStyle(this.dropMenuNode, "display", "");
                                g.setStyle(this.dropMenuNode, q.getPositionStyle(this._getDropMenuPosition()));
                                this.emit("onOpenMenu")
                            },
                            closeDropMenu: function () {
                                this.state = "closed";
                                g.setStyle(this.dropMenuNode, "display", "none");
                                this.emit("onCloseMenu")
                            }
                        })
                    })
        },
        "widgets/LayerList/NlsStrings": function () {
            define([], function () {
                return {
                    value: null
                }
            })
        },
        "widgets/LayerList/PopupMenuInfo": function () {
            define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred dojo/promise/all jimu/portalUrlUtils jimu/WidgetManager esri/lang esri/graphicsUtils ./NlsStrings".split(" "),
                    function (r, n, c, f, g, h, l, q, t, m) {
                        var p = r([], {
                            _candidateMenuItems: null,
                            _displayItems: null,
                            _layerInfo: null,
                            _layerType: null,
                            _appConfig: null,
                            constructor: function (b, a, c, d) {
                                this.nls = m.value;
                                this._layerInfo = b;
                                this._layerType = c;
                                this.layerListWidget = d;
                                this._initCandidateMenuItems();
                                this._initDisplayItems(a)
                            },
                            _getATagLabel: function () {
                                var b, a;
                                (b = this._layerInfo._isItemLayer && this._layerInfo._isItemLayer()) ? (b = h.getItemDetailsPageUrl(h.getStandardPortalUrl(this.layerListWidget.appConfig.portalUrl), b), a = this.nls.itemShowItemDetails) :
                                        this._layerInfo.layerObject && this._layerInfo.layerObject.url && ("CSVLayer" === this._layerType || "KMLLayer" === this._layerType) ? (b = this._layerInfo.layerObject.url, a = this.nls.itemDownload) : (b = this._layerInfo.layerObject && this._layerInfo.layerObject.url ? this._layerInfo.layerObject.url : "", a = this.nls.itemDesc);
                                return '\x3ca class\x3d"menu-item-description" target\x3d"_blank" href\x3d"' + b + '"\x3e' + a + "\x3c/a\x3e"
                            },
                            _initCandidateMenuItems: function () {
                                this._candidateMenuItems = [{
                                        key: "separator",
                                        label: ""
                                    }, {
                                        key: "empty",
                                        label: this.nls.empty
                                    }, {
                                        key: "zoomto",
                                        label: this.nls.itemZoomTo
                                    }, {
                                        key: "transparency",
                                        label: this.nls.itemTransparency
                                    }, {
                                        key: "moveup",
                                        label: this.nls.itemMoveUp
                                    }, {
                                        key: "movedown",
                                        label: this.nls.itemMoveDown
                                    }, {
                                        key: "table",
                                        label: this.nls.itemToAttributeTable
                                    }, {
                                        key: "controlPopup",
                                        label: this.nls.removePopup
                                    }, {
                                        key: "url",
                                        label: this._getATagLabel()
                                    }]
                            },
                            _initDisplayItems: function (b) {
                                this._displayItems = [];
                                n.forEach(b, function (a) {
                                    n.forEach(this._candidateMenuItems, function (b) {
                                        a.key === b.key && (this._displayItems.push(c.clone(b)),
                                                a.onClick && (this._displayItem.onClick = a.onClick))
                                    }, this)
                                }, this)
                            },
                            getDeniedItems: function () {
                                var b = new f,
                                        a = [];
                                this._layerInfo.isFirst && a.push({
                                    key: "moveup",
                                    denyType: "disable"
                                });
                                this._layerInfo.isLast && a.push({
                                    key: "movedown",
                                    denyType: "disable"
                                });
                                (!this._layerInfo.layerObject || !this._layerInfo.layerObject.url) && a.push({
                                    key: "url",
                                    denyType: "disable"
                                });
                                var k = this._layerInfo.loadInfoTemplate(),
                                        d = this._layerInfo.getSupportTableInfo();
                                g({
                                    infoTemplate: k,
                                    supportTableInfo: d
                                }).then(c.hitch(this, function (d) {
                                    d.infoTemplate ||
                                            a.push({
                                                key: "controlPopup",
                                                denyType: "disable"
                                            });
                                    d = d.supportTableInfo;
                                    var c = this.layerListWidget.appConfig.getConfigElementsByName("AttributeTable")[0];
                                    if (!c || !c.visible)
                                        a.push({
                                            key: "table",
                                            denyType: "hidden"
                                        });
                                    else if (!d.isSupportedLayer || !d.isSupportQuery || d.otherReasonCanNotSupport)
                                        this._layerInfo.parentLayerInfo && this._layerInfo.parentLayerInfo.isMapNotesLayerInfo() ? a.push({
                                            key: "table",
                                            denyType: "hidden"
                                        }) : a.push({
                                            key: "table",
                                            denyType: "disable"
                                        });
                                    b.resolve(a)
                                }), function () {
                                    b.resolve(a)
                                });
                                return b
                            },
                            getDisplayItems: function () {
                                return this._displayItems
                            },
                            onPopupMenuClick: function (b) {
                                var a = {
                                    closeMenu: !0
                                };
                                switch (b.itemKey) {
                                    case "zoomto":
                                        this._onItemZoomToClick(b);
                                        break;
                                    case "moveup":
                                        this._onMoveUpItemClick(b);
                                        break;
                                    case "movedown":
                                        this._onMoveDownItemClick(b);
                                        break;
                                    case "table":
                                        this._onTableItemClick(b);
                                        break;
                                    case "transparencyChanged":
                                        this._onTransparencyChanged(b);
                                        a.closeMenu = !1;
                                        break;
                                    case "controlPopup":
                                        this._onControlPopup()
                                }
                                return a
                            },
                            _onItemZoomToClick: function (b) {
                                this._layerInfo.getExtent().then(c.hitch(this,
                                        function (a) {
                                            var b = null;
                                            a = a && 0 < a.length && a[0];
                                            this._isValidExtent(a) && (b = a);
                                            b ? this._layerInfo.map.setExtent(b) : 0 <= this._layerInfo.map.graphicsLayerIds.indexOf(this._layerInfo.id) && this._layerInfo.getLayerObject().then(c.hitch(this, function (a) {
                                                if (a.graphics && 0 < a.graphics.length) {
                                                    try {
                                                        b = t.graphicsExtent(a.graphics)
                                                    } catch (c) {
                                                        console.error(c)
                                                    }
                                                    b && this._layerInfo.map.setExtent(b)
                                                }
                                            }))
                                        }))
                            },
                            _isValidExtent: function (b) {
                                var a = !1;
                                q.isDefined(b) && q.isDefined(b.xmin) && (isFinite(b.xmin) && q.isDefined(b.ymin) && isFinite(b.ymin) &&
                                        q.isDefined(b.xmax) && isFinite(b.xmax) && q.isDefined(b.ymax) && isFinite(b.ymax)) && (a = !0);
                                return a
                            },
                            _onMoveUpItemClick: function (b) {
                                this._layerInfo.isFirst || b.layerListView.moveUpLayer(this._layerInfo.id)
                            },
                            _onMoveDownItemClick: function (b) {
                                this._layerInfo.isLast || b.layerListView.moveDownLayer(this._layerInfo.id)
                            },
                            _onTableItemClick: function (b) {
                                this._layerInfo.getSupportTableInfo().then(c.hitch(this, function (a) {
                                    if (a.isSupportedLayer && a.isSupportQuery) {
                                        a = l.getInstance();
                                        var f = this.layerListWidget.appConfig.getConfigElementsByName("AttributeTable")[0];
                                        a.triggerWidgetOpen(f.id).then(c.hitch(this, function () {
                                            b.layerListWidget.publishData({
                                                target: "AttributeTable",
                                                layer: this._layerInfo
                                            })
                                        }))
                                    }
                                }))
                            },
                            _onTransparencyChanged: function (b) {
                                this._layerInfo.setOpacity(1 - b.extraData.newTransValue)
                            },
                            _onControlPopup: function (b) {
                                this._layerInfo.controlPopupInfo.enablePopup ? this._layerInfo.disablePopup() : this._layerInfo.enablePopup();
                                this._layerInfo.map.infoWindow.hide()
                            }
                        });
                        p.create = function (b, a) {
                            var g = new f,
                                    d = b.isRootLayer(),
                                    e = {
                                        RootLayer: [{
                                                key: "zoomto"
                                            }, {
                                                key: "transparency"
                                            }, {
                                                key: "separator"
                                            }, {
                                                key: "moveup"
                                            }, {
                                                key: "movedown"
                                            }, {
                                                key: "separator"
                                            }, {
                                                key: "url"
                                            }],
                                        RootLayerAndFeatureLayer: [{
                                                key: "zoomto"
                                            }, {
                                                key: "transparency"
                                            }, {
                                                key: "separator"
                                            }, {
                                                key: "controlPopup"
                                            }, {
                                                key: "separator"
                                            }, {
                                                key: "moveup"
                                            }, {
                                                key: "movedown"
                                            }, {
                                                key: "separator"
                                            }, {
                                                key: "table"
                                            }, {
                                                key: "separator"
                                            }, {
                                                key: "url"
                                            }],
                                        FeatureLayer: [{
                                                key: "controlPopup"
                                            }, {
                                                key: "separator"
                                            }, {
                                                key: "table"
                                            }, {
                                                key: "separator"
                                            }, {
                                                key: "url"
                                            }],
                                        GroupLayer: [{
                                                key: "url"
                                            }],
                                        Table: [{
                                                key: "table"
                                            }, {
                                                key: "separator"
                                            }, {
                                                key: "url"
                                            }],
                                        "default": [{
                                                key: "url",
                                                onClick: null
                                            }]
                                    };
                            b.getLayerType().then(c.hitch(this, function (c) {
                                var f = "",
                                        f = d && ("FeatureLayer" === c || "CSVLayer" === c || "ArcGISImageServiceLayer" === c || "StreamLayer" === c || "ArcGISImageServiceVectorLayer" === c) ? "RootLayerAndFeatureLayer" : d ? "RootLayer" : "FeatureLayer" === c || "CSVLayer" === c ? "FeatureLayer" : "GroupLayer" === c ? "GroupLayer" : "Table" === c ? "Table" : "default";
                                g.resolve(new p(b, e[f], c, a))
                            }), c.hitch(this, function () {
                                g.resolve(new p(b, [{
                                        key: "empty"
                                    }]))
                            }));
                            return g
                        };
                        return p
                    })
        },
        "widgets/LayerList/_build-generate_module": function () {
            define(["dojo/text!./Widget.html",
                "dojo/text!./css/style.css", "dojo/i18n!./nls/strings", "dojo/text!./config.json"
            ], function () {})
        },
        "url:widgets/LayerList/PopupMenu.html": '\x3cdiv\x3e\r\n  \x3cdiv class\x3d"popup-menu-transparency-body" data-dojo-attach-point\x3d"transparencyDiv" data-dojo-attach-event\x3d"onclick:_onTransparencyDivClick" \x3e\r\n    \x3cdiv class\x3d"label"\x3e\r\n      \x3cdiv class\x3d"label-left jimu-float-leading"\x3e${nls.itemOpaque}\x3c/div\x3e\r\n      \x3cdiv class\x3d"label-right jimu-float-trailing"\x3e${nls.itemTransparent}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"transparencyBody"\x3e \r\n      \x3col data-dojo-attach-point\x3d"transparencyRule" class\x3d"transparency-rule"\x3e \x3c/ol\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3cdiv\x3e\r\n',
        "url:widgets/LayerList/LayerListView.html": '\r\n\r\n\x3ctable class\x3d"layer-list-table"\x3e\r\n  \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"layerListTable"\x3e\x3c/tbody\x3e\r\n  \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"tableListTable"\x3e\x3c/tbody\x3e       \r\n\x3c/table\x3e\r\n',
        "url:widgets/LayerList/Widget.html": '\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layers-section" data-dojo-attach-point\x3d"layersSection"\x3e\r\n    \x3cdiv class\x3d" layer-list-title"\x3e${nls.titleLayers}\x3c/div\x3e\r\n    \x3cdiv class\x3d"layer-list-body" data-dojo-attach-point\x3d"layerListBody"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
        "url:widgets/LayerList/css/style.css": ".jimu-widget-layerList{position: relative;}.jimu-widget-layerList .jimu-hr{margin-top: 15px;}.jimu-widget-layerList .layers-section{margin-top: 0px; z-index: 0; position: relative;}.jimu-widget-layerList .layers-section .layers-list{width: 100%;}.jimu-widget-layerList .layers-section .layer-list-title{height: 16px; font-size: 14px; color: #86909c; margin-top: 14px;}.jimu-widget-layerList .layer-list-body {}.jimu-widget-layerList .layer-list-table{width: 100%; border-spacing: 0px;}.jimu-widget-layerList .layers-list-body{border: 0px solid #999;}.jimu-widget-layerList .jimu-widget-row{}.jimu-widget-layerList .layer-row{background-color: #ffffff; height: 40px;}.jimu-widget-layerList .layer-row-mouseover{background-color: #e3ecf2;}.jimu-widget-layerList .jimu-widget-row-selected{background-color: #d9dde0;;}.jimu-widget-layerList .jimu-widget-row-active{background-color: #009cff;}.jimu-widget-layerList .jimu-widget-row-selected .col-layer-label{color: #333;}.jimu-widget-layerList .jimu-widget-row-active .col-layer-label{color: #fff;}.jimu-widget-layerList .col{border: 0px solid; border-bottom: 0px solid #ffffff;}.jimu-widget-layerList .col1{}.jimu-widget-layerList .col2{width: auto; word-break: break-word; cursor: pointer;}.jimu-widget-layerList .col3{width: 24px;}.jimu-widget-layerList .begin-blank-div{width: 12px; height: 2px;}.jimu-widget-layerList .col-showLegend{width: 17px; text-align: center;}.jimu-widget-layerList .showLegend-div{width: 13px; height: 13px; cursor: pointer;}.jimu-widget-layerList .showLegend-image{margin-left: 3px;}.jimu-rtl .jimu-widget-layerList .showLegend-image{margin-left: 0; margin-right: 3px;}.jimu-widget-layerList .layers-list-imageShowLegend-down{-moz-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); -webkit-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); -o-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); -ms-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);}.jimu-widget-layerList .layers-list-imageShowLegend-down-div{background-color: #d9dde0;}.jimu-widget-layerList .noLegend-div{width: 33px; text-align: right; display: none;}.jimu-widget-layerList .noLegend-image{display: block; margin: 0 auto;}.jimu-widget-layerList .col-blank{width:17px;}.jimu-widget-layerList .col-select{width: 17px;}.jimu-widget-layerList .col-reserve-blank{width: 25px;}.jimu-widget-layerList .col-content{color: #686868; font-size: 12px;}.jimu-widget-layerList .div-select{position: relative; font-size: 2px;}.jimu-widget-layerList .div-select .checkbox{cursor: auto;}.jimu-widget-layerList .div-content{position: relative; color: #686868; font-size: 12px; border: 0px solid;}.jimu-widget-layerList .col-popupMenu{width: 17px; text-align: center;}.jimu-widget-layerList .col-select .jimu-selection-box{margin-top: 5px;}.jimu-widget-layerList .layers-list-body .col-layer-label{color: #686868;}.jimu-widget-layerList .layer-sub-node{display: none; width:100%; border-spacing: 0px;}.jimu-widget-layerList .legend-node-td{}.jimu-widget-layerList .legend-div{overflow: hidden; font-size: 11px;}.jimu-widget-layerList .legend-symbol{}.jimu-widget-layerList .legend-label{margin-top: 17px; color: #686868; font-size: 11px;}.jimu-widget-layerList .esriLegendService {padding-bottom: 0;}.jimu-widget-layerList .esriLegendLayerLabel {padding-top: 0; height: 0; display: none;}.jimu-widget-layerList .esriLegendServiceLabel {display: none;}.jimu-widget-layerList .esriLegendLayer{font-size: 12px;}.jimu-widget-layerList .esriLegendMsg{display: none;}.jimu-widget-layerList .layers-list-popupMenu-div{position: relative; width: 16px; height: 40px; cursor: pointer; border-radius: 2px; float: right; padding-top: 14px;}.jimu-widget-layerList .layers-list-popupMenu-div .loading-section {width: 13px; height: 13px; top: 14px; left: 0; z-index: 1; margin: 0;}.jimu-widget-layerList .layers-list-popupMenu-div .jimu-loading{width: 13px; height: 13px; margin: 0;}.jimu-rtl .jimu-widget-layerList .layers-list-popupMenu-div .jimu-loading{}.jimu-widget-layerList .layers-list-popupMenu-div-selected{width: 13px; height: 13px; background-color: #ffffff; border-radius: 2px;}.jimu-widget-layerList .layers-list-popupMenu-image{position: absolute; top: 5px; left: 3px;}.jimu-widget-layerList .popup-menu-transparency-body {position: absolute; background-color: #d9dde0; outline-color:#ffffff; outline-style:solid; outline-width:1px; width: 220px; height:50px; padding-left: 2%; padding-right: 2%; color: #686868; z-index: 2; font-size: 12px; display: none;}.jimu-widget-layerList .popup-menu-transparency-body .transparency-rule{}.jimu-widget-layerList .popup-menu-transparency-body .label {overflow: hidden; margin-top: 2px; margin-bottom: 1px;}.jimu-widget-layerList .jimu-dropmenu .jimu-icon-btn{width: 13px; height: 13px; min-height: 13px; min-width: 13px; border-radius: 2px;}.jimu-widget-layerList .jimu-dropmenu .jimu-icon-btn-selected{background-color: #ffffff; border: 1px solid #ffffff;}.jimu-widget-layerList .jimu-dropmenu .drop-menu{outline-color:#ffffff; outline-style:solid; outline-width:1px; overflow:auto; color: #686868; font-size: 12px; z-index: 2; min-width: 119px; right: 0px;}.jimu-widget-layerList .jimu-dropmenu .drop-menu.no-border{outline-style: none;}.jimu-rtl .jimu-widget-layerList .jimu-dropmenu .drop-menu{left: 0px;}.jimu-widget-layerList .jimu-dropmenu .menu-item{line-height: 25px; white-space: nowrap;}.jimu-widget-layerList .jimu-dropmenu .menu-item-dissable{color:#c1c1c1;}.jimu-widget-layerList .jimu-dropmenu .menu-item-hidden{display: none;}.jimu-widget-layerList .legends-loading-img{width: 45px;}.jimu-widget-layerList .jimu-dropmenu .menu-item .menu-item-description{text-decoration: none; color: inherit; display: block;}",
        "url:widgets/LayerList/config.json": '{\r\n  "showLegend": true,\r\n  "contextMenu": {\r\n\t"ZoomTo": true,\r\n\t"Transparency": true,\r\n\t"EnableOrDisablePopup": true,\r\n\t"MoveupOrMovedown": true,\r\n\t"OpenAttributeTable": true,\r\n\t"DescriptionOrShowItemDetailsOrDownload": true\r\n  }\r\n}\r\n',
        "*now": function (r) {
            r(['dojo/i18n!*preload*widgets/LayerList/nls/Widget*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])
        }
    }
});
define("jimu/BaseWidget dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom dojo/on dojo/query dijit/registry ./LayerListView ./NlsStrings jimu/LayerInfos/LayerInfos".split(" "), function (r, n, c, f, g, h, l, q, t, m, p) {
    return n([r], {
        baseClass: "jimu-widget-layerList",
        name: "layerList",
        layerListView: null,
        operLayerInfos: null,
        startup: function () {
            this.inherited(arguments);
            m.value = this.nls;
            if (this.map.itemId)
                p.getInstance(this.map, this.map.itemInfo).then(c.hitch(this, function (a) {
                    this.operLayerInfos = a;
                    this.showLayers();
                    this.bindEvents();
                    g.setSelectable(this.layersSection, !1)
                }));
            else {
                var b = this._obtainMapLayers();
                p.getInstance(this.map, b).then(c.hitch(this, function (a) {
                    this.operLayerInfos = a;
                    this.showLayers();
                    this.bindEvents();
                    g.setSelectable(this.layersSection, !1)
                }))
            }
        },
        destroy: function () {
            this._clearLayers();
            this.inherited(arguments)
        },
        _obtainMapLayers: function () {
            var b = [],
                    a = [],
                    c = {
                        itemData: {
                            baseMap: {
                                baseMapLayers: []
                            },
                            operationalLayers: []
                        }
                    };
            f.forEach(this.map.graphicsLayerIds, function (b) {
                b = this.map.getLayer(b);
                b.isOperationalLayer &&
                        a.push({
                            layerObject: b,
                            title: b.label || b.title || b.name || b.id || " ",
                            id: b.id || " "
                        })
            }, this);
            f.forEach(this.map.layerIds, function (c) {
                c = this.map.getLayer(c);
                c.isOperationalLayer ? a.push({
                    layerObject: c,
                    title: c.label || c.title || c.name || c.id || " ",
                    id: c.id || " "
                }) : b.push({
                    layerObject: c,
                    id: c.id || " "
                })
            }, this);
            c.itemData.baseMap.baseMapLayers = b;
            c.itemData.operationalLayers = a;
            return c
        },
        showLayers: function () {
            this.layerListView = (new t({
                operLayerInfos: this.operLayerInfos,
                layerListWidget: this,
                config: this.config
            })).placeAt(this.layerListBody);
            var that = this.layerListView;
            $(".jimu-panel").css("width", function (index) {
                return 230;
            });
            $("#_26_panel").css({"height": "400px"});
            // Position the menu on/off toggle
            $("#dijit__WidgetBase_1").css({"top": "125px", "left": "10px"});
            var div = $(".layer-list-table")
            div.html(mkLayerList());
            // Change the title of the dialog 
            $(".title-label").html('<img src="images/filter.png" height="25" width="25">' + " Filters");
            $(".layer-list-title").text("");
            //$("#dijit__WidgetBase_1").remove();
            // Add on click for the images:
            var index = 0;
            var cSize = 28;
            var bwSize = 25;
            //$(".rowCheck").click(function (){
            //console.log(this);
            //});
            $(".rowCheck").click(function () {
                index = parseInt(this.firstChild.childNodes[0].id);
                var isVisible = that.operLayerInfos._finalLayerInfos[0].newSubLayers[index]._visible;
                var image = this.firstChild.childNodes[0].src
                if (index != 99) {
                    var image = this.firstChild.childNodes[0].src;
                    if (!isVisible) {
                        // Turn on layer
                        if (image.indexOf("_Grey.png") != -1) {
                            this.firstChild.childNodes[0].src = image.replace("_Grey.png", ".png");
                        }
                        that.operLayerInfos._finalLayerInfos[0].newSubLayers[index].setTopLayerVisible(!0);
                        //this.firstChild.childNodes[0].src = "images/Icon-Hospitals.png";
                        this.firstChild.childNodes[0].width = cSize;
                        this.firstChild.childNodes[0].height = cSize;
                    } else {
                        // Turn off layer
                        if (image.indexOf("_Grey.png") == -1) {
                            this.firstChild.childNodes[0].src = image.replace(".png", "_Grey.png");
                        }
                        that.operLayerInfos._finalLayerInfos[0].newSubLayers[index].setTopLayerVisible(!1);
                        //this.firstChild.childNodes[0].src = "images/Icon-Hospitals_Grey.png";
                        this.firstChild.childNodes[0].width = bwSize;
                        this.firstChild.childNodes[0].height = bwSize;
                    }
                }
            });


        },
        _clearLayers: function () {
            this.layerListView && this.layerListView.destroyRecursive && this.layerListView.destroyRecursive()
        },
        _refresh: function () {
            this._clearLayers();
            this.showLayers()
        },
        bindEvents: function () {
            this.own(h(this.operLayerInfos, "layerInfosChanged", c.hitch(this, this._onLayerInfosChanged)));
            this.own(h(this.operLayerInfos, "tableInfosChanged", c.hitch(this, this._onLayerInfosChanged)));
            this.own(this.operLayerInfos.on("layerInfosIsVisibleChanged", c.hitch(this, this._onLayerInfosIsVisibleChanged)));
            this.own(h(this.operLayerInfos, "updated", c.hitch(this, this._onLayerInfosObjUpdated)));
        },
        _onLayerInfosChanged: function () {
            this._refresh()
        },
        _onLayerInfosIsVisibleChanged: function (b) {
            f.forEach(b, function (a) {
                l("[class~\x3d'visible-checkbox-" + a.id + "']", this.domNode).forEach(function (b) {
                    b = q.byNode(b);
                    a.isVisible() ? b.check() : b.uncheck()
                }, this)
            })
        },
        _onLayerInfosObjUpdated: function () {
            this._refresh()
        },
        onAppConfigChanged: function (b, a, c) {
            this.appConfig = b
        }
    })
    function mkLayerList() {
        // Make the layerlist table items
        var layerTab = "<table class='layersTable'>";
        layerTab += '<tr class="rowCheck"><td class="tableRows"><img src="images/Icon-SeniorCenters_Grey.png" id="1"  class="legImage" height="28" width="28"></td><td class="tableRows">Senior Centers</td></tr>';
        layerTab += '<tr class="rowCheck"><td class="tableRows"><img src="images/Icon-CountyBuildings_Grey.png"  id="4"  class="legImage" height="28" width="28"> </td><td class="tableRows">Tax Collector</td></tr>';
        layerTab += '<tr class="rowCheck"><td class="tableRows"><img src="images/Icon-FireStations_Grey.png"  id="2"  class="legImage" height="28" width="28"></td><td class="tableRows">Fire Stations</td></tr>';
        //layerTab += '<tr class="rowCheck"><td class="tableRows"><img src="images/Icon-HistoricSites_Grey.png"  id="3"  class="legImage" height="28" width="28"></td><td class="tableRows">Historic Sites</td></tr>';
        layerTab += '<tr class="rowCheck"><td class="tableRows"><img src="images/Icon-Hospitals_Grey.png"  id="0"  class="legImage" height="28" width="28"></td><td class="tableRows">Hospitals</td></tr>';
        layerTab += '<tr class="rowCheck"><td class="tableRows"><img src="images/Icon-Schools_Grey.png" id="7"  class="legImage" height="28" width="28"></td><td class="tableRows">Schools</td></tr>';
        layerTab += '<tr class="rowCheck"><td class="tableRows"><img src="images/Icon-Libraries_Grey.png" id="3"  class="legImage" height="28" width="28"></td><td class="tableRows">Libraries</td></tr>';
        layerTab += '<tr class="rowCheck"><td class="tableRows"><img src="images/Icon-ParksAndRec_Grey.png" id="6"  class="legImage" height="28" width="28"></td><td class="tableRows">Parks And Recreation</td></tr>';
        layerTab += '<tr class="rowCheck"><td class="tableRows"><img src="images/Icon-ClerksOffice_Grey.png" id="5"  class="legImage" height="28" width="28"></td><td class="tableRows">Clerks Offices</td></tr>';
        layerTab += "</table>"
        return layerTab;
    }
});