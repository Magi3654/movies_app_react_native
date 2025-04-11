import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Result } from '../interfaces/tmbdMovie'; 
import { Link } from 'expo-router';
import StarRating from '../components/StarsRate'; 

const MovieCard: React.FC<Result> = ({ id, poster_path, title, vote_average, release_date, overview }) => {
    const imagePath = `https://image.tmdb.org/t/p/w500${poster_path}`;
    
    // Ensure vote_average is a number
    const rating = typeof vote_average === 'number' ? vote_average : parseFloat(vote_average || '0');
    console.log(rating); 
    return (
        <Link 
            href={{ 
                pathname: `/movies/[id]`, 
                params: { 
                    id, 
                    title, 
                    overview, 
                    poster_path, 
                    vote_average 
                } 
            }}
            asChild
        >
            <TouchableOpacity style={styles.card}>
                <Image source={{ uri: imagePath }} style={styles.image} />
                <Text style={styles.popularity}>ID: {id || 'Unknown ID'}</Text>
                <Text style={styles.title} numberOfLines={1}>{title || 'Unknown Title'}</Text>
                <StarRating rating={rating} /> 
                <Text style={styles.releaseDate}>Release Date: {release_date ? new Date(release_date).toLocaleDateString() : 'N/A'}</Text>
                <Text className='text-5xl'>hola</Text>
            </TouchableOpacity>
        </Link>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
    },
    image: {
        width: '100%', // Full width of the card
        height: 200, // Fixed height for the image
        borderRadius: 15, // Rounded corners for the image
    },
    placeholderImage: {
        width: '100%',
        height: 200,
        color: '#fff', // Placeholder color
        borderRadius: 8,
    },
    title: {
        color: '#fff', // White color for the title
        fontSize: 18, // Increased font size for better readability
        fontWeight: 'bold',
        marginTop: 5, // Space above the title
    },
    popularity: {
        fontSize: 14,
        color: 'gray', // Gray color for less emphasis
    },
    releaseDate: {
        fontSize: 14,
        color: 'gray', // Gray color for less emphasis
    },
});

export default MovieCard;