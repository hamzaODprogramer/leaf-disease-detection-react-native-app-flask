import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RecentDiseases() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Maladies récentes</Text>
      <View style={styles.diseaseItem}>
        <View style={styles.imagePlaceholder} />
        <View>
          <Text style={styles.diseaseName}>Mildiou</Text>
          <Text style={styles.diseaseDate}>Détecté hier</Text>
        </View>
      </View>
      <View style={styles.diseaseItem}>
        <View style={styles.imagePlaceholder} />
        <View>
          <Text style={styles.diseaseName}>Oïdium</Text>
          <Text style={styles.diseaseDate}>Détecté il y a 3 jours</Text>
        </View>
      </View>
      <View style={styles.diseaseItem}>
        <View style={styles.imagePlaceholder} />
        <View>
          <Text style={styles.diseaseName}>Oïdium</Text>
          <Text style={styles.diseaseDate}>Détecté il y a 3 jours</Text>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    marginBottom: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 12,
  },
  diseaseItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  imagePlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: "#E5E7EB", 
    borderRadius: 8,
    marginRight: 12,
  },
  diseaseName: {
    fontSize: 14,
    fontWeight: "500",
  },
  diseaseDate: {
    fontSize: 12,
    color: "#6B7280", 
  },
});
