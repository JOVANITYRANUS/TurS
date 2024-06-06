import React from "react";

const PageHome = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            height: "90vh" 
        },
        h1: {
            color: "#333",
            fontSize: "36px"
        },
        p: {
            color: "#666",
            fontSize: "18px",
            marginBottom: "20px"
        },
        img: {
            maxWidth: "100%",
            height: "auto",
            marginBottom: "20px"
        },
        ctaButton: {
            backgroundColor: "#ff6600",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
            borderRadius: "5px",
            transition: "background-color 0.3s ease"
        },
        ctaButtonHover: {
            backgroundColor: "#ff8000"
        }
    };

    return (
        <div style={styles.pageHome}>
            <h1 style={styles.h1}>Agencia Turistica</h1>
            <p style={styles.p}>¡Viaja a tu lugar magico!</p>
            <img src="https://www.goredforwomen.org/-/media/AHA/H4GM/Article-Images/travel.jpg" alt="Imagen Principal" style={styles.img} />
        </div>
    );
}

export default PageHome;
