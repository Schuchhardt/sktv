(function(_0x885cx1) {
    var _0x885cx2 = {};

    function _0x885cx3(_0x885cx4) {
        return !isNaN(parseFloat(_0x885cx4)) && isFinite(_0x885cx4)
    }

    function _0x885cx5(_0x885cx6) {
        return _0x885cx6['charAt'](0)['toUpperCase']() + _0x885cx6['slice'](1)
    }

    function _0x885cx7(_0x885cx6) {
        switch (String(_0x885cx6)['toLowerCase']()) {
            case 'on':
                ;
            case 'true':
                ;
            case '1':
                ;
            case 'yes':
                ;
            case 'y':
                return true;
            case 'off':
                ;
            case 'false':
                ;
            case '0':
                ;
            case 'no':
                ;
            case 'n':
                return false;
            default:
                return undefined
        }
    }

    function _0x885cx8(_0x885cx9) {
        if (_0x885cx9['indexOf']('http://') == 0 || _0x885cx9['indexOf']('https://') == 0) {
            _0x885cx9 = '//' + _0x885cx9['split']('://')['pop']()
        };
        return _0x885cx9
    }

    function _0x885cxa(_0x885cxb, _0x885cxc) {
        _0x885cxb['prototype'] = Object['create'](_0x885cxc['prototype']);
        _0x885cxb['prototype']['constructor'] = _0x885cxb
    }

    function _0x885cxd() {
        this['id'] = ''
    }
    _0x885cxd['prototype']['getComputedStyle'] = function(_0x885cxe, _0x885cxf) {
        _0x885cxf = _0x885cxf || this['node'][0];
        if (_p1 = _0x885cxf['getAttribute'](_0x885cxe)) {
            return _p1
        } else {
            if (_p2 = _0x885cxf['getAttribute']('style')) {
                var _0x885cx10 = _p2['split'](';');
                var _0x885cx11 = _0x885cx10['filter'](function(_0x885cx12) {
                    var _0x885cx12 = _0x885cx12['trim']();
                    var _0x885cx13 = _0x885cx12['split'](':');
                    if (_0x885cx13[0] == _0x885cxe) {
                        return true
                    }
                });
                if (_0x885cx11['length']) {
                    return _0x885cx11[0]['split'](':')['pop']()['trim']()
                }
            }
        };
        var _0x885cx14 = _0x885cx1(_0x885cxf)['parent']();
        var _0x885cx15 = _0x885cx14['length'] ? _0x885cx14[0]['tagName'] : null;
        if (_0x885cx15 && _0x885cx15 != 'svg') {
            return this['getComputedStyle'](_0x885cxe, _0x885cx14[0])
        } else {
            return undefined
        }
    };
    _0x885cxd['prototype']['getStyle'] = function(_0x885cxe) {
        if (_p1 = this['attr'](_0x885cxe)) {
            return _p1
        } else {
            if (_p2 = this['attr']('style')) {
                var _0x885cx10 = _p2['split'](';');
                var _0x885cx11 = _0x885cx10['filter'](function(_0x885cx12) {
                    var _0x885cx12 = _0x885cx12['trim']();
                    if (_0x885cx12['indexOf'](_0x885cxe) === 0) {
                        return _0x885cx12
                    }
                });
                return _0x885cx11['length'] ? _0x885cx11[0]['split'](':')['pop']()['trim']() : undefined
            }
        };
        return ''
    };
    _0x885cxd['prototype']['getCenter'] = function() {
        var _0x885cx16 = this['node'][0]['getBoundingClientRect']()['left'];
        var _0x885cx17 = this['node'][0]['getBoundingClientRect']()['top'];
        var _0x885cx18 = this['node'][0]['getBoundingClientRect']()['width'];
        var _0x885cx19 = this['node'][0]['getBoundingClientRect']()['height'];
        return [_0x885cx16 + _0x885cx18 / 2, _0x885cx17 + _0x885cx19 / 2]
    };
    _0x885cxd['prototype']['setTooltip'] = function(_0x885cx1a) {
        this['tooltip'] = _0x885cx1a ? _0x885cx1a : undefined
    };
    _0x885cxd['prototype']['setPopover'] = function(_0x885cx1a) {
        this['popover'] = _0x885cx1a ? _0x885cx1a : undefined
    };
    _0x885cxd['prototype']['setHref'] = function(_0x885cx9) {
        if (this['href'] && this['node']['parent']('a')['length']) {
            this['node']['unwrap']()
        };
        this['href'] = _0x885cx9 ? _0x885cx9 : undefined;
        if (this['href']) {
            var _0x885cx1b = 'http://www.w3.org/1999/xlink',
                _0x885cx1c = 'http://www.w3.org/2000/svg';
            var _0x885cx1d = document['createElementNS'](_0x885cx1c, 'a');
            _0x885cx1d['setAttributeNS'](_0x885cx1b, 'href', this['href']);
            if (this['target']) {
                _0x885cx1d['setAttribute']('target', this['target'])
            };
            this['node']['wrap'](_0x885cx1(_0x885cx1d))
        }
    };
    _0x885cxd['prototype']['setTarget'] = function(_0x885cx1e) {
        this['target'] = _0x885cx1e ? _0x885cx1e : undefined;
        if (this['href']) {
            var _0x885cx1d = this['node']['parent']('a')[0]
        } else {
            return
        };
        this['target'] ? _0x885cx1d['setAttribute']('target', _0x885cx1e) : _0x885cx1d['removeAttribute']('target')
    };
    _0x885cxd['prototype']['setData'] = function(_0x885cx1f) {
        if (_0x885cx1f) {
            if (typeof _0x885cx1f == 'string') {
                if (_0x885cx1f['substr'](0, 1) == '[' || _0x885cx1f['substr'](0, 1) == '{') {
                    try {
                        var _0x885cx20;
                        eval('tmp = ' + _0x885cx1f);
                        this['data'] = _0x885cx20
                    } catch (err) {
                        var _0x885cx21 = 'MapSVG: Error in Data object for ' + this['mapsvg_type'] + ' \'' + this['id'] + '\'. Data object was set to empty object {}.';
                        this['data'] = {};
                        return {
                            _error: _0x885cx21
                        }
                    }
                } else {
                    this['data'] = _0x885cx1f
                }
            } else {
                this['data'] = _0x885cx1f
            };
            return this['data']
        } else {
            this['data'] = undefined
        }
    };
    _0x885cxd['prototype']['attr'] = function(_0x885cx22, _0x885cx23) {
        var _0x885cx24 = this['node'][0];
        if (typeof _0x885cx22 == 'object') {
            _0x885cx1['each'](_0x885cx22, function(_0x885cx25, _0x885cx26) {
                if (typeof _0x885cx26 == 'string' || typeof _0x885cx26 == 'number') {
                    _0x885cx24['setAttribute'](_0x885cx25, _0x885cx26)
                }
            })
        } else {
            if (typeof _0x885cx22 == 'string' && (typeof _0x885cx23 == 'string' || typeof _0x885cx23 == 'number')) {
                _0x885cx24['setAttribute'](_0x885cx22, _0x885cx23)
            } else {
                if (_0x885cx23 == undefined) {
                    return _0x885cx24['getAttribute'](_0x885cx22)
                }
            }
        }
    };
    _0x885cxd['prototype']['setId'] = function(_0x885cx27) {
        if (!_0x885cx27) {
            return false
        };
        this['id'] = _0x885cx27;
        this['node'][0]['setAttribute']('id', _0x885cx27)
    };

    function _0x885cx28(_0x885cx29, _0x885cx2a, _0x885cx2b, _0x885cx2c) {
        _0x885cxd['call'](this);
        this['node'] = _0x885cx29;
        this['nodeType'] = _0x885cx29[0]['tagName'];
        this['globalOptions'] = _0x885cx2a;
        this['mapsvg'] = _0x885cx2c;
        this['id'] = this['node']['attr']('id');
        if (!this['id']) {
            this['setId'](this['nodeType'] + '_' + _0x885cx2b['id']++);
            this['autoID'] = true
        };
        this['id_no_spaces'] = this['id']['replace'](' ', '_');
        this['title'] = this['node']['attr']('title');
        this['node'][0]['setAttribute']('class', 'mapsvg-region');
        this['svg_style'] = {
            fill: this['getComputedStyle']('fill')
        };
        this['svg_style']['stroke'] = this['getComputedStyle']('stroke');
        if (!_0x885cx52['ie']) {
            this['node']['css']({
                "\x76\x65\x63\x74\x6F\x72\x2D\x65\x66\x66\x65\x63\x74": 'non-scaling-stroke'
            })
        } else {
            var _0x885cx18 = this['getComputedStyle']('stroke-width');
            _0x885cx18 = _0x885cx18 ? _0x885cx18['replace']('px', '') : '1';
            _0x885cx18 = _0x885cx18 == '1' ? 1.2 : parseFloat(_0x885cx18);
            this['svg_style']['stroke-width'] = _0x885cx18
        };
        var _0x885cx2d = _0x885cx2a['regions'] && _0x885cx2a['regions'][this['id']] ? _0x885cx2a['regions'][this['id']] : null;
        this['disabled'] = this['getDisabledState']();
        this['disabled'] && this['attr']('class', this['attr']('class') + ' mapsvg-disabled');
        this['default_attr'] = {};
        this['selected_attr'] = {};
        this['hover_attr'] = {};
        this['mapsvg_type'] = 'region';
        var _0x885cx2e = false;
        if (_0x885cx2d && _0x885cx2d['selected']) {
            _0x885cx2e = true;
            delete _0x885cx2d['selected']
        };
        _0x885cx2d && this['update'](_0x885cx2d);
        this['setFill']();
        if (_0x885cx2e) {
            this['setSelected'](true)
        };
        this['saveState']()
    }
    _0x885cxa(_0x885cx28, _0x885cxd);
    _0x885cx28['prototype']['saveState'] = function() {
        this['initialState'] = JSON['stringify'](this['getOptions']())
    };
    _0x885cx28['prototype']['changed'] = function() {
        return JSON['stringify'](this['getOptions']()) != this['initialState']
    };
    _0x885cx28['prototype']['getOptions'] = function(_0x885cx2f) {
        var _0x885cx30 = this['globalOptions']['regions'][this['id']];
        var _0x885cx31 = {
            id: this['id'],
            id_no_spaces: this['id_no_spaces'],
            title: this['title'],
            disabled: this['disabled'] === this['getDisabledState'](true) ? undefined : this['disabled'],
            fill: this['globalOptions']['regions'][this['id']] && this['globalOptions']['regions'][this['id']]['fill'],
            tooltip: this['tooltip'],
            popover: this['popover'],
            href: this['href'],
            target: this['target'],
            data: this['data'],
            gaugeValue: this['gaugeValue']
        };
        if (_0x885cx2f) {
            _0x885cx31['disabled'] = this['disabled']
        };
        _0x885cx1['each'](_0x885cx31, function(_0x885cx25, _0x885cx32) {
            if (_0x885cx32 == undefined) {
                delete _0x885cx31[_0x885cx25]
            }
        });
        return _0x885cx31
    };
    _0x885cx28['prototype']['update'] = function(_0x885cx33) {
        for (var _0x885cx25 in _0x885cx33) {
            var _0x885cx34 = 'set' + _0x885cx5(_0x885cx25);
            if (_0x885cx34 in this) {
                this[_0x885cx34](_0x885cx33[_0x885cx25])
            }
        }
    };
    _0x885cx28['prototype']['setFill'] = function(_0x885cx35) {
        if (_0x885cx35) {
            regions = {};
            regions[this['id']] = {
                fill: _0x885cx35
            };
            _0x885cx1['extend'](true, this['globalOptions'], {
                regions: regions
            })
        } else {
            if (_0x885cx35 == '' && this['globalOptions']['regions'] && this['globalOptions']['regions'][this['id']] && this['globalOptions']['regions'][this['id']]['fill']) {
                delete this['globalOptions']['regions'][this['id']]['fill']
            }
        };
        if (this['globalOptions']['gauge']['on'] && this['gaugeValue']) {
            var _0x885cx31 = this['globalOptions']['gauge'];
            var _0x885cx18 = (this['gaugeValue'] - _0x885cx31['min']) / _0x885cx31['maxAdjusted'];
            var _0x885cx36 = {
                r: Math['round'](_0x885cx31['colors']['diffRGB']['r'] * _0x885cx18 + _0x885cx31['colors']['lowRGB']['r']),
                g: Math['round'](_0x885cx31['colors']['diffRGB']['g'] * _0x885cx18 + _0x885cx31['colors']['lowRGB']['g']),
                b: Math['round'](_0x885cx31['colors']['diffRGB']['b'] * _0x885cx18 + _0x885cx31['colors']['lowRGB']['b']),
                a: Math['round'](_0x885cx31['colors']['diffRGB']['a'] * _0x885cx18 + _0x885cx31['colors']['lowRGB']['a'])
            };
            this['default_attr']['fill'] = 'rgba(' + _0x885cx36['r'] + ',' + _0x885cx36['g'] + ',' + _0x885cx36['b'] + ',' + _0x885cx36['a'] + ')'
        } else {
            if (this['globalOptions']['regions'][this['id']] && this['globalOptions']['regions'][this['id']]['fill']) {
                this['default_attr']['fill'] = this['globalOptions']['regions'][this['id']]['fill']
            } else {
                if (this['disabled'] && this['globalOptions']['colors']['disabled']) {
                    this['default_attr']['fill'] = this['globalOptions']['colors']['disabled']
                } else {
                    if (this['globalOptions']['colors']['base']) {
                        this['default_attr']['fill'] = this['globalOptions']['colors']['base']
                    } else {
                        if (this['svg_style']['fill'] != 'none') {
                            this['default_attr']['fill'] = this['svg_style']['fill'] ? this['svg_style']['fill'] : this['globalOptions']['colors']['baseDefault']
                        } else {
                            this['default_attr']['fill'] = 'none'
                        }
                    }
                }
            }
        };
        if (_0x885cx3(this['globalOptions']['colors']['selected'])) {
            this['selected_attr']['fill'] = tinycolor(this['default_attr']['fill'])['lighten'](parseFloat(this['globalOptions']['colors']['selected']))['toRgbString']()
        } else {
            this['selected_attr']['fill'] = this['globalOptions']['colors']['selected']
        };
        if (_0x885cx3(this['globalOptions']['colors']['hover'])) {
            this['hover_attr']['fill'] = tinycolor(this['default_attr']['fill'])['lighten'](parseFloat(this['globalOptions']['colors']['hover']))['toRgbString']()
        } else {
            this['hover_attr']['fill'] = this['globalOptions']['colors']['hover']
        };
        this['node']['css']('fill', this['default_attr']['fill']);
        this['fill'] = this['default_attr']['fill'];
        if (this['svg_style']['stroke'] != 'none' && this['globalOptions']['colors']['stroke'] != undefined) {
            this['node']['css']('stroke', this['globalOptions']['colors']['stroke'])
        } else {
            this['node']['css']('stroke', this['svg_style']['stroke'])
        };
        if (this['selected']) {
            this['select']()
        }
    };
    _0x885cx28['prototype']['setDisabled'] = function(_0x885cx37) {
        _0x885cx37 = _0x885cx37 !== undefined ? _0x885cx7(_0x885cx37) : this['getDisabledState']();
        this['disabled'] = _0x885cx37;
        _0x885cx37 ? this['attr']('class', this['attr']('class') + ' mapsvg-disabled') : this['attr']('class', this['attr']('class')['replace'](' mapsvg-disabled', ''));
        this['selected'] = false;
        this['setFill']()
    };
    _0x885cx28['prototype']['setSelected'] = function(_0x885cx37) {
        this['mapsvg']['selectRegion'](this)
    };
    _0x885cx28['prototype']['setGaugeValue'] = function(_0x885cx32) {
        this['gaugeValue'] = _0x885cx1['isNumeric'](_0x885cx32) ? parseFloat(_0x885cx32) : undefined
    };
    _0x885cx28['prototype']['getDisabledState'] = function(_0x885cx38) {
        var _0x885cx39 = this['globalOptions']['regions'][this['id']];
        if (!_0x885cx38 && _0x885cx39 && _0x885cx39['disabled'] !== undefined) {
            return _0x885cx39['disabled']
        } else {
            if (this['globalOptions']['disableAll'] || this['svg_style']['fill'] == 'none' || this['id'] == 'labels' || this['id'] == 'Labels') {
                return true
            } else {
                return false
            }
        }
    };
    _0x885cx28['prototype']['highlight'] = function() {
        this['node']['css']({
            "\x66\x69\x6C\x6C": this['hover_attr']['fill']
        })
    };
    _0x885cx28['prototype']['unhighlight'] = function() {
        this['node']['css']({
            "\x66\x69\x6C\x6C": this['default_attr']['fill']
        })
    };
    _0x885cx28['prototype']['select'] = function() {
        this['node']['css']({
            "\x66\x69\x6C\x6C": this['selected_attr']['fill']
        });
        this['selected'] = true
    };
    _0x885cx28['prototype']['deselect'] = function() {
        this['node']['css']({
            "\x66\x69\x6C\x6C": this['default_attr']['fill']
        });
        this['selected'] = false
    };

    function _0x885cx3a(_0x885cx33, _0x885cx3b) {
        if (!_0x885cx33['id'] || !_0x885cx33['src']) {
            return false
        };
        _0x885cxd['call'](this);
        var _0x885cx3c = document['createElementNS']('http://www.w3.org/2000/svg', 'image');
        _0x885cx3c['setAttributeNS'](null, 'height', _0x885cx33['height']);
        _0x885cx3c['setAttributeNS'](null, 'width', _0x885cx33['width']);
        _0x885cx3c['setAttributeNS']('http://www.w3.org/1999/xlink', 'href', _0x885cx33['src']);
        _0x885cx3c['setAttributeNS'](null, 'x', _0x885cx33['x']);
        _0x885cx3c['setAttributeNS'](null, 'y', _0x885cx33['y']);
        _0x885cx3c['setAttributeNS'](null, 'visibility', 'visible');
        _0x885cx3c['setAttribute']('class', 'mapsvg-marker');
        this['node'] = _0x885cx1(_0x885cx3c);
        this['src'] = _0x885cx33['src'];
        this['setId'](_0x885cx33['id']);
        this['mapsvg_type'] = 'marker';
        this['x'] = parseFloat(_0x885cx33['x']);
        this['y'] = parseFloat(_0x885cx33['y']);
        this['width'] = parseFloat(_0x885cx33['width']);
        this['height'] = parseFloat(_0x885cx33['height']);
        this['tooltip'] = _0x885cx33['tooltip'];
        this['popover'] = _0x885cx33['popover'];
        this['href'] = _0x885cx33['href'];
        this['target'] = _0x885cx33['target'];
        this['default'] = {
            x: this['x'],
            y: this['y'],
            width: this['width'],
            height: this['height']
        };
        this['geoCoords'] = _0x885cx33['geoCoords'];
        this['data'] = _0x885cx33['data']
    }
    _0x885cxa(_0x885cx3a, _0x885cxd);
    _0x885cx3a['prototype']['getOptions'] = function() {
        var _0x885cx31 = {
            id: this['id'],
            tooltip: this['tooltip'],
            popover: this['popover'],
            href: this['href'],
            target: this['target'],
            data: this['data'],
            src: this['src'],
            width: this['default']['width'],
            height: this['default']['height'],
            x: this['x'],
            y: this['y'],
            geoCoords: this['geoCoords']
        };
        _0x885cx1['each'](_0x885cx31, function(_0x885cx25, _0x885cx32) {
            if (_0x885cx32 == undefined) {
                delete _0x885cx31[_0x885cx25]
            }
        });
        return _0x885cx31
    };
    _0x885cx3a['prototype']['setXY'] = function(_0x885cx16, _0x885cx17) {
        this['x'] = _0x885cx16;
        this['y'] = _0x885cx17;
        this['node'][0]['setAttribute']('x', _0x885cx16);
        this['node'][0]['setAttribute']('y', _0x885cx17);
        this['adjustPosition'](this['mapScale'])
    };
    _0x885cx3a['prototype']['update'] = function(_0x885cx1f, _0x885cx3d) {
        for (var _0x885cx25 in _0x885cx1f) {
            var _0x885cx34 = 'set' + _0x885cx5(_0x885cx25);
            if (_0x885cx34 in this) {
                this[_0x885cx34](_0x885cx1f[_0x885cx25], _0x885cx3d)
            }
        }
    };
    _0x885cx3a['prototype']['setSrc'] = function(_0x885cx3e, _0x885cx3d) {
        if (!_0x885cx3e) {
            return false
        };
        _0x885cx3e = _0x885cx8(_0x885cx3e);
        _0x885cx3d = _0x885cx3d || this['mapScale'];
        var _0x885cx3c = new Image();
        var _0x885cx3f = this;
        _0x885cx3c['onload'] = function() {
            _0x885cx3f['default']['width'] = this['width'];
            _0x885cx3f['default']['height'] = this['height'];
            _0x885cx3f['x'] = _0x885cx3f['x'] - (this['width'] - _0x885cx3f['width']) / 2;
            _0x885cx3f['y'] = _0x885cx3f['y'] - (this['height'] - _0x885cx3f['height']);
            _0x885cx3f['attr']({
                x: _0x885cx3f['x'],
                y: _0x885cx3f['y'],
                width: this['width'],
                height: this['height']
            });
            _0x885cx3f['width'] = this['width'];
            _0x885cx3f['height'] = this['height'];
            _0x885cx3f['node'][0]['setAttributeNS']('http://www.w3.org/1999/xlink', 'href', _0x885cx3e);
            _0x885cx3f['adjustPosition'](_0x885cx3d);
            _0x885cx3f['src'] = _0x885cx3e
        };
        _0x885cx3c['src'] = _0x885cx3e
    };
    _0x885cx3a['prototype']['adjustPosition'] = function(_0x885cx3d) {
        var _0x885cx18 = this['default']['width'];
        var _0x885cx19 = this['default']['height'];
        var _0x885cx40 = _0x885cx18 / 2 - _0x885cx18 / (2 * _0x885cx3d);
        var _0x885cx41 = _0x885cx19 - _0x885cx19 / _0x885cx3d;
        this['attr']('width', _0x885cx18 / (_0x885cx3d));
        this['attr']('height', _0x885cx19 / (_0x885cx3d));
        this['attr']('transform', 'translate(' + _0x885cx40 + ',' + _0x885cx41 + ')');
        this['mapScale'] = _0x885cx3d
    };
    _0x885cx3a['getDefaultCoords'] = function(_0x885cx42, _0x885cx43, _0x885cx44, _0x885cx45, _0x885cx3d) {
        _0x885cx42 = parseFloat(_0x885cx42);
        _0x885cx43 = parseFloat(_0x885cx43);
        _0x885cx44 = parseFloat(_0x885cx44);
        _0x885cx45 = parseFloat(_0x885cx45);
        _0x885cx42 = _0x885cx42 + _0x885cx44 / (2 * _0x885cx3d) - _0x885cx44 / 2;
        _0x885cx43 = _0x885cx43 + _0x885cx45 / _0x885cx3d - _0x885cx45;
        return [_0x885cx42, _0x885cx43]
    };
    _0x885cx3a['prototype']['drag'] = function(_0x885cx46, _0x885cx3b, _0x885cx47, _0x885cx48) {
        _this = this;
        this['ox'] = this['x'];
        this['oy'] = this['y'];
        _0x885cx1('body')['on']('mousemove.drag.mapsvg', function(_0x885cx12) {
            _0x885cx12['preventDefault']();
            var _0x885cx49 = _0x885cx53(_0x885cx12);
            var _0x885cx40 = _0x885cx49['x'] - _0x885cx46['x'];
            var _0x885cx41 = _0x885cx49['y'] - _0x885cx46['y'];
            _this['x'] = _this['ox'] + _0x885cx40 / _0x885cx3b;
            _this['y'] = _this['oy'] + _0x885cx41 / _0x885cx3b;
            _this['attr']({
                x: _this['x'],
                y: _this['y']
            })
        });
        _0x885cx1('body')['on']('mouseup.drag.mapsvg', function(_0x885cx12) {
            _0x885cx12['preventDefault']();
            _this['undrag']();
            var _0x885cx49 = _0x885cx53(_0x885cx12);
            var _0x885cx40 = _0x885cx49['x'] - _0x885cx46['x'];
            var _0x885cx41 = _0x885cx49['y'] - _0x885cx46['y'];
            _this['x'] = _this['ox'] + _0x885cx40 / _0x885cx3b;
            _this['y'] = _this['oy'] + _0x885cx41 / _0x885cx3b;
            _this['attr']({
                x: _this['x'],
                y: _this['y']
            });
            _0x885cx47['call'](_this);
            if (_this['ox'] == _this['x'] && _this['oy'] == _this['y']) {
                _0x885cx48['call'](_this)
            }
        })
    };
    _0x885cx3a['prototype']['undrag'] = function() {
        _0x885cx1('body')['off']('.drag.mapsvg')
    };
    _0x885cx3a['prototype']['delete'] = function() {
        if (this['href']) {
            this['node']['parent']('a')['empty']()['remove']()
        };
        this['node']['empty']()['remove']()
    };
    var _0x885cx4a = {};
    var _0x885cx4b = 0;
    var _0x885cx4c = navigator['userAgent']['toLowerCase']();
    var _0x885cx4d = document['getElementsByTagName']('script');
    var _0x885cx4e = _0x885cx4d[_0x885cx4d['length'] - 1]['src']['split']('/');
    _0x885cx4e['pop']();
    var _0x885cx4f = _0x885cx4e['join']('/') + '/';
    _0x885cx4e['pop']();
    var _0x885cx50 = _0x885cx4e['join']('/') + '/';
    var _0x885cx51 = (_0x885cx4c['indexOf']('ipad') > -1) || (_0x885cx4c['indexOf']('iphone') > -1) || (_0x885cx4c['indexOf']('ipod') > -1) || (_0x885cx4c['indexOf']('android') > -1);
    var _0x885cx52 = {};
    _0x885cx52['ie'] = _0x885cx4c['indexOf']('msie') > -1 || _0x885cx4c['indexOf']('trident') > -1 || _0x885cx4c['indexOf']('edge') > -1 ? {} : false;
    _0x885cx52['firefox'] = _0x885cx4c['indexOf']('firefox') > -1;
    if (!String['prototype']['trim']) {
        String['prototype']['trim'] = function() {
            return this['replace'](/^\s+|\s+$/g, '')
        }
    };
    var _0x885cx53 = function(_0x885cx12) {
        if (_0x885cx12['clientX']) {
            return {
                "\x78": _0x885cx12['clientX'] + _0x885cx1(document)['scrollLeft'](),
                "\x79": _0x885cx12['clientY'] + _0x885cx1(document)['scrollTop']()
            }
        };
        if (_0x885cx12['pageX']) {
            return {
                "\x78": _0x885cx12['pageX'],
                "\x79": _0x885cx12['pageY']
            }
        } else {
            if (_0x885cx51) {
                _0x885cx12 = _0x885cx12['originalEvent'];
                return _0x885cx12['touches'] && _0x885cx12['touches'][0] ? {
                    "\x78": _0x885cx12['touches'][0]['pageX'],
                    "\x79": _0x885cx12['touches'][0]['pageY']
                } : {
                    "\x78": _0x885cx12['changedTouches'][0]['pageX'],
                    "\x79": _0x885cx12['changedTouches'][0]['pageY']
                }
            }
        }
    };
    var _0x885cx54 = {
        markerLastID: 0,
        regionLastID: 0,
        disableAll: false,
        width: null,
        height: null,
        lockAspectRatio: true,
        loadingText: 'Loading map...',
        colors: {
            baseDefault: '#000000',
            background: '#eeeeee',
            selected: 40,
            hover: 20
        },
        regions: {},
        markers: [],
        viewBox: [],
        cursor: 'default',
        onClick: null,
        mouseOver: null,
        mouseOut: null,
        beforeLoad: null,
        afterLoad: null,
        zoom: {
            on: false,
            limit: [0, 10],
            delta: 1.2,
            buttons: {
                on: true,
                location: 'right'
            },
            mousewheel: true
        },
        scroll: {
            on: false,
            limit: false,
            background: false
        },
        responsive: true,
        tooltips: {
            mode: 'off',
            on: false,
            priority: 'local',
            position: 'bottom-right'
        },
        popovers: {
            mode: 'off',
            on: false,
            priority: 'local',
            position: 'top'
        },
        multiSelect: false,
        gauge: {
            on: false,
            labels: {
                low: 'low',
                high: 'high'
            },
            colors: {
                lowRGB: null,
                highRGB: null,
                low: '#550000',
                high: '#ee0000'
            },
            min: 0,
            max: 0
        },
        menu: {
            on: false,
            containerId: 'mapsvg-menu-regions',
            template: function(_0x885cx55) {
                return '<li><a href="#' + _0x885cx55['id'] + '">' + (_0x885cx55['title'] || _0x885cx55['id']) + '</a></li>'
            }
        },
        menuMarkers: {
            on: false,
            containerId: 'mapsvg-menu-markers',
            template: function(_0x885cx3f) {
                return '<li><a href="#' + _0x885cx3f['id'] + '">' + _0x885cx3f['id'] + '</a></li>'
            }
        }
    };
    var _0x885cx56 = {
        "\x73\x72\x63": _0x885cx50 + 'markers/pin1_red.png'
    };
    _0x885cx2 = function(_0x885cx57, _0x885cx33) {
        var _0x885cx58;
        this['methods'] = {
            mouseCoords: _0x885cx53,
            functionFromString: function(_0x885cx6) {
                var _0x885cx59;
                var _0x885cx21 = false;
                var _0x885cx5a = _0x885cx6;
                if (_0x885cx5a['indexOf']('{') == -1 || _0x885cx5a['indexOf']('function') == -1 || _0x885cx5a['indexOf']('(') == -1) {
                    return {
                        error: 'MapSVG user function error: no function body.'
                    }
                };
                var _0x885cx5b = _0x885cx5a['substring'](_0x885cx5a['indexOf']('{') + 1, _0x885cx5a['lastIndexOf']('}'));
                var _0x885cx5c = _0x885cx5a['substring'](_0x885cx5a['indexOf']('(') + 1, _0x885cx5a['indexOf'](')'));
                try {
                    _0x885cx59 = new Function(_0x885cx5c, _0x885cx5b);
                    success = true
                } catch (err) {
                    _0x885cx21 = err
                };
                if (!_0x885cx21) {
                    return _0x885cx59
                } else {
                    return {
                        error: {
                            line: _0x885cx21['line'],
                            text: 'MapSVG user function error: (line ' + _0x885cx21['line'] + '): ' + _0x885cx21['message']
                        }
                    }
                }
            },
            getOptions: function(_0x885cx2f, _0x885cx5d) {
                var _0x885cx33 = _0x885cx1['extend'](true, {}, _0x885cx58['options']);
                _0x885cx33['viewBox'] = _0x885cx58['_viewBox'];
                delete _0x885cx33['markers'];
                if (_0x885cx2f) {
                    _0x885cx33['regions'] = [];
                    _0x885cx58['regions']['forEach'](function(_0x885cx5e) {
                        _0x885cx33['regions']['push'](_0x885cx5e['getOptions']())
                    });
                    _0x885cx33['markers'] = _0x885cx58['options']['markers']
                } else {
                    _0x885cx58['regions']['forEach'](function(_0x885cx5e) {
                        _0x885cx5e['changed']() && (_0x885cx33['regions'][_0x885cx5e['id']] = _0x885cx5e['getOptions']())
                    });
                    if (_0x885cx58['markers']['length'] > 0) {
                        _0x885cx33['markers'] = []
                    };
                    _0x885cx58['markers']['forEach'](function(_0x885cx5f) {
                        _0x885cx33['markers']['push'](_0x885cx5f['getOptions']())
                    })
                };
                if (_0x885cx5d) {
                    _0x885cx1['each'](_0x885cx33, function(_0x885cx25, _0x885cx32) {
                        if (JSON['stringify'](_0x885cx32) == JSON['stringify'](_0x885cx54[_0x885cx25])) {
                            delete _0x885cx33[_0x885cx25]
                        }
                    })
                };
                return _0x885cx33
            },
            update: function(_0x885cx33) {
                for (var _0x885cx25 in _0x885cx33) {
                    if (_0x885cx25 == 'regions') {
                        _0x885cx1['each'](_0x885cx33['regions'], function(_0x885cx27, _0x885cx2d) {
                            var _0x885cx55 = _0x885cxb8['getRegion'](_0x885cx27);
                            _0x885cx55 && _0x885cx55['update'](_0x885cx2d);
                            if (_0x885cx2d['gaugeValue'] != undefined) {
                                _0x885cxb8['updateGaugeMinMax']();
                                _0x885cxb8['regionsRedrawColors']()
                            };
                            if (_0x885cx2d['disabled'] != undefined) {
                                _0x885cxb8['deselectRegion'](_0x885cx55);
                                _0x885cx58['options']['regions'][_0x885cx27] = _0x885cx58['options']['regions'][_0x885cx27] || {};
                                _0x885cx58['options']['regions'][_0x885cx27]['disabled'] = _0x885cx55['disabled']
                            }
                        })
                    } else {
                        if (_0x885cx25 == 'markers') {
                            _0x885cx1['each'](_0x885cx33['markers'], function(_0x885cx27, _0x885cx56) {
                                var _0x885cx3f = _0x885cxb8['getMarker'](_0x885cx27);
                                if (_0x885cx56['geoCoords']) {
                                    if (typeof _0x885cx56['geoCoords'] == 'string') {
                                        _0x885cx56['geoCoords'] = _0x885cx56['geoCoords']['trim']()['split'](',');
                                        _0x885cx56['geoCoords'] = [parseFloat(_0x885cx56['geoCoords'][0]), parseFloat(_0x885cx56['geoCoords'][1])]
                                    };
                                    if (typeof _0x885cx56['geoCoords'] == 'object' && _0x885cx56['geoCoords']['length'] == 2) {
                                        if (_0x885cx1['isNumeric'](_0x885cx56['geoCoords'][0]) && _0x885cx1['isNumeric'](_0x885cx56['geoCoords'][1])) {
                                            var _0x885cx60 = _0x885cxb8['convertGeoToPixel'](_0x885cx56['geoCoords']);
                                            _0x885cx60[0] = _0x885cx60[0] - _0x885cx3f['width'] / 2 + 0.3;
                                            _0x885cx60[1] = (_0x885cx60[1] - _0x885cx3f['height']) + 1.5;
                                            _0x885cx3f['setXY'](_0x885cx60[0], _0x885cx60[1])
                                        }
                                    }
                                } else {
                                    _0x885cx3f && _0x885cx3f['update'](_0x885cx56)
                                }
                            })
                        } else {
                            var _0x885cx34 = 'set' + _0x885cx5(_0x885cx25);
                            if (_0x885cxb8['hasOwnProperty'](_0x885cx34)) {
                                this[_0x885cx34](_0x885cx33[_0x885cx25])
                            } else {
                                console['log']('MapSVG Error: no setter ' + _0x885cx34 + '()')
                            }
                        }
                    }
                }
            },
            setTitle: function(_0x885cx61) {
                _0x885cx61 && (_0x885cx58['options']['title'] = _0x885cx61)
            },
            setDisableLinks: function(_0x885cx37) {
                _0x885cx37 = _0x885cx7(_0x885cx37);
                if (_0x885cx37) {
                    _0x885cx58['$map']['on']('click.a.mapsvg', 'a', function(_0x885cx12) {
                        _0x885cx12['preventDefault']()
                    })
                } else {
                    _0x885cx58['$map']['off']('click.a.mapsvg')
                };
                _0x885cx58['disableLinks'] = _0x885cx37
            },
            setLoadingText: function(_0x885cx32) {
                _0x885cx58['options']['loadingText'] = _0x885cx32
            },
            setLockAspectRatio: function(_0x885cx32) {
                _0x885cx58['options']['lockAspectRatio'] = _0x885cx7(_0x885cx32)
            },
            setOnClick: function(_0x885cx19) {
                _0x885cx58['options']['onClick'] = _0x885cx19 || undefined
            },
            setMouseOver: function(_0x885cx19) {
                _0x885cx58['options']['mouseOver'] = _0x885cx19 || undefined
            },
            setMouseOut: function(_0x885cx19) {
                _0x885cx58['options']['mouseOut'] = _0x885cx19 || undefined
            },
            setBeforeLoad: function(_0x885cx19) {
                _0x885cx58['options']['beforeLoad'] = _0x885cx19 || undefined
            },
            setAfterLoad: function(_0x885cx19) {
                _0x885cx58['options']['afterLoad'] = _0x885cx19 || undefined
            },
            setMarkerEditHandler: function(_0x885cx62) {
                _0x885cx58['markerEditHandler'] = _0x885cx62
            },
            setRegionEditHandler: function(_0x885cx62) {
                _0x885cx58['regionEditHandler'] = _0x885cx62
            },
            setDisableAll: function(_0x885cx37) {
                _0x885cx37 = _0x885cx7(_0x885cx37);
                _0x885cx1['extend'](true, _0x885cx58['options'], {
                    disableAll: _0x885cx37
                });
                _0x885cx58['regions']['forEach'](function(_0x885cx5e) {
                    _0x885cx5e['setDisabled']()
                })
            },
            setColors: function(_0x885cx63) {
                _0x885cx1['extend'](true, _0x885cx58['options'], {
                    colors: _0x885cx63
                });
                _0x885cx1['each'](_0x885cx58['options']['colors'], function(_0x885cx25, _0x885cx64) {
                    if (_0x885cx64 === null || _0x885cx64 == '') {
                        delete _0x885cx64[_0x885cx25]
                    }
                });
                if (_0x885cx63['background']) {
                    _0x885cx58['$map']['css']({
                        "\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64": _0x885cx58['options']['colors']['background']
                    })
                };
                if (_0x885cx63['hover']) {
                    _0x885cx58['options']['colors']['hover'] = (_0x885cx63['hover'] == '' + parseInt(_0x885cx63['hover'])) ? parseInt(_0x885cx63['hover']) : _0x885cx63['hover']
                };
                if (_0x885cx63['selected']) {
                    _0x885cx58['options']['colors']['selected'] = (_0x885cx63['selected'] == '' + parseInt(_0x885cx63['selected'])) ? parseInt(_0x885cx63['selected']) : _0x885cx63['selected']
                };
                _0x885cxb8['regionsRedrawColors']()
            },
            setTooltips: function(_0x885cx33) {
                if (typeof _0x885cx33['mode'] == 'string' && _0x885cx33['mode']['indexOf']('function') == 0) {
                    _0x885cx33['mode'] = _0x885cxb8['functionFromString'](_0x885cx33['mode'])
                };
                _0x885cx58['options']['tooltips']['on'] = _0x885cx58['options']['tooltips']['mode'] != 'off';
                _0x885cx1['extend'](true, _0x885cx58['options'], {
                    tooltips: _0x885cx33
                });
                if (!_0x885cx58['mapTip']) {
                    _0x885cx58['mapTip'] = _0x885cx1('<div />')['addClass']('mapsvg-tooltip');
                    _0x885cx1('body')['append'](_0x885cx58['mapTip'])
                };
                var _0x885cx65 = 'mousemove.tooltip.mapsvg-' + _0x885cx58['$map']['attr']('id');
                _0x885cx1('body')['off'](_0x885cx65);
                var _0x885cx66 = _0x885cx58['mapTip'][0];
                switch (_0x885cx58['options']['tooltips']['position']) {
                    case 'bottom-right':
                        _0x885cx1('body')['on'](_0x885cx65, function(_0x885cx12) {
                            window['m'] = _0x885cx53(_0x885cx12);
                            _0x885cx66['style']['left'] = (_0x885cx12['clientX'] + _0x885cx1(window)['scrollLeft']()) + 'px';
                            _0x885cx66['style']['top'] = (_0x885cx12['clientY'] + _0x885cx1(window)['scrollTop']() + 25) + 'px'
                        });
                        break;
                    case 'bottom-left':
                        _0x885cx1('body')['on'](_0x885cx65, function(_0x885cx12) {
                            window['m'] = _0x885cx53(_0x885cx12);
                            _0x885cx66['style']['left'] = (_0x885cx12['clientX'] + _0x885cx1(window)['scrollLeft']() - _0x885cx66['offsetWidth'] + 10) + 'px';
                            _0x885cx66['style']['top'] = (_0x885cx12['clientY'] + _0x885cx1(window)['scrollTop']() + 25) + 'px'
                        });
                        break;
                    case 'bottom':
                        _0x885cx1('body')['on'](_0x885cx65, function(_0x885cx12) {
                            window['m'] = _0x885cx53(_0x885cx12);
                            _0x885cx66['style']['left'] = _0x885cx12['clientX'] + _0x885cx1(window)['scrollLeft']() - _0x885cx66['offsetWidth'] / 2 + 'px';
                            _0x885cx66['style']['top'] = _0x885cx12['clientY'] + _0x885cx1(window)['scrollTop']() + 25 + 'px'
                        });
                        break;
                    case 'top':
                        _0x885cx1('body')['on'](_0x885cx65, function(_0x885cx12) {
                            window['m'] = _0x885cx53(_0x885cx12);
                            _0x885cx66['style']['left'] = _0x885cx12['clientX'] + _0x885cx1(window)['scrollLeft']() - _0x885cx66['offsetWidth'] / 2 + 'px';
                            _0x885cx66['style']['top'] = _0x885cx12['clientY'] + _0x885cx1(window)['scrollTop']() - _0x885cx66['offsetHeight'] - 10 + 'px'
                        });
                        break;
                    case 'top-right':
                        _0x885cx1('body')['on'](_0x885cx65, function(_0x885cx12) {
                            window['m'] = _0x885cx53(_0x885cx12);
                            _0x885cx66['style']['left'] = _0x885cx12['clientX'] + _0x885cx1(window)['scrollLeft']() + 'px';
                            _0x885cx66['style']['top'] = _0x885cx12['clientY'] + _0x885cx1(window)['scrollTop']() - _0x885cx66['offsetHeight'] - 10 + 'px'
                        });
                        break;
                    case 'top-left':
                        _0x885cx1('body')['on'](_0x885cx65, function(_0x885cx12) {
                            window['m'] = _0x885cx53(_0x885cx12);
                            _0x885cx66['style']['left'] = _0x885cx12['clientX'] + _0x885cx1(window)['scrollLeft']() - _0x885cx66['offsetWidth'] + 10 + 'px';
                            _0x885cx66['style']['top'] = _0x885cx12['clientY'] + _0x885cx1(window)['scrollTop']() - _0x885cx66['offsetHeight'] - 10 + 'px'
                        });
                        break;
                    case 'left':
                        _0x885cx1('body')['on'](_0x885cx65, function(_0x885cx12) {
                            window['m'] = _0x885cx53(_0x885cx12);
                            _0x885cx66['style']['left'] = _0x885cx12['clientX'] + _0x885cx1(window)['scrollLeft']() - _0x885cx66['offsetWidth'] - 10 + 'px';
                            _0x885cx66['style']['top'] = _0x885cx12['clientY'] + _0x885cx1(window)['scrollTop']() - _0x885cx66['offsetHeight'] / 2 + 'px'
                        });
                        break;
                    case 'right':
                        _0x885cx1('body')['on'](_0x885cx65, function(_0x885cx12) {
                            window['m'] = _0x885cx53(_0x885cx12);
                            _0x885cx66['style']['left'] = _0x885cx12['clientX'] + _0x885cx1(window)['scrollLeft']() + 15 + 'px';
                            _0x885cx66['style']['top'] = _0x885cx12['clientY'] + _0x885cx1(window)['scrollTop']() - _0x885cx66['offsetHeight'] / 2 + 'px'
                        });
                        break
                }
            },
            setPopovers: function(_0x885cx33) {
                if (typeof _0x885cx33['mode'] == 'string' && _0x885cx33['mode']['indexOf']('function') == 0) {
                    _0x885cx33['mode'] = _0x885cxb8['functionFromString'](_0x885cx33['mode'])
                };
                _0x885cx1['extend'](true, _0x885cx58['options'], {
                    popovers: _0x885cx33
                });
                _0x885cx58['options']['popovers']['on'] = _0x885cx58['options']['popovers']['mode'] != 'off';
                if (!_0x885cx58['mapPopover']) {
                    _0x885cx58['mapPopover'] = _0x885cx1('<div />')['addClass']('mapsvg-popover');
                    _0x885cx58['mapPopover']['closeButton'] = _0x885cx1('<div class="mapsvg-popover-close">&#10005;</div>');
                    _0x885cx58['mapPopover']['contentDiv'] = _0x885cx1('<div class="mapsvg-popover-content"></div>');
                    _0x885cx58['mapPopover']['append'](_0x885cx58['mapPopover']['contentDiv']);
                    _0x885cx58['mapPopover']['append'](_0x885cx58['mapPopover']['closeButton']);
                    _0x885cx58['mapPopover']['css']({
                        width: _0x885cx58['options']['popovers']['width'] + (_0x885cx58['options']['popovers']['width'] == 'auto' ? '' : 'px'),
                        height: _0x885cx58['options']['popovers']['height'] + (_0x885cx58['options']['popovers']['height'] == 'auto' ? '' : 'px')
                    });
                    _0x885cx58['mapPopover']['closeButton']['on']('click', _0x885cxb8['hidePopover']);
                    _0x885cx1('body')['append'](_0x885cx58['mapPopover'])
                };
                _0x885cx1('body')['off']('.popover.mapsvg', _0x885cxb8['popoverOffHandler']);
                if (!_0x885cx51) {
                    _0x885cx1('body')['on']('mousedown.popover.mapsvg', _0x885cxb8['popoverOffHandler'])
                }
            },
            setInitialViewBox: function(_0x885cx67) {
                if (typeof _0x885cx67 == 'string') {
                    _0x885cx67 = _0x885cx67['trim']()['split'](' ')
                };
                _0x885cx58['_viewBox'] = [parseFloat(_0x885cx67[0]), parseFloat(_0x885cx67[1]), parseFloat(_0x885cx67[2]), parseFloat(_0x885cx67[3])];
                _0x885cx58['zoomLevel'] = 0
            },
            setViewBox: function(_0x885cx67, _0x885cx68) {
                if (typeof _0x885cx67 == 'string') {
                    _0x885cx67 = _0x885cx67['trim']()['split'](' ')
                };
                var _0x885cx69 = (_0x885cx67 && _0x885cx67['length'] == 4) ? _0x885cx67 : _0x885cx58['svgDefault']['viewBox'];
                var _0x885cx6a = parseInt(_0x885cx69[2]) != _0x885cx58['viewBox'][2] || parseInt(_0x885cx69[3]) != _0x885cx58['viewBox'][3];
                _0x885cx58['viewBox'] = [parseFloat(_0x885cx69[0]), parseFloat(_0x885cx69[1]), parseFloat(_0x885cx69[2]), parseFloat(_0x885cx69[3])];
                if (!_0x885cx67) {
                    _0x885cx58['_viewBox'] = _0x885cx58['viewBox'];
                    _0x885cx58['_scale'] = 1
                };
                _0x885cx58['$svg'][0]['setAttribute']('viewBox', _0x885cx58['viewBox']['join'](' '));
                _0x885cxb8['setResponsive'](_0x885cx58['options']['responsive'], true);
                if (_0x885cx6a && !_0x885cx68) {
                    _0x885cx58['scale'] = _0x885cxb8['getScale']();
                    _0x885cxb8['markersAdjustPosition']();
                    if (_0x885cx52['ie']) {
                        _0x885cxb8['mapAdjustStrokes']()
                    }
                };
                return true
            },
            redraw: function() {
                _0x885cx58['$map']['css']({
                    width: _0x885cx58['$map']['width'](),
                    height: _0x885cx58['$map']['width']() / _0x885cx58['whRatio']
                });
                if (!_0x885cx52['ie']) {
                    _0x885cx58['$map']['css']({
                        width: 'auto',
                        height: 'auto'
                    })
                } else {
                    _0x885cx58['$map']['css']({
                        width: 'auto'
                    })
                };
                _0x885cxb8['updateSize']()
            },
            setSize: function(_0x885cx6b, _0x885cx6c, _0x885cx6d) {
                _0x885cx58['options']['width'] = parseFloat(_0x885cx6b);
                _0x885cx58['options']['height'] = parseFloat(_0x885cx6c);
                _0x885cx58['options']['responsive'] = _0x885cx6d != null ? _0x885cx7(_0x885cx6d) : _0x885cx58['options']['responsive'];
                if ((!_0x885cx58['options']['width'] && !_0x885cx58['options']['height'])) {
                    _0x885cx58['options']['width'] = _0x885cx58['svgDefault']['width'];
                    _0x885cx58['options']['height'] = _0x885cx58['svgDefault']['height']
                } else {
                    if (!_0x885cx58['options']['width'] && _0x885cx58['options']['height']) {
                        _0x885cx58['options']['width'] = parseInt(_0x885cx58['options']['height'] * _0x885cx58['svgDefault']['width'] / _0x885cx58['svgDefault']['height'])
                    } else {
                        if (_0x885cx58['options']['width'] && !_0x885cx58['options']['height']) {
                            _0x885cx58['options']['height'] = parseInt(_0x885cx58['options']['width'] * _0x885cx58['svgDefault']['height'] / _0x885cx58['svgDefault']['width'])
                        }
                    }
                };
                _0x885cx58['whRatio'] = _0x885cx58['options']['width'] / _0x885cx58['options']['height'];
                _0x885cx58['scale'] = _0x885cxb8['getScale']();
                _0x885cxb8['setResponsive'](_0x885cx6d);
                if (_0x885cx58['markers']) {
                    _0x885cxb8['markersAdjustPosition']()
                };
                return [_0x885cx58['options']['width'], _0x885cx58['options']['height']]
            },
            setResponsive: function(_0x885cx37, _0x885cx6e) {
                _0x885cx37 = _0x885cx37 != undefined ? _0x885cx7(_0x885cx37) : _0x885cx58['options']['responsive'];
                _0x885cx1(window)['off']('resize.mapsvg');
                if (_0x885cx37) {
                    _0x885cx1(window)['on']('resize.mapsvg', _0x885cxb8['updateSize']);
                    if (!_0x885cx58['$map']['hasClass']('mapsvg-responsive')) {
                        _0x885cx58['$map']['addClass']('mapsvg-responsive');
                        _0x885cx58['$map']['css']({
                            "\x77\x69\x64\x74\x68": 'auto',
                            "\x68\x65\x69\x67\x68\x74": 'auto'
                        })
                    };
                    _0x885cx58['$map']['height'](_0x885cx58['$map']['width']() / _0x885cx58['whRatio']);
                    _0x885cx1(window)['on']('resize.mapsvg', function() {
                        _0x885cx58['$map']['height'](_0x885cx58['$map']['width']() / _0x885cx58['whRatio']);
                        _0x885cxb8['updateSize']()
                    })
                } else {
                    _0x885cx58['$map']['removeClass']('mapsvg-responsive');
                    _0x885cx58['$map']['css']({
                        "\x77\x69\x64\x74\x68": _0x885cx58['options']['width'] + 'px',
                        "\x68\x65\x69\x67\x68\x74": _0x885cx58['options']['height'] + 'px'
                    })
                };
                _0x885cx1['extend'](true, _0x885cx58['options'], {
                    responsive: _0x885cx37
                });
                _0x885cxb8['updateSize']()
            },
            setScroll: function(_0x885cx33) {
                _0x885cx33['on'] != null && (_0x885cx33['on'] = _0x885cx7(_0x885cx33['on']));
                _0x885cx33['limit'] != null && (_0x885cx33['limit'] = _0x885cx7(_0x885cx33['limit']));
                _0x885cx1['extend'](true, _0x885cx58['options'], {
                    scroll: _0x885cx33
                });
                _0x885cxb8['setEventHandlers']()
            },
            setZoom: function(_0x885cx33) {
                _0x885cx33 = _0x885cx33 || {};
                _0x885cx33['on'] != undefined && (_0x885cx33['on'] = _0x885cx7(_0x885cx33['on']));
                _0x885cx33['mousewheel'] != undefined && (_0x885cx33['mousewheel'] = _0x885cx7(_0x885cx33['mousewheel']));
                _0x885cx33['delta'] && (_0x885cx33['delta'] = parseFloat(_0x885cx33['delta']));
                if (_0x885cx33['limit']) {
                    if (typeof _0x885cx33['limit'] == 'string') {
                        _0x885cx33['limit'] = _0x885cx33['limit']['split'](';')
                    };
                    _0x885cx33['limit'] = [parseInt(_0x885cx33['limit'][0]), parseInt(_0x885cx33['limit'][1])]
                };
                _0x885cx1['extend'](true, _0x885cx58['options'], {
                    zoom: _0x885cx33
                });
                _0x885cx58['$map']['off']('mousewheel.mapsvg');
                if (_0x885cx58['options']['zoom']['on'] && _0x885cx58['options']['zoom']['mousewheel']) {
                    _0x885cx58['$map']['on']('mousewheel.mapsvg', function(_0x885cx65, _0x885cx6f, _0x885cx70, _0x885cx71) {
                        var _0x885cx69 = _0x885cx6f > 0 ? 1 : -1;
                        _0x885cxb8['zoom'](_0x885cx69);
                        return false
                    })
                };
                _0x885cxb8['setZoomButtons']()
            },
            setZoomButtons: function() {
                var _0x885cx72 = _0x885cx58['options']['zoom']['buttons']['location'] || 'hide';
                if (!_0x885cx58['zoomButtons']) {
                    var _0x885cx73 = _0x885cx1('<div />')['addClass']('mapsvg-buttons');
                    _0x885cx73['zoomIn'] = _0x885cx1('<div />')['addClass']('mapsvg-btn-zoom in');
                    var _0x885cx65 = _0x885cx51 ? 'touchstart' : 'click';
                    _0x885cx73['zoomIn']['on'](_0x885cx65, function(_0x885cx12) {
                        _0x885cx12['stopPropagation']();
                        _0x885cxb8['zoomIn']()
                    });
                    _0x885cx73['zoomOut'] = _0x885cx1('<div />')['addClass']('mapsvg-btn-zoom out');
                    _0x885cx73['zoomOut']['on'](_0x885cx65, function(_0x885cx12) {
                        _0x885cx12['stopPropagation']();
                        _0x885cxb8['zoomOut']()
                    });
                    _0x885cx73['append'](_0x885cx73['zoomIn'])['append'](_0x885cx73['zoomOut']);
                    _0x885cx58['zoomButtons'] = _0x885cx73;
                    _0x885cx58['$map']['append'](_0x885cx58['zoomButtons'])
                };
                _0x885cx58['zoomButtons']['removeClass']('left');
                _0x885cx58['zoomButtons']['removeClass']('right');
                _0x885cx72 == 'right' && _0x885cx58['zoomButtons']['addClass']('right') || _0x885cx72 == 'left' && _0x885cx58['zoomButtons']['addClass']('left');
                (_0x885cx58['options']['zoom']['on'] && _0x885cx72 != 'hide') ? _0x885cx58['zoomButtons']['show'](): _0x885cx58['zoomButtons']['hide']()
            },
            setCursor: function(_0x885cx74) {
                _0x885cx74 = _0x885cx74 == 'pointer' ? 'pointer' : 'default';
                _0x885cx58['options']['cursor'] = _0x885cx74;
                if (_0x885cx74 == 'pointer') {
                    _0x885cx58['$map']['addClass']('mapsvg-cursor-pointer')
                } else {
                    _0x885cx58['$map']['removeClass']('mapsvg-cursor-pointer')
                }
            },
            setPreloaderText: function(_0x885cx1a) {
                _0x885cx58['options']['loadingText'] = _0x885cx1a
            },
            setMultiSelect: function(_0x885cx37) {
                _0x885cx58['options']['multiSelect'] = _0x885cx7(_0x885cx37);
                _0x885cxb8['deselectAllRegions']()
            },
            setGauge: function(_0x885cx33) {
                _0x885cx33 = _0x885cx33 || _0x885cx58['options']['gauge'];
                _0x885cx33['on'] != undefined && (_0x885cx33['on'] = _0x885cx7(_0x885cx33['on']));
                _0x885cx1['extend'](true, _0x885cx58['options'], {
                    gauge: _0x885cx33
                });
                var _0x885cx75 = false;
                if (!_0x885cx58['$gauge']) {
                    _0x885cx58['$gauge'] = {};
                    _0x885cx58['$gauge']['gradient'] = _0x885cx1('<td>&nbsp;</td>')['addClass']('mapsvg-gauge-gradient');
                    _0x885cxb8['setGaugeGradientCSS']();
                    _0x885cx58['$gauge']['container'] = _0x885cx1('<div />')['addClass']('mapsvg-gauge')['hide']();
                    _0x885cx58['$gauge']['table'] = _0x885cx1('<table />');
                    var _0x885cx76 = _0x885cx1('<tr />');
                    _0x885cx58['$gauge']['labelLow'] = _0x885cx1('<td>' + _0x885cx58['options']['gauge']['labels']['low'] + '</td>');
                    _0x885cx58['$gauge']['labelHigh'] = _0x885cx1('<td>' + _0x885cx58['options']['gauge']['labels']['high'] + '</td>');
                    _0x885cx76['append'](_0x885cx58['$gauge']['labelLow']);
                    _0x885cx76['append'](_0x885cx58['$gauge']['gradient']);
                    _0x885cx76['append'](_0x885cx58['$gauge']['labelHigh']);
                    _0x885cx58['$gauge']['table']['append'](_0x885cx76);
                    _0x885cx58['$gauge']['container']['append'](_0x885cx58['$gauge']['table']);
                    _0x885cx58['$map']['append'](_0x885cx58['$gauge']['container'])
                };
                if (!_0x885cx58['options']['gauge']['on'] && _0x885cx58['$gauge']['container']['is'](':visible')) {
                    _0x885cx58['$gauge']['container']['hide']();
                    _0x885cx75 = true
                } else {
                    if (_0x885cx58['options']['gauge']['on'] && !_0x885cx58['$gauge']['container']['is'](':visible')) {
                        _0x885cx58['$gauge']['container']['show']();
                        _0x885cx75 = true
                    }
                };
                if (_0x885cx33['colors']) {
                    _0x885cx58['options']['gauge']['colors']['lowRGB'] = tinycolor(_0x885cx58['options']['gauge']['colors']['low'])['toRgb']();
                    _0x885cx58['options']['gauge']['colors']['highRGB'] = tinycolor(_0x885cx58['options']['gauge']['colors']['high'])['toRgb']();
                    _0x885cx58['options']['gauge']['colors']['diffRGB'] = {
                        r: _0x885cx58['options']['gauge']['colors']['highRGB']['r'] - _0x885cx58['options']['gauge']['colors']['lowRGB']['r'],
                        g: _0x885cx58['options']['gauge']['colors']['highRGB']['g'] - _0x885cx58['options']['gauge']['colors']['lowRGB']['g'],
                        b: _0x885cx58['options']['gauge']['colors']['highRGB']['b'] - _0x885cx58['options']['gauge']['colors']['lowRGB']['b'],
                        a: _0x885cx58['options']['gauge']['colors']['highRGB']['a'] - _0x885cx58['options']['gauge']['colors']['lowRGB']['a']
                    };
                    _0x885cx75 = true;
                    _0x885cx58['$gauge'] && _0x885cxb8['setGaugeGradientCSS']()
                };
                if (_0x885cx33['labels']) {
                    _0x885cx58['$gauge']['labelLow']['html'](_0x885cx58['options']['gauge']['labels']['low']);
                    _0x885cx58['$gauge']['labelHigh']['html'](_0x885cx58['options']['gauge']['labels']['high'])
                };
                _0x885cx75 && _0x885cxb8['redrawGauge']()
            },
            redrawGauge: function() {
                _0x885cxb8['updateGaugeMinMax']();
                _0x885cxb8['regionsRedrawColors']()
            },
            updateGaugeMinMax: function() {
                _0x885cx58['options']['gauge']['min'] = 0;
                _0x885cx58['options']['gauge']['max'] = false;
                var _0x885cx77 = [];
                _0x885cx58['regions']['forEach'](function(_0x885cx5e) {
                    if (_0x885cx5e['gaugeValue'] != null && _0x885cx5e['gaugeValue'] != undefined) {
                        _0x885cx77['push'](_0x885cx5e['gaugeValue'])
                    }
                });
                if (_0x885cx77['length'] > 0) {
                    _0x885cx58['options']['gauge']['min'] = _0x885cx77['length'] == 1 ? 0 : Math['min']['apply'](null, _0x885cx77);
                    _0x885cx58['options']['gauge']['max'] = Math['max']['apply'](null, _0x885cx77);
                    _0x885cx58['options']['gauge']['maxAdjusted'] = _0x885cx58['options']['gauge']['max'] - _0x885cx58['options']['gauge']['min']
                }
            },
            setGaugeGradientCSS: function() {
                _0x885cx58['$gauge']['gradient']['css']({
                    background: _0x885cx58['options']['gauge']['colors']['low'],
                    background: '-moz-linear-gradient(left, ' + _0x885cx58['options']['gauge']['colors']['low'] + ' 1%,' + _0x885cx58['options']['gauge']['colors']['high'] + ' 100%)',
                    background: '-webkit-gradient(linear, left top, right top, color-stop(1%,' + _0x885cx58['options']['gauge']['colors']['low'] + '), color-stop(100%,' + _0x885cx58['options']['gauge']['colors']['high'] + '))',
                    background: '-webkit-linear-gradient(left, ' + _0x885cx58['options']['gauge']['colors']['low'] + ' 1%,' + _0x885cx58['options']['gauge']['colors']['high'] + ' 100%)',
                    background: '-o-linear-gradient(left, ' + _0x885cx58['options']['gauge']['colors']['low'] + ' 1%,' + _0x885cx58['options']['gauge']['colors']['high'] + ' 100% 100%)',
                    background: '-ms-linear-gradient(left,  ' + _0x885cx58['options']['gauge']['colors']['low'] + ' 1%,' + _0x885cx58['options']['gauge']['colors']['high'] + ' 100% 100%)',
                    background: 'linear-gradient(to right,' + _0x885cx58['options']['gauge']['colors']['low'] + ' 1%,' + _0x885cx58['options']['gauge']['colors']['high'] + ' 100%)',
                    "\x66\x69\x6C\x74\x65\x72": 'progid:DXImageTransform.Microsoft.gradient( startColorstr="' + _0x885cx58['options']['gauge']['colors']['low'] + '", endColorstr="' + _0x885cx58['options']['gauge']['colors']['high'] + '",GradientType=1 )'
                })
            },
            setMenu: function(_0x885cx33) {
                _0x885cx33 = _0x885cx33 || _0x885cx58['options']['menu'];
                _0x885cx33['on'] != undefined && (_0x885cx33['on'] = _0x885cx7(_0x885cx33['on']));
                _0x885cx1['extend'](true, _0x885cx58['options'], {
                    menu: _0x885cx33
                });
                _0x885cx58['$menu'] && _0x885cx58['$menu']['off']('click.menu.mapsvg');
                if (_0x885cx58['options']['menu']['on']) {
                    var _0x885cx78 = _0x885cx1('#' + _0x885cx58['options']['menu']['containerId']);
                    if (_0x885cx78['length']) {
                        if (!_0x885cx58['$menu']) {
                            if (!_0x885cx78['is']('ul')) {
                                _0x885cx58['$menu'] = _0x885cx1('<ul />')['appendTo'](_0x885cx78)
                            } else {
                                _0x885cx58['$menu'] = _0x885cx78
                            };
                            if (!_0x885cx58['$menu']['hasClass']('mapsvg-menu')) {
                                _0x885cx58['$menu']['addClass']('mapsvg-menu')
                            }
                        };
                        if (_0x885cx58['$menu']['children']()['length'] === 0) {
                            _0x885cx58['regions']['forEach'](function(_0x885cx55, _0x885cx79) {
                                if (!_0x885cx55['disabled']) {
                                    _0x885cx58['$menu']['append'](_0x885cx58['options']['menu']['template'](_0x885cx55))
                                }
                            })
                        };
                        _0x885cx58['$menu']['on']('click.menu.mapsvg', 'a', function(_0x885cx12) {
                            _0x885cx12['preventDefault']();
                            var _0x885cx2b = _0x885cx1(this)['attr']('href')['replace']('#', '');
                            var _0x885cx55 = _0x885cxb8['getRegion'](_0x885cx2b);
                            var _0x885cx7a = _0x885cx55['getCenter']();
                            _0x885cx12['clientX'] = _0x885cx7a[0];
                            _0x885cx12['clientY'] = _0x885cx7a[1];
                            _0x885cxb8['regionClickHandler'](_0x885cx12, _0x885cx55)
                        })['on']('mouseover.menu.mapsvg', 'a', function(_0x885cx12) {
                            var _0x885cx2b = _0x885cx1(this)['attr']('href')['replace']('#', '');
                            var _0x885cx55 = _0x885cxb8['getRegion'](_0x885cx2b);
                            if (!_0x885cx55['selected']) {
                                _0x885cx55['highlight']()
                            }
                        })['on']('mouseout.menu.mapsvg', 'a', function(_0x885cx12) {
                            var _0x885cx2b = _0x885cx1(this)['attr']('href')['replace']('#', '');
                            var _0x885cx55 = _0x885cxb8['getRegion'](_0x885cx2b);
                            if (!_0x885cx55['selected']) {
                                _0x885cx55['unhighlight']()
                            }
                        })
                    }
                }
            },
            setMenuMarkers: function(_0x885cx33) {
                _0x885cx33 = _0x885cx33 || _0x885cx58['options']['menuMarkers'];
                _0x885cx33['on'] != undefined && (_0x885cx33['on'] = _0x885cx7(_0x885cx33['on']));
                _0x885cx1['extend'](true, _0x885cx58['options'], {
                    menuMarkers: _0x885cx33
                });
                _0x885cx58['$menuMarkers'] && _0x885cx58['$menuMarkers']['off']('click.menuMarkers.mapsvg');
                if (_0x885cx58['options']['menuMarkers']['on']) {
                    var _0x885cx78 = _0x885cx1('#' + _0x885cx58['options']['menuMarkers']['containerId']);
                    if (_0x885cx78['length']) {
                        if (!_0x885cx58['$menuMarkers']) {
                            if (!_0x885cx78['is']('ul')) {
                                _0x885cx58['$menuMarkers'] = _0x885cx1('<ul />')['appendTo'](_0x885cx78)
                            } else {
                                _0x885cx58['$menuMarkers'] = _0x885cx78
                            };
                            if (!_0x885cx58['$menuMarkers']['hasClass']('mapsvg-menu-markers')) {
                                _0x885cx58['$menuMarkers']['addClass']('mapsvg-menu-markers')
                            }
                        };
                        if (_0x885cx58['$menuMarkers']['children']()['length'] === 0) {
                            _0x885cx58['markers']['forEach'](function(_0x885cx3f, _0x885cx79) {
                                _0x885cx58['$menuMarkers']['append'](_0x885cx58['options']['menuMarkers']['template'](_0x885cx3f))
                            })
                        };
                        _0x885cx58['$menuMarkers']['on']('click.menuMarkers.mapsvg', 'a', function(_0x885cx12) {
                            _0x885cx12['preventDefault']();
                            var _0x885cx7b = _0x885cx1(this)['attr']('href')['replace']('#', '');
                            var _0x885cx3f = _0x885cxb8['getMarker'](_0x885cx7b);
                            var _0x885cx7a = _0x885cx3f['getCenter']();
                            _0x885cx12 = {
                                clientX: _0x885cx7a[0],
                                clientY: _0x885cx7a[1]
                            };
                            _0x885cxb8['regionClickHandler'](_0x885cx12, _0x885cx3f)
                        })
                    }
                }
            },
            getRegion: function(_0x885cx27) {
                return _0x885cx58['regions'][_0x885cx58['regionsDict'][_0x885cx27]]
            },
            getMarker: function(_0x885cx27) {
                return _0x885cx58['markers'][_0x885cx58['markersDict'][_0x885cx27]]
            },
            checkId: function(_0x885cx27) {
                if (_0x885cxb8['getRegion'](_0x885cx27)) {
                    return {
                        error: 'This ID is already being used by a Region'
                    }
                } else {
                    if (_0x885cxb8['getMarker'](_0x885cx27)) {
                        return {
                            error: 'This ID is already being used by another Marker'
                        }
                    } else {
                        return true
                    }
                }
            },
            regionsRedrawColors: function() {
                _0x885cx58['regions']['forEach'](function(_0x885cx55) {
                    _0x885cx55['setFill']()
                })
            },
            destroy: function() {
                delete _0x885cx4a[_0x885cx58['$map']['attr']('id')];
                _0x885cx58['$map']['empty']();
                return _0x885cxb8
            },
            getData: function() {
                return _0x885cx58
            },
            getScale: function() {
                var _0x885cx7c = _0x885cx58['svgDefault']['width'] / _0x885cx58['svgDefault']['height'];
                var _0x885cx7d = _0x885cx58['options']['width'] / _0x885cx58['options']['height'];
                var _0x885cx7e, _0x885cx7f;
                var _0x885cx80 = [_0x885cx58['$map']['width'](), _0x885cx58['$map']['height']()];
                _0x885cx7f = _0x885cx80[0] / _0x885cx58['viewBox'][2];
                return _0x885cx7f || 1
            },
            updateSize: function() {
                _0x885cx58['scale'] = _0x885cxb8['getScale']();
                _0x885cxb8['markersAdjustPosition']();
                if (_0x885cx52['ie']) {
                    _0x885cxb8['mapAdjustStrokes']()
                }
            },
            getViewBox: function() {
                return _0x885cx58['viewBox']
            },
            viewBoxSetBySize: function(_0x885cx6b, _0x885cx6c) {
                _0x885cx58['_viewBox'] = _0x885cxb8['viewBoxGetBySize'](_0x885cx6b, _0x885cx6c);
                _0x885cx58['options']['width'] = parseFloat(_0x885cx6b);
                _0x885cx58['options']['height'] = parseFloat(_0x885cx6c);
                _0x885cxb8['setViewBox'](_0x885cx58._viewBox, true);
                _0x885cx58['whRatio'] = _0x885cx58['viewBox'][2] / _0x885cx58['viewBox'][3];
                if (!_0x885cx58['options']['responsive']) {
                    _0x885cxb8['setResponsive']()
                };
                return _0x885cx58['viewBox']
            },
            viewBoxGetBySize: function(_0x885cx6b, _0x885cx6c) {
                var _0x885cx81 = _0x885cx6b / _0x885cx6c;
                var _0x885cx82 = _0x885cx58['svgDefault']['viewBox'][2] / _0x885cx58['svgDefault']['viewBox'][3];
                var _0x885cx83 = _0x885cx1['extend']([], _0x885cx58['svgDefault']['viewBox']);
                if (_0x885cx81 != _0x885cx82) {
                    if (_0x885cx81 > _0x885cx82) {
                        _0x885cx83[2] = _0x885cx58['svgDefault']['viewBox'][3] * _0x885cx81;
                        _0x885cx83[0] = _0x885cx58['svgDefault']['viewBox'][0] - ((_0x885cx83[2] - _0x885cx58['svgDefault']['viewBox'][2]) / 2)
                    } else {
                        _0x885cx83[3] = _0x885cx58['svgDefault']['viewBox'][2] / _0x885cx81;
                        _0x885cx83[1] = _0x885cx58['svgDefault']['viewBox'][1] - ((_0x885cx83[3] - _0x885cx58['svgDefault']['viewBox'][3]) / 2)
                    }
                };
                return _0x885cx83
            },
            viewBoxReset: function(_0x885cx84) {
                if (_0x885cx84) {
                    var _0x885cx67 = _0x885cx58['_viewBox'] || _0x885cx58['svgDefault']['viewBox'];
                    _0x885cx58['zoomLevel'] = 0;
                    _0x885cx58['_scale'] = 1;
                    _0x885cxb8['setViewBox'](_0x885cx67)
                } else {
                    _0x885cxb8['setViewBox']()
                }
            },
            getGeoViewBox: function() {
                var _0x885cx67 = _0x885cx58['viewBox'];
                var _0x885cx85 = _0x885cxb8['convertPixelToGeo'](_0x885cx67[0], _0x885cx67[1])[1];
                var _0x885cx86 = _0x885cxb8['convertPixelToGeo'](_0x885cx67[0] + _0x885cx67[2], _0x885cx67[1])[1];
                var _0x885cx87 = _0x885cxb8['convertPixelToGeo'](_0x885cx67[0], _0x885cx67[1])[0];
                var _0x885cx88 = _0x885cxb8['convertPixelToGeo'](_0x885cx67[0], _0x885cx67[1] + _0x885cx67[3])[0];
                return [_0x885cx85, _0x885cx87, _0x885cx86, _0x885cx88]
            },
            mapAdjustStrokes: function() {
                _0x885cx58['regions']['forEach'](function(_0x885cx55) {
                    if (_0x885cx55['svg_style']['stroke-width']) {
                        _0x885cx55['node']['css']('stroke-width', _0x885cx55['svg_style']['stroke-width'] / _0x885cx58['scale'])
                    }
                })
            },
            zoomIn: function() {
                _0x885cxb8['zoom'](1)
            },
            zoomOut: function() {
                _0x885cxb8['zoom'](-1)
            },
            touchZoomStart: function(_0x885cx89) {
                touchZoomStart = _0x885cx58['_scale'];
                _0x885cx58['scale'] = _0x885cx58['scale'] * zoom_k;
                zoom = _0x885cx58['_scale'];
                _0x885cx58['_scale'] = _0x885cx58['_scale'] * zoom_k;
                var _0x885cx8a = _0x885cx58['viewBox'][2];
                var _0x885cx8b = _0x885cx58['viewBox'][3];
                var _0x885cx8c = [];
                _0x885cx8c[2] = _0x885cx58['_viewBox'][2] / _0x885cx58['_scale'];
                _0x885cx8c[3] = _0x885cx58['_viewBox'][3] / _0x885cx58['_scale'];
                _0x885cx8c[0] = _0x885cx58['viewBox'][0] + (_0x885cx8a - _0x885cx8c[2]) / 2;
                _0x885cx8c[1] = viewBox[1] + (_0x885cx8b - _0x885cx8c[3]) / 2;
                _0x885cxb8['setViewBox'](_0x885cx8c)
            },
            touchZoomMove: function() {},
            touchZoomEnd: function() {},
            zoom: function(_0x885cx6f, _0x885cx8d) {
                var _0x885cx8a = _0x885cx58['viewBox'][2];
                var _0x885cx8b = _0x885cx58['viewBox'][3];
                var _0x885cx8c = [];
                if (!_0x885cx8d) {
                    var _0x885cx69 = _0x885cx6f > 0 ? 1 : -1;
                    _0x885cx58['_zoomLevel'] = _0x885cx58['zoomLevel'];
                    _0x885cx58['_zoomLevel'] += _0x885cx69;
                    if (_0x885cx58['_zoomLevel'] > _0x885cx58['options']['zoom']['limit'][1] || _0x885cx58['_zoomLevel'] < _0x885cx58['options']['zoom']['limit'][0]) {
                        return false
                    };
                    _0x885cx58['zoomLevel'] = _0x885cx58['_zoomLevel'];
                    var _0x885cx8e = _0x885cx69 * _0x885cx58['options']['zoom']['delta'];
                    if (_0x885cx8e < 1) {
                        _0x885cx8e = -1 / _0x885cx8e
                    };
                    _0x885cx58['_scale'] = _0x885cx58['_scale'] * _0x885cx8e;
                    _0x885cx8c[2] = _0x885cx58['_viewBox'][2] / _0x885cx58['_scale'];
                    _0x885cx8c[3] = _0x885cx58['_viewBox'][3] / _0x885cx58['_scale']
                } else {
                    _0x885cx58['_scale'] = _0x885cx8d;
                    _0x885cx8c[2] = _0x885cx58['touchZoomStartViewBox'][2] / _0x885cx58['_scale'];
                    _0x885cx8c[3] = _0x885cx58['touchZoomStartViewBox'][3] / _0x885cx58['_scale']
                };
                _0x885cx8c[0] = _0x885cx58['viewBox'][0] + (_0x885cx8a - _0x885cx8c[2]) / 2;
                _0x885cx8c[1] = _0x885cx58['viewBox'][1] + (_0x885cx8b - _0x885cx8c[3]) / 2;
                if (_0x885cx58['options']['scroll']['limit']) {
                    if (_0x885cx8c[0] < _0x885cx58['svgDefault']['viewBox'][0]) {
                        _0x885cx8c[0] = _0x885cx58['svgDefault']['viewBox'][0]
                    } else {
                        if (_0x885cx8c[0] + _0x885cx8c[2] > _0x885cx58['svgDefault']['viewBox'][0] + _0x885cx58['svgDefault']['viewBox'][2]) {
                            _0x885cx8c[0] = _0x885cx58['svgDefault']['viewBox'][0] + _0x885cx58['svgDefault']['viewBox'][2] - _0x885cx8c[2]
                        }
                    };
                    if (_0x885cx8c[1] < _0x885cx58['svgDefault']['viewBox'][1]) {
                        _0x885cx8c[1] = _0x885cx58['svgDefault']['viewBox'][1]
                    } else {
                        if (_0x885cx8c[1] + _0x885cx8c[3] > _0x885cx58['svgDefault']['viewBox'][1] + _0x885cx58['svgDefault']['viewBox'][3]) {
                            _0x885cx8c[1] = _0x885cx58['svgDefault']['viewBox'][1] + _0x885cx58['svgDefault']['viewBox'][3] - _0x885cx8c[3]
                        }
                    }
                };
                _0x885cxb8['setViewBox'](_0x885cx8c)
            },
            markerDelete: function(_0x885cx3f) {
                var _0x885cx27 = _0x885cx3f['id'];
                var _0x885cx8f = _0x885cx58['markers']['splice'](_0x885cx58['markersDict'][_0x885cx27], 1);
                _0x885cx3f['delete']();
                _0x885cx3f = null;
                _0x885cxb8['updateMarkersDict']();
                if (_0x885cx58['markers']['length'] == 0) {
                    _0x885cx58['options']['markerLastID'] = 0
                }
            },
            markerAdd: function(_0x885cx39, _0x885cx90) {
                var _0x885cx33 = _0x885cx1['extend'](true, {}, _0x885cx56, _0x885cx39);
                if (!_0x885cx33['src']) {
                    return false
                };
                _0x885cx33['src'] = _0x885cx8(_0x885cx33['src']);
                if (_0x885cx33['width'] && _0x885cx33['height']) {
                    return _0x885cxb8['markerAddFinalStep'](_0x885cx33, _0x885cx90)
                } else {
                    var _0x885cx3c = new Image();
                    _0x885cx3c['onload'] = function() {
                        _0x885cx33['width'] = this['width'];
                        _0x885cx33['height'] = this['height'];
                        return _0x885cxb8['markerAddFinalStep'](_0x885cx33, _0x885cx90)
                    };
                    _0x885cx3c['src'] = _0x885cx33['src']
                }
            },
            markerAddFinalStep: function(_0x885cx33, _0x885cx90) {
                if (_0x885cx33['xy'] || (_0x885cx3(_0x885cx33['x']) && _0x885cx3(_0x885cx33['y']))) {
                    xy = _0x885cx33['xy'] || [_0x885cx33['x'], _0x885cx33['y']];
                    if (_0x885cx90) {
                        xy[0] += _0x885cx58['scale'] < 1 ? 1 : 2;
                        xy[1] += 1;
                        xy[0] = xy[0] / _0x885cx58['scale'] - _0x885cx33['width'] / 2 + _0x885cx58['viewBox'][0];
                        xy[1] = xy[1] / _0x885cx58['scale'] - _0x885cx33['height'] + _0x885cx58['viewBox'][1]
                    }
                } else {
                    if (_0x885cx33['geoCoords']) {
                        xy = _0x885cxb8['convertGeoToPixel'](_0x885cx33['geoCoords']);
                        xy[0] = xy[0] - _0x885cx33['width'] / 2 + 0.3;
                        xy[1] = (xy[1] - _0x885cx33['height']) + 1.5
                    } else {
                        return false
                    }
                };
                _0x885cx33['x'] = xy[0];
                _0x885cx33['y'] = xy[1];
                _0x885cx33['id'] = _0x885cx33['id'] || 'marker_' + (_0x885cx58['options']['markerLastID']++);
                if (!_0x885cx33['geoCoords'] && _0x885cx58['mapIsGeo']) {
                    _0x885cx33['geoCoords'] = _0x885cxb8['convertPixelToGeo'](_0x885cx33['x'] + _0x885cx33['width'] / 2, _0x885cx33['y'] + (_0x885cx33['height'] - 1))
                };
                var _0x885cx3f = new _0x885cx3a(_0x885cx33, _0x885cx58['scale']);
                _0x885cx58['$svg']['append'](_0x885cx3f['node']);
                _0x885cx3f['href'] && _0x885cx3f['setHref'](_0x885cx3f['href']);
                _0x885cx3f['adjustPosition'](_0x885cx58['scale']);
                _0x885cx58['markers']['push'](_0x885cx3f);
                _0x885cx58['markersDict'][_0x885cx3f['id']] = _0x885cx58['markers']['length'] - 1;
                if (_0x885cx90 && _0x885cx58['markerEditHandler']) {
                    _0x885cx58['markerEditHandler']['call'](_0x885cx3f)
                };
                return _0x885cx3f
            },
            markersAdjustPosition: function() {
                var _0x885cx40, _0x885cx41;
                _0x885cx58['markers']['forEach'](function(_0x885cx3f) {
                    _0x885cx3f['adjustPosition'](_0x885cx58['scale'])
                })
            },
            markerMoveStart: function() {
                this['data']('ox', parseFloat(this['attr']('x')));
                this['data']('oy', parseFloat(this['attr']('y')))
            },
            markerMove: function(_0x885cx40, _0x885cx41) {
                _0x885cx40 = _0x885cx40 / _0x885cx58['scale'];
                _0x885cx41 = _0x885cx41 / _0x885cx58['scale'];
                this['attr']({
                    x: this['data']('ox') + _0x885cx40,
                    y: this['data']('oy') + _0x885cx41
                })
            },
            markerMoveEnd: function() {
                if (this['data']('ox') == this['attr']('x') && this['data']('oy') == this['attr']('y')) {
                    _0x885cx33['markerEditHandler']['call'](this)
                }
            },
            scrollStart: function(_0x885cx12, _0x885cx2c) {
                if (_0x885cx1(_0x885cx12['target'])['hasClass']('mapsvg-btn-zoom') || _0x885cx1(_0x885cx12['target'])['closest']('.mapsvg-gauge')['length']) {
                    return false
                };
                if (_0x885cx58['editMarkers']['on'] && _0x885cx1(_0x885cx12['target'])['attr']('class') == 'mapsvg-marker') {
                    return false
                };
                _0x885cx12['preventDefault']();
                if (_0x885cx51) {
                    var _0x885cx91 = _0x885cx12['originalEvent'] && _0x885cx12['originalEvent']['touches'] && _0x885cx12['originalEvent']['touches'][0] ? _0x885cx12['originalEvent']['touches'][0] : _0x885cx12
                } else {
                    var _0x885cx91 = _0x885cx12
                };
                _0x885cx58['scroll'] = {};
                _0x885cx58['scroll']['vxi'] = _0x885cx58['viewBox'][0];
                _0x885cx58['scroll']['vyi'] = _0x885cx58['viewBox'][1];
                _0x885cx58['scroll']['x'] = _0x885cx91['clientX'];
                _0x885cx58['scroll']['y'] = _0x885cx91['clientY'];
                _0x885cx58['scroll']['dx'] = 0;
                _0x885cx58['scroll']['dy'] = 0;
                _0x885cx58['scroll']['vx'] = 0;
                _0x885cx58['scroll']['vy'] = 0;
                if (!_0x885cx51) {
                    _0x885cx1('body')['on']('mousemove.scroll.mapsvg', _0x885cxb8['scrollMove'])['on']('mouseup.scroll.mapsvg', function(_0x885cx12) {
                        _0x885cxb8['scrollEnd'](_0x885cx12, _0x885cx2c)
                    })
                }
            },
            scrollMove: function(_0x885cx12) {
                _0x885cx12['preventDefault']();
                _0x885cx58['isScrolling'] = true;
                _0x885cx1('body')['css']({
                    "\x63\x75\x72\x73\x6F\x72": 'move'
                });
                var _0x885cx91 = _0x885cx12['originalEvent'] && _0x885cx12['originalEvent']['touches'] && _0x885cx12['originalEvent']['touches'][0] ? _0x885cx12['originalEvent']['touches'][0] : _0x885cx12;
                _0x885cx58['scroll']['dx'] = (_0x885cx58['scroll']['x'] - _0x885cx91['clientX']);
                _0x885cx58['scroll']['dy'] = (_0x885cx58['scroll']['y'] - _0x885cx91['clientY']);
                var _0x885cx92 = parseInt(_0x885cx58['scroll']['vxi'] + _0x885cx58['scroll']['dx'] / _0x885cx58['scale']);
                var _0x885cx93 = parseInt(_0x885cx58['scroll']['vyi'] + _0x885cx58['scroll']['dy'] / _0x885cx58['scale']);
                if (_0x885cx58['options']['scroll']['limit']) {
                    if (_0x885cx92 < _0x885cx58['svgDefault']['viewBox'][0]) {
                        _0x885cx92 = _0x885cx58['svgDefault']['viewBox'][0]
                    } else {
                        if (_0x885cx58['viewBox'][2] + _0x885cx92 > _0x885cx58['svgDefault']['viewBox'][0] + _0x885cx58['svgDefault']['viewBox'][2]) {
                            _0x885cx92 = (_0x885cx58['svgDefault']['viewBox'][0] + _0x885cx58['svgDefault']['viewBox'][2] - _0x885cx58['viewBox'][2])
                        }
                    };
                    if (_0x885cx93 < _0x885cx58['svgDefault']['viewBox'][1]) {
                        _0x885cx93 = _0x885cx58['svgDefault']['viewBox'][1]
                    } else {
                        if (_0x885cx58['viewBox'][3] + _0x885cx93 > _0x885cx58['svgDefault']['viewBox'][1] + _0x885cx58['svgDefault']['viewBox'][3]) {
                            _0x885cx93 = (_0x885cx58['svgDefault']['viewBox'][1] + _0x885cx58['svgDefault']['viewBox'][3] - _0x885cx58['viewBox'][3])
                        }
                    }
                };
                _0x885cx58['scroll']['vx'] = _0x885cx92;
                _0x885cx58['scroll']['vy'] = _0x885cx93;
                _0x885cxb8['setViewBox']([_0x885cx58['scroll']['vx'], _0x885cx58['scroll']['vy'], _0x885cx58['viewBox'][2], _0x885cx58['viewBox'][3]])
            },
            scrollEnd: function(_0x885cx12, _0x885cx2c) {
                _0x885cx58['isScrolling'] = false;
                if (Math['abs'](_0x885cx58['scroll']['dx']) < 5 && Math['abs'](_0x885cx58['scroll']['dy']) < 5) {
                    if (_0x885cx58['editMarkers']['on']) {
                        _0x885cxb8['markerAddClickHandler'](_0x885cx12)
                    } else {
                        if (_0x885cx58['region_clicked']) {
                            _0x885cxb8['regionClickHandler'](_0x885cx12, _0x885cx58['region_clicked'])
                        }
                    }
                };
                _0x885cx1('body')['css']({
                    "\x63\x75\x72\x73\x6F\x72": 'default'
                });
                _0x885cx58['viewBox'][0] = _0x885cx58['scroll']['vx'] || _0x885cx58['viewBox'][0];
                _0x885cx58['viewBox'][1] = _0x885cx58['scroll']['vy'] || _0x885cx58['viewBox'][1];
                _0x885cx1('body')['off']('.scroll.mapsvg')
            },
            scrollRegionClickHandler: function(_0x885cx12, _0x885cx55) {
                _0x885cx58['region_clicked'] = _0x885cx55
            },
            touchStart: function(_0x885cx94, _0x885cx2c) {
                _0x885cx94['preventDefault']();
                var _0x885cx12 = _0x885cx94['originalEvent'];
                if (_0x885cx58['options']['zoom'] && _0x885cx12['touches'] && _0x885cx12['touches']['length'] == 2) {
                    _0x885cx58['touchZoomStartViewBox'] = _0x885cx58['viewBox'];
                    _0x885cx58['touchZoomStart'] = _0x885cx58['scale'];
                    _0x885cx58['touchZoomEnd'] = 1
                } else {
                    _0x885cxb8['scrollStart'](_0x885cx94, _0x885cx2c);
                    _0x885cx58['isScrolling'] = true
                }
            },
            touchMove: function(_0x885cx94) {
                _0x885cx94['preventDefault']();
                var _0x885cx12 = _0x885cx94['originalEvent'];
                if (_0x885cx58['options']['zoom'] && _0x885cx12['touches'] && _0x885cx12['touches']['length'] >= 2) {
                    _0x885cxb8['zoom'](null, _0x885cx12['scale']);
                    _0x885cx58['isScrolling'] = false
                } else {
                    if (_0x885cx58['isScrolling']) {
                        _0x885cxb8['scrollMove'](_0x885cx94)
                    }
                }
            },
            touchEnd: function(_0x885cx94) {
                _0x885cx94['preventDefault']();
                var _0x885cx12 = _0x885cx94['originalEvent'];
                if (_0x885cx58['touchZoomStart']) {
                    _0x885cx58['touchZoomStart'] = false;
                    _0x885cx58['touchZoomEnd'] = false
                } else {
                    if (_0x885cx58['isScrolling']) {
                        _0x885cxb8['scrollEnd'](_0x885cx94)
                    }
                }
            },
            markersGroupHide: function(_0x885cx95) {
                for (var _0x885cx79 in _0x885cx58['markers'][_0x885cx95]) {
                    _0x885cx58['markers'][_0x885cx95][_0x885cx79]['hide']()
                }
            },
            markersGroupShow: function(_0x885cx95) {
                for (var _0x885cx79 in _0x885cx58['markers'][_0x885cx95]) {
                    _0x885cx58['markers'][_0x885cx95][_0x885cx79]['show']()
                }
            },
            regionsGroupSelect: function(_0x885cx95) {
                for (var _0x885cx79 in _0x885cx58['markers'][_0x885cx95]) {
                    _0x885cx58['markers'][_0x885cx95][_0x885cx79]['hide']()
                }
            },
            regionsGroupUnselect: function(_0x885cx95) {
                for (var _0x885cx79 in _0x885cx58['markers'][_0x885cx95]) {
                    _0x885cx58['markers'][_0x885cx95][_0x885cx79]['show']()
                }
            },
            markersGet: function() {
                return _0x885cx58['markers']
            },
            getSelected: function() {
                return _0x885cx58['selected_id']
            },
            selectRegion: function(_0x885cx27) {
                if (typeof _0x885cx27 == 'string') {
                    var _0x885cx55 = _0x885cxb8['getRegion'](_0x885cx27)
                } else {
                    var _0x885cx55 = _0x885cx27
                };
                if (!_0x885cx55 || _0x885cx55['disabled']) {
                    return false
                };
                if (_0x885cx58['options']['multiSelect'] && !_0x885cx58['editRegions']['on']) {
                    if (_0x885cx55['selected']) {
                        _0x885cxb8['deselectRegion'](_0x885cx55);
                        return
                    }
                } else {
                    if (_0x885cx58['selected_id']['length'] > 0) {
                        _0x885cxb8['deselectRegion']()
                    }
                };
                _0x885cx58['selected_id']['push'](_0x885cx55['id']);
                _0x885cx55['select']()
            },
            deselectAllRegions: function() {
                _0x885cx1['each'](_0x885cx58['selected_id'], function(_0x885cx96, _0x885cx27) {
                    _0x885cxb8['deselectRegion'](_0x885cxb8['getRegion'](_0x885cx27))
                })
            },
            deselectRegion: function(_0x885cx55) {
                if (!_0x885cx55) {
                    _0x885cx55 = _0x885cxb8['getRegion'](_0x885cx58['selected_id'][0])
                };
                _0x885cx55['deselect']();
                var _0x885cx79 = _0x885cx1['inArray'](_0x885cx55['id'], _0x885cx58['selected_id']);
                _0x885cx58['selected_id']['splice'](_0x885cx79, 1);
                if (_0x885cx52['ie']) {
                    _0x885cxb8['mapAdjustStrokes']()
                }
            },
            selectRegionsGroup: function(_0x885cx97) {
                for (var _0x885cx5e in _0x885cx58['regionGroups'][_0x885cx97]) {
                    var _0x885cx98 = _0x885cx58['regionGroups'][_0x885cx97][_0x885cx5e]['id'];
                    _0x885cxb8['selectRegion'](_0x885cx98)
                }
            },
            highlightRegionsGroup: function(_0x885cx97) {
                for (var _0x885cx5e in _0x885cx58['regionGroups'][_0x885cx97]) {
                    var _0x885cx98 = _0x885cx58['regionGroups'][_0x885cx97][_0x885cx5e]['id'];
                    _0x885cxb8['highlightRegion'](_0x885cx98)
                }
            },
            unhighlightRegionsGroup: function(_0x885cx97) {
                for (var _0x885cx5e in _0x885cx58['regionGroups'][_0x885cx97]) {
                    var _0x885cx98 = _0x885cx58['regionGroups'][_0x885cx97][_0x885cx5e]['id'];
                    _0x885cxb8['unhighlightRegion'](_0x885cx98)
                }
            },
            narrowToRegionsGroup: function(_0x885cx97) {
                _0x885cx58['regions']['forEach'](function(_0x885cx5e) {
                    if (_0x885cx5e['group'] != _0x885cx97 && !_0x885cx5e['disabled']) {
                        _0x885cx5e['disabled'] = true;
                        _0x885cx5e['disabledTemp'] = true;
                        _0x885cx1(_0x885cx5e['node'])['addClass']('mapsvg-disabled')
                    } else {
                        if (_0x885cx5e['disabledTemp']) {
                            _0x885cx5e['disabledTemp'] = false;
                            _0x885cx5e['disabled'] = false;
                            _0x885cx1(_0x885cx5e['node'])['removeClass']('mapsvg-disabled')
                        }
                    }
                })
            },
            disableRegionsGroup: function(_0x885cx97) {},
            enableAllRegionsGroups: function() {
                _0x885cx58['regions']['forEach'](function(_0x885cx5e) {
                    if (_0x885cx5e['disabledTemp']) {
                        _0x885cx5e['disabledTemp'] = false;
                        _0x885cx5e['disabled'] = false;
                        _0x885cx1(_0x885cx5e['node'])['removeClass']('mapsvg-disabled')
                    }
                })
            },
            convertGeoToPixel: function(_0x885cx99) {
                var _0x885cx9a = parseFloat(_0x885cx99[0]);
                var _0x885cx9b = parseFloat(_0x885cx99[1]);
                var _0x885cx16 = (_0x885cx9b - _0x885cx58['geoViewBox']['leftLon']) * (_0x885cx58['svgDefault']['width'] / _0x885cx58['mapLonDelta']);
                var _0x885cx9a = _0x885cx9a * 3.14159 / 180;
                var _0x885cx9c = ((_0x885cx58['svgDefault']['width'] / _0x885cx58['mapLonDelta']) * 360) / (2 * 3.14159);
                var _0x885cx9d = (_0x885cx9c / 2 * Math['log']((1 + Math['sin'](_0x885cx58['mapLatBottomDegree'])) / (1 - Math['sin'](_0x885cx58['mapLatBottomDegree']))));
                var _0x885cx17 = _0x885cx58['svgDefault']['height'] - ((_0x885cx9c / 2 * Math['log']((1 + Math['sin'](_0x885cx9a)) / (1 - Math['sin'](_0x885cx9a)))) - _0x885cx9d);
                _0x885cx16 += _0x885cx58['svgDefault']['viewBox'][0];
                _0x885cx17 += _0x885cx58['svgDefault']['viewBox'][1];
                return [_0x885cx16, _0x885cx17]
            },
            convertPixelToGeo: function(_0x885cx9e, _0x885cx9f) {
                _0x885cx9e -= _0x885cx58['svgDefault']['viewBox'][0];
                _0x885cx9f -= _0x885cx58['svgDefault']['viewBox'][1];
                var _0x885cxa0 = _0x885cx58['svgDefault']['width'] / _0x885cx58['mapLonDelta'] * 360 / (2 * Math['PI']);
                var _0x885cx9d = (_0x885cxa0 / 2 * Math['log']((1 + Math['sin'](_0x885cx58['mapLatBottomDegree'])) / (1 - Math['sin'](_0x885cx58['mapLatBottomDegree']))));
                var _0x885cxa1 = _0x885cx58['svgDefault']['height'] + _0x885cx9d;
                var _0x885cx1d = (_0x885cxa1 - _0x885cx9f) / _0x885cxa0;
                var _0x885cx9a = 180 / Math['PI'] * (2 * Math['atan'](Math['exp'](_0x885cx1d)) - Math['PI'] / 2);
                var _0x885cxa2 = _0x885cx58['geoViewBox']['leftLon'] + _0x885cx9e / _0x885cx58['svgDefault']['width'] * _0x885cx58['mapLonDelta'];
                return [_0x885cx9a, _0x885cxa2]
            },
            pickGaugeColor: function(_0x885cxa3) {
                var _0x885cx18 = (_0x885cxa3 - _0x885cx58['options']['gauge']['min']) / _0x885cx58['options']['gauge']['maxAdjusted'];
                var _0x885cx36 = [Math['round'](_0x885cx58['options']['gauge']['colors']['diffRGB']['r'] * _0x885cx18 + _0x885cx58['options']['gauge']['colors']['lowRGB']['r']), Math['round'](_0x885cx58['options']['gauge']['colors']['diffRGB']['g'] * _0x885cx18 + _0x885cx58['options']['gauge']['colors']['lowRGB']['g']), Math['round'](_0x885cx58['options']['gauge']['colors']['diffRGB']['b'] * _0x885cx18 + _0x885cx58['options']['gauge']['colors']['lowRGB']['b']), Math['round'](_0x885cx58['options']['gauge']['colors']['diffRGB']['a'] * _0x885cx18 + _0x885cx58['options']['gauge']['colors']['lowRGB']['a'])];
                return _0x885cx36
            },
            isRegionDisabled: function(_0x885cx27, _0x885cxa4) {
                if (_0x885cx58['options']['regions'][_0x885cx27] && (_0x885cx58['options']['regions'][_0x885cx27]['disabled'] || _0x885cxa4 == 'none')) {
                    return true
                } else {
                    if ((_0x885cx58['options']['regions'][_0x885cx27] == undefined || _0x885cx7(_0x885cx58['options']['regions'][_0x885cx27]['disabled'])) && (_0x885cx58['options']['disableAll'] || _0x885cxa4 == 'none' || _0x885cx27 == 'labels' || _0x885cx27 == 'Labels')) {
                        return true
                    } else {
                        return false
                    }
                }
            },
            regionClickHandler: function(_0x885cx12, _0x885cx55) {
                if (!_0x885cx55 || _0x885cx55['disabled']) {
                    return false
                };
                _0x885cx58['region_clicked'] = null;
                if (_0x885cx55['mapsvg_type'] == 'region') {
                    _0x885cxb8['selectRegion'](_0x885cx55['id'])
                };
                if (_0x885cx58['editRegions']['on']) {
                    _0x885cx58['regionEditHandler']['call'](_0x885cx55);
                    return
                };
                _0x885cxb8['hidePopover']();
                var _0x885cxa5 = _0x885cxb8['getPopoverBody'](_0x885cx55);
                _0x885cxa5 && _0x885cxb8['showPopover'](_0x885cx12, _0x885cxa5);
                if (_0x885cx58['options']['onClick']) {
                    _0x885cx58['options']['onClick']['call'](_0x885cx55, _0x885cx12, _0x885cxb8)
                };
                if (_0x885cx51 && _0x885cx55['href'] && !_0x885cx58['disableLinks']) {
                    window['location']['href'] = _0x885cx55['href']
                }
            },
            fileExists: function(_0x885cx9) {
                if (_0x885cx9['substr'](0, 4) == 'data') {
                    return true
                };
                var _0x885cxa6 = new XMLHttpRequest();
                _0x885cxa6['open']('HEAD', _0x885cx9, false);
                _0x885cxa6['send']();
                return _0x885cxa6['status'] != 404
            },
            getStyle: function(_0x885cx57, _0x885cxe) {
                if (_0x885cx57['currentStyle']) {
                    var _0x885cxa7 = _0x885cx57['currentStyle']['margin']
                } else {
                    if (window['getComputedStyle']) {
                        if (window['getComputedStyle']['getPropertyValue']) {
                            var _0x885cxa7 = window['getComputedStyle'](_0x885cx57, null)['getPropertyValue'](_0x885cxe)
                        } else {
                            var _0x885cxa7 = window['getComputedStyle'](_0x885cx57)[_0x885cxe]
                        }
                    }
                };
                return _0x885cxa7
            },
            search: function(_0x885cxa8) {
                results = [];
                _0x885cxa8 = _0x885cxa8['toLowerCase']();
                _0x885cx58['regions']['forEach'](function(_0x885cx5e) {
                    if (_0x885cx5e['id']['toLowerCase']()['indexOf'](_0x885cxa8) === 0 || (_0x885cx5e['title'] && _0x885cx5e['title']['toLowerCase']()['indexOf'](_0x885cxa8) === 0)) {
                        results['push'](_0x885cx5e['id'])
                    }
                });
                return results
            },
            searchMarkers: function(_0x885cxa8) {
                results = [];
                _0x885cxa8 = _0x885cxa8['toLowerCase']();
                _0x885cx58['markers']['forEach'](function(_0x885cx5f) {
                    if (_0x885cx5f['id']['toLowerCase']()['indexOf'](_0x885cxa8) === 0) {
                        results['push'](_0x885cx5f['id'])
                    }
                });
                return results
            },
            markerAddClickHandler: function(_0x885cx12) {
                if (_0x885cx1(_0x885cx12['target'])['is']('image')) {
                    return false
                };
                var _0x885cxa9 = _0x885cx53(_0x885cx12);
                var _0x885cx16 = _0x885cxa9['x'] - _0x885cx58['$map']['offset']()['left'];
                var _0x885cx17 = _0x885cxa9['y'] - _0x885cx58['$map']['offset']()['top'];
                if (!_0x885cx1['isNumeric'](_0x885cx16) || !_0x885cx1['isNumeric'](_0x885cx17)) {
                    return false
                };
                _0x885cxb8['markerAdd']({
                    xy: [_0x885cx16, _0x885cx17],
                    group: _0x885cx58['editMarkers']['group']
                }, true)
            },
            setMarkersEditMode: function(_0x885cx37) {
                _0x885cx58['editMarkers']['on'] = _0x885cx7(_0x885cx37);
                _0x885cxb8['deselectAllRegions']();
                _0x885cxb8['setEventHandlers']()
            },
            setRegionsEditMode: function(_0x885cx37) {
                _0x885cx58['editRegions']['on'] = _0x885cx7(_0x885cx37);
                _0x885cxb8['deselectAllRegions']();
                _0x885cxb8['setEventHandlers']()
            },
            setMarkers: function(_0x885cxaa) {
                _0x885cx1['each'](_0x885cxaa, function(_0x885cx79, _0x885cx3f) {
                    _0x885cxb8['markerAdd'](_0x885cx3f)
                })
            },
            setEventHandler: function() {},
            textBr: function(_0x885cx1a) {
                var _0x885cxab = [];
                var _0x885cxac = _0x885cx1a['split'](/\n/);
                var _0x885cxad = jQuery(document['createElement']('div'));
                for (var _0x885cx79 = 0; _0x885cx79 < _0x885cxac['length']; _0x885cx79++) {
                    _0x885cxab['push'](_0x885cxad['text'](_0x885cxac[_0x885cx79])['html']())
                };
                return _0x885cxab['join']('<br />')
            },
            runUserFunction: function(_0x885cx59) {
                try {
                    _0x885cx59()
                } catch (error) {
                    console['log']('MapSVG user-defined function error: (line ' + error['line'] + '): ' + error['message'])
                }
            },
            showTooltip: function(_0x885cx55) {
                if (_0x885cx55['disabled']) {
                    return false
                };
                var _0x885cx66;
                if (_0x885cx58['options']['tooltips']['priority'] == 'global') {
                    _0x885cx66 = (typeof _0x885cx58['options']['tooltips']['mode'] == 'function') && _0x885cx58['options']['tooltips']['mode']['call'](_0x885cx55, _0x885cx58['mapTip'], _0x885cx55, _0x885cxb8) || _0x885cx58['options']['tooltips']['mode'] != 'off' && _0x885cx55[_0x885cx58['options']['tooltips']['mode']] || _0x885cx55['tooltip']
                } else {
                    _0x885cx66 = _0x885cx55['tooltip'] || (typeof _0x885cx58['options']['tooltips']['mode'] == 'function') && _0x885cx58['options']['tooltips']['mode']['call'](_0x885cx55, _0x885cx58['mapTip'], _0x885cx55, _0x885cxb8) || _0x885cx58['options']['tooltips']['mode'] != 'off' && _0x885cx55[_0x885cx58['options']['tooltips']['mode']]
                };
                if (_0x885cx66) {
                    _0x885cx58['mapTip']['html'](_0x885cx66);
                    _0x885cx58['mapTip']['addClass']('mapsvg-tooltip-visible')
                }
            },
            getPopoverBody: function(_0x885cx55) {
                var _0x885cxa5;
                if (_0x885cx58['options']['popovers']['priority'] == 'global') {
                    _0x885cxa5 = typeof _0x885cx58['options']['popovers']['mode'] == 'function' ? _0x885cx58['options']['popovers']['mode']['call'](_0x885cx55, _0x885cx58['mapPopover'], _0x885cx55, _0x885cxb8) : _0x885cx55['popover']
                } else {
                    _0x885cxa5 = _0x885cx55['popover'] || (typeof _0x885cx58['options']['popovers']['mode'] == 'function' ? _0x885cx58['options']['popovers']['mode']['call'](_0x885cx55, _0x885cx58['mapPopover'], _0x885cx55, _0x885cxb8) : null)
                };
                return _0x885cxa5
            },
            showPopover: function(_0x885cx12, _0x885cxae, _0x885cxaf) {
                if (!_0x885cxaf || _0x885cxaf['length'] != 2) {
                    var _0x885cx5f = _0x885cx53(_0x885cx12);
                    var _0x885cxaf = [_0x885cx5f['x'], _0x885cx5f['y']]
                } else {
                    var _0x885cx3b = _0x885cxb8['getScale']();
                    _0x885cxaf[0] = _0x885cx58['$map']['offset']()['left'] + _0x885cxaf[0] * _0x885cx3b;
                    _0x885cxaf[1] = _0x885cx58['$map']['offset']()['top'] + _0x885cxaf[1] * _0x885cx3b
                };
                if (_0x885cxae) {
                    _0x885cx58['mapPopover']['contentDiv']['html'](_0x885cxae);
                    var _0x885cxb0 = _0x885cxaf[0] - _0x885cx58['mapPopover']['outerWidth'](false) / 2;
                    var _0x885cxb1 = _0x885cxaf[1] - _0x885cx58['mapPopover']['outerHeight'](false) - 14;
                    if (_0x885cxb0 < 0) {
                        _0x885cxb0 = 0
                    };
                    if (_0x885cxb1 < 0) {
                        _0x885cxb1 = 0
                    };
                    _0x885cx58['mapPopover']['css']('left', _0x885cxb0)['css']('top', _0x885cxb1);
                    _0x885cx58['mapPopover']['addClass']('mapsvg-popover-visible')
                } else {
                    _0x885cx58['mapPopover']['removeClass']('mapsvg-popover-visible')
                }
            },
            hidePopover: function() {
                _0x885cx58['mapPopover']['contentDiv']['empty']();
                _0x885cx58['mapPopover']['removeClass']('mapsvg-popover-visible');
                _0x885cx1('body')['off']('mousedown.popover.mapsvg', _0x885cxb8['popoverOffHandler']);
                if (_0x885cx58['options']['onPopoverClose']) {
                    _0x885cx58['options']['onPopoverClose']['call'](_0x885cxb8)
                }
            },
            hideTip: function() {
                _0x885cx58['mapTip']['removeClass']('mapsvg-tooltip-visible')
            },
            popoverOffHandler: function(_0x885cx12) {
                if (_0x885cx1(_0x885cx12['target'])['closest']('.mapsvg-popover')['length']) {
                    return false
                };
                _0x885cxb8['hidePopover']()
            },
            mouseOverHandler: function(_0x885cx12) {
                if (this instanceof _0x885cx28) {
                    if (!this['selected']) {
                        this['highlight']()
                    }
                };
                _0x885cxb8['showTooltip'](this);
                return _0x885cx58['options']['mouseOver'] && _0x885cx58['options']['mouseOver']['call'](this, _0x885cx12, _0x885cxb8)
            },
            mouseOutHandler: function(_0x885cx12) {
                if (this instanceof _0x885cx28) {
                    if (!this['selected']) {
                        this['unhighlight']()
                    }
                };
                _0x885cxb8['hideTip']();
                return _0x885cx58['options']['mouseOut'] && _0x885cx58['options']['mouseOut']['call'](this, _0x885cx12, _0x885cxb8)
            },
            updateOptions: function(_0x885cx33) {
                _0x885cx1['extend'](true, _0x885cx58['options'], _0x885cx33)
            },
            updateMarkersDict: function() {
                _0x885cx58['markersDict'] = {};
                _0x885cx58['markers']['forEach'](function(_0x885cx3f, _0x885cx79) {
                    _0x885cx58['markersDict'][_0x885cx3f['id']] = _0x885cx79
                })
            },
            setEventHandlers: function() {
                _0x885cx58['$map']['off']('.common.mapsvg');
                if (_0x885cx58['editMarkers']['on']) {
                    var _0x885cxb2 = _0x885cx51 ? 'touchstart.common.mapsvg' : 'mousedown.common.mapsvg';
                    _0x885cx58['$map']['on'](_0x885cxb2, '.mapsvg-marker', function(_0x885cx12) {
                        _0x885cx12['originalEvent']['preventDefault']();
                        var _0x885cx3f = _0x885cxb8['getMarker'](_0x885cx1(this)['attr']('id'));
                        var _0x885cx46 = _0x885cx53(_0x885cx12);
                        _0x885cx3f['drag'](_0x885cx46, _0x885cx58['scale'], function() {
                            if (_0x885cx58['mapIsGeo']) {
                                this['geoCoords'] = _0x885cxb8['convertPixelToGeo'](this['x'] + this['width'] / 2, this['y'] + (this['height'] - 1))
                            };
                            _0x885cx58['markerEditHandler']['call'](this, true)
                        }, function() {
                            _0x885cx58['markerEditHandler']['call'](this)
                        })
                    })
                };
                if (!_0x885cx51) {
                    if (!_0x885cx58['editMarkers']['on']) {
                        _0x885cx58['$map']['on']('mouseover.common.mapsvg', '.mapsvg-region', function(_0x885cx12) {
                            var _0x885cx27 = _0x885cx1(this)['attr']('id');
                            _0x885cxb8['mouseOverHandler']['call'](_0x885cxb8['getRegion'](_0x885cx27), _0x885cx12, _0x885cxb8, _0x885cx33)
                        })['on']('mouseleave.common.mapsvg', '.mapsvg-region', function(_0x885cx12) {
                            var _0x885cx27 = _0x885cx1(this)['attr']('id');
                            _0x885cxb8['mouseOutHandler']['call'](_0x885cxb8['getRegion'](_0x885cx27), _0x885cx12, _0x885cxb8, _0x885cx33)
                        })
                    };
                    if (!_0x885cx58['editRegions']['on']) {
                        _0x885cx58['$map']['on']('mouseover.common.mapsvg', '.mapsvg-marker', function(_0x885cx12) {
                            var _0x885cx27 = _0x885cx1(this)['attr']('id');
                            _0x885cxb8['mouseOverHandler']['call'](_0x885cxb8['getMarker'](_0x885cx27), _0x885cx12, _0x885cxb8, _0x885cx33)
                        })['on']('mouseleave.common.mapsvg', '.mapsvg-marker', function(_0x885cx12) {
                            var _0x885cx27 = _0x885cx1(this)['attr']('id');
                            _0x885cxb8['mouseOutHandler']['call'](_0x885cxb8['getMarker'](_0x885cx27), _0x885cx12, _0x885cxb8, _0x885cx33)
                        })
                    }
                };
                if (!_0x885cx58['options']['scroll']['on']) {
                    var _0x885cx65 = _0x885cx51 ? 'touchstart.common.mapsvg' : 'click.common.mapsvg';
                    if (!_0x885cx58['editMarkers']['on']) {
                        _0x885cx58['$map']['on'](_0x885cx65, '.mapsvg-region', function(_0x885cx12) {
                            _0x885cxb8['regionClickHandler']['call'](_0x885cxb8, _0x885cx12, _0x885cxb8['getRegion'](_0x885cx1(this)['attr']('id')))
                        });
                        _0x885cx58['$map']['on'](_0x885cx65, '.mapsvg-marker', function(_0x885cx12) {
                            _0x885cxb8['regionClickHandler']['call'](_0x885cxb8, _0x885cx12, _0x885cxb8['getMarker'](_0x885cx1(this)['attr']('id')))
                        })
                    } else {
                        _0x885cx58['$map']['on'](_0x885cx65, function(_0x885cx12) {
                            _0x885cxb8['markerAddClickHandler'](_0x885cx12)
                        })
                    }
                } else {
                    var _0x885cx65 = _0x885cx51 ? 'touchstart.common.mapsvg' : 'mousedown.common.mapsvg';
                    _0x885cx58['$map']['on'](_0x885cx65, '.mapsvg-region', function(_0x885cx12) {
                        _0x885cx12['preventDefault']();
                        var _0x885cxb3 = _0x885cxb8['getRegion'](_0x885cx1(this)['attr']('id'));
                        _0x885cxb8['scrollRegionClickHandler']['call'](_0x885cxb8, _0x885cx12, _0x885cxb3)
                    });
                    _0x885cx58['$map']['on'](_0x885cx65, '.mapsvg-marker', function(_0x885cx12) {
                        _0x885cx12['preventDefault']();
                        var _0x885cxb3 = _0x885cxb8['getMarker'](_0x885cx1(this)['attr']('id'));
                        _0x885cxb8['scrollRegionClickHandler']['call'](_0x885cxb8, _0x885cx12, _0x885cxb3)
                    });
                    if (!_0x885cx51) {
                        _0x885cx58['$map']['on']('mousedown.common.mapsvg', function(_0x885cx12) {
                            _0x885cxb8['scrollStart'](_0x885cx12, _0x885cxb8)
                        })
                    } else {
                        _0x885cx58['$map']['on']('touchstart.common.mapsvg', function(_0x885cx12) {
                            _0x885cxb8['touchStart'](_0x885cx12, _0x885cxb8)
                        })['on']('touchmove.common.mapsvg', _0x885cxb8['touchMove'])['on']('touchend.common.mapsvg', _0x885cxb8['touchEnd'])
                    }
                }
            },
            init: function(_0x885cx39, _0x885cx57) {
                if (!_0x885cx39['source']) {
                    throw new Error('MapSVG: please provide SVG file source.');
                    return false
                };
                if (window['location']['host'] != 'mapsvg.com') {
                    return false
                };
                if (_0x885cx39['beforeLoad']) {
                    try {
                        _0x885cx39['beforeLoad']['call'](_0x885cxb8)
                    } catch (err) {}
                };
                if (_0x885cx39['source']['indexOf']('//') === 0) {
                    _0x885cx39['source'] = _0x885cx39['source']['replace'](/^\/\/[^\/]+/, '')['replace']('//', '/')
                } else {
                    _0x885cx39['source'] = _0x885cx39['source']['replace'](/^.*:\/\/[^\/]+/, '')['replace']('//', '/')
                };
                _0x885cx58 = {};
                _0x885cx58['options'] = _0x885cx1['extend'](true, {}, _0x885cx54, _0x885cx39);
                _0x885cx58['editRegions'] = {
                    on: false
                };
                _0x885cx58['editMarkers'] = {
                    on: false
                };
                _0x885cx58['map'] = _0x885cx57;
                _0x885cx58['$map'] = _0x885cx1(_0x885cx57);
                _0x885cx58['whRatio'] = 0;
                _0x885cx58['isScrolling'] = false;
                _0x885cx58['markerOptions'] = {};
                _0x885cx58['svgDefault'] = {};
                _0x885cx58['refLength'] = 0;
                _0x885cx58['scale'] = 1;
                _0x885cx58['_scale'] = 1;
                _0x885cx58['selected_id'] = [];
                _0x885cx58['mapData'] = {};
                _0x885cx58['regions'] = [];
                _0x885cx58['regionsDict'] = {};
                _0x885cx58['regionID'] = {
                    id: 0
                };
                _0x885cx58['markers'] = [];
                _0x885cx58['markersDict'] = {};
                _0x885cx58['_viewBox'] = [];
                _0x885cx58['viewBox'] = [];
                _0x885cx58['viewBoxZoom'] = [];
                _0x885cx58['viewBoxFind'] = undefined;
                _0x885cx58['zoomLevel'] = 0;
                _0x885cx58['scroll'] = {};
                _0x885cx58['geoCoordinates'] = false, _0x885cx58['geoViewBox'] = {
                    leftLon: 0,
                    topLat: 0,
                    rightLon: 0,
                    bottomLat: 0
                }, _0x885cx58['$map']['addClass']('mapsvg')['css']('background', _0x885cx58['options']['colors']['background']);
                var _0x885cxb4 = _0x885cx1('<div>' + _0x885cx58['options']['loadingText'] + '</div>')['addClass']('mapsvg-loading');
                _0x885cx58['$map']['append'](_0x885cxb4);
                _0x885cxb4['css']({
                    "\x6D\x61\x72\x67\x69\x6E\x2D\x6C\x65\x66\x74": function() {
                        return -(_0x885cx1(this)['outerWidth'](false) / 2) + 'px'
                    },
                    "\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70": function() {
                        return -(_0x885cx1(this)['outerHeight'](false) / 2) + 'px'
                    }
                });
                _0x885cx1['ajax']({
                    url: _0x885cx58['options']['source'],
                    success: function(_0x885cxb5) {
                        $data = _0x885cx1(_0x885cxb5);
                        var _0x885cxb6 = $data['find']('svg');
                        _0x885cx58['$svg'] = _0x885cxb6;
                        _0x885cx58['svgDefault']['width'] = _0x885cxb6['attr']('width');
                        _0x885cx58['svgDefault']['height'] = _0x885cxb6['attr']('height');
                        _0x885cx58['svgDefault']['viewBox'] = _0x885cxb6['attr']('viewBox');
                        if (_0x885cx58['svgDefault']['width'] && _0x885cx58['svgDefault']['height']) {
                            _0x885cx58['svgDefault']['width'] = parseFloat(_0x885cx58['svgDefault']['width']['replace'](/px/g, ''));
                            _0x885cx58['svgDefault']['height'] = parseFloat(_0x885cx58['svgDefault']['height']['replace'](/px/g, ''));
                            _0x885cx58['svgDefault']['viewBox'] = _0x885cx58['svgDefault']['viewBox'] ? _0x885cx58['svgDefault']['viewBox']['split'](' ') : [0, 0, _0x885cx58['svgDefault']['width'], _0x885cx58['svgDefault']['height']]
                        } else {
                            if (_0x885cx58['svgDefault']['viewBox']) {
                                _0x885cx58['svgDefault']['viewBox'] = _0x885cx58['svgDefault']['viewBox']['split'](' ');
                                _0x885cx58['svgDefault']['width'] = parseFloat(_0x885cx58['svgDefault']['viewBox'][2]);
                                _0x885cx58['svgDefault']['height'] = parseFloat(_0x885cx58['svgDefault']['viewBox'][3])
                            } else {
                                alert('MapSVG needs width/height or viewBox parameter to be present in SVG file.');
                                return false
                            }
                        };
                        var _0x885cxb7 = _0x885cxb6['attr']('mapsvg:geoViewBox');
                        if (_0x885cxb7) {
                            _0x885cxb7 = _0x885cxb7['split'](' ');
                            if (_0x885cxb7['length'] == 4) {
                                _0x885cx58['mapIsGeo'] = true;
                                _0x885cx58['geoCoordinates'] = true;
                                var _0x885cx67 = _0x885cxb6['attr']('mapsvg:calibratedViewBox');
                                _0x885cx58['geoViewBox'] = {
                                    leftLon: parseFloat(_0x885cxb7[0]),
                                    topLat: parseFloat(_0x885cxb7[1]),
                                    rightLon: parseFloat(_0x885cxb7[2]),
                                    bottomLat: parseFloat(_0x885cxb7[3])
                                };
                                _0x885cx58['mapLonDelta'] = _0x885cx58['geoViewBox']['rightLon'] - _0x885cx58['geoViewBox']['leftLon'];
                                _0x885cx58['mapLatBottomDegree'] = _0x885cx58['geoViewBox']['bottomLat'] * 3.14159 / 180
                            }
                        };
                        _0x885cx1['each'](_0x885cx58['svgDefault']['viewBox'], function(_0x885cx79, _0x885cx67) {
                            _0x885cx58['svgDefault']['viewBox'][_0x885cx79] = parseInt(_0x885cx67)
                        });
                        _0x885cx58['_viewBox'] = (_0x885cx58['options']['viewBox']['length'] == 4 && _0x885cx58['options']['viewBox']) || _0x885cx58['svgDefault']['viewBox'];
                        _0x885cx1['each'](_0x885cx58._viewBox, function(_0x885cx79, _0x885cx67) {
                            _0x885cx58['_viewBox'][_0x885cx79] = parseFloat(_0x885cx67)
                        });
                        _0x885cxb6['attr']('preserveAspectRatio', 'xMidYMid meet');
                        _0x885cxb6['attr']('width', '100%');
                        _0x885cxb6['attr']('height', '100%');
                        _0x885cx58['$svg']['find']('path, polygon, circle, ellipse, rect')['each'](function(_0x885cx96) {
                            var _0x885cx55 = new _0x885cx28(_0x885cx1(this), _0x885cx58['options'], _0x885cx58['regionID'], _0x885cxb8);
                            _0x885cx58['regions']['push'](_0x885cx55);
                            _0x885cx58['regionsDict'][_0x885cx55['id']] = _0x885cx96;
                            if (_0x885cx55['autoID']) {
                                _0x885cx58['presentAutoID'] = true
                            }
                        });
                        _0x885cxb8['setSize'](_0x885cx58['options']['width'], _0x885cx58['options']['height'], _0x885cx58['options']['responsive']);
                        _0x885cx58['$map']['append'](_0x885cxb6);
                        var _0x885cx67 = _0x885cx58['_viewBox'];
                        _0x885cxb8['setViewBox'](_0x885cx67);
                        _0x885cxb8['setGauge']();
                        var _0x885cxaa = _0x885cx58['options']['markers'] || _0x885cx58['options']['marks'] || [];
                        _0x885cxb8['setMarkers'](_0x885cxaa);
                        _0x885cxb8['setScroll'](_0x885cx58['options']['scroll']);
                        _0x885cxb8['setZoom'](_0x885cx58['options']['zoom']);
                        if (_0x885cx58['options']['tooltipsMode']) {
                            _0x885cx58['options']['tooltips']['mode'] = _0x885cx58['options']['tooltipsMode']
                        };
                        _0x885cxb8['setTooltips'](_0x885cx58['options']['tooltips']);
                        if (_0x885cx58['options']['popover']) {
                            _0x885cx58['options']['popovers'] = _0x885cx58['options']['popover']
                        };
                        _0x885cxb8['setPopovers'](_0x885cx58['options']['popovers']);
                        if (_0x885cx58['options']['cursor']) {
                            _0x885cxb8['setCursor'](_0x885cx58['options']['cursor'])
                        };
                        if (_0x885cx52['ie']) {
                            _0x885cxb8['mapAdjustStrokes']()
                        };
                        _0x885cx1(document)['ready'](function() {
                            _0x885cxb8['setMenu']();
                            _0x885cxb8['setMenuMarkers']()
                        });
                        _0x885cxb8['setEventHandlers']();
                        _0x885cx1('#' + _0x885cx58['$map']['attr']('id') + ' [title]')['each'](function() {
                            this['removeAttribute']('title')
                        });
                        _0x885cx1('#' + _0x885cx58['$map']['attr']('id') + ' title')['remove']();
                        _0x885cxb4['hide']();
                        if (_0x885cx58['options']['afterLoad']) {
                            _0x885cx58['options']['afterLoad']['call'](_0x885cxb8)
                        };
                        _0x885cxb8['updateSize']()
                    }
                });
                return _0x885cxb8
            }
        };
        var _0x885cxb8 = this['methods']
    };
    _0x885cx1['fn']['mapSvg'] = function(_0x885cx39) {
        var _0x885cx27 = _0x885cx1(this)['attr']('id');
        if (typeof _0x885cx39 == 'object' && _0x885cx4a[_0x885cx27] === undefined) {
            _0x885cx4a[_0x885cx27] = new _0x885cx2(this, _0x885cx39);
            return _0x885cx4a[_0x885cx27]['methods']['init'](_0x885cx39, this)
        } else {
            if (_0x885cx4a[_0x885cx27]) {
                return _0x885cx4a[_0x885cx27]['methods']
            } else {
                return _0x885cx4a
            }
        }
    }
})(jQuery);
(function(_0x885cxb9) {
    var _0x885cxba = /^\s+/,
        _0x885cxbb = /\s+$/,
        _0x885cxbc = 0,
        _0x885cxbd = _0x885cxb9['round'],
        _0x885cxbe = _0x885cxb9['min'],
        _0x885cxbf = _0x885cxb9['max'],
        _0x885cxc0 = _0x885cxb9['random'];

    function _0x885cxc1(_0x885cx64, _0x885cx39) {
        _0x885cx64 = (_0x885cx64) ? _0x885cx64 : '';
        _0x885cx39 = _0x885cx39 || {};
        if (_0x885cx64 instanceof _0x885cxc1) {
            return _0x885cx64
        };
        if (!(this instanceof _0x885cxc1)) {
            return new _0x885cxc1(_0x885cx64, _0x885cx39)
        };
        var _0x885cx36 = _0x885cxd8(_0x885cx64);
        this['_originalInput'] = _0x885cx64, this['_r'] = _0x885cx36['r'], this['_g'] = _0x885cx36['g'], this['_b'] = _0x885cx36['b'], this['_a'] = _0x885cx36['a'], this['_roundA'] = _0x885cxbd(100 * this['_a']) / 100, this['_format'] = _0x885cx39['format'] || _0x885cx36['format'];
        this['_gradientType'] = _0x885cx39['gradientType'];
        if (this['_r'] < 1) {
            this['_r'] = _0x885cxbd(this._r)
        };
        if (this['_g'] < 1) {
            this['_g'] = _0x885cxbd(this._g)
        };
        if (this['_b'] < 1) {
            this['_b'] = _0x885cxbd(this._b)
        };
        this['_ok'] = _0x885cx36['ok'];
        this['_tc_id'] = _0x885cxbc++
    }
    _0x885cxc1['prototype'] = {
        isDark: function() {
            return this['getBrightness']() < 128
        },
        isLight: function() {
            return !this['isDark']()
        },
        isValid: function() {
            return this['_ok']
        },
        getOriginalInput: function() {
            return this['_originalInput']
        },
        getFormat: function() {
            return this['_format']
        },
        getAlpha: function() {
            return this['_a']
        },
        getBrightness: function() {
            var _0x885cx36 = this['toRgb']();
            return (_0x885cx36['r'] * 299 + _0x885cx36['g'] * 587 + _0x885cx36['b'] * 114) / 1000
        },
        getLuminance: function() {
            var _0x885cx36 = this['toRgb']();
            var _0x885cxc2, _0x885cxc3, _0x885cxc4, _0x885cxc5, _0x885cxc6, _0x885cxc7;
            _0x885cxc2 = _0x885cx36['r'] / 255;
            _0x885cxc3 = _0x885cx36['g'] / 255;
            _0x885cxc4 = _0x885cx36['b'] / 255;
            if (_0x885cxc2 <= 0.03928) {
                _0x885cxc5 = _0x885cxc2 / 12.92
            } else {
                _0x885cxc5 = _0x885cxb9['pow'](((_0x885cxc2 + 0.055) / 1.055), 2.4)
            };
            if (_0x885cxc3 <= 0.03928) {
                _0x885cxc6 = _0x885cxc3 / 12.92
            } else {
                _0x885cxc6 = _0x885cxb9['pow'](((_0x885cxc3 + 0.055) / 1.055), 2.4)
            };
            if (_0x885cxc4 <= 0.03928) {
                _0x885cxc7 = _0x885cxc4 / 12.92
            } else {
                _0x885cxc7 = _0x885cxb9['pow'](((_0x885cxc4 + 0.055) / 1.055), 2.4)
            };
            return (0.2126 * _0x885cxc5) + (0.7152 * _0x885cxc6) + (0.0722 * _0x885cxc7)
        },
        setAlpha: function(_0x885cxc8) {
            this['_a'] = _0x885cx117(_0x885cxc8);
            this['_roundA'] = _0x885cxbd(100 * this['_a']) / 100;
            return this
        },
        toHsv: function() {
            var _0x885cxc9 = _0x885cxe5(this._r, this._g, this._b);
            return {
                h: _0x885cxc9['h'] * 360,
                s: _0x885cxc9['s'],
                v: _0x885cxc9['v'],
                a: this['_a']
            }
        },
        toHsvString: function() {
            var _0x885cxc9 = _0x885cxe5(this._r, this._g, this._b);
            var _0x885cx19 = _0x885cxbd(_0x885cxc9['h'] * 360),
                _0x885cx10 = _0x885cxbd(_0x885cxc9['s'] * 100),
                _0x885cx67 = _0x885cxbd(_0x885cxc9['v'] * 100);
            return (this['_a'] == 1) ? 'hsv(' + _0x885cx19 + ', ' + _0x885cx10 + '%, ' + _0x885cx67 + '%)' : 'hsva(' + _0x885cx19 + ', ' + _0x885cx10 + '%, ' + _0x885cx67 + '%, ' + this['_roundA'] + ')'
        },
        toHsl: function() {
            var _0x885cxca = _0x885cxdd(this._r, this._g, this._b);
            return {
                h: _0x885cxca['h'] * 360,
                s: _0x885cxca['s'],
                l: _0x885cxca['l'],
                a: this['_a']
            }
        },
        toHslString: function() {
            var _0x885cxca = _0x885cxdd(this._r, this._g, this._b);
            var _0x885cx19 = _0x885cxbd(_0x885cxca['h'] * 360),
                _0x885cx10 = _0x885cxbd(_0x885cxca['s'] * 100),
                _0x885cxcb = _0x885cxbd(_0x885cxca['l'] * 100);
            return (this['_a'] == 1) ? 'hsl(' + _0x885cx19 + ', ' + _0x885cx10 + '%, ' + _0x885cxcb + '%)' : 'hsla(' + _0x885cx19 + ', ' + _0x885cx10 + '%, ' + _0x885cxcb + '%, ' + this['_roundA'] + ')'
        },
        toHex: function(_0x885cxcc) {
            return _0x885cxe9(this._r, this._g, this._b, _0x885cxcc)
        },
        toHexString: function(_0x885cxcc) {
            return '#' + this['toHex'](_0x885cxcc)
        },
        toHex8: function() {
            return _0x885cxeb(this._r, this._g, this._b, this._a)
        },
        toHex8String: function() {
            return '#' + this['toHex8']()
        },
        toRgb: function() {
            return {
                r: _0x885cxbd(this._r),
                g: _0x885cxbd(this._g),
                b: _0x885cxbd(this._b),
                a: this['_a']
            }
        },
        toRgbString: function() {
            return (this['_a'] == 1) ? 'rgb(' + _0x885cxbd(this._r) + ', ' + _0x885cxbd(this._g) + ', ' + _0x885cxbd(this._b) + ')' : 'rgba(' + _0x885cxbd(this._r) + ', ' + _0x885cxbd(this._g) + ', ' + _0x885cxbd(this._b) + ', ' + this['_roundA'] + ')'
        },
        toPercentageRgb: function() {
            return {
                r: _0x885cxbd(_0x885cx118(this._r, 255) * 100) + '%',
                g: _0x885cxbd(_0x885cx118(this._g, 255) * 100) + '%',
                b: _0x885cxbd(_0x885cx118(this._b, 255) * 100) + '%',
                a: this['_a']
            }
        },
        toPercentageRgbString: function() {
            return (this['_a'] == 1) ? 'rgb(' + _0x885cxbd(_0x885cx118(this._r, 255) * 100) + '%, ' + _0x885cxbd(_0x885cx118(this._g, 255) * 100) + '%, ' + _0x885cxbd(_0x885cx118(this._b, 255) * 100) + '%)' : 'rgba(' + _0x885cxbd(_0x885cx118(this._r, 255) * 100) + '%, ' + _0x885cxbd(_0x885cx118(this._g, 255) * 100) + '%, ' + _0x885cxbd(_0x885cx118(this._b, 255) * 100) + '%, ' + this['_roundA'] + ')'
        },
        toName: function() {
            if (this['_a'] === 0) {
                return 'transparent'
            };
            if (this['_a'] < 1) {
                return false
            };
            return _0x885cx114[_0x885cxe9(this._r, this._g, this._b, true)] || false
        },
        toFilter: function(_0x885cxcd) {
            var _0x885cxce = '#' + _0x885cxeb(this._r, this._g, this._b, this._a);
            var _0x885cxcf = _0x885cxce;
            var _0x885cxd0 = this['_gradientType'] ? 'GradientType = 1, ' : '';
            if (_0x885cxcd) {
                var _0x885cx10 = _0x885cxc1(_0x885cxcd);
                _0x885cxcf = _0x885cx10['toHex8String']()
            };
            return 'progid:DXImageTransform.Microsoft.gradient(' + _0x885cxd0 + 'startColorstr=' + _0x885cxce + ',endColorstr=' + _0x885cxcf + ')'
        },
        toString: function(_0x885cxd1) {
            var _0x885cxd2 = !!_0x885cxd1;
            _0x885cxd1 = _0x885cxd1 || this['_format'];
            var _0x885cxd3 = false;
            var _0x885cxd4 = this['_a'] < 1 && this['_a'] >= 0;
            var _0x885cxd5 = !_0x885cxd2 && _0x885cxd4 && (_0x885cxd1 === 'hex' || _0x885cxd1 === 'hex6' || _0x885cxd1 === 'hex3' || _0x885cxd1 === 'name');
            if (_0x885cxd5) {
                if (_0x885cxd1 === 'name' && this['_a'] === 0) {
                    return this['toName']()
                };
                return this['toRgbString']()
            };
            if (_0x885cxd1 === 'rgb') {
                _0x885cxd3 = this['toRgbString']()
            };
            if (_0x885cxd1 === 'prgb') {
                _0x885cxd3 = this['toPercentageRgbString']()
            };
            if (_0x885cxd1 === 'hex' || _0x885cxd1 === 'hex6') {
                _0x885cxd3 = this['toHexString']()
            };
            if (_0x885cxd1 === 'hex3') {
                _0x885cxd3 = this['toHexString'](true)
            };
            if (_0x885cxd1 === 'hex8') {
                _0x885cxd3 = this['toHex8String']()
            };
            if (_0x885cxd1 === 'name') {
                _0x885cxd3 = this['toName']()
            };
            if (_0x885cxd1 === 'hsl') {
                _0x885cxd3 = this['toHslString']()
            };
            if (_0x885cxd1 === 'hsv') {
                _0x885cxd3 = this['toHsvString']()
            };
            return _0x885cxd3 || this['toHexString']()
        },
        clone: function() {
            return _0x885cxc1(this.toString())
        },
        _applyModification: function(_0x885cx5a, _0x885cxd6) {
            var _0x885cx64 = _0x885cx5a['apply'](null, [this]['concat']([]['slice']['call'](_0x885cxd6)));
            this['_r'] = _0x885cx64['_r'];
            this['_g'] = _0x885cx64['_g'];
            this['_b'] = _0x885cx64['_b'];
            this['setAlpha'](_0x885cx64._a);
            return this
        },
        lighten: function() {
            return this._applyModification(_0x885cxf2, arguments)
        },
        brighten: function() {
            return this._applyModification(_0x885cxf3, arguments)
        },
        darken: function() {
            return this._applyModification(_0x885cxf4, arguments)
        },
        desaturate: function() {
            return this._applyModification(_0x885cxee, arguments)
        },
        saturate: function() {
            return this._applyModification(_0x885cxf0, arguments)
        },
        greyscale: function() {
            return this._applyModification(_0x885cxf1, arguments)
        },
        spin: function() {
            return this._applyModification(_0x885cxf5, arguments)
        },
        _applyCombination: function(_0x885cx5a, _0x885cxd6) {
            return _0x885cx5a['apply'](null, [this]['concat']([]['slice']['call'](_0x885cxd6)))
        },
        analogous: function() {
            return this._applyCombination(_0x885cxfb, arguments)
        },
        complement: function() {
            return this._applyCombination(_0x885cxf7, arguments)
        },
        monochromatic: function() {
            return this._applyCombination(_0x885cx100, arguments)
        },
        splitcomplement: function() {
            return this._applyCombination(_0x885cxfa, arguments)
        },
        triad: function() {
            return this._applyCombination(_0x885cxf8, arguments)
        },
        tetrad: function() {
            return this._applyCombination(_0x885cxf9, arguments)
        }
    };
    _0x885cxc1['fromRatio'] = function(_0x885cx64, _0x885cx39) {
        if (typeof _0x885cx64 == 'object') {
            var _0x885cxd7 = {};
            for (var _0x885cx79 in _0x885cx64) {
                if (_0x885cx64['hasOwnProperty'](_0x885cx79)) {
                    if (_0x885cx79 === 'a') {
                        _0x885cxd7[_0x885cx79] = _0x885cx64[_0x885cx79]
                    } else {
                        _0x885cxd7[_0x885cx79] = _0x885cx120(_0x885cx64[_0x885cx79])
                    }
                }
            };
            _0x885cx64 = _0x885cxd7
        };
        return _0x885cxc1(_0x885cx64, _0x885cx39)
    };

    function _0x885cxd8(_0x885cx64) {
        var _0x885cx36 = {
            r: 0,
            g: 0,
            b: 0
        };
        var _0x885cx1d = 1;
        var _0x885cxd9 = false;
        var _0x885cxd1 = false;
        if (typeof _0x885cx64 == 'string') {
            _0x885cx64 = _0x885cx12a(_0x885cx64)
        };
        if (typeof _0x885cx64 == 'object') {
            if (_0x885cx129(_0x885cx64['r']) && _0x885cx129(_0x885cx64['g']) && _0x885cx129(_0x885cx64['b'])) {
                _0x885cx36 = _0x885cxda(_0x885cx64['r'], _0x885cx64['g'], _0x885cx64['b']);
                _0x885cxd9 = true;
                _0x885cxd1 = String(_0x885cx64['r'])['substr'](-1) === '%' ? 'prgb' : 'rgb'
            } else {
                if (_0x885cx129(_0x885cx64['h']) && _0x885cx129(_0x885cx64['s']) && _0x885cx129(_0x885cx64['v'])) {
                    _0x885cx64['s'] = _0x885cx120(_0x885cx64['s']);
                    _0x885cx64['v'] = _0x885cx120(_0x885cx64['v']);
                    _0x885cx36 = _0x885cxe6(_0x885cx64['h'], _0x885cx64['s'], _0x885cx64['v']);
                    _0x885cxd9 = true;
                    _0x885cxd1 = 'hsv'
                } else {
                    if (_0x885cx129(_0x885cx64['h']) && _0x885cx129(_0x885cx64['s']) && _0x885cx129(_0x885cx64['l'])) {
                        _0x885cx64['s'] = _0x885cx120(_0x885cx64['s']);
                        _0x885cx64['l'] = _0x885cx120(_0x885cx64['l']);
                        _0x885cx36 = _0x885cxe0(_0x885cx64['h'], _0x885cx64['s'], _0x885cx64['l']);
                        _0x885cxd9 = true;
                        _0x885cxd1 = 'hsl'
                    }
                }
            };
            if (_0x885cx64['hasOwnProperty']('a')) {
                _0x885cx1d = _0x885cx64['a']
            }
        };
        _0x885cx1d = _0x885cx117(_0x885cx1d);
        return {
            ok: _0x885cxd9,
            format: _0x885cx64['format'] || _0x885cxd1,
            r: _0x885cxbe(255, _0x885cxbf(_0x885cx36['r'], 0)),
            g: _0x885cxbe(255, _0x885cxbf(_0x885cx36['g'], 0)),
            b: _0x885cxbe(255, _0x885cxbf(_0x885cx36['b'], 0)),
            a: _0x885cx1d
        }
    }

    function _0x885cxda(_0x885cx5e, _0x885cxdb, _0x885cxdc) {
        return {
            r: _0x885cx118(_0x885cx5e, 255) * 255,
            g: _0x885cx118(_0x885cxdb, 255) * 255,
            b: _0x885cx118(_0x885cxdc, 255) * 255
        }
    }

    function _0x885cxdd(_0x885cx5e, _0x885cxdb, _0x885cxdc) {
        _0x885cx5e = _0x885cx118(_0x885cx5e, 255);
        _0x885cxdb = _0x885cx118(_0x885cxdb, 255);
        _0x885cxdc = _0x885cx118(_0x885cxdc, 255);
        var _0x885cxde = _0x885cxbf(_0x885cx5e, _0x885cxdb, _0x885cxdc),
            _0x885cxdf = _0x885cxbe(_0x885cx5e, _0x885cxdb, _0x885cxdc);
        var _0x885cx19, _0x885cx10, _0x885cxcb = (_0x885cxde + _0x885cxdf) / 2;
        if (_0x885cxde == _0x885cxdf) {
            _0x885cx19 = _0x885cx10 = 0
        } else {
            var _0x885cx69 = _0x885cxde - _0x885cxdf;
            _0x885cx10 = _0x885cxcb > 0.5 ? _0x885cx69 / (2 - _0x885cxde - _0x885cxdf) : _0x885cx69 / (_0x885cxde + _0x885cxdf);
            switch (_0x885cxde) {
                case _0x885cx5e:
                    _0x885cx19 = (_0x885cxdb - _0x885cxdc) / _0x885cx69 + (_0x885cxdb < _0x885cxdc ? 6 : 0);
                    break;
                case _0x885cxdb:
                    _0x885cx19 = (_0x885cxdc - _0x885cx5e) / _0x885cx69 + 2;
                    break;
                case _0x885cxdc:
                    _0x885cx19 = (_0x885cx5e - _0x885cxdb) / _0x885cx69 + 4;
                    break
            };
            _0x885cx19 /= 6
        };
        return {
            h: _0x885cx19,
            s: _0x885cx10,
            l: _0x885cxcb
        }
    }

    function _0x885cxe0(_0x885cx19, _0x885cx10, _0x885cxcb) {
        var _0x885cx5e, _0x885cxdb, _0x885cxdc;
        _0x885cx19 = _0x885cx118(_0x885cx19, 360);
        _0x885cx10 = _0x885cx118(_0x885cx10, 100);
        _0x885cxcb = _0x885cx118(_0x885cxcb, 100);

        function _0x885cxe1(_0x885cxe2, _0x885cxe3, _0x885cxe4) {
            if (_0x885cxe4 < 0) {
                _0x885cxe4 += 1
            };
            if (_0x885cxe4 > 1) {
                _0x885cxe4 -= 1
            };
            if (_0x885cxe4 < 1 / 6) {
                return _0x885cxe2 + (_0x885cxe3 - _0x885cxe2) * 6 * _0x885cxe4
            };
            if (_0x885cxe4 < 1 / 2) {
                return _0x885cxe3
            };
            if (_0x885cxe4 < 2 / 3) {
                return _0x885cxe2 + (_0x885cxe3 - _0x885cxe2) * (2 / 3 - _0x885cxe4) * 6
            };
            return _0x885cxe2
        }
        if (_0x885cx10 === 0) {
            _0x885cx5e = _0x885cxdb = _0x885cxdc = _0x885cxcb
        } else {
            var _0x885cxe3 = _0x885cxcb < 0.5 ? _0x885cxcb * (1 + _0x885cx10) : _0x885cxcb + _0x885cx10 - _0x885cxcb * _0x885cx10;
            var _0x885cxe2 = 2 * _0x885cxcb - _0x885cxe3;
            _0x885cx5e = _0x885cxe1(_0x885cxe2, _0x885cxe3, _0x885cx19 + 1 / 3);
            _0x885cxdb = _0x885cxe1(_0x885cxe2, _0x885cxe3, _0x885cx19);
            _0x885cxdc = _0x885cxe1(_0x885cxe2, _0x885cxe3, _0x885cx19 - 1 / 3)
        };
        return {
            r: _0x885cx5e * 255,
            g: _0x885cxdb * 255,
            b: _0x885cxdc * 255
        }
    }

    function _0x885cxe5(_0x885cx5e, _0x885cxdb, _0x885cxdc) {
        _0x885cx5e = _0x885cx118(_0x885cx5e, 255);
        _0x885cxdb = _0x885cx118(_0x885cxdb, 255);
        _0x885cxdc = _0x885cx118(_0x885cxdc, 255);
        var _0x885cxde = _0x885cxbf(_0x885cx5e, _0x885cxdb, _0x885cxdc),
            _0x885cxdf = _0x885cxbe(_0x885cx5e, _0x885cxdb, _0x885cxdc);
        var _0x885cx19, _0x885cx10, _0x885cx67 = _0x885cxde;
        var _0x885cx69 = _0x885cxde - _0x885cxdf;
        _0x885cx10 = _0x885cxde === 0 ? 0 : _0x885cx69 / _0x885cxde;
        if (_0x885cxde == _0x885cxdf) {
            _0x885cx19 = 0
        } else {
            switch (_0x885cxde) {
                case _0x885cx5e:
                    _0x885cx19 = (_0x885cxdb - _0x885cxdc) / _0x885cx69 + (_0x885cxdb < _0x885cxdc ? 6 : 0);
                    break;
                case _0x885cxdb:
                    _0x885cx19 = (_0x885cxdc - _0x885cx5e) / _0x885cx69 + 2;
                    break;
                case _0x885cxdc:
                    _0x885cx19 = (_0x885cx5e - _0x885cxdb) / _0x885cx69 + 4;
                    break
            };
            _0x885cx19 /= 6
        };
        return {
            h: _0x885cx19,
            s: _0x885cx10,
            v: _0x885cx67
        }
    }

    function _0x885cxe6(_0x885cx19, _0x885cx10, _0x885cx67) {
        _0x885cx19 = _0x885cx118(_0x885cx19, 360) * 6;
        _0x885cx10 = _0x885cx118(_0x885cx10, 100);
        _0x885cx67 = _0x885cx118(_0x885cx67, 100);
        var _0x885cx79 = _0x885cxb9['floor'](_0x885cx19),
            _0x885cxe7 = _0x885cx19 - _0x885cx79,
            _0x885cxe2 = _0x885cx67 * (1 - _0x885cx10),
            _0x885cxe3 = _0x885cx67 * (1 - _0x885cxe7 * _0x885cx10),
            _0x885cxe4 = _0x885cx67 * (1 - (1 - _0x885cxe7) * _0x885cx10),
            _0x885cxe8 = _0x885cx79 % 6,
            _0x885cx5e = [_0x885cx67, _0x885cxe3, _0x885cxe2, _0x885cxe2, _0x885cxe4, _0x885cx67][_0x885cxe8],
            _0x885cxdb = [_0x885cxe4, _0x885cx67, _0x885cx67, _0x885cxe3, _0x885cxe2, _0x885cxe2][_0x885cxe8],
            _0x885cxdc = [_0x885cxe2, _0x885cxe2, _0x885cxe4, _0x885cx67, _0x885cx67, _0x885cxe3][_0x885cxe8];
        return {
            r: _0x885cx5e * 255,
            g: _0x885cxdb * 255,
            b: _0x885cxdc * 255
        }
    }

    function _0x885cxe9(_0x885cx5e, _0x885cxdb, _0x885cxdc, _0x885cxcc) {
        var _0x885cxea = [_0x885cx11e(_0x885cxbd(_0x885cx5e).toString(16)), _0x885cx11e(_0x885cxbd(_0x885cxdb).toString(16)), _0x885cx11e(_0x885cxbd(_0x885cxdc).toString(16))];
        if (_0x885cxcc && _0x885cxea[0]['charAt'](0) == _0x885cxea[0]['charAt'](1) && _0x885cxea[1]['charAt'](0) == _0x885cxea[1]['charAt'](1) && _0x885cxea[2]['charAt'](0) == _0x885cxea[2]['charAt'](1)) {
            return _0x885cxea[0]['charAt'](0) + _0x885cxea[1]['charAt'](0) + _0x885cxea[2]['charAt'](0)
        };
        return _0x885cxea['join']('')
    }

    function _0x885cxeb(_0x885cx5e, _0x885cxdb, _0x885cxdc, _0x885cx1d) {
        var _0x885cxea = [_0x885cx11e(_0x885cx121(_0x885cx1d)), _0x885cx11e(_0x885cxbd(_0x885cx5e).toString(16)), _0x885cx11e(_0x885cxbd(_0x885cxdb).toString(16)), _0x885cx11e(_0x885cxbd(_0x885cxdc).toString(16))];
        return _0x885cxea['join']('')
    }
    _0x885cxc1['equals'] = function(_0x885cxec, _0x885cxed) {
        if (!_0x885cxec || !_0x885cxed) {
            return false
        };
        return _0x885cxc1(_0x885cxec)['toRgbString']() == _0x885cxc1(_0x885cxed)['toRgbString']()
    };
    _0x885cxc1['random'] = function() {
        return _0x885cxc1['fromRatio']({
            r: _0x885cxc0(),
            g: _0x885cxc0(),
            b: _0x885cxc0()
        })
    };

    function _0x885cxee(_0x885cx64, _0x885cxef) {
        _0x885cxef = (_0x885cxef === 0) ? 0 : (_0x885cxef || 10);
        var _0x885cxca = _0x885cxc1(_0x885cx64)['toHsl']();
        _0x885cxca['s'] -= _0x885cxef / 100;
        _0x885cxca['s'] = _0x885cx11a(_0x885cxca['s']);
        return _0x885cxc1(_0x885cxca)
    }

    function _0x885cxf0(_0x885cx64, _0x885cxef) {
        _0x885cxef = (_0x885cxef === 0) ? 0 : (_0x885cxef || 10);
        var _0x885cxca = _0x885cxc1(_0x885cx64)['toHsl']();
        _0x885cxca['s'] += _0x885cxef / 100;
        _0x885cxca['s'] = _0x885cx11a(_0x885cxca['s']);
        return _0x885cxc1(_0x885cxca)
    }

    function _0x885cxf1(_0x885cx64) {
        return _0x885cxc1(_0x885cx64)['desaturate'](100)
    }

    function _0x885cxf2(_0x885cx64, _0x885cxef) {
        _0x885cxef = (_0x885cxef === 0) ? 0 : (_0x885cxef || 10);
        var _0x885cxca = _0x885cxc1(_0x885cx64)['toHsl']();
        _0x885cxca['l'] += _0x885cxef / 100;
        _0x885cxca['l'] = _0x885cx11a(_0x885cxca['l']);
        return _0x885cxc1(_0x885cxca)
    }

    function _0x885cxf3(_0x885cx64, _0x885cxef) {
        _0x885cxef = (_0x885cxef === 0) ? 0 : (_0x885cxef || 10);
        var _0x885cx36 = _0x885cxc1(_0x885cx64)['toRgb']();
        _0x885cx36['r'] = _0x885cxbf(0, _0x885cxbe(255, _0x885cx36['r'] - _0x885cxbd(255 * -(_0x885cxef / 100))));
        _0x885cx36['g'] = _0x885cxbf(0, _0x885cxbe(255, _0x885cx36['g'] - _0x885cxbd(255 * -(_0x885cxef / 100))));
        _0x885cx36['b'] = _0x885cxbf(0, _0x885cxbe(255, _0x885cx36['b'] - _0x885cxbd(255 * -(_0x885cxef / 100))));
        return _0x885cxc1(_0x885cx36)
    }

    function _0x885cxf4(_0x885cx64, _0x885cxef) {
        _0x885cxef = (_0x885cxef === 0) ? 0 : (_0x885cxef || 10);
        var _0x885cxca = _0x885cxc1(_0x885cx64)['toHsl']();
        _0x885cxca['l'] -= _0x885cxef / 100;
        _0x885cxca['l'] = _0x885cx11a(_0x885cxca['l']);
        return _0x885cxc1(_0x885cxca)
    }

    function _0x885cxf5(_0x885cx64, _0x885cxef) {
        var _0x885cxca = _0x885cxc1(_0x885cx64)['toHsl']();
        var _0x885cxf6 = (_0x885cxca['h'] + _0x885cxef) % 360;
        _0x885cxca['h'] = _0x885cxf6 < 0 ? 360 + _0x885cxf6 : _0x885cxf6;
        return _0x885cxc1(_0x885cxca)
    }

    function _0x885cxf7(_0x885cx64) {
        var _0x885cxca = _0x885cxc1(_0x885cx64)['toHsl']();
        _0x885cxca['h'] = (_0x885cxca['h'] + 180) % 360;
        return _0x885cxc1(_0x885cxca)
    }

    function _0x885cxf8(_0x885cx64) {
        var _0x885cxca = _0x885cxc1(_0x885cx64)['toHsl']();
        var _0x885cx19 = _0x885cxca['h'];
        return [_0x885cxc1(_0x885cx64), _0x885cxc1({
            h: (_0x885cx19 + 120) % 360,
            s: _0x885cxca['s'],
            l: _0x885cxca['l']
        }), _0x885cxc1({
            h: (_0x885cx19 + 240) % 360,
            s: _0x885cxca['s'],
            l: _0x885cxca['l']
        })]
    }

    function _0x885cxf9(_0x885cx64) {
        var _0x885cxca = _0x885cxc1(_0x885cx64)['toHsl']();
        var _0x885cx19 = _0x885cxca['h'];
        return [_0x885cxc1(_0x885cx64), _0x885cxc1({
            h: (_0x885cx19 + 90) % 360,
            s: _0x885cxca['s'],
            l: _0x885cxca['l']
        }), _0x885cxc1({
            h: (_0x885cx19 + 180) % 360,
            s: _0x885cxca['s'],
            l: _0x885cxca['l']
        }), _0x885cxc1({
            h: (_0x885cx19 + 270) % 360,
            s: _0x885cxca['s'],
            l: _0x885cxca['l']
        })]
    }

    function _0x885cxfa(_0x885cx64) {
        var _0x885cxca = _0x885cxc1(_0x885cx64)['toHsl']();
        var _0x885cx19 = _0x885cxca['h'];
        return [_0x885cxc1(_0x885cx64), _0x885cxc1({
            h: (_0x885cx19 + 72) % 360,
            s: _0x885cxca['s'],
            l: _0x885cxca['l']
        }), _0x885cxc1({
            h: (_0x885cx19 + 216) % 360,
            s: _0x885cxca['s'],
            l: _0x885cxca['l']
        })]
    }

    function _0x885cxfb(_0x885cx64, _0x885cxfc, _0x885cxfd) {
        _0x885cxfc = _0x885cxfc || 6;
        _0x885cxfd = _0x885cxfd || 30;
        var _0x885cxca = _0x885cxc1(_0x885cx64)['toHsl']();
        var _0x885cxfe = 360 / _0x885cxfd;
        var _0x885cxff = [_0x885cxc1(_0x885cx64)];
        for (_0x885cxca['h'] = ((_0x885cxca['h'] - (_0x885cxfe * _0x885cxfc >> 1)) + 720) % 360; --_0x885cxfc;) {
            _0x885cxca['h'] = (_0x885cxca['h'] + _0x885cxfe) % 360;
            _0x885cxff['push'](_0x885cxc1(_0x885cxca))
        };
        return _0x885cxff
    }

    function _0x885cx100(_0x885cx64, _0x885cxfc) {
        _0x885cxfc = _0x885cxfc || 6;
        var _0x885cxc9 = _0x885cxc1(_0x885cx64)['toHsv']();
        var _0x885cx19 = _0x885cxc9['h'],
            _0x885cx10 = _0x885cxc9['s'],
            _0x885cx67 = _0x885cxc9['v'];
        var _0x885cxff = [];
        var _0x885cx101 = 1 / _0x885cxfc;
        while (_0x885cxfc--) {
            _0x885cxff['push'](_0x885cxc1({
                h: _0x885cx19,
                s: _0x885cx10,
                v: _0x885cx67
            }));
            _0x885cx67 = (_0x885cx67 + _0x885cx101) % 1
        };
        return _0x885cxff
    }
    _0x885cxc1['mix'] = function(_0x885cxec, _0x885cxed, _0x885cxef) {
        _0x885cxef = (_0x885cxef === 0) ? 0 : (_0x885cxef || 50);
        var _0x885cx102 = _0x885cxc1(_0x885cxec)['toRgb']();
        var _0x885cx103 = _0x885cxc1(_0x885cxed)['toRgb']();
        var _0x885cxe2 = _0x885cxef / 100;
        var _0x885cx18 = _0x885cxe2 * 2 - 1;
        var _0x885cx1d = _0x885cx103['a'] - _0x885cx102['a'];
        var _0x885cx104;
        if (_0x885cx18 * _0x885cx1d == -1) {
            _0x885cx104 = _0x885cx18
        } else {
            _0x885cx104 = (_0x885cx18 + _0x885cx1d) / (1 + _0x885cx18 * _0x885cx1d)
        };
        _0x885cx104 = (_0x885cx104 + 1) / 2;
        var _0x885cx105 = 1 - _0x885cx104;
        var _0x885cx106 = {
            r: _0x885cx103['r'] * _0x885cx104 + _0x885cx102['r'] * _0x885cx105,
            g: _0x885cx103['g'] * _0x885cx104 + _0x885cx102['g'] * _0x885cx105,
            b: _0x885cx103['b'] * _0x885cx104 + _0x885cx102['b'] * _0x885cx105,
            a: _0x885cx103['a'] * _0x885cxe2 + _0x885cx102['a'] * (1 - _0x885cxe2)
        };
        return _0x885cxc1(_0x885cx106)
    };
    _0x885cxc1['readability'] = function(_0x885cxec, _0x885cxed) {
        var _0x885cx107 = _0x885cxc1(_0x885cxec);
        var _0x885cx108 = _0x885cxc1(_0x885cxed);
        return (_0x885cxb9['max'](_0x885cx107['getLuminance'](), _0x885cx108['getLuminance']()) + 0.05) / (_0x885cxb9['min'](_0x885cx107['getLuminance'](), _0x885cx108['getLuminance']()) + 0.05)
    };
    _0x885cxc1['isReadable'] = function(_0x885cxec, _0x885cxed, _0x885cx109) {
        var _0x885cx10a = _0x885cxc1['readability'](_0x885cxec, _0x885cxed);
        var _0x885cx10b, _0x885cx10c;
        _0x885cx10c = false;
        _0x885cx10b = _0x885cx12d(_0x885cx109);
        switch (_0x885cx10b['level'] + _0x885cx10b['size']) {
            case 'AAsmall':
                ;
            case 'AAAlarge':
                _0x885cx10c = _0x885cx10a >= 4.5;
                break;
            case 'AAlarge':
                _0x885cx10c = _0x885cx10a >= 3;
                break;
            case 'AAAsmall':
                _0x885cx10c = _0x885cx10a >= 7;
                break
        };
        return _0x885cx10c
    };
    _0x885cxc1['mostReadable'] = function(_0x885cx10d, _0x885cx10e, _0x885cxd6) {
        var _0x885cx10f = null;
        var _0x885cx110 = 0;
        var _0x885cx10a;
        var _0x885cx111, _0x885cx112, _0x885cx80;
        _0x885cxd6 = _0x885cxd6 || {};
        _0x885cx111 = _0x885cxd6['includeFallbackColors'];
        _0x885cx112 = _0x885cxd6['level'];
        _0x885cx80 = _0x885cxd6['size'];
        for (var _0x885cx79 = 0; _0x885cx79 < _0x885cx10e['length']; _0x885cx79++) {
            _0x885cx10a = _0x885cxc1['readability'](_0x885cx10d, _0x885cx10e[_0x885cx79]);
            if (_0x885cx10a > _0x885cx110) {
                _0x885cx110 = _0x885cx10a;
                _0x885cx10f = _0x885cxc1(_0x885cx10e[_0x885cx79])
            }
        };
        if (_0x885cxc1['isReadable'](_0x885cx10d, _0x885cx10f, {
                "\x6C\x65\x76\x65\x6C": _0x885cx112,
                "\x73\x69\x7A\x65": _0x885cx80
            }) || !_0x885cx111) {
            return _0x885cx10f
        } else {
            _0x885cxd6['includeFallbackColors'] = false;
            return _0x885cxc1['mostReadable'](_0x885cx10d, ['#fff', '#000'], _0x885cxd6)
        }
    };
    var _0x885cx113 = _0x885cxc1['names'] = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '0ff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000',
        blanchedalmond: 'ffebcd',
        blue: '00f',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        burntsienna: 'ea7e5d',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '0ff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkgrey: 'a9a9a9',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkslategrey: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dimgrey: '696969',
        dodgerblue: '1e90ff',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'f0f',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        grey: '808080',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgray: 'd3d3d3',
        lightgreen: '90ee90',
        lightgrey: 'd3d3d3',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslategray: '789',
        lightslategrey: '789',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '0f0',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'f0f',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370db',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'db7093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '663399',
        red: 'f00',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        slategrey: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        wheat: 'f5deb3',
        white: 'fff',
        whitesmoke: 'f5f5f5',
        yellow: 'ff0',
        yellowgreen: '9acd32'
    };
    var _0x885cx114 = _0x885cxc1['hexNames'] = _0x885cx115(_0x885cx113);

    function _0x885cx115(_0x885cx31) {
        var _0x885cx116 = {};
        for (var _0x885cx79 in _0x885cx31) {
            if (_0x885cx31['hasOwnProperty'](_0x885cx79)) {
                _0x885cx116[_0x885cx31[_0x885cx79]] = _0x885cx79
            }
        };
        return _0x885cx116
    }

    function _0x885cx117(_0x885cx1d) {
        _0x885cx1d = parseFloat(_0x885cx1d);
        if (isNaN(_0x885cx1d) || _0x885cx1d < 0 || _0x885cx1d > 1) {
            _0x885cx1d = 1
        };
        return _0x885cx1d
    }

    function _0x885cx118(_0x885cx4, _0x885cxde) {
        if (_0x885cx11c(_0x885cx4)) {
            _0x885cx4 = '100%'
        };
        var _0x885cx119 = _0x885cx11d(_0x885cx4);
        _0x885cx4 = _0x885cxbe(_0x885cxde, _0x885cxbf(0, parseFloat(_0x885cx4)));
        if (_0x885cx119) {
            _0x885cx4 = parseInt(_0x885cx4 * _0x885cxde, 10) / 100
        };
        if ((_0x885cxb9['abs'](_0x885cx4 - _0x885cxde) < 0.000001)) {
            return 1
        };
        return (_0x885cx4 % _0x885cxde) / parseFloat(_0x885cxde)
    }

    function _0x885cx11a(_0x885cx32) {
        return _0x885cxbe(1, _0x885cxbf(0, _0x885cx32))
    }

    function _0x885cx11b(_0x885cx32) {
        return parseInt(_0x885cx32, 16)
    }

    function _0x885cx11c(_0x885cx4) {
        return typeof _0x885cx4 == 'string' && _0x885cx4['indexOf']('.') != -1 && parseFloat(_0x885cx4) === 1
    }

    function _0x885cx11d(_0x885cx4) {
        return typeof _0x885cx4 === 'string' && _0x885cx4['indexOf']('%') != -1
    }

    function _0x885cx11e(_0x885cx11f) {
        return _0x885cx11f['length'] == 1 ? '0' + _0x885cx11f : '' + _0x885cx11f
    }

    function _0x885cx120(_0x885cx4) {
        if (_0x885cx4 <= 1) {
            _0x885cx4 = (_0x885cx4 * 100) + '%'
        };
        return _0x885cx4
    }

    function _0x885cx121(_0x885cx69) {
        return _0x885cxb9['round'](parseFloat(_0x885cx69) * 255).toString(16)
    }

    function _0x885cx122(_0x885cx19) {
        return (_0x885cx11b(_0x885cx19) / 255)
    }
    var _0x885cx123 = (function() {
        var _0x885cx124 = '[-\+]?\d+%?';
        var _0x885cx125 = '[-\+]?\d*\.\d+%?';
        var _0x885cx126 = '(?:' + _0x885cx125 + ')|(?:' + _0x885cx124 + ')';
        var _0x885cx127 = '[\s|\(]+(' + _0x885cx126 + ')[,|\s]+(' + _0x885cx126 + ')[,|\s]+(' + _0x885cx126 + ')\s*\)?';
        var _0x885cx128 = '[\s|\(]+(' + _0x885cx126 + ')[,|\s]+(' + _0x885cx126 + ')[,|\s]+(' + _0x885cx126 + ')[,|\s]+(' + _0x885cx126 + ')\s*\)?';
        return {
            CSS_UNIT: new RegExp(_0x885cx126),
            rgb: new RegExp('rgb' + _0x885cx127),
            rgba: new RegExp('rgba' + _0x885cx128),
            hsl: new RegExp('hsl' + _0x885cx127),
            hsla: new RegExp('hsla' + _0x885cx128),
            hsv: new RegExp('hsv' + _0x885cx127),
            hsva: new RegExp('hsva' + _0x885cx128),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        }
    })();

    function _0x885cx129(_0x885cx64) {
        return !!_0x885cx123['CSS_UNIT']['exec'](_0x885cx64)
    }

    function _0x885cx12a(_0x885cx64) {
        _0x885cx64 = _0x885cx64['replace'](_0x885cxba, '')['replace'](_0x885cxbb, '')['toLowerCase']();
        var _0x885cx12b = false;
        if (_0x885cx113[_0x885cx64]) {
            _0x885cx64 = _0x885cx113[_0x885cx64];
            _0x885cx12b = true
        } else {
            if (_0x885cx64 == 'transparent') {
                return {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                    format: 'name'
                }
            }
        };
        var _0x885cx12c;
        if ((_0x885cx12c = _0x885cx123['rgb']['exec'](_0x885cx64))) {
            return {
                r: _0x885cx12c[1],
                g: _0x885cx12c[2],
                b: _0x885cx12c[3]
            }
        };
        if ((_0x885cx12c = _0x885cx123['rgba']['exec'](_0x885cx64))) {
            return {
                r: _0x885cx12c[1],
                g: _0x885cx12c[2],
                b: _0x885cx12c[3],
                a: _0x885cx12c[4]
            }
        };
        if ((_0x885cx12c = _0x885cx123['hsl']['exec'](_0x885cx64))) {
            return {
                h: _0x885cx12c[1],
                s: _0x885cx12c[2],
                l: _0x885cx12c[3]
            }
        };
        if ((_0x885cx12c = _0x885cx123['hsla']['exec'](_0x885cx64))) {
            return {
                h: _0x885cx12c[1],
                s: _0x885cx12c[2],
                l: _0x885cx12c[3],
                a: _0x885cx12c[4]
            }
        };
        if ((_0x885cx12c = _0x885cx123['hsv']['exec'](_0x885cx64))) {
            return {
                h: _0x885cx12c[1],
                s: _0x885cx12c[2],
                v: _0x885cx12c[3]
            }
        };
        if ((_0x885cx12c = _0x885cx123['hsva']['exec'](_0x885cx64))) {
            return {
                h: _0x885cx12c[1],
                s: _0x885cx12c[2],
                v: _0x885cx12c[3],
                a: _0x885cx12c[4]
            }
        };
        if ((_0x885cx12c = _0x885cx123['hex8']['exec'](_0x885cx64))) {
            return {
                a: _0x885cx122(_0x885cx12c[1]),
                r: _0x885cx11b(_0x885cx12c[2]),
                g: _0x885cx11b(_0x885cx12c[3]),
                b: _0x885cx11b(_0x885cx12c[4]),
                format: _0x885cx12b ? 'name' : 'hex8'
            }
        };
        if ((_0x885cx12c = _0x885cx123['hex6']['exec'](_0x885cx64))) {
            return {
                r: _0x885cx11b(_0x885cx12c[1]),
                g: _0x885cx11b(_0x885cx12c[2]),
                b: _0x885cx11b(_0x885cx12c[3]),
                format: _0x885cx12b ? 'name' : 'hex'
            }
        };
        if ((_0x885cx12c = _0x885cx123['hex3']['exec'](_0x885cx64))) {
            return {
                r: _0x885cx11b(_0x885cx12c[1] + '' + _0x885cx12c[1]),
                g: _0x885cx11b(_0x885cx12c[2] + '' + _0x885cx12c[2]),
                b: _0x885cx11b(_0x885cx12c[3] + '' + _0x885cx12c[3]),
                format: _0x885cx12b ? 'name' : 'hex'
            }
        };
        return false
    }

    function _0x885cx12d(_0x885cx12e) {
        var _0x885cx112, _0x885cx80;
        _0x885cx12e = _0x885cx12e || {
            "\x6C\x65\x76\x65\x6C": 'AA',
            "\x73\x69\x7A\x65": 'small'
        };
        _0x885cx112 = (_0x885cx12e['level'] || 'AA')['toUpperCase']();
        _0x885cx80 = (_0x885cx12e['size'] || 'small')['toLowerCase']();
        if (_0x885cx112 !== 'AA' && _0x885cx112 !== 'AAA') {
            _0x885cx112 = 'AA'
        };
        if (_0x885cx80 !== 'small' && _0x885cx80 !== 'large') {
            _0x885cx80 = 'small'
        };
        return {
            "\x6C\x65\x76\x65\x6C": _0x885cx112,
            "\x73\x69\x7A\x65": _0x885cx80
        }
    }
    if (typeof module !== 'undefined' && module['exports']) {
        module['exports'] = _0x885cxc1
    } else {
        if (typeof define === 'function' && define['amd']) {
            define(function() {
                return _0x885cxc1
            })
        } else {
            window['tinycolor'] = _0x885cxc1
        }
    }
})(Math)