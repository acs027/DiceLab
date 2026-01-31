import { StyleSheet } from "react-native";
import { Image } from "react-native";

export default function AvatarCircle() {
    return (
          <Image 
                      source={require('@/assets/images/profile.png')} 
                      style={styles.profileImage}
                    />
    );
}
 
  const styles = StyleSheet.create({
       profileImage: {
        width: 48,
        height: 48,
      }});