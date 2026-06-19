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
        paddingBottom: 140, // Ensures layout forms don't tuck under BottomNav
    },
    formContainer: {
        backgroundColor: COLORS.cardBg,
        borderRadius: SIZES.radiusLarge,
        padding: SIZES.medium,
        ...SHADOWS.medium,
    },
    formHeaderTitle: {
        fontSize: 22,
        fontWeight: "800",
        color: COLORS.textPrimary,
        marginBottom: SIZES.medium,
        textAlign: "center",
    },
    fieldLabel: {
        fontSize: SIZES.font,
        fontWeight: "700",
        color: COLORS.textPrimary,
        marginBottom: 6,
        marginTop: 4,
    },
    inputField: {
        backgroundColor: "#F8FAFC",
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: SIZES.radiusMedium,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: SIZES.font,
        color: COLORS.textPrimary,
        marginBottom: SIZES.medium,
    },
    textAreaField: {
        height: 80,
        textAlignVertical: "top", // Aligns multi-line text input on Android
    },
    imagePreviewContainer: {
        borderRadius: SIZES.radiusMedium,
        overflow: "hidden",
        marginBottom: SIZES.medium,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    uploadedImage: {
        width: "100%",
        height: 180,
        resizeMode: "cover",
    },
    uploadButton: {
        backgroundColor: "#F59E0B",
        paddingVertical: 14,
        borderRadius: SIZES.radiusMedium,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: SIZES.small,
        ...SHADOWS.light,
    },
    uploadButtonText: {
        color: COLORS.white,
        fontWeight: "700",
        fontSize: SIZES.font,
    },
    submitButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        borderRadius: SIZES.radiusMedium,
        alignItems: "center",
        justifyContent: "center",
        marginTop: SIZES.base,
        ...SHADOWS.medium,
    },
    submitButtonText: {
        color: COLORS.white,
        fontWeight: "800",
        fontSize: SIZES.medium,
        letterSpacing: 0.5,
    },
});