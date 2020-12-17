

import { Container, Content, Grid, Icon, Row, Thumbnail, View, Col } from 'native-base';
import React, { Component } from 'react';
import { Share, Text, TouchableNativeFeedback, Animated, TouchableWithoutFeedback } from "react-native";
import Svg, { Circle } from 'react-native-svg'
import { coverPhotos } from '../Data.json'
import styles, { hp, primaryColor, secondaryColor, wp, lor, rol, buttonColor } from './Assets/style/Styles';
import Swiper from 'react-native-swiper'
import { Actions } from 'react-native-router-flux';
import YouTube from 'react-native-youtube';




export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: null, quantity: 1,
            yModalPosition: new Animated.Value(hp(100))
        }
    }
    startModal = () => {
        const { yModalPosition } = this.state
        Animated.spring(yModalPosition, {
            toValue: 0,
            friction: 16,
            useNativeDriver: true
        }).start()
    }
    closetModal = () => {
        const { yModalPosition } = this.state
        Animated.spring(yModalPosition, {
            toValue: hp(100),
            friction: 16,
            useNativeDriver: true
        }).start()
    }
    componentDidMount() {

        const product = coverPhotos.filter((item) => item.id == this.props.id)[0]
        this.setState({ product })
        lor(this)
    }
    componentWillUnmount() {
        rol()
    }
    _plusOne() {
        let { quantity } = this.state;

        this.setState({ quantity: Number(quantity) + 1 })
    }

    _minusOne() {
        let { quantity } = this.state;
        if (quantity <= 1) {
            return null
        } else {
            this.setState({ quantity: quantity - 1 })
        }

    }
    onShare = async () => {
        const { product } = this.state
        try {
            const result = await Share.share({
                message:
                    product.details
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    render() {
        const { product, quantity } = this.state
        return (
            <Container style={{ backgroundColor: primaryColor }}>
                {product ? <Row style={styles.headerRow}>
                    <TouchableNativeFeedback onPress={() => Actions.pop()}>
                        <View style={styles.iconView}>
                            <Icon name='arrow-left' type='SimpleLineIcons' style={{ color: '#fff', fontSize: wp(6) }} />
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.faView}>
                        <View style={styles.coverCardView}>
                            <Icon type='EvilIcons' name='heart' style={{ color: secondaryColor }} />
                            <Text style={styles.normalText}>
                                {product.fav}
                            </Text>
                        </View>
                        <TouchableNativeFeedback onPress={() => this.onShare()}>
                            <View style={styles.iconView}>
                                <Icon name='sharealt' type='AntDesign' style={{ color: '#fff', fontSize: wp(5) }} />
                            </View>
                        </TouchableNativeFeedback>

                        <View style={styles.iconView}>
                            <Icon name='eye-with-line' type='Entypo' style={{ color: '#fff', fontSize: wp(5) }} />
                        </View>

                    </View>
                </Row> : null}

                {
                    product ?
                        <Content>


                            <View style={{ height: hp(45) }}>
                                <Swiper autoplay={true} showsPagination={false} >
                                    {product.photo && product.photo.map((photo, index) => {
                                        return (
                                            <Thumbnail key={index} source={{ uri: photo }}
                                                style={{ width: wp(100), height: hp(45) }} square />
                                        );
                                    })}
                                </Swiper>
                                <Row style={styles.titleView}>
                                    <Text style={[styles.boldText, { width: wp(45) }]}>
                                        {product.details}
                                    </Text>
                                    <View style={styles.coverCardView}>
                                        <Icon type='Entypo' name='box' style={{ color: secondaryColor, fontSize: wp(4.5), marginRight: wp(2) }} />
                                        <Text style={styles.boldText}>
                                            {product.pantry}
                                        </Text>
                                        <Text style={styles.normalText}>
                                            {'/9'}
                                        </Text>
                                    </View>
                                </Row>

                            </View>


                            <Grid style={{ width: wp(90), alignSelf: 'center', marginTop: hp(3) }}>
                                <Row style={{ alignItems: 'center' }}>
                                    {product.tags.map((item, index) => (
                                        <TouchableNativeFeedback key={index}>
                                            <View style={styles.categoryView}>
                                                <Text style={styles.normalText}>
                                                    {item}
                                                </Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    ))}
                                </Row>
                                <Row style={{ alignItems: 'center', marginTop: hp(2) }}>
                                    <Col>
                                        <Text style={[styles.boldText, { color: '#000', marginBottom: hp(1) }]}>
                                            {'Serving'}
                                        </Text>
                                        <View style={styles.quantityView}>

                                            <TouchableNativeFeedback onPress={() => this._plusOne()}>
                                                <View style={styles.plusAndMinusButt}>
                                                    <Icon name="plus" type="Entypo" style={{ fontSize: wp(5), color: '#fff' }} />
                                                </View>
                                            </TouchableNativeFeedback>

                                            <Text style={[styles.normalText, { color: '#000' }]}>{quantity}</Text>

                                            <TouchableNativeFeedback onPress={() => this._minusOne()}>
                                                <View style={styles.plusAndMinusButt}>
                                                    <Icon name="minus" type="Entypo" style={{ fontSize: wp(5), color: '#fff' }} />
                                                </View>
                                            </TouchableNativeFeedback>
                                        </View>
                                    </Col>
                                    <Col>
                                        <Text style={[styles.boldText, { color: '#000', marginBottom: hp(1) }]}>
                                            {'Cooking Time'}
                                        </Text>
                                        <Text style={[styles.normalText, { color: '#000', marginBottom: hp(1) }]}>
                                            {product.cook}
                                        </Text>
                                    </Col>
                                </Row>
                                <TouchableNativeFeedback onPress={() => this.startModal()}>
                                    <View style={styles.button}>
                                        <Text style={styles.normalText}>
                                            {'Start Cooking'}
                                        </Text>
                                    </View>
                                </TouchableNativeFeedback>

                                <Text style={[styles.boldText, { color: '#000', marginBottom: hp(3) }]}>
                                    {'Nutrition Information per Serving'}
                                </Text>
                                <Row style={styles.svgViewContainer}>
                                    {product.extra && product.extra.map((item, index) => (
                                        <Svg
                                            key={index}
                                            height={wp(22)} width={wp(22)} >
                                            <Circle
                                                fill={secondaryColor}
                                                cx={wp(10)}
                                                cy={wp(10)}
                                                r={wp(10)}
                                                strokeDasharray={[wp(100 - item.perc), wp(item.perc)]}
                                                stroke={buttonColor}
                                                strokeWidth={wp(.4)}
                                            />
                                            <View style={styles.svgDetailsView}>
                                                <Text style={[styles.normalText, { color: buttonColor }]}>
                                                    {item.name}
                                                </Text>
                                                <Text style={[styles.boldText, { color: buttonColor }]}>
                                                    {item.total}
                                                </Text>
                                            </View>
                                        </Svg>
                                    ))}


                                </Row>

                            </Grid>

                        </Content>
                        : null
                }
                <Animated.View style={[styles.modalView, {
                    transform: [{ translateY: this.state.yModalPosition }],
                }]}>
                    <TouchableWithoutFeedback onPress={() => this.closetModal()}>
                        <View style={styles.closeModal} />

                    </TouchableWithoutFeedback>

                    <YouTube
                        videoId="KVZ-P-ZI6W4" // The YouTube video ID
                        apiKey="AIzaSyDTK_667VpINZtxkJrmNy_2mceIUNw7A7c"
                        //play // control playback of video with true/false
                        //fullscreen // control whether the video should play in fullscreen or inline
                        loop // control whether the video should loop when ended
                        onReady={e => this.setState({ isReady: true })}
                        onChangeState={e => this.setState({ status: e.state })}
                        onChangeQuality={e => this.setState({ quality: e.quality })}
                        onError={e => this.setState({ error: e.error })}
                        style={{ alignSelf: 'stretch', height: hp(40) }}
                    />
                    <TouchableWithoutFeedback onPress={() => this.closetModal()}>
                        <View style={styles.closeModal} />

                    </TouchableWithoutFeedback>
                </Animated.View>

            </Container >
        )
    }
}