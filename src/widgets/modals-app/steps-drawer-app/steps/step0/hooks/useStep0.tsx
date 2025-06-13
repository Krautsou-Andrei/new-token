import { useState } from 'react';

import { useIncomePage } from '@/features/income';

import { DEFAULT } from '@/shared/consts';

import { OPTIONS } from '../const';

export const useStep0 = () => {
  const [selectedOption, setSelectedOption] = useState(OPTIONS[1].value);
  const [percent, setPercent] = useState(DEFAULT.VIDEO_OVERLAY_BOTTOM);
  const [isLoading, setIsloading] = useState(false);

  const { state: stateIncome, functions: functionsIncome } = useIncomePage();

  const updatePercent = (value: number) => {
    if (value > 85) {
      setPercent(DEFAULT.VIDEO_OVERLAY_MAX_PERCENT);
      return;
    }

    if (value < 20) {
      setPercent(DEFAULT.VIDEO_OVERLAY_MIN_PERCENT);
      return;
    }

    const valueStr = value.toString();
    const digitsOnly = valueStr.replace(/\D/g, '').slice(0, 2);

    const safeValue = digitsOnly || DEFAULT.VIDEO_OVERLAY_BOTTOM;

    setPercent(safeValue);

    functionsIncome.updateOverlayParameters({
      bottom_offset_percent: safeValue,
    });
  };

  const updateSelectedOption = (value: string) => {
    setSelectedOption(value);
    let safeValue = DEFAULT.VIDEO_OVERLAY_BOTTOM;

    if (value === OPTIONS[0].value) {
      safeValue = DEFAULT.VIDEO_OVERLAY_TOP;
    }
    if (value === OPTIONS[1].value) {
      safeValue = DEFAULT.VIDEO_OVERLAY_BOTTOM;
    }

    setPercent(safeValue);

    functionsIncome.updateOverlayParameters({
      bottom_offset_percent: safeValue,
    });
  };

  return {
    state: { isLoading, selectedOption, percent, ...stateIncome },
    functions: {
      setSelectedOption,
      updateSelectedOption,
      setIsloading,
      updatePercent,
      ...functionsIncome,
    },
  };
};
