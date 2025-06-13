import { Button, Flex, Image } from '@chakra-ui/react';
import { useLocation, useNavigate } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts';
import eyes from '@/shared/imgs/eyes.webp';
import { AppHeading } from '@/shared/ui/typography/app-heading';
import { AppText } from '@/shared/ui/typography/app-text';

const NotFoundPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      m="4"
      pt="6"
      justify="center"
      align="center"
      gap="4"
    >
      <Image src={eyes} />
      <AppHeading>Oops, nothing found...</AppHeading>
      <AppText>{location.pathname}</AppText>
      <Button maxW={94} mt="3" onClick={() => navigate({ to: ROUTES.AIRDROP })}>
        To main
      </Button>
    </Flex>
  );
};
export default NotFoundPage;
