/**
 * @content 场景视图UI组件
 * @author fangqi 2021-12-09 
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { View, requireNativeComponent, StyleSheet } from 'react-native';
import SceneView from '../geoscene/SceneView';

class MGSceneView extends Component {
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
    this.sceneView = new SceneView();
    this.sceneView.ObjId = event.nativeEvent.sceneViewId;
    this.props.onGetInstance(this.sceneView);
  }

  render() {
    return (
      <View style={styles.views}>
        <RNSceneView returnId={true} {...this.props} onChange={this._onChange} />
      </View>
    );
  }
}

var RNSceneView = requireNativeComponent('SceneViewManager', MGSceneView, {
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

export default MGSceneView;
