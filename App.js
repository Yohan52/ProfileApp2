import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [points, setPoints] = useState(0);

  const increasePoints = () => {
    setPoints(points + 1);
  }

    return (
        <View style={styles.container}>

            {/*Header Section*/}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Profile</Text>
            </View>

            {/*Profile Image */}
            <View style={styles.profileContainer}>
                <View style={styles.imageCircle}>
                    <Image
                        source={require('./assets/profile.png')}
                        style={styles.profileImage}
                    />

                    {/*Green Check*/}
                    <View style={styles.checkContainer}>
                        <Text style={styles.check}>✓</Text>
                    </View>    
                </View>
            </View>

            {/*Horizontal Line*/}
            <View style={styles.line} />

            {/*profile Details*/}
            <View style={styles.details}>

                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>Yohan Kavishka</Text>

                <Text style={[styles.label, styles.emailLabel]}>Email</Text>

                <View style={styles.emailRow}>
                    <Text style={styles.emailIcon}>✉️</Text>
                    <Text style={styles.value}>yohan@gmail.com</Text>
                </View>

                <Text style={[styles.label, styles.pointsLabel]}>Points</Text>

                <View style={styles.pointsRow}>
                    <Text style={styles.star}>★</Text>
                    <Text style={styles.points}>{points}</Text>
                </View>

            </View>

            {/*Plus Button*/}
            <TouchableOpacity
                style={styles.plusButton}
                onPress={increasePoints}
                activeOpacity={0.7}
            >
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    header: {
        height: 60,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },

    headerTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    profileContainer: {
        height: 125,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageCircle: {
        width: 105,
        height: 105,
        borderRadius: 55,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },

    profileImage: {
        width: 95,
        height: 95,
        borderRadius: 50,
        resizeMode: 'cover',
    },

    checkContainer: {
        position: 'absolute',
        right: 7,
        bottom: 6,
        borderRadius: 20,
    },

    check: {
        color: '#00ee00',
        fontSize: 50,
        fontWeight: 'bold',
        lineHeight: 35,
    },

    line: {
        height: 1.5,
        backgroundColor: '#222222',
        marginHorizontal: 30,
        marginTop: 0,
    },
    
    details: {
        marginHorizontal: 30,
        marginTop: 13,
        
    },

    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#111111',
        marginBottom: 6,
    },

    value: {
        fontSize: 14,
        color: '#333333',
        flex: 1,
    },

    emailLabel: {
        marginTop: 22,
        marginBottom: 6,
    },

    emailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },

    emailIcon: {
        fontSize: 17,
        marginRight: 8,
    },

    pointsLabel: {
        marginTop: 22,
        marginBottom: 6,
    },

    pointsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    star: {
        fontSize: 18,
        color: '#000000',
        marginRight: 8,
    },

    points: {
        fontSize: 14,
        color: '#333333',
    },

    plusButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
    },

    plus: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: '300',
        marginTop: -2,
    },
});
