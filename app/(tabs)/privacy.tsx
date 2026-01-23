import { ScrollView, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import PrivacyContent from '@/components/privacy-content';

export default function PrivacyScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <PrivacyContent />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
});