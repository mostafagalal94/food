'use strict';
import { StyleSheet } from 'react-native'

import {
    widthPercentageToDP, heightPercentageToDP, listenOrientationChange,
    removeOrientationListener
} from 'react-native-responsive-screen'
export const wp = widthPercentageToDP
export const hp = heightPercentageToDP
export const rol = removeOrientationListener
export const lor = listenOrientationChange
export const moderateScale = (size, factor = 0.5) =>
    size + (wp(size) - size) * factor;
export const primaryColor = '#f2f2f2';
export const secondaryColor = '#fff';
export const buttonColor = '#00b3b3';

const styles = StyleSheet.create({
    boldText: {
        color: secondaryColor,
        fontWeight: 'bold',
        fontSize: wp(4.5)
    },
    normalText: {
        color: secondaryColor,
        fontSize: wp(4)
    },
    coverPhotoCard: {
        marginRight: wp(5),
        width: wp(70),
        borderRadius: wp(5),
        overflow: 'hidden'
    },
    coverCardImage: {
        width: wp(70),
        height: hp(65),
        borderRadius: wp(5),
        resizeMode: 'cover',
        paddingVertical: hp(2)
    },
    coverCardRow: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: hp(5),
        width: wp(62),
        alignSelf: 'center'
    },
    coverCardView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    coverCardDetails: {
        color: secondaryColor,
        fontWeight: 'bold',
        fontSize: wp(6),
        width: wp(45),
        bottom: hp(2),
        position: 'absolute',
        left: wp(4)
    },
    categoryView: {
        borderRadius: wp(2),
        paddingHorizontal: wp(3),
        height: wp(8),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: buttonColor,
        marginRight: wp(2)
    },
    plusAndMinusButt: {
        width: wp(7), height: wp(7), borderRadius: wp(1),
        backgroundColor: buttonColor, alignItems: 'center', justifyContent: 'center',

    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "powderblue"
    },
    headerRow: {
        width: wp(90),
        alignSelf: 'center',
        position: 'absolute',
        top: hp(3),
        alignItems: 'center',
        height: hp(8),
        zIndex: 99,
        // backgroundColor: 'red',
        justifyContent: 'space-between'
    },
    iconView: {
        width: wp(5),
        justifyContent: 'center'
    },
    faView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(27),
        justifyContent: 'space-between'
    },
    titleView: {
        alignItems: 'center',
        bottom: hp(2),
        position: 'absolute',
        alignSelf: 'center',
        width: wp(90),
        justifyContent: 'space-between'
    },
    quantityView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(20),
        justifyContent: 'space-between'
    },
    button: {
        width: wp(90),
        alignSelf: 'center',
        height: hp(7),
        alignItems: 'center',
        borderRadius: wp(1),
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: buttonColor,
        elevation: 5,
        marginVertical: hp(3)
    },
    svgViewContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    svgDetailsView: {
        width: wp(20),
        justifyContent: 'center',
        alignItems: 'center',
        height: wp(20)
    },
    modalView: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: wp(100),
        height: hp(100),
        opacity: .9,
        position: 'absolute'
    },
    closeModal: {
        height: hp(30),
        width: wp(100)
    },
    caloriView: {
        width: wp(10), height: wp(10), borderRadius: wp(1),
        backgroundColor: buttonColor, alignItems: 'center', justifyContent: 'center',

    },
    filterModal: {
        width: wp(100),
        height: hp(100),

        position: 'absolute',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',

    },
    filterCard: {
        width: wp(100),
        borderTopRightRadius: wp(5),
        borderTopLeftRadius: wp(5),
        height: hp(80)
    },
    filterHeader: {
        width: wp(100),
        paddingHorizontal: wp(5),
        alignItems: 'center',
        backgroundColor: primaryColor,
        height: hp(10),
        borderTopRightRadius: wp(5),
        borderTopLeftRadius: wp(5),
        justifyContent: 'space-between',
        elevation: 4
    },
    filterButtonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp(22)
    },
    filterTitleRow: {
        alignItems: 'center',
        marginTop: hp(5),
        width: wp(90),
        alignSelf: 'center',
        marginTop: hp(3.5),
        marginBottom: hp(2),
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    optionsRow: {
        alignItems: 'center',
        width: wp(90),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    optionButton: {
        width: wp(20),
        height: hp(5),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        borderRadius: wp(3)
    },
    rangeTitleRow: {
        flexDirection: 'row',
        width: wp(23),
        justifyContent: 'space-between'
    },
    rangRow: {
        width: wp(90),
        alignSelf: 'center',
    },
    thumb: {
        width: moderateScale(10),
        height: moderateScale(10),
        borderRadius: moderateScale(10),
        borderWidth: wp(.6),
        borderColor: '#808080',
        backgroundColor: '#ffffff',
    },
    randeDetailsRow: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
});
export default styles;