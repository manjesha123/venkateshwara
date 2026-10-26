import { Product, Machine } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'gran-01',
    name: 'Absolute Black Premium',
    category: 'Black',
    origin: 'Quarry Block Reserve, India',
    finishes: ['Polished', 'Honed', 'Leathered', 'Flamed'],
    thickness: '20mm, 30mm, Custom Cut',
    color: 'Deep Jet Black',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    description: 'Deep, uniform jet black granite processed directly via heavy-duty bridge cutting lines with high structural density and zero porosity.',
    technicalSpecs: {
      compressiveStrength: '210 MPa',
      waterAbsorption: '0.04%',
      density: '2,980 kg/m³',
      flexuralStrength: '22.5 MPa'
    }
  },
  {
    id: 'gran-02',
    name: 'Viscon White Imperial',
    category: 'White & Grey',
    origin: 'Quarry Reserve, India',
    finishes: ['Polished', 'Honed', 'Leathered'],
    thickness: '18mm, 20mm, 30mm',
    color: 'Striated White & Charcoal Silver',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    description: 'Dynamic flowing patterns of ivory white and silver charcoal. Precision-sliced on our plant bridge saws for architectural cladding.',
    technicalSpecs: {
      compressiveStrength: '185 MPa',
      waterAbsorption: '0.12%',
      density: '2,680 kg/m³',
      flexuralStrength: '18.2 MPa'
    }
  },
  {
    id: 'gran-03',
    name: 'Imperial Red Royal',
    category: 'Red & Pink',
    origin: 'Quarry Reserve, India',
    finishes: ['Polished', 'Flamed', 'Bush Hammered'],
    thickness: '20mm, 30mm, 50mm Monument Block',
    color: 'Ruby Crimson with Black Specks',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=800',
    description: 'Vibrant ruby-red field with dark mineral crystalline highlights, finished and organized in our covered factory storage bays.',
    technicalSpecs: {
      compressiveStrength: '225 MPa',
      waterAbsorption: '0.08%',
      density: '2,750 kg/m³',
      flexuralStrength: '20.1 MPa'
    }
  },
  {
    id: 'gran-04',
    name: 'Steel Grey Classic',
    category: 'White & Grey',
    origin: 'Quarry Reserve, India',
    finishes: ['Polished', 'Honed', 'Leathered', 'Flamed'],
    thickness: '18mm, 20mm, 30mm',
    color: 'Mid-toned Slate & Pewter Grey',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800',
    description: 'Consistent mid-tone slate grey granite featuring subtle mica metallic specks, stored in organized bundles for dispatch.',
    technicalSpecs: {
      compressiveStrength: '200 MPa',
      waterAbsorption: '0.06%',
      density: '2,790 kg/m³',
      flexuralStrength: '21.0 MPa'
    }
  }
];

export const INITIAL_MACHINERY: Machine[] = [
  {
    id: 'mach-01',
    name: 'Heavy-Duty Bridge Cutting Line',
    category: 'Primary Block Slicing',
    capacity: 'High-Precision Slab Slicing',
    origin: 'Factory Plant Floor',
    image: 'images/cutting.jpeg',
    description: 'Robust bridge cutting machinery operating inside our main processing shed for exact dimensional block trimming and slab cutting.'
  },
  {
    id: 'mach-02',
    name: 'Overhead Gantry Crane System',
    category: 'Material Handling & Yard Logistics',
    capacity: 'Heavy Block & Slab Transport',
    origin: 'Factory Yard & Shed',
    image: 'images/crane.jpeg',
    description: 'Yellow overhead gantry crane system used for seamlessly lifting and moving massive granite blocks across the cutting and storage bays.'
  },
  {
    id: 'mach-03',
    name: 'Multi-Blade Stone Cutting Saws',
    category: 'Secondary Processing',
    capacity: 'Continuous Batch Production',
    origin: 'Factory Processing Hall',
    image: 'images/multiblade.jpeg',
    description: 'Multiple automated cutting saw bays aligned in our indoor plant to maximize daily output of finished slabs and tiles.'
  }
];