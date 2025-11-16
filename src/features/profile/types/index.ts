export interface Profile {
  id: number;
  fullName: string;
  bio: string;
  licenseNumber: string;
  rating: number;
  userId: string;
  userType: string;
}

export interface ProfileDto {
  userId: string;
  userType: string;
  fullName: string;
  licenseNumber: string;
  bio: string;
}