import { Box, Flex } from '@chakra-ui/react';

import { AppLayoutBound } from '@/shared/ui/app-layout-bound';
import { AppPageHeading } from '@/shared/ui/typography/app-page-heading';

import { PrivacyPolicyDocApp } from './ui/privacy-policy-doc-app';

const PrivacyPolicyPage = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <AppLayoutBound>
      <Box pt={'40px'}>
        <AppPageHeading handleBack={handleBack} isBack></AppPageHeading>
      </Box>

      <Flex mt={10} justifyContent={'start'} textAlign={'start'}>
        <PrivacyPolicyDocApp />
      </Flex>
    </AppLayoutBound>
  );
};
export default PrivacyPolicyPage;
