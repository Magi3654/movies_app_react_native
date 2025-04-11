// StarRating.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Make sure to install this package

interface StarRatingProps {
    rating: number; // The rating should be a number
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const totalStars = 5; 
    const filledStars = Math.min(Math.max(Math.round(rating / 2), 0), totalStars);

    return (
        <View style={styles.container}>
            {[...Array(totalStars)].map((_, index) => (
                <MaterialIcons
                    key={index}
                    name={index < filledStars ? 'star' : 'star-border'}
                    size={15}
                    color="#FFD700" // Gold color for stars
                />
            ))}
            <Text style={styles.ratingText}>{rating.toFixed(1)}</Text> {/* Display rating with one decimal place */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        color: '#e0e0e0',
        marginLeft: 5,
        fontSize: 10,
    },
});

export default StarRating;