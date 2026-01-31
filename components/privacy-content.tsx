import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import PrivacyData from '@/data/PrivacyData.json';

interface PrivacySection {
  title: string;
  content: string;
  boldText?: string;
}

interface PrivacySectionProps {
  title: string;
  content: string;
  boldText?: string;
}

function PrivacySection({ title, content, boldText }: PrivacySectionProps) {
  return (
    <ThemedView style={styles.section}>
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        {title}
      </ThemedText>
      <ThemedText style={styles.paragraph}>
        {boldText ? (
          <>
            <ThemedText type="defaultSemiBold">{boldText}</ThemedText>{' '}
            {content}
          </>
        ) : (
          content
        )}
      </ThemedText>
    </ThemedView>
  );
}

export default function PrivacyContent() {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;
  const sections = PrivacyData.sections as PrivacySection[];

  return (
    <>
      <ThemedView style={styles.headerSection}>
        {/* <IconSymbol 
          name={PrivacyData.headerIcon} 
          size={60} 
          color={tintColor} 
          style={styles.headerIcon} 
        /> */}
        <ThemedText type="title" style={styles.headerTitle}>
          {PrivacyData.title}
        </ThemedText>
        <ThemedText style={styles.lastUpdated}>
          Last Updated: {PrivacyData.lastUpdated}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentSection}>
        {sections.map((section, index) => (
          <PrivacySection key={index} {...section} />
        ))}

        <ThemedView
          style={[
            styles.summaryBox,
            {
              backgroundColor:
                colorScheme === 'dark'
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'rgba(10, 126, 164, 0.1)',
              borderColor:
                colorScheme === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(10, 126, 164, 0.2)',
            },
          ]}>
          {/* <IconSymbol
            name={PrivacyData.summary.icon}
            size={32}
            color={tintColor}
          /> */}
          <ThemedText type="defaultSemiBold" style={styles.summaryText}>
            {PrivacyData.summary.text}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerIcon: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  lastUpdated: {
    fontSize: 14,
    opacity: 0.6,
    textAlign: 'center',
  },
  contentSection: {
    paddingHorizontal: 20,
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  section: {
    marginBottom: 32,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.9,
  },
  summaryBox: {
    marginTop: 40,
    padding: 24,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
  },
  summaryText: {
    fontSize: 18,
    lineHeight: 26,
    flex: 1,
  },
});