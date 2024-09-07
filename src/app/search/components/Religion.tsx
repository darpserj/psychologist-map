import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function Religion() {
  return (
    <FormControl>
      <FormLabel htmlFor="" fontSize={"xs"} mb={0}>
        Religie
      </FormLabel>
      <Select border={"none"} bg={"primary.200"} _hover={{ bg: "primary.500" }}>
        <option value="">Toate</option>
        <option value="">Atei</option>
        <option value="crestin">Crestin</option>
        <option value="musulman">Musulman</option>
      </Select>
    </FormControl>
  );
}
