import Image from "next/image";
import { Title, Container, Text, UnstyledButton, Overlay, SimpleGrid } from '@mantine/core';
const classes = {
  wrapper: 'flex items-center',
  icon: 'mr-4 bg-gradient-to-br from-blue-400 to-blue-600',
  title: 'text-gray-600',
  description: 'text-black',
  contact: 'text-xl font-semibold text-gray-700',
};

const FAQSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <Container>
        {/* <SimpleGrid className="-mx-4" columns={{ sm: 1, md: 2 }}> */}
         
        {/* </SimpleGrid> */}
      </Container>
    </section>
  );
};

export default FAQSectionTwo;


