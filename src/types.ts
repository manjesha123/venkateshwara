export type GraniteCategory = 'All' | 'Black' | 'White & Grey' | 'Red & Pink' | 'Exotic' | 'Custom Slabs';
export type SurfaceFinish = 'Polished' | 'Honed' | 'Flamed' | 'Leathered' | 'Bush Hammered';

export interface Product {
  id: string;
  name: string;
  category: GraniteCategory;
  origin: string;
  finishes: SurfaceFinish[];
  thickness: string;
  color: string;
  inStock: boolean;
  image: string;
  description: string;
  technicalSpecs: {
    compressiveStrength: string;
    waterAbsorption: string;
    density: string;
    flexuralStrength: string;
  };
}

export interface Machine {
  id: string;
  name: string;
  category: string;
  capacity: string;
  origin: string;
  image: string;
  description: string;
}