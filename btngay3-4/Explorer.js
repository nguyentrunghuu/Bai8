import React from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
    { id: "1", name: "Pizza", image: require("../assets/pizza.jpg") },
    { id: "2", name: "Burgers", image: require("../assets/burger.jpg") },
    { id: "3", name: "Steak", image: require("../assets/steak.jpg") },
    { id: "4", name: "Pizza", image: require("../assets/pizza.jpg") },
    { id: "5", name: "Burgers", image: require("../assets/burger.jpg") },
    { id: "6", name: "Steak", image: require("../assets/steak.jpg") },
];

const popularItems = [
    { id: "1", name: "Food 1", from: "By VietNam", price: "$1", image: require("../assets/pizza.jpg") },
    { id: "2", name: "Food 2", from: "By VietNam", price: "$3", image: require("../assets/burger.jpg") },
    { id: "3", name: "Food 3", from: "By VietNam", price: "$5", image: require("../assets/steak.jpg") },
];

const discountItems = [
    { id: "1", name: "Discount Food 1", oldPrice: "$5", newPrice: "$3", discount: "-40%", image: require("../assets/pizza.jpg") },
    { id: "2", name: "Discount Food 2", oldPrice: "$8", newPrice: "$5", discount: "-30%", image: require("../assets/pizza.jpg") },
];

const HeaderComponent = ({ title }) => (
    <View style={styles.categoriesSection}>
        <Text style={styles.sectionHeader}>{title}</Text>
        <TouchableOpacity>
            <Text style={styles.filterButton}>Filter</Text>
        </TouchableOpacity>
    </View>
);

const ItemCard = ({ item, type }) => {
    if (type === "popular") {
        return (
            <View style={styles.popularItem}>
                <Image source={item.image} style={styles.popularImage} />
                <View style={styles.popularInfo}>
                    <View style={styles.popularRow}>
                        <Text style={styles.popularName}>{item.name}</Text>
                        <Text style={styles.popularFrom}>{item.from}</Text>
                    </View>
                    <Text style={styles.popularPrice}>{item.price}</Text>
                </View>
            </View>
        );
    } else if (type === "sale-off") {
        return (
            <View style={styles.discountItem}>
                <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.discountImage} />
                    <View style={styles.discountBadge}>
                        <Text style={styles.discountText}>{item.discount}</Text>
                    </View>
                </View>
                <Text style={styles.discountName}>{item.name}</Text>
                <View style={styles.discountPriceRow}>
                    <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                    <Text style={styles.newPrice}>{item.newPrice}</Text>
                </View>
            </View>
        );
    }
    return (
        <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{item.name}</Text>
        </View>
    );
};

const ReusableFlatList = ({ title, data, type, headerStyle }) => (
    <View style={styles.listContainer}>
        <HeaderComponent title={title} headerStyle={headerStyle} />
        <FlatList
            data={data}
            keyExtractor={(item, index) => item.id || index.toString()}
            renderItem={({ item }) => <ItemCard item={item} type={type} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.flatList}
        />
    </View>
);


const Explorer = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.screenTitle}>Explore</Text>
                <View style={styles.searchSection}>
                    <Ionicons name="location-outline" style={styles.locationIcon} />
                    <View style={styles.searchInputContainer}>
                        <TextInput placeholder="Search for meals or area" style={styles.searchInput} />
                        <Ionicons name="search" style={styles.searchIcon} />
                    </View>
                </View>

                <View style={styles.contentWrapper}>
                    <ReusableFlatList title="Top Categories" data={categories} type="category" headerStyle={styles.topCategoriesHeader} />
                    <ReusableFlatList title="Popular Items" data={popularItems} type="popular" headerStyle={styles.popularItemsHeader} />
                    <ReusableFlatList title="Sale-off Items" data={discountItems} type="sale-off" headerStyle={styles.saleOffHeader} />
                </View>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e0e0",
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: "bold",
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: "#f1f1f1",
        width: "100%",
        marginBottom: 10,
    },
    searchSection: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    locationIcon: {
        fontSize: 24,
        color: "black",
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 10,
        backgroundColor: "#f1f1f1"
    },
    searchInputContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 4,
        marginLeft: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    searchIcon: {
        fontSize: 24,
        color: "gray",
    },
    categoriesSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,

        marginBottom: 12,
    },
    sectionHeader: {
        fontSize: 20,
        paddingVertical: 12,
        fontWeight: "bold",

    },
    categoriesTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    filterButton: {
        color: "orange",
    },
    categoryList: {
        paddingLeft: 16,
        paddingVertical: 10,
    },
    categoryItem: {
        alignItems: "center",
        marginRight: 16,
    },
    categoryImage: {
        width: 100,
        height: 50,
        borderRadius: 10,
    },
    categoryName: {
        fontSize: 14,
        marginTop: 4,
    },
    popularSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        marginVertical: 20,
    },
    popularTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    viewAllButton: {
        color: "orange",
    },

    popularList: {
        paddingLeft: 16,
        paddingVertical: 10,
    },

    popularItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginRight: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width: 220,

    },

    popularImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },

    popularInfo: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        flexGrow: 1,
        marginLeft: 10,
        height: 80,
        justifyContent: "space-between",
    },

    popularRow: {
        flexDirection: "column",
        alignItems: "flex-start",
    },

    popularName: {
        fontSize: 16,
        fontWeight: "bold",
    },

    popularFrom: {
        fontSize: 14,
        color: "gray"
    },

    popularPrice: {
        fontSize: 16,
        marginTop: 4,
    },

    discountList: {
        paddingLeft: 16,
        paddingVertical: 10,
    },

    discountItem: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginRight: 16,
    },

    imageContainer: {
        position: "relative",
    },
    discountImage: {
        width: 200,
        height: 100,
        borderRadius: 10,
    },
    discountBadge: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "red",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
    },
    discountText: {
        color: "white",
        fontWeight: "bold",
    },

    discountPriceRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    discountName: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 10
    },

    oldPrice: {
        textDecorationLine: "line-through",
        color: "gray",
    },
    newPrice: {
        fontWeight: "bold",
        fontSize: 16,
    },

    listContainer: {
        marginLeft: 16
    }

});


export default Explorer;
