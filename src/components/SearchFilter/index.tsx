import { Card, CardBody, CardFooter, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel } from "@chakra-ui/react";
import Location from "./Location";
import PriceRange from "./PriceRange";
import Insurance from "./Insurance";
import MaleOrFemaleSpecialist from "@/app/search/components/MaleOrFemaleSpecialist";
import AgeGroup from "./AgeGroup";
import Religion from "@/app/search/components/Religion";
import Language from "@/app/search/components/Language";
import AgeGroupExperience from "@/app/search/components/AgeGroupExperience";
import SexExperience from "@/app/search/components/SexExperience";
import SexualOrientationExperience from "@/app/search/components/SexualOrientationExperience";
import SpecialistType from "@/app/search/components/SpecialistType";
import TherapyType from "@/app/search/components/TherapyType";
import DisorderType from "@/app/search/components/DisorderType";

export default function SearchFilters() {
  return (
    <Accordion allowToggle defaultIndex={0}>
      <AccordionItem border={"none"}>
        <AccordionButton hideFrom={"lg"}>Filtre</AccordionButton>
        <AccordionPanel>
          <Card border={"none"} shadow={"none"}>
            <CardBody display={"flex"} flexDirection={"column"} gap={4} py={4}>
              <PriceRange />
              <Location />
              <Insurance />
              <MaleOrFemaleSpecialist />
              <AgeGroup />
              <Religion />
              <Language />
              <AgeGroupExperience />
              <SexExperience />
              <SexualOrientationExperience />
              <SpecialistType />
              <TherapyType />
              <DisorderType />
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
