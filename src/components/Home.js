import React, { Component } from 'react';
import {
    View, FlatList, Text, ImageBackground, TouchableWithoutFeedback, Modal
} from 'react-native'
import { Card, Container, Header, Icon, Input, Item, Row } from 'native-base';


import Styles, { buttonColor, hp, lor, primaryColor, rol, secondaryColor, wp } from './Assets/style/Styles'

import styles from './Assets/style/Styles';
import { Actions } from 'react-native-router-flux';

import { coverPhotos, categories, miniuts, daily, cui } from '../Data.json'
import Slider from 'rn-range-slider';





export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            min: -1, dail: -1, cu: -1, low: 30, hei: 600
        }
    }

    componentDidMount() {

        lor(this)
    }
    componentWillUnmount() {
        rol()
    }
    _renderItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback onPress={() => Actions.push('product', { id: item.id })}>
                <Card style={[styles.coverPhotoCard, { marginLeft: item.id == 1 ? wp(5) : 0 }]}>
                    <ImageBackground source={{ uri: item.photo[0] }} resizeMode='cover' style={styles.coverCardImage}>
                        <Row style={styles.coverCardRow}>
                            <View style={styles.coverCardView}>
                                <Icon type='EvilIcons' name='heart' style={{ color: secondaryColor }} />
                                <Text style={styles.normalText}>
                                    {item.fav}
                                </Text>
                            </View>
                            <View style={styles.coverCardView}>
                                <Icon type='Entypo' name='box' style={{ color: secondaryColor, fontSize: wp(4.5), marginRight: wp(2) }} />
                                <Text style={styles.boldText}>
                                    {item.pantry}
                                </Text>
                                <Text style={styles.normalText}>
                                    {'/9'}
                                </Text>
                            </View>
                        </Row>
                        <Text style={styles.coverCardDetails}>
                            {item.details}
                        </Text>
                    </ImageBackground>

                </Card >
            </TouchableWithoutFeedback>


        );
    };
    renderCategory = ({ item }) => {
        let click
        if (item.id == 0) {
            click = () => this.setState({ visible: true })
        }
        return (
            <TouchableWithoutFeedback onPress={click}>
                <View style={[styles.categoryView, { marginLeft: item.id == 0 ? wp(5) : 0 }]}>
                    <Text style={styles.normalText}>
                        {item.id > 0 ? item.title :
                            <Icon name='filter' type='AntDesign' style={{ color: secondaryColor, fontSize: wp(5) }} />
                        }
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    renderCu = ({ item, index }) => {

        const { cu } = this.state
        return (
            <TouchableWithoutFeedback key={index} onPress={() => this.setState({ cu: index })}>
                <View style={[styles.optionButton, { backgroundColor: index == cu ? '#808080' : '#fff', marginRight: wp(2) }]}>
                    <Text style={[styles.normalText, { fontSize: wp(3) }, index != cu ? { color: '#808080' } : '']}>
                        {item}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    render() {
        const { visible, min, dai, low, hei } = this.state
        return (
            <Container style={{ backgroundColor: primaryColor }}>
                <Header searchBar transparent style={{ height: hp(17) }}>
                    <Item rounded style={{ backgroundColor: secondaryColor }}>
                        <Icon name="search" type='EvilIcons' style={{ fontSize: wp(6) }} />
                        <Input placeholder="Search" />

                    </Item>

                </Header>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={coverPhotos}
                    horizontal
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                    style={{ marginBottom: hp(2), height: hp(63) }}
                />
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    horizontal
                    renderItem={this.renderCategory}
                    keyExtractor={(item) => item.id}
                />
                <Modal
                    visible={visible}
                >
                    <View style={styles.filterModal}>
                        <TouchableWithoutFeedback onPress={() => this.setState({ visible: false })}>
                            <View style={styles.closeModal} />

                        </TouchableWithoutFeedback>
                        <Card style={styles.filterCard}>
                            <Row style={styles.filterHeader}>
                                <Text style={[styles.boldText, { color: '#333333', fontSize: wp(6) }]}>
                                    {'Filters'}
                                </Text>
                                <View style={styles.filterButtonRow}>
                                    <TouchableWithoutFeedback onPress={() => this.setState({
                                        dai: -1, cu: -1, min: -1,
                                        low: 30, hei: 600
                                    })}>
                                        <Text style={[styles.normalText, { color: '#808080' }]}>
                                            {'Reset'}
                                        </Text>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={() => this.setState({ visible: false })}>
                                        <Text style={[styles.boldText, { color: '#808080' }]}>
                                            {'Go!'}
                                        </Text>
                                    </TouchableWithoutFeedback>

                                </View>

                            </Row>
                            <View style={styles.filterTitleRow}>
                                <Text style={[styles.boldText, { color: '#808080' }]}>
                                    {'Cooking Time'}
                                </Text>
                                <Text style={[styles.normalText, { color: '#808080' }]}>
                                    {'min'}
                                </Text>
                            </View>
                            <View style={styles.optionsRow}>
                                {miniuts.map((item, index) => (
                                    <TouchableWithoutFeedback key={index} onPress={() => this.setState({ min: index })}>
                                        <View style={[styles.optionButton, { backgroundColor: index == min ? '#808080' : '#fff' }]}>
                                            <Text style={[styles.normalText, { fontSize: wp(3) }, index != min ? { color: '#808080' } : '']}>
                                                {item}
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                ))}
                            </View>
                            <View style={styles.filterTitleRow}>
                                <Text style={[styles.boldText, { color: '#808080' }]}>
                                    {'Daily regimen'}
                                </Text>

                            </View>
                            <View style={styles.optionsRow}>
                                {daily.map((item, index) => (
                                    <TouchableWithoutFeedback key={index} onPress={() => this.setState({ dai: index })}>
                                        <View style={[styles.optionButton, { backgroundColor: index == dai ? '#808080' : '#fff' }]}>
                                            <Text style={[styles.normalText, { fontSize: wp(3) }, index != dai ? { color: '#808080' } : '']}>
                                                {item}
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                ))}
                            </View>
                            <View style={styles.filterTitleRow}>
                                <Text style={[styles.boldText, { color: '#808080' }]}>
                                    {'Calorific Value'}
                                </Text>
                                <View style={styles.rangeTitleRow}>
                                    <View style={styles.caloriView}>
                                        <Text style={styles.normalText}>
                                            {low}
                                        </Text>
                                    </View>
                                    <View style={styles.caloriView}>
                                        <Text style={styles.normalText}>
                                            {hei}
                                        </Text>
                                    </View>
                                </View>

                            </View>
                            <View style={styles.rangRow}>
                                <Slider
                                    style={styles.slider}
                                    min={30}
                                    max={600}
                                    step={10}
                                    floatingLabel
                                    renderThumb={() => <View style={styles.thumb} />}
                                    renderRail={() => <View style={styles.rail} />}
                                    renderRailSelected={() => <View style={[styles.rail, { backgroundColor: buttonColor, }]} />}
                                    onValueChanged={(low, hei) => this.setState({ low, hei })}
                                />
                                <View style={styles.randeDetailsRow}>
                                    <Text style={[styles.normalText, { color: '#808080', fontSize: wp(3) }]}>
                                        {'30 kcal'}
                                    </Text>
                                    <Text style={[styles.normalText, { color: '#808080', fontSize: wp(3) }]}>
                                        {'600 kcal'}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.filterTitleRow}>
                                <Text style={[styles.boldText, { color: '#808080' }]}>
                                    {'Cuisine'}
                                </Text>

                            </View>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={cui}
                                horizontal
                                renderItem={this.renderCu}
                                style={{ marginLeft: wp(5) }}
                                keyExtractor={(item) => item.toString()}
                            />

                        </Card>
                    </View>
                </Modal>
            </Container>
        );
    }
}

