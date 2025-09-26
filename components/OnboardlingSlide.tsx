import {
  Image,
  ImageSourcePropType,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

interface OnboardingSlideProps {
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  onNext: () => void;
  buttonText: string;
  slideIndex: number;
}

const PaginationDots = ({ slideIndex }: { slideIndex: number }) => {
  return (
    <View className="flex-row justify-center mt-6">
      <View
        className={`h-2 w-2 mx-1 ${
          slideIndex === 0 ? "bg-green-600" : "bg-gray-300"
        }`}
      ></View>
      <View
        className={`h-2 w-2 mx-1 ${
          slideIndex === 1 ? "bg-green-600" : "bg-gray-300"
        }`}
      ></View>
    </View>
  );
};

export default function OnboardingSlide({
  imageSource,
  title,
  description,
  onNext,
  buttonText = "Next",
  slideIndex,
}: OnboardingSlideProps) {
  return (
    <View className="flex-1 bg-white p-6 justify-between">
      <View className="flex-grow justify-center items-center mt-10">
        <Image
          source={imageSource}
          className="w-full h-64"
          resizeMode="contain"
        />
      </View>
      <View className="mb-10">
        <Text className="text-3xl font-bold text-gray-800 text-center leading-snug mb-3">
          {title}
        </Text>
        <Text className="text-base text-gray-500 text-center px-4">
          {description}
        </Text>
      </View>
      <View className="pb-8">
        <TouchableOpacity
          onPress={onNext}
          className="bg-green-600 p-4 rounded-xl items-center shadow-lg"
          activeOpacity={0.8}
        >
          <Text className="text-white text-lg font-semibold">{buttonText}</Text>
        </TouchableOpacity>

        <PaginationDots slideIndex={slideIndex} />
      </View>
    </View>
  );
}
