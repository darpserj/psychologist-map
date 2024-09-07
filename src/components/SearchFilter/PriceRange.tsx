"use client";

import { FormControl, FormLabel, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Text, Box } from "@chakra-ui/react";
import { useState } from "react";

export default function PriceRange() {
  const [priceRange, setPriceRange] = useState([100, 500]);

  return (
    <FormControl as="fieldset">
      <FormLabel as="legend" mb={6} fontSize={"xs"}>
        Interval de pret
      </FormLabel>
      <Box px={7}>
        <RangeSlider
          aria-label={["min", "max"]}
          defaultValue={[100, 500]}
          max={800}
          min={100}
          onChange={(state) => setPriceRange(state)}
          step={25}
          value={priceRange}>
          <RangeSliderTrack bg="green.100">
            <RangeSliderFilledTrack bg="teal" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={4} index={0} position={"relative"} border={"solid"} borderWidth={2} borderColor={"green.300"}>
            <Text position={"absolute"} top={-6} minW="8ch" left={-5}>
              {priceRange[0]}
              <span className=" font-bold text-xs">RON</span>
            </Text>
          </RangeSliderThumb>
          <RangeSliderThumb boxSize={4} index={1} border={"solid"} borderWidth={2} borderColor={"orange.300"}>
            <Text position={"absolute"} top={4} minW="8ch" left={-5}>
              {priceRange[1]}
              <span className=" font-bold text-xs">RON</span>
            </Text>
          </RangeSliderThumb>
        </RangeSlider>
      </Box>
    </FormControl>
  );
}
