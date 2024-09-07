import { FormControl, FormLabel, HStack, Radio, RadioGroup, SimpleGrid } from "@chakra-ui/react";

export default function SexualOrientationExperience() {
  return (
    <FormControl as="fieldset">
      <FormLabel as="legend" fontSize="xs" mb={0}>
        Experienta cu persoane de o anumita orientare sexuala
      </FormLabel>
      <RadioGroup>
        <SimpleGrid spacing={2} gridTemplateColumns={"repeat(2,1fr)"}>
          <Radio variant={"filledRadio"} value="Heterosexuali" px={1}>
            Heterosexuali
          </Radio>
          <Radio variant={"filledRadio"} value="Homosexuali" px={1}>
            Homosexuali
          </Radio>
          <Radio variant={"filledRadio"} value="Bisexuali" px={1}>
            Bisexuali
          </Radio>
          <Radio variant={"filledRadio"} value="Lgbtq+" px={1}>
            LGBTQ+
          </Radio>
        </SimpleGrid>
      </RadioGroup>
    </FormControl>
  );
}
