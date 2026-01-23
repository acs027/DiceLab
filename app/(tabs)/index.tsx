import { ScrollView, StyleSheet, Platform, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { ExternalLink } from '@/components/external-link';
import Features from '@/components/features';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;
  const backgroundColor = Colors[colorScheme ?? 'light'].background;
  const textColor = Colors[colorScheme ?? 'light'].text;

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ExternalLink href="https://developer-site-url.com">
          <TouchableOpacity style={styles.avatarButton}>
            <View style={[styles.avatar, { backgroundColor: tintColor }]}>
              <IconSymbol name="person.fill" size={24} color={backgroundColor} />
            </View>
          </TouchableOpacity>
        </ExternalLink>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.heroSection}>
          <ThemedView style={styles.heroContent}>
            <IconSymbol name="cube.transparent.fill" size={80} color={tintColor} style={styles.heroIcon} />
            <ThemedText type="title" style={styles.heroTitle}>
              DiceLab
            </ThemedText>
            <ThemedText style={styles.heroSubtitle}>
              The ultimate dice rolling experience for iOS
            </ThemedText>
            <ThemedText style={styles.heroDescription}>
              Roll dice with style. Create custom dice, organize them into sets, and roll from anywhere with widgets and Siri.
            </ThemedText>
            
            <ExternalLink href="https://apps.apple.com/app/dicelab">
              <TouchableOpacity style={[styles.appStoreButton, { backgroundColor: textColor }]}>
                <IconSymbol name="apple.logo" size={20} color={backgroundColor} />
                <ThemedText style={[styles.appStoreButtonText, { color: backgroundColor }]}>
                  Download on the App Store
                </ThemedText>
              </TouchableOpacity>
            </ExternalLink>
          </ThemedView>
        </ThemedView>

        <Features />

      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: Platform.OS === 'web' ? 20 : 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'flex-end',
    zIndex: 10,
  },
  avatarButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  heroSection: {
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heroContent: {
    alignItems: 'center',
    maxWidth: 600,
    width: '100%',
  },
  heroIcon: {
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
    opacity: 0.8,
  },
  heroDescription: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    opacity: 0.7,
    maxWidth: 500,
    marginBottom: 32,
  },
  appStoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 8,
    marginTop: 8,
    minWidth: 200,
  },
  appStoreButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});