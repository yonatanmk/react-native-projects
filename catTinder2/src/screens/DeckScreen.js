import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Card, Button } from 'react-native-elements';

import Deck from '../components/Deck';

class DeckScreen extends Component {

  renderCard = (pet) => {
    let images = pet.media.photos.photo.filter((photo) => { return photo['@size'] === "x" });
    console.log(images[0]['$t']);
    return (
      <Card
        key={pet.id['$t']}
        title={pet.name['$t']}
        image={{ uri: images[0]['$t'] }}
      >
      </Card>
    );
    // return (
    //   <View key={pet.id['$t']}>
    //     <Text>{pet.name['$t']}</Text>
    //     <Image style={height: 30, width: 30} source={images[0]['$t']}/>
    //   </View>
    // )
  }

  render() {
    if (!this.props.pets) {
      return <View />
    }
    return (
      <Deck
        data={this.props.pets}
        renderCard={this.renderCard}
      />
    );
  }
}

// data={DATA}
// renderCard={this.renderCard}
// renderNoMoreCards={this.renderNoMoreCards}
// onSwipeRight={ pet => console.log(`${pet.text} was swiped right`) }
// onSwipeLeft={ pet => console.log(`${pet.text} was swiped left`) }

const mapStateToProps = (state) => {
  return {
    pets: state.pets
  };
};

export default connect(mapStateToProps)(DeckScreen);
