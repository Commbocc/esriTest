// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({
    cache: {
        "url:widgets/LayerList/LayerListView.html": '\r\n\r\n\x3ctable class\x3d"layer-list-table"\x3e\r\n  \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"layerListTable"\x3e\x3c/tbody\x3e\r\n  \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"tableListTable"\x3e\x3c/tbody\x3e       \r\n\x3c/table\x3e\r\n'
    }
});
define("dijit/_WidgetBase dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on dojo/query jimu/dijit/CheckBox ./PopupMenu dijit/_TemplatedMixin dojo/text!./LayerListView.html dojo/dom-attr dojo/dom-class dojo/dom-style ./NlsStrings".split(" "), function(t, u, m, r, e, n, g, v, w, x, y, s, h, k, z) {
    return u([t, x], {
        templateString: y,
        _currentSelectedLayerRowNode: null,
        postMixInProperties: function() {
            this.inherited(arguments);
            this.nls = z.value
        },
        postCreate: function() {
            r.forEach(this.operLayerInfos.getLayerInfoArray(),
                function(a) {
                    this.drawListNode(a, 0, this.layerListTable, !0)
                }, this);
            r.forEach(this.operLayerInfos.getTableInfoArray(), function(a) {
                this.drawListNode(a, 0, this.tableListTable, !0)
            }, this)
        },
        drawListNode: function(a, b, d) {
            var c;
            0 === a.newSubLayers.length ? (c = this.addLayerNode(a, b, d), this.config.showLegend ? this.addLegendNode(a, b, c.subNode) : k.set(g(".showLegend-image", c.currentNode)[0], "display", "none")) : (c = this.addLayerNode(a, b, d), r.forEach(a.newSubLayers, m.hitch(this, function(a, b) {
                    this.drawListNode(b, a + 1, c.subNode)
                },
                b)))
        },
        addLayerNode: function(a, b, d) {
            var c = e.create("tr", {
                    "class": "jimu-widget-row layer-row ",
                    layerTrNodeId: a.id
                }, d),
                f, l, p, g, h, q;
            f = e.create("td", {
                "class": "col col1"
            }, c);
            for (p = 0; p < b; p++) e.create("div", {
                "class": "begin-blank-div jimu-float-leading",
                innerHTML: ""
            }, f);
            q = e.create("div", {
                "class": "showLegend-div jimu-float-leading"
            }, f);
            g = e.create("img", {
                "class": "showLegend-image",
                src: isRTL ? this.layerListWidget.folderUrl + "images/v_left.png" : this.layerListWidget.folderUrl + "images/v_right.png",
                alt: "l"
            }, q);
            l = e.create("div", {
                "class": "div-select jimu-float-leading"
            }, f);
            p = new v({
                checked: a.isVisible(),
                "class": "visible-checkbox-" + a.id
            });
            e.place(p.domNode, l);
            h = e.create("div", {
                "class": "noLegend-div jimu-float-leading"
            }, f);
            e.create("img", {
                "class": "noLegend-image",
                src: this.layerListWidget.folderUrl + (a.isTable ? "images/table.png" : "images/noLegend.png"),
                alt: "l"
            }, h);
            if (a.noLegend || a.isTable) k.set(q, "display", "none"), k.set(l, "display", "none"), k.set(h, "display", "block");
            k.set(f, "width", 12 * b + 35 + "px");
            b = e.create("td", {
                    "class": "col col2"
                },
                c);
            e.create("div", {
                innerHTML: a.title,
                "class": "div-content jimu-float-leading"
            }, b);
            f = e.create("td", {
                "class": "col col3"
            }, c);
            f = e.create("div", {
                "class": "layers-list-popupMenu-div"
            }, f);
            l = (new w({
                _layerInfo: a,
                box: this.layerListWidget.domNode.parentNode,
                popupMenuNode: f,
                layerListWidget: this.layerListWidget,
                _config: this.config
            })).placeAt(f);
            this.own(n(l, "onMenuClick", m.hitch(this, this._onPopupMenuItemClick, a, l)));
            d = e.create("tr", {
                "class": "",
                layerContentTrNodeId: a.id
            }, d);
            d = e.create("td", {
                    "class": "",
                    colspan: "3"
                },
                d);
            d = e.create("table", {
                "class": "layer-sub-node"
            }, d);
            this.own(n(b, "click", m.hitch(this, this._onRowTrClick, a, g, c, d)));
            this.own(n(q, "click", m.hitch(this, this._onRowTrClick, a, g, c, d)));
            this.own(n(c, "mouseover", m.hitch(this, this._onLayerNodeMouseover, c, l)));
            this.own(n(c, "mouseout", m.hitch(this, this._onLayerNodeMouseout, c, l)));
            this.own(n(p.domNode, "click", m.hitch(this, this._onCkSelectNodeClick, a, p)));
            this.own(n(f, "click", m.hitch(this, this._onPopupMenuClick, a, l, c)));
            return {
                currentNode: c,
                subNode: d
            }
        },
        addLegendNode: function(a,
            b, d) {
            d = e.create("tr", {
                "class": "legend-node-tr"
            }, d);
            d = e.create("td", {
                "class": "legend-node-td"
            }, d);
            try {
                var c = a.createLegendsNode();
                k.set(c, "font-size", 12 * (b + 1) + "px");
                e.place(c, d)
            } catch (f) {
                console.error(f)
            }
        },
        _fold: function(a, b, d) {
            "none" === k.get(d, "display") ? (k.set(d, "display", "table"), s.set(b, "src", this.layerListWidget.folderUrl + "images/v.png"), a = !1) : (k.set(d, "display", "none"), s.set(b, "src", isRTL ? this.layerListWidget.folderUrl + "images/v_left.png" : this.layerListWidget.folderUrl + "images/v_right.png"),
                a = !0);
            return a
        },
        _onCkSelectNodeClick: function(a, b, d) {
            b.checked ? a.setTopLayerVisible(!0) : a.setTopLayerVisible(!1);
            d.stopPropagation()
        },
        _onPopupMenuClick: function(a, b, d, c) {
            this._changeSelectedLayerRow(d);
            b && "opened" === b.state ? b.closeDropMenu() : (this._hideCurrentPopupMenu(), b && (this.currentPopupMenu = b, b.openDropMenu()));
            c.stopPropagation()
        },
        _hideCurrentPopupMenu: function() {
            this.currentPopupMenu && "opened" === this.currentPopupMenu.state && this.currentPopupMenu.closeDropMenu()
        },
        _onLayerNodeMouseover: function(a,
            b) {
            h.add(a, "layer-row-mouseover");
            b && h.add(b.btnNode, "jimu-icon-btn-selected")
        },
        _onLayerNodeMouseout: function(a, b) {
            h.remove(a, "layer-row-mouseover");
            b && h.remove(b.btnNode, "jimu-icon-btn-selected")
        },
        _onLayerListWidgetPaneClick: function(a) {
            a && a.closeDropMenu()
        },
        _onRowTrClick: function(a, b, d, c) {
            this._changeSelectedLayerRow(d);
            b = this._fold(a, b, c);
            a.isLeaf() && !b && (c = g(".legends-div", c)[0], b = g(".legends-loading-img", c)[0], c && b && a.drawLegends(c, this.layerListWidget.appConfig.portalUrl))
        },
        _changeSelectedLayerRow: function(a) {
            this._currentSelectedLayerRowNode &&
                this._currentSelectedLayerRowNode === a || (this._currentSelectedLayerRowNode && h.remove(this._currentSelectedLayerRowNode, "jimu-widget-row-selected"), h.add(a, "jimu-widget-row-selected"), this._currentSelectedLayerRowNode = a)
        },
        _onPopupMenuItemClick: function(a, b, d, c) {
            c = {
                itemKey: d.key,
                extraData: c,
                layerListWidget: this.layerListWidget,
                layerListView: this
            };
            "transparency" === d.key ? "none" === k.get(b.transparencyDiv, "display") ? b.showTransNode(a.getOpacity()) : b.hideTransNode() : (a = b.popupMenuInfo.onPopupMenuClick(c),
                a.closeMenu && b.closeDropMenu())
        },
        _exchangeLayerTrNode: function(a, b) {
            var d = g("tr[layerTrNodeId\x3d'" + a + "']", this.layerListTable)[0],
                c = g("tr[layerTrNodeId\x3d'" + b + "']", this.layerListTable)[0],
                e = g("tr[layerContentTrNodeId\x3d'" + b + "']", this.layerListTable)[0];
            this.layerListTable.removeChild(c);
            this.layerListTable.insertBefore(c, d);
            this.layerListTable.removeChild(e);
            this.layerListTable.insertBefore(e, d)
        },
        moveUpLayer: function(a) {
            var b = this.operLayerInfos.moveUpLayer(a);
            b && this._exchangeLayerTrNode(b, a)
        },
        moveDownLayer: function(a) {
            var b = this.operLayerInfos.moveDownLayer(a);
            b && this._exchangeLayerTrNode(a, b)
        }
    })
});