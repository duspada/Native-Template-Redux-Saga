import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AlbumsActions } from 'store/ducks';

import {
  View,
  StatusBar,
} from 'react-native';

import styles from './styles';

class Main extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  x: state.albums,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AlbumsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
