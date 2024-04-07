import CalculationParameters from './CalculationParameters';
import { Rounding } from './Rounding';

const CalculationMethod = {
  // Singapore
  Singapore() {
    const params = new CalculationParameters('Singapore', 20, 18);
    // params.methodAdjustments.dhuhr = 1;
    params.methodAdjustments = {
      ...params.methodAdjustments,
      fajr: 1,
      sunrise: 2,
      dhuhr: 2,
      asr: 1,
      maghrib: 2,
    };
    params.rounding = Rounding.Up;
    return params;
  },
} as const;

export default CalculationMethod;
