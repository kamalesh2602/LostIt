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
import { COLORS, SIZES, SHADOWS } from "../constants/theme";
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
    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
        >
            <View style={styles.formContainer}>
                <Text style={styles.formHeaderTitle}>Report New Item</Text>

                {/* Interactive Status Switch Module */}
                <TypeSelector type={type} setType={setType} />

                {/* Form Input Fields Stack */}
                <Text style={styles.fieldLabel}>Item Name</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="What did you lose or find?"
                    placeholderTextColor={COLORS.textMuted}
                    value={title}
                    onChangeText={setTitle}
                />

                <Text style={styles.fieldLabel}>Location</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="e.g., F block Canteen, Room 302"
                    placeholderTextColor={COLORS.textMuted}
                    value={location}
                    onChangeText={setLocation}
                />

                <Text style={styles.fieldLabel}>Contact Number</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Enter active phone number"
                    placeholderTextColor={COLORS.textMuted}
                    keyboardType="phone-pad"
                    value={contact}
                    onChangeText={setContact}
                />

                <Text style={styles.fieldLabel}>Description</Text>
                <TextInput
                    style={[styles.inputField, styles.textAreaField]}
                    placeholder="Add details like color, brand, distinct marks..."
                    placeholderTextColor={COLORS.textMuted}
                    multiline
                    numberOfLines={3}
                    value={description}
                    onChangeText={setDescription}
                />

                {/* Category Selection Carousel Module */}
                <Text style={styles.fieldLabel}>Select Category</Text>
                <CategorySelector category={category} setCategory={setCategory} />

                {/* Media Presentation Display Container */}
                {image && (
                    <View style={styles.imagePreviewContainer}>
                        <Image source={{ uri: image }} style={styles.uploadedImage} />
                    </View>
                )}

                {/* Functional Upload Control Element */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.uploadButton}
                    onPress={pickImage}
                >
                    <Text style={styles.uploadButtonText}>
                        {image ? "🔄 Change Photo" : "📷 Upload Item Image"}
                    </Text>
                </TouchableOpacity>

                {/* Main Action Submit Button */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.submitButton}
                    onPress={addItem}
                >
                    <Text style={styles.submitButtonText}>Publish Report</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: SIZES.medium,
        paddingTop: SIZES.small,
        paddingBottom: 150, // Extra breathing space above BottomNav
    },
    formContainer: {
        backgroundColor: COLORS.cardBg,
        borderRadius: SIZES.radiusLarge,
        padding: SIZES.medium + 4, // Increased internal padding for breathing room
        ...SHADOWS.medium,
    },
    formHeaderTitle: {
        fontSize: 24,
        fontWeight: "800",
        color: COLORS.textPrimary,
        marginBottom: SIZES.large,
        textAlign: "center",
        letterSpacing: -0.5,
    },
    fieldLabel: {
        fontSize: 13,
        fontWeight: "700",
        color: COLORS.textSecondary,
        textTransform: "uppercase", // Clean, subtle developer label styling
        letterSpacing: 0.6,
        marginBottom: 6,
        marginTop: 6,
    },
    inputField: {
        backgroundColor: "#F8FAFC",
        borderWidth: 1,
        borderColor: "#E2E8F0",
        borderRadius: SIZES.radiusMedium,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: SIZES.font,
        color: COLORS.textPrimary,
        marginBottom: SIZES.medium,
    },
    textAreaField: {
        height: 100, // Slightly taller text box for better multi-line viewing
        textAlignVertical: "top",
    },
    imagePreviewContainer: {
        borderRadius: SIZES.radiusMedium,
        overflow: "hidden",
        marginVertical: SIZES.medium,
        borderWidth: 1,
        borderColor: COLORS.border,
        ...SHADOWS.light,
    },
    uploadedImage: {
        width: "100%",
        height: 190,
        resizeMode: "cover",
    },
    
    // Modernized Media Upload Button (Sleek Border Style)
    uploadButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FEF3C7", // Very soft, premium amber highlight background tint
        borderWidth: 1.5,
        borderColor: "#F59E0B",
        borderStyle: "dashed", // Dashed layout border line suggests an action area drop-zone
        borderRadius: SIZES.radiusMedium,
        paddingVertical: 14,
        marginTop: SIZES.base,
        marginBottom: SIZES.large, // Increased spacing separation between form actions
    },
    uploadButtonText: {
        color: "#B45309", // High contrast dark amber font text
        fontWeight: "700",
        fontSize: SIZES.font,
        letterSpacing: 0.3,
    },
    
    // Modernized Main CTA Action Submit Button
    submitButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: 16,
        borderRadius: SIZES.radiusMedium,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.medium,
    },
    submitButtonText: {
        color: COLORS.white,
        fontWeight: "800",
        fontSize: SIZES.medium,
        letterSpacing: 0.5,
    },
    
});