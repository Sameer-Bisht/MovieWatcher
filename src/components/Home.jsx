import React from "react";

const Home = () => (
    <div style={styles.container}>
        <h1 style={styles.title}>Welcome to Movie Watchlist</h1>
        <p style={styles.subtitle}>
            Discover, track, and manage your favorite movies all in one place.
        </p>
      
    </div>
);

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#181818",
        color: "#fff",
        padding: "2rem",
    },
    title: {
        fontSize: "3rem",
        marginBottom: "1rem",
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: "1.25rem",
        marginBottom: "2rem",
        maxWidth: "400px",
        textAlign: "center",
    },
    button: {
        padding: "0.75rem 2rem",
        background: "#e50914",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        textDecoration: "none",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background 0.2s",
    },
};

export default Home;