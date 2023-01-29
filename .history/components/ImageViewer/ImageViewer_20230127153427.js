import { Image } from "react-native";

const ImageViewer = ({ placeholderImageSource }) => {
  return <Image source={placeholderImageSource} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;