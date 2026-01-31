import * as React from "react";
import { StyleSheet,Platform } from 'react-native';
import { EmailIcon } from "./icons/social/EmailIcon";
import { LinkedinIcon } from "./icons/social/LinkedinIcon";
import { GithubIcon } from "./icons/social/GithubIcon";
import { ThemedView } from "./themed-view";
import { ExternalLink } from "./external-link";

const SocialView: React.FC = () => {
    return (
        <>
            <ThemedView style={styles.connectGrid}>
                <ExternalLink href="mailto:alicihansarac@gmail.com">
                    <ThemedView style={styles.connectCard}>
                        <EmailIcon size={32} hoverColor='#1cc4c9' /> 
                    </ThemedView>
                </ExternalLink>

                <ExternalLink href="https://www.linkedin.com/in/alicihansarac/">
                    <ThemedView style={styles.connectCard}>
                        <LinkedinIcon size={32} hoverColor='#1cc4c9' /> 
                    </ThemedView>
                </ExternalLink>

                <ExternalLink href="https://github.com/acs027">
                    <ThemedView style={styles.connectCard}>
                        <GithubIcon size={32} hoverColor='#1cc4c9' /> 
                    </ThemedView>
                </ExternalLink>
            </ThemedView>
            
          
        </>
    );
};

const styles = StyleSheet.create({
    connectGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        justifyContent: 'center',
        marginTop: 24,
        marginBottom: 24,
    },
    connectCard: {
        width: 60,
        height: 60,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },
    connectIcon: {
        width: '100%',
        height: '100%',
    },
    cursorPointer: {
        cursor: 'pointer',
    },
    pressed: {
        opacity: 0.8,
    },
}); 

export default SocialView;
