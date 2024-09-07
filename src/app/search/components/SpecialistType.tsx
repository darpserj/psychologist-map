import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function SpecialistType() {
  return (
    <FormControl>
      <FormLabel htmlFor="" fontSize={"xs"} mb={0}>
        Tip Specialist
      </FormLabel>
      <Select border={"none"} bg={"primary.200"} _hover={{ bg: "primary.500" }}>
        <option value="Psiholog">Psiholog</option>
        <option value="Psihiatru">Psihiatru</option>
        <option value="Coach">Coach</option>
      </Select>
    </FormControl>
  );
}
