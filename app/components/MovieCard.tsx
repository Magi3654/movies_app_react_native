import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Result } from '../interfaces/tmbdMovie'; // Adjust the import path as necessary

const MovieCard: React.FC<Result> = ({id, poster_path, title, vote_average, release_date }) => {
  const imagePath = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <View style={styles.card}>
      <Image source={{ uri: imagePath }} style={styles.image} />
      <Text style={styles.popularity}> ID: {id||'Unknown ID'}</Text>
      <Text style={styles.title}>{title || 'Unknown Title'}</Text>
      <Text style={styles.popularity}>Popularity: {vote_average}</Text>
      <Text style={styles.releaseDate}>Release Date: {release_date ? new Date(release_date).toLocaleDateString() : 'N/A'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      width: '30%', // Adjusted width for better fit in a 3-column layout
      height: 350, // Increased height for more content space
      margin: 10, // Space between cards
      backgroundColor: '#fff', // White background for contrast
      borderRadius: 12, // Rounded corners
      elevation: 5, // Shadow effect for Android
      padding: 10, // Space inside the card
      shadowColor: '#000', // Shadow color for iOS
      shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
      shadowOpacity: 0.3, // Shadow opacity for iOS
      shadowRadius: 4, // Shadow radius for iOS
    },
    image: {
      width: '100%', // Full width of the card
      height: 100, // Fixed height for the image
      borderRadius: 8, // Rounded corners for the image
    },
    placeholderImage: {
      width: '100%',
      height: 200,
      backgroundColor: '#e0e0e0', // Placeholder color
      borderRadius: 8,
    },
    title: {
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