import { AboutSectionData } from "./about-section-data.model"
import { AddressSectionData } from "./address-section-data.model"
import { FeatureSectionsData } from "./features-section-data.model"

export interface AppData {
    features: FeatureSectionsData,
    about: AboutSectionData,
    address: AddressSectionData
  }
