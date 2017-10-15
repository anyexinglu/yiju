import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import {
    Container, Header, Content, Card, CardItem, Thumbnail, List, ListItem, 
    Text, Button, Left, Body, Right, Grid, Row
} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import timeUtil from '../../utils/timeUtil';
import store from '../../utils/simpleStore';

// Update the object stored under the key 'album'. We will add a new property of 'albumName' to this object.
store.update('album', {
	albumName: 'Blurry Face'
})

// Get updated object
store.get('album')
.then((res) =>
	console.log(res, res.albumName) // 'Blurry Face'
)

const win = Dimensions.get('window');
// 每天一条，只能修改，不能多条？
const listData = [
    {
        key: 1,
        text: '你能看到几个人？',
        images: ['../../images/11.jpg'],
        time: '2017-10-06T05:15:00Z',
        mood: 'happy'
    },
    {
        key: 2,
        text: '年华，已是最美，可惜，未见你',
        images: ['../../images/66.jpg'],
        time: '2017-10-04T08:50:00Z',
        mood: 'neutral'
    },
    {
        key: 3,
        text: '成为利剑，进而成为使利剑之人！',
        images: ['../../images/55.png'],
        time: '2017-10-03T01:20:00Z',
        mood: 'sad'
    }
];

export default class DiaryList extends Component {
    state = {
        btnText: 'click me'
    }

    openUpload = () => {
        console.log('ImagePicker...', ImagePicker, ImagePicker.openPicker)
        if (ImagePicker) {
            this.setState({
                btnText: 'Click Me! ssdsd'
            });
            ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true
            }).then(image => {
                console.log(image);
            });
        }
    }

    render() {
        return (
            <Container>
              <Header />
              <Content>
                <Button onPress={this.openUpload}>
                  <Text>{this.state.btnText}</Text>
                </Button>
                <List dataArray={listData} renderRow={item => {
                    return (
                        <Card>
                            <CardItem>
                                <Left>
                                    <VectorIcon name={`emoticon-${item.mood}`} style={{fontSize: 50, color: '#aaa'}}/>
                                </Left>
                                <Right>
                                    <Text note>{timeUtil.toDate(item.time)}</Text>
                                </Right>
                            </CardItem>
                            <CardItem style={{paddingLeft: 10}}>
                                <Body>
                                    <Image source={require('./12.png')} style={styles.image}/>
                                    <Text>{item.text}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    )
                }}>
                </List>
              </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  image: {
      flex: 1,
      width: win.width - 20,
      height: 200,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});

// AppRegistry.registerComponent('DiaryList', () => List);
