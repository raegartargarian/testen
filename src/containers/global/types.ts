import { NETWORK_SERVER_NAMES } from "@/shared/utils/networks";
export interface JSONNft {
  vault: Vault;
  data: Data;
  env: ENV_TYPE;
}
export type ENV_TYPE = "DEVELOPMENT" | "TESTNET" | "MAINNET";

interface Data {
  image: string;
  nft_name: string;
}

interface Vault {
  nftId: string;
  ledger: NETWORK_SERVER_NAMES;
  streams: Stream[];
}

interface Stream {
  trait_type: string;
  description: string;
  value: string;
}
export interface PaginatedResponse<T> {
  content: T[];
  total_records: number;
  current_page: number;
  total_pages: number;
}
export interface TokenCodeModel {
  name: string;
  value: string;
}

export interface MovieInfo {
  title: string;
  director: string;
  year: number;
  duration: string;
  genre: string;
  description: string;
  longDescription: string;
  cast: string[];
  festivals: FestivalAward[];
  quotes: MovieQuote[];
  totalFractions: number;
  pricePerFraction: number;
  availableFractions: number;
}

export interface FestivalAward {
  name: string;
  award?: string;
  year: number;
  category?: string;
}

export interface MovieQuote {
  text: string;
  author: string;
  context?: string;
}

export interface GlobalState {}

export interface UserWeb3Model {
  email?: string;
  name?: string;
  profileImage?: string;
  typeOfLogin?: string;
  idToken?: string;
}

// Keep propertyData for backward compatibility during transition
export interface PropertyInfo {
  // Mandatory fixed fields
  nameOfProject: string;
  assetClass: string;
  assetManagerName: string;
  country: string;
  city: string;
  street: string;
  cityDistrict: string;
  plotArea: number; // in m²
  grossFloorArea: number; // in m²
  leasableArea: number; // in m²
  tenantMix: string;
  vacancyRate: number; // as %
  yearOfConstruction: number;
  propertyStatus: string;
  sustainabilityCertificate: string;

  // Optional variable fields
  assetId?: string;
  tokenIssuer?: string;
  tokenMarketplace?: string;
  foundedIn?: number;
  headquarter?: string;
  companySize?: string;
  linkedInProfile?: string;
  website?: string;
  locationQuality?: string;
  publicTransportConnection?: string;
  netDevelopableLand?: number; // in m²
  netAnnualRent?: number;
  remainingLeaseTerm?: string;
  buildingQuality?: string;
  carParkingSpaces?: number;
  numberOfFloors?: number;
  elevator?: boolean;
  totalEnergy?: number; // in kWh/(m²a)
  greenhouseGasEmissions?: number; // in kg CO₂/(m²a)

  // Location coordinates for map
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
