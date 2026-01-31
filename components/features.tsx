import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import FeaturesData from '@/data/FeaturesData.json';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;
  const cardBackgroundColor = colorScheme === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)' 
    : 'rgba(0, 0, 0, 0.02)';
  const borderColor = colorScheme === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.05)';

  return (
    <ThemedView style={[styles.featureCard, { backgroundColor: cardBackgroundColor, borderColor }]}>
      {/* <IconSymbol name={icon} size={40} color={tintColor} /> */}
      <ThemedText type="subtitle" style={styles.featureTitle}>
        {title}
      </ThemedText>
      <ThemedText style={styles.featureDescription}>{description}</ThemedText>
    </ThemedView>
  );
}

export default function Features() {
  const features = FeaturesData.features as Feature[];

  return (
    <ThemedView style={styles.featuresSection}>
      <ThemedText type="title" style={styles.sectionTitle}>
        {FeaturesData.title}
      </ThemedText>
      <ThemedText style={styles.sectionDescription}>
        {FeaturesData.description}
      </ThemedText>

      <ThemedView style={styles.featuresGrid}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  featuresSection: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  sectionDescription: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    opacity: 0.7,
  },
  featuresGrid: {
    gap: 24,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  featureCard: {
    padding: 24,
    borderRadius: 16,
    marginBottom: 8,
    gap: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 22,
    marginTop: 4,
  },
  featureDescription: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.8,
  },
});