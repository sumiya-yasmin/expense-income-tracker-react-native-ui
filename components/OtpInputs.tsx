import { useRef } from "react";
import { TextInput, View } from "react-native";

const OtpInputs = ({
  otp,
  setOtp,
}: {
  otp: string[];
  setOtp: (newOtp: string[]) => void;
}) => {
  const inputs = Array(6)
    .fill(0)
    .map((_, i) => useRef<TextInput>(null));

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text.slice(-1);
    setOtp(newOtp);

    if (text && index < 5) {
      inputs[index + 1].current?.focus();
    }

    if (!text && index > 0) {
      inputs[index - 1].current?.focus();
    }
  };

  return (
    <View className="flex-row justify-between mb-10">
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={inputs[index]}
          value={value}
          onChangeText={(text) => handleChange(text, index)}
          keyboardType="numeric"
          maxLength={1}
          autoFocus={index === 0}
          className="border border-gray-300  rounded-lg text-center text-xl w-12 mx-1 aspect-square"
        />
      ))}
    </View>
  );
};
export default OtpInputs;
