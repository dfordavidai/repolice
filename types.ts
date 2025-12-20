
export enum CrimeType {
  THEFT = 'Theft/Robbery',
  ASSAULT = 'Assault',
  FRAUD = 'Fraud/Cybercrime',
  VANDALISM = 'Vandalism',
  KIDNAPPING = 'Kidnapping',
  DRUGS = 'Drug-related',
  OTHER = 'Other'
}

export enum UrgencyLevel {
  LOW = 'Low (Non-emergency)',
  MEDIUM = 'Medium',
  HIGH = 'High (Emergency)',
  CRITICAL = 'Critical (Life-threatening)'
}

export interface LocationData {
  latitude: number | null;
  longitude: number | null;
  address?: string;
}

export interface MediaFile {
  file: File;
  previewUrl: string;
  type: 'image' | 'video';
}

export interface CrimeReport {
  id: string;
  description: string;
  crimeType: CrimeType;
  urgency: UrgencyLevel;
  location: LocationData;
  media: MediaFile[];
  timestamp: string;
  status: 'pending' | 'received' | 'investigating' | 'resolved';
}

export interface AIAnalysisResponse {
  summary: string;
  suggestedAction: string;
  category: string;
  riskScore: number;
}
