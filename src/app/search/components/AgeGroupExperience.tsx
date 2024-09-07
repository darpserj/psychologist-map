import { FormControl, FormLabel, HStack, Radio, RadioGroup, SimpleGrid, VStack } from "@chakra-ui/react";

export default function AgeGroupExperience() {
  return (
    <FormControl as="fieldset">
      <FormLabel as="legend" fontSize="xs" mb={0}>
        Experienta cu o anumita grupa de varsta
      </FormLabel>
      <RadioGroup>
        <SimpleGrid spacing={2} gridTemplateColumns={"repeat(2, 1fr)"}>
          <Radio variant={"filledRadio"} value="Copii" px={1}>
            Copii
          </Radio>
          <Radio variant={"filledRadio"} value="Adolescenti" px={1}>
            Adolescenti
          </Radio>
          <Radio variant={"filledRadio"} value="Adulti" px={1}>
            Adulti
          </Radio>
          <Radio variant={"filledRadio"} value="Batrani" px={1}>
            Batrani
          </Radio>
        </SimpleGrid>
      </RadioGroup>
    </FormControl>
  );
}
