import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { getUserEmail } from "../utils/session";

export default function ProfileScreen() {
    const email = getUserEmail();

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Ionicons name="person-circle" size={100} color="#007AFF" />
            </View>

            <Text style={styles.title}>Mi Perfil</Text>

            <View style={styles.infoCard}>
                <View style={styles.infoRow}>
                    <Ionicons name="mail" size={24} color="#08a303ff" />
                    <View style={styles.infoTextContainer}>
                        <Text style={styles.infoLabel}>Email</Text>
                        <Text style={styles.infoValue}>{email || 'No disponible'}</Text>
                    </View>
                </View>
            </View>


            <View style={styles.statsContainer}>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>1</Text>
                    <Text style={styles.statLabel}>Sesiones</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>100%</Text>
                    <Text style={styles.statLabel}>Activo</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#333',
    },
    infoCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoTextContainer: {
        marginLeft: 15,
        flex: 1,
    },
    infoLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    infoValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    statBox: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    statNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 5,
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
    },
});