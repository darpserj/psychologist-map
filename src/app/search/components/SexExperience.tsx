import { FormControl, FormLabel, HStack, Radio, RadioGroup, VStack } from "@chakra-ui/react";
import { BiFemale, BiMale } from "react-icons/bi";

export default function SexExperience() {
  return (
    <FormControl as="fieldset">
      <FormLabel as="legend" fontSize="xs" mb={0}>
        Experienta cu persoane de un anumit sex
      </FormLabel>
      <RadioGroup>
        <HStack spacing={2}>
          <Radio variant={"filledRadio"} value="Barbati">
            <BiMale aria-disabled></BiMale>
            Barbati
          </Radio>
          <Radio variant={"filledRadio"} value="Femei">
            <BiFemale aria-disabled />
            Femei
          </Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
}
