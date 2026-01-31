import { ScrollView, StyleSheet, Platform, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { ExternalLink } from '@/components/external-link';
import SocialView from '@/components/SocialView';
import AvatarCircle from '@/components/avatar-circle';

export default function SupportScreen() {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;
  const backgroundColor = Colors[colorScheme ?? 'light'].background;
  const textColor = Colors[colorScheme ?? 'light'].text;

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ExternalLink href="https://www.alicihansarac.com/">
          <TouchableOpacity style={styles.avatarButton}>
            <View style={[styles.avatar, { backgroundColor: tintColor }]}>
              <AvatarCircle />
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
            <IconSymbol name="questionmark.circle.fill" size={80} color={tintColor} style={styles.heroIcon} />
            <ThemedText type="title" style={styles.heroTitle}>
              Support
            </ThemedText>
            <ThemedText style={styles.heroSubtitle}>
              We're here to help
            </ThemedText>
            <ThemedText style={styles.heroDescription}>
              If you have any questions, feedback, or need support with DiceLab, feel free to reach out!
              I'm always happy to hear from users and will do my best to respond promptly.
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.socialSection}>
          <SocialView />
        </ThemedView>

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
  socialSection: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});