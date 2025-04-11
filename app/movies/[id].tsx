import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Result } from '../interfaces/tmbdMovie'; 

const MovieDetails: React.FC<Result> = () => {
    const { title, overview, release_date, poster_path } = useLocalSearchParams();
    console.log({ title, overview, release_date, poster_path });

    const imagePath = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/500x300';

    return (
        <ScrollView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={1}>{title || 'Unknown Title'}</Text>
                <Image source={{ uri: imagePath }} style={styles.image} />
                <Text style={styles.releaseDate}>Release Date: {release_date || 'Unknown Release Date'}</Text>
                <Text style={styles.overview}>Overview: {overview || 'No overview available.'}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#030014', // Dark background for contrast
    },
    content: {
        padding: 20, // Padding around the content
    },
    image: {
        width: '100%', // Full width of the image
        height: 500, // Increased height for a more impactful image
        borderRadius: 15, // Rounded corners for the image
        marginBottom: 20, // Space below the image
        borderWidth: 2, // Optional: border for better definition
        borderColor: '#fff', // Optional: white border color
    },
    title: {
        color: '#fff', // White color for the title
        fontSize: 36, // Adjusted font size for better emphasis
        fontWeight: 'bold',
        marginTop: 10, // Space above the title
        textAlign: 'center', // Centered title
    },
    releaseDate: {
        fontSize: 18, // Font size for release date
        color: '#e0e0e0', // Slightly lighter color for release date
        marginTop: 10, // Space above the release date
        textAlign: 'center', // Centered release date
    },
    overview: {
        fontSize: 18, // Adjusted font size for better readability
        color: '#e0e0e0', // Slightly lighter color for overview
        lineHeight: 24, // Increased line height for better readability
        marginTop: 10, // Space above the overview
        textAlign: 'justify', // Justified text for a cleaner look
    },
});

export default MovieDetails;