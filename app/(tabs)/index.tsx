import { ActivityIndicator, Image, ScrollView, Text, View, FlatList, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchPopularMovies } from "@/services/api";
import MovieCard from "../components/MovieCard"; 

const headerImage = require("@/assets/images/encabezado.jpg");
const logo = require("@/assets/images/logo.png");

export default function Index() {
  const router = useRouter();
  const { data: movies, loading: moviesLoading, error: movieError } = useFetch(() =>
    fetchPopularMovies({ query: "" })
  );

  return (
    <View style={styles.container}>
      {/* Header Image */}
      <View style={styles.headerImageContainer}>
        <Image
          source={headerImage}
          style={styles.headerImage}
          resizeMode="cover"
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.logoContainer}>
          <Image
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {moviesLoading ? (
          <ActivityIndicator size="large" color="#0000FF" style={styles.loadingIndicator} />
        ) : movieError ? (
          <Text style={styles.errorText}>
            {movieError.message}
          </Text>
        ) : (
          <View style={styles.contentContainer}>
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            />

            <Text style={styles.latestMoviesText}>
              Latest Movies
            </Text>

            <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard {...item} />} // Spread the item to pass all properties
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={styles.columnWrapper}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030014',
  },
  headerImageContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 192,
    zIndex: 0,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    zIndex: 10,
    alignItems: 'center',
  },
  logo: {
    width: 128,
    height: 128,
  },
  loadingIndicator: {
    marginTop: 40,
  },
  errorText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
  },
  contentContainer: {
    flex: 1,
    marginTop: 20,
  },
  latestMoviesText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 12,
  },
  columnWrapper: {
    justifyContent: 'space-between', 
  },
  flatList: {
    marginTop: 8,
  },
});
