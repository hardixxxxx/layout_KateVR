'use strict';

import { initFaq } from "./faq";
import { initDropdown } from "./dropdown";
import { initForm, setActiveStep } from "./form";
import { initCardInputs } from "./cardInputs";
import { initSlider } from "./slider";
import { initSpecsShown } from "./techSpecs";

setActiveStep();
initFaq();
initDropdown();
initForm();
initCardInputs();
initSlider();
initSpecsShown();
