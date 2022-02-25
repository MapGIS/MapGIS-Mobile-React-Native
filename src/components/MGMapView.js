/**
 * @content 地图视图UI组件
 * @author fangqi 2021-7-14 
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { View, requireNativeComponent, StyleSheet } from 'react-native';
import MapView from '../geomapview/MapView';

class MGMapView extends Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
  }

  static propTypes = {
    ...View.propTypes,
    onGetInstance: PropTypes.func,
    returnId: PropTypes.bool,
  };

  _onChange(event) {
    this.mapView = new MapView();
    this.mapView.ObjId = event.nativeEvent.mapViewId;
    this.props.onGetInstance(this.mapView);
  }

  render() {
    return (
      <View style={styles.views}>
        <RnMapView returnId={true} {...this.props} onChange={this._onChange} />
      </View>
    );
  }
}

var RnMapView = requireNativeComponent('MapviewGetInstance', MGMapView, {
  nativeOnly: {
    returnId: true,
    onChange: true,
  },
});

var styles = StyleSheet.create({
  views: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ffbcbc',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
  },
  pic: {
    position: 'absolute',
    top: -100,
    left: -100,
  },
});

export default MGMapView;
