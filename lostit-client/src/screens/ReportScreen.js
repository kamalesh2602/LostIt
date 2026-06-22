import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet,
} from "react-native";
import { SIZES, SHADOWS, useTheme } from "../constants/theme";
import TypeSelector from "../components/TypeSelector";
import CategorySelector from "../components/CategorySelector";

export default function ReportScreen({
    title,
    setTitle,
    location,
    setLocation,
    contact,
    setContact,
    description,
    setDescription,
    image,
    category,
    setCategory,
    type,
    setType,
    pickImage,
    addItem,
}) {
    const { colors: COLORS, isDarkMode } = useTheme();

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
        >
            <View style={[styles.formContainer, { backgroundColor: COLORS.cardBg, borderColor: COLORS.border }]}>
                <Text style={[styles.formHeaderTitle, { color: COLORS.textPrimary }]}>Report New Item</Text>

                {/* Interactive Status Switch Module */}
                <TypeSelector type={type} setType={setType} />

                {/* Form Input Fields Stack */}
                <Text style={[styles.fieldLabel, { color: COLORS.textSecondary }]}>Item Name</Text>
                <TextInput
                    style={[styles.inputField, { backgroundColor: COLORS.innerBoxBg, borderColor: COLORS.border, color: COLORS.textPrimary }]}
                    placeholder="What did you lose or find?"
                    placeholderTextColor={COLORS.textMuted}
                    value={title}
                    onChangeText={setTitle}
                />

                <Text style={[styles.fieldLabel, { color: COLORS.textSecondary }]}>Location</Text>
                <TextInput
                    style={[styles.inputField, { backgroundColor: COLORS.innerBoxBg, borderColor: COLORS.border, color: COLORS.textPrimary }]}
                    placeholder="e.g., F block Canteen, Room 302"
                    placeholderTextColor={COLORS.textMuted}
                    value={location}
                    onChangeText={setLocation}
                />

                <Text style={[styles.fieldLabel, { color: COLORS.textSecondary }]}>Contact Number</Text>
                <TextInput
                    style={[styles.inputField, { backgroundColor: COLORS.innerBoxBg, borderColor: COLORS.border, color: COLORS.textPrimary }]}
                    placeholder="Enter active phone number"
                    placeholderTextColor={COLORS.textMuted}
                    keyboardType="phone-pad"
                    value={contact}
                    onChangeText={setContact}
                />

                <Text style={[styles.fieldLabel, { color: COLORS.textSecondary }]}>Description</Text>
                <TextInput
                    style={[styles.inputField, styles.textAreaField, { backgroundColor: COLORS.innerBoxBg, borderColor: COLORS.border, color: COLORS.textPrimary }]}
                    placeholder="Add details like color, brand, distinct marks..."
                    placeholderTextColor={COLORS.textMuted}
                    multiline
                    numberOfLines={3}
                    value={description}
                    onChangeText={setDescription}
                />

                {/* Category Selection Carousel Module */}
                <Text style={[styles.fieldLabel, { color: COLORS.textSecondary }]}>Select Category</Text>
                <CategorySelector category={category} setCategory={setCategory} />

                {/* Media Presentation Display Container */}
                {image && (
                    <View style={[styles.imagePreviewContainer, { borderColor: COLORS.border }]}>
                        <Image source={{ uri: image }} style={styles.uploadedImage} />
                    </View>
                )}

                {/* Functional Upload Control Element */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.uploadButton, 
                        isDarkMode ? { backgroundColor: '#2D2510', borderColor: '#F59E0B' } : { backgroundColor: "#FEF3C7", borderColor: "#F59E0B" }
                    ]}
                    onPress={pickImage}
                >
                    <Text style={[styles.uploadButtonText, isDarkMode ? { color: '#FBBF24' } : { color: "#B45309" }]}>
                        {image ? "🔄 Change Photo" : "📷 Upload Item Image"}
                    </Text>
                </TouchableOpacity>

                {/* Main Action Submit Button */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.submitButton, { backgroundColor: COLORS.primary }]}
                    onPress={addItem}
                >
                    <Text style={[styles.submitButtonText, { color: COLORS.white }]}>Publish Report</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: SIZES.medium,
        paddingTop: SIZES.small,
        paddingBottom: 150, 
    },
    formContainer: {
        borderRadius: SIZES.radiusLarge,
        padding: SIZES.medium + 4, 
        borderWidth: 1,
        ...SHADOWS.medium,
    },
    formHeaderTitle: {
        fontSize: 24,
        fontWeight: "800",
        marginBottom: SIZES.large,
        textAlign: "center",
        letterSpacing: -0.5,
    },
    fieldLabel: {
        fontSize: 13,
        fontWeight: "700",
        textTransform: "uppercase", 
        letterSpacing: 0.6,
        marginBottom: 6,
        marginTop: 6,
    },
    inputField: {
        borderWidth: 1,
        borderRadius: SIZES.radiusMedium,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: SIZES.font,
        marginBottom: SIZES.medium,
    },
    textAreaField: {
        height: 100, 
        textAlignVertical: "top",
    },
    imagePreviewContainer: {
        borderRadius: SIZES.radiusMedium,
        overflow: "hidden",
        marginVertical: SIZES.medium,
        borderWidth: 1,
        ...SHADOWS.light,
    },
    uploadedImage: {
        width: "100%",
        height: 190,
        resizeMode: "cover",
    },
    uploadButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1.5,
        borderStyle: "dashed", 
        borderRadius: SIZES.radiusMedium,
        paddingVertical: 14,
        marginTop: SIZES.base,
        marginBottom: SIZES.large, 
    },
    uploadButtonText: {
        fontWeight: "700",
        fontSize: SIZES.font,
        letterSpacing: 0.3,
    },
    submitButton: {
        paddingVertical: 16,
        borderRadius: SIZES.radiusMedium,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.medium,
    },
    submitButtonText: {
        fontWeight: "800",
        fontSize: SIZES.medium,
        letterSpacing: 0.5,
    },
});