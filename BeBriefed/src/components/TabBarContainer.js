import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import Tabs from 'react-native-tabs';

const TabBarContainer = (props) => (
  <Tabs>
    <Text>Web</Text>
    <Text>Database</Text>
    <Text>Mail</Text>
  </Tabs>
);

// TabBarContainer.propTypes = {
// 	isUp: PropTypes.bool.isRequired,
// };

const styles = StyleSheet.create({

});

export default TabBarContainer;
